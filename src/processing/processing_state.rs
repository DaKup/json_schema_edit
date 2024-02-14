#![warn(clippy::all)]

#[derive(Debug, Clone, Default, PartialEq, Eq)]
pub enum ViewerMode {
    #[default]
    Editor,
    Markdown,
    Both,
}

#[derive(Debug, Clone, Default)]
pub struct ProcessingState {
    pub input_json: std::sync::Arc<std::sync::Mutex<(Vec<u8>, String, bool)>>,
    pub json: Vec<u8>,
    pub filename: String,

    pub json_hash_map: std::collections::HashMap<String, serde_jsonc::Value>,

    pub description: String,

    pub viewer_mode: ViewerMode,
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
    }
}
