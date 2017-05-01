/*JavaScript.JQuery code by Hoang Kim Duc & NGUYEN DUC VIET*/
$(document).ready(function(){
    //Tooltip
    $('[data-toggle="tooltip"]').tooltip();
    //   
    if( $("#headingOne h4 a").attr("aria-expanded")=="true"){
             $("#headingOne h4").removeClass("panel-title");
            $("#headingOne h4").addClass("panel-title-minus");
        }
    $(".panel-heading-collapse h4 a").click(function(e){
         var objectclick=e.currentTarget.parentElement.parentElement.getAttribute("id");
        if( $("#"+objectclick+" h4 a").attr("aria-expanded")=="false"){
            /*reset về + */
             $(".panel-heading-collapse h4").removeClass("panel-title-minus");
            $(".panel-heading-collapse h4").addClass("panel-title");
            /**/
            $("#"+objectclick+" h4").removeClass("panel-title");
            $("#"+objectclick+" h4").addClass("panel-title-minus");
        }else{
            $("#"+objectclick+" h4").removeClass("panel-title-minus");
            $("#"+objectclick+" h4").addClass("panel-title");
        }
    })
    //
    $("#ex2").slider({});
    $("#ex2").on("slide", function(slideEvt) {
	$("#price-min").text(slideEvt.value[0]);
      $("#price-max").text(slideEvt.value[1]);
    });
    //var slider = new Slider('#ex2', {});

})
