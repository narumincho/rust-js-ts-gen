use criterion::{black_box, criterion_group, criterion_main, Criterion};
use rust_js_ts_gen;
use rust_js_ts_gen::data;
use rust_js_ts_gen::to_string;

fn criterion_benchmark(c: &mut Criterion) {
    c.bench_function("to_string", |b| {
        b.iter(|| {
            to_string::to_string(
                black_box(&rust_js_ts_gen::sample_code()),
                &data::CodeType::JavaScript,
            )
        })
    });
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);
