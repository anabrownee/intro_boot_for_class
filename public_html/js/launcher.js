function addClassToBody(){
    var width=$(window).width();
    
    if (width<= 767){
	$('#zone1').hide();
	$('#zone1bis').show();
    }
    else{
	$('#zone1').show();
	$('#zone1bis').hide()
    }
}

$(document).ready (function(){
    addClassToBody();
})

$(window).resize(function(){
    addClassToBody();
});