var rect = document.querySelector("#main");

rect.addEventListener("mousemove",function(details){

    var rectlocation = rect.getBoundingClientRect();
    var rectlocationleft =( details.clientX - rectlocation.left);
   
    if(rectlocationleft < rectlocation.width /2){
       var redcolor = gsap.utils.mapRange(0 ,rectlocation.width/2,255 , 0 , rectlocationleft);
       gsap.to(rect,{
        backgroundColor:`rgb(${redcolor},0 ,0)`,
        // ease: power4,
       }) ;
    }
    else{
        var bluecolor = gsap.utils.mapRange(rectlocation.width/2,rectlocation.width , 0 ,255, rectlocationleft);
        gsap.to(rect,{
            backgroundColor:`rgb(0 ,0,${bluecolor})`,
        //  ease: power4,
        }) ;
    }
});