var getDataFromServer = function(fileName){
  var r =  new XMLHttpRequest();
  r.open("GET", fileName, false);
  r.send(null);

  var json = xmlToJson(r.responseXML);
  return json;
}

var parseFireworksData= function(json, zeroX, zeroY){
  var jsonArray = json.FireworkDisplay.Firework;

  var fireworksArr = [];
  for (var i = 0; i < jsonArray.length; i++){
    var fw = jsonArray[i];
    var begin = parseInt(fw['@attributes'].begin,10)/10;
    var duration = parseInt(fw['@attributes'].duration,10)/10;
    var color = fw['@attributes'].colour.replace("0x","#");
    var posX = parseInt(fw.Position['@attributes'].x,10);
    var posY = parseInt(fw.Position['@attributes'].y,10);
    if(fw['@attributes'].type === 'Fountain'){
      var fountainEmitter = new Emitter(new Vector(zeroX + posX, zeroY - posY), new Vector(0, -2), undefined, begin, duration, color);
      fireworksArr.push(fountainEmitter);
    }else if(fw['@attributes'].type === 'Rocket'){
      var velX = parseInt(fw.Velocity['@attributes'].x,10)/100;
      var velY = -1 * parseInt(fw.Velocity['@attributes'].y,10)/100;
      var rocketEmitter = new RocketLauncher(new Vector(zeroX + posX, zeroY - posY), new Vector(velX, velY), begin, duration, color);
      fireworksArr.push(rocketEmitter);
    }
  }

    return fireworksArr;
}

var getRoundTime = function(json){
  var jsonArray = json.FireworkDisplay.Firework;

  var max = 0;
  for (var i = 0; i < jsonArray.length; i++){
    var fw = jsonArray[i];
    var begin = parseInt(fw['@attributes'].begin,10)/10;
    var duration = parseInt(fw['@attributes'].duration,10)/10;
    if(begin+duration > max){
      max = begin + duration;
    }
  }
  return max + 100;
}
