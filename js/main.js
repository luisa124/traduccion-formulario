function translate (){
	var title =document.getElementById("form-signin-heading");
	var email =document.getElementById("inputEmail");
	var password =document.getElementById("inputPassword");
	var remember =document.getElementsByTagName("span")[0];
	var button =document.getElementsByClassName("btn")[0];

	title.innerHTML="Por favor inicia sesión";
	email.placeholder="Correo Electrónico";
	password.placeholder="Contraseña";
	remember.innerHTML="Recordar Datos";
	button.innerHTML="Iniciar sesión";
	
}
translate ();

function show (){
	var email =document.getElementById("inputEmail").value;
	var password =document.getElementById("inputPassword").value;
	var res=document.getElementById("mos");
	res.innerHTML+= "<center><div><h1>DATOS DE FORMULARIO</h1><br><p>El correo Electrónico ingresado es: </p><br><p>"+email+"</p></div><br><p>La Clave ingresada es :</p><br><p>"+password+"</p></center>";
}

