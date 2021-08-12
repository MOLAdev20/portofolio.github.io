$(document).ready(function(){

    function change(target, before, after){
        $(target).removeClass(before).addClass(after);
    }

    $("#mode").on("change", function(){
        if(this.checked){
            // find dark element and change the class
            change(".body-light", "body-light", "body");
            change(".main-page-light", "main-page-light", "main-page");
            change(".education-light", "education-light", "education");
            change(".appreciate-light", "appreciate-light", "appreciate");
            change(".text-dark", "text-dark", "text-light");
            change(".work-page-light", "work-page-light", "work-page");
            change(".jumbotron-light", "jumbotron-light", "jumbotron-dark");
            change(".contact", "contact", "contact-light");
        }else{
            // find dark element and change the class
            change(".body", "body", "body-light");
            change(".main-page", "main-page", "main-page-light");
            change(".education", "education", "education-light");
            change(".text-light", "text-light", "text-dark");
            change(".appreciate", "appreciate", "appreciate-light");
            change(".work-page", "work-page", "work-page-light");
            change(".jumbotron-dark", "jumbotron-dark", "jumbotron-light");
            change(".contact-light", "contact-light", "contact");
        }
    })

    $(".nav-link").click(function(){
        let tujuan = $(this).attr("href");
        let elemenTujuan = $(tujuan);
        $("html, body").animate({
            scrollTop : elemenTujuan.offset().top - 70
        }, 2100, "swing");
    })

    AOS.init();
})