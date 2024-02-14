#![warn(clippy::all)]

#[derive(Debug, Clone, Default)]
pub struct ProcessingState {
    pub input_json: std::sync::Arc<std::sync::Mutex<(Vec<u8>, String, bool)>>,
    pub json: Vec<u8>,
    pub filename: String,

    pub json_hash_map: std::collections::HashMap<String, serde_jsonc::Value>,

    pub description: String,
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

        // self.parse_json();
    }

    // fn recursive_json(parent: &str, node: std::collections::HashMap<String, serde_jsonc::Value>) {
    //     for (key, value) in node {
    //         // println!("key: {:?}", key);
    //         // println!("value: {:?}", value);

    //         match value {
    //             serde_jsonc::Value::String(description) => {
    //                 if key == "description" {
    //                     println!("key: {:?}", key);
    //                     println!("description: {:?}", description);
    //                 }
    //             }
    //             serde_jsonc::Value::Array(inner) => {
    //                 // self.parse_json()
    //                 // recursive_json();
    //             }
    //             _ => {}
    //         }
    //     }
    // }

    // fn parse_json(&mut self) {
    //     let json_hash_map: std::collections::HashMap<String, serde_jsonc::Value> =
    //         serde_jsonc::from_slice(&self.json).unwrap();

    //     for (key, value) in json_hash_map {
    //         // println!("key: {:?}", key);
    //         // println!("value: {:?}", value);

    //         match value {
    //             serde_jsonc::Value::String(description) => {
    //                 if key == "description" {
    //                     println!("key: {:?}", key);
    //                     println!("description: {:?}", description);

    //                     self.description = description;
    //                 }
    //             }
    //             serde_jsonc::Value::Array(inner) => {
    //                 // self.parse_json()
    //             }
    //             _ => {}
    //         }
    //     }
    // }
}
