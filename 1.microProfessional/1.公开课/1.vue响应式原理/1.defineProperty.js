var obj = {
  a:1,
  b:2,
  c:3
}
var _value = obj.a
/*
  Object.defineProperty(obj,'a',{
  value:''//属性值
  writable:false,//是否可修改
  enumerable:true,//是否可遍历/枚举
  configurable:true,//是否可删除
})
 */


Object.defineProperty(obj,'a',{
  // writable:true,
  enumerable:true,//是否可遍历/枚举
  configurable:true,//是否可删除
  get() {
    return _value
    console.log('you get a ');
  },
  set(newValue) {
    _value = newValue
    console.log('you set a');
  }
  
})

obj.a = 3
for (var item in obj) {
  console.log(item);
}
delete obj.c

console.log(obj);
var aa = obj.a
obj.a = 4

console.log(obj.a);
console.log(obj.a = 5)
obj.a = 5

var a = obj.a
console.log(a)
obj.a = 4

