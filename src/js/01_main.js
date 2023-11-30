
const header = document.querySelectorAll('.header')
const nav = document.querySelectorAll('.nav')
const container = document.querySelectorAll('.container')
const hedDesc = document.querySelectorAll('.header-desc-box')

window.addEventListener('resize', ()=>{
    let scrW = window.innerWidth;

    if(scrW < 1320){
        container.forEach((e)=>{
            e.style.width = `${scrW-36}px`
        })

    } else {

    }
})


document.addEventListener("DOMContentLoaded", function() {
    let scrW = window.innerWidth;
    const actCont = document.getElementById('action-content');
    console.log(actCont)

    if(scrW < 1440){
        
    }

    if(scrW < 1320){
        container.forEach((e)=>{
            e.style.width = `${scrW-36}px`
        })

    } else {

    }

});

