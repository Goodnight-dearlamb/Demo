function greet(person: string) {
  return "hello" + person;
}

console.log(greet("管家璇"));

// let str: string = "监听成功";

// boolean
let flag: boolean = true;
flag = false;

// number
let a: number = 1;
a = 2;

// string
let str: string = "字符串";
str = `字符串的${a}`;

// array
// 第一种定义方式
// 设置数组中出现的数据类型
let arr: number[] = [1, 2, 3];

// 第二种定义方式
let arr2: Array<string> = ["1", "2", "3"];