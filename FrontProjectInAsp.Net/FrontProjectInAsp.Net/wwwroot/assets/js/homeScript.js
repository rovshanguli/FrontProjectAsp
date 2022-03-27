//HomePage
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    console.log(ul);
    li = ul.getElementsByTagName("li");
    console.log(li);
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
$(function () {
    //Slider
    const nexticon = '<i class="fas fa-arrow-right"></i>';
    const previcon = '<i class="fas fa-arrow-left"></i>';
    $(".home-slider").owlCarousel({
        animateOut: 'linear',
        animateIn: 'linear',
        items: 1,
        smartSpeed: 450,
        nav: true,
        dots: false,
        animateIn: true,
        animateOut: true,
        navText: [previcon, nexticon],
        loop: true,
        smartSpeed:1500
    });

    //Search
    function myFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        console.log(ul);
        li = ul.getElementsByTagName("li");
        console.log(li);
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    //CountDown(Timer)
    var clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
            stop: function () {
                $('.message').html('The clock has stopped!')
            }
        }
        
    });
    // set time
    clock.setTime(220880);

    // countdown mode
    clock.setCountdown(true);

    // start the clock
    clock.start();

    
    //Slider2
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        smartspeed:1500,
        animateIn: 'liner',
        animateOut: 'liner',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    //Custom Methods
    $("#navmenu .allcatagories").click(function () {
        let content = $(".allcatagoriescontent");
        
        if(content.hasClass("d-none")){
            content.removeClass("d-none");
        }else{
            content.addClass("d-none");
        }
    })
    $("#navmenu .navbar .mainul>li").mouseover(function(){
        $(this).addClass("active");
    })
    $("#navmenu .navbar .mainul>li").mouseout(function(){
        $(this).removeClass("active");
    })
    $("#navmenu .navbar .mainul>li:first-child").mouseover(function () {
        $(".homesections").css("display","block");
    })
    $("#navmenu .navbar .mainul>li:first-child").mouseout(function () {
        $(".homesections").css("display","none");
    })
    $("#navmenu .navbar .mainul>li:first-child").next().mouseover(function () {
        $(".shopsections").removeClass("d-none");
    })
    $(".shopsections").mouseout(function () {
        $(".shopsections").addClass("d-none");
    })
})
$(function () {
    let allcatagori = $(".allcatagories");
    let selectcatagori = $(".selectcatagori")
    allcatagori.click(function () {
        console.log(selectcatagori.hasClass("active"));
        if (selectcatagori.hasClass("active") == false) {
            selectcatagori.addClass("active");
        }else{
            selectcatagori.removeClass("active");
        }
    })
})


//Search
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    console.log(ul);
    li = ul.getElementsByTagName("li");
    console.log(li);
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$(function () {
    let fruitcatagory = $("#allcatagories-navmenu .selectcatagori li:nth-child(1)")
    let homelist = $("#allcatagories-navmenu .navmenu li:nth-child(1)")
    fruitcatagory.mouseover(function () {
        $(".fruitslist").css("opacity","1")
    })
    fruitcatagory.mouseleave(function () {
        $(".fruitslist").css("opacity","0")
    })
    homelist.mouseover(function () {
        $(".homelist").css("opacity","1");
    })
    homelist.mouseleave(function () {
        $(".homelist").css("opacity","0");
    })
})



