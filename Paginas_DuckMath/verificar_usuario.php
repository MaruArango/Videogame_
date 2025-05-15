<?php
include("conexion.php");

$campo = $_GET["campo"];
$valor = $_GET["valor"];

if ($campo === "username") {
    $sql = "SELECT * FROM usuario WHERE username = '$valor'";
} elseif ($campo === "correo") {
    $sql = "SELECT * FROM usuario WHERE correo = '$valor'";
} else {
    echo "error";
    exit;
}

$resultado = mysqli_query($conn, $sql);
echo (mysqli_num_rows($resultado) > 0) ? "existe" : "libre";
?>
