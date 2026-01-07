	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
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
		<section class="content role_check" role="<?php if($val_fae == 1){echo 0;}else{echo 1;}?>">
			<div class="card card-info">
				<div class="card-body text-xs">
					<div class="row post">
						<div class="col-sm-12 mb-2">
							<input type="file" class="custom-file-input" id="bin_parser" accept=".bin" multiple>
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
					if($val_fae == 1){
						echo '<div class="row" style="display: none;">';
					}
					else{
						echo '<div class="row" style="display: block;">';
					}
					?>
					<!--<div class="row">-->
						<div class="col-sm-12">
							<div class="card card-info collapsed-card button_load">
								<div class="card-header" data-card-widget="collapse">
									<h3 class="card-title">Raw Data</h3>
									<div class="card-tools">
										<button type="button" class="btn btn-tool parser_expand" title="Collapse">
											<i class="fas fa-plus"></i>
										</button>
									</div>
								</div>
							
								<div class="card-body">
									<div class="row">
										<div class="col-sm-12">
											<div id="table_bin" style="width: 100%;">
											</div>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div> <!-- row-->
					<?php
						if($val_fae == 0){
							echo $html_external;
						}
					?>
				</div> <!-- card-body-->
				<div class="card-footer">
					<div class="row">
						<div class="col-sm-8">
							<?php 
							if($val_fae == 0){
								echo '
								<ol class="breadcrumb p-0 m-0 float-sm-left">
									<select class="form-control" id="upload_select_proj">
										<option value="-1">Select Panel</option>';
										
											foreach($db_projects as $item){
												echo '<option value="'.$item->project_id.'" ticket="'.$item->project_ticket.'">'.$item->panel_name.'</option>';
											}
										
									echo '</select>
								</ol>
								<button class="float-sm-left btn btn-info ml-1" id="upload_macro_compare" style="display: none"><i class="fas fa-not-equal"></i> Compare</button>';
								
								echo '<ol class="breadcrumb p-0 m-0 float-sm-right">';
							}
							else{
								echo '<ol class="breadcrumb p-0 m-0 float-sm-left">';
							}
							
							?>
								<select class="form-control" id="show_export_sample">
									<option value="NAN">Select Export Template</option>
									<?php
										foreach($sample_files as $item){
											echo '<option value="'.$item.'">'.$item.'</option>';
										}
									?>
								</select>
							</ol>
						</div>
						
						<?php 
						if($val_fae == 1){
							echo '<div class="col-sm-4" style="display: none;">';
						}
						else{
							echo '<div class="col-sm-4" style="display: block;">';
						}
						?>
						<!--<div class="col-sm-4">-->
							<button type="submit" class="float-sm-right btn btn-info" id="upload_macro_server" disabled="disabled"><i class="fas fa-cloud-upload-alt"></i> Save to server</button>

						</div>
					</div>
				</div> <!-- card-footer-->
			</div> <!-- Card-->
			
		</section>
		<section class="content pu_compare_lastest" style="display: none;">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Show Diff compared with lastest FW Result</h3>

					<div class="card-tools">
						<button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
							<i class="fas fa-minus"></i>
						</button>
					</div>
				</div> <!-- card header-->
				<div class="card-body">				
					<div class="row mt-2"> 
						<div class="col-sm-12" id="compare_released_result">
						</div>
						<!-- show result-->
					</div>
				</div><!-- card body-->
				<!--<div class="card-footer">	
				</div>-->
			</div>		
		</section>
    <!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
  
  
<?php 
	//echo '  <script src="'.base_url().'assets/js/FileSaver.min.js"></script>'."\n";
?>