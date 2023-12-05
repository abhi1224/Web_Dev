// gsap :- greensock animation plateform

var tl = gsap.timeline()
tl.from('.nav img , .nav .nav-item,.nav-item p,.nav .nav-item-button',{
    y:-100,
    opacity:0,
    stagger:0.2
})
 
gsap.from('.middle .one , .middle .three',{
    x:-500,
    duration:1,
    opacity:0
})
gsap.from('.middle span',{
    z:-500,
    duration:1,
    opacity:0,
    rotate:360
})
gsap.from('.middle .two',{
    x:500,
    duration:1,
    opacity:0
})

gsap.from('.middle img',{
    z:-100,
    scale:0,
    opacity:0,
    duration:0.5,
})

gsap.from('.scroll-down',{
    yoyo:true,
    y:20,
    repeat:-1

})
