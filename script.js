// this is a shitty calculator i will eventually get back to it.
// TODO: able to overlap operators.
// TODO: better Del button.
// TODO: decimals.
// TODO: hardcodes fix.

const smallDisplay = document.querySelector(".history")
const bigDisplay = document.querySelector(".result")
const inputNumber = document.querySelector(".btn.number")
const inputOperator = document.querySelector(".btn.operand")
const equal = document.querySelector(".btn.equal")
const clear = document.querySelector(".btn.reset")
const del = document.querySelector(".btn.delete")

let num1 = ""
let whichNum = false
let num2 = ""
let onResult = false
let currentNum = ""
let operator = null
let operatorDisplay = ""
let resultValue = ""

const setOperands = (num) => {
	if (!operator) {
		num1 += num
		bigDisplay.innerHTML = num1
	} else if (operator) {
		num2 += num
		bigDisplay.innerHTML = num2
		whichNum = true
	} else if (operator && num2) {
		calculate()
	}
}

const opString = (op) => {
	switch (op) {
		case "add":
			operatorDisplay = "+"
			break
		case "minus":
			operatorDisplay = "-"
			break
		case "divide":
			operatorDisplay = "÷"
			break
		case "multiply":
			operatorDisplay = "×"
			break
		case "percentage":
			operatorDisplay = "%"
		default:
			break
	}
}
// Operation

const setOperator = (newOperator) => {
	if (!num1) {
		num1 = 0
	}

	if (!num1 && !num2) return

	if (operator) {
		operator = newOperator
		calculate()
	} else {
		opString(newOperator)
		smallDisplay.innerHTML = `${num1} ${operatorDisplay}`
		bigDisplay.innerHTML = ""
		operator = newOperator
	}
}

const calculate = () => {
	let result

	switch (operator) {
		case "add":
			result = parseFloat(num1) + parseFloat(num2)
			operatorDisplay = "+"
			break
		case "minus":
			result = parseFloat(num1) - parseFloat(num2)
			operatorDisplay = "-"
			break
		case "divide":
			result = parseFloat(num1) / parseFloat(num2)
			operatorDisplay = "÷"
			break
		case "multiply":
			result = parseFloat(num1) * parseFloat(num2)
			operatorDisplay = "x"
			break
		case "percentage":
			result = parseFloat(num1) % parseFloat(num2)
			operatorDisplay = "%"
			break
	}
	smallDisplay.innerHTML = `${num1} ${operatorDisplay} ${num2}`
	bigDisplay.innerHTML = result
	num1 = result
	num2 = ""
	onResult = true
}

const reset = () => {
	num1 = ""
	num2 = ""
	operator = null
	operatorDisplay = ""
	result = ""
	bigDisplay.innerHTML = ""
	smallDisplay.innerHTML = ""
	onResult = false
	currentNum = ""
	whichNum = false
	resultValue = ""
}

const deleteButton = () => {
	currentNum = bigDisplay.innerHTML
	currentNum = currentNum.substring(0, currentNum.length - 1)
	if (!whichNum) {
		// if currentnum is num1
		num1 = currentNum
	} else if (onResult) {
		return
	} else {
		num2 = currentNum
	}
	bigDisplay.innerHTML = currentNum
	console.log(num1, num2)
}
