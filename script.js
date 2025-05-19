var flowerImages = [
  'flower 01.png',
  'flower 02.png',
  'flower 03.png',
  'flower 04.png'
];

var canvases = [
  document.getElementById('flowerCanvas1'),
  document.getElementById('flowerCanvas2'),
  document.getElementById('flowerCanvas3'),
  document.getElementById('flowerCanvas4')
];

var sliders = [
  document.getElementById('slider1'),
  document.getElementById('slider2'),
  document.getElementById('slider3'),
  document.getElementById('slider4')
];

var flowerObjects = flowerImages.map(function (src) {
  var img = new Image();
  img.src = src;
  return img;
});

function applyPixelation(image, canvas, pixelSize) {
  var ctx = canvas.getContext('2d');
  var width = Math.floor(canvas.width / pixelSize);
  var height = Math.floor(canvas.height / pixelSize);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(image, 0, 0, width, height);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(canvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
}

flowerObjects.forEach(function (img, index) {
  var canvas = canvases[index];
  var slider = sliders[index];

  img.onload = function () {
    canvas.width = img.width * 0.8;
    canvas.height = img.height * 0.8;
    applyPixelation(img, canvas, slider.value);

    slider.addEventListener('input', function () {
      applyPixelation(img, canvas, slider.value);
    });
  };
});
