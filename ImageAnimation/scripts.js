const canvas = document.querySelector("canvas");
const main = document.getElementById("main");
const context = canvas.getContext("2d");

canvas.width = main.offsetWidth;
canvas.height = main.offsetHeight-10;



window.addEventListener("resize", function () {
    main.offsetWidth=window.innerWidth/2;
    main.offsetHeight=window.innerHeight-1;

  canvas.width = main.offsetWidth;
  canvas.height = main.offsetHeight-10;
  render();
});


function files(index) {
  var data = [
    "https://neverland.agency/assets/0001.6092bc89.webp",
    "https://neverland.agency/assets/0002.0d0eda63.webp",
    "https://neverland.agency/assets/0003.ca7b38f3.webp",
    "https://neverland.agency/assets/0004.4aace1a4.webp",
    "https://neverland.agency/assets/0005.11a84f1a.webp",
    "https://neverland.agency/assets/0006.53da3b21.webp",
    "https://neverland.agency/assets/0007.dbd27e9b.webp",
    "https://neverland.agency/assets/0008.a8723adf.webp",
    "https://neverland.agency/assets/0009.361e0ae1.webp",
    "https://neverland.agency/assets/0010.6562a56d.webp",
    "https://neverland.agency/assets/0011.57bbc8b2.webp",
    "https://neverland.agency/assets/0012.e8b861c0.webp",
    "https://neverland.agency/assets/0013.19f0aedd.webp",
    "https://neverland.agency/assets/0014.c218eb85.webp",
    "https://neverland.agency/assets/0015.7ce373ff.webp",
    "https://neverland.agency/assets/0016.7591480f.webp",
    "https://neverland.agency/assets/0017.568cdca0.webp",
    "https://neverland.agency/assets/0018.1771360f.webp",
    "https://neverland.agency/assets/0019.ca23f56c.webp",
    "https://neverland.agency/assets/0020.89b8a885.webp",
    "https://neverland.agency/assets/0021.912a0920.webp",
    "https://neverland.agency/assets/0022.98aef5b6.webp",
    "https://neverland.agency/assets/0023.8e6d8139.webp",
    "https://neverland.agency/assets/0024.360754d7.webp",
    "https://neverland.agency/assets/0025.59ac8ca9.webp",
    "https://neverland.agency/assets/0026.03dc177e.webp",
    "https://neverland.agency/assets/0027.f2fcc66f.webp",
    "https://neverland.agency/assets/0028.3c68eca5.webp",
    "https://neverland.agency/assets/0029.3830c1ca.webp",
    "https://neverland.agency/assets/0030.313c7bff.webp",
    "https://neverland.agency/assets/0031.ed19d3d0.webp",
    "https://neverland.agency/assets/0032.e5722575.webp",
    "https://neverland.agency/assets/0033.57e4fbbf.webp",
    "https://neverland.agency/assets/0034.26593155.webp",
    "https://neverland.agency/assets/0035.c478bb6e.webp",
    "https://neverland.agency/assets/0036.7617954b.webp",
    "https://neverland.agency/assets/0037.ff0d6e04.webp",
    "https://neverland.agency/assets/0038.454374f5.webp",
    "https://neverland.agency/assets/0039.6c849dce.webp",
    "https://neverland.agency/assets/0040.6d54db4b.webp",
    "https://neverland.agency/assets/0041.d17a75b5.webp",
    "https://neverland.agency/assets/0042.8e58519f.webp",
    "https://neverland.agency/assets/0043.a097a1c8.webp",
    "https://neverland.agency/assets/0044.1cd5291a.webp",
    "https://neverland.agency/assets/0045.7261d27f.webp",
    "https://neverland.agency/assets/0046.4a0fbc3a.webp",
    "https://neverland.agency/assets/0047.05927d38.webp",
    "https://neverland.agency/assets/0048.a7f3a34b.webp",
    "https://neverland.agency/assets/0049.4f784875.webp",
    "https://neverland.agency/assets/0050.3b1729e5.webp",
  ];
  return data[index];
}


const frameCount = 50;

const images=[];

const currentFrame = {frame:0};

for (let i = 0; i < frameCount; i++) {
    const imgTag = new Image();
    imgTag.src = files(i);

    imgTag.width = main.offsetWidth;
    imgTag.height = main.offsetHeight-10;

    images.push(imgTag);
}


images[0].onload = render;


function render() {
    drawImageScaled(images[currentFrame.frame], context);
  }

  function drawImageScaled(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.height / img.height;
    var wRatio = canvas.width / img.width;
  
    var ratio = Math.max(wRatio, hRatio);
  
    var centerX = (canvas.width - img.width * ratio) / 2;
    var centerY = (canvas.height - img.height * ratio) / 2;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(img,0,0,img.width,img.height);
  }

  window.onload = function() {

    var timeline = new TimelineMax();
    timeline.to(currentFrame,{
        frame:frameCount-1,
        snap:"frame",
        ease:"none",
        onUpdate:render
    });
  }

// gsap.to(currentFrame,{
//     frame:frameCount-1,
//     snap:"frame",
//     ease:"none",
//     scrollTrigger:{
//         scrub:0.5
//     },
//     onUpdate:render
// });