	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1> Paste DD init code (make sure there is no comment out dd reg)
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
						<div class="col-sm-12 mb-2">
							<textarea class="" id="dd_initial" style="width: 100%; height: 100px;"></textarea>
						</div>
						<div class="col-sm-6">
							<button type="submit" class="btn btn-info" id="dd_init_enter" style="width: 100%">
								<i class="fas fa-virus"></i> Enter
							</button>
						</div>
						<div class="col-sm-6">
							<button type="submit" class="btn btn-info" id="dd_init_clear" style="width: 100%">
								<i class="fas fa-disease"></i> Clear
							</button>						
						</div>
					</div>
					<div class="row dd_checker_result">
						<div class="col-sm-12">
							<div class="card card-warning collapsed-card">
								<div class="card-header" data-card-widget="collapse">
									<h3 class="card-title">Dd reg checker</h3>
									<div class="card-tools">
										<button type="button" class="btn btn-tool" title="Collapse">
											<i class="fas fa-plus"></i>
										</button>
									</div>
								</div>
							
								<div class="card-body">
									<div class="row">
										<div class="col-sm-12">
											<table class="table table-bordered dd_checker_table">
												
											</table>
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div> <!-- row-->
					<div class="row">
						<div class="col-sm-12">
							<div class="card card-olive collapsed-card">
								<div class="card-header" data-card-widget="collapse">
									<h3 class="card-title">Formula v6</h3>
									<div class="card-tools">
										<button type="button" class="btn btn-tool" title="Collapse">
											<i class="fas fa-plus"></i>
										</button>
									</div>
								</div>
							
								<div class="card-body">
									<div class="row">
										<div class="col-sm-12">
											<?php 
												echo ' <img  style="width: 70%;" src="'.base_url().'assets/img/DD_osc_formula.png" ></img>'."\n";
											?>	
										</div>
									</div>
									
								</div>
							</div>
						</div>
					</div> <!-- row-->
					<h5>Results: 
						<span id="dd_osc_ic_type" style="background-color: #f3f7d4;"></span>
					</h5>
					<?php 
						echo $dd_osc_table;
					?>
					<div class="row mt-2">
						<div class="col-sm-6">
							<button type="submit" class="btn btn-info" id="dd_osc_save" style="width: 100%;">
								Saveto MD
							</button>	
						</div>
					</div><!-- row-->
				</div>
			</div>
			
		</section>
		
    <!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
  
  
<?php 
	//echo '  <script src="'.base_url().'assets/js/FileSaver.min.js"></script>'."\n";
?>