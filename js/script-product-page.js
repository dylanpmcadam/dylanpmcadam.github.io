// on hover the logo will go smooth and return to pixelated when you stop hovering
var logo = document.getElementById('logo');
logo.addEventListener('mouseover', function(){
    this.src = "images/logo-smooth.svg"
  });
logo.addEventListener('mouseout', function(){
    this.src = "images/logo.svg"
});



// MODAL 1 - ANALYTIC EDITOR

// get the modal
var modal = document.getElementById("myModal");

// get the analytic editor card that opens the modal
var card = document.getElementById("analytic-editor");

// get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// when the user clicks on the analytic editor card, open the modal and autofocus the input box
card.onclick = function() {
  modal.style.display = "block";
  document.getElementById("password").focus();
}

// when the user clicks on <span> (x), close the modal, reset the error styling, and remove any entered value form the input box
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("password").classList.remove('error');
  document.getElementById('password').value = '';
}

// when the user clicks anywhere outside of the modal, close the modal, reset the error styling, and remove any entered value form the input box
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("password").classList.remove('error');
    document.getElementById('password').value = '';
  }
}

/* cache the input */
var input = document.getElementById("password");

/* call passwordCheck function when the Enter key is released */
input.onkeyup = function (e) {
   if (e.which == 13) passwordCheck();
};

/* prevent the form from submitting and disappearing before password input is checked */
input.parentElement.onsubmit = function () {
   return false;
};

// checks if the password input is correct
function passwordCheck() {
  var password = document.getElementById("password").value;
  if(password=="news"){
    window.open ('analytic-editor.html','_self')
  }
  else{
    input.blur();
    document.getElementById('password').value = '';
    document.getElementById("password").classList.add('error');
  }
}



// MODAL 2 - GOVINI DESIGN SYSTEM

// get the modal
var modal2 = document.getElementById("myModal2");

// get the govini design system card that opens the modal
var card2 = document.getElementById("govini-design-system");

// get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// when the user clicks on the govini design system card, open the modal and autofocus the input box
card2.onclick = function() {
  modal2.style.display = "block";
  document.getElementById("password2").focus();
}

// when the user clicks on <span> (x), close the modal, reset the error styling, and remove any entered value form the input box
span2.onclick = function() {
  modal2.style.display = "none";
  document.getElementById("password2").classList.remove('error');
  document.getElementById('password2').value = '';
}

// when the user clicks anywhere outside of the modal, close the modal, reset the error styling, and remove any entered value form the input box
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
    document.getElementById("password2").classList.remove('error');
    document.getElementById('password2').value = '';
  }
}

/* cache the input */
var input2 = document.getElementById("password2");

/* call passwordCheck function when the Enter key is released */
input2.onkeyup = function (e) {
   if (e.which == 13) passwordCheck2();
};

/* prevent the form from submitting and disappearing before password input is checked */
input2.parentElement.onsubmit = function () {
   return false;
};

// checks if the password input is correct
function passwordCheck2() {
  var password2 = document.getElementById("password2").value;
  if(password2=="news"){
    window.open ('govini-design-system.html','_self')
  }
  else{
    input2.blur();
    document.getElementById('password2').value = '';
    document.getElementById("password2").classList.add('error');
  }
}



// MODAL 3 - A/B TESTING

// get the modal
var modal3 = document.getElementById("myModal3");

// get the a/b testing card that opens the modal
var card3 = document.getElementById("ab-testing");

// get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// when the user clicks on the a/b testing card, open the modal and autofocus the input box
card3.onclick = function() {
  modal3.style.display = "block";
  document.getElementById("password3").focus();
}

// when the user clicks on <span> (x), close the modal, reset the error styling, and remove any entered value form the input box
span3.onclick = function() {
  modal3.style.display = "none";
  document.getElementById("password3").classList.remove('error');
  document.getElementById('password3').value = '';
}

// when the user clicks anywhere outside of the modal, close the modal, reset the error styling, and remove any entered value form the input box
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
    document.getElementById("password3").classList.remove('error');
    document.getElementById('password3').value = '';
  }
}

/* cache the input */
var input3 = document.getElementById("password3");

/* call passwordCheck function when the Enter key is released */
input3.onkeyup = function (e) {
   if (e.which == 13) passwordCheck3();
};

/* prevent the form from submitting and disappearing before password input is checked */
input3.parentElement.onsubmit = function () {
   return false;
};

// checks if the password input is correct
function passwordCheck3() {
  var password3 = document.getElementById("password3").value;
  if(password3=="news"){
    window.open ('ab-testing.html','_self')
  }
  else{
    input3.blur();
    document.getElementById('password3').value = '';
    document.getElementById("password3").classList.add('error');
  }
}



// creates div with scrim background and div with the clicked image to zoom in
$('img[zoomable]').addClass('img-enlargeable').click(function() {

    var src = $(this).attr('src');

    var scrim;

    var content;

    // esc key goes back to page
    function removeAll() {
      scrim.remove();
      content.remove();
      document.documentElement.removeAttribute("style");
      $('body').off('keyup.modal-close');
    }

    scrim = $('<div class="scrim">').css({
        display: 'block'
    }).appendTo('body');

    content = $('<div class="content">').css({
        background: 'url(' + src + ') no-repeat center',
        backgroundSize: 'contain',
        width: '95%',
        height: '95%',
        position: 'fixed',
        zIndex: '2',
        cursor: 'zoom-out',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }).click(function() {
      removeAll();
    }).appendTo('body');

    document.documentElement.style.overflowY = "hidden";

    // esc key goes back to page
    $('body').on('keyup.modal-close', function(e) {
      if (e.key === 'Escape') {
        removeAll();
      }
    });
  });



// script pulled from stackoverflow for an automatic slideshow of research
const slideshowArray = [
  'images/product-page/study-1.png',
  'images/product-page/study-2.png',
  'images/product-page/study-3.png',
  'images/product-page/study-4.png',
  'images/product-page/study-5.png'
];

let index = 0;  // This will keep track of the current array index to use
let img = document.getElementById('slideshow'); // Get your reference just once, not on each function call

function autoChange() {
  // You only need to ensure that the index isn't out of bounds
  if(index < slideshowArray.length){
    img.src = slideshowArray[index];      // If not, use the index
    index++;                        // Then, increment it
    console.clear();
    console.log(slideshowArray[index]);
  } else {
    index = 0;  // If so, reset the index
  }
  // Now that the right image is showing, wait 2 seconds and call the function all over again
  setTimeout(autoChange, 2000);  
}

autoChange();