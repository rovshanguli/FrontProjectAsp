$(function () {
    let navheader = $(".navmenu ul li");
    let navcontent = $(".navmenu > div")
    let newactivecontent = $('.navmenu > div[data-id = '+ 1 +']');
    navheader.click(function () {
        let activeheader = $(".navmenu ul .active");
        if(activeheader.attr("data-id") != $(this).attr("data-id") ){
            activeheader.removeClass("active");
            $(this).addClass("active");
            let activecontent = $(".navmenu .activecontent");
            activecontent.removeClass("activecontent");
            let activepage = $(this).attr("data-id");
            let newactivecontent = $('.navmenu > div[data-id = '+ activepage +']');
            newactivecontent.addClass("activecontent");
            
        }
    })
    

})