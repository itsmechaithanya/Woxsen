function loco(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
loco();

function loader(){
    var tl = gsap.timeline()
    tl.from("#loader h3",{
        x:50,
        opacity:0,
        duration:1,
        delay:.5,
        stagger:0.1
    })
    tl.to("#loader h3",{
        opacity:0,
        x:-50,
        duration:1,
        stagger:0.1
    })
    tl.to("#loader",{
        opacity:0
    })
    tl.to("#loader",{
        display:"none"
    })

}
loader();

function sound(){
    var face = document.querySelector(".face")
    var sound = document.querySelector(".sound")
    
    face.addEventListener("click",function(){
        sound.play();
    });
}
sound();

function changeImage(imageSrc) {
    document.querySelector('.facee').src = imageSrc;
}

function redirectToWhatsApp() {
    window.location.href = "https://api.whatsapp.com/send/?phone=917386061113&text&app_absent=0";
}


function full(){

var menu = document.querySelector(".menu")
var cross = document.querySelector(".full i");


var tl = gsap.timeline()

tl.to("#navpart2 #navlinks,#navpart2 .icons,.menu",{
    transform:"translateY(-100%)",
    duration:0.4,
    opacity:0,
});
tl.to(".full",{
    right:0,
    duration:.2,

})
tl.from(".full h4",{
    x:150,
    duration:0.2,
    stagger:.1,
    opacity:0

})
tl.from(".full i",{
    opacity:0
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})

cross.addEventListener("click",function(){
    tl.reverse()
    // console.log("heool")
})
}
full();

function cursor(){
    var main = document.querySelector(".main")
    var cursor = document.querySelector(".cursor")
    var back = document.querySelector(".back")
    var face = document.querySelector(".face")
    var navlogo = document.querySelector(".navlogo")
    var full = document.querySelector(".full")

    main.addEventListener("mouseenter", function(){
        gsap.to(cursor,{
            opacity : 1,
            scale : 1
        });
    });
    back.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            opacity : 0,
            scale : 0
        });
    });
    back.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            opacity : 1,
            scale : 1
        });
    });
    face.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            opacity : 0,
            scale : 0
        });
    });
    face.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            opacity : 1,
            scale : 1
        });
    });
    navlogo.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            opacity : 0,
            scale : 0
        });
    });
    navlogo.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            opacity : 1,
            scale : 1
        });
    });
    full.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            opacity : 0,
            scale : 0
        });
    });
    full.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            opacity : 1,
            scale : 1
        });
    });
    main.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
        left:dets.x,
        top:dets.y
        });
    });
}
cursor();

function navan(){
    gsap.to(".navlogo img",{
        transform:"translateY(-100%)",
        scrollTrigger:{
            trigger:"#page1",
            scroller:".main",
            start:"top",
            // markers:true,
            end:"top -5%",
            scrub:0.5,
        }
    });
    // gsap.to("#navpart2 #navlinks,#navpart2 .icons",{
    //     transform:"translateY(-100%)",
    //     opacity:0,
    //     scrollTrigger:{
    //         trigger:"#page1",
    //         scroller:".main",
    //         start:"top",
    //         end:"top -5%",
    //         scrub:0.5,
    //     }
    // });
    // gsap.to("#navpart2 #navlinks,#navpart2 .icons",{
    //     transform:"translateY(0%)",
    //     opacity:1,
    //     scrollTrigger:{
    //         trigger:"#page1",
    //         scroller:".main",
    //         start:"top -5%",
    //         end:"top",
    //         scrub:0.5,
    //     }
    // });
    
    // gsap.to("#navpart2 #navlinks,#navpart2 .icons",{
    //     transform:"translateY(0%)",
    //     opacity:1,
    //     scrollTrigger:{
    //         trigger:"#page1",
    //         scroller:".main",
    //         start:"top -5%",
    //         end:"top",
    //         scrub:0.5,
    //     }
    // });
}
navan();

function wheel(){
    window.addEventListener("wheel",function(dets){
        if(dets.deltaY>0){
            gsap.to(".marq",{
                duration:5,
                repeat:-1,
                ease:"none",
                transform:"translateX(-200%)"
            })
            gsap.to(".marq img",{
                rotate:0
            })
        }
        else{
            gsap.to(".marq",{
                duration:5,
                repeat:-1,
                ease:"none",
                transform:"translateX(0%)"
            })
            gsap.to(".marq img",{
                rotate:180
            })
        }
    })
}
wheel();

function back(){
    var back = document.querySelector(".back")
    var cursor = document.querySelector("#cursor")

    back.addEventListener("mouseenter", function(){
        gsap.to(cursor,{
            opacity : .8,
            scale : 0
        });
    });
    back.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            opacity : 1,
            scale : 1
        });
    });

    Shery.imageEffect(".back",{
        style: 3,
        config:{"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.6662588474121602},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.46,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":11}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        // debug: true,
        gooey: true,
    })

}
back();

function ppp(){

    var clutter = "";
    document. querySelector (".words p"). textContent.split(" ").forEach(function(dets){
        clutter += `<span> ${dets} </span>`
        document. querySelector ("#page2 .words p"). innerHTML = clutter;
    })
    
    gsap.to("#page2 .words p span",{
        scrollTrigger:{
            trigger:`#page2 .words p span`,
            scroller:".main",
            start:"top 75%",
            end:"top 30%",
            // markers:true,
            scrub:2,
        },
        stagger:.2,
        color:`#000000`,
    })
    

    var clutter = "";
    document. querySelector (".page5 .words p"). textContent.split(" ").forEach(function(dets){
        clutter += `<span> ${dets} </span>`
        document. querySelector (".page5 .words p"). innerHTML = clutter;
    })

    gsap.to(".page5 .words p span",{
        scrollTrigger:{
            trigger:`.page5 .words p span`,
            scroller:".main",
            start:"top 80%",
            end:"top 30%",
            markers:true,
            scrub:2,
        },
        stagger:.2,
        color:`#000000`,
    })

    
    var clutter = "";
    document. querySelector (".page6 .words p"). textContent.split(" ").forEach(function(dets){
        clutter += `<span> ${dets} </span>`
        document. querySelector (".page6 .words p"). innerHTML = clutter;
    })

    gsap.to(".page6 .words p span",{
        scrollTrigger:{
            trigger:`.page6 .words p span`,
            scroller:".main",
            start:"top 80%",
            end:"top 50%",
            // markers:true,
            scrub:2,
        },
        stagger:.2,
        color:`#000000`,
    })

}
ppp();


function page4() {
    let box = document.querySelectorAll(".box a")
    box.forEach(function(elemmm){
        elemmm.addEventListener("mouseenter",function(){
            gsap.to(elemmm.childNodes[3],{
                duration:.3,
                opacity:1,
                scale:1
            })
        })
        elemmm.addEventListener("mouseleave",function(){
            gsap.to(elemmm.childNodes[3],{
                duration:.3,
                opacity:0,
                scale:0
            })
        })
        elemmm.addEventListener("mousemove",function(dets){
            gsap.to(elemmm.childNodes[3],{
                x:dets.x - elemmm.getBoundingClientRect().x-500,
                y:dets.y - elemmm.getBoundingClientRect().y-200
            })
        
        })
    })
}
page4();

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 2,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        keyboard: {
            enabled: true,
          },
      });
}
swiper();

Shery.makeMagnet(".magnet");

// gsap.to(".elem",{
//     scrollTrigger:{
//         trigger:"#schools",
//         pin:true,
//         start:"top top",
//         end:"bottom bottom",
//         endTrigger:".last",
//         scrub:1
//     },
//     y:"-500%",
//     ease:Power1
// });
// let sections = document.querySelectorAll(".elem");
// Shery.imageEffect(".images", 
// {
//     style: 3,
//     config:{onMouse:{value:1}},
//     // debug:true,
//     slideStyle: (setScroll) => {
//       sections.forEach(function(section,index) {
//         window.addEventListener("scroll", () => {
//             setScroll(window.scrollY / innerHeight);
//           });
//         ScrollTrigger.create({
//             trigger:section,
//             start:"top top",
//             end:"bottom bottom",
//             scrub:1,
//             onUpdate:function(prog){
//                 // console.log(index)
//                 setScroll(prog.progress+index)
//             },
//         });
//       });
//     },
// }
// );
