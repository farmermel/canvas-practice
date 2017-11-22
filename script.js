var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// c.fillStyle = "#D6607F";
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = "#5B7749";
// c.fillRect(300, 300, 200, 100);


//line

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400,300);
// c.strokeStyle = "#283520";
// c.stroke();


//arc / circle

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "#D6607F";
// c.stroke();


//make a lot!

// var colorArr = ['#3A322F', '#283520', '#5B7749', '#D6607F', '#5B3758', '#C05746', '#ADC698']

// for (let i = 0; i < 100; i++) {
//   var index = Math.floor(Math.random() * 7)
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = colorArr[index];
//   c.stroke();
// }

//move stuff

var x = 200;
var y = 200;
var dx = 4;
var dy = 4;
var radius = 30;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight)
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "#D6607F";
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  };

  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  };

  x += dx;
  y += dy;
}


animate();