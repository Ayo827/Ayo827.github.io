// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }  for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
// }
// slides[slideIndex-1].style.display = "block";  
// dots[slideIndex-1].className += " active";
// }

//   var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 12000); // Change image every 2 seconds
// }

//   var img1 = document.getElementsByClassName("example1");
//   img1.src = "background/Frame-8.jpg"; 
//   var style = document.createElement("style");
//   style.innerHTML = ' .example1 { visibility: visible;} ';
//   var textVisibility = style.innerHTML;
//   function showText(){
//       if(img1 == textVisibility){
//         var section = document.getElementsByClassName("example1");
//           var paragraph = document.createElement("p");
//           var text = paragraph.innerHTML;
//           text = "Whats up";
//           console.log(text);
//           section.appendChild(paragraph);
//           paragraph.appendChild(text);
//       }
      
//   }

// alert("welcome to SystemSpecs");
// console.log("Ayo is my name");

/*starting anew*/
//Making a slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 12000); // Change image every 2 seconds
}
//Designing an appearing-disappearing nav-bar
var prevScrollpos = window.pageYOffset;

window.onscroll = function(){
  var currentScrollPos = window.pageYOffset;
  var scroll = document.getElementsByClassName("navbar");
  if(prevScrollpos > currentScrollPos){
          scroll.style.top = "0";
  }else{
    scroll.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

//making a manuel slideshow for a text
var slideIndex = 0; //display the first text
showDivs();
// showDivs(slideIndex);

// function plusSlides(n)/*n represent the value in the function of plusSlides, it is added or subtracted from slideIndex*/
// {  
//   showDivs(slideIndex += n);
// }

function showDivs(){
  var i;
  var x = document.getElementsByClassName("myslide");
  if (slideIndex < 0) {slideIndex = x.length;}
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > x.length) {slideIndex = 1;}
  x[slideIndex-1].style.display = "block";
}