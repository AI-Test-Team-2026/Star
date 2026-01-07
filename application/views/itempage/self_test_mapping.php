	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1> Self Test Mapping
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
				<div class="card-header">
					<h3 class="card-title">Mapping table to Generate TSRAM value</h3>
				</div>
				<div class="card-body">
					<div class="row" style="background-color: #f3f7d4;">
						<div class="col-sm-4">
							<input type="radio" id="ic_type_192" name="ictype" value="192">
							<label for="ic_type_192">HX83192</label><br>
							<input type="radio" id="ic_type_193" name="ictype" value="193">
							<label for="ic_type_193">HX83193</label><br>
						</div>
						<div class="col-sm-4">
							<input type="radio" id="mappingtype_vertical" name="mappingtype" value="0">
							<label for="mappingtype_vertical">Vertical</label><br>
							<input type="radio" id="mappingtype_horizontal" name="mappingtype" value="1">
							<label for="mappingtype_horizontal">Horizontal</label><br>
						</div>
					</div>
					<div class="row" style="background-color: #f3f7d4;">
						<div class="col-sm-4">
							<label for="m_tx">TX (column number)</label>
							<input class="UserDEGroup" name="m_tx" value="">
						</div>
						<div class="col-sm-4">
							<label for="m_mux0">mux 0 TX num (Left/Right)</label>
							<input class="UserDEGroup" name="m_mux0" value="">
						</div>
						<div class="col-sm-4">
							<label for="m_mux2">mux 2 TX num (Left/Right)</label>
							<input class="UserDEGroup" name="m_mux2" value="">
						</div>
					</div>
					<div class="row" style="background-color: #f3f7d4;">
						<div class="col-sm-4">
							<label for="m_rx">RX (row number)</label>
							<input class="UserDEGroup" name="m_rx" value="">
						</div>
						<div class="col-sm-4">
							<label for="m_mux1">mux 1 TX num (Left/Right)</label>
							<input class="UserDEGroup" name="m_mux1" value="">
						</div>
						<div class="col-sm-4">
							<label for="m_mux3">mux 3 TX num (Left/Right)</label>
							<input class="UserDEGroup" name="m_mux3" value="">
						</div>
					</div>
					<div class="row post" style="background-color: #f3f7d4;">
						<div class="col-sm-1">
							<button class="btn btn-info " id="TSRAM_ADC_enter" style="margin-bottom: 2px;height: 50%;width: 100%;">Enter</button>
							<button class="btn btn-info " id="TSRAM_ADC_clear" style="height: 50%;width: 100%;">Clear</button>
						</div>
						<div class="col-sm-11">
							
							<textarea class="" id="mapping_table" style="width:100%; height: 200px"></textarea>
						</div>
					</div>
					
					<h5>Results</h5>
					<div class="row post">
						<div class="col-sm-2">
							<button class="btn btn-info " id="mapping_table_show_adc" style="width: 100%;">Show ADC</button>
						</div>
						<div class="col-sm-2">
							<button class="btn btn-info " id="mapping_table_show_frame" style="width: 100%;">Show Frame</button>
						</div>
						<div class="col-sm-8">
							<div id="mapping_table_result" style="margin-top: 10px;"></div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<label for="spinner">
								<span style="font-weight:bold; color:#bf00ff;">ADC_EN Result:&nbsp;</span>
							</label>
							<textarea class="" id="tsram_adc_result" style="width:100%; height: 100px" readonly></textarea>
						</div>
						<div class="col-sm-6">
							<label for="spinner">
								<span style="font-weight:bold; ">TSRAM calculate (Tool Format):&nbsp;</span>
							</label>
							<textarea class="" id="tsram_adc_calculate" style="width:100%; height: 100px" readonly></textarea>
						</div>
						<div class="col-sm-12">
							<label for="spinner">
								<span style="font-weight:bold; color:#bf00ff;">TSRAM cycle 6~13 (tp init code Format):&nbsp;</span>
							</label>
							<textarea class="UserDEGroup" id="tsram_adc_calculate_format" style="width:100%; height: 200px" readonly></textarea>
						</div>
						<div class="col-sm-12 mt-1 mb-2">
							<label for="spinner">
								<span style="font-weight:bold; color:#069b9b;">TSRAM cycle 1,2,3,4,5 with unused ADC off (tp init code Format):&nbsp;</span>
							</label>
							<textarea class="UserDEGroup" id="tsram_adc_en_off" style="width:100%; height: 200px; background-color: #d5f5f5;" readonly></textarea>
						</div>
					</div>
					<div class="row" style="background-color:#ffff99; margin-top: 5px; padding: 5px 0px 5px 0px;">
						<div class="col-sm-1">
							<button class="btn btn-info " id="TSRAM_ADC_enter_debug" style="height: 100%;width: 100%;">Debug</button>
						</div>
						<div class="col-sm-11">
							<label for="spinner">
								<span style="font-weight:bold;">Paste TSRAM from 0x600000F0. Size: 320 bytes</span>
							</label>
							<textarea class="UserDEGroup" id="tsram_adc_content" style="width:100%; height: 200px"></textarea>
						</div>
					</div>
				</div>
				
			</div>

		</section>
		
    <!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
  
  
<?php 
	echo '  <script src="'.base_url().'assets/js/oem_tsram.js"></script>'."\n";
?>