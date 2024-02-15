#![warn(clippy::all)]

use crate::platform;

fn open_(data: &mut std::sync::Arc<std::sync::Mutex<(Vec<u8>, String, bool)>>) {
    async fn run(data: std::sync::Arc<std::sync::Mutex<(Vec<u8>, String, bool)>>) {
        let file_handle = rfd::AsyncFileDialog::new()
            .add_filter("JSON Schema", &["json"])
            .pick_file()
            .await;

        if file_handle.is_none() {
            return;
        }

        match &file_handle {
            Some(file_handle) => {
                let content = file_handle.read().await;
                let filename = file_handle.file_name();

                *data.lock().unwrap() = (content, filename, true);
            }
            None => {}
        };
    }

    platform::spawn_async(run(data.clone()));
}

pub fn open(app: &mut crate::MainApp, _ctx: &egui::Context, _frame: &mut eframe::Frame) {
    open_(&mut app.state.input_json);
}
