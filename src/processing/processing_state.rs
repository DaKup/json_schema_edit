#![warn(clippy::all)]

use serde_jsonc::Value;

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub enum ViewerMode {
    Editor,
    Markdown,
    #[default]
    Both,
}

#[derive(Debug, Clone, Default)]
pub struct ProcessingState {
    pub input_json: std::sync::Arc<std::sync::Mutex<(Vec<u8>, String, bool)>>,
    pub json: Vec<u8>,
    pub filename: String,

    pub json_hash_map: std::collections::BTreeMap<String, serde_jsonc::Value>,

    pub description: String,

    pub viewer_mode: ViewerMode,

    pub visibility_hash_map: std::collections::HashMap<String, bool>,
}

impl ProcessingState {
    pub fn update(&mut self) {
        self.check_file_opened();
    }

    fn check_file_opened(&mut self) {
        let mut input_json = self.input_json.lock().unwrap();
        if !input_json.2 {
            return;
        }

        self.json = (*input_json.0).to_vec();
        self.filename = (*input_json.1).to_string();
        input_json.2 = false;

        drop(input_json);

        self.json_hash_map = serde_jsonc::from_slice(&self.json).unwrap();

        self.visibility_hash_map.clear();
        self.json_hash_map.iter().for_each(|(key, value)| {
            init_visibility_states(&mut self.visibility_hash_map, key, value, vec!["root"]);
        });
    }
}

fn init_visibility_states(
    visibility_hash_map: &mut std::collections::HashMap<String, bool>,
    key: &str,
    value: &serde_jsonc::Value,
    path: Vec<&str>,
) {
    let parent_key = key;
    match &value {
        Value::Object(object_value) => {
            object_value.iter().for_each(|(key, value)| {
                let mut path = path.clone();
                path.push(parent_key);
                init_visibility_states(visibility_hash_map, key, value, path);
            });
        }
        Value::String(_string_value) if key == "description" => {
            let key = path_to_key(&path);

            visibility_hash_map.insert(key, false);
        }
        _ => {}
    }
}

pub fn path_to_key(path: &[&str]) -> String {
    path.join("->")
}
