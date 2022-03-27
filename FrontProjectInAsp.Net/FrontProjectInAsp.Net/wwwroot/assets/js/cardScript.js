
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

    //Custom Methods
    $("#navmenu .allcatagories").click(function () {
        let content = $(".allcatagoriescontent");

        if (content.hasClass("d-none")) {
            content.removeClass("d-none");
        } else {
            content.addClass("d-none");
        }
    })
    $("#navmenu .navbar .mainul>li").mouseover(function () {
        $(this).addClass("active");
    })
    $("#navmenu .navbar .mainul>li").mouseout(function () {
        $(this).removeClass("active");
    })
    $("#navmenu .navbar .mainul>li:first-child").mouseover(function () {
        $(".homesections").css("display", "block");
    })
    $("#navmenu .navbar .mainul>li:first-child").mouseout(function () {
        $(".homesections").css("display", "none");
    })
    $("#navmenu .navbar .mainul>li:first-child").next().mouseover(function () {
        $(".shopsections").removeClass("d-none");
    })
    $(".shopsections").mouseout(function () {
        $(".shopsections").addClass("d-none");
    })
})

//ShopPage
$(function () {
    //Shoping Card
    const minus = $(".cart.products .product a[data-filter=minus]");
    var pilus = $(".cart.products .product a[data-filter=pilus]");
    
    pilus.click(function () {
        let oldnumofproduct = $(this).prev().text();
        let newnumofproduct = parseInt(oldnumofproduct) + 1;
        $(this).prev().text(newnumofproduct);
        let text = $(this).parent().next().text();
        let price = text.match(/\d+/);
        let totalprice = $(".card .summary .totalprice").text().match(/\d+/)[0];
        totalprice = parseInt(totalprice)+parseInt(price)
        let totalitems = $(".card .totalitems").text();
        totalitems = parseInt(totalitems.match(/\d+/)[0]);
        $(".card .totalitems").text(`${totalitems+1} items`);
        $(".card .summary .totalprice").text(`${totalprice}${".00"}`)
        $(".card .summary .delivery").text(`${parseInt(totalprice)+5}${".00"}`)
        $(".card .summary .items").text(`ITEMS ${totalitems+1}`);
    })



    minus.click(function () {
        if ($(this).next().text() != 0) {
            let oldnumofproduct = $(this).next().text();
            let newnumofproduct = parseInt(oldnumofproduct) - 1;
            $(this).next().text(newnumofproduct);
        }
        let text = $(this).parent().next().text();
        let price = text.match(/\d+/);
        let totalprice = $(".card .summary .totalprice").text().match(/\d+/)[0];
        totalprice = parseInt(totalprice)-parseInt(price)
        let totalitems = $(".card .totalitems").text();
        totalitems = parseInt(totalitems.match(/\d+/)[0]);
        $(".card .totalitems").text(`${totalitems-1} items`);
        $(".card .summary .totalprice").text(`${totalprice}${".00"}`)
        $(".card .summary .delivery").text(`${parseInt(totalprice)+5}${".00"}`)
        $(".card .summary .items").text(` ITEMS ${totalitems+1}`);
    })
    

})




