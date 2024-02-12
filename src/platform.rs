#![warn(clippy::all)]

mod native;
mod web;

#[allow(dead_code)]
pub fn spawn_async<F: std::future::Future<Output = ()> + 'static>(fut: F) {
    #[cfg(not(target_arch = "wasm32"))]
    pollster::block_on(fut);

    #[cfg(target_arch = "wasm32")]
    wasm_bindgen_futures::spawn_local(fut);
}

pub async fn save_file(bytes: impl AsRef<[u8]>, filename: &str) {
    #[cfg(not(target_arch = "wasm32"))]
    {
        let _ = filename;
        native::save_file_dialog(bytes).await;
    }

    #[cfg(target_arch = "wasm32")]
    web::download_bytes(bytes, filename);
}
