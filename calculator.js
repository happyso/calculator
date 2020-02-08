const numbers = document.querySelectorAll('button');
const jsOutput = document.querySelector('#js-output');
const calculator = document.querySelector('#calculator');


const handleClick = (event) => {
    const key = event.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = jsOutput.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;

    if (!action){
        if (jsOutput.textContent === '0' || previousKeyType === "operator") {
            jsOutput.textContent = keyContent;
            calculator.dataset.previousKeyType = "";
        } else {
            jsOutput.textContent = displayedNum + keyContent;
        }
    }
    if (action === 'decimal') {
        jsOutput.textContent = displayedNum + '.';
    }

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {


        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;

        if (firstValue && operator) {
            jsOutput.textContent = calculate(firstValue, operator, secondValue);
        }

        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;
        calculator.dataset.previousKeyType = "operator";
    }

    //숫자외에 연산자 버튼을 누르면 현재 입력된 숫자와 연산자가 저장됨
    //그다음에 숫자를 누르고 연산자를 누르면 전 연산자 결과가 노출됨

};


const calculate = (firstValue, operator, secondValue) => {
    if (operator === 'add') {
        return parseInt(firstValue) + parseInt(secondValue);
    } else if (operator === 'subtract'){
        return parseInt(firstValue) - parseInt(secondValue);
    }else if (operator === 'multiply'){
        return parseInt(firstValue) * parseInt(secondValue);
    }else if (operator === 'divide'){
        return parseInt(firstValue) / parseInt(secondValue);
    }
};

//연산자버튼과 숫자를비교해야한다
// 숫자일 경우 input에 숫자가 입력되게
//연산을 쌓아서 한꺼번에 보여줄필요없이쌓인 숫자를 그때그때 연산해서 replace.
//테스트 주석

numbers.forEach((item) => {
    item.addEventListener('click',handleClick);
});