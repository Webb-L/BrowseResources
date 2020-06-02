// 浏览视频以外的文件
let file = [];
document.querySelectorAll("[data-is-drag='N']").forEach(value => {
    let ele = value.parentElement.parentElement.parentElement;
    let mime = ele.getAttribute("data-mime");
    if(mime!=="video") {
        let iframe = document.createElement("iframe");
        iframe.src = ele.getAttribute("data-href");
        document.body.appendChild(iframe);
    }
})
location.reload();

// 浏览视频
let video = [];
document.querySelectorAll("[data-is-drag='N']").forEach(value => {
    let ele = value.parentElement.parentElement.parentElement;
    let mime = ele.getAttribute("data-mime");
    if (mime === "video")
        video.push(ele);

})

let index = 0;

function VideoBrowsing(index) {
    video[index].click();
    setTimeout(() => {
        document.querySelector("video").currentTime = 999999999;
        setTimeout(() => {
            index++;
            VideoBrowsing(index)
        }, 3000)
    }, 15000)
}

VideoBrowsing(index);
