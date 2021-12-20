setLeftOperand('2');
setRightOperand('2');
setOperator('+');

setLeftOperand(setResult('') + '*' + '4');


function onLeftOperandChange(value) {
}

function onRightOperandChange(value) {
}

function onOperatorChange(value) {
}

function onSubmit () {
  setResult(4);
  setExpression((setLeftOperand('')) + (setOperator('')) + (setRightOperand('')));
}

function onClear () {
}



