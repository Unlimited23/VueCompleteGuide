const app = Vue.createApp({
    data() {
        return {
            result: 0,
            notThereYet: 'Not there yet!',
            tooMuch: 'Too much!'
        }
    },
    methods: {
        add(num) {
            this.result = this.result + num;
        }
    },
    computed: {
        getResult() {
            if (this.result < 37) {
                return this.notThereYet;
            } else if (this.result == 37) {
                return this.result;
            }
            return this.tooMuch;
        }
    },
    watch: {
        getResult() {
            const _this = this;
            setTimeout(function() {
                _this.result = 0;
            }, 5000);
        }
    }
});

const mountedApp = app.mount('#assignment');