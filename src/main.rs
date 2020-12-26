mod data;
mod toString;

fn main() {
    println!("Hello, world!");
}

#[test]
fn test() {
    assert_eq!(
        toString::to_string(
            data::Code {
                export_definition_list: vec![],
                statement_list: vec![]
            },
            data::CodeType::JavaScript
        ),
        ""
    );
}
