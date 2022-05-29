//  存在画线卡顿问题
// var canvas = document.getElementById('canvas')
// console.log('canvas',canvas)
// // canvas.onclick = (e) => {
// canvas.onmousemove = (e) => {     
//     console.log(e.clientX)
//     console.log(e.clientY)
//     // console.log 调试大法
//     let div = document.createElement('div')
//     div.style.position = 'absolute'
//     div.style.left = e.clientX + 'px'
//     div.style.top = e.clientY + 'px'
//     // div.style.border = '1px solid red'
//     div.style.width = '6px'
//     div.style.height = '6px'
//     div.style.marginLeft = '-3px'
//     div.style.marginTop = '-3px'
//     div.style.borderRadius = '50%'
//     div.style.backgroundColor = 'black'
//     canvas.appendChild(div)
// }

//  改为使用canvas

//画线
var canvas = document.getElementById("canvas");
// 获取浏览器窗口文档显示区域的宽度，不包括滚动条。
canvas.width = document.documentElement.clientWidth
// 获取浏览器窗口文档显示区域的高度，不包括滚动条。
canvas.height = document.documentElement.clientHeight

var ctx = canvas.getContext("2d");

let painting = false

ctx.fillStyle = "black"
ctx.strokeStyle = "none"

canvas.onmousedown = () => {
    painting = true
}


canvas.onmousemove = (e) => {
    // console.log(e.clientX)
    // console.log(e.clientY)
    if (painting === true) {
        // ctx.fillRect(e.clientX - 5, e.clientY - 5, 10, 10);
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill()
    } else {
        console.log('什么都不做')
    }
}

canvas.onmouseup = () => {
    painting = false
}