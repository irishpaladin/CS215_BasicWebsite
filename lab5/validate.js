function SignUpForm(event){//use event object

    // This example treats all 4 input fields (Email, Username, Password, Confirm Password)
	// as elements of the event currentTarget.
	var elements = event.currentTarget;
    // Pay attention to SignUp-r.js since the form id is "SignUp".
    // You can also implement individual function to validate each input field
    // by modify the online lab6 website example "DOM2 Event Registration", 
    // therefore each input field is a function. For example, checkEmail(), CheckUsername(), CheckPswd(), CheckMatchPswd()

    //declare variable a for the email value
	var x = elements[0].value;
	// add code here to 
    // declare Username,Password and confirm 
    // Password as elements in event.curretTarget
    // for example: var y = elements[1].value
     
	var warn="";
	var rt=true;
	var str_user_inputs = "";

	//-- validate email --
	if (x==null || x==""){
	    
	    warn +="Email is empty. \n";
	    rt=false;
	  
	}
	else if(x.length > 60){
	   warn += "Max length for email is 60 characters.\n"
	   rt =false;
	}

	else{ // if everything is okay, then collect email 
	   
	    str_user_inputs +="Email: "+x+"\n";

	}




	//-- validate Username --
	var username = elements[1].value;
	//-- add code here:
	if (username==null || username==""){
	    
	    warn +="Username is empty. \n";
	    rt=false;
	  
	}
	else if(username.length > 40){
	   warn += "Max length for username is 40 characters.\n"
	   rt =false;
	}

	else{ // if everything is okay, then collect email 
	   
	    str_user_inputs +="Username: "+username+"\n";

	}







	//-- validate password --
	var password = elements[2].value;
	//-- add code
	if (password==null || password==""){
	    
	    warn +="Password is empty. \n";
	    rt=false;
	  
	}
	else if(password.length != 8){
	   warn += "Length of password is 8 characters.\n"
	   rt =false;
	}

	else{ // if everything is okay, then collect email 
	   
	    str_user_inputs +="Password: "+password+"\n";

	}



	//-- Confirm password --
	var confirmpass = elements[3].value;
	//-- add code
	if (confirmpass==null || confirmpass==""){
	    
	    warn +="Confirm Password is empty. \n";
	    rt=false;
	  
	}
	else if(confirmpass == password){
	   warn += "Confirm password and password do not match.\n"
	   rt =false;
	}

	else{ // if everything is okay, then collect email 
	   
	    str_user_inputs +="Confirm Password: "+confirmpass+"\n";

	}




	//if (z != c)
	   
	    //prevent form to be submitted if one of above field is invalid		
	    if(rt == false )
		{    
		  alert(warn);
		}
	    else{
		alert("Signup successful!");
		}
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
