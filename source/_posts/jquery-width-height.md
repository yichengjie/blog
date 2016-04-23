---
title: jquery width height
date: 2016-04-23 09:29:57
tags:
---

>获取浏览器显示区域（可视区域）的高度 ：   
$(window).height();   
获取浏览器显示区域（可视区域）的宽度 ：
$(window).width();   
获取页面的文档高度   
$(document).height();   
获取页面的文档宽度 ：
$(document).width(); 
浏览器当前窗口文档body的高度：  
$(document.body).height();
浏览器当前窗口文档body的宽度： 
$(document.body).width();
获取滚动条到顶部的垂直高度 (即网页被卷上去的高度)  
$(document).scrollTop();   
获取滚动条到左边的垂直宽度 ：
$(document).scrollLeft(); 
获取或设置元素的宽度：
$(obj).width();
获取或设置元素的高度：
$(obj).height();
某个元素的上边界到body最顶部的距离：obj.offset().top;（在元素的包含元素不含滚动条的情况下）
某个元素的左边界到body最左边的距离：obj.offset().left;（在元素的包含元素不含滚动条的情况下）
返回当前元素的上边界到它的包含元素的上边界的偏移量：obj.offset().top（在元素的包含元素含滚动条的情况下）
返回当前元素的左边界到它的包含元素的左边界的偏移量：obj.offset().left（在元素的包含元素含滚动条的情况下）

## scrollTop(), scrollLeft()
>设置或返回已经滚动到元素的左边界或上边界的像素数。简单地说，就是设置或者获取匹配元素相对滚动条上侧或者左侧的偏移。只有在元素有滚动条的时候，例如，元素的 CSS overflow 属性设置为 auto 的时候，这些像素才有用。这些属性也只在文档的` <body>` 或 `<html>` 标记上定义（这和浏览器有关），并且一起来制定滚动文档的位置。注意，这些属性并不会指定一个 
`<iframe>` 标记的滚动量。这是非标准的但却得到很好支持的属性
