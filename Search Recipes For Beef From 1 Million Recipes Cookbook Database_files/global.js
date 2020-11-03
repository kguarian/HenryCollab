function memberlogin()
{
	if(document.getElementById("memberemail").value == "" || document.getElementById("memberpwd").value == "")
	{
		alert ("Please enter email address and password.");
		return;
	}
	else
	{
		var email = document.getElementById("memberemail").value;
		var pwd = document.getElementById("memberpwd").value;
		xmlHttp=GetXmlHttpObject();
		if (xmlHttp==null)
		{
			alert ("Your browser does not support AJAX!");
			return;
		} 
		var url="user-login.asp";
		url=url+"?email="+email;
		url=url+"&pwd="+pwd;
		xmlHttp.onreadystatechange=memberstateChanged;
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
	}
}
function memberstateChanged()
{
	if (xmlHttp.readyState==4)
	{
		var s = xmlHttp.responseText;
		if (s.substring(0,4) == "Done" )
		{
			//alert("Successed to Login.");
			//alert(s);
			//location.reload(true);
			//window.location.reload();
			window.location = "login-bridge.asp?" + s.substring(4);
		}
		else
		{
			alert(s);
			//animatedcollapse.toggle("shoppinglist");
			return;
		}
	}
}

function userSignup()
{
	if (document.getElementById("email").value == "")
	{
			alert("Please enter email address.");
			return false;
	}
	else
	{
		if (document.getElementById("password").value == "")
		{
				alert("Please enter password.");
				return false;
		}
		else
		{
			if (document.getElementById("confirmpassword").value != document.getElementById("password").value)
			{
					alert("Confirm password does not match.");
					return false;
			}
			else
			{
				if (document.getElementById("name").value == "")
				{
						alert("Please enter display name.");
						return false;
				}
				else
				{
				    if (!document.getElementById("terms").checked) 
				    {
				        alert("Please check 'I agree to the terms of service' checkbox.");
				        return false;
				    }
				    else 
				    {
		
						xmlHttp=GetXmlHttpObject();
						if (xmlHttp==null)
						{
							alert ("Your browser does not support AJAX!");
							return false;
						} 
						var url="User-Register.aspx";
						url=url+"?Email="+document.getElementById("email").value;
						url=url+"&Password="+document.getElementById("password").value;
						url=url+"&Name="+document.getElementById("name").value;
						//alert(url);
						xmlHttp.onreadystatechange=URstateChanged;
						xmlHttp.open("GET",url,true);
						xmlHttp.send(null);

					}
				}

			}
		}
	}
}
function URstateChanged() 
{ 
	if (xmlHttp.readyState==4)
	{
		//document.getElementById("waitRB").style.display = "none";
		var s = xmlHttp.responseText;
		if(s.substring(0,4) == "Done")
		{
			//alert("Success to register.");
		    //return true;
		    location.reload(true);
		}
		else
		{
			alert(xmlHttp.responseText);
			//document.getElementById("waitSL").style.display = "none";
			return false;
		}
	}
}
function userTSignup()
{
	if (!document.getElementById("checkbox").checked)
	{
		alert("Please check 'I agree to the terms of service' checkbox.");
		return;
	}
	else
	{
		if (document.getElementById("registeremail").value == "")
		{
			alert("Please enter email address.");
			return;
		}
		else
		{
			if (document.getElementById("registerpsw").value == "")
			{
				alert("Please enter password.");
				return;
			}
			else
			{
				if (document.getElementById("confirm-psw").value != document.getElementById("registerpsw").value)
				{
					alert("Confirm password does not match.");
					return;
				}
				else
				{
					if (document.getElementById("displayname").value == "")
					{
						alert("Please enter display name.");
						return;
					}
					else
					{		
						xmlHttp=GetXmlHttpObject();
						if (xmlHttp==null)
						{
							alert ("Your browser does not support AJAX!");
							return;
						} 
						var n = "";
						if (document.getElementById("cbnewsletter").checked)
							n="Y";
						else
							n="N";
						var url="User-Register.asp";
						url=url+"?Email="+document.getElementById("registeremail").value;
						url=url+"&Password="+document.getElementById("registerpsw").value;
						url=url+"&Name="+document.getElementById("displayname").value;
						url=url+"&NewsLetter="+n;
						//alert(url);
						xmlHttp.onreadystatechange=URTstateChanged;
						xmlHttp.open("GET",url,true);
						xmlHttp.send(null);

					}
				}

			}
		}
	}
}
function URTstateChanged() 
{ 
	if (xmlHttp.readyState==4)
	{
		//document.getElementById("waitRB").style.display = "none";
		var s = xmlHttp.responseText;
		if(s.substring(0,4) == "Done")
		{
			//alert("Success to register.");
			window.location = "index.asp";
		}
		else
		{
			alert(xmlHttp.responseText);
			//document.getElementById("waitSL").style.display = "none";
			return;
		}
	}
}
function GetXmlHttpObject()
{
	var xmlHttp=null;
	try
	{	// Firefox, Opera 8.0+, Safari
		xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{  // Internet Explorer
		try
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

function isMaxLength(txtBox,intLength)
{
	if(txtBox) 
	{
 		if ( txtBox.value.length > intLength )
   	 	{

         	txtBox.value = txtBox.value.substring(0, intLength);
         	alert("Only " + intLength + " chars allowed");
    	}
    }
}