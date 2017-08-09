'use strict';

var player = e('#id-audio-player');
var play = e('#id-audio-play');
var pause = e('#id-audio-pause');
var currentTime = e('#id-audio-currentTime');
var allTime = e('#id-audio-allTime');

bindEvent(play, 'click', () => {
  player.play();
});

bindEvent(pause, 'click', () => {
  player.pause();
});

bindEvent(player, 'canplay', () => {
  allTime.innerHTML = '总时长:' + player.duration.toFixed(2);

  var cT = setInterval(() => {
    currentTime.innerHTML = '当前时间:' + player.currentTime.toFixed(2);
  }, 1000)
})
