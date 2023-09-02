const getDiv = divClass => document.querySelector("." + divClass);

class Event {
    constructor() {
        this.clickedElements = [];
    }

    eventClick = (div, index) => {
        div.addEventListener('click', () => {
            div.style.backgroundColor = 'green';
            this.clickedElements.push(index);
        });
    }

    eventIndex = () => {
        for (let i = 1; i <= 9; i++) { 
            const div = getDiv("div" + i);
            this.eventClick(div, i);
        }
    }

    btnEvent = () => {
        const btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            btn.style.backgroundColor = 'green';
            alert(`Ви вибрали цифри: ${this.clickedElements}`);
        });
    }
}

const myEvent = new Event();
myEvent.eventIndex();
myEvent.btnEvent();
