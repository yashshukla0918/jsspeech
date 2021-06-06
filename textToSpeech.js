$(document).ready(function(){
  var audio_setup= new SpeechSynthesisUtterance();
  var voices = speechSynthesis.getVoices();
  audio_setup.voice=voices[0];
  audio_setup.volume=1;
  audio_setup.rate=1;
  audio_setup.pitch=2;
  audio_setup.lang='hi';
 $("#voices").change(function(){
   audio_setup.voice=voices[$("#voices").val()];
 });
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
    speechSynthesis.cancel();
});
});


let voices = []; // global array of available voices

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();

  // Initially set the First Voice in the Array.
  //speech.voice = voices[0];

  // Set the Voice Select List. (Set the Index as the value, which we'll use later when the user updates the Voice using the Select Menu.)
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};