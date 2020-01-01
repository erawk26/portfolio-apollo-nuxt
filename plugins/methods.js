import Vue from 'vue'
Vue.mixin({
  methods: {
    machine_readable: (val) => val
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
  }
})
