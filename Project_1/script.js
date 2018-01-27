
function resume(){
	if(document.getElementById('resume').style.display=='block'){
		document.getElementById('contact').style.display='none'
		document.getElementById('resume').style.display='none'	
	}else{
		document.getElementById('contact').style.display='none'
		document.getElementById('resume').style.display='block'	
	}	
}

function contact(){
	if(document.getElementById('contact').style.display=='block'){
		document.getElementById('resume').style.display='none'
		document.getElementById('contact').style.display='none'
	}else{
		document.getElementById('resume').style.display='none'
		document.getElementById('contact').style.display='block'	
	}
	
}

function validateForm(){
	var a = document.forms['form']['name'].value;
	var b = document.forms['form']['email'].value;
	var c = document.forms['form']['number'].value;
	var d = document.forms['form']['comment'].value;
	var atpos = b.indexOf("@");
  var dotpos = b.lastIndexOf(".");
    
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=b.length) {
        alert("Not a valid e-mail address");
        return false;
	}else if(c==''||isNaN(c)||c.length!=10){
		alert("Please Enter Correct Mobile Number");
	}else if (a==''||d==''){	
		alert("Please Fill All Entries! :(");
		return false;
	}else{
		alert("Your Form Has Been Successfully Submitted");
	}
}