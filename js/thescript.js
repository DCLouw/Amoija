$(document).ready(function(){
    
    //Box containing event information
    infoBox = $("#eventInfo");
    fullImage = $("#imgFull");
    navbar = $("#navBar");
    
    itmBack = $("<a id='itmBack' class='navItem'>back</a>");
    
    fullImage.hide();
    
    arrEvents =[];
    
    //Populating the various content sections including their navbar arrays
    popGalleryNav();
    popEventsNav();
    popAboutNav();
    
    $("#btnEnterSite").click(function(){
       
        paintMenuItem("HOME");
        $("#header").show();
        
    });
    
    $("#header a").click(function(){
        paintMenuItem("HOME");
    });
        
});

function buildNav(navtype, navarr){
    
    
    console.log("type: " + navtype);
    console.log("array: " + navarr);
    
       navbar.empty();
       navbar.removeClass("onlyBack");
    
    //First check if the navbar contains  any items, or just the back button
     if (navarr.length == 0){
         navbar.addClass("onlyBack");
     }
    
       for (i=0;i<navarr.length;i++){
           
            var item = $("<a class='navItem' data-item='"+navarr[i]+"' data-type='"+navtype+"'>"+navarr[i]+"</a>");
           
            divider = $("<span>/</span>");
           
           
           navbar.append(item);
           navbar.append(divider);
          
           
           // Asigning the necessary click events to navItems
           
           $(item).click(function(){
               //paintUI($(this).attr("id"));
               navClick($(this).data("type"), $(this).data("item"));
           });
           
        }
    
        if (navtype !== "menu"){
                // Adding back button and assigning back click event
            navbar.prepend(itmBack, divider);
                itmBack.click(function(){
                paintMenuItem("HOME");
            });
        }
    
        
    
    navbar.removeClass("hide");
    
}

//Method to populate the DOM for each page

function paintMenuItem(item){
    
    clearUI();
    
    switch(item){
    
        case "EVENTS":
            
            buildNav("EVENTS",arrEventsNavbar);
            
//            $("#divEvents").addClass("tint");

            $("#section-Content").removeClass("hide");
            navbar.addClass("navDrop");

            $("#divEvents").removeClass("hide");
            $("#itmEVENTS a").addClass("selected");
            
            $("#wallpaper").addClass("posOne");
            $("#header").addClass("shrink");
            
            break;
            
        case "HOME" :
            
              buildNav("menu", ["EVENTS", "CALENDAR", "GALLERY", "ABOUT"]);
            
            
            
              navbar.removeClass("navDrop");
              navbar.addClass("vertigo");
            
              $("#imgWatermark").show();
              $("#imgWatermark").addClass("dark");
            
              $("#wallpaper").addClass("zoom");
            
             $("#imgWatermark").addClass("moving");
            
            break;
            
        case "CALENDAR" :
            
              buildNav("CALENDAR",[]);
            
              navbar.addClass("navDrop");
              $("#section-Content").removeClass("hide");

              $("#divCalendar").removeClass("hide");
              $("#itmCALENDAR a").addClass("selected");
            
              $("#wallpaper").addClass("posTwo");
                
            
            break;
            
        case "GALLERY" :
            
              buildNav("GALLERY",arrGalleryNavbar);
            
              navbar.addClass("navDrop");
              $("#section-Content").removeClass("hide");

              $("#divGallery").removeClass("hide");
            
              $("#wallpaper").addClass("posThree");
            
             $("#itmGALLERY a").addClass("selected");
            
            break;
            
         case "ABOUT" :
            
            buildNav("ABOUT",arrAboutNavbar);
            
            $("#section-Content").removeClass("hide");
            navbar.addClass("navDrop");
//
            $("#divAbout").removeClass("hide");
            $("#itmABOUT a").addClass("selected");
            
            $("#wallpaper").addClass("posFour");
            
            break;
    }
       
    
}

function paintEventsItem(item){
    
                //Adding the event icon
            $("#eventIcon").attr("src","../img/"+item+".svg" )
            
    
                //Adding the event info
                infoBox.html(""); //First empty container
                $.each(eventInfo[item],function(key,value){
                    
                  infoBox.append("<h3>"+key+"</h3><hr><p>"+value+"</p><br>"); //Add new content
 
                });
          
}

function paintGalleryItem(item){
    
     $("#galWrap").empty();
    
     $.each(eventPhotos[item], function(key,value){
        
            var item = $('<div class="thumbContainer"><img src="'+value+'"></div>');
            $("#galWrap").append(item);
             
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
          
}



//Clearing UI before painting new contents

function clearUI(){
    
  
//    $("#itmEVENTS a").removeClass("selected");
//    $("#itmABOUT a").removeClass("selected");
//    $("#itmCALENDAR a").removeClass("selected");
    
    $("#section-Land").addClass("hide");
    $("#section-Content").addClass("hide");
    $("#divEvents").addClass("hide");
    $("#divAbout").addClass("hide");
    $("#divCalendar").addClass("hide");
    $("#divGallery").addClass("hide");
    $("#section-Land").addClass("hide");
    navbar.addClass("hide");
    
    $("#imgWatermark").removeClass("dark");
    $("#imgWatermark").removeClass("moving");
    
    //Ensure only zoom is left before deciding where to go
    $("#wallpaper").attr("class","zoom");
    
}

//Handling all navbar clicks
function navClick(type, item){
    
    $(".selected").removeClass("selected");
    
    var active = $("#navBar .navItem[data-item="+item+"]");
    
    $(active).addClass("selected");
    console.log($(active));
    //Sorting clicks by type of item
    switch(type){
            
            case "menu" : 
            
                paintMenuItem(item);
            
            break;
            
            case "EVENTS" : 
            
                paintEventsItem(item);
            
            break;
            
            case "calendar" : 
            break;
            
            case "GALLERY" :
                
                paintGalleryItem(item);
            
            break;
            
            case "about" : 
            break;
    }
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

//Function responsible for populating events
function popEventsNav(){
    
        arrEventsNavbar = [];
    
        $.each(eventInfo,function(key, value){
            
            //populating the navbar with event items
            arrEventsNavbar.push(key);
            
             
        });
       
}

//Function responsible for populating gallery items
function popGalleryNav(){
    
    arrGalleryNavbar = [];
    
    $.each(eventPhotos, function(key,value){
        
        arrGalleryNavbar.push(key);
        
    });
      
}

//Function responsible for populating gallery
function popAboutNav(){
    
    arrAboutNavbar = [];
    
    $.each(socialLinks, function(key,value){
        
//        link = '<a id="fb" href="https://www.facebook.com/conradstoltz" target="_blank" class=""><i class="fa fa-facebook fa-fw fa-2x"></i></a>';
        
        link = '<i class="fa fa-'+key+'" fa-fw fa-x"></i>';
        
        arrAboutNavbar.push(link);
        
        
    });
    
    console.log(arrAboutNavbar);
      
}



//function popEventsNavbar(){
//    
//            var arr = ["back"];
//    
//            $.each(eventInfo,function(key, value){
//            
//            arr.push(key);
//                         
//        });
//    
//    return(arr);
//}



var eventPhotos ={
    Bartiney2Bartiney:["../img/photos/1.jpg","../img/photos/1.jpg","../img/photos/1.jpg"],
    Cochoqua:["../img/photos/2.jpg","../img/photos/2.jpg","../img/photos/2.jpg"],
    "More Amoija Events":["../img/photos/2.jpg","../img/photos/2.jpg","../img/photos/2.jpg"],
}






//Temporary array for event info

var eventInfo = {
    Bartiney2Bartiney:{
     ABSTRACT:"With over 500 participants and the event selling out in year one, this is an epic experience not to be missed. The fact that this race is presented by The Stellenbosch Trail Fund should be the first tip to the quality of trail which athletes can expect from this race.",
     DATE:"14 May 2017",
     VENUE:"Stellenbosch",
     ROUTE:"With The Stellenbosch Trail Fund putting in masses of work on Botmaskop, the route promises to reveal some brand new, world-class trails in 2017.",
     DISTANCES:"Bartinney Extreme: 25km<br><br> Bartinney Dash: 10km",
     CATEGORIES:"Open",
     ENTRIES:"Bartinney Extreme: R290 (Only 100 Early bird entries)<br><br> Bartinney Dash: R190 (Only 150 Early bird entries)<br><br> SAS timing chip compulsory for this event @ R50 same chip as all the Amoija / Warrior / Impi / Entry ninja timed events. Chips can also be rented for R10 on the day.",
     REGISTRATION:"Registration will take place at Bartinney Wine Bar on 12 May from 17:30 until 20:00.<br><br> There will be no late entries for this race. Particapants coming from far, the second Registration will take place on the morning of the event at Bartinney Wine Bar from 06:00.",
     STARTING:"25km – 07:15<br><br> 10km – 07:30 <br><br>Cut off time: no cut off time Prize Giving and Lucky draw at 10:00 Stick around for lots of lucky draw prizes and cash prizes for the winners.",
     MORE:"General information: Live Music, coffee, wine, food and drinks available afterwards. Free glass of Bubbly to all the mothers who participate. EPT recovery zone There will be a shuttle service from the finish area back to Bartinney Wine Bar, leaving Bartinney farm every 30/45 mins from 09:45. Part of the proceeds will go to Stellenbosch Trail Fund."
          },
    Cochoqua:{
     ABSTRACT:"The mighty Cochoqua were the richest and strongest of the Khoi tribes in area of the Berg River and Drakenstein Valleys. Lead by their fierce leader Gonnama, they grew nearly 18 000 strong in the late 1600's. <br><br>The challenge set before you is to immitate this mighty people in conquering the Drakenstein Valleys, and calling this relentless terain your playground.",
     DATE:"22-24 SEPT 2017",
     VENUE:"Boschendal Wine Estate",
     ROUTE:"",
     CATEGORIES: "Solo Entires <br><br>Team Entries:<br> Cat 1: Male & Female (open)<br><br>Cat 2: Male & Female (Vets 40+)<br><br>Cat 3: Mixed",
     DISTANCES: "	Day 1: ±8 - 10km Boschendal (prologue)<br><br> Day 2: ±25 - 30km Banghoek Valley <br><br>Day 3: ±18- 20km Boschendal <br><br>Total: +-60km",
     ENTRIES:"Solo Entries:<br><br><br>R990 - Solo Entry - No accommodation, no meals (25 entries)<br><br>R2 500 - Solo Entry - Tented accommodation – one man tent, Breakfast, lunch & dinner (10 entries)<br><br>R4 500 - Solo Entry - Cottage Accommodation, Breakfast, Lunch & Dinner - 4 p/cottage (16 entries)<br><br>Teams (2p/team):<br>R990 - p/person - no accommodation, no meals (25 Teams)<br><br>R2 500 -p/person - Tented accommodation – one man tent, Breakfast, lunch & dinner (20 Teams)<br><br>R3 500.00 p/person - Luxury accommodation at race village - breakfast, Lunch & dinner (4 per cottage, 22 Teams) <br><br>R4 000 -p/person - Luxury accommodation at race village - breakfast, Lunch & dinner (2 per cottage, 6 teams)",
     REGISTRATION:"",
     STARTING:"",
     MORE:""
     }
}

var socialLinks ={
    twitter : "www.twitter.com",
    facebook : "www.facebook.com",
    instagram : "www.instagram.com",
    envelope: "mailto:herman@amoija.com"
}



