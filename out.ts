
import { Serializer } from '../serde/serializer';
import { Deserializer } from '../serde/deserializer';
import { Optional, Seq, Tuple, ListTuple, unit, bool, int8, int16, int32, int64, int128, uint8, uint16, uint32, uint64, uint128, float32, float64, char, str, bytes} from '../serde/types';

export class ArrayItem {

constructor (public expr: Expr, public spread: bool) {
}

public serialize(serializer: Serializer): void {
  this.expr.serialize(serializer);
  serializer.serializeBool(this.spread);
}

static deserialize(deserializer: Deserializer): ArrayItem {
  const expr = Expr.deserialize(deserializer);
  const spread = deserializer.deserializeBool();
  return new ArrayItem(expr,spread);
}

}
export abstract class BinaryOperator {
abstract serialize(serializer: Serializer): void;

static deserialize(deserializer: Deserializer): BinaryOperator {
  const index = deserializer.deserializeVariantIndex();
  switch (index) {
    case 0: return BinaryOperatorVariantExponentiation.load(deserializer);
    case 1: return BinaryOperatorVariantMultiplication.load(deserializer);
    case 2: return BinaryOperatorVariantDivision.load(deserializer);
    case 3: return BinaryOperatorVariantRemainder.load(deserializer);
    case 4: return BinaryOperatorVariantAddition.load(deserializer);
    case 5: return BinaryOperatorVariantSubtraction.load(deserializer);
    case 6: return BinaryOperatorVariantLeftShift.load(deserializer);
    case 7: return BinaryOperatorVariantSignedRightShift.load(deserializer);
    case 8: return BinaryOperatorVariantUnsignedRightShift.load(deserializer);
    case 9: return BinaryOperatorVariantLessThan.load(deserializer);
    case 10: return BinaryOperatorVariantLessThanOrEqual.load(deserializer);
    case 11: return BinaryOperatorVariantEqual.load(deserializer);
    case 12: return BinaryOperatorVariantNotEqual.load(deserializer);
    case 13: return BinaryOperatorVariantBitwiseAnd.load(deserializer);
    case 14: return BinaryOperatorVariantBitwiseXOr.load(deserializer);
    case 15: return BinaryOperatorVariantBitwiseOr.load(deserializer);
    case 16: return BinaryOperatorVariantLogicalAnd.load(deserializer);
    case 17: return BinaryOperatorVariantLogicalOr.load(deserializer);
    default: throw new Error("Unknown variant index for BinaryOperator: " + index);
  }
}
}


export class BinaryOperatorVariantExponentiation extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(0);
}

static load(deserializer: Deserializer): BinaryOperatorVariantExponentiation {
  return new BinaryOperatorVariantExponentiation();
}

}

export class BinaryOperatorVariantMultiplication extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(1);
}

static load(deserializer: Deserializer): BinaryOperatorVariantMultiplication {
  return new BinaryOperatorVariantMultiplication();
}

}

export class BinaryOperatorVariantDivision extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(2);
}

static load(deserializer: Deserializer): BinaryOperatorVariantDivision {
  return new BinaryOperatorVariantDivision();
}

}

export class BinaryOperatorVariantRemainder extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(3);
}

static load(deserializer: Deserializer): BinaryOperatorVariantRemainder {
  return new BinaryOperatorVariantRemainder();
}

}

export class BinaryOperatorVariantAddition extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(4);
}

static load(deserializer: Deserializer): BinaryOperatorVariantAddition {
  return new BinaryOperatorVariantAddition();
}

}

export class BinaryOperatorVariantSubtraction extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(5);
}

static load(deserializer: Deserializer): BinaryOperatorVariantSubtraction {
  return new BinaryOperatorVariantSubtraction();
}

}

export class BinaryOperatorVariantLeftShift extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(6);
}

static load(deserializer: Deserializer): BinaryOperatorVariantLeftShift {
  return new BinaryOperatorVariantLeftShift();
}

}

export class BinaryOperatorVariantSignedRightShift extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(7);
}

static load(deserializer: Deserializer): BinaryOperatorVariantSignedRightShift {
  return new BinaryOperatorVariantSignedRightShift();
}

}

export class BinaryOperatorVariantUnsignedRightShift extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(8);
}

static load(deserializer: Deserializer): BinaryOperatorVariantUnsignedRightShift {
  return new BinaryOperatorVariantUnsignedRightShift();
}

}

export class BinaryOperatorVariantLessThan extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(9);
}

static load(deserializer: Deserializer): BinaryOperatorVariantLessThan {
  return new BinaryOperatorVariantLessThan();
}

}

export class BinaryOperatorVariantLessThanOrEqual extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(10);
}

static load(deserializer: Deserializer): BinaryOperatorVariantLessThanOrEqual {
  return new BinaryOperatorVariantLessThanOrEqual();
}

}

export class BinaryOperatorVariantEqual extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(11);
}

static load(deserializer: Deserializer): BinaryOperatorVariantEqual {
  return new BinaryOperatorVariantEqual();
}

}

export class BinaryOperatorVariantNotEqual extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(12);
}

static load(deserializer: Deserializer): BinaryOperatorVariantNotEqual {
  return new BinaryOperatorVariantNotEqual();
}

}

export class BinaryOperatorVariantBitwiseAnd extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(13);
}

static load(deserializer: Deserializer): BinaryOperatorVariantBitwiseAnd {
  return new BinaryOperatorVariantBitwiseAnd();
}

}

export class BinaryOperatorVariantBitwiseXOr extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(14);
}

static load(deserializer: Deserializer): BinaryOperatorVariantBitwiseXOr {
  return new BinaryOperatorVariantBitwiseXOr();
}

}

export class BinaryOperatorVariantBitwiseOr extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(15);
}

static load(deserializer: Deserializer): BinaryOperatorVariantBitwiseOr {
  return new BinaryOperatorVariantBitwiseOr();
}

}

export class BinaryOperatorVariantLogicalAnd extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(16);
}

static load(deserializer: Deserializer): BinaryOperatorVariantLogicalAnd {
  return new BinaryOperatorVariantLogicalAnd();
}

}

export class BinaryOperatorVariantLogicalOr extends BinaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(17);
}

static load(deserializer: Deserializer): BinaryOperatorVariantLogicalOr {
  return new BinaryOperatorVariantLogicalOr();
}

}
export class BinaryOperatorExpr {

constructor (public operator: BinaryOperator, public left: Expr, public right: Expr) {
}

public serialize(serializer: Serializer): void {
  this.operator.serialize(serializer);
  this.left.serialize(serializer);
  this.right.serialize(serializer);
}

static deserialize(deserializer: Deserializer): BinaryOperatorExpr {
  const operator = BinaryOperator.deserialize(deserializer);
  const left = Expr.deserialize(deserializer);
  const right = Expr.deserialize(deserializer);
  return new BinaryOperatorExpr(operator,left,right);
}

}
export class CallExpr {

constructor (public expr: Expr, public parameter_list: Seq<Expr>) {
}

public serialize(serializer: Serializer): void {
  this.expr.serialize(serializer);
  Helpers.serializeVectorExpr(this.parameter_list, serializer);
}

static deserialize(deserializer: Deserializer): CallExpr {
  const expr = Expr.deserialize(deserializer);
  const parameter_list = Helpers.deserializeVectorExpr(deserializer);
  return new CallExpr(expr,parameter_list);
}

}
export class Code {

constructor (public export_definition_list: Seq<ExportDefinition>, public statement_list: Seq<Statement>) {
}

public serialize(serializer: Serializer): void {
  Helpers.serializeVectorExportDefinition(this.export_definition_list, serializer);
  Helpers.serializeVectorStatement(this.statement_list, serializer);
}

static deserialize(deserializer: Deserializer): Code {
  const export_definition_list = Helpers.deserializeVectorExportDefinition(deserializer);
  const statement_list = Helpers.deserializeVectorStatement(deserializer);
  return new Code(export_definition_list,statement_list);
}

}
export abstract class CodeType {
abstract serialize(serializer: Serializer): void;

static deserialize(deserializer: Deserializer): CodeType {
  const index = deserializer.deserializeVariantIndex();
  switch (index) {
    case 0: return CodeTypeVariantJavaScript.load(deserializer);
    case 1: return CodeTypeVariantTypeScript.load(deserializer);
    default: throw new Error("Unknown variant index for CodeType: " + index);
  }
}
}


export class CodeTypeVariantJavaScript extends CodeType {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(0);
}

static load(deserializer: Deserializer): CodeTypeVariantJavaScript {
  return new CodeTypeVariantJavaScript();
}

}

export class CodeTypeVariantTypeScript extends CodeType {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(1);
}

static load(deserializer: Deserializer): CodeTypeVariantTypeScript {
  return new CodeTypeVariantTypeScript();
}

}
export class ConditionalOperatorExpr {

constructor (public condition: Expr, public then_expr: Expr, public else_expr: Expr) {
}

public serialize(serializer: Serializer): void {
  this.condition.serialize(serializer);
  this.then_expr.serialize(serializer);
  this.else_expr.serialize(serializer);
}

static deserialize(deserializer: Deserializer): ConditionalOperatorExpr {
  const condition = Expr.deserialize(deserializer);
  const then_expr = Expr.deserialize(deserializer);
  const else_expr = Expr.deserialize(deserializer);
  return new ConditionalOperatorExpr(condition,then_expr,else_expr);
}

}
export abstract class ExportDefinition {
abstract serialize(serializer: Serializer): void;

static deserialize(deserializer: Deserializer): ExportDefinition {
  const index = deserializer.deserializeVariantIndex();
  switch (index) {
    case 0: return ExportDefinitionVariantTypeAlias.load(deserializer);
    case 1: return ExportDefinitionVariantFunction.load(deserializer);
    case 2: return ExportDefinitionVariantVariable.load(deserializer);
    default: throw new Error("Unknown variant index for ExportDefinition: " + index);
  }
}
}


export class ExportDefinitionVariantTypeAlias extends ExportDefinition {

constructor (public value: TypeAlias) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(0);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExportDefinitionVariantTypeAlias {
  const value = TypeAlias.deserialize(deserializer);
  return new ExportDefinitionVariantTypeAlias(value);
}

}

export class ExportDefinitionVariantFunction extends ExportDefinition {

constructor (public value: Function) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(1);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExportDefinitionVariantFunction {
  const value = Function.deserialize(deserializer);
  return new ExportDefinitionVariantFunction(value);
}

}

export class ExportDefinitionVariantVariable extends ExportDefinition {

constructor (public value: Variable) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(2);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExportDefinitionVariantVariable {
  const value = Variable.deserialize(deserializer);
  return new ExportDefinitionVariantVariable(value);
}

}
export abstract class Expr {
abstract serialize(serializer: Serializer): void;

static deserialize(deserializer: Deserializer): Expr {
  const index = deserializer.deserializeVariantIndex();
  switch (index) {
    case 0: return ExprVariantNumberLiteral.load(deserializer);
    case 1: return ExprVariantStringLiteral.load(deserializer);
    case 2: return ExprVariantBooleanLiteral.load(deserializer);
    case 3: return ExprVariantNullLiteral.load(deserializer);
    case 4: return ExprVariantUndefinedLiteral.load(deserializer);
    case 5: return ExprVariantUnaryOperator.load(deserializer);
    case 6: return ExprVariantBinaryOperator.load(deserializer);
    case 7: return ExprVariantConditionalOperator.load(deserializer);
    case 8: return ExprVariantArrayLiteral.load(deserializer);
    case 9: return ExprVariantObjectLiteral.load(deserializer);
    case 10: return ExprVariantLambda.load(deserializer);
    case 11: return ExprVariantVariable.load(deserializer);
    case 12: return ExprVariantGlobalObjects.load(deserializer);
    case 13: return ExprVariantImportedVariable.load(deserializer);
    case 14: return ExprVariantGet.load(deserializer);
    case 15: return ExprVariantCall.load(deserializer);
    case 16: return ExprVariantNew.load(deserializer);
    case 17: return ExprVariantTypeAssertion.load(deserializer);
    default: throw new Error("Unknown variant index for Expr: " + index);
  }
}
}


export class ExprVariantNumberLiteral extends Expr {

constructor (public value: int32) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(0);
  serializer.serializeI32(this.value);
}

static load(deserializer: Deserializer): ExprVariantNumberLiteral {
  const value = deserializer.deserializeI32();
  return new ExprVariantNumberLiteral(value);
}

}

export class ExprVariantStringLiteral extends Expr {

constructor (public value: str) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(1);
  serializer.serializeStr(this.value);
}

static load(deserializer: Deserializer): ExprVariantStringLiteral {
  const value = deserializer.deserializeStr();
  return new ExprVariantStringLiteral(value);
}

}

export class ExprVariantBooleanLiteral extends Expr {

constructor (public value: bool) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(2);
  serializer.serializeBool(this.value);
}

static load(deserializer: Deserializer): ExprVariantBooleanLiteral {
  const value = deserializer.deserializeBool();
  return new ExprVariantBooleanLiteral(value);
}

}

export class ExprVariantNullLiteral extends Expr {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(3);
}

static load(deserializer: Deserializer): ExprVariantNullLiteral {
  return new ExprVariantNullLiteral();
}

}

export class ExprVariantUndefinedLiteral extends Expr {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(4);
}

static load(deserializer: Deserializer): ExprVariantUndefinedLiteral {
  return new ExprVariantUndefinedLiteral();
}

}

export class ExprVariantUnaryOperator extends Expr {

constructor (public value: UnaryOperatorExpr) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(5);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExprVariantUnaryOperator {
  const value = UnaryOperatorExpr.deserialize(deserializer);
  return new ExprVariantUnaryOperator(value);
}

}

export class ExprVariantBinaryOperator extends Expr {

constructor (public value: BinaryOperatorExpr) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(6);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExprVariantBinaryOperator {
  const value = BinaryOperatorExpr.deserialize(deserializer);
  return new ExprVariantBinaryOperator(value);
}

}

export class ExprVariantConditionalOperator extends Expr {

constructor (public value: ConditionalOperatorExpr) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(7);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExprVariantConditionalOperator {
  const value = ConditionalOperatorExpr.deserialize(deserializer);
  return new ExprVariantConditionalOperator(value);
}

}

export class ExprVariantArrayLiteral extends Expr {

constructor (public value: Seq<ArrayItem>) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(8);
  Helpers.serializeVectorArrayItem(this.value, serializer);
}

static load(deserializer: Deserializer): ExprVariantArrayLiteral {
  const value = Helpers.deserializeVectorArrayItem(deserializer);
  return new ExprVariantArrayLiteral(value);
}

}

export class ExprVariantObjectLiteral extends Expr {

constructor (public value: Seq<Member>) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(9);
  Helpers.serializeVectorMember(this.value, serializer);
}

static load(deserializer: Deserializer): ExprVariantObjectLiteral {
  const value = Helpers.deserializeVectorMember(deserializer);
  return new ExprVariantObjectLiteral(value);
}

}

export class ExprVariantLambda extends Expr {

constructor (public value: LambdaExpr) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(10);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExprVariantLambda {
  const value = LambdaExpr.deserialize(deserializer);
  return new ExprVariantLambda(value);
}

}

export class ExprVariantVariable extends Expr {

constructor (public value: Identifer) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(11);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExprVariantVariable {
  const value = Identifer.deserialize(deserializer);
  return new ExprVariantVariable(value);
}

}

export class ExprVariantGlobalObjects extends Expr {

constructor (public value: Identifer) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(12);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExprVariantGlobalObjects {
  const value = Identifer.deserialize(deserializer);
  return new ExprVariantGlobalObjects(value);
}

}

export class ExprVariantImportedVariable extends Expr {

constructor (public value: ImportedVariable) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(13);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExprVariantImportedVariable {
  const value = ImportedVariable.deserialize(deserializer);
  return new ExprVariantImportedVariable(value);
}

}

export class ExprVariantGet extends Expr {

constructor (public value: GetExpr) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(14);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExprVariantGet {
  const value = GetExpr.deserialize(deserializer);
  return new ExprVariantGet(value);
}

}

export class ExprVariantCall extends Expr {

constructor (public value: CallExpr) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(15);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExprVariantCall {
  const value = CallExpr.deserialize(deserializer);
  return new ExprVariantCall(value);
}

}

export class ExprVariantNew extends Expr {

constructor (public value: CallExpr) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(16);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExprVariantNew {
  const value = CallExpr.deserialize(deserializer);
  return new ExprVariantNew(value);
}

}

export class ExprVariantTypeAssertion extends Expr {

constructor (public value: TypeAssertion) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(17);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): ExprVariantTypeAssertion {
  const value = TypeAssertion.deserialize(deserializer);
  return new ExprVariantTypeAssertion(value);
}

}
export class ForOfStatement {

constructor (public element_variable_name: Identifer, public iterable_expr: Expr, public statement_list: Seq<Statement>) {
}

public serialize(serializer: Serializer): void {
  this.element_variable_name.serialize(serializer);
  this.iterable_expr.serialize(serializer);
  Helpers.serializeVectorStatement(this.statement_list, serializer);
}

static deserialize(deserializer: Deserializer): ForOfStatement {
  const element_variable_name = Identifer.deserialize(deserializer);
  const iterable_expr = Expr.deserialize(deserializer);
  const statement_list = Helpers.deserializeVectorStatement(deserializer);
  return new ForOfStatement(element_variable_name,iterable_expr,statement_list);
}

}
export class ForStatement {

constructor (public counter_variable_name: Identifer, public until_expr: Expr, public statement_list: Seq<Statement>) {
}

public serialize(serializer: Serializer): void {
  this.counter_variable_name.serialize(serializer);
  this.until_expr.serialize(serializer);
  Helpers.serializeVectorStatement(this.statement_list, serializer);
}

static deserialize(deserializer: Deserializer): ForStatement {
  const counter_variable_name = Identifer.deserialize(deserializer);
  const until_expr = Expr.deserialize(deserializer);
  const statement_list = Helpers.deserializeVectorStatement(deserializer);
  return new ForStatement(counter_variable_name,until_expr,statement_list);
}

}
export class Function {

constructor (public name: Identifer, public document: str, public type_parameter_list: Seq<Identifer>, public parameter_list: Seq<ParameterWithDocument>, public return_type: Type, public statement_list: Seq<Statement>) {
}

public serialize(serializer: Serializer): void {
  this.name.serialize(serializer);
  serializer.serializeStr(this.document);
  Helpers.serializeVectorIdentifer(this.type_parameter_list, serializer);
  Helpers.serializeVectorParameterWithDocument(this.parameter_list, serializer);
  this.return_type.serialize(serializer);
  Helpers.serializeVectorStatement(this.statement_list, serializer);
}

static deserialize(deserializer: Deserializer): Function {
  const name = Identifer.deserialize(deserializer);
  const document = deserializer.deserializeStr();
  const type_parameter_list = Helpers.deserializeVectorIdentifer(deserializer);
  const parameter_list = Helpers.deserializeVectorParameterWithDocument(deserializer);
  const return_type = Type.deserialize(deserializer);
  const statement_list = Helpers.deserializeVectorStatement(deserializer);
  return new Function(name,document,type_parameter_list,parameter_list,return_type,statement_list);
}

}
export class FunctionDefinitionStatement {

constructor (public name: Identifer, public type_parameter_list: Seq<Identifer>, public parameter_list: Seq<ParameterWithDocument>, public return_type: Type, public statement_list: Seq<Statement>) {
}

public serialize(serializer: Serializer): void {
  this.name.serialize(serializer);
  Helpers.serializeVectorIdentifer(this.type_parameter_list, serializer);
  Helpers.serializeVectorParameterWithDocument(this.parameter_list, serializer);
  this.return_type.serialize(serializer);
  Helpers.serializeVectorStatement(this.statement_list, serializer);
}

static deserialize(deserializer: Deserializer): FunctionDefinitionStatement {
  const name = Identifer.deserialize(deserializer);
  const type_parameter_list = Helpers.deserializeVectorIdentifer(deserializer);
  const parameter_list = Helpers.deserializeVectorParameterWithDocument(deserializer);
  const return_type = Type.deserialize(deserializer);
  const statement_list = Helpers.deserializeVectorStatement(deserializer);
  return new FunctionDefinitionStatement(name,type_parameter_list,parameter_list,return_type,statement_list);
}

}
export class FunctionType {

constructor (public type_parameter_list: Seq<Identifer>, public parameter_list: Seq<Type>, public return_type: Type) {
}

public serialize(serializer: Serializer): void {
  Helpers.serializeVectorIdentifer(this.type_parameter_list, serializer);
  Helpers.serializeVectorType(this.parameter_list, serializer);
  this.return_type.serialize(serializer);
}

static deserialize(deserializer: Deserializer): FunctionType {
  const type_parameter_list = Helpers.deserializeVectorIdentifer(deserializer);
  const parameter_list = Helpers.deserializeVectorType(deserializer);
  const return_type = Type.deserialize(deserializer);
  return new FunctionType(type_parameter_list,parameter_list,return_type);
}

}
export class GetExpr {

constructor (public expr: Expr, public property_expr: Expr) {
}

public serialize(serializer: Serializer): void {
  this.expr.serialize(serializer);
  this.property_expr.serialize(serializer);
}

static deserialize(deserializer: Deserializer): GetExpr {
  const expr = Expr.deserialize(deserializer);
  const property_expr = Expr.deserialize(deserializer);
  return new GetExpr(expr,property_expr);
}

}
export class Identifer {

constructor (public value: str) {
}

public serialize(serializer: Serializer): void {
  serializer.serializeStr(this.value);
}

static deserialize(deserializer: Deserializer): Identifer {
  const value = deserializer.deserializeStr();
  return new Identifer(value);
}

}
export class IfStatement {

constructor (public condition: Expr, public then_statement_list: Seq<Statement>) {
}

public serialize(serializer: Serializer): void {
  this.condition.serialize(serializer);
  Helpers.serializeVectorStatement(this.then_statement_list, serializer);
}

static deserialize(deserializer: Deserializer): IfStatement {
  const condition = Expr.deserialize(deserializer);
  const then_statement_list = Helpers.deserializeVectorStatement(deserializer);
  return new IfStatement(condition,then_statement_list);
}

}
export class ImportedType {

constructor (public module_name: str, public name: Identifer) {
}

public serialize(serializer: Serializer): void {
  serializer.serializeStr(this.module_name);
  this.name.serialize(serializer);
}

static deserialize(deserializer: Deserializer): ImportedType {
  const module_name = deserializer.deserializeStr();
  const name = Identifer.deserialize(deserializer);
  return new ImportedType(module_name,name);
}

}
export class ImportedVariable {

constructor (public module_name: str, public name: Identifer) {
}

public serialize(serializer: Serializer): void {
  serializer.serializeStr(this.module_name);
  this.name.serialize(serializer);
}

static deserialize(deserializer: Deserializer): ImportedVariable {
  const module_name = deserializer.deserializeStr();
  const name = Identifer.deserialize(deserializer);
  return new ImportedVariable(module_name,name);
}

}
export class IntersectionType {

constructor (public left: Type, public right: Type) {
}

public serialize(serializer: Serializer): void {
  this.left.serialize(serializer);
  this.right.serialize(serializer);
}

static deserialize(deserializer: Deserializer): IntersectionType {
  const left = Type.deserialize(deserializer);
  const right = Type.deserialize(deserializer);
  return new IntersectionType(left,right);
}

}
export class KeyValue {

constructor (public key: str, public value: Expr) {
}

public serialize(serializer: Serializer): void {
  serializer.serializeStr(this.key);
  this.value.serialize(serializer);
}

static deserialize(deserializer: Deserializer): KeyValue {
  const key = deserializer.deserializeStr();
  const value = Expr.deserialize(deserializer);
  return new KeyValue(key,value);
}

}
export class LambdaExpr {

constructor (public parameter_list: Seq<Parameter>, public type_parameter_list: Seq<Identifer>, public return_type: Type, public statement_list: Seq<Statement>) {
}

public serialize(serializer: Serializer): void {
  Helpers.serializeVectorParameter(this.parameter_list, serializer);
  Helpers.serializeVectorIdentifer(this.type_parameter_list, serializer);
  this.return_type.serialize(serializer);
  Helpers.serializeVectorStatement(this.statement_list, serializer);
}

static deserialize(deserializer: Deserializer): LambdaExpr {
  const parameter_list = Helpers.deserializeVectorParameter(deserializer);
  const type_parameter_list = Helpers.deserializeVectorIdentifer(deserializer);
  const return_type = Type.deserialize(deserializer);
  const statement_list = Helpers.deserializeVectorStatement(deserializer);
  return new LambdaExpr(parameter_list,type_parameter_list,return_type,statement_list);
}

}
export abstract class Member {
abstract serialize(serializer: Serializer): void;

static deserialize(deserializer: Deserializer): Member {
  const index = deserializer.deserializeVariantIndex();
  switch (index) {
    case 0: return MemberVariantSpread.load(deserializer);
    case 1: return MemberVariantKeyValue.load(deserializer);
    default: throw new Error("Unknown variant index for Member: " + index);
  }
}
}


export class MemberVariantSpread extends Member {

constructor (public value: Expr) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(0);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): MemberVariantSpread {
  const value = Expr.deserialize(deserializer);
  return new MemberVariantSpread(value);
}

}

export class MemberVariantKeyValue extends Member {

constructor (public value: KeyValue) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(1);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): MemberVariantKeyValue {
  const value = KeyValue.deserialize(deserializer);
  return new MemberVariantKeyValue(value);
}

}
export class MemberType {

constructor (public name: str, public required: bool, public type: Type, public document: str) {
}

public serialize(serializer: Serializer): void {
  serializer.serializeStr(this.name);
  serializer.serializeBool(this.required);
  this.type.serialize(serializer);
  serializer.serializeStr(this.document);
}

static deserialize(deserializer: Deserializer): MemberType {
  const name = deserializer.deserializeStr();
  const required = deserializer.deserializeBool();
  const type = Type.deserialize(deserializer);
  const document = deserializer.deserializeStr();
  return new MemberType(name,required,type,document);
}

}
export class Parameter {

constructor (public name: Identifer, public type: Type) {
}

public serialize(serializer: Serializer): void {
  this.name.serialize(serializer);
  this.type.serialize(serializer);
}

static deserialize(deserializer: Deserializer): Parameter {
  const name = Identifer.deserialize(deserializer);
  const type = Type.deserialize(deserializer);
  return new Parameter(name,type);
}

}
export class ParameterWithDocument {

constructor (public name: Identifer, public document: str, public type: Type) {
}

public serialize(serializer: Serializer): void {
  this.name.serialize(serializer);
  serializer.serializeStr(this.document);
  this.type.serialize(serializer);
}

static deserialize(deserializer: Deserializer): ParameterWithDocument {
  const name = Identifer.deserialize(deserializer);
  const document = deserializer.deserializeStr();
  const type = Type.deserialize(deserializer);
  return new ParameterWithDocument(name,document,type);
}

}
export class Pattern {

constructor (public case_string: str, public statement_list: Seq<Statement>) {
}

public serialize(serializer: Serializer): void {
  serializer.serializeStr(this.case_string);
  Helpers.serializeVectorStatement(this.statement_list, serializer);
}

static deserialize(deserializer: Deserializer): Pattern {
  const case_string = deserializer.deserializeStr();
  const statement_list = Helpers.deserializeVectorStatement(deserializer);
  return new Pattern(case_string,statement_list);
}

}
export class SetStatement {

constructor (public target: Expr, public operator_maybe: Optional<BinaryOperator>, public expr: Expr) {
}

public serialize(serializer: Serializer): void {
  this.target.serialize(serializer);
  Helpers.serializeOptionBinaryOperator(this.operator_maybe, serializer);
  this.expr.serialize(serializer);
}

static deserialize(deserializer: Deserializer): SetStatement {
  const target = Expr.deserialize(deserializer);
  const operator_maybe = Helpers.deserializeOptionBinaryOperator(deserializer);
  const expr = Expr.deserialize(deserializer);
  return new SetStatement(target,operator_maybe,expr);
}

}
export abstract class Statement {
abstract serialize(serializer: Serializer): void;

static deserialize(deserializer: Deserializer): Statement {
  const index = deserializer.deserializeVariantIndex();
  switch (index) {
    case 0: return StatementVariantEvaluateExpr.load(deserializer);
    case 1: return StatementVariantSet.load(deserializer);
    case 2: return StatementVariantIf.load(deserializer);
    case 3: return StatementVariantThrowError.load(deserializer);
    case 4: return StatementVariantReturn.load(deserializer);
    case 5: return StatementVariantReturnVoid.load(deserializer);
    case 6: return StatementVariantContinue.load(deserializer);
    case 7: return StatementVariantVariableDefinition.load(deserializer);
    case 8: return StatementVariantFunctionDefinition.load(deserializer);
    case 9: return StatementVariantFor.load(deserializer);
    case 10: return StatementVariantForOf.load(deserializer);
    case 11: return StatementVariantWhileTrue.load(deserializer);
    case 12: return StatementVariantBreak.load(deserializer);
    case 13: return StatementVariantSwitch.load(deserializer);
    default: throw new Error("Unknown variant index for Statement: " + index);
  }
}
}


export class StatementVariantEvaluateExpr extends Statement {

constructor (public value: Expr) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(0);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): StatementVariantEvaluateExpr {
  const value = Expr.deserialize(deserializer);
  return new StatementVariantEvaluateExpr(value);
}

}

export class StatementVariantSet extends Statement {

constructor (public value: SetStatement) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(1);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): StatementVariantSet {
  const value = SetStatement.deserialize(deserializer);
  return new StatementVariantSet(value);
}

}

export class StatementVariantIf extends Statement {

constructor (public value: IfStatement) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(2);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): StatementVariantIf {
  const value = IfStatement.deserialize(deserializer);
  return new StatementVariantIf(value);
}

}

export class StatementVariantThrowError extends Statement {

constructor (public value: Expr) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(3);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): StatementVariantThrowError {
  const value = Expr.deserialize(deserializer);
  return new StatementVariantThrowError(value);
}

}

export class StatementVariantReturn extends Statement {

constructor (public value: Expr) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(4);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): StatementVariantReturn {
  const value = Expr.deserialize(deserializer);
  return new StatementVariantReturn(value);
}

}

export class StatementVariantReturnVoid extends Statement {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(5);
}

static load(deserializer: Deserializer): StatementVariantReturnVoid {
  return new StatementVariantReturnVoid();
}

}

export class StatementVariantContinue extends Statement {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(6);
}

static load(deserializer: Deserializer): StatementVariantContinue {
  return new StatementVariantContinue();
}

}

export class StatementVariantVariableDefinition extends Statement {

constructor (public value: VariableDefinitionStatement) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(7);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): StatementVariantVariableDefinition {
  const value = VariableDefinitionStatement.deserialize(deserializer);
  return new StatementVariantVariableDefinition(value);
}

}

export class StatementVariantFunctionDefinition extends Statement {

constructor (public value: FunctionDefinitionStatement) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(8);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): StatementVariantFunctionDefinition {
  const value = FunctionDefinitionStatement.deserialize(deserializer);
  return new StatementVariantFunctionDefinition(value);
}

}

export class StatementVariantFor extends Statement {

constructor (public value: ForStatement) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(9);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): StatementVariantFor {
  const value = ForStatement.deserialize(deserializer);
  return new StatementVariantFor(value);
}

}

export class StatementVariantForOf extends Statement {

constructor (public value: ForOfStatement) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(10);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): StatementVariantForOf {
  const value = ForOfStatement.deserialize(deserializer);
  return new StatementVariantForOf(value);
}

}

export class StatementVariantWhileTrue extends Statement {

constructor (public value: Seq<Statement>) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(11);
  Helpers.serializeVectorStatement(this.value, serializer);
}

static load(deserializer: Deserializer): StatementVariantWhileTrue {
  const value = Helpers.deserializeVectorStatement(deserializer);
  return new StatementVariantWhileTrue(value);
}

}

export class StatementVariantBreak extends Statement {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(12);
}

static load(deserializer: Deserializer): StatementVariantBreak {
  return new StatementVariantBreak();
}

}

export class StatementVariantSwitch extends Statement {

constructor (public value: SwitchStatement) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(13);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): StatementVariantSwitch {
  const value = SwitchStatement.deserialize(deserializer);
  return new StatementVariantSwitch(value);
}

}
export class SwitchStatement {

constructor (public expr: Expr, public pattern_list: Seq<Pattern>) {
}

public serialize(serializer: Serializer): void {
  this.expr.serialize(serializer);
  Helpers.serializeVectorPattern(this.pattern_list, serializer);
}

static deserialize(deserializer: Deserializer): SwitchStatement {
  const expr = Expr.deserialize(deserializer);
  const pattern_list = Helpers.deserializeVectorPattern(deserializer);
  return new SwitchStatement(expr,pattern_list);
}

}
export abstract class Type {
abstract serialize(serializer: Serializer): void;

static deserialize(deserializer: Deserializer): Type {
  const index = deserializer.deserializeVariantIndex();
  switch (index) {
    case 0: return TypeVariantNumber.load(deserializer);
    case 1: return TypeVariantString.load(deserializer);
    case 2: return TypeVariantBoolean.load(deserializer);
    case 3: return TypeVariantUndefined.load(deserializer);
    case 4: return TypeVariantNull.load(deserializer);
    case 5: return TypeVariantNever.load(deserializer);
    case 6: return TypeVariantVoid.load(deserializer);
    case 7: return TypeVariantObject.load(deserializer);
    case 8: return TypeVariantFunction.load(deserializer);
    case 9: return TypeVariantWithTypeParameter.load(deserializer);
    case 10: return TypeVariantUnion.load(deserializer);
    case 11: return TypeVariantIntersection.load(deserializer);
    case 12: return TypeVariantImportedType.load(deserializer);
    case 13: return TypeVariantScopeInFile.load(deserializer);
    case 14: return TypeVariantScopeInGlobal.load(deserializer);
    case 15: return TypeVariantStringLiteral.load(deserializer);
    default: throw new Error("Unknown variant index for Type: " + index);
  }
}
}


export class TypeVariantNumber extends Type {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(0);
}

static load(deserializer: Deserializer): TypeVariantNumber {
  return new TypeVariantNumber();
}

}

export class TypeVariantString extends Type {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(1);
}

static load(deserializer: Deserializer): TypeVariantString {
  return new TypeVariantString();
}

}

export class TypeVariantBoolean extends Type {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(2);
}

static load(deserializer: Deserializer): TypeVariantBoolean {
  return new TypeVariantBoolean();
}

}

export class TypeVariantUndefined extends Type {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(3);
}

static load(deserializer: Deserializer): TypeVariantUndefined {
  return new TypeVariantUndefined();
}

}

export class TypeVariantNull extends Type {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(4);
}

static load(deserializer: Deserializer): TypeVariantNull {
  return new TypeVariantNull();
}

}

export class TypeVariantNever extends Type {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(5);
}

static load(deserializer: Deserializer): TypeVariantNever {
  return new TypeVariantNever();
}

}

export class TypeVariantVoid extends Type {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(6);
}

static load(deserializer: Deserializer): TypeVariantVoid {
  return new TypeVariantVoid();
}

}

export class TypeVariantObject extends Type {

constructor (public value: Seq<MemberType>) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(7);
  Helpers.serializeVectorMemberType(this.value, serializer);
}

static load(deserializer: Deserializer): TypeVariantObject {
  const value = Helpers.deserializeVectorMemberType(deserializer);
  return new TypeVariantObject(value);
}

}

export class TypeVariantFunction extends Type {

constructor (public value: FunctionType) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(8);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): TypeVariantFunction {
  const value = FunctionType.deserialize(deserializer);
  return new TypeVariantFunction(value);
}

}

export class TypeVariantWithTypeParameter extends Type {

constructor (public value: TypeWithTypeParameter) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(9);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): TypeVariantWithTypeParameter {
  const value = TypeWithTypeParameter.deserialize(deserializer);
  return new TypeVariantWithTypeParameter(value);
}

}

export class TypeVariantUnion extends Type {

constructor (public value: Seq<Type>) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(10);
  Helpers.serializeVectorType(this.value, serializer);
}

static load(deserializer: Deserializer): TypeVariantUnion {
  const value = Helpers.deserializeVectorType(deserializer);
  return new TypeVariantUnion(value);
}

}

export class TypeVariantIntersection extends Type {

constructor (public value: IntersectionType) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(11);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): TypeVariantIntersection {
  const value = IntersectionType.deserialize(deserializer);
  return new TypeVariantIntersection(value);
}

}

export class TypeVariantImportedType extends Type {

constructor (public value: ImportedType) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(12);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): TypeVariantImportedType {
  const value = ImportedType.deserialize(deserializer);
  return new TypeVariantImportedType(value);
}

}

export class TypeVariantScopeInFile extends Type {

constructor (public value: Identifer) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(13);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): TypeVariantScopeInFile {
  const value = Identifer.deserialize(deserializer);
  return new TypeVariantScopeInFile(value);
}

}

export class TypeVariantScopeInGlobal extends Type {

constructor (public value: Identifer) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(14);
  this.value.serialize(serializer);
}

static load(deserializer: Deserializer): TypeVariantScopeInGlobal {
  const value = Identifer.deserialize(deserializer);
  return new TypeVariantScopeInGlobal(value);
}

}

export class TypeVariantStringLiteral extends Type {

constructor (public value: str) {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(15);
  serializer.serializeStr(this.value);
}

static load(deserializer: Deserializer): TypeVariantStringLiteral {
  const value = deserializer.deserializeStr();
  return new TypeVariantStringLiteral(value);
}

}
export class TypeAlias {

constructor (public name: Identifer, public type_parameter_list: Seq<Identifer>, public document: str, public type: Type) {
}

public serialize(serializer: Serializer): void {
  this.name.serialize(serializer);
  Helpers.serializeVectorIdentifer(this.type_parameter_list, serializer);
  serializer.serializeStr(this.document);
  this.type.serialize(serializer);
}

static deserialize(deserializer: Deserializer): TypeAlias {
  const name = Identifer.deserialize(deserializer);
  const type_parameter_list = Helpers.deserializeVectorIdentifer(deserializer);
  const document = deserializer.deserializeStr();
  const type = Type.deserialize(deserializer);
  return new TypeAlias(name,type_parameter_list,document,type);
}

}
export class TypeAssertion {

constructor (public expr: Expr, public type: Type) {
}

public serialize(serializer: Serializer): void {
  this.expr.serialize(serializer);
  this.type.serialize(serializer);
}

static deserialize(deserializer: Deserializer): TypeAssertion {
  const expr = Expr.deserialize(deserializer);
  const type = Type.deserialize(deserializer);
  return new TypeAssertion(expr,type);
}

}
export class TypeWithTypeParameter {

constructor (public type: Type, public type_parameter_list: Seq<Type>) {
}

public serialize(serializer: Serializer): void {
  this.type.serialize(serializer);
  Helpers.serializeVectorType(this.type_parameter_list, serializer);
}

static deserialize(deserializer: Deserializer): TypeWithTypeParameter {
  const type = Type.deserialize(deserializer);
  const type_parameter_list = Helpers.deserializeVectorType(deserializer);
  return new TypeWithTypeParameter(type,type_parameter_list);
}

}
export abstract class UnaryOperator {
abstract serialize(serializer: Serializer): void;

static deserialize(deserializer: Deserializer): UnaryOperator {
  const index = deserializer.deserializeVariantIndex();
  switch (index) {
    case 0: return UnaryOperatorVariantMinus.load(deserializer);
    case 1: return UnaryOperatorVariantBitwiseNot.load(deserializer);
    case 2: return UnaryOperatorVariantLogicalNot.load(deserializer);
    default: throw new Error("Unknown variant index for UnaryOperator: " + index);
  }
}
}


export class UnaryOperatorVariantMinus extends UnaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(0);
}

static load(deserializer: Deserializer): UnaryOperatorVariantMinus {
  return new UnaryOperatorVariantMinus();
}

}

export class UnaryOperatorVariantBitwiseNot extends UnaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(1);
}

static load(deserializer: Deserializer): UnaryOperatorVariantBitwiseNot {
  return new UnaryOperatorVariantBitwiseNot();
}

}

export class UnaryOperatorVariantLogicalNot extends UnaryOperator {
constructor () {
  super();
}

public serialize(serializer: Serializer): void {
  serializer.serializeVariantIndex(2);
}

static load(deserializer: Deserializer): UnaryOperatorVariantLogicalNot {
  return new UnaryOperatorVariantLogicalNot();
}

}
export class UnaryOperatorExpr {

constructor (public operator: UnaryOperator, public expr: Expr) {
}

public serialize(serializer: Serializer): void {
  this.operator.serialize(serializer);
  this.expr.serialize(serializer);
}

static deserialize(deserializer: Deserializer): UnaryOperatorExpr {
  const operator = UnaryOperator.deserialize(deserializer);
  const expr = Expr.deserialize(deserializer);
  return new UnaryOperatorExpr(operator,expr);
}

}
export class Variable {

constructor (public name: Identifer, public document: str, public type: Type, public expr: Expr) {
}

public serialize(serializer: Serializer): void {
  this.name.serialize(serializer);
  serializer.serializeStr(this.document);
  this.type.serialize(serializer);
  this.expr.serialize(serializer);
}

static deserialize(deserializer: Deserializer): Variable {
  const name = Identifer.deserialize(deserializer);
  const document = deserializer.deserializeStr();
  const type = Type.deserialize(deserializer);
  const expr = Expr.deserialize(deserializer);
  return new Variable(name,document,type,expr);
}

}
export class VariableDefinitionStatement {

constructor (public name: Identifer, public type: Type, public expr: Expr, public is_const: bool) {
}

public serialize(serializer: Serializer): void {
  this.name.serialize(serializer);
  this.type.serialize(serializer);
  this.expr.serialize(serializer);
  serializer.serializeBool(this.is_const);
}

static deserialize(deserializer: Deserializer): VariableDefinitionStatement {
  const name = Identifer.deserialize(deserializer);
  const type = Type.deserialize(deserializer);
  const expr = Expr.deserialize(deserializer);
  const is_const = deserializer.deserializeBool();
  return new VariableDefinitionStatement(name,type,expr,is_const);
}

}
export class Helpers {
  static serializeOptionBinaryOperator(value: Optional<BinaryOperator>, serializer: Serializer): void {
    if (value) {
        serializer.serializeOptionTag(true);
        value.serialize(serializer);
    } else {
        serializer.serializeOptionTag(false);
    }
  }

  static deserializeOptionBinaryOperator(deserializer: Deserializer): Optional<BinaryOperator> {
    const tag = deserializer.deserializeOptionTag();
    if (!tag) {
        return null;
    } else {
        return BinaryOperator.deserialize(deserializer);
    }
  }

  static serializeVectorArrayItem(value: Seq<ArrayItem>, serializer: Serializer): void {
    serializer.serializeLen(value.length);
    value.forEach((item: ArrayItem) => {
        item.serialize(serializer);
    });
  }

  static deserializeVectorArrayItem(deserializer: Deserializer): Seq<ArrayItem> {
    const length = deserializer.deserializeLen();
    const list: Seq<ArrayItem> = [];
    for (let i = 0; i < length; i++) {
        list.push(ArrayItem.deserialize(deserializer));
    }
    return list;
  }

  static serializeVectorExportDefinition(value: Seq<ExportDefinition>, serializer: Serializer): void {
    serializer.serializeLen(value.length);
    value.forEach((item: ExportDefinition) => {
        item.serialize(serializer);
    });
  }

  static deserializeVectorExportDefinition(deserializer: Deserializer): Seq<ExportDefinition> {
    const length = deserializer.deserializeLen();
    const list: Seq<ExportDefinition> = [];
    for (let i = 0; i < length; i++) {
        list.push(ExportDefinition.deserialize(deserializer));
    }
    return list;
  }

  static serializeVectorExpr(value: Seq<Expr>, serializer: Serializer): void {
    serializer.serializeLen(value.length);
    value.forEach((item: Expr) => {
        item.serialize(serializer);
    });
  }

  static deserializeVectorExpr(deserializer: Deserializer): Seq<Expr> {
    const length = deserializer.deserializeLen();
    const list: Seq<Expr> = [];
    for (let i = 0; i < length; i++) {
        list.push(Expr.deserialize(deserializer));
    }
    return list;
  }

  static serializeVectorIdentifer(value: Seq<Identifer>, serializer: Serializer): void {
    serializer.serializeLen(value.length);
    value.forEach((item: Identifer) => {
        item.serialize(serializer);
    });
  }

  static deserializeVectorIdentifer(deserializer: Deserializer): Seq<Identifer> {
    const length = deserializer.deserializeLen();
    const list: Seq<Identifer> = [];
    for (let i = 0; i < length; i++) {
        list.push(Identifer.deserialize(deserializer));
    }
    return list;
  }

  static serializeVectorMember(value: Seq<Member>, serializer: Serializer): void {
    serializer.serializeLen(value.length);
    value.forEach((item: Member) => {
        item.serialize(serializer);
    });
  }

  static deserializeVectorMember(deserializer: Deserializer): Seq<Member> {
    const length = deserializer.deserializeLen();
    const list: Seq<Member> = [];
    for (let i = 0; i < length; i++) {
        list.push(Member.deserialize(deserializer));
    }
    return list;
  }

  static serializeVectorMemberType(value: Seq<MemberType>, serializer: Serializer): void {
    serializer.serializeLen(value.length);
    value.forEach((item: MemberType) => {
        item.serialize(serializer);
    });
  }

  static deserializeVectorMemberType(deserializer: Deserializer): Seq<MemberType> {
    const length = deserializer.deserializeLen();
    const list: Seq<MemberType> = [];
    for (let i = 0; i < length; i++) {
        list.push(MemberType.deserialize(deserializer));
    }
    return list;
  }

  static serializeVectorParameter(value: Seq<Parameter>, serializer: Serializer): void {
    serializer.serializeLen(value.length);
    value.forEach((item: Parameter) => {
        item.serialize(serializer);
    });
  }

  static deserializeVectorParameter(deserializer: Deserializer): Seq<Parameter> {
    const length = deserializer.deserializeLen();
    const list: Seq<Parameter> = [];
    for (let i = 0; i < length; i++) {
        list.push(Parameter.deserialize(deserializer));
    }
    return list;
  }

  static serializeVectorParameterWithDocument(value: Seq<ParameterWithDocument>, serializer: Serializer): void {
    serializer.serializeLen(value.length);
    value.forEach((item: ParameterWithDocument) => {
        item.serialize(serializer);
    });
  }

  static deserializeVectorParameterWithDocument(deserializer: Deserializer): Seq<ParameterWithDocument> {
    const length = deserializer.deserializeLen();
    const list: Seq<ParameterWithDocument> = [];
    for (let i = 0; i < length; i++) {
        list.push(ParameterWithDocument.deserialize(deserializer));
    }
    return list;
  }

  static serializeVectorPattern(value: Seq<Pattern>, serializer: Serializer): void {
    serializer.serializeLen(value.length);
    value.forEach((item: Pattern) => {
        item.serialize(serializer);
    });
  }

  static deserializeVectorPattern(deserializer: Deserializer): Seq<Pattern> {
    const length = deserializer.deserializeLen();
    const list: Seq<Pattern> = [];
    for (let i = 0; i < length; i++) {
        list.push(Pattern.deserialize(deserializer));
    }
    return list;
  }

  static serializeVectorStatement(value: Seq<Statement>, serializer: Serializer): void {
    serializer.serializeLen(value.length);
    value.forEach((item: Statement) => {
        item.serialize(serializer);
    });
  }

  static deserializeVectorStatement(deserializer: Deserializer): Seq<Statement> {
    const length = deserializer.deserializeLen();
    const list: Seq<Statement> = [];
    for (let i = 0; i < length; i++) {
        list.push(Statement.deserialize(deserializer));
    }
    return list;
  }

  static serializeVectorType(value: Seq<Type>, serializer: Serializer): void {
    serializer.serializeLen(value.length);
    value.forEach((item: Type) => {
        item.serialize(serializer);
    });
  }

  static deserializeVectorType(deserializer: Deserializer): Seq<Type> {
    const length = deserializer.deserializeLen();
    const list: Seq<Type> = [];
    for (let i = 0; i < length; i++) {
        list.push(Type.deserialize(deserializer));
    }
    return list;
  }

}

