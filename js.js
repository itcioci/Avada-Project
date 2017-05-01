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
            //console.log(listCollapse);
            /**/
            $("#"+objectclick+" h4").removeClass("panel-title");
            $("#"+objectclick+" h4").addClass("panel-title-minus");
        }else if( $("#"+objectclick+" h4 a").attr("aria-expanded")=="true"){
            $("#"+objectclick+" h4").removeClass("panel-title-minus");
            $("#"+objectclick+" h4").addClass("panel-title");
        }
    })

})
