let menubar = document.querySelector(".menubar");
window.addEventListener("scroll", ()=>{
    let scrolling  = this.scrollY;

    if(scrolling > 100){
        menubar.classList.add("fixed_menu");
    }
    else{
        menubar.classList.remove("fixed_menu");
    }
})

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:true,
    dots:true,
    prevArrow: "<i class='bx bxs-left-arrow-alt prr' ></i>" ,
    nextArrow: "<i class='bx bxs-right-arrow-alt nrr' ></i>",
  });
          
  $('.counters').counterUp({
    delay: 20,
    time: 2000
});
$('.skills_counters').counterUp({
    delay: 20,
    time: 2000
});

let bar1 = document.querySelector(".skils_bar1");
let bar2 = document.querySelector(".skils_bar2");
let bar3 = document.querySelector(".skils_bar3");
let bar4 = document.querySelector(".skils_bar4");
let bar5 = document.querySelector(".skils_bar5");
let bar6 = document.querySelector(".skils_bar6");
window.addEventListener("load", function(){
    bar1.classList.add("bar1");
    bar2.classList.add("bar2");
    bar3.classList.add("bar3");
    bar4.classList.add("bar4");
    bar5.classList.add("bar5");
    bar6.classList.add("bar6");
})


