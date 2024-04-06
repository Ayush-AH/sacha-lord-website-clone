function loader(){
    var load = gsap.timeline()

    load
    .from("#overlay",{
        backgroundColor:"#0C0C15",
        delay:.5
    })
    .from("#logo #pt2 h1",{
        y:"100%",
        duration:.5,
        })
    .from("#logo #pt1 h6",{
        y:"100%",
        duration:.5,
    })


    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#page1",
            scroller:"body",
            start:"top top",
            end:"top -10%",
            scrub:1,
        }
    })
    tl
    .to("#project",{
        x:-105,
        duration:.5
    },"a")
    .to("#news",{
        x:105,
        duration:.5
    },"a")
    .to("#logo",{
        top:"-12%",
        scale:.15,
        duration:.5
    },"a")
    .to("#pt1",{
        opacity:0,
        duration:0
    },"a")
    
    
}
loader()

gsap.to(".cover",{
    width:"100%",
    duration:.5,
    stagger:.3,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 40%",
        end:"top 0%",
        scrub:1
    }
})

function player(){
    document.querySelector("#close").addEventListener("click",function(){
        document.querySelector("#video-player").style.display = "none"
    })
    document.querySelector("#btn").addEventListener("click",function(){
        document.querySelector("#video-player").style.display = "block"
    })
}
player()

gsap.from(".wrap2 h1",{
    y:"100%",
    stagger:.2,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 70%",
        end:"top 50%",
        scrub:1
    }
})

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.2,
        loop: true,
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    
    
    document.querySelector(".swiper").addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            top:dets.y,
            left:dets.x,
            opacity:1,
        })
    })
    
    document.querySelector(".swiper").addEventListener("mouseleave",function(dets){
        gsap.to("#cursor",{
            opacity:0,
        })
    })
    
}
swiper()


function page6(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page6",
            scoller:"body",
            start:"13% top",
            end:"13% -100%",
            scrub:1,
            pin:true,
        }
    })
    tl2
    .to("#page6 h1",{
        y:"-100%"
    },"b")
    .to("#page6 #scroller",{
        transform: "translateX(-70%)"
    },"b")
}
page6()

gsap.to("#page9 #container img",{
    transform:"translateY(-15%)",
    duration:1,
    scrollTrigger:{
        trigger:"#page9",
        scroller:"body",
        start:"top bottom",
        end:"top -100%",
        scrub:1,
    }
})