jQuery.fn.contact=function() {
    var n='webmaster', d='micetf', e='fr',m='Pour contacter le webmestre...'; 
	$(this).attr("href",'mailto:'+n+'@'+d+'.'+e);
	$(this).attr("title",m);
	return this;
};	
