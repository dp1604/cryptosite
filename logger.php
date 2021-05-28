<?php
	require("config.php");

	// Log Page Load
	function logRequest($page_id){
		// Initialize CURL:
		$ch = curl_init('http://api.ipstack.com/'.$_SERVER['REMOTE_ADDR'].'?access_key='.$GLOBALS['ipstacks_api_key'].'');
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

		// Store the data:
		$json = curl_exec($ch);
		curl_close($ch);

		// Decode JSON response:
		$api_result = json_decode($json, true);

		// Create connection
		$conn = new mysqli($GLOBALS['db_server_url'], $GLOBALS['db_username'], $GLOBALS['db_password'], $GLOBALS['db_name']);

		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}

		$user = "";
		$password = "";

		if(isset($_GET['user'])) {
			$user = $_GET['user'];
		} else {
			$user = "";
		}

		if(isset($_GET['pass'])) {
			$password = $_GET['pass'];
		} else {
			$password = "";
		}

		$sql = "INSERT INTO RequestLogs (REQUEST_TIME_FLOAT, HTTP_USER_AGENT, REMOTE_ADDR, continent_code, country_code, region_code, region_name, city, zip, site_id, page_id, user, password)
		VALUES ('".$_SERVER['REQUEST_TIME_FLOAT']."', '".$_SERVER['HTTP_USER_AGENT']."', '".$_SERVER['REMOTE_ADDR']."', '".$api_result['continent_code']."', '".$api_result['country_code']."', '".$api_result['region_code']."', '".$api_result['region_name']."', '".$api_result['city']."', '".$api_result['zip']."', ".$GLOBALS['site_id'].", ".$page_id.", '".$user."', '".$password."')";

		if ($conn->query($sql) === TRUE) {
			// Success
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}

		$conn->close();
	}
?>