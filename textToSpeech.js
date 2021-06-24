$(document).ready(function(){
  var audio_setup= new SpeechSynthesisUtterance();
  var voices = speechSynthesis.getVoices();
  //audio_setup.voice=voices[0];
  audio_setup.volume=1;
  audio_setup.rate=1;
  audio_setup.pitch=2;
  audio_setup.lang='hi';
  $("#file").change(function(){
    var fr=new FileReader();
    fr.onload=function(){
      audio_setup.text=fr.result;
      $('textarea').val(fr.result);
    }
    fr.readAsText(this.files[0]);
  });

 $("#voices").change(function(){
   audio_setup.voice=voices[$("#voices").val()];
   
 });
 $('textarea').change(function(){
  audio_setup.text=$('textarea').val();
 });
 $('#start').click(function(){
//     $("#details").html(function(){
//       var data='';
//       try{
//       data=data+'Voice : '+audio_setup.voice.voiceURI+"<br>";
//       }
//       catch{
//         data=data+"Voice : Loadng...<br>";
//       }
//       data=data+'Volume : '+audio_setup.volume+"<br>";
//       data=data+'Rate : '+audio_setup.rate+"<br>";
//       data=data+'Pitch : '+audio_setup.pitch+"<br>";
//       data=data+'Language : '+audio_setup.lang+"<br>";
//       return data;
//     });
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
//$("#detials").html(audio_setup);
$('#volume').change(function(){
  audio_setup.volume=$('#volume').val();
  $('#volume-label').text($('#volume').val());
});
$('#pitch').change(function(){
  audio_setup.pitch=$('#pitch').val();
  $('#pitch-label').text($('#pitch').val());
});
$('#rate').change(function(){
  audio_setup.rate=$('#rate').val();
  $('#rate-label').text($('#rate').val());
});
// $("#simp").click(function(){
//   var url="https://github.com/yashshukla0918/jsspeech/blob/main/meaning.txt";
//   audio_setup.text=readText(url);
// });

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

// function readText(url)  
// {  
//      var txtFile = new XMLHttpRequest();  
//      txtFile.open("GET", url, true);  
//      txtFile.onreadystatechange = function()   
//      {  
//           if (txtFile.readyState === 4)   
//           {  
//                // Makes sure the document is ready to parse.  
//                if (txtFile.status === 200)   
//                {  
//                     // Makes sure it's found the file.  
//                     return txtFile.responseText;  
//                }  
//           }  
//      }  
//      txtFile.send(null)  
// }  
