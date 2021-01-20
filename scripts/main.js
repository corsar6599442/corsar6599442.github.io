var myHeading = document.querySelector('h1')
var myImage = document.querySelector('img')

myHeading.textContent = 'Hello world!'

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src')
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png')
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png')
    }
}