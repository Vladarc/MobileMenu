let input = document.querySelector("#user_phone"); // plugin for check mobile nubmer 
intlTelInput(input, {
    utilsScript:'./src/utils.js',
    preferredCountries:["ua"],
    separateDialCode:true
 
}); 

const BODY = document.body
const toggle = event => {
    event.preventDefault()
    BODY.classList.toggle('opened')
}





//mobile menu 
 const headerMenu = document.querySelector('.nav__list')

const addEvent =  () => {
    if(window.innerWidth <= 992){
        console.log("addEvent")
        headerMenu.addEventListener('click',(event) => {
            let {target} = event 
            let link = target.classList.contains('nav__link')
                if(link){
                    BODY.classList.remove('opened')
                   
                }
        })

    }
}


window.addEventListener('resize', addEvent)
addEvent() 