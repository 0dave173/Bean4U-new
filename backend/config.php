<?php
// config.php

// Replace with your project values
define("SUPABASE_URL", "https://opmfwbbynlvzqwhnpqmh.supabase.co");
define("SUPABASE_ANON_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wbWZ3YmJ5bmx2enF3aG5wcW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwODY4MDYsImV4cCI6MjA3NzY2MjgwNn0.SmS4N__rEP8TvY53W0dHRpclWavYyxZF225ylqCnmB0");

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// 📡 Hilfsfunktion für Supabase REST API
function supabase_request($endpoint, $method = 'POST', $data = [], $filters = '') {
    $url = SUPABASE_URL . "/rest/v1/" . $endpoint . $filters;

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'apikey: ' . SUPABASE_API_KEY,
        'Authorization: Bearer ' . SUPABASE_API_KEY,
        'Content-Type: application/json',
        'Prefer: return=representation'
    ]);

    if (!empty($data)) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    }

    $response = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);

    if ($error) {
        return ["error" => $error];
    }

    return json_decode($response, true);
}
?>
