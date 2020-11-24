var myinterval;
function displayNextImage() {
      x = (x === images.length - 1) ? 0 : x + 1; 
      document.getElementById("img").src = images[x];
  }
  function startTimer(x) {
      if (x != 0){
        myinterval = setInterval(displayNextImage, x*1000);
      } else {
          clearInterval(myinterval);
      }
  }
  var images = [], x = -1;
  images[0] = "34.jpg";
  images[1] = "263.jpg";
  images[2] = "dark.jpg";
  images[3] = "he.jpg";
  images[4] = "vena.jpg";
	images[5] = "35835_640.jpg";

  function clear(){ 
    clearInterval(myinterval);
    }
var time = new Date().getHours();
if (time < 12) {
document.body.style.backgroundImage="url('IMG-20190202-WA0043.jpg')";
}else if (time > 12) {
document.body.style.backgroundImage="url('IMG-20190202-WA0035.jpg')";
};
