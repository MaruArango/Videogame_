<?php
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $input = trim($_POST["username"]); 
    $contrasenia = trim($_POST["password"]);

    $input = mysqli_real_escape_string($conn, $input);
    $contrasenia = mysqli_real_escape_string($conn, $contrasenia);

    
    $consulta = "SELECT * FROM usuario 
                 WHERE (username = '$input' OR correo = '$input') 
                 AND contrasenia = '$contrasenia'";

    $resultado = mysqli_query($conn, $consulta);

    if (mysqli_num_rows($resultado) === 1) {
        $fila = mysqli_fetch_assoc($resultado);
        $nombreUsuario = $fila['username'];
        echo "<script>alert('Bienvenido $nombreUsuario'); window.location='mapa.html'</script>";
    } else {
        echo "<script>alert('Usuario o contraseña incorrectos'); window.location='login.html'</script>";
    }
}
?>
