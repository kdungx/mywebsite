var msg ='<p><b>page tittle </b>' +document.tittle+ '<br/>';
msg += document.URL + '<br/>';
msg += document.lastModified;


var el = document.getElementByid('footer');
el.innerHTML=msg;