/*
  vue3.0 用的是proxy
  直接用proxy代理某个对象,
  proxy是去创建一个代理对象
  
  Proxy 对象用于定义基本操作的自定义行为,和defineProperty类似,功能几乎一样,只不过用法有不同
  
  
  vue2.0 用的Object.defineProperty
  用的Object.defineProperty 改变某个对象的属性标签
  define 去改变原有的对象
  如果只想让一个对象有只读属性,没有可写属性,可以通过如下
  Object.defineProperty(this,'$router',{
    get:function(){
    
    }
  })
  
  属性不要定义在data里边,直接通过defineProperty定义,
 */


var obj = {a:1}
var objProxy = new Proxy (obj,{
  get:function (target,key,recevier) {
    return target[key]
  },
  set:function (target,key,value,recevier) {
    //写法一
    //target[key] = value
    //写法二
    return Reflect.set(target,key,value)
  }
})
