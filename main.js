var num = 0; 
function Find()
{
	num = num + 1;
	var d = document.getElementById('1'); 
	var but = document.getElementById('but');
	var a = document.getElementsByClassName('main')[0].value;
	//aleart(name);
	if (a == "评选文案")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/WenAn.html" style="color: green;">点击此处进入旅游征文文案，点击文档图标以下载文档</a>');
		d.insertAdjacentHTML('beforeend', '<br><a href="https://gliuhe.github.io/Activities/《春游照片评比》文案.docx" font-size: 12px;" download:"https://gliuhe.github.io/Activities/《春游照片评比》文案.docx"><img border="0" src="https://gliuhe.github.io/Activities/word-ico.png" alt="Download .docx file"></a>');
	}
	else if (a == "AP1")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/AP-1.jpg" style="color: green;">点击进入（旅游征文图片1）</a>');
	}
	else if (a == "星期二" || a== "Tuesday")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Tuesday" style="color: green;">点击进入（特殊文件查询）</a>');
	}
	else if (a == "我想你")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Tuesday/fs.html" style="color: green;">:P</a>');
	}
	else if (a == "我喜欢你" || a== "I like you forever")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<p>检索失败【【【【【【】】】】】】】】】】【【【【【【【</p>');
	}
	else if (a == "谢谢你" || a== "谢谢")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<h4 style="color: yellow">谢谢的英文是：Thanks / Thank you');
	}
	else if (a == "Liuhe" || a== "鹨鹖"||a=="姚子熙"||a=="LiuH")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<p style="color:red">？？</p>');
	}
	else if (a == "没角色" || a== "星琪儿" ||a=="对不起"||a=="1"||a=="杨婉婷")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<h4 style="color:red">Error: 未检索到内容。</h4>');
	}
	else if (a == "AP2")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/AP-2.jpg" style="color: green;">点击进入（旅游征文图片2）</a>');
	}
	else if (a == "AP3")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/AP-3.jpg" style="color: green;">点击进入（旅游征文图片3）</a>');
	}
	else if (a == "AP4")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/AP-4.jpg" style="color: green;">点击进入（旅游征文图片4）</a>');
	}
	else if (a == "AP5")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/AP-5.jpg" style="color: green;">点击进入（旅游征文图片5）</a>');
	}
	else if (a == "AP6")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/AP-6.jpg" style="color: green;">点击进入（旅游征文图片6）</a>');
	}
	else if (a == "")
	{
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<p style="color: red;">请输入搜索内容！</p>');
	}
	else if (a == "Video2404")
	{
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出</p>')
		d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Video2404" style="color: green;">点击进入（202404Video）</a>');
	}
	else if (a == "文综")
	{
		d.insertAdjacentHTML('beforeend', '<br>');
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/help.html" style="color: green;">点击跳转</a>');
	}
	else
	{
		d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
		d.insertAdjacentHTML('beforeend', '<p style="color: red;">未知错误</p>');
	}
}
