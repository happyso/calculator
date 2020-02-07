const numbers = document.querySelectorAll('button');
const jsOutput = document.querySelector('#js-output');

const handleClick = (e) => {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = jsOutput.textContent;

    if (!action) {
        jsOutput.textContent = displayedNum + keyContent;
    }

    if (action === 'add') {
        console.log('add!');
    }

    if (action === 'add') {
        console.log('add!');
    }
};

//연산자버튼과 숫자를비교해야한다
// 숫자일 경우 input에 숫자가 입력되게
//연산을 쌓아서 한꺼번에 보여줄필요없이쌓인 숫자를 그때그때 연산해서 replace.
//

numbers.forEach((item) => {
    item.addEventListener('click',handleClick);
});