

function validarEmail () {
		var formulario = eval("document.forms[0].email");
		var txt = formulario.value;
		var bemV = document.getElementById('emails').value;

		if (txt == "" || txt.indexOf("@") == -1 || txt.indexOf(".") == -1) {

		alert  ("Email inválido"); }

		else {
			alert  (" Bem vindo(a) " + bemV + " !");
		}
		

		
	}