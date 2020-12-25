pub enum CodeType {
    JavaScript,
    TypeScript,
}

/**
 * TypeScriptやJavaScriptのコードを表現する. TypeScriptでも出力できるように型情報をつける必要がある
 */
struct Code {
    /**
     * 外部に公開する定義
     */
    export_definition_list: Vec<ExportDefinition>,
    /**
     * 定義した後に実行するコード
     */
    statementList: Vec<Statement>,
}

/**
 * 外部に公開する定義
 */
enum ExportDefinition {
    TypeAlias(TypeAlias),
    Function(Function),
    Variable(Variable),
}

/**
 *
 * TypeAlias. `export type T = {}`
 */
struct TypeAlias {
    name: Identifer,
    type_parameter_list: Vec<String>,
    document: String,
    r#type: Type,
}

struct Function {
    /**
     * 外部に公開する関数の名前
     */
    name: Identifer,
    /**
     * ドキュメント
     */
    document: String,
    /**
     * 型パラメーターのリスト
     */
    typeParameterList: Vec<Identifer>,
    /**
     * パラメーター
     */
    parameterList: Vec<ParameterWithDocument>,
    /**
     * 戻り値の型
     */
    returnType: Type,
    /**
     * 関数の本体
     */
    statementList: Vec<Statement>,
}
/**
 * ドキュメント付きの関数のパラメーター. パラメーター名, ドキュメント, 型
 */
struct ParameterWithDocument {
    /**
     * パラメーター名
     */
    name: Identifer,
    /**
     * ドキュメント
     */
    document: String,
    /**
     * パラメーターの型
     */
    r#type: Type,
}

/**
 * 関数のパラメーター. パラメーター名, ドキュメント
 */
struct Parameter {
    /**
     * パラメーター名
     */
    name: Identifer,
    /**
     * パラメーターの型
     */
    r#type: Type,
}

struct Variable {
    /**
     * 変数の名前
     */
    name: Identifer,
    /**
     * ドキュメント
     */
    document: String,
    /**
     * 変数の型
     */
    r#type: Type,
    /**
     * 変数の式
     */
    expr: Expr,
}

/**
 * 単項演算子
 */
enum UnaryOperator {
    Minus,
    BitwiseNot,
    LogicalNot,
}

/**
 * 2項演算子
 */
enum BinaryOperator {
    Exponentiation,
    Multiplication,
    Division,
    Remainder,
    Addition,
    Subtraction,
    LeftShift,
    SignedRightShift,
    UnsignedRightShift,
    LessThan,
    LessThanOrEqual,
    Equal,
    NotEqual,
    BitwiseAnd,
    BitwiseXOr,
    BitwiseOr,
    LogicalAnd,
    LogicalOr,
}

/**
 * 式
 */
enum Expr {
    NumberLiteral(i32),
    StringLiteral(String),
    BooleanLiteral(bool),
    NullLiteral,
    UndefinedLiteral,
    UnaryOperator(Box<UnaryOperatorExpr>),
    BinaryOperator(Box<BinaryOperatorExpr>),
    ConditionalOperator(Box<ConditionalOperatorExpr>),
    ArrayLiteral(Box<Vec<ArrayItem>>),
    ObjectLiteral(Box<Vec<Member>>),
    Lambda(Box<LambdaExpr>),
    Variable(Identifer),
    GlobalObjects(Identifer),
    ImportedVariable(Box<ImportedVariable>),
    Get(Box<GetExpr>),
    Call(Box<CallExpr>),
    New(Box<CallExpr>),
    TypeAssertion(Box<TypeAssertion>),
}

enum Statement {
    EvaluateExpr(Expr),
    Set(SetStatement),
    If(IfStatement),
    ThrowError(Expr),
    Return(Expr),
    ReturnVoid,
    Continue,
    VariableDefinition(VariableDefinitionStatement),
    FunctionDefinition(FunctionDefinitionStatement),
    For(ForStatement),
    ForOf(ForOfStatement),
    WhileTrue(Vec<Statement>),
    Break,
    Switch(SwitchStatement),
}

/**
 * 型
 */
enum Type {
    Number,
    String,
    Boolean,
    Undefined,
    Null,
    Never,
    Void,
    Object(Box<Vec<MemberType>>),
    Function(Box<FunctionType>),
    WithTypeParameter(Box<TypeWithTypeParameter>),
    Union(Box<Vec<Type>>),
    Intersection(Box<IntersectionType>),
    ImportedType(ImportedType),
    ScopeInFile(Identifer),
    ScopeInGlobal(Identifer),
    StringLiteral(String),
}
/**
 * 単項演算子と適用される式
 */
struct UnaryOperatorExpr {
    /**
     * 単項演算子
     */
    operator: UnaryOperator,
    /**
     * 適用される式
     */
    expr: Expr,
}

/**
 * 2項演算子と左右の式
 */
struct BinaryOperatorExpr {
    /**
     * 2項演算子
     */
    operator: BinaryOperator,
    /**
     * 左の式
     */
    left: Expr,
    /**
     * 右の式
     */
    right: Expr,
}
/**
 * 条件演算子
 */
struct ConditionalOperatorExpr {
    /**
     * 条件の式
     */
    condition: Expr,
    /**
     * 条件がtrueのときに評価される式
     */
    thenExpr: Expr,
    /**
     * 条件がfalseのときに評価される式
     */
    elseExpr: Expr,
}
/**
 * 配列リテラルの要素
 */
struct ArrayItem {
    /**
     * 式
     */
    expr: Expr,
    /**
     * スプレッド ...a のようにするか
     */
    spread: bool,
}
/**
 * オブジェクトリテラルの要素
 */
enum Member {
    Spread(Expr),
    KeyValue(KeyValue),
}

/**
 * 文字列のkeyと式のvalue
 */
struct KeyValue {
    /**
     * key
     */
    key: String,
    /**
     * value
     */
    value: Expr,
}
/**
 * ラムダ式
 */
struct LambdaExpr {
    /**
     * パラメーターのリスト
     */
    parameterList: Vec<Parameter>,
    /**
     * 型パラメーターのリスト
     */
    typeParameterList: Vec<Identifer>,
    /**
     * 戻り値の型
     */
    returnType: Type,
    /**
     * ラムダ式本体
     */
    statementList: Vec<Statement>,
}

/**
 * インポートした変数
 */
struct ImportedVariable {
    /**
     * モジュール名, 使うときにはnamedインポートされ, そのモジュール識別子は自動的につけられる
     */
    moduleName: String,
    /**
     * 変数名
     */
    name: Identifer,
}
/**
 * プロパティアクセス
 */
struct GetExpr {
    /**
     * 式
     */
    expr: Expr,
    /**
     * プロパティの式
     */
    propertyExpr: Expr,
}

/**
 * 式と呼ぶパラメーター
 */
struct CallExpr {
    /**
     * 呼ばれる式
     */
    expr: Expr,
    /**
     * パラメーター
     */
    parameterList: Vec<Expr>,
}

/**
 * 型アサーション
 */
struct TypeAssertion {
    /**
     * 型アサーションを受ける式
     */
    expr: Expr,
    /**
     * 型
     */
    r#type: Type,
}

/**
 * 代入文
 */
struct SetStatement {
    /**
     * 対象となる式. 指定の仕方によってはJSのSyntaxErrorになる
     */
    target: Expr,
    /**
     * 演算子を=の左につける
     */
    operatorMaybe: Option<BinaryOperator>,
    /**
     * 式
     */
    expr: Expr,
}

/**
 * if文
 */
struct IfStatement {
    /**
     * 条件の式
     */
    condition: Expr,
    /**
     * 条件がtrueのときに実行する文
     */
    thenStatementList: Vec<Statement>,
}

/**
 * ローカル変数定義
 */
struct VariableDefinitionStatement {
    /**
     * 変数名
     */
    name: Identifer,
    /**
     * 変数の型
     */
    r#type: Type,
    /**
     * 式
     */
    expr: Expr,
    /**
     * constかどうか. falseはlet
     */
    isConst: bool,
}

/**
 * ローカル関数定義
 */
struct FunctionDefinitionStatement {
    /**
     * 変数名
     */
    name: Identifer,
    /**
     * 型パラメーターのリスト
     */
    typeParameterList: Vec<Identifer>,
    /**
     * パラメーターのリスト
     */
    parameterList: Vec<ParameterWithDocument>,
    /**
     * 戻り値の型
     */
    returnType: Type,
    /**
     * 関数本体
     */
    statementList: Vec<Statement>,
}

/**
 * for文
 */
struct ForStatement {
    /**
     * カウンタ変数名
     */
    counterVariableName: Identifer,
    /**
     * ループの上限の式
     */
    untilExpr: Expr,
    /**
     * 繰り返す文
     */
    statementList: Vec<Statement>,
}

/**
 * forOf文
 */
struct ForOfStatement {
    /**
     * 要素の変数名
     */
    elementVariableName: Identifer,
    /**
     * 繰り返す対象
     */
    iterableExpr: Expr,
    /**
     * 繰り返す文
     */
    statementList: Vec<Statement>,
}

/**
 * switch文
 */
struct SwitchStatement {
    /**
     * switch(a) {} の a
     */
    expr: Expr,
    /**
     * case "text": { statementList }
     */
    patternList: Vec<Pattern>,
}

/**
 * switch文のcase "text": { statementList } の部分
 */
struct Pattern {
    /**
     * case に使う文字列
     */
    caseString: String,
    /**
     * statementList
     */
    statementList: Vec<Statement>,
}

/**
 * オブジェクトのメンバーの型
 */
struct MemberType {
    /**
     * プロパティ名
     */
    name: String,
    /**
     * 必須かどうか falseの場合 ? がつく
     */
    required: bool,
    /**
     * 型
     */
    r#type: Type,
    /**
     * ドキュメント
     */
    document: String,
}

/**
 * 関数の型
 */
struct FunctionType {
    /**
     * 型パラメーターのリスト
     */
    typeParameterList: Vec<Identifer>,
    /**
     * パラメーターの型. 意味のない引数名は適当に付く
     */
    parameterList: Vec<Type>,
    /**
     * 戻り値の型
     */
    r#return: Type,
}

/**
 * パラメーター付きの型
 */
struct TypeWithTypeParameter {
    /**
     * パラメーターをつけられる型
     */
    r#type: Type,
    /**
     * パラメーターに指定する型. なにも要素を入れなけければ T<>ではなく T の形式で出力される
     */
    typeParameterList: Vec<Type>,
}

/**
 * 交差型
 */
struct IntersectionType {
    /**
     * 左に指定する型
     */
    left: Type,
    /**
     * 右に指定する型
     */
    right: Type,
}

/**
 * インポートされた型
 */
struct ImportedType {
    /**
     * モジュール名. namedImportされるがその識別子は自動的に作成される
     */
    moduleName: String,
    /**
     * 型の名前
     */
    name: Identifer,
}

enum Identifer {
    Identifer(String),
}
