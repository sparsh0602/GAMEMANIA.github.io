var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 2000); // Change image every 2 seconds
} 



 document.getElementsByTagName('select')[0].addEventListener('change',function(){ 
  var val = document.getElementsByTagName('select')[0].value; 
 
  
  if(val==="SNAKE MANIA")
  {
  let a=document.querySelector("#snake1");
  let b=document.querySelector("#snake2");
  let c=document.querySelector("#snake3");
  let d=document.querySelector("#snake4");

   a.style.display="block";
   b.style.display="none";
   c.style.display="none";
   d.style.display="none";
    
  }

  if(val==="TIC TAC TOE")
  {
   let a=document.querySelector("#snake1");
   let b=document.querySelector("#snake2");
   let c=document.querySelector("#snake3");
   let d=document.querySelector("#snake4");

   a.style.display="none";
   b.style.display="none";
   c.style.display="block";
   d.style.display="none";
     
    }

    if(val==="DINOSAUR MANIA")
    {
   let a=document.querySelector("#snake1");
   let b=document.querySelector("#snake2");
   let c=document.querySelector("#snake3");
   let d=document.querySelector("#snake4");

   a.style.display="none";
   b.style.display="block";
   c.style.display="none";
   d.style.display="none";
    }
   
    if(val==="FLIP IT")
    {
   let a=document.querySelector("#snake1");
   let b=document.querySelector("#snake2");
   let c=document.querySelector("#snake3");
   let d=document.querySelector("#snake4");

   a.style.display="none";
   b.style.display="none";
   c.style.display="none";
   d.style.display="block";
    }
   
    if(val==="#")
    {
   let a=document.querySelector("#snake1");
   let b=document.querySelector("#snake2");
   let c=document.querySelector("#snake3");
   let d=document.querySelector("#snake4");

   a.style.display="block";
   b.style.display="block";
   c.style.display="block";
   d.style.display="block";
    }
 }); 

