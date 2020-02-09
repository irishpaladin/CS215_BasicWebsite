function SignUpForm(event){//use event object

	var elements = event.currentTarget;
	resetWarning();
	event.preventDefault();
	
    //declare variable a for the email value
	var x = elements[0].value;
	var rt=true;
	var warn="";
	var str_user_inputs = "";

	//-- validate email --
	var emailRegEx = new RegExp("[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$");
	console.log("_"+x+"_");
	if (!emailRegEx.test(x))
	{
		console.log("email-if");
		var new_txt4 = document.createTextNode('Email address empty or wrong format. example: username@somewhere.sth');
		document.getElementById('warning-email').appendChild(new_txt4);
		rt=false;

	}
	else{ // if everything is okay, then collect email 
		console.log("email-else")
		document.getElementById('warning-email').innerHTML="";
	    str_user_inputs +="Email: "+x+"\n";

	}




	//-- validate Username --
	var username = elements[1].value;
	var userRegEx = new RegExp("^[A-Za-z0-9._+-]+$");
	console.log("_"+username+"_");
	//-- add code here:
	if (!userRegEx.test(username)){
	    
	    console.log("user-if");
		var new_txt4 = document.createTextNode('Please enter the correct format for Username. (No leading or trailing spaces)');
		document.getElementById('warning-uname').appendChild(new_txt4);
		rt=false;

	}
	else{ // if everything is okay, then collect email 
		console.log("user-else")
		document.getElementById('warning-uname').innerHTML="";
	    str_user_inputs +="Username: "+username+"\n";

	}







	//-- validate password --
	var password = elements[2].value;
	var passRegEx = new RegExp("^.*[\W0-9]+.*$");
	console.log("_"+password+"_");
	//-- add code
	if (!passRegEx.test(password)||password.length!=8){
	    
	    console.log("pass-if");
		var new_txt4 = document.createTextNode('Please enter the correct format for Password. (8 characters, at least one non-letter)');
		document.getElementById('warning-pass').appendChild(new_txt4);
		rt=false;

	}
	else{ // if everything is okay, then collect email 
		console.log("pass-else")
		document.getElementById('warning-pass').innerHTML="";
	    str_user_inputs +="Password: "+password+"\n";

	}



	//-- Confirm password --
	var confirmpass = elements[3].value;
	//-- add code
	var pass2RegEx = new RegExp("^.*[\W0-9]+.*$");
	console.log("_"+confirmpass+"_");
	//-- add code
	if (!pass2RegEx.test(confirmpass)||confirmpass.length!=8){
	    
	    console.log("pass2-if");
		var new_txt4 = document.createTextNode('Please enter the correct format for Confirm Password. (8 characters, at least one non-letter)');
		document.getElementById('warning-pass2').appendChild(new_txt4);
		rt=false;

	}else if(confirmpass != password){
		console.log("pass2-elseif");
		var new_txt4 = document.createTextNode('Password and Confirm Password do not match');
		document.getElementById('warning-pass2').appendChild(new_txt4);
		rt=false;
	 }
	else{ // if everything is okay, then collect email 
		console.log("pass2-else")
		document.getElementById('warning-pass2').innerHTML="";
	    str_user_inputs +="Confirm Password: "+confirmpass+"\n";

	}




	// //if (z != c)
	   
	    //prevent form to be submitted if one of above field is invalid		
	if(rt)
	{    	
		var output=str_user_inputs.split("\n")
		console.log("im here: "+str_user_inputs);
		for(var x of output){
			if(x!="")
			{
				var ptag=document.createElement('p');
				var new_txt = document.createTextNode(x);
				ptag.appendChild(new_txt);
				ptag.style.margin=0;
				document.getElementById('result').appendChild(ptag);	
			}
		}
		
	}

	
}

function resetWarning(){
	var warning = document.getElementsByClassName('err_msg');
	for(var i = 0 ; i<warning.length;i++){
		warning[i].innerHTML="";
	}
	document.getElementById('result').innerHTML="";
}

function ResetForm(event) //use event object
{
   //code to remove the contents of the textboxes
   var element = event.currentTarget;
   element[0].value="";
   element[1].value="";
   element[2].value="";
   element[3].value="";
}
