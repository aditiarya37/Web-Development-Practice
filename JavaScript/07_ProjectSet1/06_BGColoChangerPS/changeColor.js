const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
const body = document.querySelector('body')
const changeColor = function(){
    body.style.backgroundColor = randomColor()
}
let colorId
document.querySelector('#start').addEventListener('click',function(){
    if(!colorId){
        colorId = setInterval(changeColor,1000)
    }
})
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(colorId)
    colorId = null
})