(function (window) {
  var helloSpeaker = {};
  helloSpeaker.name = "Yaakov";
  var speakWord = "Hello ";
  helloSpeaker.speak = function () {
    console.log(speakWord + helloSpeaker.name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);

