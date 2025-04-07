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
    playCurrentVideo();
}

function playCurrentVideo() {
    let videoFrame = document.getElementById("videoFrame");
    let videoPlayer = document.getElementById("videoPlayer");

    let apiURL = `https://ok-op.github.io/Como/O-hls/?start=https://teraboxdownloaderonline.com/api/download-m3u8?terabox_link=${encodeURIComponent(videoLinks[currentIndex])}`;
    videoPlayer.src = apiURL;

    videoFrame.style.display = "block";
    setTimeout(() => { videoFrame.classList.add("active"); }, 10);
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
    let videoFrame = document.getElementById("videoFrame");
    videoFrame.classList.remove("active");
    setTimeout(() => { videoFrame.style.display = "none"; }, 300);
}

function toggleFullscreen() {
    let videoFrame = document.getElementById("videoFrame");
    videoFrame.classList.toggle("fullscreen");
}
