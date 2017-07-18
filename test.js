
$('#myCanvas').on('mousedown',function(e){
  $('p').text('down');
});

$('#myCanvas').on('mousemove',function(e){
  $('p').text('moving');
});

$('#myCanvas').on('mouseup',function(e){
  $('p').text('up');
});
