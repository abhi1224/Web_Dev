var tl = gsap.timeline()

tl.from('.nav h2, .nav .nav-item,.nav .nav-item p,.nav .nav-item-button',{
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.2
})
 tl.from('.content .left h1',{
    x:-100,
    opacity:0,
    duration:0.5,
    stagger:0.2,

 })
 tl.from(' .content .left h1 span img',{
    scale:1.2,
    rotate:-360,
    duration:1,
 })
 
 tl.from(' .content .right img',{
    opacity:0,
    scale:0.5,
    duration:1,
    z:-200
 })


 gsap.from('.page2 .box',{
    opacity:0,
    scale:0,
    duration:1,
    z:-200,
    stragger:0.2,
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:'body',
        // start:"Top 50%",
        // markers:true,
        scrub:2

    }
 })