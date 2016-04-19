window.onload=function(){
	var oBtn=document.getElementById('button');
	var aText=document.getElementsByTagName('input');
	var aP=document.getElementsByTagName('p');
	for(var i=0;i<aText.length;i++){
		aText[i].index=i;
		aText[i].onfocus=function(){
			aP[this.index].innerHTML='必填';
			aP[this.index].style.color='blue';
		};
	}
	testInp(aText[0],aP[0]);
	testInp(aText[1],aP[1]);
	testPas(aText[2],aP[2]);
	testEmail(aText[3],aP[3]);
	testTel(aText[4],aP[4]);
	oBtn.onclick=function(){
		var num_3=0;
		for(var i=0;i<aP.length;i++){
			if (aP[i].style.color=='green') {
				num_3+=1;
			}
		}
		if(num_3==5){
			alert('提交成功');
		}else{
			alert('提交失败');
		}
	};
};
function testInp(a,b){
	a.onblur=function(){
		var str=a.value;
		var num2=getNum(str);
		 if(num2>=4&&num2<=16){
	    	b.innerHTML='格式正确';
			b.style.color='green';
			a.style.border='1px solid green';
	    }else if(num2==0){
	    	b.innerHTML='输入不能为空';
			b.style.color='red';
			a.style.border='1px solid red';
	    }
	    else{
	    	b.innerHTML='长度必须为4^16位';
			b.style.color='red';
			a.style.border='1px solid red';
	    }
	};
}
function testPas(a,b){
	var oText1=document.getElementsByTagName('input')[1];
	a.onblur=function(){
		str1=oText1.value;
		str2=a.value
		if (str1==str2) {
			b.innerHTML='确认成功';
			b.style.color='green';
			a.style.border='1px solid green';
		}else{
			a.value='';
			b.innerHTML='密码确认失败，请重新输入';
			b.style.color='red';
			a.style.border='1px solid red';
		}
	}
}
function testEmail(a,b) {
	a.onblur=function(){
		var re=/^\w+\@[0-9a-zA-Z]+\.[a-z]{2,4}$/g;
		if(re.test(a.value)){
			b.innerHTML='格式正确';
			b.style.color='green';
			a.style.border='1px solid green';
		}else{
			b.innerHTML='请输入正确的邮箱格式';
			b.style.color='red';
			a.style.border='1px solid red';
		}
	};
}
function testTel(a,b){
	a.onblur=function(){
		var re=/^[1-9][0-9]{1,15}$/g;
		if(re.test(a.value)){
			b.innerHTML='格式正确';
			b.style.color='green';
			a.style.border='1px solid green';
		}else{
			b.innerHTML='请输入正确的号码格式';
			b.style.color='red';
			a.style.border='1px solid red';
		}
	};
}
function getNum(a){
	var num=0;
	for(var i=0;i<a.length;i++){
		if(a.charCodeAt(i)<=128){
				num+=1;
			}else{
				num+=2;
			}
	}
	return num;
}

