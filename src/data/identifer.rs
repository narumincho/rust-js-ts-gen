pub struct Identifer {
    value: String,
}

pub fn from_string(word: String) -> Identifer {
    let mut chars = word.chars();
    let first_char = chars.next();
    Identifer {
        value: match first_char {
            None => "$00".to_string(),
            Some(first_char) => {
                let mut result = to_safe_first_char(first_char);
                for char in chars {
                    result.push_str(&to_safe_string(char))
                }
                result
            }
        },
    }
}

fn to_safe_first_char(char: char) -> String {
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

fn to_safe_string<'a>(char: char) -> String {
    if safeCharSet.contains(&char) {
        String::from(char)
    } else {
        escape_char(&char)
    }
}

fn escape_char(char: &char) -> String {
    format!("${codePoint:x}", codePoint = *char as u32)
}

#[test]
fn escape_char_a() {
    assert_eq!(escape_char(&'a'), String::from("$61"));
    assert_eq!(escape_char(&'あ'), String::from("$3042"));
}
