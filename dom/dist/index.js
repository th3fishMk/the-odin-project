"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container = document.querySelector('#container');
if (container) {
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';
    container.appendChild(content);
    console.log('Child appended');
    // Add a red text
    //  'Hey I am red'
    const redText = document.createElement('p');
    redText.textContent = 'I am red!';
    redText.style.color = 'red';
    container.appendChild(redText);
    // Add a blue text
    //  'Hey I am blue'
    const blueText = document.createElement('p');
    blueText.textContent = 'I am blue!';
    blueText.style.color = 'blue';
    container.appendChild(blueText);
    // Add a div with a black border and pink background
    //  another h1 'im in a div'
    const div = document.createElement('div');
    div.style.cssText = 'border: 2px solid black; background: pink';
    const tempHeader = document.createElement('h2');
    tempHeader.textContent = 'I am in a div';
    const tempP = document.createElement('p');
    tempP.textContent = 'Me too!';
    div.appendChild(tempHeader);
    div.appendChild(tempP);
    container.appendChild(div);
}
else {
    console.log('Some error just happened');
}
// const btn = document.querySelector('#btn') as HTMLButtonElement;
// btn.onclick = () => alert('Hellow');
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    // alert('Hello World');
});
btn.addEventListener('click', function (e) {
    if (e.target) {
        if (e.target instanceof HTMLElement) {
            e.target.style.background = 'blue';
        }
    }
});
//# sourceMappingURL=index.js.map