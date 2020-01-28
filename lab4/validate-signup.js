
  function validateForm(){
    var x=document.forms.signup.email.value;
    var result="";
    var result_valid="The values entered in the fields are: \n";
    var result_invalid="";
    var valid = true;

    if (x==null || x==""){
      result+="Email\n";
      valid = false;
    }else if(x.length>60){
      result_invalid+="Email is no more than 60 characters long\n";
      valid = false;
    }else{
      result_valid+="Email: "+x+"\n";
    }

    x=document.forms.signup.username.value;
    if (x==null || x==""){
      result+="Username\n";
      valid = false;
    }else if(x.length>40){
      result_invalid+="Username is no more than 40 characters long\n";
      valid = false;
    }else{
      result_valid+="Username: "+x+"\n";
    }

    x=document.forms.signup.password.value;
    if (x==null || x==""){
      result+="Password\n";
      valid = false;
    }else if(x.length!=8){
      result_invalid+="Password is exactly 8 characters long\n";
      valid = false;
    }else{
      result_valid+="Password: "+x+"\n";
    }

    var y=document.forms.signup.confirmpassword.value;
    if (x==null || x==""){
      result+="Confirm Password";
      valid = false;
    }else if(x!=y){
      result_invalid+="Passwords do not matched\n";
      valid = false;
    }else{
      result_valid+="Confirm Password: "+y+"\n";
    }

    if(valid){
      alert(result_valid);
    }else{
      var str="";
      if(result!=""){
        str+="The following fields must be filled out:\n"+result;
      }
      if(result_invalid!=""){
        str+="\nInput Warnings: \n"+result_invalid;
      }
      alert(str);
    }
  }
