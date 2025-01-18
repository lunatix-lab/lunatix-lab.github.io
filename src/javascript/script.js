function menuShow(path='./') {
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('event-click-open-menu'))
    {
        menuMobile.classList.remove('event-click-open-menu');
        document.querySelector('.icon').src = path + "src/images/menu_white_36dp.svg";
    }
    else
    {
        menuMobile.classList.add('event-click-open-menu');
        document.querySelector('.icon').src = path + "src/images/close_white_36dp.svg";
    }
}

function blogLngShow(event) {
    let dropdownMobileMenu = document.querySelector('.nav-item-dropdown-mobile-menu');
    const navItemArrow = event.target.querySelector('.nav-item-arrow');
    /* clear the default event */
    event.preventDefault();

    dropdownMobileMenu.classList.toggle('event-click-open-blog-lng');

    if( navItemArrow ) {
        navItemArrow.classList.toggle('event-click-rotate-blog-arrow');
    }
}

function blogCtgShow(event) {
    let dropdownMobileMenu = document.querySelector('.nav-item-dropdown-mobile-category');
    const navItemArrow = event.target.querySelector('.nav-item-arrow');
    /* clear the default event */
    event.preventDefault();

    dropdownMobileMenu.classList.toggle('event-click-open-blog-lng');

    if( navItemArrow ) {
        navItemArrow.classList.toggle('event-click-rotate-blog-arrow');
    }
}
