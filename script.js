console.log("Welcome to Spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/On_My_Way.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "On_My_Way", filePath:"songs/On_My_Way.mp3", CoverPath:"covers/1.jpeg"},
    {songName: "Apne Bane Le", filePath:"songs/1.mp3", CoverPath:"covers/1.jpeg"},
    {songName: "Joohme_Jo_Pathan", filePath:"songs/2.mp3", CoverPath:"covers/2.jpeg"},
    {songName: "Rahmatullil Alamin", filePath:"songs/4.mp3", CoverPath:"covers/3.jpeg"},
    {songName: "Kaho ho na Kaho", filePath:"songs/5.mp3", CoverPath:"covers/4.jpeg"},
    {songName: "Main hoon Na", filePath:"songs/6.mp3", CoverPath:"covers/5.jpeg"},
    {songName: "Calm_Down", filePath:"songs/9.mp3", CoverPath:"covers/6.jpeg"},
    {songName: "Pubg_On my way", filePath:"songs/12.mp3", CoverPath:"covers/7.jpeg"},
    {songName: "Calm_Down bgm", filePath:"songs/13.mp3", CoverPath:"covers/8.jpeg"},
    {songName: "baily baily", filePath:"songs/14.mp3", CoverPath:"covers/9.jpeg"},
    {songName: "Baily_Baily", filePath:"songs/14.mp3", CoverPath:"covers/10.jpeg"},

]

songItem.forEach((element, i )=>{
    //console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].CoverPath;
    element.getElementsByClassName("songName")[0].innertText = songs[i].songName;



})

//audioElement.play();

//Handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-regular fa-circle-play');
        masterplay.classList.add('fa-regular fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-regular fa-circle-play');
        gif.style.opacity = 0;


    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');

    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    console.log(progress);
    //myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementByIdClassName('songItemplay')).forEach((element)=>{
    element.target.classList.remove('fa-regular fa-circle-pause');
    element.classList.add('fa-regular fa-circle-pause');

})
}

Array.from(document.getElementByIdClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeAllPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-regular fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = 'songs/$(songIndex+1).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove = ('fa-regular fa-circle-play');
    masterplay.classList.add    = ('fa-regular fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = 'songs/$(songIndex+1).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove = ('fa-regular fa-circle-play');
    masterplay.classList.add    = ('fa-regular fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = 'songs/$(songIndex+1).mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove = ('fa-regular fa-circle-play');
    masterplay.classList.add    = ('fa-regular fa-circle-pause');
})