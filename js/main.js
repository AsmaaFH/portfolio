// Make Navbar Fixed while scrolling and arrow-up

let navbar = document.querySelector('.landing-page .navbar');
let arrowUp = document.querySelector('.arrow-up');
window.onscroll = function(){
    if(window.pageYOffset > '300'){
        navbar.classList.add('scrolling');
        arrowUp.style.display = 'flex';
    }else{
        navbar.classList.remove('scrolling');
        arrowUp.style.display = 'none';
    } 
}


//arrow up
arrowUp.onclick = function(){
    document.querySelector('.landing-page').scrollIntoView({behavior: "smooth", block: "center"});
}

//Scroll To Section
let navSpans = document.querySelectorAll('.landing-page .navbar span');
navSpans.forEach(el => {
    el.addEventListener('click', (e)=>{
        var classN = `.${el.dataset.scroll}`;
        document.querySelector(classN).scrollIntoView({behavior: "smooth", block: "center"});
    });
})

//Active Link
window.addEventListener('scroll', function(){
    var allSections = document.querySelectorAll('.section');
    let scrollY = window.pageYOffset;
    allSections.forEach(el => {
        let elTop = el.offsetTop - (window.innerHeight/2) 
        if(scrollY > elTop &&
        (scrollY <= elTop + el.offsetHeight)){
            navSpans.forEach(link =>{
                if(el.classList.contains(link.dataset.scroll)){
                    link.style.color = 'var(--main-color)';
                }else{
                    link.style.color = 'black';
                }
            })
        }
    });
});


//Toggle Navbar
document.querySelector('button.toggle').onclick = function(){
    document.querySelector('.navbar .links').classList.toggle('open');
}

// Scroll Animation

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
        displayScrollElement(el);
    }
    })
}

window.addEventListener("scroll", () => { 
    handleScrollAnimation();
});

// const handleScrollAnimation = () => {
//     scrollElements.forEach((el) => {
//     if (elementInView(el, 1.25)) {
//         displayScrollElement(el);
//     } else if (elementOutofView(el)) {
//         hideScrollElement(el)
//     }
//     })
// }