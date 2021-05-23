const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullName() {
      // This will be called only when a modification in the name property is made;
      return this.name + ' ' + 'Ruzhin';
    }
  },
  methods: {
    outputFullName() {
      // This will be called every time any modification is made inside the app;
      return this.name + ' ' + 'Ruzhin';
    },
    setName(event) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

const mountedApp = app.mount('#events');
