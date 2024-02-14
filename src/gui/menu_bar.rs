#![warn(clippy::all)]

mod open;
mod save;

pub fn menu_bar(app: &mut crate::MainApp, ctx: &egui::Context, frame: &mut eframe::Frame) {
    egui::TopBottomPanel::top("top_panel").show(ctx, |ui| {
        egui::menu::bar(ui, |ui| {
            ui.menu_button("File", |ui| {
                if ui.button("Open").clicked() {
                    open::open(app, ctx, frame);
                }
                if ui.button("Save").clicked() {
                    save::save(app, ctx, frame);
                }
            });

            ui.centered_and_justified(|ui| {
                if app.state.filename.is_empty() {
                    ui.label("Click File -> Open -> [json schema file]")
                        .highlight();
                } else {
                    ui.label(&app.state.filename).highlight();
                }
            });
        });
    });
}
