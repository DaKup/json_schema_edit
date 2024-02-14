#![warn(clippy::all)]

use crate::platform;

fn open_(data: &mut std::sync::Arc<std::sync::Mutex<(Vec<u8>, String, bool)>>) {
    async fn run(data: std::sync::Arc<std::sync::Mutex<(Vec<u8>, String, bool)>>) {
        let file_handle = rfd::AsyncFileDialog::new()
            .add_filter("JSON Scheme", &["json"])
            // .pick_files()
            .pick_file()
            .await;

        if file_handle.is_none() {
            return;
        }

        // let mut all_data = String::new();

        match &file_handle {
            Some(file_handle) => {
                let content = file_handle.read().await;
                let filename = file_handle.file_name();

                *data.lock().unwrap() = (content, filename, true);
            }
            None => {}
        };

        // let content = file_handle.unwrap().read().await;
        // let filename = file_handle.unwrap().file_name();

        // let file_handles = file_handle.unwrap();
        // for file_handle in file_handles {
        //     let data = file_handle.read().await;
        //     let data = String::from_utf8_lossy(&data).to_string();
        //     all_data.push_str(&data);
        //     all_data.push_str("\n---\n");
        // }
        // *markdown_content.lock().unwrap() = all_data;
        // overwrite_input.store(true, Ordering::Relaxed);
    }

    platform::spawn_async(run(
        data.clone(), // self.state.markdown_content_backbuffer.clone(),
                      // self.state.overwrite_input.clone(),
    ));
}

pub fn open(app: &mut crate::MainApp, _ctx: &egui::Context, _frame: &mut eframe::Frame) {
    // let data = std::sync::Arc::new(std::sync::Mutex::new((vec![], String::to_owned(""), false)));

    // let data = &app.state.input_json;

    open_(&mut app.state.input_json);
}
