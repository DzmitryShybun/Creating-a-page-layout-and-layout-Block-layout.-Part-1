// получаем все элементы
var videoE1 = document.getElementsByTagName('video')[0],
    playBtn = document.getElementById('playBtn'),
    vidControls = document.getElementById('controls'),
    volumeControl = document.getElementById('volume'),
    timePicker = document.getElementById('timer');

// если браузер может воспроизводить видео удаляем класс
videoE1.addEventListener('canplaythrough', function () {
    vidControls.classList.remove('hidden');
    videoE1.volume = volumeControl.value;
    },false);
// запускам или останавливаем воспроизведение
playBtn.addEventListener('click', function () {
    if (videoE1.paused) {
       videoE1.play();
    } else {
        videoE1.pause();
    }
}, false);

videoE1.addEventListener('play', function (){
    playBtn.innerText = "Pause";
}, false);

videoE1.addEventListener('pause', function (){
    playBtn.innerText = "Play";
}, false);

volumeControl.addEventListener('input', function (){
    videoE1.volume = volumeControl.value;
}, false);

videoE1.addEventListener('ended', function (){
    videoE1.currentTime = 0;
}, false);

videoE1.addEventListener('timeupdate', function (){
    timePicker.innerHTML = secondsToTime(videoE1.currentTime);
}, false);

// расчет отображаемого времени
function secondsToTime(time){

    var h = Math.floor(time / (60 * 60)),
        dm = time % (60 * 60),
        m = Math.floor(dm / 60),
        ds = dm % 60,
        s = Math.ceil(ds);
    if(s===60){
        s = 0;
        m = m + 1;
    }
    if(s < 10) {
        s = '0' + s;
    }
    if(m === 60) {
        m = 0;
        h = h + 1;
    }
    if(m < 10){
        m = '0' + m;
    }
    if(h === 0){
        fulltime = h + ':' + m + ':' + s;
    }
    return fulltime;
}

