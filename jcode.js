var rotation = function (){
  $("#vapor-dude").rotate({
    angle:-1,
    animateTo:360,
    callback: rotation,
    easing: function (x,t,b,c,d){  
      return c*(t/(d))+ b;
    }
  });
}

$(function() {
    $( "#panel" ).draggable();
    $( "#panel2" ).draggable();
    $( "#panel3" ).draggable();
    $( "#vapor-dude" ).draggable();
    $( "#vwave-video" ).draggable();

});

$(document).ready(function(){
	rotation();
});