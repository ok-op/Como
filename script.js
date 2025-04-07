let videoLinks = [];
let currentIndex = 0;

function startVideo() {
    const inputText = document.getElementById("videoLinks").value.trim();
    videoLinks = inputText.split("\n").filter(link => link.trim() !== "");

    if (videoLinks.length === 0) {
        alert("কমপক্ষে একটি ভিডিও লিংক দিন!");
        return;
    }

    currentIndex = 0;

    document.getElementById("inputSection").style.display = "none";
    document.getElementById("playerSection").style.display = "block";

    updateVideo();
}

function updateVideo() {
    const iframe = document.getElementById("videoFrame");
    iframe.src = `https://pro-ultra-hd-stream-player.woodmirror.workers.dev/?start=https://teraboxdownloaderonline.com/api/download-m3u8?terabox_link=${encodeURIComponent(videoLinks[currentIndex])}`;
}

function nextVideo() {
    if (currentIndex < videoLinks.length - 1) {
        currentIndex++;
        updateVideo();
    }
}

function prevVideo() {
    if (currentIndex > 0) {
        currentIndex--;
        updateVideo();
    }
}

function backToInput() {
    document.getElementById("playerSection").style.display = "none";
    document.getElementById("inputSection").style.display = "block";
}
