document.addEventListener('DOMContentLoaded',()=>  {GEN_USERNAME()});
	const namelist = [];
	const CLICK_GEN_BUTTON = document.getElementById('RIGHT_BUTTON');
	const CLICK_BACK_BUTTON = document.getElementById('LEFT_BUTTON');
	const CLICK_COPY_BUTTON = document.getElementById('COPY_BUTTON');
	CLICK_GEN_BUTTON.addEventListener('click',()=> {GEN_USERNAME()});
	CLICK_BACK_BUTTON.addEventListener('click',()=> {BACK_USERNAME()});
	CLICK_COPY_BUTTON.addEventListener('click',()=> {navigator.clipboard.writeText(document.getElementById('result').textContent);alert("コピーしました！");});
	function GEN_USERNAME(){
 		var str = "cilil1nqruxyz13791xq___.";
  		var len = 7;
    	var username = "";
  		for(var i=0; i<len; i++){
    		username += str.charAt(Math.floor(Math.random() * str.length));
    	}
		document.getElementById('result').textContent = username;
		namelist.push(username);
	}
	function BACK_USERNAME(){
		var a = namelist[namelist.length - 3];
		document.getElementById('result').textContent = a;
		namelist.push(a);
	}