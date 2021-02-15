const app = Vue.createApp({
  data() {
    const name = 'Petyo'
    return {
      counter: 10,
      num: 5,
      name: name,
      confirmedName: name,
    };
  },
  methods: {
    add(num) {
     this.counter += this.num; 
    },
    reduce() {
      this.counter -= this.num;
    },
    updateName(e, name) {
      this.name = e.target.value || name;
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

const mountedApp = app.mount('#events');
