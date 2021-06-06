$(document).ready(function(){
  var audio_setup= new SpeechSynthesisUtterance();
  var voices = speechSynthesis.getVoices();
  audio_setup.voice=voices[10];
  audio_setup.volume=1;
  audio_setup.rate=1;
  audio_setup.pitch=2;
  audio_setup.lang='hi';
  $('#start').click(function(){
    audio_setup.text=$('textarea').val();
    speechSynthesis.speak(audio_setup);  
  });
  $('#pause').click(function (){
      speechSynthesis.pause();
  });
  $('#resume').click(function (){
    speechSynthesis.resume();
});
$('#cancel').click(function (){
    speechSynthesis.cancle();
});
});
