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

