$(document).foundation();
function changedimg(select){
    var image=document.getElementById("imageswap");
     var Language = select.options[select.selectedIndex].value;
    switch(Language) {
        case 1:
            image.src = "{{ asset('img/html5.png ') }}" ;
            break;
        case 2:
            image.src = "{{ asset('img/css3.png ') }}" ;
            break;
        case 3:
            image.src = "{{ asset('img/js.jpg ') }}" ;
            break;
        case 4:
            image.src = "{{ asset('img/PHP.jpg ') }}" ;
            break;
        case 5:
            image.src = "{{ asset('img/symfony.png ') }}" ;
            break;
        case 6:
            image.src = "{{ asset('img/java.png ') }}" ;
            break;
        default:
            image.src = "http://placekitten.com/350/350" ;
    }
}
$("#appbundle_tuto_mainTag").change(function() {
    var image = $("#imageswap");
    var language = $(this).val();
    console.log(language);
    switch(language) {
        case "1":
            image.attr("src", " /img/html5.png");
            break;
        case "2":
            image.attr("src", "/img/css3.png");
            break;
        case "3":
            image.attr("src", " /img/js.jpg");
            break;
        case "4":
            image.attr("src", "/img/PHP.jpg");
            break;
        case "5":
            image.attr("src", "/img/symfony.png");
            break;
        case "6":
            image.attr("src", "/img/java.png");
            break;
        default:
            image.attr("src", "http://placebeard.it/350/350");
            console.log(language);
            break;
    }
})
$(document).ready(function(){
    $('.slider3').bxSlider({
        slideWidth: 1000,
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 10
    });

    $(document).on("change", ".selectresult", function() {
        $selected = "#" + $(this).val();
        $(".table").not($selected).each(function() {
            if ($(".table").hasClass("active")) {
                $(".table").removeClass("active");
                $(".table").slideUp("100");
            }
        });
        $selected = "#" + $(this).val();
        $($selected).addClass("active");
        $($selected).slideDown("1500");
        $()
    });
});