function aboutfunc(){
    document.documentElement.scrollTop= 2500;
}

hams= document.querySelector('.hams');

navbar= document.querySelector('.navbar');

navitems= document.querySelector('.navitems');

hams.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav');
    navitems.classList.toggle('navseen');
})



