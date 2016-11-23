var rotation = function (){
  $(".vapordude").rotate({
    angle:0,
    animateTo:360,
    callback: rotation,
    easing: function (x,t,b,c,d){  
      return c*(t/d)+b;
    }
  });
}

$(document).ready(function(){
	rotation();
});