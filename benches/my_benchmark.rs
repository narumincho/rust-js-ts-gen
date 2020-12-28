use criterion::{black_box, criterion_group, criterion_main, Criterion};
use rust_js_ts_gen::data;
use rust_js_ts_gen::to_string;
use rust_js_ts_gen::util;

fn criterion_benchmark(c: &mut Criterion) {
    let sample_server_code: data::Code = data::Code {
        export_definition_list: vec![data::ExportDefinition::Function(data::Function {
            name: data::identifer::from_string("middleware"),
            document: String::from("ミドルウェア"),
            type_parameter_list: vec![],
            parameter_list: vec![
                data::ParameterWithDocument {
                    name: data::identifer::from_string("request"),
                    document: String::from("リクエスト"),
                    r#type: data::Type::ImportedType(data::ImportedType {
                        module_name: String::from("express"),
                        name: data::identifer::from_string("Request"),
                    }),
                },
                data::ParameterWithDocument {
                    name: data::identifer::from_string("response"),
                    document: String::from("レスポンス"),
                    r#type: data::Type::ImportedType(data::ImportedType {
                        module_name: String::from("express"),
                        name: data::identifer::from_string("Response"),
                    }),
                },
            ],
            return_type: data::Type::Void,
            statement_list: vec![
                data::Statement::VariableDefinition(data::VariableDefinitionStatement {
                    name: data::identifer::from_string("accept"),
                    r#type: data::Type::Union(Box::new(vec![
                        data::Type::String,
                        data::Type::Undefined,
                    ])),
                    is_const: true,
                    expr: util::get(
                        util::get(
                            data::Expr::Variable(data::identifer::from_string("request")),
                            "headers",
                        ),
                        "accept",
                    ),
                }),
                data::Statement::If(data::IfStatement {
                    condition: (util::logical_and(
                        util::not_equal(
                            data::Expr::Variable(data::identifer::from_string("accept")),
                            data::Expr::UndefinedLiteral,
                        ),
                        util::call_method(
                            data::Expr::Variable(data::identifer::from_string("accept")),
                            "includes",
                            vec![data::Expr::StringLiteral(String::from("text/html"))],
                        ),
                    )),
                    then_statement_list: vec![data::Statement::EvaluateExpr(util::call_method(
                        data::Expr::Variable(data::identifer::from_string("response")),
                        "setHeader",
                        vec![
                            data::Expr::StringLiteral(String::from("content-type")),
                            data::Expr::StringLiteral(String::from("text/html")),
                        ],
                    ))],
                }),
            ],
        })],
        statement_list: vec![],
    };
    c.bench_function("to_string", |b| {
        b.iter(|| to_string::to_string(black_box(&sample_server_code), &data::CodeType::JavaScript))
    });
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);
