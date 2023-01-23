let saveEl = document.querySelector(".saveEl")
let countEl = document.querySelector(".countEl")
let count = 0;
let number = "";

const increment=()=> {
    count += 1;
    countEl.textContent = count;
}
console.log(countEl)
const save = () => {

    if (!number.length) {
        countStr = `${count} `;
    }

    else if (number.length) {
        countStr = `- ${count} `;
    }
    number += countStr;
    saveEl.textContent = `Previous entries: ${number}`;
    count = 0;
    countEl.textContent = 0;
}
