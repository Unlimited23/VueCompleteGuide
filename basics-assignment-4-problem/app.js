const app = Vue.createApp({
    data() {
        return {
            userClass: '',
            paragraphHidden: false,
            bgColor: '',
        };
    },
    methods: {
        toggleParagraph() {
            this.paragraphHidden = !this.paragraphHidden;
        }
    },
    computed: {
        userClassAttribute() {
            return ['user1', 'user2'].some(c => c == this.userClass) ? this.userClass : '';
        }
    }
}).mount('#assignment')