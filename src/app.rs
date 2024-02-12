#![warn(clippy::all)]

// use crate::gui;
// use crate::gui::OnClickedButtonTrait;
use crate::processing::{self};

#[derive(serde::Deserialize, serde::Serialize, Default)]
#[serde(default)]
pub struct MainApp {
    #[serde(skip)]
    pub state: processing::ProcessingState,
    // #[serde(skip)]
    // pub outputs: gui::Outputs,
}

impl MainApp {
    pub fn new(cc: &eframe::CreationContext<'_>) -> Self {
        if let Some(storage) = cc.storage {
            return eframe::get_value(storage, eframe::APP_KEY).unwrap_or_default();
        }
        Default::default()
    }
}

impl eframe::App for MainApp {
    fn update(&mut self, ctx: &egui::Context, frame: &mut eframe::Frame) {
        // egui::TopBottomPanel::top("top_panel").show(ctx, |ui| {
        //     egui::menu::bar(ui, |ui| {
        //         ui.menu_button("File", |ui| {
        //             if ui.button("Open").clicked() {
        //                 self.on_clicked_open();
        //             }
        //             if ui.button("Save").clicked() {
        //                 self.on_clicked_save();
        //             }
        //         });
        //     });
        // });

        crate::gui::menu_bar::menu_bar(self, ctx, frame);

        // egui::CentralPanel::default().show(ctx, |ui| {
        //     gui::central_panel(self, ctx, _frame, ui);
        // });

        crate::gui::central_panel::central_panel(self, ctx, frame);

        self.state.update();
    }

    fn save(&mut self, storage: &mut dyn eframe::Storage) {
        eframe::set_value(storage, eframe::APP_KEY, self);
    }
}
