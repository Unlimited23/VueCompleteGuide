const app = Vue.createApp({
    data: function() {
        return {
            output: '',
            output2: ''
        };
    },
    methods: {
        notify() {
            alert('This is a notification!');
        },
        printOnKeydown(e) {
            this.output = e.target.value;
        },
        printOnKeydownEnter(e) {
            this.output2 = e.target.value;
        }
    }
});

app.mount('#assignment');