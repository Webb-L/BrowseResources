# 自动浏览云班课网页版资源
支持浏览视频和其他文件。

浏览视频功能会出现有的视频没有浏览完成这是因为视频加载速度的问题。

可以通过修改index.js文件中的代码。
也可以换一个网速好一点的网路。

```javascript
function VideoBrowsing(index) {
    video[index].click();
    setTimeout(() => {
        document.querySelector("video").currentTime = 999999999;
        setTimeout(() => {
            index++;
            VideoBrowsing(index)
        }, 3000) // 修改视频时间后跳转到下一个视频的时间。
    }, 10000) // 修改这里 单位为ms
}
```

修改后再次执行代码，如果还是没有浏览成功就再次执行代码。

## 使用

1. 打开云班课资源页面
2. 按下F12点击console在下方的文本框粘贴代码。 

## 注意事项

**使用其他文件浏览一定呀关闭下载链接检测插件 如idm,会导致浏览失败。**

## 效果演示

https://www.bilibili.com/video/av625907488

## 打赏作者
![](./wx.png)

