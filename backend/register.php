<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');
    $name = trim($_POST['full_name'] ?? '');

    if (empty($email) || empty($password)) {
        echo "<script>alert('❌ Bitte E-Mail und Passwort eingeben.'); window.location.href='register.html';</script>";
        exit;
    }

    // Passwort hashen, niemals Klartext speichern!
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $data = [
        "email" => $email,
        "password" => $hashedPassword,
        "full_name" => $name,
        "role" => "User"
    ];

        $response = supabase_request('"Users"', 'POST', $data);


    if (isset($response[0]['id'])) {
        echo "<script>alert('✅ Registrierung erfolgreich! Du kannst dich jetzt einloggen.'); window.location.href='login.html';</script>";
    } else {
        echo "<script>alert('❌ Registrierung fehlgeschlagen. Vielleicht ist die E-Mail schon vergeben.'); window.location.href='register.html';</script>";
    }
}
?>
