	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1> Text Debug Parser
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
			<div class="card card-info collapsed-card">
				<div class="card-header" data-card-widget="collapse">
					<h3 class="card-title">SCU 900000E8 parser</h3>
					<div class="card-tools">
						<button type="button" class="btn btn-tool parser_expand" title="Collapse">
							<i class="fas fa-plus"></i>
						</button>
					</div>
				</div>
				<div class="card-body">
					<div class="row post">
						<div class="col-sm-6">
							<div class="form-group">
								<label for="form_project_name">SCU_DD_Status (9000_00E8) [31:0]</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="debug_e8_value" placeholder="0x081EF984" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>
							</div>
						</div>
					</div>
					<h5>Results</h5>
					<div class="row">
						<div class="col-sm-12">
							<table class="table" style="text-align: center">
								<tbody>
									<tr>
										<td style="background-color: #ffff99"><b>bit [0]</b> dd_m6502_busy</td>			
										<td style="background-color: #ffff99"><b>bit [1]</b> dd_sleepin</td>			
										<td style="background-color: #ffff99"><b>bit [2]</b> dd_sleepout</td>			
										<td style="background-color: #ffff99"><b>bit [3]</b> dd_pre_tpen</td>			
										<td style="background-color: #ccff66"><b>bit [4]</b> dd_ultra_low_power_en</td>			
										<td style="background-color: #ccff66"><b>bit [5]</b> dd_deepstandby</td>			
										<td style="background-color: #ccff66"><b>bit [6]</b> dd_glance_mode</td>			
										<td style="background-color: #ccff66"><b>bit [7]</b> dd_otp_reload_done_flag</td>		
									</tr>		
									<tr>			
										<td class="db_reg_e8" bit="0" style="background-color: #ffff99">0</td>			
										<td class="db_reg_e8" bit="1" style="background-color: #ffff99">0</td>			
										<td class="db_reg_e8" bit="2" style="background-color: #ffff99">0</td>			
										<td class="db_reg_e8" bit="3" style="background-color: #ffff99">0</td>			
										<td class="db_reg_e8" bit="4" style="background-color: #ccff66">0</td>			
										<td class="db_reg_e8" bit="5" style="background-color: #ccff66">0</td>			
										<td class="db_reg_e8" bit="6" style="background-color: #ccff66">0</td>			
										<td class="db_reg_e8" bit="7" style="background-color: #ccff66">0</td>		
									</tr>		
									<tr>			
										<td style="background-color: #ccccff"><b>bit [8]</b> dd_video_refresh</td>		
										<td style="background-color: #ccccff"><b>bit [9]</b> dd_hsync_cnt_int_req</td>			
										<td style="background-color: #ccccff"><b>bit [10]</b> dd_tpen</td>		
										<td style="background-color: #ccccff"><b>bit [11]</b> dd_vsync</td>			
										<td style="background-color: #ecd9c6"><b>bit [12]</b> dd_dsample[0]</td>		
										<td style="background-color: #ecd9c6"><b>bit [13]</b> dd_dsample[1]</td>		
										<td style="background-color: #ecd9c6"><b>bit [14]</b> dd_bist_en</td>			
										<td style="background-color: #ecd9c6"><b>bit [15]</b> dd_dsi_spd</td>		
									</tr>	
									<tr>			
										<td class="db_reg_e8" bit="8" style="background-color: #ccccff">0</td>			
										<td class="db_reg_e8" bit="9" style="background-color: #ccccff">0</td>		
										<td class="db_reg_e8" bit="10" style="background-color: #ccccff">0</td>		
										<td class="db_reg_e8" bit="11" style="background-color: #ccccff">0</td>		
										<td class="db_reg_e8" bit="12" style="background-color: #ecd9c6">0</td>		
										<td class="db_reg_e8" bit="13" style="background-color: #ecd9c6">0</td>		
										<td class="db_reg_e8" bit="14" style="background-color: #ecd9c6">0</td>		
										<td class="db_reg_e8" bit="15" style="background-color: #ecd9c6">0</td>		
									</tr>		
									<tr>			
										<td style="background-color: #ffff99"><b>bit [16]</b> dd_sense_mode_0</td>	
										<td style="background-color: #ffff99"><b>bit [17]</b> dd_sense_mode_1</td>	
										<td style="background-color: #ffff99"><b>bit [18]</b> dd_disp</td>			
										<td style="background-color: #ffff99"><b>bit [19]</b> dd_pon</td>		
										<td style="background-color: #ccff66"><b>bit [20]</b> dd_pon_non_filtered</td>	
										<td style="background-color: #ccff66"><b>bit [21]</b> dummy</td>			
										<td style="background-color: #ccff66"><b>bit [22]</b> dummy</td>		
										<td style="background-color: #ccff66"><b>bit [23]</b> dummy</td>		
									</tr>
									<tr>			
										<td class="db_reg_e8" bit="16" style="background-color: #ffff99">0</td>		
										<td class="db_reg_e8" bit="17" style="background-color: #ffff99">0</td>		
										<td class="db_reg_e8" bit="18" style="background-color: #ffff99">0</td>		
										<td class="db_reg_e8" bit="19" style="background-color: #ffff99">0</td>			
										<td class="db_reg_e8" bit="20" style="background-color: #ccff66">0</td>			
										<td class="db_reg_e8" bit="21" style="background-color: #ccff66">0</td>			
										<td class="db_reg_e8" bit="22" style="background-color: #ccff66">0</td>		
										<td class="db_reg_e8" bit="23" style="background-color: #ccff66">0</td>		
									</tr>		
									<tr>			
										<td style="background-color: #ccccff"><b>bit [24]</b> dd_mayday_int</td>		
										<td style="background-color: #ccccff"><b>bit [25]</b> dd_req_int</td>		
										<td style="background-color: #ccccff"><b>bit [26]</b> dd_gas_int</td>	
										<td style="background-color: #ccccff"><b>bit [27]</b> dd_fail_det_int</td>	
										<td style="background-color: #ecd9c6"><b>bit [28]</b> dummy</td>			
										<td style="background-color: #ecd9c6"><b>bit [29]</b> dummy</td>		
										<td style="background-color: #ecd9c6"><b>bit [30]</b> dummy</td>			
										<td style="background-color: #ecd9c6"><b>bit [31]</b> dummy</td>		
									</tr>		
									<tr>			
										<td class="db_reg_e8" bit="24" style="background-color: #ccccff">0</td>			
										<td class="db_reg_e8" bit="25" style="background-color: #ccccff">0</td>		
										<td class="db_reg_e8" bit="26" style="background-color: #ccccff">0</td>		
										<td class="db_reg_e8" bit="27" style="background-color: #ccccff">0</td>		
										<td class="db_reg_e8" bit="28" style="background-color: #ecd9c6">0</td>		
										<td class="db_reg_e8" bit="29" style="background-color: #ecd9c6">0</td>		
										<td class="db_reg_e8" bit="30" style="background-color: #ecd9c6">0</td>		
										<td class="db_reg_e8" bit="31" style="background-color: #ecd9c6">0</td>		
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					
				</div>
				<div class="card-footer">
					<div class="row">
						<div class="col-sm-12">
							<button type="submit" class="float-sm-right btn btn-info ml-2" id="debug_e8_enter">
								<i class="fas fa-virus"></i> Enter
							</button>
							<button type="submit" class="float-sm-right btn btn-info" id="debug_e8_clear">
								<i class="fas fa-disease"></i> Clear
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="card card-info collapsed-card">
				<div class="card-header" data-card-widget="collapse">
					<h3 class="card-title">TP pindefine</h3>
					<div class="card-tools">
						<button type="button" class="btn btn-tool parser_expand"  title="Collapse">
							<i class="fas fa-plus"></i>
						</button>
					</div>
				</div>
				<div class="card-body">
					<div class="row post">
						<div class="col-sm-6">
							<div class="form-group">
								<label for="form_project_name">PTBA (8002_0038) (Hex)</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="intput_reg_ptba" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>
								<?php
								if($val_fae == 0){
									echo '<label for="form_project_name">ADCCYC (8002_003C) (Hex)</label>';
									echo '<div class="input-group mb-3">';
										echo '<div class="input-group-prepend">';
											echo '<span class="input-group-text">';
												echo '<i class="fas fa-hamsa"></i>';
											echo '</span>';
										echo '</div>';
										echo '<input type="text" class="form-control" id="intput_reg_adccyc" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->';
									echo '</div>';
									echo '<label for="form_project_name">DAC_SET (8002_0234) (Hex)</label>';
									echo '<div class="input-group mb-3">';
										echo '<div class="input-group-prepend">';
											echo '<span class="input-group-text">';
												echo '<i class="fas fa-hamsa"></i>';
											echo '</span>';
										echo '</div>';
										echo '<input type="text" class="form-control" id="intput_reg_dacset" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->';
									echo '</div>';
								}
								?>
								<label for="form_project_name">SLOPE (8002_0238) (Hex)</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="intput_reg_slope" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>	
							</div>
							
							<div class="" style="bottom: 16px;position: absolute; width: 95%;">
								<button type="submit" class="btn btn-warning" id="cal_reg" style="width: 100%">
									Enter
								</button>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group">
								<label for="form_project_name">SET_VRH (8002_0064) (Hex)</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="intput_reg_vrh" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>
								<label for="form_project_name">SET_VR3 (8002_0048) (Hex)</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="intput_reg_vr3" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>
								<label for="form_project_name">SET_VR4 (8002_004C) (Hex)</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="intput_reg_vr4" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>
								<label for="form_project_name">SET_VR5 (8002_0050) (Hex)</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="intput_reg_vr5" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>
								<label for="form_project_name">SET_VR1 (8002_0040) (Hex)</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="intput_reg_vr1" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>
								<label for="form_project_name">SET_VR2 (8002_0044) (Hex)</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="intput_reg_vr2" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>
							</div>
						</div>
					</div>
					<h5>Results</h5>
					<div class="row">
						<div class="col-sm-1">
							<button type="submit" class="btn btn-warning" id="cal_ptba" style="width: 80%; height: 100%">
								Enter
							</button>			
						</div>
						<div class="col-sm-7">
							<table class="table s_table">
								<thead>
									
								</thead>
								<tbody>
									<!--PTBA====================================================================-->
									<!--========================================================================-->
									<tr style="text-align:center; font-weight: bold; background-color: #8D91C6;">
										<td colspan=6>ADC Reference current setting</td>
									</tr>
									<tr>
										<td>Address</td>
										<td colspan=2>Name</td>
										<td>Description</td>
										<td>Setting (Binary)</td>
										<td>Hex</td>
									</tr>
									<tr>
										<td rowspan=24>0x80020038</td>
										<td rowspan=24>PTBA</td>
										<td>PTBA[23]</td>
										<td>ADC enable</td>
										<td class="reg_editorable reg_ptba" bit="23" contenteditable>1</td>
										<td class="reg_ptba_hex" bit="23_20" rowspan=4>9</td>
									</tr>
									<tr>
										<td>PTBA[22]</td>
										<td>選擇積分電容大小; 1=大電容, 0=小電容</td>
										<td class="reg_editorable reg_ptba" bit="22" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>PTBA[21]</td>
										<td>Listen mode</td>
										<td class="reg_editorable reg_ptba" bit="21" contenteditable>0</td>
										
									</tr>
									<tr>
										<td sytle="">PTBA[20]</td>
										<td style="background-color: #E3EB98;">IDAC current; 調整IIR值</td>
										<td class="reg_editorable reg_ptba reg_ptba_current" bit="20" contenteditable>1</td>
										
									</tr>
									<tr>
										<td>PTBA[19]</td>
										<td style="background-color: #E3EB98;">IDAC current; 調整IIR值</td>
										<td class="reg_editorable reg_ptba reg_ptba_current" bit="19" contenteditable>0</td>
										<td class="reg_ptba_hex" bit="19_16" rowspan=4>0</td>
									</tr>
									<tr>
										<td>PTBA[18]</td>
										<td style="background-color: #E3EB98;">IDAC current; 調整IIR值</td>
										<td class="reg_editorable reg_ptba reg_ptba_current" bit="18" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>PTBA[17]</td>
										<td>BIAS current enable</td>
										<td class="reg_editorable reg_ptba" bit="17" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>PTBA[16]</td>
										<td style="background-color: #A6DBF1;">BIAS current for 比較器</td>
										<td class="reg_editorable reg_ptba" bit="16" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>PTBA[15]</td>
										<td style="background-color: #A6DBF1;">BIAS current for 比較器</td>
										<td class="reg_editorable reg_ptba" bit="15" contenteditable>1</td>
										<td class="reg_ptba_hex" bit="15_12" rowspan=4>9</td>
									</tr>
									<tr>
										<td>PTBA[14]</td>
										<td style="background-color: #A6DBF1;">BIAS current for 比較器</td>
										<td class="reg_editorable reg_ptba" bit="14" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>PTBA[13]</td>
										<td style="background-color: #D58D72;">BIAS current for VR OP</td>
										<td class="reg_editorable reg_ptba" bit="13" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>PTBA[12]</td>
										<td style="background-color: #D58D72;">BIAS current for VR OP</td>
										<td class="reg_editorable reg_ptba" bit="12" contenteditable>1</td>
										
									</tr>
									<tr>
										<td>PTBA[11]</td>
										<td style="background-color: #D58D72;">BIAS current for VR OP</td>
										<td class="reg_editorable reg_ptba" bit="11" contenteditable>0</td>
										<td class="reg_ptba_hex" bit="11_8" rowspan=4>2</td>
									</tr>
									<tr>
										<td>PTBA[10]</td>
										<td style="background-color: #E3B672;">BIAS current for VR OP (VRH)</td>
										<td class="reg_editorable reg_ptba" bit="10" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>PTBA[9]</td>
										<td style="background-color: #E3B672;">BIAS current for VR OP (VRH)</td>
										<td class="reg_editorable reg_ptba" bit="9" contenteditable>1</td>
										
									</tr>
									<tr>
										<td>PTBA[8]</td>
										<td style="background-color: #E3B672;">BIAS current for VR OP (VRH)</td>
										<td class="reg_editorable reg_ptba" bit="8" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>PTBA[7]</td>
										<td>NA</td>
										<td class="reg_ptba" bit="7">0</td>
										<td class="reg_ptba_hex" bit="7_4" rowspan=4>0</td>
									</tr>
									<tr>
										<td>PTBA[6]</td>
										<td>NA</td>
										<td class="reg_ptba" bit="6">0</td>
										
									</tr>
									<tr>
										<td>PTBA[5]</td>
										<td style="background-color: #E3EB98;">IDAC current; 調整IIR值</td>
										<td class="reg_editorable reg_ptba reg_ptba_current" bit="5" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>PTBA[4]</td>
										<td style="background-color: #E3EB98;">IDAC current; 調整IIR值</td>
										<td class="reg_editorable reg_ptba reg_ptba_current" bit="4" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>PTBA[3]</td>
										<td style="background-color: #E3EB98;">IDAC current; 調整IIR值</td>
										<td class="reg_editorable reg_ptba reg_ptba_current" bit="3" contenteditable>1</td>
										<td class="reg_ptba_hex" bit="3_0" rowspan=4>A</td>
									</tr>
									<tr>
										<td>PTBA[2]</td>
										<td >IBAS Current for VR_OP(SCOTA_VDDA): INT bias current</td>
										<td class="reg_editorable reg_ptba" bit="2" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>PTBA[1]</td>
										<td>IBAS Current for VR_OP(SCOTA_VDDA): INT bias current</td>
										<td class="reg_editorable reg_ptba" bit="1" contenteditable>1</td>
										
									</tr>
									<tr>
										<td>PTBA[0]</td>
										<td>IBAS Current for VR_OP(SCOTA_VDDA): INT bias current</td>
										<td class="reg_editorable reg_ptba" bit="0" contenteditable>0</td>
										
									</tr>
									<!--===DAC==================================================================-->
									<!--========================================================================-->
									<?php 
									if($val_fae == 0){
										echo '
										<tr style="text-align:center; font-weight: bold; background-color: #8D91C6;">
											<td colspan=6>DAC function setting</td>
										</tr>
										<tr>
											<td>Address</td>
											<td colspan=2>Name</td>
											<td>Description</td>
											<td>Setting (Binary)</td>
											<td>Hex</td>
										</tr>
										<tr>
											<td rowspan=19>0x80020234</td>
											<td rowspan=19>DAC_SET</td>
											<td>DAC_SET[18]</td>
											<td>DAC SIN WAVE</td>
											<td class="reg_editorable reg_dacset" bit="18" contenteditable>0</td>
											<td class="reg_dacset_hex" bit="18_16" rowspan=3>0</td>
										</tr>
										<tr>
											<td>DAC_SET[17]</td>
											<td>NA</td>
											<td class="reg_dacset" bit="17">0</td>
											
										</tr>
										<tr>
											<td>DAC_SET[16]</td>
											<td>NA</td>
											<td class="reg_dacset" bit="16">0</td>
											
										</tr>
										<tr>
											<td>DAC_SET[15]</td>
											<td>NA</td>
											<td class="reg_dacset" bit="15">0</td>
											<td class="reg_dacset_hex" bit="15_12" rowspan=4>0</td>
										</tr>
										<tr>
											<td>DAC_SET[14]</td>
											<td>TP_LFD_DELAY_SEL[3]</td>
											<td class="reg_editorable reg_dacset" bit="14" contenteditable>0</td>
											
										</tr>
										<tr>
											<td>DAC_SET[13]</td>
											<td>TP_LFD_DELAY_SEL[2]</td>
											<td class="reg_editorable reg_dacset" bit="13" contenteditable>0</td>
											
										</tr>
										<tr>
												<td>DAC_SET[12]</td>
												<td>TP_LFD_DELAY_SEL[1]</td>
												<td class="reg_editorable reg_dacset" bit="12" contenteditable>0</td>
											
										</tr>
										<tr>
											<td>DAC_SET[11]</td>
											<td>FINE_DAC_SSEL[4]</td>
											<td class="reg_editorable reg_dacset" bit="11" contenteditable>0</td>
											<td class="reg_dacset_hex" bit="11_8" rowspan=4>0</td>
										</tr>
										<tr>
											<td>DAC_SET[10]</td>
											<td>FINE_DAC_SSEL[3]</td>
											<td class="reg_editorable reg_dacset" bit="10" contenteditable>0</td>
											
										</tr>
										<tr>
											<td>DAC_SET[9]</td>
											<td>FINE_DAC_SSEL[2]</td>
											<td class="reg_editorable reg_dacset" bit="9" contenteditable>0</td>
											
										</tr>
										<tr>
											<td>DAC_SET[8]</td>
											<td>FINE_DAC_SSEL[1]</td>
											<td class="reg_editorable reg_dacset" bit="8" contenteditable>0</td>
											
										</tr>
										<tr>
											<td>DAC_SET[7]</td>
											<td>FINE_DAC_LSEL[4]</td>
											<td class="reg_editorable reg_dacset" bit="7" contenteditable>0</td>
											<td class="reg_dacset_hex" bit="7_4" rowspan=4>0</td>
										</tr>
										<tr>
											<td>DAC_SET[6]</td>
											<td>FINE_DAC_LSEL[3]</td>
											<td class="reg_editorable reg_dacset" bit="6" contenteditable>0</td>
											
										</tr>
										<tr>
											<td>DAC_SET[5]</td>
											<td>FINE_DAC_LSEL[2]</td>
											<td class="reg_editorable reg_dacset" bit="5" contenteditable>0</td>
											
										</tr>
										<tr>
											<td>DAC_SET[4]</td>
											<td>FINE_DAC_LSEL[1]</td>
											<td class="reg_editorable reg_dacset" bit="4" contenteditable>0</td>
											
										</tr>
										<tr>
											<td>DAC_SET[3]</td>
											<td>NA</td>
											<td class="reg_dacset" bit="3">0</td>
											<td class="reg_dacset_hex" bit="3_0" rowspan=4>0</td>
										</tr>
										<tr>
											<td>DAC_SET[2]</td>
											<td>BIAS_Current for DAC</td>
											<td class="reg_editorable reg_dacset" bit="2" contenteditable>0</td>
											
										</tr>
										<tr>
											<td>DAC_SET[1]</td>
											<td>BIAS_Current for DAC</td>
											<td class="reg_editorable reg_dacset" bit="1" contenteditable>0</td>
											
										</tr>
										<tr>
											<td>DAC_SET[0]</td>
											<td>BIAS_Current for DAC</td>
											<td class="reg_editorable reg_dacset" bit="0" contenteditable>0</td>
											
										</tr>';
									}
									?>
									<tr>
										<td>8002_0238</td>
										<td>DAC_SLOP</td>
										<td></td>
										<td>Adjust Slope of Triangular Wave</td>
										<td class="reg_editorable reg_slope" contenteditable>3</td>
										<td class="reg_slop_hex">3</td>
									</tr>
									<!--ADC Function============================================================-->
									<!--========================================================================-->
									<?php
									if($val_fae == 0){
										echo '
									<tr style="text-align:center; font-weight: bold; background-color: #8D91C6;">
										<td colspan=6>ADC FUNCTION SETTING</td>
									</tr>
									<tr>
										<td>Address</td>
										<td colspan=2>Name</td>
										<td>Description</td>
										<td>Setting (Binary)</td>
										<td>Hex</td>
									</tr>
									<tr>
										<td rowspan=16>0x8002_003C</td>
										<td rowspan=16>ADCCYC</td>
										<td>ADCCYC[15]</td>
										<td>Select TESTMODE CAP @Test Mode</td>
										<td class="reg_editorable reg_adccyc" bit="15" contenteditable>0</td>
										<td class="reg_adccyc_hex" bit="15_12" rowspan=4>2</td>
									</tr>
									<tr>
										<td>ADCCYC[14]</td>
										<td>IDAC/INT_VINN 1:SAME OP/ 0:DIFF_OP</td>
										<td class="reg_editorable reg_adccyc" bit="14" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>ADCCYC[13]</td>
										<td>
											<span>1: ADC operation at rise and fall.</span>
											<span>0: ADC operation at rise.</span>
										</td>
										<td class="reg_editorable reg_adccyc" bit="13" contenteditable>1</td>
										
									</tr>
									<tr>
										<td>ADCCYC[12]</td>
										<td>ADC INT VINP from 
											<span>1: LFDOP</span>
											<span>0: VR3OP</span>
										</td>
										<td class="reg_editorable reg_adccyc" bit="12" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>ADCCYC[11]</td>
										<td>LFDOP_L refer 1: VHSS / 0: DAC</td>
										<td class="reg_editorable reg_adccyc" bit="11" contenteditable>1</td>
										<td class="reg_adccyc_hex" bit="11_8" rowspan=4>F</td>
									</tr>
									<tr>
										<td>ADCCYC[10]</td>
										<td>VR3_L refer 1: LFDOP / 0: DAC</td>
										<td class="reg_editorable reg_adccyc" bit="10" contenteditable>1</td>
										
									</tr>
									<tr>
										<td>ADCCYC[9]</td>
										<td>LFDOP_R refer 1: VHSS / 0: DAC </td>
										<td class="reg_editorable reg_adccyc" bit="9" contenteditable>1</td>
										
									</tr>
									<tr>
										<td>ADCCYC[8]</td>
										<td>VR3_R refer 1: LFDOP / 0: DAC</td>
										<td class="reg_editorable reg_adccyc" bit="8" contenteditable>1</td>
										
									</tr>
									<tr>
										<td>ADCCYC[7]</td>
										<td>NA</td>
										<td class="reg_editorable reg_adccyc" bit="7" contenteditable>0</td>
										<td class="reg_adccyc_hex" bit="7_4" rowspan=4>1</td>
									</tr>
									<tr>
										<td>ADCCYC[6]</td>
										<td>NA</td>
										<td class="reg_editorable reg_adccyc" bit="6" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>ADCCYC[5]</td>
										<td>1:VLFD,VSDM the same Ref. ; 0: VLFD,VSDM Ref. Different C_DAC 
										</td>
										<td class="reg_editorable reg_adccyc" bit="5" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>ADCCYC[4]</td>
										<td>
											<span>1: PRE_Charge From LFDOP</span>
											<span>0: PRE_Charge From VR3</span>
										</td>
										<td class="reg_editorable reg_adccyc" bit="4" contenteditable>1</td>
										
									</tr>
									<tr>
										<td>ADCCYC[3]</td>
										<td>NA</td>
										<td class="reg_editorable reg_adccyc" bit="3" contenteditable>0</td>
										<td class="reg_adccyc_hex" bit="3_0" rowspan=4>4</td>
									</tr>
									<tr>
										<td>ADCCYC[2]</td>
										<td>SC_CLK1 group 1: 30group / 0: without group</td>
										<td class="reg_editorable reg_adccyc" bit="2" contenteditable>1</td>
										
									</tr>
									<tr>
										<td>ADCCYC[1]</td>
										<td>
											1: Precharge to VSSA (ADC拉GND,ADC=1/3/5…63) ; 0: VR3
										</td>
										<td class="reg_editorable reg_adccyc" bit="1" contenteditable>0</td>
										
									</tr>
									<tr>
										<td>ADCCYC[0]</td>
										<td>1: Precharge to VSSA (ADC拉GND,ADC=0/2/4…62) ; 0: VR3
										</td>
										<td class="reg_editorable reg_adccyc" bit="0" contenteditable>0</td>
										
									</tr>';
									}
									?>
									
									<!--Reference Voltage Setting===============================================-->
									<!--========================================================================-->
									<tr style="text-align:center; font-weight: bold; background-color: #8D91C6;">
										<td colspan=6>Reference Voltage Setting</td>
									</tr>
									<tr>
										<td>Address</td>
										<td>REG Name</td>
										<td>Macro</td>
										<td>Setting (Hex)</td>
										<td colspan=2>Voltage</td>
									</tr>
									<tr>
										<td>0x80020064</td>
										<td>SET_VRH</td>
										<td>VRH</td>
										<td class="reg_editorable reg_vr" name="vrh" contenteditable>0f</td>
										<td class="reg_vr_hex" name="vrh" colspan=2>0A</td>
									</tr>
									<tr>
										<td>0x80020048</td>
										<td>SET_VR3</td>
										<td>VR2</td>
										<td class="reg_editorable reg_vr" name="vr3" contenteditable>0e</td>
										<td class="reg_vr_hex" name="vr3" colspan=2>05</td>
									</tr>
									<tr>
										<td>0x8002004C</td>
										<td>SET_VR4</td>
										<td>VR3</td>
										<td class="reg_editorable reg_vr" name="vr4" contenteditable>06</td>
										<td class="reg_vr_hex" name="vr4" colspan=2>06</td>
									</tr>
									<tr>
										<td>0x80020050</td>
										<td>SET_VR5</td>
										<td>VR5</td>
										<td class="reg_editorable reg_vr" name="vr5" contenteditable>1e</td>
										<td class="reg_vr_hex" name="vr5" colspan=2>1E</td>
									</tr>
									<tr>
										<td>0x80020040</td>
										<td>SET_VR1</td>
										<td>VR6</td>
										<td class="reg_editorable reg_vr" name="vr1" contenteditable>06</td>
										<td class="reg_vr_hex" name="vr1" colspan=2>0C</td>
									</tr>
									<tr>
										<td>0x80020044</td>
										<td>SET_VR2</td>
										<td>VR2H</td>
										<td class="reg_editorable reg_vr" name="vr2" contenteditable>16</td>
										<td class="reg_vr_hex" name="vr2" colspan=2>13</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col-sm-4">
							<table class="table s_table">
								<tbody>
									<tr style="text-align:center; font-weight: bold; background-color: #8D91C6;">
										<td colspan=3>Caculation(PA5469/PA5478)</td>
									</tr>
									<tr>
										<td>Name</td>
										<td>Setting</td>
										<td>Current (uA)</td>
									</tr>
									<tr>
										<td>BASE_CURRENT for IDAC</td>
										<td class="reg_ptba" name="base_setting"></td>
										<td class="reg_ptba" name="base_current"></td>
									</tr>
									<tr>
										<td>1 bit-IDAC</td>
										<td class="reg_ptba" name="1_bit_setting"></td>
										<td class="reg_ptba" name="1_bit_current" style="background-color: #D58D72; color: white; font-weight: bold;"></td>
									</tr>
								</tbody>
							</table>
						</div>
						<?php 
						if($val_fae ==0){
							echo '<div class="col-sm-12">';	
							echo '	<img  style="width: 70%;" src="'.base_url().'assets/img/5478_pindefine.png" ></img>'."\n";
							echo '</div>';
							echo '<div class="col-sm-12">';
							echo ' <img  style="width: 70%;" src="'.base_url().'assets/img/Voltage_Setting.png" ></img>'."\n";
							echo '</div>';
						}
						?>
					</div>
					
				</div>

			</div>
			<?php 
				if($val_fae == 1){
					echo '<div class="card card-info collapsed-card" style="display: none;">';
				}
				else{
					echo '<div class="card card-info collapsed-card" style="display: block;">';
				}
			?>
			<!--<div class="card card-info collapsed-card">-->
				<div class="card-header" data-card-widget="collapse">
					<h3 class="card-title">Reload Status Parser</h3>
					<div class="card-tools">
						<button type="button" class="btn btn-tool parser_expand"  title="Collapse">
							<i class="fas fa-plus"></i>
						</button>
					</div>
				</div>
				<div class="card-body">
					<div class="row post">
						<div class="col-sm-6">
							<div class="form-group">
								<label for="form_project_name">Reload Status (8005_0000) [31:0]</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="rr_value" placeholder="" autocomplete="off">										<!--<input type="text" class="form-control" id="form_project_name" placeholder="Projname_size" autocomplete="off">-->
								</div>
							</div>
						</div>
					</div>
					<h5>Results</h5>
					<div class="row">
						<div class="col-sm-12 scu_rr_table"></div>
					</div>
					
				</div>
				<div class="card-footer">
					<div class="row">
						<div class="col-sm-12">
							<button type="submit" class="float-sm-right btn btn-info ml-2" id="db_reg_rr_enter">
								<i class="fas fa-virus"></i> Enter
							</button>
							<!--
							<button type="submit" class="float-sm-right btn btn-info" id="db_reg_rr_clear">
								<i class="fas fa-disease"></i> Clear
							</button>-->
						</div>
					</div>
				</div>
			</div>
			<?php 
			echo $dd_rom_convert;
			?>
			<div class="card card-info collapsed-card">
				<div class="card-header" data-card-widget="collapse">
					<h3 class="card-title">Fail Detect</h3>
					<div class="card-tools">
						<button type="button" class="btn btn-tool parser_expand"  title="Collapse">
							<i class="fas fa-plus"></i>
						</button>
					</div>
				</div>
				<div class="card-body">
					<div class="row post">
						<div class="col-sm-6">
							<span style="background-color: #E3EB98">Paste E5_00 bank3(length 12)</span>
							<span >E5_bank3 PA5/6/7/8 is dd-related (same as E5_bank0 PA2/3/4/5)</span>
							<textarea class="" id="fail_e5_bank3" style="width: 100%;height: 50px;"></textarea>
						</div>
						<div class="col-sm-6">
							<span style="background-color: #E3EB98">Paste E5_00 bank0(length 12)</span>
							<span >E5_bank0 PA2/3/4/5 is dd-related. PA6/7 is touch-related</span>
							<textarea class="" id="fail_e5_bank0" style="width: 100%;height: 50px;"></textarea>
						</div>
						<div class="col-sm-12 mt-4">

							<button type="submit" class="float-sm-right btn btn-info ml-2" id="db_fail_det_enter">
								<i class="fas fa-virus"></i> Enter
							</button>
							<button type="submit" class="float-sm-right btn btn-info ml-2" id="db_fail_det_clear">
								<i class="fas fa-virus"></i> Clear
							</button>
						</div>
					</div>
					
					<div class="row">
						<div class="col-sm-6">
							<table class="table table-striped" style="text-align: center">
								<thead>
									<td colspan="4">
										<b> E5_bank3</b> <br>
										0xE5 bank0 PA1 bit0 is FAIL_DET_EN
									</td>
								</thead>
								<tbody>
									<tr><td>FAIL_DET[n]</td><td>DD PA Address</td><td>Function</td><td>Status</td></tr>
									<tr class=" "><td>[0]</td><td>bank3_PA5 bit[0]</td><td>Video CRC Error[0]</td><td class="fail_det_grp" addr="b3_pa5_0">0</td></tr>
									<tr class=" "><td>[1]</td><td>bank3_PA5 bit[1]</td><td>Video CRC Error[1]</td><td class="fail_det_grp" addr="b3_pa5_1">0</td></tr>
									<tr class=" "><td>[2]</td><td>bank3_PA5	bit[2]</td><td>Video CRC Error[2]</td><td class="fail_det_grp" addr="b3_pa5_2">0</td></tr>
									<tr class=" "><td>[3]</td><td>bank3_PA5	bit[3]</td><td>Video CRC Error[3]</td><td class="fail_det_grp" addr="b3_pa5_3">0</td></tr>
									<tr class=" "><td>[4]</td><td>bank3_PA5	bit[4]</td><td>Video CRC Error[4]</td><td class="fail_det_grp" addr="b3_pa5_4">0</td></tr>
									<tr class=" "><td>[5]</td><td>bank3_PA5	bit[5]</td><td>VDD undervoltage</td><td class="fail_det_grp" addr="b3_pa5_5">0</td></tr>
									<tr class=" "><td>[6]</td><td>bank3_PA5	bit[6]</td><td>VSP undervoltage</td><td class="fail_det_grp" addr="b3_pa5_6">0</td></tr>
									<tr class=" "><td>[7]</td><td>bank3_PA5	bit[7]</td><td>VSN undervoltage</td><td class="fail_det_grp" addr="b3_pa5_7">0</td></tr>
									<tr class=" "><td>[8]</td><td>bank3_PA6 bit[0]</td><td>VGH undervoltage</td><td class="fail_det_grp" addr="b3_pa6_0">0</td></tr>
									<tr class=" "><td>[9]</td><td>bank3_PA6 bit[1]</td><td>VGL undervoltage</td><td class="fail_det_grp" addr="b3_pa6_1">0</td></tr>
									<tr class=" "><td>[10]</td><td>bank3_PA6 bit[2]</td><td>Abnormal LVDS signal</td><td class="fail_det_grp" addr="b3_pa6_2">0</td></tr>
									<tr class=" "><td>[11]</td><td>bank3_PA6 bit[3]</td><td>LVDS unlock</td><td class="fail_det_grp" addr="b3_pa6_3">0</td></tr>
									<tr class=" "><td>[12]</td><td>bank3_PA6 bit[4]</td><td>LVDS CLK lane Hiz</td><td class="fail_det_grp" addr="b3_pa6_4">0</td></tr>
									<tr class=" "><td>[13]</td><td>bank3_PA6 bit[5]</td><td>No LVDS signal</td><td class="fail_det_grp" addr="b3_pa6_5">0</td></tr>
									<tr class=" "><td>[14]</td><td>bank3_PA6 bit[6]</td><td>OTP reload fail</td><td class="fail_det_grp" addr="b3_pa6_6">0</td></tr>
									<tr class=" "><td>[15]</td><td>bank3_PA6 bit[7]</td><td>OTP program fail</td><td class="fail_det_grp" addr="b3_pa6_7">0</td></tr>
									<tr class=" "><td>[16]</td><td>bank3_PA7 bit[0]</td><td>Glass broken</td><td class="fail_det_grp" addr="b3_pa7_0">0</td></tr>
									<tr class=" "><td>[17]</td><td>bank3_PA7 bit[1]</td><td>VDD over-voltage</td><td class="fail_det_grp" addr="b3_pa7_1">0</td></tr>
									<tr class=" "><td>[18]</td><td>bank3_PA7 bit[2]</td><td>VSP over-voltage</td><td class="fail_det_grp" addr="b3_pa7_2">0</td></tr>
									<tr class=" "><td>[19]</td><td>bank3_PA7 bit[3]</td><td>VSN over-voltage</td><td class="fail_det_grp" addr="b3_pa7_3">0</td></tr>
									<tr class=" "><td>[20]</td><td>bank3_PA7 bit[4]</td><td>PWM Fail</td><td class="fail_det_grp" addr="b3_pa7_4">0</td></tr>
									<tr class=" "><td>[21]</td><td>bank3_PA7 bit[5]</td><td>Flash Reload Error</td><td class="fail_det_grp" addr="b3_pa7_5">0</td></tr>
									<tr class=" "><td>[22]</td><td>bank3_PA7 bit[6]</td><td>Overheat Error indicator</td><td class="fail_det_grp" addr="b3_pa7_6">0</td></tr>
									<tr class=" "><td>[23]</td><td>bank3_PA7 bit[7]</td><td>Abnormal Gate signal</td><td class="fail_det_grp" addr="b3_pa7_7">0</td></tr>
									<tr class=" "><td>[24]</td><td>bank3_PA8 bit[0]</td><td>Abnormal Cascade Sync Signal</td><td class="fail_det_grp" addr="b3_pa8_0">0</td></tr>
									<tr class=" "><td>[25]</td><td>bank3_PA8 bit[1]</td><td>VGH Pumping Error</td><td class="fail_det_grp" addr="b3_pa8_1">0</td></tr>
									<tr class=" "><td>[26]</td><td>bank3_PA8 bit[2]</td><td>VGL Pumping Error</td><td class="fail_det_grp" addr="b3_pa8_2">0</td></tr>
									<tr class=" "><td>[27]</td><td>bank3_PA8 bit[3]</td><td>OTP checksum fail</td><td class="fail_det_grp" addr="b3_pa8_3">0</td></tr>
								</tbody>
							</table>
						</div>
						
						<div class="col-sm-6">
							<table class="table table-striped" style="text-align: center">
								<thead>
									<td colspan="4">
										<b> E5_bank0</b> <br>
										0xE5 bank0 PA1 bit0 is FAIL_DET_EN
									</td>
								</thead>
								<tbody>
									<tr><td>FAIL_DET[n]</td><td>DD PA Address</td><td>Function</td><td>Status</td></tr>
									<tr class=" "><td>[0]</td><td>bank0_PA2 bit[0]</td><td>Video CRC Error[0]</td><td class="fail_det_grp" addr="b0_pa2_0">0</td></tr>
									<tr class=" "><td>[1]</td><td>bank0_PA2 bit[1]</td><td>Video CRC Error[1]</td><td class="fail_det_grp" addr="b0_pa2_1">0</td></tr>
									<tr class=" "><td>[2]</td><td>bank0_PA2	bit[2]</td><td>Video CRC Error[2]</td><td class="fail_det_grp" addr="b0_pa2_2">0</td></tr>
									<tr class=" "><td>[3]</td><td>bank0_PA2	bit[3]</td><td>Video CRC Error[3]</td><td class="fail_det_grp" addr="b0_pa2_3">0</td></tr>
									<tr class=" "><td>[4]</td><td>bank0_PA2	bit[4]</td><td>Video CRC Error[4]</td><td class="fail_det_grp" addr="b0_pa2_4">0</td></tr>
									<tr class=" "><td>[5]</td><td>bank0_PA2	bit[5]</td><td>VDD undervoltage</td><td class="fail_det_grp" addr="b0_pa2_5">0</td></tr>
									<tr class=" "><td>[6]</td><td>bank0_PA2	bit[6]</td><td>VSP undervoltage</td><td class="fail_det_grp" addr="b0_pa2_6">0</td></tr>
									<tr class=" "><td>[7]</td><td>bank0_PA2	bit[7]</td><td>VSN undervoltage</td><td class="fail_det_grp" addr="b0_pa2_7">0</td></tr>
									<tr class=" "><td>[8]</td><td>bank0_PA3 bit[0]</td><td>VGH undervoltage</td><td class="fail_det_grp" addr="b0_pa3_0">0</td></tr>
									<tr class=" "><td>[9]</td><td>bank0_PA3 bit[1]</td><td>VGL undervoltage</td><td class="fail_det_grp" addr="b0_pa3_1">0</td></tr>
									<tr class=" "><td>[10]</td><td>bank0_PA3 bit[2]</td><td>Abnormal LVDS signal</td><td class="fail_det_grp" addr="b0_pa3_2">0</td></tr>
									<tr class=" "><td>[11]</td><td>bank0_PA3 bit[3]</td><td>LVDS unlock</td><td class="fail_det_grp" addr="b0_pa3_3">0</td></tr>
									<tr class=" "><td>[12]</td><td>bank0_PA3 bit[4]</td><td>LVDS CLK lane Hiz</td><td class="fail_det_grp" addr="b0_pa3_4">0</td></tr>
									<tr class=" "><td>[13]</td><td>bank0_PA3 bit[5]</td><td>No LVDS signal</td><td class="fail_det_grp" addr="b0_pa3_5">0</td></tr>
									<tr class=" "><td>[14]</td><td>bank0_PA3 bit[6]</td><td>OTP reload fail</td><td class="fail_det_grp" addr="b0_pa3_6">0</td></tr>
									<tr class=" "><td>[15]</td><td>bank0_PA3 bit[7]</td><td>OTP program fail</td><td class="fail_det_grp" addr="b0_pa3_7">0</td></tr>
									<tr class=" "><td>[16]</td><td>bank0_PA4 bit[0]</td><td>Glass broken</td><td class="fail_det_grp" addr="b0_pa4_0">0</td></tr>
									<tr class=" "><td>[17]</td><td>bank0_PA4 bit[1]</td><td>VDD over-voltage</td><td class="fail_det_grp" addr="b0_pa4_1">0</td></tr>
									<tr class=" "><td>[18]</td><td>bank0_PA4 bit[2]</td><td>VSP over-voltage</td><td class="fail_det_grp" addr="b0_pa4_2">0</td></tr>
									<tr class=" "><td>[19]</td><td>bank0_PA4 bit[3]</td><td>VSN over-voltage</td><td class="fail_det_grp" addr="b0_pa4_3">0</td></tr>
									<tr class=" "><td>[20]</td><td>bank0_PA4 bit[4]</td><td>PWM Fail</td><td class="fail_det_grp" addr="b0_pa4_4">0</td></tr>
									<tr class=" "><td>[21]</td><td>bank0_PA4 bit[5]</td><td>Flash Reload Error</td><td class="fail_det_grp" addr="b0_pa4_5">0</td></tr>
									<tr class=" "><td>[22]</td><td>bank0_PA4 bit[6]</td><td>Overheat Error indicator</td><td class="fail_det_grp" addr="b0_pa4_6">0</td></tr>
									<tr class=" "><td>[23]</td><td>bank0_PA4 bit[7]</td><td>Abnormal Gate signal</td><td class="fail_det_grp" addr="b0_pa4_7">0</td></tr>
									<tr class=" "><td>[24]</td><td>bank0_PA5 bit[0]</td><td>Abnormal Cascade Sync Signal</td><td class="fail_det_grp" addr="b0_pa5_0">0</td></tr>
									<tr class=" "><td>[25]</td><td>bank0_PA5 bit[1]</td><td>VGH Pumping Error</td><td class="fail_det_grp" addr="b0_pa5_1">0</td></tr>
									<tr class=" "><td>[26]</td><td>bank0_PA5 bit[2]</td><td>VGL Pumping Error</td><td class="fail_det_grp" addr="b0_pa5_2">0</td></tr>
									<tr class=" "><td>[27]</td><td>bank0_PA5 bit[3]</td><td>OTP checksum fail</td><td class="fail_det_grp" addr="b0_pa5_3">0</td></tr>
									
									<tr class=" "><td>Touch</td><td>bank0_PA6 bit[0]</td><td>WDT</td><td class="fail_det_grp" addr="b0_pa6_0">0</td></tr>
									<tr class=" "><td>Touch</td><td>bank0_PA6 bit[1]</td><td>ESD</td><td class="fail_det_grp" addr="b0_pa6_1">0</td></tr>
									<tr class=" "><td>Touch</td><td>bank0_PA6 bit[2]</td><td>DDCRC</td><td class="fail_det_grp" addr="b0_pa6_2">0</td></tr>
									<tr class=" "><td>Touch</td><td>bank0_PA6 bit[3]</td><td>TPCRC</td><td class="fail_det_grp" addr="b0_pa6_3">0</td></tr>
									<tr class=" "><td>Touch</td><td>bank0_PA6 bit[4]</td><td>GPP</td><td class="fail_det_grp" addr="b0_pa6_4">0</td></tr>
									<tr class=" "><td>Touch</td><td>bank0_PA6 bit[7]</td><td>SHORT</td><td class="fail_det_grp" addr="b0_pa6_7">0</td></tr>
									
									<tr class=" "><td>Touch</td><td>bank0_PA7 bit[0]</td><td>OPEN</td><td class="fail_det_grp" addr="b0_pa7_0">0</td></tr>
									<tr class=" "><td>Touch</td><td>bank0_PA7 bit[1]</td><td>Slave1 TP_SYNC pin status</td><td class="fail_det_grp" addr="b0_pa7_1">0</td></tr>
									<tr class=" "><td>Touch</td><td>bank0_PA7 bit[2]</td><td>Slave2 TP_SYNC pin status</td><td class="fail_det_grp" addr="b0_pa7_2">0</td></tr>
									<tr class=" "><td>Touch</td><td>bank0_PA7 bit[3]</td><td>DD_REG_CRC</td><td class="fail_det_grp" addr="b0_pa7_3">0</td></tr>
									<tr class=" "><td>Touch</td><td>bank0_PA7 bit[4]</td><td>POWERON</td><td class="fail_det_grp" addr="b0_pa7_4">0</td></tr>
									<tr class=" "><td>Touch</td><td>bank0_PA7 bit[5]</td><td>GPIO3</td><td class="fail_det_grp" addr="b0_pa7_5">0</td></tr>
									<tr class=" "><td>Touch</td><td>bank0_PA7 bit[6]</td><td>SLAVE1</td><td class="fail_det_grp" addr="b0_pa7_6">0</td></tr>
									<tr class=" "><td>Touch</td><td>bank0_PA7 bit[7]</td><td>SLAVE2</td><td class="fail_det_grp" addr="b0_pa7_7">0</td></tr>
								</tbody>
							</table>
						
						</div>
					</div><!-- row -->
				</div>
				
			</div>
			<div class="card card-info collapsed-card">
				<div class="card-header" data-card-widget="collapse">
					<h3 class="card-title">Checksum Calculate</h3>
					<div class="card-tools">
						<button type="button" class="btn btn-tool parser_expand"  title="Collapse">
							<i class="fas fa-plus"></i>
						</button>
					</div>
				</div>
				<div class="card-body">
					<div class="row" style="margin-bottom: 10px;">
						<div class="col-sm-1">
						
						</div>
						<div class="col-sm-11">
							<span style="background-color: #E3EB98">Paste hex value with comma and 0x</span>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-1">
							<button type="submit" class="btn btn-info ml-2" style="widht:100%; height: 200px;" id="checksum_cal">
								<i class="fas fa-virus"></i> Enter
							</button>
						</div>
						<div class="col-sm-6">
							<textarea class="" id="checksum_content" style="width:100%; height: 200px;"></textarea>
						</div>
						<div class="col-sm-5">
							<span>Result:&nbsp;</span>
							<span style="background-color: #E3EB98" id="checksum_result"></span>
						</div>
					</div>
				</div>	
			</div>
			<div class="card card-info collapsed-card">
				<div class="card-header" data-card-widget="collapse">
					<h3 class="card-title">900000A8 & 900000E4 Table</h3>
					<div class="card-tools">
						<button type="button" class="btn btn-tool parser_expand"  title="Collapse">
							<i class="fas fa-plus"></i>
						</button>
					</div>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-sm-6">
							<table class="table table-striped">
								<thead>
									<tr>
									  <th>Value</th>
									  <th>SCU_FLAG_RESET_EVENT (9000_00E4)</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>0x1</td>
										<td>(TP+DD) Power-on Reset</td>
									</tr>
									<tr>
										<td>0x2</td>
										<td>(TP) Hardware Reset1</td>
									</tr>
									<tr>
										<td>0x4</td>
										<td>(TP+DD) Hardware Reset2</td>
									</tr>
									<tr>
										<td>0x8</td>
										<td>(TP) ESD detect Reset</td>
									</tr>
									<tr>
										<td>0x10</td>
										<td>(TP) WDT Reset[4]</td>
									</tr>
									<tr>
										<td>0x20</td>
										<td>(N9)Reg. Driven Reset1 (0x14)</td>
									</tr>
									<tr>
										<td>0x40</td>
										<td>(AMBA)Reg. Driven Reset2 (0x0C)</td>
									</tr>
									<tr>
										<td>0x80</td>
										<td>(TP)Reg. Driven Reset3 (0x18)</td>
									</tr>
									<tr>
										<td>0x100</td>
										<td>(N9)Safe-mode normal exit</td>
									</tr>
									<tr>
										<td>0x200</td>
										<td>(TP)Safe-mode abnormal exit</td>
									</tr>
									<tr>
										<td>0x400</td>
										<td>(TP)Hardware self-protection reset</td>
									</tr>
									<tr>
										<td>0x800</td>
										<td>(TP)Slave-IC-triggered WDT reset[11]</td>
									</tr>
									<tr>			
										<td>0x1000</td>			
										<td>(TP)CRC-Checked-fail-triggered WDT reset[12]</td>		
									</tr>		
									<tr>			
										<td>0x2000</td>			
										<td>(TP)Conventional I2C software TP reset</td>		
									</tr>		
									<tr>			
										<td>0x4000</td>
										<td>(AMBA)Conventional I2C software AMBA platform reset</td>		
									</tr>
								</tbody>
							</table>
							<span style="color: red;">Note: reset events with “TP” will trigger “reload” to active.</span>
						</div>
						<div class="col-sm-6">
							<table class="table table-striped">
								<thead>
									<tr>
									  <th>Value</th>
									  <th>SCU_CS_CENTRAL_STATE (9000_00A8)</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>0x00</td>
										<td><p style="color:#cc3300">STATE_IDLE</p></td>		
									</tr>
									<tr>
										<td>0x01</td>
										<td><p style="color:#cc3300">STATE_WAIT_POWER_READY</p>(Flash is reset, wait 4ms)</td>
									</tr>
									<tr>
										<td>0x02</td>
										<td><p style="color:#cc3300">STATE_WAIT_FLASH_READY</p>(Flash is recoverying, wait 40us)</td>
									</tr>
									<tr>
										<td>0x03</td>
										<td><p style="color:#cc3300">STATE_BUS_READY</p>(Dummy State)</td>
									</tr>
									<tr>
										<td>0x04</td>
										<td><p style="color:#cc3300">STATE_RELOAD</p></td>
									</tr>
									<tr>
										<td>0x05</td>
										<td><p style="color:#cc3300">STATE_OSC_ACTIVE</p>(while PSL = 0~3)</td>
									</tr>
									<tr>
										<td>0x06</td>
										<td>STATE_TP_SLEEP_PREPARE (TP prepares to sleep)</td>
									</tr>
									<tr>
										<td>0x07</td>
										<td><p style="color:#cc3300">STATE_TP_SLEEP</p>(TP is sleeping, PSL = 4)</td>
									</tr>
									<tr>
										<td>0x08</td>
										<td>STATE_TP_SLEEP_WAKEUP (TP wakes up from STATE_TP_SLEEP)</td>
									</tr>
									<tr>
										<td>0x09</td>
										<td>STATE_ULTRA_LOW_POWER_PREPARE (Tp prepares to enter ULP-state)</td>
									</tr>
									<tr>
										<td>0x0A</td>
										<td><p style="color:#cc3300">STATE_ULTRA_LOW_POWER</p>(TP is under ULP-state, PSL = 5)</td>
									</tr>
									<tr>
										<td>0x0B</td>
										<td>STATE_ULTRA_LOW_POWER_WAKEUP (Tp leaves ULP-state)</td>
									</tr>
									<tr>
										<td>0x0C</td>
										<td><p style="color:#cc3300">STATE_SAFE_MODE</p> (CPU off, watchdog off, interface on)</td>
									</tr>
									<tr>
										<td>0x0D</td>
										<td>STATE_SAFE_MODE_RELEASE (Tp leave safe-mode state)</td>
									</tr>
									<tr>
										<td>0x0E</td>
										<td>STATE_SYSTEM_RESET (Tp is reseting)</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					
				</div>
				
			</div>
			<?php
				if($val_fae == 1){
					echo '<div class="card card-info collapsed-card" style="display: none;">';
				}
				else{
					echo '<div class="card card-info collapsed-card" style="display: block;">';
				}
			?>
			<!--<div class="card card-info collapsed-card">-->
				<div class="card-header" data-card-widget="collapse">
					<h3 class="card-title">DD REG LFD & Clock Settings</h3>
					<div class="card-tools">
						<button type="button" class="btn btn-tool parser_expand"  title="Collapse">
							<i class="fas fa-plus"></i>
						</button>
					</div>
				</div>
				<div class="card-body text-xs">
					<div class="row post mb-2">
						<div class="col-sm-1">
							<button type="submit" class="btn btn-warning" id="cal_lfd" style="width: 100%; height: 100%;">Enter</button>
						</div>
						<div class="col-sm-11">
							<table class="table s_table" style=" table-layout: fixed;">
								<thead>
									<tr>
										<th>DD reg Address</th>
										<th>bit [7]</th>
										<th>bit [6]</th>
										<th>bit [5]</th>
										<th>bit [4]</th>
										<th>bit [3]</th>
										<th>bit [2]</th>
										<th>bit [1]</th>
										<th>bit [0]</th>
										<th>Value (Hex)</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td colspan=10 style="font-weight: bold">Turn on LFD</td>
									</tr>
									<tr>
										<td style="background-color: #E3EB98;">C0h_bank1_PA1</td>
										<td colspan=3 style="background-color: #E3EB98">VRHP_LFD_M[2:0]</td>
										<td colspan=3 style="background-color: #E3EB98">VRHP_LFD_S[2:0] </td>
										<td style="background-color: #E3EB98">VGL_LFDEN</td>
										<td style="background-color: #E3EB98">VGH_LFDEN</td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td class="C0_bank1_pa1_on" bit="7" style="background-color: #E3EB98; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa1_on" bit="6" style="background-color: #E3EB98; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa1_on" bit="5" style="background-color: #E3EB98; color:red;" contenteditable>1</td>
										<td class="C0_bank1_pa1_on" bit="4" style="background-color: #E3EB98; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa1_on" bit="3" style="background-color: #E3EB98; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa1_on" bit="2" style="background-color: #E3EB98; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa1_on" bit="1" style="background-color: #E3EB98; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa1_on" bit="0" style="background-color: #E3EB98; color:red;" contenteditable>1</td>
										<td class="" id="C0_bank1_pa1_val_on" style="background-color: #E3EB98">0x21</td>
									</tr>
									<tr>
										<td style="background-color: #FAF6DD;">C0h_bank1_PA2</td>
										<td style="background-color: #FAF6DD;">LPWUG_VCOMEN</td>
										<td style="background-color: #FAF6DD;">LFDHZ</td>
										<td style="background-color: #FAF6DD;">VLFDMD_EN_M</td>
										<td style="background-color: #FAF6DD;">VLFDMD_EN_S</td>
										<td style="background-color: #FAF6DD;">VLFD_OP_EN_M</td>
										<td style="background-color: #FAF6DD;">VLFD_OP_EN_S</td>
										<td style="background-color: #FAF6DD;">VLFD_HZ_M</td>
										<td style="background-color: #FAF6DD;">VLFD_HZ_S</td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td class="C0_bank1_pa2_on" bit="7" style="background-color: #FAF6DD; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa2_on" bit="6" style="background-color: #FAF6DD; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa2_on" bit="5" style="background-color: #FAF6DD; color:red;" contenteditable>1</td>
										<td class="C0_bank1_pa2_on" bit="4" style="background-color: #FAF6DD; color:red;" contenteditable>1</td>
										<td class="C0_bank1_pa2_on" bit="3" style="background-color: #FAF6DD; color:red;" contenteditable>1</td>
										<td class="C0_bank1_pa2_on" bit="2" style="background-color: #FAF6DD; color:red;" contenteditable>1</td>
										<td class="C0_bank1_pa2_on" bit="1" style="background-color: #FAF6DD; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa2_on" bit="0" style="background-color: #FAF6DD; color:red;" contenteditable>0</td>
										<td class="" id="C0_bank1_pa2_val_on" style="background-color: #FAF6DD;">0x3C</td>
									</tr>
									<tr>
										<td style="background-color: #A6DBF1;">C0h_bank1_PA3</td>
										<td style="background-color: #A6DBF1;">DCHG</td>
										<td style="background-color: #A6DBF1;">CHGEN_INT_TP</td>
										<td style="background-color: #A6DBF1;">LPWUG</td>
										<td style="background-color: #A6DBF1;">LFD_EN</td>
										<td style="background-color: #A6DBF1;">VLFDMD_HZ_M</td>
										<td style="background-color: #A6DBF1;">VLFDMD_HZ_S</td>
										<td style="background-color: #A6DBF1;">VLFDMD_OP_EN_M</td>
										<td style="background-color: #A6DBF1;">VLFDMD_OP_EN_S</td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td class="C0_bank1_pa3_on" bit="7" style="background-color: #A6DBF1; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa3_on" bit="6" style="background-color: #A6DBF1; color:red;" contenteditable>1</td>
										<td class="C0_bank1_pa3_on" bit="5" style="background-color: #A6DBF1; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa3_on" bit="4" style="background-color: #A6DBF1; color:red;" contenteditable>1</td>
										<td class="C0_bank1_pa3_on" bit="3" style="background-color: #A6DBF1; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa3_on" bit="2" style="background-color: #A6DBF1; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa3_on" bit="1" style="background-color: #A6DBF1; color:red;" contenteditable>1</td>
										<td class="C0_bank1_pa3_on" bit="0" style="background-color: #A6DBF1; color:red;" contenteditable>1</td>
										<td class="" id="C0_bank1_pa3_val_on" style="background-color: #A6DBF1;">0x53</td>
									</tr>
									<tr>
										<td colspan=10 style="font-weight: bold">Turn off LFD</td>
									</tr>
									<tr>
										<td style="background-color: #E3EB98;">C0h_bank1_PA1</td>
										<td colspan=3 style="background-color: #E3EB98">VRHP_LFD_M[2:0]</td>
										<td colspan=3 style="background-color: #E3EB98">VRHP_LFD_S[2:0] </td>
										<td style="background-color: #E3EB98">VGL_LFDEN</td>
										<td style="background-color: #E3EB98">VGH_LFDEN</td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td class="C0_bank1_pa1_off" bit="7" style="background-color: #E3EB98; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa1_off" bit="6" style="background-color: #E3EB98; color:red;" contenteditable>1</td>
										<td class="C0_bank1_pa1_off" bit="5" style="background-color: #E3EB98; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa1_off" bit="4" style="background-color: #E3EB98; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa1_off" bit="3" style="background-color: #E3EB98; color:red;" contenteditable>1</td>
										<td class="C0_bank1_pa1_off" bit="2" style="background-color: #E3EB98; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa1_off" bit="1" style="background-color: #E3EB98; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa1_off" bit="0" style="background-color: #E3EB98; color:red;" contenteditable>0</td>
										<td class="" id="C0_bank1_pa1_val_off" style="background-color: #E3EB98">0x48</td>
									</tr>
									<tr>
										<td style="background-color: #FAF6DD;">C0h_bank1_PA2</td>
										<td style="background-color: #FAF6DD;">LPWUG_VCOMEN</td>
										<td style="background-color: #FAF6DD;">LFDHZ</td>
										<td style="background-color: #FAF6DD;">VLFDMD_EN_M</td>
										<td style="background-color: #FAF6DD;">VLFDMD_EN_S</td>
										<td style="background-color: #FAF6DD;">VLFD_OP_EN_M</td>
										<td style="background-color: #FAF6DD;">VLFD_OP_EN_S</td>
										<td style="background-color: #FAF6DD;">VLFD_HZ_M</td>
										<td style="background-color: #FAF6DD;">VLFD_HZ_S</td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td class="C0_bank1_pa2_off" bit="7" style="background-color: #FAF6DD; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa2_off" bit="6" style="background-color: #FAF6DD; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa2_off" bit="5" style="background-color: #FAF6DD; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa2_off" bit="4" style="background-color: #FAF6DD; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa2_off" bit="3" style="background-color: #FAF6DD; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa2_off" bit="2" style="background-color: #FAF6DD; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa2_off" bit="1" style="background-color: #FAF6DD; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa2_off" bit="0" style="background-color: #FAF6DD; color:red;" contenteditable>0</td>
										<td class="" id="C0_bank1_pa2_val_off" style="background-color: #FAF6DD;">0x00</td>
									</tr>
									<tr>
										<td style="background-color: #A6DBF1;">C0h_bank1_PA3</td>
										<td style="background-color: #A6DBF1;">DCHG</td>
										<td style="background-color: #A6DBF1;">CHGEN_INT_TP</td>
										<td style="background-color: #A6DBF1;">LPWUG</td>
										<td style="background-color: #A6DBF1;">LFD_EN</td>
										<td style="background-color: #A6DBF1;">VLFDMD_HZ_M</td>
										<td style="background-color: #A6DBF1;">VLFDMD_HZ_S</td>
										<td style="background-color: #A6DBF1;">VLFDMD_OP_EN_M</td>
										<td style="background-color: #A6DBF1;">VLFDMD_OP_EN_S</td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td class="C0_bank1_pa3_off" bit="7" style="background-color: #A6DBF1; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa3_off" bit="6" style="background-color: #A6DBF1; color:red;" contenteditable>1</td>
										<td class="C0_bank1_pa3_off" bit="5" style="background-color: #A6DBF1; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa3_off" bit="4" style="background-color: #A6DBF1; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa3_off" bit="3" style="background-color: #A6DBF1; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa3_off" bit="2" style="background-color: #A6DBF1; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa3_off" bit="1" style="background-color: #A6DBF1; color:red;" contenteditable>0</td>
										<td class="C0_bank1_pa3_off" bit="0" style="background-color: #A6DBF1; color:red;" contenteditable>0</td>
										<td class="" id="C0_bank1_pa3_val_off" style="background-color: #A6DBF1;">0x40</td>
									</tr>	
								</tbody>
							</table>
						</div>
						
					</div>
					<h5>SETCLOCK</h5>
					<div class="row post mb-2">
						<div class="col-sm-12">
							<table class="table s_table" style=" table-layout: fixed;">
								<thead>
									<tr>
										<th>DD reg Address</th>
										<th>bit [7]</th>
										<th>bit [6]</th>
										<th>bit [5]</th>
										<th>bit [4]</th>
										<th>bit [3]</th>
										<th>bit [2]</th>
										<th>bit [1]</th>
										<th>bit [0]</th>
										<th>Value (Hex)</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td colspan=10 style="font-weight: bold">Single IC: Internal timing: PLL -> OSC</td>
									</tr>
									<tr>
										<td style="background-color: #E3EB98;">CBh_bank0_PA12</td>
										<td style="background-color: #E3EB98"> - </td>
										<td style="background-color: #E3EB98"> - </td>
										<td style="background-color: #E3EB98">SPS_EN_1</td>
										<td style="background-color: #E3EB98">TRACK_MODE_SEL</td>
										<td style="background-color: #E3EB98">HW_TRACK_EN</td>
										<td style="background-color: #E3EB98">OSC_DD_OSC_SEL</td>
										<td colspan=2 style="background-color: #E3EB98">AONFS[1:0]</td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td class="CB_bank0_pa12" bit="7" style="background-color: #E3EB98;">0</td>
										<td class="CB_bank0_pa12" bit="6" style="background-color: #E3EB98;">0</td>
										<td class="CB_bank0_pa12" bit="5" style="background-color: #E3EB98;">0</td>
										<td class="CB_bank0_pa12" bit="4" style="background-color: #E3EB98;">0</td>
										<td class="CB_bank0_pa12" bit="3" style="background-color: #E3EB98;">0</td>
										<td class="CB_bank0_pa12" bit="2" style="background-color: #E3EB98;">1</td>
										<td class="CB_bank0_pa12" bit="1" style="background-color: #E3EB98;">0</td>
										<td class="CB_bank0_pa12" bit="0" style="background-color: #E3EB98;">1</td>
										<td class="" id="CB_bank0_pa12_val_single" style="background-color: #E3EB98;">0x05</td>
									</tr>
									<tr>
										<td colspan=10 style="font-weight: bold">Cascade IC: Internal timing: Keep PLL</td>
									</tr>
									<tr>
										<td style="background-color: #A6DBF1;">CBh_bank0_PA12</td>
										<td style="background-color: #A6DBF1"> - </td>
										<td style="background-color: #A6DBF1"> - </td>
										<td style="background-color: #A6DBF1">SPS_EN_1</td>
										<td style="background-color: #A6DBF1">TRACK_MODE_SEL</td>
										<td style="background-color: #A6DBF1">HW_TRACK_EN</td>
										<td style="background-color: #A6DBF1">OSC_DD_OSC_SEL</td>
										<td colspan=2 style="background-color: #A6DBF1">AONFS[1:0]</td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td class="CB_bank0_pa12" bit="7" style="background-color: #A6DBF1;">0</td>
										<td class="CB_bank0_pa12" bit="6" style="background-color: #A6DBF1;">0</td>
										<td class="CB_bank0_pa12" bit="5" style="background-color: #A6DBF1;">0</td>
										<td class="CB_bank0_pa12" bit="4" style="background-color: #A6DBF1;">0</td>
										<td class="CB_bank0_pa12" bit="3" style="background-color: #A6DBF1;">0</td>
										<td class="CB_bank0_pa12" bit="2" style="background-color: #A6DBF1;">0</td>
										<td class="CB_bank0_pa12" bit="1" style="background-color: #A6DBF1;">0</td>
										<td class="CB_bank0_pa12" bit="0" style="background-color: #A6DBF1;">1</td>
										<td class="" id="CB_bank0_pa12_val_single" style="background-color: #A6DBF1;">0x01</td>
									</tr>	
								</tbody>
							</table>
						</div>
						<div class="col-sm-12">
							<table class="table s_table" style=" table-layout: fixed;">
								<thead>
									<tr>
										<th>DD reg Address</th>
										<th>bit [7]</th>
										<th>bit [6]</th>
										<th>bit [5]</th>
										<th>bit [4]</th>
										<th>bit [3]</th>
										<th>bit [2]</th>
										<th>bit [1]</th>
										<th>bit [0]</th>
										<th>Value (Hex)</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td colspan=10 style="font-weight: bold">PLL Settings</td>
									</tr>
									<tr>
										<td style="background-color: #E3EB98;">CBh_bank2_PA10</td>
										<td colspan=8 style="background-color: #E3EB98">PLL_REF_CLK_DIV[7:0]</td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td class="CB_bank2_pa10" bit="7" style="background-color: #E3EB98;">0</td>
										<td class="CB_bank2_pa10" bit="6" style="background-color: #E3EB98;">0</td>
										<td class="CB_bank2_pa10" bit="5" style="background-color: #E3EB98;">0</td>
										<td class="CB_bank2_pa10" bit="4" style="background-color: #E3EB98;">1</td>
										<td class="CB_bank2_pa10" bit="3" style="background-color: #E3EB98;">1</td>
										<td class="CB_bank2_pa10" bit="2" style="background-color: #E3EB98;">0</td>
										<td class="CB_bank2_pa10" bit="1" style="background-color: #E3EB98;">0</td>
										<td class="CB_bank2_pa10" bit="0" style="background-color: #E3EB98;">0</td>
										<td class="" id="CB_bank2_pa10_val" style="background-color: #E3EB98;">0x18</td>
									</tr>
									<tr>
										<td style="background-color: #FAF6DD;">CBh_bank2_PA15</td>
										<td style="background-color: #FAF6DD">-</td>
										<td colspan=4 style="background-color: #FAF6DD">TP_PLL_SEL_SCI[3:0]</td>
										<td colspan=3 style="background-color: #FAF6DD">TP_PLL_D_SCI[2:0]</td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td class="CB_bank2_pa15" bit="7" style="background-color: #FAF6DD;">0</td>
										<td class="CB_bank2_pa15" bit="6" style="background-color: #FAF6DD;">0</td>
										<td class="CB_bank2_pa15" bit="5" style="background-color: #FAF6DD;">0</td>
										<td class="CB_bank2_pa15" bit="4" style="background-color: #FAF6DD;">1</td>
										<td class="CB_bank2_pa15" bit="3" style="background-color: #FAF6DD;">1</td>
										<td class="CB_bank2_pa15" bit="2" style="background-color: #FAF6DD;">0</td>
										<td class="CB_bank2_pa15" bit="1" style="background-color: #FAF6DD;">1</td>
										<td class="CB_bank2_pa15" bit="0" style="background-color: #FAF6DD;">1</td>
										<td class="" id="CB_bank2_pa15_val" style="background-color: #FAF6DD;">0x1B</td>
									</tr>
									<tr>
										<td style="background-color: #A6DBF1;">CBh_bank2_PA16</td>
										<td style="background-color: #A6DBF1">PLL_MODE_SEL</td>
										<td style="background-color: #A6DBF1">PLL_TEST_VCO</td>
										<td style="background-color: #A6DBF1">PLL_DIV_SEL</td>
										<td colspan=2 style="background-color: #A6DBF1">TP_PLL_SEL_LF[1:0]</td>
										<td colspan=2 style="background-color: #A6DBF1">TP_PLL_SEL_CP[1:0]</td>
										<td style="background-color: #A6DBF1">TP_PLL_SEL_CLK1</td>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td class="CB_bank2_pa16" bit="7" style="background-color: #A6DBF1;">1</td>
										<td class="CB_bank2_pa16" bit="6" style="background-color: #A6DBF1;">0</td>
										<td class="CB_bank2_pa16" bit="5" style="background-color: #A6DBF1;">0</td>
										<td class="CB_bank2_pa16" bit="4" style="background-color: #A6DBF1;">1</td>
										<td class="CB_bank2_pa16" bit="3" style="background-color: #A6DBF1;">0</td>
										<td class="CB_bank2_pa16" bit="2" style="background-color: #A6DBF1;">0</td>
										<td class="CB_bank2_pa16" bit="1" style="background-color: #A6DBF1;">0</td>
										<td class="CB_bank2_pa16" bit="0" style="background-color: #A6DBF1;">1</td>
										<td class="" id="CB_bank2_pa16_val" style="background-color: #A6DBF1;">0x91</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col-sm-3">
							<?php 
								echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/5478_dd_pll.PNG" ></img>'."\n";
							?>
						</div>
						<div class="col-sm-6 text-sm">
							<b>OSC clock = 90 MHz</b> <br>
							<span>1. Calculate PLL reference clock (CBh bank2 P10)</span>  <br>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;PLL reference clock = 90M / <b style="background-color: #E3EB98;">PLL_REF_CLK_DIV[7:0]</b></span> <br>
							<span style="color: #7E634D;">&nbsp;&nbsp;&nbsp;&nbsp;PLL reference clock = 90M / 24 = 3.75M</span> <br> <br>
							<span>2. Calculate PLL frequency (CBh bank2 P15). Refer to left table for DIV.</span>  <br>
							<span>&nbsp;&nbsp;&nbsp;&nbsp;PLL frequency = 
								2 * PLL reference clock * <b style="background-color: #FAF6DD;">TP_PLL_SEL_SCI DIV</b> * <b style="background-color: #FAF6DD;">TP_PLL_D_SCI DIV</b>
							</span> <br>
							<span style="color: #7E634D;">&nbsp;&nbsp;&nbsp;&nbsp;PLL frequency = 2 * 3.75M * 3 * 4 = 90 M</span> <br> <br>
							
							<span>3. Calculate SC_CLK1 frequency (CBh bank2 P16).</span>  <br>
							<span>&nbsp;&nbsp;&nbsp;&nbsp; If <b style="background-color: #A6DBF1;">TP_PLL_SEL_CLK1</b> == 1, SC_CLK1 = PLL frequency / (2 * <b style="background-color: #FAF6DD;">TP_PLL_SEL_SCI DIV</b>)</span> <br>
							<span>&nbsp;&nbsp;&nbsp;&nbsp; If <b style="background-color: #A6DBF1;">TP_PLL_SEL_CLK1</b> == 0, SC_CLK1 = PLL frequency / (<b style="background-color: #FAF6DD;">TP_PLL_SEL_SCI DIV</b>)</span> <br>
							<span style="color: #7E634D;">&nbsp;&nbsp;&nbsp;&nbsp;SC_CLK1 = 90 M / (2 * 3) = 15 MHz</span> <br> <br>
						</div>
					</div>
					
				</div>
			</div>
			<div class="card card-info collapsed-card">
				<div class="card-header" data-card-widget="collapse">
					<h3 class="card-title">DD Study</h3>
					<div class="card-tools">
						<button type="button" class="btn btn-tool parser_expand"  title="Collapse">
							<i class="fas fa-plus"></i>
						</button>
					</div>
				</div>
				<div class="card-body">
					<blockquote class="quote-info" style="background-color: #e6f7ff;">
						<h6>IC version</h6>
						<p><code class="highlighter-rouge">0xC4 bank0 PA1</code></p>
					</blockquote>
							
					<blockquote class="quote-info" style="background-color: #e6f7ff;">
						<h6>Bist Mode</h6>
						<p>LVDS 正常，僅是讓圖切換<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- 進入BIST mode <code class="highlighter-rouge">0xCF bank0 PA1</code> 寫0xFF<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- 離開BIST mode <code class="highlighter-rouge">0xCF bank0 PA1</code> 寫0x00<br/>
						將LVDS斷掉(關閉RXEN)<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- 進入BIST mode <code class="highlighter-rouge">0xDA bank0 PA1</code> bit7 寫0<br/>
						Bist mode切圖<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- fixed 在1張圖 <code class="highlighter-rouge">0xB2 bank3 PA1</code>  寫0x01<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- 切白圖 <code class="highlighter-rouge">0xB2 bank3 PA2</code> 寫0x11<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- 切color bar <code class="highlighter-rouge">0xB2 bank3 PA2</code> 寫0x16<br/>
						</p>
					</blockquote>
					<blockquote class="quote-info" style="background-color: #e6f7ff;">
						<h6>D-sample</h6>
						<p>
						D-sample = 11b<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- <code class="highlighter-rouge">0xB0 bank1 PA4</code> 寫0x0F<br/>
						D-sample = 00b<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- <code class="highlighter-rouge">0xB0 bank1 PA4</code> 寫0x0C<br/>
						Notes:<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- 01b: initial frame<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- initial frame的時間為<code class="highlighter-rouge">0xB2 bank0</code> 的以下相加<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. PA11[2:0] INIT_SET_0[2:0]<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. PA12[2:0] INIT_SET_1[2:0]<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. PA13[2:0] INIT_SET_2[2:0]<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 當INIT_SET_0/1/2為0的時候，則無d-sample 01b狀態<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Sleep in的時候，看的是END_SET_0/1/2 [2:0]<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. PA11[6:4] END_SET_0[2:0]<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. PA12[6:4] END_SET_1[2:0]<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. PA13[6:4] END_SET_2[2:0]<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- 10b: blanking (掃黑)<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- power on/sleep out 的black scan的時間為 <code class="highlighter-rouge">0xB2 bank0 PA23 [1:0]</code>(BLK_FRM[1:0]) +1
						</p>
					</blockquote>
					<blockquote class="quote-info" style="background-color: #e6f7ff;">
						<h6>DD register address</h6>
						<p>
						<strong>0x<font color=#cc0000>3</font>00<font color=#009900>E5</font><font color=#ff0066>0</font><font color=#0033cc>04</font></strong><br/>
						&nbsp;&nbsp;- <font color=#cc0000>Bit[31:28]</font><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- 3: master<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- C: slave1<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- D: slave2<br/>
						&nbsp;&nbsp;- <font color=#009900>Bit[19:12]</font><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- DD regsiter<br/>
						&nbsp;&nbsp;- <font color=#ff0066>Bit[11:8]</font><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- 0: bank0<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- 4: bank1<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- 8: bank2<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- C: bank3<br/>
						&nbsp;&nbsp;- <font color=#0033cc>Bit[7:0]</font><br/>
						&nbsp;&nbsp;&nbsp;&nbsp;- PA start from. (Should be multuplied by 4)<br/>
						</p>
					</blockquote>
					<blockquote class="quote-info" style="background-color: #e6f7ff;">
						<h6>Hardware EMI</h6>
						<p><code class="highlighter-rouge">0xE7 bank0 PA22</code> bit6 寫1開</p>
					</blockquote>
					<blockquote class="quote-info" style="background-color: #e6f7ff;">
						<h6>OSC展頻</h6>
						<p><code class="highlighter-rouge">0xD4 bank1 PA1 bit0</code>(DD_SSC_EN)寫1開</p>
					</blockquote>
					<blockquote class="quote-info" style="background-color: #e6f7ff;">
						<h6>Dynamic Hsync開關</h6>
						<p><code class="highlighter-rouge">0xE7 bank0 PA22 bit[6]</code></p>
					</blockquote>
					<blockquote class="quote-info" style="background-color: #e6f7ff;">
						<h6>導出DD OSC</h6>
						<p>
						DD debut port<br/>
						<code class="highlighter-rouge">
						&nbsp;&nbsp;&nbsp;&nbsp;0xBE bank0 PA1寫0x80<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;0xBE bank0 PA3寫0x89 (osc_div8_clk)<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;0xD9 bank0 PA5寫0x3F (從vsync_fb)<br/>
						</code>
						TP debug port<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;N9 platform, 0x00 <br/>
						&nbsp;&nbsp;&nbsp;&nbsp;[4] clk_rst_gen_debug_dd_clk_div16 DD OSC --> 是div 32<br/>
						</p>
					</blockquote>
					<blockquote class="quote-info" style="background-color: #e6f7ff;">
						<h6>導出TP OSC</h6>
						<p>
						TP debug port<br/>
						&nbsp;&nbsp;&nbsp;&nbsp;N9 platform, 0x00 <br/>
						&nbsp;&nbsp;&nbsp;&nbsp;<code class="highlighter-rouge">[5] clk_rst_gen_debug_cclk_div16</code> TP_OSC<br/>
						</p>
					</blockquote>
					<blockquote class="quote-info" style="background-color: #e6f7ff;">
						<h6>用touch register 導出DD debug port</h6>
						<p>
						1. 設定OE和PROB，一次一個byte<br/>
						2. 結果會在SCU_DD_TP_DATA_OUT (0x900001E8 1-byte)
						</p>
					</blockquote>
					<blockquote class="quote-info" style="background-color: #e6f7ff;">
						<h6>DD debug port</h6>
						<p>
- <code class="highlighter-rouge">0xBE bank0 PA1</code><br/>
&nbsp;&nbsp;&nbsp;&nbsp;0x01: TEST_OE (寫PA2)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;0x80: TEST_OE1(寫PA3)<br/>
- <code class="highlighter-rouge">0xD9 bank0</code><br/>
&nbsp;&nbsp;&nbsp;&nbsp;Pin<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PA2: <strong>CABC</strong><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PA3: <strong>TE</strong><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PA4: <strong>HSYNC_FB</strong><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PA5: <strong>VSYNC_FB</strong><br/>
&nbsp;&nbsp;&nbsp;&nbsp;Value (1-byte)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bit[7]: 0 for OE; 1 for OE1<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bit[6:4]: bit<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bit[3:0]: F to represent debug port.<br/>
- Examples<br/>
&nbsp;&nbsp;&nbsp;&nbsp;導出DD_TPEN<br/>
    <code class="highlighter-rouge">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fun_himax_ahb_ddreg_byte_write(0xBE, 0x00, 0x01, 0x01);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fun_himax_ahb_ddreg_byte_write(0xBE, 0x00, 0x02, 0x96);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fun_himax_ahb_ddreg_byte_write(0xD9, 0x00, 0x05, 0x3F); // Vsync_FB<br/>
    </code>
&nbsp;&nbsp;&nbsp;&nbsp;導出VSYNC<br/>
    <code class="highlighter-rouge">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fun_himax_ahb_ddreg_byte_write(0xBE, 0x00, 0x01, 0x01);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fun_himax_ahb_ddreg_byte_write(0xBE, 0x00, 0x02, 0xD2);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fun_himax_ahb_ddreg_byte_write(0xD9, 0x00, 0x05, 0x7F); // Vsync_FB<br/>
    </code>
&nbsp;&nbsp;&nbsp;&nbsp;導出D-sample<br/>
    <code class="highlighter-rouge">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fun_himax_ahb_ddreg_byte_write(0xBE, 0x00, 0x01, 0x80);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fun_himax_ahb_ddreg_byte_write(0xBE, 0x00, 0x03, 0x93);<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fun_himax_ahb_ddreg_byte_write(0xD9, 0x00, 0x04, 0x8F); // Hsync_FB,bit[0]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fun_himax_ahb_ddreg_byte_write(0xD9, 0x00, 0x05, 0x9F); // Vsync_FB,bit[1]<br/>
	</code>
						</p>
					</blockquote>
					
				</div>	
			</div>
			
		</section>
		
    <!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
  
  
<?php 
	//echo '  <script src="'.base_url().'assets/js/FileSaver.min.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/js/oem_debug.js"></script>'."\n";
	
	if($val_fae == 0){
		echo '  <script src="'.base_url().'assets/js/oem_rom.js"></script>'."\n";
	}
?>