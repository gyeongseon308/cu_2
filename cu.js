$(document).ready(function(){
    let i = 0;
    let count = $(".closing_bg>li").length;

    $(".next").click(function(){
        if(i == count-1){
            i = 0;
        }else{
            i++;
        }
        show()
    });

    $(".prev").click(function(){
        if(i == 0){
            i = count-1;
        }else{
            i--;
        }
        show()
    });

    $(".indicator>li").click(function(){
        i = $(this).index();
        show();
    });
    
    let autoSlide = setInterval(function(){
        if(i == count-1){
            i = 0;
        }else{
            i++;
        }
        show()
    }, 2000);

    $(".closing_bg").mouseenter(function(){
        clearInterval(autoSlide);
    });

    $(".closing_bg").mouseleave(function(){
        autoSlide = setInterval(function(){
            if(i == count-1){
                i = 0;
            }else{
                i++;
            }
            show();
        }, 2000);
    });

    function show(){
        $(".indicator>li").removeClass("on");
        $(".indicator>li").eq(i).addClass("on");
        $(".closing_bg>li").stop().fadeOut();
        $(".closing_bg>li").eq(i).stop().fadeIn();
    }
});