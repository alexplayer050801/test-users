<?php
header('Content-Type: application/json');

// Connect to database
$db = new SQLite3('users.db');

// Retrieve users
$results = $db->query('SELECT * FROM users');
$users = array();
while ($row = $results->fetchArray()) {
	$users[] = array(
		'id' => $row['id'],
		'username' => $row['username']
	);
}

// Return JSON data
echo json_encode($users);
?>
