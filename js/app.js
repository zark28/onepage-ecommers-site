//****** toggle menu ******//

const showMenu =(toggleId, navId)=>{

    const toggle = document.getElementById(toggleId),

        nav = document.getElementById(navId)

        if(toggleId && navId){
            toggle.addEventListener('click',()=>{
                nav.classList.toggle('show')
            })
        }

}

showMenu('nav-toggle','nav-menu')


// Active link

const navLink =document.querySelectorAll('.nav-link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // remove menu Mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkAction))