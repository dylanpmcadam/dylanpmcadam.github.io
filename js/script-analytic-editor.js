// on hover the logo will go smooth and return to pixelated when you stop hovering
var logo = document.getElementById('logo');
logo.addEventListener('mouseover', function(){
    this.src = "images/logo-smooth.svg"
  });
logo.addEventListener('mouseout', function(){
    this.src = "images/logo.svg"
});





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
  if(password2=="decision"){
    window.open ('govini-design-system.html','_self')
  }
  else{
    input2.blur();
    document.getElementById('password2').value = '';
    document.getElementById("password2").classList.add('error');
  }
}