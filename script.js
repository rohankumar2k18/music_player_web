let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let playPause = document.getElementById("playPause");

const initialTime = 90;



song.onloadedmetadata = function(){
    progress.max = song.duration;
    song.currentTime = initialTime;
    progress.value = song.currentTime;
}

document.addEventListener("load", function () {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
});


playPause.addEventListener("click", ()=>{
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");

    }
});

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}


progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}