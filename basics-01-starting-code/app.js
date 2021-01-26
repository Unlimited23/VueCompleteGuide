const app = Vue.createApp({
    data () {
        return {
            courseGoalA: {'text': 'Finish the Vue course and learn Vue!'},
            courseGoalB: {'text': '<h2 style="color: red;">Master Vue and build an amazing App!</h2>'},
            vueLink: 'https://vuejs.org/',
        };
    },
    methods: {
        outputGoal () {
            return (Math.random() < 0.5) ? this.courseGoalA.text : this.courseGoalB.text;
        }
    }
});

app.mount('#user-goal');