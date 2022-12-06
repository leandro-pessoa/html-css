var button = document.getElementById('button')
var nav = document.getElementById('nav')
function action(){
    if (nav.style.display == 'none'){
        nav.style.display = 'block'
    }
    else{
        nav.style.display = 'none'
    }
}
function mud(){
    if(window.innerWidth >= 768){
        nav.style.display = 'block'
    }
    else{
        nav.style.display = 'none'
    }
}