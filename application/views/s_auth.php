<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="en">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Automotive Login</title>
	<?php
		echo ''."\n";		
		echo '  <script type="text/javascript">'."\n";	
		echo '    window.base_url = '.json_encode(base_url())."\n";	
		echo '  </script>'."\n";	
		echo '  <link rel="icon" href="'.base_url().'assets/img/favicon.ico" type="image/ico"/>'."\n";
		
		echo '  <link rel="stylesheet" href="'.base_url().'assets/fontawesome/css/all.min.css" />'."\n";
		echo '  <link rel="stylesheet" href="'.base_url().'assets/css/adminlte.min.css" />'."\n";

	?>
	</head>
	<body class="login-page">
		<div class="login-box">
			<div class="login-logo">
				<?php
					echo '<a href="'.base_url().'Automotive/login" class="nav-link">Automotive Bin Parser</a>';
				?>
			</div>

			<div class="card">
				<div class="card-body login-card-body">
					<p class="login-box-msg">Sign in to start your session</p>
						<div class="input-group mb-3">
							<input name="userid" class="form-control" placeholder="User ID">
							<div class="input-group-append">
								<div class="input-group-text">
									<span class="fas fa-user"></span>
								</div>
							</div>
						</div>
						<div class="input-group mb-3">
							<input type="password" name="teleext" class="form-control" placeholder="Tele Ext.">
							<div class="input-group-append">
								<div class="input-group-text">
									<span class="fas fa-lock"></span>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-8">
								<div class="icheck-primary">
									<input type="checkbox" id="remember">
									<label for="remember">
										Guest Mode
									</label>
								</div>
							</div>

							<div class="col-4">
								<button class="btn btn-primary btn-block" id="auth_sign_in">Sign In</button>
							</div>

						</div>
				</div>
			</div>
		</div>
		<?php
			echo '  <script src="'.base_url().'assets/js/jquery.min.js"></script>'."\n";
			echo '  <script src="'.base_url().'assets/js/bootstrap.bundle.min.js"></script>'."\n";
			echo '  <script src="'.base_url().'assets/js/adminlte.min.js"></script>'."\n";
			echo '  <script src="'.base_url().'assets/js/demo.js"></script>'."\n";
			echo '  <script src="'.base_url().'assets/fontawesome/js/all.min.js"></script>'."\n";
			
			echo '  <script src="'.base_url().'assets/js/s_oem_auth.js"></script>'."\n";		
		?>
	</body>
</html>
