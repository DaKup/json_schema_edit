#![warn(clippy::all)]

mod deep_hash_map;

use crate::processing::ViewerMode;

pub fn central_panel(app: &mut crate::MainApp, ctx: &egui::Context, frame: &mut eframe::Frame) {
    egui::CentralPanel::default().show(ctx, |ui| {
        let available_width = ui.available_width();
        let available_height = ui.available_height();

        ui.horizontal_top(|ui| {
            for viewer_mode in [ViewerMode::Editor, ViewerMode::Markdown, ViewerMode::Both] {
                ui.radio_value(
                    &mut app.state.viewer_mode,
                    viewer_mode.clone(),
                    format!("{:?}", viewer_mode),
                );
            }
        });

        ui.vertical(|ui| {
            egui::ScrollArea::vertical()
                .min_scrolled_height(available_height)
                .show(ui, |ui| {
                    app.state.json_hash_map.iter_mut().for_each(|(key, value)| {
                        deep_hash_map::deep_hash_map(
                            ctx,
                            frame,
                            ui,
                            key,
                            value,
                            available_width,
                            &app.state.viewer_mode,
                            vec!["root"],
                        );
                    });
                })
        });
    });
}
