<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = trim($_POST['password'] ?? '');

    if (empty($email) || empty($password)) {
        echo "<script>alert('❌ Bitte E-Mail und Passwort eingeben.'); window.location.href='login.html';</script>";
        exit;
    }

    // Suche nach Benutzer in Supabase (E-Mail-Filter)
    $filter = '?email=eq.' . urlencode($email);
    $response = supabase_request('Users', 'GET', [], $filter);

    if (!empty($response) && isset($response[0]['password'])) {
        $user = $response[0];
        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = [
                "id" => $user['id'],
                "email" => $user['email'],
                "name" => $user['full_name'],
                "role" => $user['role']
            ];
            header("Location: index.html");
            exit;
        } else {
            echo "<script>alert('❌ Falsches Passwort.'); window.location.href='login.html';</script>";
        }
    } else {
        echo "<script>alert('❌ Benutzer nicht gefunden.'); window.location.href='login.html';</script>";
    }
}
?>
