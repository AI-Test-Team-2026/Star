	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>
							Add/Remove Users
						</h1>
					</div>
					<!--
					<div class="col-sm-6">
						<ol class="breadcrumb float-sm-right">
							<li class="breadcrumb-item"><a href="#">Home</a></li>
							<li class="breadcrumb-item active">Project Detail</li>
						</ol>
					</div>-->
				</div>
			</div><!-- /.container-fluid -->
		</section>

    <!-- Main content -->
		<section class="content">
			<div class="row">
				<div class="col-sm-6">
					<div class="card card-info">
						<div class="card-header">
							<h3 class="card-title">Add users</h3>
						</div>
						  <!-- /.card-header -->
						  <!-- form start -->
						  <form role="form">
							<div class="card-body">
								
								<div class="form-group">
									<label for="form_users_id">工號</label>
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text">
												<i class="fas fa-user-astronaut"></i>
											</span>
										</div>
										<input type="text" class="form-control" id="form_users_id" autocomplete="off">
										
									</div>
								</div>
								<div class="form-group">
									<label for="form_users_tele">Tele. Ext.</label>
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text">
												<i class="fas fa-phone"></i>
											</span>
										</div>
										<input type="text" class="form-control" id="form_users_tele"  autocomplete="off">
										
									</div>
								</div>
								<div class="form-group">
									<label for="form_users_name">Nick Name</label>
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text">
												<i class="fas fa-monument"></i>
											</span>
										</div>
										<input type="text" class="form-control" id="form_users_name" autocomplete="off">
										
									</div>
								</div>

							</div>
							<!-- /.card-body -->

							<div class="card-footer">
								<button type="button" class="btn btn-info" id="add_users_page">Add</button>
								
							</div>
						  </form>
						</div>
					</div>
					<div class="col-sm-6">
					<div class="card card-warning">
						<div class="card-header">
							<h3 class="card-title">Remove users</h3>
						</div>
						  <!-- /.card-header -->
						  <!-- form start -->
						  <form role="form">
							<div class="card-body">
								
								<div class="form-group">
									<label for="form_users_id_remove">工號</label>
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text">
												<i class="fas fa-user-astronaut"></i>
											</span>
										</div>
										<input type="text" class="form-control" id="form_users_id_remove" autocomplete="off">
										
									</div>
								</div>
								
							</div>
							<!-- /.card-body -->

							<div class="card-footer">
								
								<button type="button" class="btn btn-warning " id="remove_users_page">Remove</button>
							</div>
						  </form>
						</div>
					</div>
				</div>
		</section>
		
    <!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
	<?php 

	echo '  <script src="'.base_url().'assets/js/oem_users.js"></script>'."\n";

	?>