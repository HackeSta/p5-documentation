let width, height, positionX, positionY, container, DOCUMENTATION_URL;
function setupDocumentation(url){
  DOCUMENTATION_URL = url;
  
  container = createDiv('').addClass('container hide');
  container.child(createElement('markdown').attribute('id','markdown'));

  if(getURLParams().fullscreen === 'true'){
    width = windowWidth;
    height = windowHeight;
    positionX = 0;
    positionY = 0;
    createButton('Normal').position(0,0).class('restorebtn').mousePressed(function(){
      window.location.href = '?fullscreen=false';
    });  
  }
  else{
    height = (windowHeight/10)*4;
    width = (windowWidth/10)*4;
    positionX = (windowWidth/10)*3;
    positionY = (windowHeight/10);
    createButton('FullScreen').position(positionX, positionY -50).mousePressed(function(){
      window.location.href = '?fullscreen=true';
    });  
    container.removeClass('hide');
    container.position(positionX, height + positionY);
    $("#markdown").load(DOCUMENTATION_URL, function(data){
      markdown();
    });
  }
  
  windowWidth = width;
  windowHeight = height;
  createCanvas(windowWidth,windowHeight).position(positionX,positionY);
  translate(positionX,positionY);
  
}
