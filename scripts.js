const device = () =>{
    desktopVersion = document.querySelector(".principal-desktop");
    mobileVersion = document.querySelector(".principal-mobile");
    largura = window.screen.width;
    (largura > 1075)? desktopVersion.style.display = "block": mobileVersion.style.display = "block";
}


window.addEventListener("load", device);

