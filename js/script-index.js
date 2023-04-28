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

// get the govini a/b testing card that opens the modal
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



// MODAL 4 - PRODUCT PAGE

// get the modal
var modal4 = document.getElementById("myModal4");

// get the product page card that opens the modal
var card4 = document.getElementById("product-page");

// get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// when the user clicks on the product page card, open the modal and autofocus the input box
card4.onclick = function() {
  modal4.style.display = "block";
  document.getElementById("password4").focus();
}

// when the user clicks on <span> (x), close the modal, reset the error styling, and remove any entered value form the input box
span4.onclick = function() {
  modal4.style.display = "none";
  document.getElementById("password4").classList.remove('error');
  document.getElementById('password4').value = '';
}

// when the user clicks anywhere outside of the modal, close the modal, reset the error styling, and remove any entered value form the input box
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
    document.getElementById("password4").classList.remove('error');
    document.getElementById('password4').value = '';
  }
}

/* cache the input */
var input4 = document.getElementById("password4");

/* call passwordCheck function when the Enter key is released */
input4.onkeyup = function (e) {
   if (e.which == 13) passwordCheck4();
};

/* prevent the form from submitting and disappearing before password input is checked */
input4.parentElement.onsubmit = function () {
   return false;
};

// checks if the password input is correct
function passwordCheck4() {
  var password4 = document.getElementById("password4").value;
  if(password4=="news"){
    window.open ('product-page.html','_self')
  }
  else{
    input4.blur();
    document.getElementById('password4').value = '';
    document.getElementById("password4").classList.add('error');
  }
}





function showMore(){
    // //removes the link
    // var link = document.getElementById("link");
    // link.remove();
    // flips the arrow

    var link = document.getElementById("link")


    link.remove();
    document.getElementById("interests").style.display = "grid";

    // if (link.innerHTML == "LEARN MORE ↓") {
    //     link.innerHTML = "LEARN MORE ↑";
    //     document.getElementById("interests").style.display = "grid";
    //   } else if (link.innerHTML == "LEARN MORE ↑") {
    //     link.innerHTML = "LEARN MORE ↓";
    //     document.getElementById("interests").style.display = "none";
    //   }

}