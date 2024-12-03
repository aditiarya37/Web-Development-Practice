const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
buttons.forEach(function(i){
    i.addEventListener('click',function(e){
        let color = e.target.id
        switch(color){
            case 'grey':
                body.style.backgroundColor = e.target.id
                break
            case 'blue':
                body.style.backgroundColor = e.target.id
                break
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break
            case 'white':
                body.style.backgroundColor = e.target.id
                break
        }
    })
})