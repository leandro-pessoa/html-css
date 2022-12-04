var men = document.getElementById('menu')
var body = document.getElementById('body')
function action(){
    if (men.style.display == 'none'){
        men.style.display = 'block'
    }
    else{
        men.style.display = 'none'
    }
}
function mudou(){
    if(window.innerWidth >= 768){
        men.style.display = 'block'
    }
    else{
        men.style.display = 'none'
    }
}