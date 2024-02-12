#![warn(clippy::all, rust_2018_idioms)]

mod app;
pub use app::MainApp;

mod gui;
mod platform;
mod processing;
