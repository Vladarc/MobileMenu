let input = document.querySelector("#user_phone"); // plugin for check mobile nubmer 
intlTelInput(input, {
    utilsScript:'./src/utils.js',
    preferredCountries:["ua"],
    separateDialCode:true
 
}); 

const BODY = document.body
const overleyElement = document.querySelector('.canvas-off')

// toggle burger menu 
 const toggler = (event) =>{
    event.preventDefault()
    BODY.classList.toggle('opened')
    overleyElement.classList.toggle('active')
}












//mobile menu 
const headerMenu = document.querySelector('.nav__list')

const addEvent =  () => {
    if(window.innerWidth <= 992){
    console.log("addEvent")

        const handler = event => {
            let {target} = event 
            let link = target.classList.contains('nav__link')
            let canvasOff = target.classList.contains('active')
            if(link || canvasOff ){
                BODY.classList.remove('opened')
                overleyElement.classList.remove('active')
            }
        }
    
    
    headerMenu.addEventListener('click',handler)
    overleyElement.addEventListener('click',handler)     
    
    
}
}

window.addEventListener('resize', addEvent)
addEvent()  

/* let {target} = event 

    if(link){
        BODY.classList.remove('opened')
       
    }
}) */