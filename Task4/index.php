<?php
error_reporting(0);
include_once('dbdb.php');
if(isset($_POST['register'])){
$name=$_REQUEST['name'];
if(empty($name)){
	$name_err = "Por favor ingrese un nombre*";
} else if(!filter_var($name, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/^[a-zA-Z\s]+$/")))){
    $name_err = "Por favor ingrese un nombre valido*";
} else {
	$order_name=$name;
}

$email=trim($_REQUEST['email']);
function email_validation($email) { 
	 return (!preg_match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^", $email)) 
        ? FALSE : TRUE; 
    }
if(empty($email)){
	$email_err = "Ingrese una identificación de correo electrónico*";
} else if(!email_validation($email)){
    $email_err = "Ingrese una identificación de correo electrónico válida*";
} else {
	$order_email=$email;
}

$phone=trim($_REQUEST['phone']);
    if(empty($phone)){
        $phone_err = "Por favor ingrese un número de teléfono*";     
    } else if(!ctype_digit($phone)){
        $phone_err = "Ingrese un número de teléfono válido*";
    } else {
        $order_phone = $phone;
    }



$mensaje=$_REQUEST['mensaje'];
if(empty($mensaje)){
	$mensaje_err = "Por favor escriba algo de mensaje*";
} else {
	$order_mensaje=$mensaje;
}



if($order_name=="" || $order_email=="" || $order_phone=="" || $order_mensaje==""){
$mensaje_err = "<font color='#FF0000'; size='4'>Hay un Problema Valida de nuevo</font>";
}else{
$sql1="INSERT INTO `minnek` SET name='$order_name',email='$order_email',phone='$order_phone',mensaje='$order_mensaje'";
$query_insert = $dbConnection->prepare( $sql1 );
$query_insert->execute();
header("Location:index.php?msg=Upload Successfully");
}



}
?>
<!DOCTYPE html> 
<html>
<head>

		<title>Form Validation Using PHP</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
		<link rel="stylesheet" href="css/demo.css">
		<link rel="stylesheet" href="css/sky-forms.css">
		<link rel="stylesheet" href="css/sky-forms-red.css">
		<style type="text/css">
			#error{
				color: #FF0000;
			}
		</style>
</head>
	<body class="bg-red">
   
		<div class="body">
		
<form class="sky-form" autcomplete="off"  name="create_user_form" action="index.php"  method="post" >
				<header style="text-align:center;">
					<h3>Tarea 4 Empleo Minnek</h3>
					<b><?php echo $mensaje_err; echo $_REQUEST['mensaje']; ?></b>
				</header>
					
				<fieldset>					
					<div class="row">
						<section class="col col-6">
							<label class="input">
								<i class="icon-append icon-user"></i>
								<input type="text" placeholder="Name" name="name" value="<?php echo $order_name; ?>">
								<b id="error"><?php echo $name_err; ?></b>
							</label>
						</section>
						<section class="col col-6">
							<label class="input">
								<i class="icon-append icon-envelope-alt"></i>
<input type="text" placeholder="E-mail" name="email" value="<?php echo $order_email; ?>">
<b id="error"><?php echo $email_err; ?></b>
							</label>
						</section>
					</div>
					
					<div class="row">
						<section class="col col-6">
							<label class="input">
								<i class="icon-append icon-phone"></i>

<input type="text" placeholder="Phone" name="phone" value="<?php echo $order_phone; ?>" >
<b id="error"><?php echo $phone_err; ?></b>
							</label>
						</section>
						
						</div>	
				</fieldset>
				<fieldset>
					<section>
						<label class="textarea">
							<i class="icon-append icon-comment"></i>
			<textarea rows="5" placeholder="Escriba Un Mensaje" name="mensaje" ><?php echo $order_mensaje; ?></textarea>
			<b id="error"><?php echo $mensaje_err; ?></b>
						</label>
					</section>					
				</fieldset>
		
                <footer>
<button type="submit" class="button" value="Create User" name="register" >Enviar petición</button>
					<a href="index.php" class="button button-secondary">Cancelar</a>
				</footer>
			</form>
			
		</div>
	</body>

</html>
