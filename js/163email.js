window.onload=function(){
	/*轮播图部分*/
		/*轮播图部分的js文件*/
	var changePic=document.getElementsByClassName("changePic")[0];
	var banner=document.getElementsByClassName("banner-box")[0];
	var img=document.getElementsByTagName("a");
	var dotLi=document.querySelectorAll(".banner .dot li");
	var prve=document.getElementsByClassName("prve")[0];
	var next=document.getElementsByClassName("next")[0];

	
	var indexImg=img.length;
	var index=0;
	var changeAuto=setInterval(function(){
		if(index<3){
			index++;
		}else{
			index=0;
		}
		imgChange(index);
	},3500);


	banner.addEventListener("mouseover",function(){
		clearInterval(changeAuto);
	});
	banner.addEventListener("mouseout",function(){
		changeArgin();
	});


	function changeArgin(){
		changeAuto=setInterval(function(){
			if(index<3){
				index++;
			}else{
				index=0;
			}
			imgChange(index);
		},3500);
	};

	//左箭头
	prve.addEventListener("click",function(){
		if(index>0){
			index--;
		}else{
			index=3;
		}
		imgChange(index);
	})
	next.addEventListener("click",function(){
		if(index<3){
			index++;
		}else{
			index=0;
		}
		imgChange(index);
	})

	/*图片轮播*/
	function imgChange(n){
		changePic.style.marginLeft=-n*1519+"px";

		for (var j=0;j<dotLi.length;j++){
			dotLi[j].style.backgroundColor="rgb(150,160,163)";
		};
		dotLi[n].style.backgroundColor="#fff";
	};

		/*点击下标切换图片*/
		var numLi=[];
	for(var i=0;i<dotLi.length;i++){
		numLi.push(dotLi[i]);
		dotLi[i].addEventListener("click",function(){
			var num=numLi.indexOf(this);
			imgChange(num);
		});
	};

	banner.addEventListener("mouseover",function(){
		prve.style.display="block";
		next.style.display="block";
	});
	banner.addEventListener("mouseout",function(){
		prve.style.display="none";
		next.style.display="none";
	});



/*七天免费试用点击事件部分*/
	var seven=document.getElementsByClassName("seven")[0];
	var formmid=document.getElementsByClassName("form-fix")[0];
	var xxx=document.getElementsByClassName("xxx")[0];
 	seven.addEventListener("click",function(){
 		formmid.style.display="block";
 	});
	xxx.addEventListener("click",function(){
 		formmid.style.display="none";
 	});

 /*输入框部分的*/
 	var inputs=document.querySelectorAll(".cheaper-box .put input")[0];
 	var minNum=document.getElementsByClassName("minNum")[0];
 	var maxNum=document.getElementsByClassName("maxNum")[0];
	var hiddens=document.getElementsByClassName("hiddens")[0];

	inputs.onblur=function(){
	 	if(inputs.value<6){
	 		hiddens.innerText="最少六个起";
	 	}else{
			hiddens.innerText="";
	 		minNum.innerText=inputs.value*1000;
	 		maxNum.innerText=inputs.value*1100;
	 	};
	};



	/*表单验证*/

};







