#[derive(Debug, Eq, PartialEq)]
pub struct Identifer {
    value: String,
}

/// Identifer の中身の文字を取得する
pub fn get(identifer: &Identifer) -> String {
    identifer.value.clone()
}

pub fn from_string(word: &str) -> Identifer {
    let mut chars = word.chars();
    let first_char = chars.next();
    Identifer {
        value: match first_char {
            None => "$00".to_string(),
            Some(first_char) => {
                let mut result = to_safe_first_char(&first_char);
                for char in chars {
                    result.push_str(&to_safe_string(&char))
                }
                let r: &str = &result;
                if reserved_by_language_word_set.contains(&&r) {
                    result + "_"
                } else {
                    result
                }
            }
        },
    }
}

#[test]
fn test_from_string() {
    assert_eq!(
        from_string("a"),
        Identifer {
            value: String::from("a")
        }
    );
    assert_eq!(
        from_string("this"),
        Identifer {
            value: String::from("this_")
        }
    );
}

fn to_safe_first_char(char: &char) -> String {
    if firstSafeCharSet.contains(&char) {
        char.to_string()
    } else {
        escape_char(&char)
    }
}

const firstSafeCharSet: [char; 54] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '$', '_',
];

const safeCharSet: [char; 64] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '$', '_', '0', '1', '2',
    '3', '4', '5', '6', '7', '8', '9',
];

fn to_safe_string(char: &char) -> String {
    if safeCharSet.contains(&char) {
        String::from(*char)
    } else {
        escape_char(&char)
    }
}

fn escape_char(char: &char) -> String {
    format!("${codePoint:x}", codePoint = *char as u32)
}

#[test]
fn test_escape_char() {
    assert_eq!(escape_char(&'a'), String::from("$61"));
    assert_eq!(escape_char(&'あ'), String::from("$3042"));
}

const reserved_by_language_word_set: [&str; 68] = [
    "await",
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "export",
    "extends",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
    "let",
    "static",
    "enum",
    "implements",
    "package",
    "protected",
    "interface",
    "private",
    "public",
    "null",
    "true",
    "false",
    "any",
    "boolean",
    "constructor",
    "declare",
    "get",
    "module",
    "require",
    "number",
    "set",
    "string",
    "symbol",
    "type",
    "from",
    "of",
    "as",
    "unknown",
    "Infinity",
    "NaN",
    "undefined",
    "top",
    "closed",
    "self",
];

///
/// ```ts
/// ({ await: 32 }.await)
/// ({ "": "empty"}[""])
/// ```
/// プロパティ名として直接コードで指定できるかどうか
/// `isIdentifer`とは予約語を指定できるかの面で違う
///
pub fn is_safe_property_name(word: &str) -> bool {
    let mut chars = word.chars();
    match chars.next() {
        None => false,
        Some(first_char) => {
            if !firstSafeCharSet.contains(&first_char) {
                false
            } else {
                chars.all(|char| safeCharSet.contains(&char))
            }
        }
    }
}
