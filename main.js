var num = 0;
    function Find()
	{
		num = num + 1;
		var d = document.getElementById('1'); 
		var but = document.getElementById('but');
		var a = document.getElementsByClassName("main")[0].value;
		//aleart(name);
		if (a == "评选文案")
		{
			
			d.insertAdjacentHTML('beforeend', '<br>');
			d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
			d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/WenAn.html">点击进入</a>');
			but.disabled==false;
		}
		else if (a == "AP1")
		{
			d.insertAdjacentHTML('beforeend', '<br>');
			d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
			d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/AP-1.jpg">点击进入</a>');
		}
		else if (a == "AP2")
		{
			d.insertAdjacentHTML('beforeend', '<br>');
			d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
			d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/AP-2.jpg">点击进入</a>');
		}
		else if (a == "AP3")
		{
			d.insertAdjacentHTML('beforeend', '<br>');
			d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
			d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/AP-3.jpg">点击进入</a>');
		}
		else if (a == "AP4")
		{
			d.insertAdjacentHTML('beforeend', '<br>');
			d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
			d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/AP-4.jpg">点击进入</a>');
		}
		else if (a == "AP5")
		{
			d.insertAdjacentHTML('beforeend', '<br>');
			d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
			d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/AP-5.jpg">点击进入</a>');
		}
		else if (a == "AP6")
		{
			d.insertAdjacentHTML('beforeend', '<br>');
			d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
			d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Activities/AP-6.jpg">点击进入</a>');
		}
		else if (a == "")
		{
			d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
			d.insertAdjacentHTML('beforeend', '<p>错误！内容为空！</p>');
		}
		else if (a == "Video2404")
		{
			d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出</p>')
			d.insertAdjacentHTML('beforeend', '<a href="https://gliuhe.github.io/Video2404">点击进入</a>');
		}
        else
		{
			d.insertAdjacentHTML('beforeend', '<p>第'+num+'次输出：</p>');
			d.insertAdjacentHTML('beforeend', '<p>无效的关键字</p>');
		}
	}
