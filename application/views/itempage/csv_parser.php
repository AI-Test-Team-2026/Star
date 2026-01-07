	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1> Upload CSV file
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
			<div class="card card-info">
				<div class="card-body text-xs">
					<div class="row post">
						<div class="col-sm-3">
							<div class="form-group">
								<label for="form_project_name">Mux Num per IC</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="input_mux_num" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for="form_project_name">Master RX count</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="input_master_rx_num" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for="form_project_name">Slave RX count</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="input_slave_rx_num" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>
							</div>
						</div>
						<div class="col-sm-3">
							<div class="form-group">
								<label for="form_project_name">Max Mux ADC num</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="input_max_mux_adc_num" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>
							</div>
						</div>
						<div class="col-sm-12 mb-2">
							<input type="file" class="custom-file-input" id="csv_parser" accept=".csv" multiple>
							<label class="custom-file-label" for="csv_parser">Choose csv file</label>
						</div>
					</div>
					
					<h5>Results</h5>
					<div class="row mt-2 table_data" style="display:none;">
						<div class="col-sm-12 ">
							<div class="card card-olive collapsed-card button_load" >
								<div class="card-header" data-card-widget="collapse">
									<h3 class="card-title">Average Data</h3>
									<div class="card-tools">
										<button type="button" class="btn btn-tool" title="Collapse">
											<i class="fas fa-plus"></i>
										</button>
									</div>
								</div>
							
								<div class="card-body">
									<div class="row mb-2">
										<div class="col-sm-12">	
											<button type="submit" class="float-sm-left btn btn-info" id="average_excel">
												<i class="fas fa-eye"></i> Export to XLSX
											</button>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12 table_info">				
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div><!-- row-->
					<div class="row table_data" style="display:none;">
						<div class="col-sm-12">
							<div class="card card-olive collapsed-card button_load">
								<div class="card-header" data-card-widget="collapse">
									<h3 class="card-title">Plot Data</h3>
									<div class="card-tools">
										<button type="button" class="btn btn-tool" title="Collapse">
											<i class="fas fa-plus"></i>
										</button>
									</div>
								</div>
							
								<div class="card-body">
									<div class="row">
										<div class="col-sm-2">
											<button type="submit" class="btn btn-info" id="plot_show_data" style="width: 100%">
												<i class="fas fa-virus"></i> Select Data
											</button>
										</div>
										<div class="col-sm-2">
											<button type="submit" class="btn btn-info" id="plot_enter_data" style="width: 100%">
												<i class="fas fa-virus"></i> Plot
											</button>
										</div>
										<div class="col-sm-8" id="table_select2">
										</div>
									</div>
									<div class="row mt-4">
										<div class="col-sm-12" id="Plot_area">	
											<!--<div id="Average_chart" style="width: 100%; height: 800px""></div>-->
										</div>
									</div>
									
								</div>
							</div>
						</div>
						
					</div><!-- row-->
				</div>
			</div>
			
		</section>
		
    <!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
  
  
<?php 
	//echo '  <script src="'.base_url().'assets/js/jszip.js"></script>'."\n";
	//echo '  <script src="'.base_url().'assets/js/FileSaver.min.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/js/xlsx.full.min.js"></script>'."\n";
	
	echo '  <script src="'.base_url().'assets/js/oem_average.js"></script>'."\n";
?>