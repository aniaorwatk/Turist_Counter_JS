let saveEl = document.querySelector(".saveEl");
let countEl = document.querySelector(".countEl");
let sumEl = document.querySelector(".sumEl");
let messageEl = document.querySelector(".messageEl");
let count = 0;
let number = "";

const increment = () => {
    count += 1;
    if (count === 10) {
        count -= 1
        messageEl.textContent = "One group can have a maximum of 9 people!"
    }
    countEl.textContent = count;
}

const save = () => {
    if (count === 0) {
        countStr = ""
    } else if (!number.length) {
        countStr = `${count} `;
    } else if (number.length) {
        countStr = `- ${count} `;
    }
    number += countStr;
    saveEl.textContent = `Previous entries: ${number}`;
    count = 0;
    countEl.textContent = 0;
    messageEl.textContent = ""
}

const sumTurists = () => {
    let array = [...number]
        .filter(number => {
            return number !== "-" && number !== " "
        })
        .map(element => parseInt(element))
        .reduce((a, b) => a + b, 0)
    sumEl.textContent = `Sum: ${array}`
}

const resets = () => {
    count = 0;
    number = "";
    sumEl.textContent = `Sum:`;
    countEl.textContent = 0;
    saveEl.textContent = `Previous entries:`;
    messageEl.textContent = ""
}
