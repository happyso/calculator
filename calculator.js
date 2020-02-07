const numbers = document.querySelectorAll('button');
const jsOutput = document.querySelector('#js-output');

let firstValue = null;
let operator = null;
let secondValue = null;

const handleClick = (e) => {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = jsOutput.textContent;
    const calculater = action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide';

    if (calculater) {
        firstValue = displayedNum;
        operator = action;

        if (firstValue && operator) {
            secondValue = jsOutput.textContent;
            jsOutput.textContent = calculate(firstValue, operator, secondValue)
        }

    } else {
        addValue(action, keyContent, displayedNum);
    }
    //jsOutput.textContent = calculate(firstValue, operator, secondValue)
};

const addValue = (action, keyContent, displayedNum) => {
    if (jsOutput.textContent === '0' ) {
        jsOutput.textContent = keyContent;
    } else if (!action) {
        jsOutput.textContent = displayedNum + keyContent;
    }
    if (action === 'decimal') {
        jsOutput.textContent = displayedNum + '.';
    }
};

const calculate = (firstValue, operator, secondValue) => {

};

//연산자버튼과 숫자를비교해야한다
// 숫자일 경우 input에 숫자가 입력되게
//연산을 쌓아서 한꺼번에 보여줄필요없이쌓인 숫자를 그때그때 연산해서 replace.
//테스트 주석

numbers.forEach((item) => {
    item.addEventListener('click',handleClick);
});