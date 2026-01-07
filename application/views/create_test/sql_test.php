  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Query Data</h1>
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
	<!-- Default box -->
		<div class="card">
			<div class="card-header">
				Write SQL here
			</div>
			<div class="card-body">
				<div class="row mb-2">
					<div class="col-sm-2">
						<address>
							<strong>Project table name</strong><br>
							pa5478_projects<br>
							pa5478_version_lists<br>
						</address>
					</div>
					<div class="col-sm-3">
						<address>
							<strong>ADC/DD</strong><br>
							pa5478_table_tp_p2p_table<br>
							pa5478_table_dd_header<br>
						</address>
					</div>
					<div class="col-sm-3">
						<address>
							<strong>Flash table name</strong><br>
							pa5478_table_flash_header<br>
							pa5478_table_flash_func<br>
							pa5478_table_tp_version_table<br>
						</address>
					</div>
					<div class="col-sm-4">
						<address>
							<strong>SRAM table name</strong><br>
							pa5478_table_hw_config_1_cod_fw_config<br>
							pa5478_table_tp_hw_config_1_auto_self<br>
							pa5478_table_tp_adc_config_normal_f0<br>
							pa5478_table_tp_adc_config_normal_f1<br>
						</address>
					</div>					
				</div>
				<div class="row">
					<div class="col-sm-12">
						<textarea id="sqltext" class="form-control" rows="4" style="height: 200px;"></textarea>
					</div>
				</div>
			</div>
			<div class="card-footer">
				<button type="button" class="btn btn-info float-sm-right" id="sql_enter">
					<i class="fas fa-search"></i>  Enter
				</button>
			</div>
		</div>

		<div class="card card-info">
			<div class="card-header">
				<h3 class="card-title">Results</h3>
				<div class="card-tools">
					<button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
					</button>
				</div>
			<!-- /.card-tools -->
			</div>
			<!-- /.card-header -->
			<div class="card-body">
				<div class="row ">
					<div class="col-sm-12">
						<textarea id="sql_result" class="form-control" rows="4"></textarea>
					</div>
				</div>
			</div>
			<!--
			<div class="overlay d-flex justify-content-center align-items-center c_loading">
				<i class="fas fa-2x fa-sync fa-spin"></i>
			</div>-->
			<!-- /.card-body -->
        </div>	

	</section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  

