#![warn(clippy::all)]
#![cfg(target_arch = "wasm32")]

use eframe::wasm_bindgen::JsCast;
use web_sys::{Blob, HtmlAnchorElement, Url};

#[allow(dead_code)]
pub fn download_bytes(bytes: impl AsRef<[u8]>, file_name: &str) {
    let bytes = bytes.as_ref();
    let window = web_sys::window().unwrap();
    let document = window.document().unwrap();
    let body = document.body().unwrap();
    let a: HtmlAnchorElement = document.create_element("a").unwrap().dyn_into().unwrap();
    a.style().set_css_text("display: none;");
    a.set_download(file_name);
    body.append_child(&a).unwrap();
    let blob_parts = js_sys::Array::new_with_length(1);
    let u8_view = unsafe { js_sys::Uint8Array::view(bytes) };
    blob_parts.set(0, u8_view.dyn_into().unwrap());
    let blob = Blob::new_with_buffer_source_sequence(blob_parts.as_ref()).unwrap();
    let url = Url::create_object_url_with_blob(&blob).unwrap();
    a.set_href(&url);
    a.click();
    Url::revoke_object_url(&url).unwrap();
}
