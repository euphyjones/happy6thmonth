function opentabs(evt, tabstabs) {
 
   var i, tabcontent, tablinks;
 
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }
 
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
 
   document.getElementById(tabstabs).style.display = "block";
   evt.currentTarget.className += " active";
 }
 
 function openCity(evt, cityName) {
 
   var i, tabcontent, tablinks;
 
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }
 
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
 
   document.getElementById(cityName).style.display = "block";
   evt.currentTarget.className += " active";
 }

 
var aText = new Array(
  "Haces que mi corazón se sienta más cálido cuando estoy contigo."
  );
  var iSpeed = 50; 
  var iIndex = 0; 
  var iArrLength = aText[0].length; 
  var iScrollAt = 20; 
   
  var iTextPos = 0; 
  var sContents = ''; 
  var iRow; 
   
  function typewriter()
  {
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  
  
  typewriter();

  function play() {
    var audio = document.getElementById("music-starto");
audio.loop = true;
    audio.play();
  }

