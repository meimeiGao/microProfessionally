
function vue() {
  this.$data = {a:1}
  this.el = document.getElementById('app')
  this.virtualdom = ''
  this.observe(this.$data)
  this.render()
}

vue.prototype.observe = function (obj) {
  var value;
  var self = this
  //这是2.0的写法
  /*for (var key in obj) {
    value = obj[key]
    if (value === 'object') {
      this.observe(value)
    }else{
      Object.defineProperty(this.$data,key,{
        get:function () {
          return value
        },
        set:function (newValue) {
          value = newValue
          self.render()
        }
      })
    }
  }*/
  
  //这是3.0的写法
  this.$data = new Proxy(this.$data,{
    get:function(target, key, receiver) {
      return target[key]
    },
    set:function(target, key, newValue, receiver) {
      target[key] = newValue
      self.render()
    }
  })
}

vue.prototype.render = function () {
  this.virtualdom = 'i am '+this.$data.a
  this.el.innerHTML = this.virtualdom
}


/*
  defineProperty 定义的get和set是对象的属性,那数组的怎么办
  数组的更新是通过push,shift 等方法来修改,通过修改数组的下标是无法修改的
 */

var arrayPro = Array.prototype
console.log('arrayPro',arrayPro)
var arrayob = Object.create(arrayPro)
console.log('arrayob',arrayob)
var arr = ['push','pro','shift','unshift']
arr.forEach((method,index)=>{
  console.log('arrayob[method]',arrayob[method]);
  arrayob[method] = function () {
    var ret = arrayPro[method].apply(this,arguments)
    dep.notify()
    return ret
  }
})


