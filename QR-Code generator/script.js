function generate(){  
    var typeNumber = 4;  
    var errorCorrectionLevel = 'L';  
    var qr = qrcode(typeNumber, errorCorrectionLevel);  
    var inputText = document.getElementById('text').value;  
    qr.addData(inputText);  
    qr.make();  
    document.getElementById('placeHolder').innerHTML = qr.createImgTag();  
    canvasScreen();  
  }  
  downloadQrCode =function (el){  
    var canvas = document.getElementById("myCanvas");  
    var image = canvas.toDataURL("image/png");  
    el.href = image;  
  };  
  function canvasScreen() {  
    var a = document.getElementsByTagName("img")[0];  
    a.setAttribute("id","qrcode");    
    var canvas = document.getElementById("myCanvas");  
    var ctx = canvas.getContext("2d");  
    var img = document.getElementById("qrcode");  
    ctx.drawImage(img,70,0,150,150);  
  document.getElementById("dBtn").style.display = "block";  
  }