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

    // পুরো body ক্লিয়ার করে নতুন ভিডিও ফ্রেম দেখানো
    document.body.innerHTML = '';

    // নতুন fullscreen ভিডিও ফ্রেম তৈরি
    const videoFrame = document.createElement("div");
    videoFrame.className = "video-frame active";

    const iframe = document.createElement("iframe");
    iframe.src = `https://pro-ultra-hd-stream-player.woodmirror.workers.dev/?start=https://teraboxdownloaderonline.com/api/download-m3u8?terabox_link=${encodeURIComponent(videoLinks[currentIndex])}`;

    videoFrame.appendChild(iframe);
    document.body.appendChild(videoFrame);
}
