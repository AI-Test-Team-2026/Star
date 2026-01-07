	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1> AC Script PIC
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
		
<style>
	.oem_pic_tcon_font{
		font-size: 0.7rem;
		font-family:"Verdana";
	}
</style>

		<!-- Main content -->
		<section class="content">
			<div class="card card-info">
				<div class="card-body" >
					<div class="row">
						<div class="col-sm-6">
							<table class="table table-bordered">
								<tr>
									<td>TCON clock(MHz) (Demical)</td>
									<td id="ac_tcon_clock" contenteditable="true" style="background-color: #ffe6f2;">20</td>
								</tr>
							</table>
						</div>
						<div class="form-group col-sm-6">
							<div class="custom-control custom-radio mt-2">
								<input class="custom-control-input form_icsel_radio" type="radio" id="ic_pa0412" name="icsel_radio" value="PA0412">
								<label for="ic_pa0412" class="custom-control-label">PA0412</label>
							</div>
							<div class="custom-control custom-radio mt-1">
								<input class="custom-control-input form_icsel_radio" type="radio" id="ic_pa0402" name="icsel_radio"  checked="" value="PA0402">
								<label for="ic_pa0402" class="custom-control-label">PA0402</label>
							</div>
						</div>
					</div>

					
					<div class="row" id="tcon_script_role" role="">
						<div class="col-sm-1">
						</div>
						<div class="col-sm-6">
							<h5>AC Script (without comment)</h5>
						</div>
						<div class="col-sm-5">
							<h5>DC Script (without comment)</h5>
						</div>
					</div><!-- row-->
					<div class="row mb-2">
						<div class="col-sm-1">
							<button id="svg_create" class="btn btn-info text-xs" style="width: 100%; height: 100%;">
								<i class="fas fa-arrow-alt-circle-right"></i>&nbsp;Enter
							</button>
						</div>
						<div class="col-sm-6">
							<textarea style="width: 100%;height:200px; width: 100%; background-color: #f8f9f9 ;" id="svg_input_ac"></textarea>
						</div>
						<div class="col-sm-5">
							<textarea style="width: 100%;height:200px; width: 100%; background-color: #f8f9f9 ;" id="svg_input_dc"></textarea>
						</div>
					</div><!-- row-->
					<div class="row mb-1">
						<div class="col-sm-12">
							<div class="card card-info collapsed-card">
								<div class="card-header" data-card-widget="collapse">
									<h3 class="card-title">Waveform</h3>
								</div> <!-- card-header-->
								<div class="card-body">
									<div class="row">
										<div class="col-sm-12">
											<div class="form-group">
												<!--<label for="svgrange">Custom range</label>
												<input type="range" class="custom-range" id="svgrange" step="10" min="0" max="100" value="0">
												-->
												<label>Zoom in Range</label>
													<select class="custom-select" id="svgrange">
													<option value="0.1">1%</option>
													<option value="10">50%</option>
													<option value="40">100%</option>
												</select>
												
											</div>
										</div>
										<div class="col-sm-12">
											<?php
											//echo '<div style="position: relative">';
											$offset_y = 5;
											$interval_y = 20;
											$next_y = 10;
											$text_offset = $offset_y;
											
											echo '<span class="oem_pic_tcon_font" style="position: absolute; top: '.$text_offset.'px; left: 1rem">sc_clk1 counter</span>';
											$text_offset+=($interval_y+$next_y);
											echo '<span class="oem_pic_tcon_font" style="position: absolute; top: '.$text_offset.'px; left: 1rem ">DATA_LATCH</span>';
											$text_offset+=($interval_y+$next_y);
											echo '<span class="oem_pic_tcon_font" style="position: absolute; top: '.$text_offset.'px; left: 1rem ">PRE_CHARGE</span>';
											$text_offset+=($interval_y+$next_y);
											echo '<span class="oem_pic_tcon_font" style="position: absolute; top: '.$text_offset.'px; left: 1rem ">SC_CLK1_EN</span>';
											$text_offset+=($interval_y+$next_y);
											echo '<span class="oem_pic_tcon_font" style="position: absolute; top: '.$text_offset.'px; left: 1rem ">RST0</span>';
											$text_offset+=($interval_y+$next_y);
											echo '<span class="oem_pic_tcon_font" style="position: absolute; top: '.$text_offset.'px; left: 1rem ">MIXER_COEF_EN</span>';
											$text_offset+=($interval_y+$next_y);
											echo '<span class="oem_pic_tcon_font" style="position: absolute; top: '.$text_offset.'px; left: 1rem ">SD_LE_EN</span>';
											$text_offset+=($interval_y+$next_y);
											echo '<span class="oem_pic_tcon_font" style="position: absolute; top: '.$text_offset.'px; left: 1rem ">SYS_RSTB2</span>';
											$text_offset+=($interval_y+$next_y);
											echo '<span class="oem_pic_tcon_font" style="position: absolute; top: '.$text_offset.'px; left: 1rem ">DAC_CONTROL_EN</span>';
											$text_offset+=(100+$next_y);
											echo '<span class="oem_pic_tcon_font" style="position: absolute; top: '.$text_offset.'px; left: 1rem ">DAC_CONTROL</span>';
											//echo '</div>';
											?>
											<div class="oem_svg_tcon_script_pic" style="overflow-x: scroll; cursor: grab;">
											
											</div>										
										
										</div>
									</div>
								</div> <!--card-body-->
							</div>
						</div>
					</div><!-- row-->
					<div class="row">
						<div class="col-sm-12">
							<div class="card card-info collapsed-card">
								<div class="card-header" data-card-widget="collapse">
									<h3 class="card-title">Script Parser</h3>
								</div> <!-- card-header-->
								<div class="card-body">
									<?php 
										echo $ac_dc_parser;
									?>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="card card-info collapsed-card">
								<div class="card-header" data-card-widget="collapse">
									<h3 class="card-title">Script Table</h3>
								</div> <!-- card-header-->
								<div class="card-body">
									<?php 
										echo $ac_dc_table;
									?>
								</div>
							</div>
						</div>
					</div>
				</div> <!-- card-body-->
			</div><!-- card-info-->
		</section>
		
    <!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
  
<?php 
	//echo '  <script src="'.base_url().'assets/js/oem_rom.js"></script>'."\n";
?>