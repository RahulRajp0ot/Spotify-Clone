console.log("Welcome to my spotify");
//intilising the variable;
let songindex=0;
let audioElement=new Audio('./songs/1.mp3');
let masterplay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let mastersongname=document.getElementById("mastersongname");


let song=[
    {songName:"Salam-e-IShq",filepath: './songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName:"2 song",filepath: './songs/2.mp3',coverPath:'./covers/2.jpg'},
    {songName:"3 song",filepath: './songs/3.mp3',coverPath:'./covers/3.jpg'},
    {songName:"4 song",filepath: './songs/4.mp3',coverPath:'./covers/4.jpg'},
    {songName:"5 song",filepath: './songs/5.mp3',coverPath:'./covers/5.jpg'},
    {songName:"6 song",filepath: './songs/6.mp3',coverPath:'./covers/6.jpg'},
    {songName:"7 song",filepath: './songs/7.mp3',coverPath:'./covers/7.jpg'},
    {songName:"8 song",filepath: './songs/8.mp3',coverPath:'./covers/8.jpg'},

]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=song[i].songName;
})


// audioElement.play();

// //handle play pause
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


// //lishen to event
audioElement.addEventListener('timeupdate',()=>{
    //updating seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songindex+1}.mp3`;
        mastersongname.innerText=song[songindex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
       
        

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>6){
        songindex=0;
    }
    else{
    songindex+=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=song[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=8;
    }
    else{
    songindex-=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=song[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

