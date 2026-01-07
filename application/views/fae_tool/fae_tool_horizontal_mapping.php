	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1> 192 Horizonal Mapping -- Bin format
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
			<div class="card card-info" style="background-color: #f3f7d4;">
				<div class="card-header">
					<h3 class="card-title">Fill out a chip Row/Column</h3>
				</div>
				<div class="card-body">
					<div class="row post" style="margin-top: 10px;">
						<div class="col-md-6">
							<label for="spinner">column number</label>
							<input class="UserDEGroup" name="col_ch" value="">
						</div>
						<div class="col-md-6">
							<label for="spinner">row number</label>
							 <input class="UserDEGroup" name="row_ch" value="">
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<button class="btn btn-info" id="P2Table" style="width: 100%">Enter</button>
						</div>
						<div class="col-md-6">
							<button class="btn btn-info" id="h_rxmapping_normalized" style="width: 100%">Save as 192 Format</button>
						</div>
					</div>
					<div class="row" style="margin-top: 10px;">
						<div class="col-sm-12 h_Rxmapping_color">
							
						</div>
					</div>
				</div>
			</div>
		</section>
		
    <!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
  
<?php 
	echo '  <script src="'.base_url().'assets/js/oem_mapping_horizontal_FAE.js"></script>'."\n";
?>