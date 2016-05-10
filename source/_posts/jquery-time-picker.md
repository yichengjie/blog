---
title: "'jquery-time-picker'"
date: 2016-05-10 11:35:12
tags:
---

### jquery timepicker 在bootstrap中的模态窗口中不能正常显示，而直接写在页面中的控件没问题
> 问题(日期正常，但是时间控件在firefox中无法选择，在chrome中没有任何问题)解决方法了，就是将`<div class="modal fade" id="addWebDlg" tabindex="-1" ...>` 中的`tabindex="-1"`去掉，但还是不知道为什么会这样