$(document).ready(function(){
    
    $("#btnEnterSite").click(function(){
       
        paintUI("HOME");
        
    });
    
});

function buildNav(navarr){
    
    
       $("#navBar").html("");
    
       for (i=0;i<navarr.length;i++){
            var item = $("<div class='navItem text-center' "+"id='"+"itm"+navarr[i]+"'"+"><a>"+navarr[i]+"</a></div>");
            $("#navBar").append(item);
           
           // Asigning the necessary click events to navItems
           
           $(item).click(function(){
               paintUI($(this).attr("id"));
           });
           
        }
    
        // Asigning back click event
    
        $("#itmback").click(function(){
            paintUI("HOME");
        });
    
    $("#navBar").removeClass("hide");
    
}


function paintUI(ui){
    
    clearUI();
    
    switch(ui){
    
        case "itmEVENTS":
            
            buildNav(["back", "EVENTS", "CALENDAR", "GALLERY", "ABOUT"]);

            $("#section-Content").removeClass("hide");
            $("#navBar").addClass("navDrop");

            $("#divEvents").removeClass("hide");
            $("#itmEVENTS a").addClass("selected");
            
            break;
            
        case "HOME" :
            
              buildNav(["EVENTS", "CALENDAR", "GALLERY", "ABOUT"]);
              $("#navBar").removeClass("navDrop");
              $("#navBar").addClass("vertigo");
            
            break;
            
        case "itmCALENDAR" :
            
              buildNav(["back", "EVENTS", "CALENDAR", "GALLERY", "ABOUT"]);
            
              $("#navBar").addClass("navDrop");
              $("#section-Content").removeClass("hide");

              $("#divCalendar").removeClass("hide");
              $("#itmCALENDAR a").addClass("selected");
                
            
            break;
            
        case "itmGALLERY" :
            
            break;
            
         case "itmABOUT" :
            
            buildNav(["back", "EVENTS", "CALENDAR", "GALLERY", "ABOUT"]);
            
            $("#section-Content").removeClass("hide");
            $("#navBar").addClass("navDrop");
//
            $("#divAbout").removeClass("hide");
            $("#itmABOUT a").addClass("selected");
            
            break;
    }
       
    
}

function clearUI(){
    alert("abt");
    $("#itmEVENTS a").removeClass("selected");
    $("#itmABOUT a").removeClass("selected");
    $("#itmCALENDAR a").removeClass("selected");
    
    $("#section-Land").addClass("hide");
    $("#section-Content").addClass("hide");
    $("#divEvents").addClass("hide");
    $("#divAbout").addClass("hide");
    $("#divCalendar").addClass("hide");
    $("#section-Land").addClass("hide");
    $("#navBar").addClass("hide");
}



