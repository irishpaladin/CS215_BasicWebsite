function ValidateEmail(event){
	var email = event.currentTarget;
	WarningRemove(email);

	//RegEx
	var emailRegEx = /^[A-Za-z0-9._-]+@[A-Za-z]+\.[A-Za-z]{2,3}$/;

	// Validations
	if (email.value.length == 0){
		var warning_text = document.createTextNode('This field should not be empty');
		email.nextElementSibling.appendChild(warning_text);
		email.classList.add("has-error");
		return;
	}
	if (!emailRegEx.test(email.value)){
		console.log("email-if");
		var warning_text = document.createTextNode('Please enter email in this format: username@somewhere.sth');
		email.nextElementSibling.appendChild(warning_text);
		email.classList.add("has-error");
	}
}

function ValidatePassword(event){
	var password = event.currentTarget;
	WarningRemove(password);
	
	// RegEx
	var passwordRegEx = /^.*[ ]+.*$/;
	var error="";

	// Validations
	var error = "";

	// If input is empty
	if (password.value.length == 0){
		var warning_text = document.createTextNode('This field should not be empty');
		password.nextElementSibling.appendChild(warning_text);
		password.classList.add("has-error");
		return;
	}

	// Other validations
	if (passwordRegEx.test(password.value)){
		error+='Password should have no spaces.<br/>';
	}
	if (password.value.length<7){
		error+='Password should be at least 7 characters long.<br/>';
	}
	if(password.id == "password-signup"){
		var passwordRegEx2 = /^[a-zA-Z]+$/; 
		if(passwordRegEx2.test(password.value)){
			error+="Password should contain at least one non letter character.";
		}
	}

	// Adds error message if there is
	AddErrorMessage(password,error);
}

function ConfirmPassword(event){
	var password = document.getElementById("password-signup").value;
	var password2 = event.currentTarget;
	WarningRemove(password2);

	if (password2.value.length == 0){
		var warning_text = document.createTextNode('This field should not be empty');
		password2.nextElementSibling.appendChild(warning_text);
		password2.classList.add("has-error");
		return;
	}
	if(password!=password2.value){
		var warning_text = document.createTextNode('Password does not match.');
		password2.nextElementSibling.appendChild(warning_text);
		password2.classList.add("has-error");
	}
}

function ValidateUsername(event){
	var username = event.currentTarget;
	WarningRemove(username);

	// Regex
	var usernameRegEx1=/^.*[ ].*$/;
	var usernameRegEx2=/^.*[\W].*$/;

	//Validations
	var error="";

	// Checks if input is empty
	if (username.value.length == 0){
		var warning_text = document.createTextNode('This field should not be empty');
		username.nextElementSibling.appendChild(warning_text);
		username.classList.add("has-error");
		return;
	}

	// Other Validations
	if (usernameRegEx1.test(username.value)){
		error+="Username should contain no spaces.<br/>";
	}
	if (usernameRegEx2.test(username.value)){
		error+="Username should contain only alphanumeric and \'_\' characters.";
	}

	// Adds error message if there is
	AddErrorMessage(username,error);
}

// Modifies the error message field of any form
// adds class to the element if there's error
function AddErrorMessage(element, message){
	if(message!=""){
		element.nextElementSibling.innerHTML=message;
		element.classList.add("has-error");
	}
}

// Removes the Warning message in the fields
// Should be called every event listener
function WarningRemove(element){
	element.classList.remove("has-error");
	element.nextElementSibling.innerHTML="";
}

// Event handler for submit in signup and signin
function ValidateSubmit(event){
	console.log("here");
	var parent = event.currentTarget.parentElement.parentElement;
	var inputs = parent.getElementsByTagName("input");

	for(var i =0; i<inputs.length;i++){
		if(inputs[i].value==""){
			AddErrorMessage(inputs[i], "This field should not be empty");
		}
	}
	var hasError = parent.getElementsByClassName("has-error").length;

	console.log(hasError);
	// If all fields are valid
	if(hasError==0){
		window.location.href = 'room-booking-management.html';
	}
}