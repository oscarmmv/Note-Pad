var inputField  = document.getElementById('textPage');
document.getElementById("textPage").innerHTML = localStorage.getItem("textBoxContent");;

var textBox = [] 
var textBoxContent;

setInterval(function() {
  textBox.pop(textBox[0]);
  textBox.push(inputField.value);
  textBoxContent = textBox[0];
  localStorage.setItem('textBoxContent', textBoxContent);
}, 1000);


function changeFontSize(id, increaseFactor) {
  txt = document.getElementById(id);
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize + increaseFactor) + 'px';
  if(txt.style.fontSize > 80 + 'px') {
    txt.style.fontSize = 80 + 'px';
  } else if(txt.style.fontSize < 12 + 'px') {
    txt.style.fontSize = 12 + 'px';
  }
  
}

function bold() {
  txt = document.getElementById('textPage');
  var txtStyle = txt.style.fontWeight;
  if(txtStyle == 'bold') {
    txt.style.fontWeight = 'normal';
  } else {
    txt.style.fontWeight = 'bold';
  }
}

function italics() {
  txt = document.getElementById('textPage');
  if(txt.style.fontStyle == "italic") {
    txt.style.fontStyle = "normal";
  } else {
    txt.style.fontStyle = "italic";
  }
}

function underline(){
  txt = document.getElementById("textPage");
  if( txt.style.textDecoration == "underline" ) {
    txt.style.textDecoration = "none";
  } else {
    txt.style.textDecoration = "underline";
  }
}
