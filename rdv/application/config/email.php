<?php defined('BASEPATH') or exit('No direct script access allowed');

// Add custom values by settings them to the $config array.
// Example: $config['smtp_host'] = 'smtp.gmail.com';
// @link https://codeigniter.com/user_guide/libraries/email.html

$config['useragent'] = 'Easy!Appointments';
$config['protocol'] = 'smtp'; // or 'smtp'
$config['mailtype'] = 'html'; // or 'text'
// $config['smtp_debug'] = '0'; // or '1'
// $config['smtp_auth'] = TRUE; //or FALSE for anonymous relay.
$config['smtp_host'] = $_ENV["BREVO_HOST"];
$config['smtp_user'] = $_ENV["BREVO_USERNAME"];
$config['smtp_pass'] = $_ENV["BREVO_PASSWORD"];
// $config['smtp_crypto'] = 'ssl'; // or 'tls'
$config['smtp_port'] = $_ENV["BREVO_PORT"];
$config['from_name'] = 'Hair-Style';
$config['from_address'] = $_ENV["BREVO_ADDRESS"];
// $config['reply_to'] = '';
$config['crlf'] = "\r\n";
$config['newline'] = "\r\n";
