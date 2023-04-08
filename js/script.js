const mobile_nav = document.querySelector('.icon-mob');

const nav_header = document.querySelector('.head')

const toggleMobileNav = () => {
    // alert("Fuck");
    nav_header.classList.toggle('active');
    mobile_nav.classList.toggle('active');
};


mobile_nav.addEventListener('click', () => toggleMobileNav());