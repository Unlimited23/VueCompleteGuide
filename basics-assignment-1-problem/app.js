const app = Vue.createApp({
    data: function() {
        return {
            name: 'Petyo',
            age: 26,
            url: 'https://vuejs.org/images/logo.png',
        }
    },
    computed: {
        ageInFiveYears() {
            return this.age + 5;
        },
        favNum() {
            return Math.random();
        }
    }
});

app.mount('#assignment');