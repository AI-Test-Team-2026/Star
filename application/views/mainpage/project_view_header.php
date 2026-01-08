<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Automotive</title>

		<?php
		echo ''."\n";		
		echo '  <script type="text/javascript">'."\n";	
		echo '    window.base_url = '.json_encode(base_url())."\n";	
		echo '  </script>'."\n";	
		echo '  <link rel="icon" href="'.base_url().'assets/img/favicon.ico" type="image/ico"/>'."\n";
		
		echo '  <link rel="stylesheet" href="'.base_url().'assets/fontawesome/css/all.min.css" />'."\n";
		echo '  <link rel="stylesheet" href="'.base_url().'assets/css/adminlte.min.css" />'."\n";
		echo '  <link rel="stylesheet" href="'.base_url().'assets/select2/css/select2.css" />'."\n";
		//echo '  <link rel="stylesheet" href="'.base_url().'assets/css/icheck-bootstrap.min.css" />'."\n";
		echo '  <link rel="stylesheet" href="'.base_url().'assets/css/oem_tsram.css" />'."\n";
		echo '  <link rel="stylesheet" href="'.base_url().'assets/css/oem_main_list.css" />'."\n";
		echo '  <link rel="stylesheet" href="'.base_url().'assets/highlight/styles/a11y-dark.min.css"" />'."\n";
		echo '  <script src="'.base_url().'assets/js/jquery.min.js"></script>'."\n";
		echo '  <link rel="stylesheet" href="'.base_url().'assets/coloris/dist/coloris.min.css" />'."\n";
		echo '  <script src="'.base_url().'assets/coloris/dist/coloris.min.js"></script>'."\n";
		?>
	</head>
	<body class="hold-transition sidebar-mini">
		<!-- Site wrapper -->
		<div class="wrapper">
