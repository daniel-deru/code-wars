function zero(op) {return eval((op ? 0 + op: 0))}
function one(op) {return eval((op ? 1 + op: 1 ))}
function two(op) {return eval((op ? 2 + op: 2 ))}
function three(op) {return eval((op ? 3 + op: 3 ))}
function four(op) {return eval((op ? 4 + op: 4 ))}
function five(op) {return eval((op ? 5 + op: 5 ))}
function six(op) {return eval((op ? 6 + op: 6 ))}
function seven(op) {return eval((op ? 7 + op: 7 ))}
function eight(op) {return eval((op ? 8 + op: 8 ))}
function nine(op) {return eval((op ? 9 + op: 9 ))}

function plus(num) {return  '+' + num}
function minus(num) {return '-' + num}
function times(num) {return '*' + num}
function dividedBy(num) {return '/' + num}

console.log(one(dividedBy(five())))
console.log(times(five()))
console.log(five())

let somet = '/'
let oneq = 1
let twoq = 2
console.log(eval(oneq+somet+twoq))