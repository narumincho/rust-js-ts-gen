pub mod data;
pub mod toString;

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
