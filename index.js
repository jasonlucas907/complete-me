import Trie from './scripts/Trie';
import words from './scripts/words.json'


// global var

const tree = new Trie();
let suggestButtonCounter = 0;


//  functions

let audio = document.getElementById("barry");
audio.currentTime = 38;
audio.volume = .6;

function suggestDisplay() {
 let input = $('.input-field').val();
 let suggestions = tree.suggest(input);
 $('.suggestion-container').empty();

 for(let i = 0; i < 100; i++){
   if(suggestions[i] !== undefined) {
     $('.suggestion-container').append(`<ul class='suggestion-item'>${suggestions[i]}</ul>`);
   }
 }
}

function favoriteWord(event) {
 let selected = event.target.innerHTML;
 tree.select(selected);
 suggestDisplay();
}

function addSuggestBox()  {
  $('.complete').text('DONT HELP ME');
  $('.title').addClass('title-rise');
  $('.suggest-button').addClass('suggest-button-rise');
  $('.input-field').addClass('input-field-rise');
  setTimeout(() => {$('.suggestion-container').removeClass('hide'); }, 1000);
}

function removeSuggestBox() {
  $('.complete').text('HELP ME');
  $('.title').removeClass('title-rise');
  $('.suggest-button').removeClass('suggest-button-rise');
  $('.input-field').removeClass('input-field-rise');
  $('.suggestion-container').addClass('hide');
}

function rabbitHoleVideo() {
  console.log('rabbit')
  $('.video-container').remove('.robbie-video');
  $(".video-container").append(`
      <video poster="assets/nate.mp4" class='rabbit-video' id="bgvid" playsinline autoplay>
          <source src="assets/nate.mp4" type="video/webm">
          <source src="assets/nate.mp4" type="video/mp4">
      </video>
    `);
  $('.rabbit-video').delay(19000).fadeOut(1000, function(){
    $('.rabbit-video').remove();
  })
  $('.robbie-video').removeProp('muted')
}


//   event listeners

$( document ).ready(function() {
    tree.populate(words);
    $('.word-count').text('Word Pool: ' + tree.count());
});

$('.input-field').keyup(function(){
  suggestDisplay();
})

$('.suggestion-container').on('click','.suggestion-item', favoriteWord)

$('.suggest-button').on('click', function() {
    if(suggestButtonCounter === 0) {
    suggestButtonCounter = 1;
    addSuggestBox();
    // rabbitHoleVideo();
  }
  else if(suggestButtonCounter === 1) {
    suggestButtonCounter = 0;
    removeSuggestBox();
  }
})
