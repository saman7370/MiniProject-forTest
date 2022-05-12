const videoPlayer = document.querySelector('#videoPlayer');
const myVideo = document.querySelector('#myVideo');


function stopPlayer(){
    videoPlayer.style.display = 'none'}



function playVideo(link){

    myVideo.src = link;

    videoPlayer.style.display = 'block';

}

