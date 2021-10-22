function doIframe(){
	o = document.getElementsByTagName('iframe');
	for(i=0;i<o.length;i++){
		if (/\bautoHeight\b/.test(o[i].className)){
			setHeight(o[i]);
			addEvent(o[i],'load', doIframe);
		}
	}
}
function setHeight(e){
	if (e.Document && e.Document.body.scrollHeight) //ie5+ syntax
		e.height = e.contentWindow.document.body.scrollHeight;

	else if (e.contentDocument && e.contentDocument.body.scrollHeight) //ns6+ & opera syntax
		e.height = e.contentDocument.body.scrollHeight;

	else (e.contentDocument && e.contentDocument.body.offsetHeight) //standards compliant syntax – ie8
		e.height = e.contentDocument.body.offsetHeight;
}

function addEvent(obj, evType, fn){
	if(obj.addEventListener)
	{
	obj.addEventListener(evType, fn,false);
	return true;
	} else if (obj.attachEvent){
	var r = obj.attachEvent("on"+evType, fn);
	return r;
	} else {
	return false;
	}
}

if (document.getElementById && document.createTextNode){
 addEvent(window,'load', doIframe);	
}
