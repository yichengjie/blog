---
title: maven相关知识点
date: 2016-04-19 11:28:57
tags:
---
+ maven中加入插件跳过test代码运行
		<build>
		    <plugins>
		      <plugin>
		        <groupId>org.apache.maven.plugins</groupId>
		        <artifactId>maven-surefire-plugin</artifactId>
		        <configuration>
		          <skip>true</skip>
		        </configuration>
		      </plugin>
		    </plugins>
		  </build>

+ maven中使用jetty plugin插件
pom.xml右键 run maven build --> Goals `jetty:run`
这时可能会报一个jetty指令的错误，需要去修改maven的主配置文件(maven安装目录conf/setting.xml)
		<pluginGroups>
			<pluginGroup>org.mortbay.jetty</pluginGroup>
			<pluginGroup>org.apache.tomcat.maven</pluginGroup>
		    <!-- pluginGroup
		     | Specifies a further group identifier to use for plugin lookup.
		    <pluginGroup>com.your.plugins</pluginGroup>
		    -->
		 </pluginGroups>