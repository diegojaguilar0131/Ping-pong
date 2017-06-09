var countUp = function(countTo){
  var result = [];
  for(var i = 1; i <= countTo; i++){
      var index = result.indexOf(i);
      if(i % 15 === 0) {
        result.splice(index, 0);
        result.push("Ping-Pong‼️");
      }else if(i % 5 === 0) {
        result.splice(index, 0);
        result.push("Pong❗️");
      }else if(i % 3 === 0) {
        result.splice(index, 0);
        result.push("Ping❕");
      }else{
        result.push(i);
      }
  }
  return result;
};

$(document).ready(function(){
  $("#userInput").submit(function(event){
    $("#output").empty();
    var countTo = parseInt($("input#countTo").val());
    var output = countUp(countTo);

    output.forEach(function(item){
      $("#output").append('<li>' + item + '</li>');
    });
    event.preventDefault();

  });
});
