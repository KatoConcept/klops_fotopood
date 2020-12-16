// import React from 'react';

function clickHandler() {
    document.querySelector(".sideDrawer").classList.toggle('open');
    document.querySelector("body").classList.toggle('open');
    document.querySelector(".line1").classList.toggle('open');
    document.querySelector(".line2").classList.toggle('open');
    document.querySelector(".line3").classList.toggle('open');
    document.querySelector(".side-drawer-logo").classList.toggle('open');
    document.querySelector(".normal-menu-logo").classList.toggle('closed');
}

export default clickHandler;