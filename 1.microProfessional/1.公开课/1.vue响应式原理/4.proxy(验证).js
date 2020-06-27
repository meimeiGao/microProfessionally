var validator={
  age:function (age) {
    if (typeof age === 'number' && age >= 18) {
      return true
    }
    return false
  },
  name:function (name) {
    var reg = /^[\u4e00-\u9fa5]$/
    if (typeof name === 'string' && reg.test(name)) {
      return true
    }
    return false
  }
}



function Person(age,name) {
  this.name = name
  this.age = age
  return new Proxy(this,{
    get: function (target, key) {
      return target[key]
    },
    set:function(target, key, newValue, receiver) {
      if(validator[key](newValue)) {
        //return target[key] = newValue
        return Reflect.set(target,key,newValue)
      }else{
        throw new Error(key + ' is not right')
      }
    }
  })
}

var person = new Person(12,'tony')

person.name = 'meimei'


