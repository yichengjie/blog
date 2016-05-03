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
			<!-- 这个是tomcat的配置
			<pluginGroup>org.apache.tomcat.maven</pluginGroup>
			-->
		    <!-- pluginGroup
		     | Specifies a further group identifier to use for plugin lookup.
		    <pluginGroup>com.your.plugins</pluginGroup>
		    -->
		 </pluginGroups>

+ maven中指定jdk版本 
		<plugin>  
	        <groupId>org.apache.maven.plugins</groupId>  
	        <artifactId>maven-compiler-plugin</artifactId>  
	        <configuration>  
	          <source>1.7</source>  
	          <target>1.7</target>  
	        </configuration>  
      	</plugin>
+ Maven3把命令行创建的web工程转成Eclipse和IntelliJ Idea的工程 
	在执行mvn eclipse:eclipse命令之前一定要先存在一个含有pom.xml文件的工程，否则
mvn eclipse:eclipse命令会报错，大致的错误提示信息就是要求有一个pom.xml文件的工程
`mvn eclipse:eclipse`  `mvn idea:idea`