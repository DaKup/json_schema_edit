#![warn(clippy::all)]

use crate::platform;

fn save_(data: &[u8], filename: &str) {
    async fn run(data: Vec<u8>, filename: String) {
        platform::save_file(data, filename.as_str()).await;
    }

    platform::spawn_async(run(Vec::from(data), filename.to_string()));
}

pub fn save(app: &mut crate::MainApp, ctx: &egui::Context, frame: &mut eframe::Frame) {
    let filename = &app.state.filename;
    let data = &app.state.json;

    if filename.is_empty() {
        return;
    }

    save_(data, filename);
}
