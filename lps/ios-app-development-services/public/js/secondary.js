document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll("section"),t=document.querySelectorAll(".mainLink");window.addEventListener("scroll",()=>{let n="";e.forEach(e=>{let t=e.offsetTop,c=e.clientHeight;pageYOffset>=t-c/3&&(n=e.getAttribute("id"))}),t.forEach(e=>{e.classList.remove("active"),e.getAttribute("href").includes(n)&&e.classList.add("active")})})});let openMenu=document.querySelector(".navbar-toggle"),sideMenu=document.querySelector(".menu"),closeMenu=document.querySelector(".navbar-close");openMenu.addEventListener("click",function(){sideMenu.style.left="0%"}),closeMenu.addEventListener("click",function(){sideMenu.style.left="-100%"}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".chooseSec .card"),t=document.querySelector(".chooseSec .card.active");e.forEach(e=>{e.addEventListener("mouseenter",function(){t.classList.remove("active"),this.classList.add("active")}),e.addEventListener("mouseleave",function(){this.classList.remove("active"),t.classList.add("active")})})});