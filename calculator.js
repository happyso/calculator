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
        } else {
            jsOutput.textContent = displayedNum + keyContent;
        }
        calculator.dataset.previousKeyType = "number";
    }
    if (action === 'decimal') {
        jsOutput.textContent = displayedNum + '.';
    }

    if (action === 'clear') {
        jsOutput.textContent = 0;
        calculator.dataset.firstValue = '';
        calculator.dataset.operator = '';
        calculator.dataset.previousKeyType = '';
    }

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;

        //전에설정한 숫자와 연산자가 있어야 계산동작
        if (previousKeyType === "calculate"){
            calculator.dataset.firstValue = displayedNum;

        }else if (firstValue && operator && previousKeyType !== "operator"){
            const calcValue = calculate(firstValue, operator, secondValue);
            jsOutput.textContent = calcValue;//연산결과를 노출
            calculator.dataset.firstValue = calcValue;//결과를 다시 first에 할
        } else {
            //연산자와 숫자가 없으면
            calculator.dataset.firstValue = displayedNum;
            //기존값이 그대로 유지
        }
        calculator.dataset.operator = action;
        calculator.dataset.previousKeyType = "operator";
    }

    if (action === 'calculate') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;

        if (firstValue && operator) {
            const calcValue = calculate(firstValue, operator, secondValue);
            jsOutput.textContent = calcValue;
            calculator.dataset.firstValue = calcValue;
        }
        calculator.dataset.firstValue = jsOutput.textContent;
        calculator.dataset.previousKeyType = "calculate";
    }

    //숫자외에 연산자 버튼을 누르면 현재 입력된 숫자와 연산자가 저장됨
    //그다음에 숫자를 누르고 연산자를 누르면 전 연산자 결과가 노출됨

};


const calculate = (first, operator, second) => {
    if (operator === 'add') {
        return parseInt(first) + parseInt(second);
    } else if (operator === 'subtract'){
        return parseInt(first) - parseInt(second);
    }else if (operator === 'multiply'){
        return parseInt(first) * parseInt(second);
    }else if (operator === 'divide'){
        return parseInt(first) / parseInt(second);
    }
};

//연산자버튼과 숫자를비교해야한다
// 숫자일 경우 input에 숫자가 입력되게
//연산을 쌓아서 한꺼번에 보여줄필요없이쌓인 숫자를 그때그때 연산해서 replace.
//테스트 주석

numbers.forEach((item) => {
    item.addEventListener('click',handleClick);
});