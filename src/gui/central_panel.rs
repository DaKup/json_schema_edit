#![warn(clippy::all)]

// mod open;
// mod save;

use std::ops::Add;

use serde_jsonc::Value;

fn deep_hash_map(
    ctx: &egui::Context,
    frame: &mut eframe::Frame,
    ui: &mut egui::Ui,
    key: &str,
    mut value: &mut serde_jsonc::Value,
    available_width: f32,
    path: Vec<&str>,
) {
    let parent_key = key;
    match &mut value {
        Value::Object(object_value) => {
            object_value.iter_mut().for_each(|(key, value)| {
                let mut path = path.clone();
                path.push(parent_key);
                deep_hash_map(ctx, frame, ui, key, value, available_width, path);
            });
        }
        Value::String(string_value) => {
            if key == "description" {
                ui.label("");
                ui.label(path.join(" -> ").add(":")).highlight();

                ui.horizontal(|ui| {
                    ui.vertical(|ui| {
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
                                .code_editor() // .desired_rows(100)
                                .desired_width(available_width / 2.0)
                                .layouter(&mut layouter),
                        );
                    });

                    // let mut cache = egui_commonmark::CommonMarkCache::default();
                    // egui_commonmark::CommonMarkViewer::new("viewer").show(ui, &mut cache, &markdown);

                    ui.vertical(|ui| {
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
                    });
                });
            }
        }
        _ => {}
    }
}

pub fn central_panel(app: &mut crate::MainApp, ctx: &egui::Context, frame: &mut eframe::Frame) {
    egui::CentralPanel::default().show(ctx, |ui| {
        // screen size:
        let available_width = ui.available_width();
        let available_height = ui.available_height();

        ui.vertical(|ui| {
            egui::ScrollArea::vertical()
                .min_scrolled_height(available_height)
                .show(ui, |ui| {
                    app.state.json_hash_map.iter_mut().for_each(|(key, value)| {
                        deep_hash_map(ctx, frame, ui, key, value, available_width, vec!["root"]);
                    });
                })
        });
    });
}

// // screen size:
// let available_width = ui.available_width();
// let available_height = ui.available_height();

// //         let markdown =
// // r"# Hello world

// // * A list
// // * [ ] Checkbox
// // ";
// // // Stores image handles between each frame
// // let mut cache = egui_commonmark::CommonMarkCache::default();
// // egui_commonmark::CommonMarkViewer::new("viewer").show(ui, &mut cache, &markdown);

// let mut cache = egui_commonmark::CommonMarkCache::default();
// egui_commonmark::CommonMarkViewer::new("markdown_viewer2")
//     .max_image_width(Some(512))
//     .default_width(Some((available_width / 2.0) as usize))
//     .show(
//         ui,
//         &mut cache,
//         &app.state.description,
//         // &markdown,
//     );

// egui::ScrollArea::horizontal()
//     .min_scrolled_width(available_width)
//     .show(ui, |ui| {
//         ui.style_mut().wrap = Some(false);

//         ui.horizontal(|ui| {
//             egui::ScrollArea::vertical()
//                 .min_scrolled_height(available_height)
//                 .show(ui, |ui| {
//                     ui.style_mut().wrap = Some(false);

//                     // let mut cache = egui_commonmark::CommonMarkCache::default();
//                     // egui_commonmark::CommonMarkViewer::new("markdown_viewer")
//                     // .max_image_width(Some(512))
//                     // .default_width(Some((available_width / 2.0) as usize))
//                     // .show(
//                     //     ui,
//                     //     &mut cache,
//                     //     &app.state.description,
//                     //     // &markdown,
//                     // );

//                     let theme =
//                         egui_extras::syntax_highlighting::CodeTheme::from_memory(ui.ctx());
//                     let language = "md";

//                     let mut layouter = |ui: &egui::Ui, string: &str, wrap_width: f32| {
//                         let mut layout_job = egui_extras::syntax_highlighting::highlight(
//                             ui.ctx(),
//                             &theme,
//                             string,
//                             language,
//                         );
//                         layout_job.wrap.max_width = wrap_width;
//                         ui.fonts(|f| f.layout_job(layout_job))
//                     };

//                     ui.add(
//                         egui::TextEdit::multiline(&mut app.state.description)
//                             .code_editor()
//                             .desired_rows(100)
//                             .desired_width(available_width / 2.0)
//                             .layouter(&mut layouter),
//                     );

//                     // let mut cache = egui_commonmark::CommonMarkCache::default();
//                     // egui_commonmark::CommonMarkViewer::new("markdown_viewer")
//                     // .max_image_width(Some(512))
//                     // .default_width(Some((available_width / 2.0) as usize))
//                     // .show(
//                     //     ui,
//                     //     &mut cache,
//                     //     &app.state.description,
//                     //     // &markdown,
//                     // );
//                 })
//         });
//     });
