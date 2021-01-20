var myHeading = document.querySelector('h1')
var myImage = document.querySelector('img')
var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

myHeading.textContent = 'Hello world!'

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png')
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png')
    }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = `You're cool dude, ${storedName}`;
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}