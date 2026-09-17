// 另外也可以改别名 checkPhone as cku 那下面调用都要改成cku了
import { checkPhone as cku, checkUsername } from "./checkFn.js";

// 需求：表单校验--用户名：长度在4-16位；手机号：长度11位
// 分析：JS事件--鼠标离焦事件blur, 表单提交事件submit,, DOM操作
// 校验用户名
// 1.获取dom元素
let input = document.querySelector("#username");



input.addEventListener('blur', checkUsername);

// 校验手机号
let input2 = document.querySelector("#phone");

input2.addEventListener('blur', cku);


// 表单提交时，需要校验整个表单是否合法，如果不合法不让提交
document.querySelector("form").addEventListener("submit", (event) => {
    if (!checkUsername() || !cku()) {
        alert("用户名或手机号不合法！");
        //阻止表单提交
        event.preventDefault();
    }
}) 