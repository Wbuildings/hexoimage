 console.log('tag cloud plugin rock and roll!');
 document.getElementById('myCanvasContainer').style.display = 'inline';
 try {
   TagCanvas.textFont = 'Helvetica';
   TagCanvas.textColour = '#333';
   TagCanvas.textHeight = 15;
   TagCanvas.outlineColour = '#E2E1C1';
   TagCanvas.maxSpeed = 0.03;
   TagCanvas.freezeActive = true;
   TagCanvas.outlineMethod = 'block';
   TagCanvas.minBrightness = 0.2;
   TagCanvas.depth = 0.92;
   TagCanvas.pulsateTo = 0.6;
   TagCanvas.initial = [0.1, -0.1];
   TagCanvas.decel = 0.98;
   TagCanvas.reverse = true;
   TagCanvas.hideTags = false;
   TagCanvas.shadow = '#ccf';
   TagCanvas.shadowBlur = 3;
   TagCanvas.weight = false;
   TagCanvas.imageScale = null;
   TagCanvas.fadeIn = 1000;
   TagCanvas.clickToFront = 600;
   TagCanvas.lock = false;
   TagCanvas.Start('resCanvas');
   TagCanvas.tc['resCanvas'].Wheel(true)
 } catch (e) {
   console.log(e);
 }
