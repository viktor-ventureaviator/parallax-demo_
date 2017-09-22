/**
 * Created by Alexandr on 19.09.2017.
 */


$(document).ready(function () {



    // init controller
    var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

    // build scenes
    new ScrollMagic.Scene({triggerElement: "#parallax1"})
        .setTween("#parallax1 > div", 1, {y: "80%", ease: Linear.easeNone})
        .addIndicators()
        .addTo(controller2);





    // var tweenCenterTitleBlock = new TimelineMax();
    // tweenCenterTitleBlock
        // .fromTo("#project02 .head", 0,
        //     {position: "fixed" },
        //     {position: "relative", repeat: 0, yoyo: true, ease: Circ.easeInOut}, 0)
    //     .fromTo("#project02 .head", 1,
    //     {top: '25%'},
    //     {top: 0, repeat: 0, yoyo: true, ease: Circ.linear})
    //
    //
    //
    // new ScrollMagic.Scene({
    //     triggerElement: "#project01", offset: 400, duration:500
    // })
    //     .setTween(tweenCenterTitleBlock)
    //     .addTo(controller);


    var tweenCenterTitle=TweenMax.to("#project01 .head h2", 1,
        {top: 0, repeat: 0, yoyo: true, ease: Circ.linear})

    // new ScrollMagic.Scene({triggerElement: "#parallax2"})
    //     .setTween("#parallax2 > div", 1, {y: "80%", ease: Linear.easeNone})
    //     .addIndicators()
    //     .addTo(controller2);









    // init controller
    var controller = new ScrollMagic.Controller();

    var tweenHeaderLogo = TweenMax.to("#project01 .headerLogo", 1,  {autoAlpha: 1, display:'block'});

    var tweenHeaderRight=TweenMax.fromTo("#project01 .header-right-title", 1,
        {left:0 },
        { left: 400, repeat: 0, yoyo: true, ease: Circ.linear})
    var tweenHeaderLeft=TweenMax.fromTo("#project01 .header-left-title", 1,
        {right:0 },
        { right: 342, repeat: 0, yoyo: true, ease: Circ.linear})

    // var sceneHeader = new ScrollMagic.Scene({triggerElement: "#project02", offset: 500, duration: 100})
    //     .setClassToggle('#project01 .header-right-title', 'right')
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);


    new ScrollMagic.Scene({triggerElement: "#parallax1", offset: 500, duration:400})
        .setTween(tweenCenterTitle)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);


    new ScrollMagic.Scene({triggerElement: "#parallax1", offset: 500, duration:400})
        .setTween(tweenHeaderLogo)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);



    new ScrollMagic.Scene({triggerElement: "#parallax1", offset: 500, duration:400})
        .setTween(tweenHeaderRight)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#parallax1", offset: 500, duration:400})
        .setTween(tweenHeaderLeft)
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);


    // init controller
    // var controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});

    // new ScrollMagic.Scene({triggerElement: "#project02"})
    //     .setTween("#project02 .picture", {y: "80%", ease: Linear.easeNone})
    //     .addIndicators()
    //     .addTo(controller);



    // var tween = TweenMax.to("#project01", 0.5,  {autoAlpha: 1, display:'block'});

// create a scene

    // var ourScene = new ScrollMagic.Scene({
    //
    //     triggerElement: '#project01'
    // })
    //     .setClassToggle('#project01', 'fade-in')
    //     .addTo(controller);

    // var scene = new ScrollMagic.Scene({triggerElement: "#project02", offset: 400, duration: 100})
    //     .setTween(TweenMax.to("#project01", 0.5,  {autoAlpha: 1, display:'block'}))
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);






    // second


    var block2 = new TimelineMax();
    block2
        .fromTo("#project02 .plane", 1,
            {top: "100%" },
            {top: -100, repeat: 0, yoyo: true, ease: Circ.easeInOut}, 0)
    .to("#project02 .picture", 3,
        {backgroundPositionY: "0%", repeat: 0, yoyo: true, ease: Circ.easeInOut}, 0);



    new ScrollMagic.Scene({
        triggerElement: "#project02", offset: 500
    })
        .setTween(block2)
        .addTo(controller);



    // var tweenHeaderPlane = TweenMax.fromTo("#project02 .plane", 1,
    //     {top: "100%" },
    //     {top: -100, repeat: 0, yoyo: true, ease: Circ.easeInOut})
    //
    //
    //
    // // var tween3=TweenMax.fromTo("#project03 .title", 0.5,
    // //     {autoAlpha: 1, display:'block'}
    // // );
    //
    //
    // new ScrollMagic.Scene({triggerElement: "#project02", offset: 500, duration: 300})
    //     .setTween(tweenHeaderPlane)
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);







    var tween2=TweenMax.fromTo("#project03 .title", 1,
        {left: 0, opacity:0},
        {left: 100, opacity:1, repeat: 0, yoyo: true, ease: Circ.easeInOut}
    );

    var scene2 = new ScrollMagic.Scene({triggerElement: "#project03", offset: 0})
        .setTween(tween2)
        // .setClassToggle('#project03 .title', 'zap')
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);



    // third

    // var tween3=TweenMax.fromTo("#project03 .picture", 1,
    //     {width:0},
    //     {width: 710, repeat: 0, yoyo: true, ease: Circ.easeInOut}
    // );
    //
    //
    // var tweenContext=TweenMax.fromTo("#project03 .context", 1,
    //     {paddingLeft:100, opacity:0},
    //     {paddingLeft:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear})
    //
    //
    // var tweenContentLink=TweenMax.fromTo("#project03 .content_link", 1,
    //     {marginTop:100, opacity:0},
    //     {marginTop:20,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear})
    //
    //
    // // var tween3=TweenMax.fromTo("#project03 .title", 0.5,
    // //     {autoAlpha: 1, display:'block'}
    // // );
    // var scene3 = new ScrollMagic.Scene({triggerElement: "#project03", offset: 100})
    //     .setTween(tween3)
    //     // .setClassToggle('#project03 .title', 'zap')
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);
    //
    //
    // new ScrollMagic.Scene({triggerElement: "#project03", offset: 200})
    //     .setTween(tweenContext)
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);
    //
    //
    // new ScrollMagic.Scene({triggerElement: "#project03", offset: 300})
    //     .setTween(tweenContentLink)
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);


// four


    var block4 = new TimelineMax();
    block4
        .fromTo("#project03 .picture", 1,
            {width:0},
            {width: 710, repeat: 0, yoyo: true, ease: Circ.easeInOut}
        )



        .fromTo("#project03 .title2.letter1", 0.3,
            {top:30, opacity:0},
            {top:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')
        .fromTo("#project03 .title2.letter2", 0.3,
            {top:30, opacity:0},
            {top:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')
        .fromTo("#project03 .title2.letter3", 0.3,
            {top:30, opacity:0},
            {top:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')
        .fromTo("#project03 .title2.letter4", 0.3,
            {top:30, opacity:0},
            {top:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')

        .fromTo("#project03 .title2.letter5", 0.3,
            {top:30, opacity:0},
            {top:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')
        .fromTo("#project03 .title2.letter6", 0.3,
            {top:30, opacity:0},
            {top:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')
        .fromTo("#project03 .title2.letter7", 0.3,
            {top:30, opacity:0},
            {top:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')
        .fromTo("#project03 .title2.letter8", 0.3,
            {top:30, opacity:0},
            {top:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')

        .fromTo("#project03 .title2.letter9", 0.3,
            {top:30, opacity:0},
            {top:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')
        .fromTo("#project03 .title2.letter10", 0.3,
            {top:30, opacity:0},
            {top:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')
        .fromTo("#project03 .title2.letter11", 0.3,
            {top:30, opacity:0},
            {top:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')

        .fromTo("#project03 .context1", 1,
            {paddingLeft:100, opacity:0},
            {paddingLeft:20,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0'
        )
        .fromTo("#project03 .context2", 1,
            {paddingLeft:100, opacity:0},
            {paddingLeft:20,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0'
        )
        .fromTo("#project03 .context3", 1,
            {paddingLeft:100, opacity:0},
            {paddingLeft:20,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0'
        )
        .fromTo("#project03 .content_link", 1,
            {marginTop:100, opacity:0},
            {marginTop:20,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')



    new ScrollMagic.Scene({
        triggerElement: "#project03", offset: 200
    })
        .setTween(block4)
        .addTo(controller);




    //
    //
    //
    // var tween4_1=TweenMax.fromTo("#project03 .title2:nth-child(1)", 1,
    //     {visibility: "hidden"},
    //     {visibility: "visible", repeat: 0, yoyo: true,}
    // );
    // var tween4_2=TweenMax.fromTo("#project03 .title2:nth-child(2)", 1,
    //     {visibility: "hidden"},
    //     {visibility: "visible", repeat: 0, yoyo: true,}
    // );
    // var tween4_3=TweenMax.fromTo("#project03 .title2:nth-child(3)", 1,
    //     {visibility: "hidden"},
    //     {visibility: "visible", repeat: 0, yoyo: true,}
    // );
    // var tween4_4=TweenMax.fromTo("#project03 .title2:nth-child(4)", 1,
    //     {visibility: "hidden"},
    //     {visibility: "visible", repeat: 0, yoyo: true,}
    // );
    // var tween4_5=TweenMax.fromTo("#project03 .title2:nth-child(5)", 1,
    //     {visibility: "hidden"},
    //     {visibility: "visible", repeat: 0, yoyo: true,}
    // );
    // var tween4_6=TweenMax.fromTo("#project03 .title2:nth-child(6)", 1,
    //     {visibility: "hidden"},
    //     {visibility: "visible", repeat: 0, yoyo: true,}
    // );
    // // var tween3=TweenMax.fromTo("#project03 .title", 0.5,
    // //     {autoAlpha: 1, display:'block'}
    // // );
    // // var scene4 = new ScrollMagic.Scene({triggerElement: "#project03", offset: 100, duration: 100})
    // //     // .setTween(tween4)
    // //     .setClassToggle('#project03 .title2', 'fadeInUp')
    // //     .addIndicators() // add indicators (requires plugin)
    // //     .addTo(controller);
    //
    //
    //
    //
    // new ScrollMagic.Scene({triggerElement: "#project03", offset: 100})
    // .setTween(tween4_1)
    //     .setClassToggle('#project03 .title2:nth-child(1)', 'fadeInUp')
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);
    //
    // new ScrollMagic.Scene({triggerElement: "#project03", offset: 150})
    // .setTween(tween4_2)
    //     .setClassToggle('#project03 .title2:nth-child(2)', 'fadeInUp')
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);
    //
    // new ScrollMagic.Scene({triggerElement: "#project03", offset: 200})
    // .setTween(tween4_3)
    //     .setClassToggle('#project03 .title2:nth-child(3)', 'fadeInUp')
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);
    //
    //
    // new ScrollMagic.Scene({triggerElement: "#project03", offset: 250})
    // .setTween(tween4_4)
    //     .setClassToggle('#project03 .title2:nth-child(4)', 'fadeInUp')
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);
    //
    // new ScrollMagic.Scene({triggerElement: "#project03", offset: 300})
    // .setTween(tween4_5)
    //     .setClassToggle('#project03 .title2:nth-child(5)', 'fadeInUp')
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);
    //
    //
    // new ScrollMagic.Scene({triggerElement: "#project03", offset: 350})
    // .setTween(tween4_6)
    //     .setClassToggle('#project03 .title2:nth-child(6)', 'fadeInUp')
    //     .addIndicators() // add indicators (requires plugin)
    //     .addTo(controller);



    // fifth
// var t = calc(100% - 400);





    var block5 = new TimelineMax();
    block5
        .fromTo("#project04 .picture", 1,
            {maxWidth:0},
            {maxWidth: "790", repeat: 0, yoyo: true, ease: Circ.easeInOut}
        )
        .fromTo("#project04 .header_title", 1,
            {top:100, opacity:0},
            {top:20,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')

        .fromTo("#project04 .context_text.context_text1", 1,
        {paddingLeft:100, opacity:0},
        {paddingLeft:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')

        .fromTo("#project04 .context_text.context_text2", 1,
            {paddingLeft:100, opacity:0},
            {paddingLeft:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')

        .fromTo("#project04 .context_text.context_text3", 1,
            {paddingLeft:100, opacity:0},
            {paddingLeft:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0')

            .fromTo("#project04 .content_link", 1,
        {top:100, opacity:0},
        {top:20,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear}, '-=0');



    new ScrollMagic.Scene({
        triggerElement: "#project04", offset: 0
    })
        .setTween(block5)
        .addTo(controller);




//
//
//
//     var tweenPicAvto=TweenMax.fromTo("#project04 .picture", 1,
//         {maxWidth:0},
//         {maxWidth: "790", repeat: 0, yoyo: true, ease: Circ.easeInOut}
//     );
//
//     var tweenHeaderTitle2=TweenMax.fromTo("#project04 .header_title", 1,
//         {top:100, opacity:0},
//         {top:20,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear, delay:1})
//
//     var tweenContext2=TweenMax.fromTo("#project04 .context_text", 1,
//         {paddingLeft:100, opacity:0},
//         {paddingLeft:0,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear, delay:2})
//
//
//     var tweenContentLink2=TweenMax.fromTo("#project04 .content_link", 1,
//         {top:100, opacity:0},
//         {top:20,  opacity:1, repeat: 0, yoyo: true, ease: Circ.linear, delay:5})
//
//
//
//     var scenePicAvto = new ScrollMagic.Scene({triggerElement: "#project03", offset: 300})
//         .setTween(tweenPicAvto)
//         .addIndicators() // add indicators (requires plugin)
//         .addTo(controller);
//
//
//
//     var sceneHeaderTitle2 =  new ScrollMagic.Scene({triggerElement: "#project03", offset: 300})
//         .setTween(tweenHeaderTitle2)
//         .addIndicators() // add indicators (requires plugin)
//         .addTo(controller);
//
//
//     var sceneContext2 = new ScrollMagic.Scene({triggerElement: "#project03", offset: 300})
//         .setTween(tweenContext2)
//         .addIndicators() // add indicators (requires plugin)
//         .addTo(controller);
//
//
//     var sceneContentLink2 = new ScrollMagic.Scene({triggerElement: "#project03", offset: 300})
//         .setTween(tweenContentLink2)
//         .addIndicators() // add indicators (requires plugin)
//         .addTo(controller);
//
//
//     //
//     // new ScrollMagic.Scene({triggerElement: "#project03", offset: 400})
//     //     .addIndicators() // add indicators (requires plugin)
//     //     .addTo(controller);
//
//
//     function callback (event) {
//         console.log("Event fired! (" + event.type + ")");
//     }
// // add listeners
//     sceneHeaderTitle2.on("progress end", callback);

})


