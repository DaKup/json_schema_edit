#![warn(clippy::all)]

use std::ops::Add;

use serde_jsonc::Value;

use crate::processing::ViewerMode;

pub fn deep_hash_map(
    ctx: &egui::Context,
    frame: &mut eframe::Frame,
    ui: &mut egui::Ui,
    key: &str,
    mut value: &mut serde_jsonc::Value,
    available_width: f32,
    viewer_mode: &ViewerMode,
    path: Vec<&str>,
) {
    let parent_key = key;
    match &mut value {
        Value::Object(object_value) => {
            object_value.iter_mut().for_each(|(key, value)| {
                let mut path = path.clone();
                path.push(parent_key);
                deep_hash_map(
                    ctx,
                    frame,
                    ui,
                    key,
                    value,
                    available_width,
                    viewer_mode,
                    path,
                );
            });
        }
        Value::String(string_value) => {
            if key == "description" {
                ui.label("");
                ui.label(path.join(" -> ").add(":")).highlight();

                ui.horizontal(|ui| {
                    ui.vertical(|ui| match viewer_mode {
                        ViewerMode::Editor | ViewerMode::Both => {
                            let theme =
                                egui_extras::syntax_highlighting::CodeTheme::from_memory(ui.ctx());
                            let language = "md";

                            let mut layouter = |ui: &egui::Ui, string: &str, wrap_width: f32| {
                                let mut layout_job = egui_extras::syntax_highlighting::highlight(
                                    ui.ctx(),
                                    &theme,
                                    string,
                                    language,
                                );
                                layout_job.wrap.max_width = wrap_width;
                                ui.fonts(|f| f.layout_job(layout_job))
                            };

                            ui.add(
                                egui::TextEdit::multiline(string_value)
                                    .code_editor()
                                    .desired_rows(1)
                                    .desired_width(available_width / 2.0)
                                    .layouter(&mut layouter),
                            );
                        }
                        ViewerMode::Markdown => {}
                    });
                    ui.vertical(|ui| {
                        match viewer_mode {
                            ViewerMode::Markdown | ViewerMode::Both => {
                                let mut cache = egui_commonmark::CommonMarkCache::default();
                                egui_commonmark::CommonMarkViewer::new("markdown_viewer2")
                                    .max_image_width(Some(512))
                                    .default_width(Some((available_width / 2.0) as usize))
                                    .show(
                                        ui,
                                        &mut cache,
                                        string_value,
                                        // &markdown,
                                    );
                            }
                            ViewerMode::Editor => {}
                        }
                    });
                });
            }
        }
        _ => {}
    }
}
