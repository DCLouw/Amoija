$(document).ready(function(){
    
    //Box containing event information
    infoBox = $("#eventInfo");
    icons = $("#wrapIcons");
    fullImage = $("#imgFull");
    
    fullImage.hide();
  
    popEventIcons();
    
    $("#btnEnterSite").click(function(){
       
        paintUI("HOME");
        $("#header").show();
        
    });
    
    $("#header a").click(function(){
        paintUI("HOME");
    });
    
//Click events for gallery
    
        $("#btnClose").click(function(){
        $("#screenShade").removeClass("shade");
        fullImage.hide();
    });
    
    $(".thumbContainer img").click(function(){
        $("#screenShade").addClass("shade");
        source = $(this).attr("src");
        $("#imgFull").attr("src",source);
        fullImage.show();
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

//Method to populate the DOM for each page

function paintUI(ui){
    
    clearUI();
    
    switch(ui){
    
        case "itmEVENTS":
            
            buildNav(["back", "EVENTS", "CALENDAR", "GALLERY", "ABOUT"]);
            
            $("#section-Content").addClass("tint");

            $("#section-Content").removeClass("hide");
            $("#navBar").addClass("navDrop");

            $("#divEvents").removeClass("hide");
            $("#itmEVENTS a").addClass("selected");
            
            $("#wallpaper").addClass("posOne");
            $("#header").addClass("shrink");
            
            break;
            
        case "HOME" :
            
              buildNav(["EVENTS", "CALENDAR", "GALLERY", "ABOUT"]);
            
             $("#section-Content").removeClass("tint");
            
              $("#navBar").removeClass("navDrop");
              $("#navBar").addClass("vertigo");
            
              $("#imgWatermark").show();
              $("#imgWatermark").addClass("dark");
            
              $("#wallpaper").addClass("zoom");
            
            break;
            
        case "itmCALENDAR" :
            
              buildNav(["back", "EVENTS", "CALENDAR", "GALLERY", "ABOUT"]);
            
              $("#navBar").addClass("navDrop");
              $("#section-Content").removeClass("hide");

              $("#divCalendar").removeClass("hide");
              $("#itmCALENDAR a").addClass("selected");
            
              $("#wallpaper").addClass("posTwo");
                
            
            break;
            
        case "itmGALLERY" :
            
              buildNav(["back", "EVENTS", "CALENDAR", "GALLERY", "ABOUT"]);
            
              $("#navBar").addClass("navDrop");
              $("#section-Content").removeClass("hide");

              $("#divGallery").removeClass("hide");
            
              $("#wallpaper").addClass("posThree");
            
            break;
            
         case "itmABOUT" :
            
            buildNav(["back", "EVENTS", "CALENDAR", "GALLERY", "ABOUT"]);
            
            $("#section-Content").removeClass("hide");
            $("#navBar").addClass("navDrop");
//
            $("#divAbout").removeClass("hide");
            $("#itmABOUT a").addClass("selected");
            
            $("#wallpaper").addClass("posFour");
            
            break;
    }
       
    
}

//Clearing UI before painting new contents

function clearUI(){
    
    $("#section-Content").removeClass("tint");
  
    $("#itmEVENTS a").removeClass("selected");
    $("#itmABOUT a").removeClass("selected");
    $("#itmCALENDAR a").removeClass("selected");
    
    $("#section-Land").addClass("hide");
    $("#section-Content").addClass("hide");
    $("#divEvents").addClass("hide");
    $("#divAbout").addClass("hide");
    $("#divCalendar").addClass("hide");
    $("#divGallery").addClass("hide");
    $("#section-Land").addClass("hide");
    $("#navBar").addClass("hide");
    
    $("#imgWatermark").removeClass("dark");
    
    //Ensure only zoom is left before deciding where to go
    $("#wallpaper").attr("class","zoom");
    
}


//function popInfoBox(name){
//    
//    name = eventInfo[event]["name"];
//    ABSTRACT = eventInfo[event]["ABSTRACT"];
//    VENUE = eventInfo[event]["VENUE"];
//    DATE = eventInfo[event]["DATE"];
//    DISTANCE = eventInfo[event]["DISTANCE"];
//    
//    content = "<h3>ABSTRACT</h3><hr><p>"+ABSTRACT+"</p><br><hr>"+
//              "<h3>VENUE</h3><hr><p>"+VENUE+"</p><br><hr>"+
//              "<h3>ABSTRACT</h3><hr><p>"+ABSTRACT+"</p><br><hr>"+
//              "<h3>ABSTRACT</h3><hr><p>"+ABSTRACT+"</p><br><hr>"+
//    infoBox.html();
//    
//}


function popEventIcons(){
    
    //Start wrapIcons in intial state
//    icons.html('<h1 class="text-center">EVENTS<hr></h1><br>');
    icons.html('');
    
        $.each(eventInfo,function(key, value){
            
            var currentEvent = key;
            
            console.log(key,value);
            
            //Create event icons
            icons.append('<div class="col-xs-12 eventIconWrap"><img class="eventIcon" src="../img/'+key+'.svg" id="ico'+key+'"></div>');
            
            //Assign their click events
            $("#ico"+key).click(function(){
                
                $(".icoSelected").removeClass("icoSelected");
                $(this).addClass("icoSelected");
                
                infoBox.html(""); //First empty container
                
                $.each(value,function(key,value){
                    
                  infoBox.append("<h3>"+key+"</h3><hr><p>"+value+"</p><br>"); //Add new content
                    
                });
            });
            
                         
        });
    
};









//Temporary array for event info

var eventInfo = {
    trix:{
     ABSTRACT:"Amoija sffsdfsils, Stellenbosch. The TRIX Challenge will see athletes swimming in the Old Guard Canal, biking the technical        single-trackof Jonkershoek and finally running for glory down the oaky streets of downtown Stellenbosch.",
     DATE:"5 FEB 2016",
     DISTANCE:"Olympic Dsitance: 1.5km/40km/10km"
          },
    trail:{
     ABSTRACT:"Amoijfng to host two Tri-X Challenge events in 2016. These events will be a brand new addition to our race calendar.",
     VENUE:"Jonkershoek Trails, Stellenbosch. The TRIX Challenge will see athletes swimming in the Old Guard Canal, biking the technical        single-trackof Jonkershoek and finally running for glory down the oaky streets of downtown Stellenbosch.",
     DATE:"5 FEB 2016",
     DISTANCE:"Olympic Dsitance: 1.5km/40km/10km"
     }, 
    stages:{
     ABSTRACT:"Amoija isdll be a brand new addition to our race calendar.",
     VENUE:"Jonkershoek Trails, Stellenbosch. The TRIX Challenge will see athletes swimming in the Old Guard Canal, biking the technical        single-trackof Jonkershoek and finally running for glory down the oaky streets of downtown Stellenbosch.",
     DATE:"5 FEB 2016",
     DISTANCE:"Olympic Dsitance: 1.5km/40km/10km"
     },
    duo:{
     ABSTRACT:"Amoija is looking to host two Tri-X Challenge events in 2016. These events will be a brand new addition to our race calendar.",
     VENUE:"Jonkershoek Trails, Stellenfing for glory down the oaky streets of downtown Stellenbosch.",
     DATE:"5 FEB 2016",
     DISTANCE:"Olympic Dsitance: 1.5km/40km/10km"
     }
}



