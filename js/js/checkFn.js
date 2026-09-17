// export 代表导出该方法 
export let checkUsername = () => {
    let flag = true;    //用来标识用户名是否合法
    let usernameValue = document.querySelector("#username").value;

    //校验用户名的长度
    if (!/\w{4,16}/.test(usernameValue)) {
        // alert("用户名不合法！");
        document.querySelector("#name_msg").innerHTML = "用户名不合法";
        flag = false;
    } else {
        document.querySelector("#name_msg").innerHTML = "";
    }

    return flag;
}
export let checkPhone = () => {
    let phoneValue = document.querySelector("#phone").value;
    let flag = true;

    //校验用户名的长度
    if (!/^1[3-9]\d{9}$/.test(phoneValue)) {
        document.querySelector("#phone_msg").innerHTML = "手机号不合法";
        flag = false;
    } else {
        document.querySelector("#phone_msg").innerHTML = "";
    }
    return flag;
}
