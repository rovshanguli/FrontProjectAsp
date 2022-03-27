$(function () {
    console.log("salam");
    let catagory = $(".productcatagories span");
    console.log(catagory);
    catagory.click(function () {
        console.log("salam");
        if ($(this).next().hasClass("open")) {
            $(this).next().removeClass("open");
        } else {
            $(this).next().addClass("open");
        }
        if($(".productcatagories").css("height")>"255px"){
            $("prductcatagories").css("overflow-y","scroll");
        }
    })
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }




    let li = $(".pagenation li");
    li.click(function () {
        let li_id = $(this).attr("data-id");
        
        let content_id = $(".activecontent");
        
        let activepage = $(".activepage");
        
        if (activepage.attr("data-id") != $(this).attr("data-id")) {
            let newactivepage = $('.activecontent[data-id = '+ $(this).attr("data-id") +']');
            console.log(newactivepage);
            activepage.removeClass("activepage");
            newactivepage.addClass("activepage");
        }
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