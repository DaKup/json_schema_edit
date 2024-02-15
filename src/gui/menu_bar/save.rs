#![warn(clippy::all)]

use serde::Serialize;

use crate::platform;

fn save_(data: &[u8], filename: &str) {
    async fn run(data: Vec<u8>, filename: String) {
        platform::save_file(data, filename.as_str()).await;
    }

    platform::spawn_async(run(Vec::from(data), filename.to_string()));
}

pub fn save(app: &mut crate::MainApp, _ctx: &egui::Context, _frame: &mut eframe::Frame) {
    let filename = &app.state.filename;

    if filename.is_empty() {
        return;
    }

    let mut data = Vec::new();
    let mut serializer = serde_jsonc::Serializer::with_formatter(
        &mut data,
        serde_jsonc::ser::PrettyFormatter::with_indent(b"    "),
    );
    app.state.json_hash_map.serialize(&mut serializer).unwrap();

    save_(&data, filename);
}
