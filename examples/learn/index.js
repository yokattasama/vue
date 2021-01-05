import Vue from './vue.esm.js'
const app = new Vue({
  data: {
    message: 'hello vue'
  },
  el: '#app',
  render(createElement) {
    return createElement('div', {
      attrs: {
        id: '#app2'
      }
    }, this.message, true)
  }
})
// tag div
// data this.message
// children true
// type: ''

// type = children
// children = data
// data = undefined
