---
title: ajax fileupload
date: 2016-04-29 16:48:37
tags:
---

### ajax fileupload的使用
+ 下载jquery
+ 下载ajax fileuplad
+  页面中引入 jquery + ajaxFileuplad文件
+  页面html代码
		<form method="post"  enctype="multipart/form-data" id ="batchImportForm">
        	<input type="file" name ="file" id ="batchImportFileInput" style="display: none"/>
    	</form>	
+ js部分代码
		$.ajaxFileUpload({
			url:serverUrl, //用于文件上传的服务器端请求地址
			type:'post',
			formId:'batchImportForm',/*form的id*/
			timeout:100000,
			secureuri:false, //一般设置为false
			dataType:'json', //返回值类型 一般设置为json
			success:function(datas, status){
				cleanTipInfo() ;
				addSuccessTip("导入操作完成...") ;
			},
			error:function(xmlHttpRequest, status, error) {
				cleanTipInfo() ;
				addErrorTip("导入失败！") ;
			}
		});
