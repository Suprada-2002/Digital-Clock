
function openPage(pageName, ele, color) {
    //hide all elements
  var i, content , tablink;
  content = document.getElementsByClassName('content');

  for(i=0; i<content.length; i++) {
      content[i].style.display = "none";
  }

  // remove background color
 tablink = document.getElementsByClassName('tablink');

 for(i = 0; i<tablink.length; i++) {
     tablink[i].style.backgroundColor = "";
 }

 //show specific content
 document.getElementById(pageName).style.display = "block";
 //show specific color
 ele.style.backgroundColor = color;

}
 //get elemnt with id=defaultOpen and click on it
 document.getElementById("defaultOpen").click();

 
