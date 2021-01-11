// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const ulEl = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemElement = document.createElement('li');
//     listItemElement.textContent = enteredValue;
//     ulEl.append(listItemElement);
//     inputEl.text = '';
// }

// buttonEl.addEventListener('click', addGoal);

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: '',
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');
