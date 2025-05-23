<?php
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombreCompleto = trim($_POST["nombre"]);
    $correo = trim($_POST["correo"]);
    $username = trim($_POST["username"]);
    $contrasenia = trim($_POST["password"]);

    // Separar nombre y apellido
    $partes = explode(" ", $nombreCompleto, 2);
    if (count($partes) < 2) {
        echo "<script>alert('Debe ingresar nombre y apellido'); window.location='registro.html'</script>";
        exit;
    }
    $nombre = $partes[0];
    $apellido = $partes[1];

    // Validar si ya existe el username o correo
/*    $verificar = "SELECT * FROM usuario WHERE username = '$username' OR correo = '$correo'";
    $resultado = mysqli_query($conn, $verificar);

    if (mysqli_num_rows($resultado) > 0) {
        echo "<script>alert('El correo o username ya están registrados'); window.location='registro.html'</script>";
        exit;
    }*/

    // Insertar en la base de datos
    $sql = "INSERT INTO usuario (nombre, apellido, username, correo, contrasenia) VALUES ('$nombre', '$apellido', '$username', '$correo', '$contrasenia')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Cuenta creada con éxito'); window.location='login.html'</script>";
    } else {
        echo "Error al registrar: " . mysqli_error($conn);
    }
}
?>
