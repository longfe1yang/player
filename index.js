'use strict'

var player = e('#id-audio-player');
var play = e('#id-audio-play');
var pause = e('#id-audio-pause');
var cuttentTime = e('#id-audio-cuttentTime');
var allTime = e('#id-audio-allTime')
bindEvent(play, 'click', () => {
    player.play();
})
bindEvent(pause, 'click', () => {
    player.pause();
})