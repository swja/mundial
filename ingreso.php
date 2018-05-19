<?php
include('conexion.php');
$nombre = utf8_decode($_POST['nombre']);
$ciudad = utf8_decode($_POST['ciudad']);
$telefono = utf8_decode($_POST['telefono']);
$email = utf8_decode($_POST['email']);
/* Consultas de selección que devuelven un conjunto de resultados */
$consulta = "INSERT INTO `vivewo5_registroswow`.`registros`(`nombre`,`ciudad`,`telefono`,`email`) 
VALUES ('".$nombre."','". $ciudad ."','". $telefono ."','". $email ."')";
//print_r($consulta);
$mysqli->query($consulta);
//printf ("Nuevo registro con el id %d.\n", $mysqli->insert_id);
$mysqli->close();
header("Location: ../mundial/gracias.html");
?>