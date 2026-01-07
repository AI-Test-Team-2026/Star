	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper pa5495_oem_wrapper">
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1> Upload Binary
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
		<section class="content role_check" role="1">
			<div class="card card-info">
				<div class="card-body text-xs">
					<div class="row post">
						<div class="col-sm-12 mb-2">
							<input type="file" class="custom-file-input" id="bin_parser" accept=".bin">
							<label class="custom-file-label" for="bin_parser">Choose file</label>
						</div>
						
					</div>
					<h5>
					<b id="upload_bin_file_name" style="background-color: #E3EB98;"></b> Results
					</h5>
					
					<!--**********************************-->
					
					<!--**********************************-->
					
					<?php 
						echo $html_content; // Create Information Table
					?>
					
					<?php
					if($level > 0){
						echo '<div class="row">';
					}
					else{
						echo '<div class="row" style="display: none;">';
					}
						echo '	<div class="col-sm-12">';
						echo '		<div class="card card-info collapsed-card button_load">';
						echo '			<div class="card-header" data-card-widget="collapse">';
						echo '				<h3 class="card-title">Raw Data</h3>';
						echo '				<div class="card-tools">';
						echo '					<button type="button" class="btn btn-tool parser_expand" title="Collapse">';
						echo '						<i class="fas fa-plus"></i>';
						echo '					</button>';
						echo '				</div>';
						echo '			</div>';
								
						echo '			<div class="card-body">';
						echo '				<div class="row">';
						echo '					<div class="col-sm-12">';
						echo '						<div id="table_bin" style="width: 100%;">';
						echo '						</div>';
						echo '					</div>';
						echo '				</div>';

						echo '			</div>';
						echo '		</div>';
						echo '	</div>';
					echo '</div> <!-- row-->';
					
					?>
				</div> <!-- card-body-->
				<div class="card-footer">
					<div class="row">
						<div class="col-sm-2">
							<select class="form-control" id="show_export_sample">
								<option value="NAN">Select Export Template</option>
								<?php
									foreach($sample_files as $item){
										echo '<option value="'.$item.'">'.$item.'</option>';
									}
								?>
							</select>
						</div>
					</div>
				</div> <!-- card-footer-->
			</div> <!-- Card-->
			
		</section>

    <!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
  
  
<?php 
	//echo '  <script src="'.base_url().'assets/js/FileSaver.min.js"></script>'."\n";
?>