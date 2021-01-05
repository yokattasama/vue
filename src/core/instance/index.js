import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 构造调用会执行 【initMixin.js】 中的 _init 方法
  this._init(options)
}

// 在暴露 Vue 构造函数之前， 在Vue原型上添加一系列方法和属性
initMixin(Vue) // 执行一系列生命周期后 执行 VM.$mount
stateMixin(Vue) // 定义 $watch 方法
eventsMixin(Vue) // 定义事件相关
lifecycleMixin(Vue)
renderMixin(Vue) //定义 vm.nextTick vm._render

export default Vue
