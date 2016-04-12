---
title: java web项目 图片资源与部署目录分离
date: 2016-04-10 18:25:48
tags:
comments: true
---

>在开发WEB项目的时候，有时候需要用户上传一些图片文件之类的，传统做法是上传到部署目录下，这样会造成一个问题，当我们要重新部署项目的时候，发布一个新的war包，就要求删除之前的项目文件夹，这时候要保留用户上传的资源文件，就要把资源文件复制出来，然后项目部署成功之后又复制进部署目录，这样做很麻烦，为了避免这个问题，就需要将资源文件夹做成一个虚拟目录。


### 示例如下
	<Host appBase="webapps" autoDeploy="true" name="localhost"
		 unpackWARs="true" xmlNamespaceAware="false" xmlValidation="false">  
		<Context docBase="weibo" path="/weibo" reloadable="true" 
				source="org.eclipse.jst.jee.server:weibo"/>  
		           <!-- 设置图片虚拟路径[访问时路径为/static_img] -->  
		<Context path="/static_img" docBase="F:\temp" reloadable="false" />  
	</Host> 