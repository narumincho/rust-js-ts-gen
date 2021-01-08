# rust-js-ts-gen

名前が最高に分かりづらいが, https://github.com/narumincho/js-ts-code-generator の Rust 実装.

- [crates.io](https://crates.io/crates/rust_js_ts_gen)
- [npm](https://www.npmjs.com/package/rust_js_ts_gen)

WASM で 動かそうとしたが wasm-bindgen が パラメーター付きの enum をサポートしていながために, 呼び出せない状況
serde + bincode 使えば良さそうだが...

現状 TypeScript で実装されたのを使おうかな
