<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST"){

	$mail = $_POST["email"];
	$contenido = $_POST["message"];

	$to  = 'cruzjurado@gmail.com';
	$subject = "Sent by $name ";
	$subject .= " from WebCruz Page";
	$message = "Hi!, $name";
	$message .= " has send this message to you: $contenido";
	$message .= ".";

	$headers = "From: $mail";

	mail($to, $subject, $message, $headers);
}
?>