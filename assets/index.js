import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const buttonPlay = document.getElementById('button-play');
const buttonMute = document.getElementById('button-mute');

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
