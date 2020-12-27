pub mod identifer;

pub enum CodeType {
    JavaScript,
    TypeScript,
}

/**
 * TypeScriptやJavaScriptのコードを表現する. TypeScriptでも出力できるように型情報をつける必要がある
 */
pub struct Code {
    /**
     * 外部に公開する定義
     */
    pub export_definition_list: Vec<ExportDefinition>,
    /**
     * 定義した後に実行するコード
     */
    pub statement_list: Vec<Statement>,
}

/**
 * 外部に公開する定義
 */
pub enum ExportDefinition {
    TypeAlias(TypeAlias),
    Function(Function),
    Variable(Variable),
}

/**
 *
 * TypeAlias. `export type T = {}`
 */
pub struct TypeAlias {
    pub name: identifer::Identifer,
    pub type_parameter_list: Vec<identifer::Identifer>,
    pub document: String,
    pub r#type: Type,
}

pub struct Function {
    /**
     * 外部に公開する関数の名前
     */
    pub name: identifer::Identifer,
    /**
     * ドキュメント
     */
    pub document: String,
    /**
     * 型パラメーターのリスト
     */
    pub type_parameter_list: Vec<identifer::Identifer>,
    /**
     * パラメーター
     */
    pub parameter_list: Vec<ParameterWithDocument>,
    /**
     * 戻り値の型
     */
    pub return_type: Type,
    /**
     * 関数の本体
     */
    pub statement_list: Vec<Statement>,
}
/**
 * ドキュメント付きの関数のパラメーター. パラメーター名, ドキュメント, 型
 */
pub struct ParameterWithDocument {
    /**
     * パラメーター名
     */
    pub name: identifer::Identifer,
    /**
     * ドキュメント
     */
    pub document: String,
    /**
     * パラメーターの型
     */
    pub r#type: Type,
}

/**
 * 関数のパラメーター. パラメーター名, ドキュメント
 */
pub struct Parameter {
    /**
     * パラメーター名
     */
    name: identifer::Identifer,
    /**
     * パラメーターの型
     */
    r#type: Type,
}

pub struct Variable {
    /**
     * 変数の名前
     */
    pub name: identifer::Identifer,
    /**
     * ドキュメント
     */
    pub document: String,
    /**
     * 変数の型
     */
    pub r#type: Type,
    /**
     * 変数の式
     */
    pub expr: Expr,
}

/**
 * 単項演算子
 */
pub enum UnaryOperator {
    Minus,
    BitwiseNot,
    LogicalNot,
}

/**
 * 2項演算子
 */
pub enum BinaryOperator {
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
pub enum Expr {
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
    Variable(identifer::Identifer),
    GlobalObjects(identifer::Identifer),
    ImportedVariable(Box<ImportedVariable>),
    Get(Box<GetExpr>),
    Call(Box<CallExpr>),
    New(Box<CallExpr>),
    TypeAssertion(Box<TypeAssertion>),
}

pub enum Statement {
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
pub enum Type {
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
    ScopeInFile(identifer::Identifer),
    ScopeInGlobal(identifer::Identifer),
    StringLiteral(String),
}
/**
 * 単項演算子と適用される式
 */
pub struct UnaryOperatorExpr {
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
pub struct BinaryOperatorExpr {
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
pub struct ConditionalOperatorExpr {
    /**
     * 条件の式
     */
    condition: Expr,
    /**
     * 条件がtrueのときに評価される式
     */
    then_expr: Expr,
    /**
     * 条件がfalseのときに評価される式
     */
    else_expr: Expr,
}
/**
 * 配列リテラルの要素
 */
pub struct ArrayItem {
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
pub enum Member {
    Spread(Expr),
    KeyValue(KeyValue),
}

/**
 * 文字列のkeyと式のvalue
 */
pub struct KeyValue {
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
pub struct LambdaExpr {
    /**
     * パラメーターのリスト
     */
    parameterList: Vec<Parameter>,
    /**
     * 型パラメーターのリスト
     */
    typeParameterList: Vec<identifer::Identifer>,
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
pub struct ImportedVariable {
    /**
     * モジュール名, 使うときにはnamedインポートされ, そのモジュール識別子は自動的につけられる
     */
    moduleName: String,
    /**
     * 変数名
     */
    name: identifer::Identifer,
}
/**
 * プロパティアクセス
 */
pub struct GetExpr {
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
pub struct CallExpr {
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
pub struct TypeAssertion {
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
pub struct SetStatement {
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
pub struct IfStatement {
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
pub struct VariableDefinitionStatement {
    /**
     * 変数名
     */
    name: identifer::Identifer,
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
pub struct FunctionDefinitionStatement {
    /**
     * 変数名
     */
    name: identifer::Identifer,
    /**
     * 型パラメーターのリスト
     */
    typeParameterList: Vec<identifer::Identifer>,
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
pub struct ForStatement {
    /**
     * カウンタ変数名
     */
    counterVariableName: identifer::Identifer,
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
pub struct ForOfStatement {
    /**
     * 要素の変数名
     */
    elementVariableName: identifer::Identifer,
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
pub struct SwitchStatement {
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
pub struct Pattern {
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
pub struct MemberType {
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
pub struct FunctionType {
    /**
     * 型パラメーターのリスト
     */
    typeParameterList: Vec<identifer::Identifer>,
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
pub struct TypeWithTypeParameter {
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
pub struct IntersectionType {
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
pub struct ImportedType {
    /**
     * モジュール名. namedImportされるがその識別子は自動的に作成される
     */
    moduleName: String,
    /**
     * 型の名前
     */
    name: identifer::Identifer,
}
