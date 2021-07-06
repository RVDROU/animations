$(document).ready(function() {

	var moncanvas=document.getElementById('boulier');
	var ctxBoulier=moncanvas.getContext('2d');
	var eltBoulier=$('#boulier');
	var rBoule=(eltBoulier.width()-2)/32;
	var fond=new Array('#F2DCB3','#1A3540');
	var tiges=new Array('#1A3540','#F2DCB3');
	var selection=new Array('#1A3540','#F2DCB3');
	var iCouleur=0;
	var unites=new Array(0,0,0,0,0,0,0,0,0,0);

	var surveillerCanvas=function(canvas,callback) {
	    $('form').hide();
        canvas.addEventListener("transitionend",callback());
        canvas.addEventListener("MSTransitionEnd", callback());
        canvas.addEventListener("transitionend", callback());
        canvas.addEventListener("webkitTransitionEnd", callback());
        canvas.addEventListener("oTransitionEnd", callback());
	};

	var boule=function(n) {
		var d=Math.floor((n-1)/9);
		var u=n-(d*9);
		var gauche=(u<=unites[d]) ? (rBoule*32)-10 : (rBoule*20)+10;
		var xLigne=(u>5) ? gauche-(8+(u*2*rBoule)-rBoule) : gauche-((u*2*rBoule)-rBoule);
		var yLigne=(d>4) ? 5+(d+1)*eltBoulier.height()/11:-5+(d+1)*eltBoulier.height()/11;
		var couleurs=new Array(new Array('green','blue'),new Array('orange','red'));
		ctxBoulier.fillStyle=couleurs[Math.floor(d/5)][Math.floor(u/6)];
		ctxBoulier.strokeStyle=selection[iCouleur];
		ctxBoulier.beginPath();
		ctxBoulier.arc(xLigne,yLigne,rBoule-1,0,Math.PI*2,true);
		ctxBoulier.closePath();
		ctxBoulier.fill();
		ctxBoulier.lineWidth = (u<=unites[d]) ? 3 : 1;
		ctxBoulier.stroke();
	};

	var dessineBoulier=function() {
		iCouleur=($('#couleur').val()=='Clair') ? 1 : 0;
		ctxBoulier.fillStyle=fond[iCouleur];
		ctxBoulier.strokeStyle=tiges[iCouleur];
		ctxBoulier.lineWidth=3;
		ctxBoulier.clearRect(0,0,eltBoulier.width(),eltBoulier.height());
		ctxBoulier.fillRect(0,0,eltBoulier.width(),eltBoulier.height());
		ctxBoulier.strokeRect(0,0,eltBoulier.width(),eltBoulier.height());
		
		if (($('#masquer').val()=='Voir') ) return false;
		ctxBoulier.lineWidth=3;
		for (var d=0;d<10;d++) {
			ctxBoulier.beginPath();
			var delta=(d>4)? 5:-5;
			ctxBoulier.moveTo(0,delta+(d+1)*eltBoulier.height()/11);
			ctxBoulier.lineTo(600,delta+(d+1)*eltBoulier.height()/11);
			ctxBoulier.closePath();
			ctxBoulier.stroke();
		}
		for (var i=0;i<90;i++) {
			boule(i+1);
		}
		ctxBoulier.save();
		ctxBoulier.lineWidth=2;
		ctxBoulier.textAlign='right';
		ctxBoulier.textBaseline='bottom';
		ctxBoulier.fillStyle=ctxBoulier.strokeStyle;
		ctxBoulier.restore();
		$('#combien').text(combien());
		
    surveillerCanvas(moncanvas,function() {
        $('input[name=image]').attr('value',moncanvas.toDataURL());
        $('form').show();
    });
	};
	var combien=function() {
	  if ($('#afficher').val()=='Afficher') return 'XXX';
		var boulier=($('#representer').val()=='Unité') ? 1 : 100;
		var tot=0;
		for (var i=0;i<unites.length;i++) {
		  tot+=unites[i];
		}
		tot=boulier*tot/100;
		tot=tot.toString().replace('.',',');
		return tot;
	};
	
	$('#boulier').mousemove(function(event) {
		var offset = $(this).offset();
		dx=Math.round(event.pageX-offset.left);
		dy=event.pageY-($(this).scrollTop())-offset.top;
		
		var couleur=ctxBoulier.getImageData(dx,dy,1,1);
		var c0=couleur.data[0]+couleur.data[1]+couleur.data[2];
		if (c0==128 || c0==255 || c0==420 || c0==510) {
			$(this).css('cursor','pointer');
		} else {
			$(this).css('cursor','auto');
		}
	});
	
	$('#boulier').click(function(event) {
		var offset = $(this).offset();
		dx=Math.round(event.pageX-offset.left);
		dy=event.pageY-($(this).scrollTop())-offset.top;
		
		var couleur=ctxBoulier.getImageData(dx,dy,1,1);
		var c0=couleur.data[0]+couleur.data[1]+couleur.data[2];
		if (c0==128 || c0==255 || c0==420 || c0==510) {
			var d=(dy<eltBoulier.height()/2) ? 
				Math.round((dy-5)/Math.round(eltBoulier.height()/11))-1 : 
				Math.round((dy+5)/Math.round(eltBoulier.height()/11))-1;
				
			var oldUnite=unites[d];
			
			unites[d]=(dx>eltBoulier.width()-((rBoule*10)+2)) ? 
				Math.floor((eltBoulier.width()-(dx+2))/(2*rBoule)):
				Math.floor((eltBoulier.width()-(dx+6))/(2*rBoule));
			if (oldUnite<unites[d]) {
				unites[d]=(dx>2+(10*rBoule)) ? 
					10-Math.floor((dx-6)/(2*rBoule)):
					10-Math.floor((dx-2)/(2*rBoule));
			}
		}
		$(this).css('cursor','auto');
		dessineBoulier();
	});

	$('#masquer').toggle(function() {
		$('#masquer').val('Voir');
		dessineBoulier();
		return false;
	},function() {
		$('#masquer').val('Masquer');
		dessineBoulier();
		return false;
	});
	$('#couleur').toggle(function() {
		$('#couleur').val('Foncé');
		dessineBoulier();
		return false;
	},function() {
		$('#couleur').val('Clair');
		dessineBoulier();
		return false;
	});
	$('#representer').toggle(function() {
		$('#representer').val('Unité');
		$('#combien').text(combien());
		return false;
	},function() {
		$('#representer').val('Centaine');
		$('#combien').text(combien());
		return false;
	});
	$('#afficher').toggle(function() {
		$('#afficher').val('Masquer');
		$('#combien').text(combien());
		return false;
	},function() {
		$('#afficher').val('Afficher');
		$('#combien').text(combien());
		return false;
	});
	$('#raz').click(function() {
		unites=new Array(0,0,0,0,0,0,0,0,0,0);
		dessineBoulier();
		return false;
	});
	
	dessineBoulier();

});
