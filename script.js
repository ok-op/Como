let videoLinks = [];
let currentIndex = 0;

function startVideo() {
    let inputText = document.getElementById("videoLinks").value.trim();
    videoLinks = inputText.split("\n").filter(link => link.trim() !== "");

    if (videoLinks.length === 0) {
        alert("Please paste at least one valid link!");
        return;
    }

    currentIndex = 0;

    // Hide main container and show video
    document.querySelector(".container").style.display = "none";
    document.querySelector(".how-to-use").style.display = "none";

    playCurrentVideo();
}

function playCurrentVideo() {
    let videoFrame = document.getElementById("videoFrame");
    let videoPlayer = document.getElementById("videoPlayer");

    let apiURL = `https://pro-ultra-hd-stream-player.woodmirror.workers.dev/?start=https://teraboxdownloaderonline.com/api/download-m3u8?terabox_link=${encodeURIComponent(videoLinks[currentIndex])}`;
    videoPlayer.src = apiURL;

    videoFrame.style.display = "flex";
    setTimeout(() => {
        videoFrame.classList.add("active");
    }, 10);
}

function nextVideo() {
    if (currentIndex < videoLinks.length - 1) {
        currentIndex++;
        playCurrentVideo();
    }
}

function prevVideo() {
    if (currentIndex > 0) {
        currentIndex--;
        playCurrentVideo();
    }
}

function goBack() {
    document.getElementById("videoFrame").classList.remove("active");
    setTimeout(() => {
        document.getElementById("videoFrame").style.display = "none";
        document.getElementById("videoPlayer").src = "";

        // Show main container again
        document.querySelector(".container").style.display = "block";
        document.querySelector(".how-to-use").style.display = "block";
    }, 300);
}
