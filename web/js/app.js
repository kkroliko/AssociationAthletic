/******************************************************Affichage course************************************************/
    $(document).on("change", ".selectresult", function () {
        $selected = "#" + $(this).val();
        $(".table").not($selected).each(function () {
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

    /************************************************************calcul js**********************************************/
    $(document).on("click", ".resultForm", function () {

        var id = $(this).attr("id");
        var meetingid = $(this).parent().attr("id");
        console.log(meetingid);

        var meetingyear = document.getElementById('meetingyear'+meetingid).innerHTML;

        var athleteyear = document.getElementById('athleteyear'+id).innerHTML;

        var age = meetingyear - athleteyear;
        var coeff;

        if (age <= 11) {
            coeff = 1.5;
        } else if (age <= 13) {
            coeff = 1.42;
        } else if (age <= 15) {
            coeff = 1.35;
        } else if (age <= 17) {
            coeff = 1.21;
        } else if (age <= 19) {
            coeff = 1.18;
        } else if (age <= 22) {
            coeff = 1.09;
        } else if (age <= 40) {
            coeff = 1;
        } else {
            coeff = 1.35;
        }
        var time = document.getElementById("time" + id +"#" + meetingid).value;
        console.log(time);
        var points = Math.round((1000 / time) * coeff);
        document.getElementById("point" + id +"#" + meetingid).innerHTML = points;
        $.ajax({

            url: '',
            type: 'POST',
            data:{time : time, points:points, athleteid: id, meetingid: meetingid}
    });

});


