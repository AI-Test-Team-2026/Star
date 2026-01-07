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
										<td style="background-color: #ccff66"><b>bit [4]</b>  dd_ultra_low_power_en</td>			
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

			<?php 
			echo $dd_rom_convert;
			?>
			<?php 
			echo $gamma_bin;
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
							<span style="background-color: #E3EB98">Paste E5_00 bank0 (length 16)</span>
							<span >E5_bank0 PA2~9 is dd-related. PA10~12 is touch-related</span>
							<textarea class="" id="fail_e5_bank0" style="width: 100%;height: 50px;"></textarea>
						</div>
						<div class="col-sm-6">
							<span style="background-color: #E3EB98">Paste E5_00 bank1(length 16)</span>
							<span >E5_bank1 PA1~8 is dd-related. PA9~11 is touch-related</span>
							<textarea class="" id="fail_e5_bank1" style="width: 100%;height: 50px;"></textarea>
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
						<div class="col-sm-12 text-xs">
							<table class="table table-striped" style="text-align: center">
								<thead>
									<td colspan="4">
										<b> E5_bank0</b> <br>
										PA1
									</td>
								</thead>
								<tbody>
									<tr><td>FAIL_DET[n]</td><td>DD PA Address</td><td>Function</td><td>Status</td></tr>
									<tr class=" "><td>[0]</td><td>bank0_PA1 bit[0]</td><td>FAIL_DET_EN</td><td class="fail_det_grp" addr="b0_pa1_0">0</td></tr>
									<tr class=" "><td>[1]</td><td>bank0_PA1 bit[1]</td><td>FAIL_DET_FLAG_CLEAR</td><td class="fail_det_grp" addr="b0_pa1_1">0</td></tr>
									<tr class=" "><td>[2]</td><td>bank0_PA1	bit[2]</td><td>FAIL_DET_RECORD_MODE</td><td class="fail_det_grp" addr="b0_pa1_2">0</td></tr>
									<tr class=" "><td>[3]</td><td>bank0_PA1	bit[3]</td><td>FAIL_PULSE_FIFTY</td><td class="fail_det_grp" addr="b0_pa1_3">0</td></tr>
									<tr class=" "><td>[4]</td><td>bank0_PA1	bit[4]</td><td>GSP_MODE_POL</td><td class="fail_det_grp" addr="b0_pa1_4">0</td></tr>
									<tr class=" "><td>[5]</td><td>bank0_PA1	bit[5]</td><td>DC_MODE_POL</td><td class="fail_det_grp" addr="b0_pa1_5">0</td></tr>
									<tr class=" "><td>[6]</td><td>bank0_PA1	bit[6]</td><td>OUTPUT_MODE</td><td class="fail_det_grp" addr="b0_pa1_6">0</td></tr>
									<tr class=" "><td>[7]</td><td>bank0_PA1	bit[7]</td><td>FAIL_PULSE_INV</td><td class="fail_det_grp" addr="b0_pa1_7">0</td></tr>
								</tbody>
							</table>
						</div>
						<div class="col-sm-6 text-xs">
							<table class="table table-striped" style="text-align: center">
								<thead>
									<td colspan="4">
										<b> E5_bank0</b> <br>
										PA2~9 (Status)
									</td>
								</thead>
								<tbody>
									<tr><td>FAIL_DET[n]</td><td>DD PA Address</td><td>Function</td><td>Status</td></tr>
									<?php
									$total_pa_bit = (8+4)*8;
									
									
									// PA2~PA9 DD status
									// PA10~13 TP status
									$tmp_start_pa = 2;
									$tmp_start_bit = 0;
									for ($x = 0; $x < $total_pa_bit; $x++) {
										echo '<tr class=" "><td>['.$x.']</td><td>bank0_PA'.$tmp_start_pa.' bit['.$tmp_start_bit.']</td><td>'.$array_fail_det[$x].'</td><td class="fail_det_grp" addr="b0_pa'.$tmp_start_pa.'_'.$tmp_start_bit.'">0</td></tr>';
										
										$tmp_start_bit +=1;
										
										if($tmp_start_bit % 8 == 0 && $x> 0){
											$tmp_start_pa+=1;
											$tmp_start_bit = 0;
										}
										
									} 

									?>
								</tbody>
							</table>
						</div>
						<div class="col-sm-6 text-xs">
							<table class="table table-striped" style="text-align: center">
								<thead>
									<td colspan="4">
										<b> E5_bank1</b> <br>
										PA1~20 (OE)
									</td>
								</thead>
								<tbody>
									<tr><td>FAIL_DET[n]</td><td>DD PA Address</td><td>Function</td><td>Status</td></tr>
									<?php
									// PA1~PA20
									$tmp_start_pa = 1;
									$tmp_start_bit = 0;
									for ($x = 0; $x < $total_pa_bit; $x++) {
										echo '<tr class=" "><td>['.$x.']</td><td>bank1_PA'.$tmp_start_pa.' bit['.$tmp_start_bit.']</td><td>'.$array_fail_det[$x].'</td><td class="fail_det_grp" addr="b1_pa'.$tmp_start_pa.'_'.$tmp_start_bit.'">0</td></tr>';
										
										$tmp_start_bit +=1;
										
										if($tmp_start_bit % 8 == 0 && $x> 0){
											$tmp_start_pa+=1;
											$tmp_start_bit = 0;
										}
										
									} 

									?>
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
					<h3 class="card-title">PLL Clock</h3>
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
							<span style="background-color: #E3EB98">Paste CBh bank3 PA0~PA16 (len: 20)</span>
						</div>
					</div>
					<div class="row mb-2 post">
						<div class="col-sm-1">
							<button type="submit" class="btn btn-info ml-2" style="widht:100%; height: 100px;" id="pa0402_pll_cal">
								<i class="fas fa-virus"></i> Enter
							</button>
						</div>
						<div class="col-sm-7">
							<textarea class="" id="pa0402_pll_content" style="width:100%; height: 100px;"></textarea>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
								<label for="form_project_name">DD OSC(MHz)</label>
								<div class="input-group mb-3">
									<div class="input-group-prepend">
										<span class="input-group-text">
											<i class="fas fa-hamsa"></i>
										</span>
									</div>
									<input type="text" class="form-control" id="pa0402_pll_dd_osc_input" placeholder="90" autocomplete="off" value="90">
								</div>
							</div>
						</div>
					</div>
					<div class="row">	
						<div class="col-sm-12">
							<?php
							//echo '<object type="image/svg+xml" style="width: 100%" data="'.base_url().'assets/img/PA0402_PLL_edit.svg"></object>';
							echo $pll_0402;
							?>

						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<blockquote class="quote-warning" style="background-color: ;">
							<p><b>DIV0: </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;m: CBh bank3 PA3[7:4] + 2 <br/>
&nbsp;&nbsp;&nbsp;&nbsp;s: CBh bank3 PA3[3:0] + 2
							</p>
							<p><b>DIV7: </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;m: 2^(CBh bank3 PA4[7:6]) <br/>
&nbsp;&nbsp;&nbsp;&nbsp;s: 2^(CBh bank3 PA5[7:6]) 
							</p>
							<p><b>DIV1: </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;m: 2^(CBh bank3 PA4[1:0]) <br/>
&nbsp;&nbsp;&nbsp;&nbsp;s: 2^(CBh bank3 PA5[1:0]) 
							</p>	
							<p><b>DIV2: </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;m: 2^(CBh bank3 PA4[3:2]) <br/>
&nbsp;&nbsp;&nbsp;&nbsp;s: 2^(CBh bank3 PA5[3:2]) 
							</p>
							<p><b>DIV6: </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;m: 2^(CBh bank3 PA4[5:4]) <br/>
&nbsp;&nbsp;&nbsp;&nbsp;s: 2^(CBh bank3 PA5[5:4]) 
							</p>		
							<p><b>DIV4: </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;m: CBh bank3 PA15[7:4] + 2<br/>
&nbsp;&nbsp;&nbsp;&nbsp;s: CBh bank3 PA15[3:0] + 2
							</p>					
							<p><b>DIV5: </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;m: CBh bank3 PA16[6:4] + 2<br/>
&nbsp;&nbsp;&nbsp;&nbsp;s: CBh bank3 PA16[2:0] + 2
							</p>
							<p><b>DIV3: </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;m: CBh bank3 PA7[4:0] + 8<br/>
&nbsp;&nbsp;&nbsp;&nbsp;s: CBh bank3 PA8[4:0] + 8
							</p>														
						</div>
						<div class="col-sm-6">
							<blockquote class="quote-info" style="background-color: ;">
							<p><b>MUX1: </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;m: CBh bank3 PA2[7]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;s: CBh bank3 PA2[6]
							</p>
							<p><b>MUX2: </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;m: CBh bank3 PA6[5] <br/>
&nbsp;&nbsp;&nbsp;&nbsp;s: CBh bank3 PA6[4] 
							</p>
							<p><b>MUX3: </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;m: CBh bank3 PA2[5] <br/>
&nbsp;&nbsp;&nbsp;&nbsp;s: CBh bank3 PA2[4] 
							</p>	
							<p><b>MUX4: </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;m: CBh bank3 PA2[3] <br/>
&nbsp;&nbsp;&nbsp;&nbsp;s: CBh bank3 PA2[2] 
							</p>
							<p><b>MUX5: </b><br/>
&nbsp;&nbsp;&nbsp;&nbsp;m: CBh bank3 PA2[1] <br/>
&nbsp;&nbsp;&nbsp;&nbsp;s: CBh bank3 PA2[0] 
							</p>									
						</div>
					
					</div>
				</div>	
			</div>
			<div class="card card-info collapsed-card">
				<div class="card-header" data-card-widget="collapse">
					<h3 class="card-title">VR Cal</h3>
					<div class="card-tools">
						<button type="button" class="btn btn-tool parser_expand"  title="Collapse">
							<i class="fas fa-plus"></i>
						</button>
					</div>
				</div>
				<div class="card-body">
					<div class="row mb-5">	
						<div class="col-sm-2">
							<p>PA0402 Input DC word 2</p>
							<div class="input-group input-group-sm">
								<input type="text" class="form-control" value="0x695B32DC" id="pa0402_input_dc_w2">
								<span class="input-group-append">
									<button type="button" class="btn btn-info btn-flat pa0402_input_dc">Enter</button>
								</span>
							</div>	
						</div>
						<div class="col-sm-2">
							<p>PA0402 Input DC word 3</p>
							<div class="input-group input-group-sm">
								<input type="text" class="form-control" value="0x2721C8B0" id="pa0402_input_dc_w3">
								<span class="input-group-append">
									<button type="button" class="btn btn-info btn-flat pa0402_input_dc">Enter</button>
								</span>
							</div>	
						</div>
						<div class="col-sm-4">
							<div class="form-group">
                   				<label class="col-form-label" for="vr_0402_output_status_2"><i class="fas fa-check"></i> PA0402 Output DC word 2</label>
                    			<input type="text" class="form-control is-invalid" id="vr_0402_output_status_2" placeholder="" readonly>
                  			</div>
						</div>
						<div class="col-sm-4">
							<div class="form-group">
                   				<label class="col-form-label" for="vr_0402_output_status_3"><i class="fas fa-check"></i> PA0402 Output DC word 3</label>
                    			<input type="text" class="form-control is-invalid" id="vr_0402_output_status_3" placeholder="" readonly>
                  			</div>
						</div>
					</div>
					<div class="row mb-5">
						<div class="col-sm-1">
							<button type="button" class="btn btn-info" style="height: 100%;" id="pa0402_vr_cal" disabled="disabled">Calculate</button>
						</div>
						<div class="col-sm-11">
							<?php
								echo $vr_0402;
							?>
						</div>
					</div>
					<!-- *******-->
					<div class="row mb-5">	
						<div class="col-sm-2">
							<p>PA0412 Input DC word 2</p>
							<div class="input-group input-group-sm">
								<input type="text" class="form-control" value="0x044F044C" id="pa0412_input_dc_w2">
								<span class="input-group-append">
									<button type="button" class="btn btn-info btn-flat pa0412_input_dc">Enter</button>
								</span>
							</div>	
						</div>
						<div class="col-sm-2">
							<p>PA0412 Input DC word 4</p>
							<div class="input-group input-group-sm">
								<input type="text" class="form-control" value="0x00DB4210" id="pa0412_input_dc_w4">
								<span class="input-group-append">
									<button type="button" class="btn btn-info btn-flat pa0412_input_dc">Enter</button>
								</span>
							</div>	
						</div>
						<div class="col-sm-2">
							<p>PA0412 Input DC word 11</p>
							<div class="input-group input-group-sm">
								<input type="text" class="form-control" value="0x00010903" id="pa0412_input_dc_w11">
								<span class="input-group-append">
									<button type="button" class="btn btn-info btn-flat pa0412_input_dc">Enter</button>
								</span>
							</div>	
						</div>
						<div class="col-sm-2">
							<div class="form-group">
                   				<label class="col-form-label" for="vr_0412_output_status_2"><i class="fas fa-check"></i> PA0412 Output DC word 2</label>
                    			<input type="text" class="form-control is-invalid" id="vr_0412_output_status_2" placeholder="" readonly>
                  			</div>
						</div>
						<div class="col-sm-2">
							<div class="form-group">
                   				<label class="col-form-label" for="vr_0412_output_status_4"><i class="fas fa-check"></i> PA0412 Output DC word 4</label>
                    			<input type="text" class="form-control is-invalid" id="vr_0412_output_status_4" placeholder="" readonly>
                  			</div>
						</div>
						<div class="col-sm-2">
							<div class="form-group">
                   				<label class="col-form-label" for="vr_0412_output_status_11"><i class="fas fa-check"></i> PA0412 Output DC word 11</label>
                    			<input type="text" class="form-control is-invalid" id="vr_0412_output_status_11" placeholder="" readonly>
                  			</div>
						</div>
					</div>
					<div class="row mb-2">
						<div class="col-sm-1">
							<button type="button" class="btn btn-info" style="height: 100%;" id="pa0412_vr_cal" disabled="disabled">Calculate</button>
						</div>
						<div class="col-sm-11">
							<?php
								echo $vr_0412;
							?>
						</div>
					</div>
				</div>
									
			</div>
			<div class="card card-info collapsed-card">
				<div class="card-header" data-card-widget="collapse">
					<h3 class="card-title">0402 FD SRAM Parser</h3>
					<div class="card-tools">
						<button type="button" class="btn btn-tool parser_expand"  title="Collapse">
							<i class="fas fa-plus"></i>
						</button>
					</div>
				</div>
				<div class="card-body">
					<div class="row mb-4">
						<div class="col-sm-1">
							<button type="submit" class="btn btn-info ml-2" style="widht:100%; height: 100px;" id="pa0402_fd_sram_cal">
								<i class="fas fa-virus"></i> Enter
							</button>
						</div>
						<div class="col-sm-11">
							<span style="background-color: #E3EB98">FD SRAM 0x10007500 size (1kB)</span>
							<textarea class="" id="pa0402_fd_sram_content" style="width:100%; height: 100px;"></textarea>
						</div>
					</div>
					<div class="row post">
						<div class="col-sm-6">
							<table class="table table-striped text-xs">
									<thead>
										<tr>
										  <th>MAIN ITEM (Status)</th>
										  <th>Addr</th>
										  <th>Byte3</th>
										  <th>Byte2</th>
										  <th>Byte1</th>
										  <th>Byte0</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Checksum</td>
											<td>0x10007500</td>
											<td class="fd_sram fd_sram_b3">0</td>
											<td class="fd_sram fd_sram_b2">0</td>
											<td class="fd_sram fd_sram_b1">0</td>
											<td class="fd_sram fd_sram_b0">8-bit checksum</td>
										</tr>
										<tr>
											<td>IC summary</td>
											<td>0x10007504</td>
											<td class="fd_sram fd_sram_b7">ic_num</td>
											<td class="fd_sram fd_sram_b6">0</td>
											<td class="fd_sram fd_sram_b5">0</td>
											<td class="fd_sram fd_sram_b4">0</td>
										</tr>
									
									
										<?php
											$fd_sram_main_item_each_ic = array(
												"E5_bk0_PA5","E5_bk0_PA4","E5_bk0_PA3", "E5_bk0_PA2",
												"E5_bk0_PA9","E5_bk0_PA8","E5_bk0_PA7", "E5_bk0_PA6",
												"E5_bk0_PA13","E5_bk0_PA12","E5_bk0_PA11", "E5_bk0_PA10",
											);
											$fd_sram_main_item_name = array(
												"DD Master", "DD Slave1", "DD Slave2", "DD Slave3",
												"DD Slave4", "DD Slave5", "DD Slave6", "DD Slave7",
											);
											
											$fd_sram_start_addr = 0x10007508;
											$fd_count = 0;
											$fd_name = 0;
											$fd_b_offset =  $fd_sram_start_addr - 0x10007500;
											$tmp_stella = '';
											$main_status_offset = 0;
											for ($ic_num = 0; $ic_num < 8; $ic_num++) {
												$fd_count = 0;
												for ($x = 0; $x < 3; $x++) {
													echo '<tr>';
													if($x%3 == 0){
														echo '	<td>'.$fd_sram_main_item_name[$fd_name++].'</td>';
													}
													else{
														echo '	<td></td>';
													}
													
													echo '	<td>0x'.dechex($fd_sram_start_addr).'</td>';
													//---------------------------------------------------------------
													echo '	<td class="fd_sram fd_sram_main_status fd_sram_b'.($fd_b_offset+3).'" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+0].'</td>';
													
													if($x==2){
														echo '	<td class="fd_sram fd_sram_main_status fd_sram_b'.($fd_b_offset+2).'" style="color: #0174BE;" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+1].'</td>';
														echo '	<td class="fd_sram fd_sram_main_status fd_sram_b'.($fd_b_offset+1).'" style="color: #0174BE;" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+2].'</td>';
														echo '	<td class="fd_sram fd_sram_main_status fd_sram_b'.($fd_b_offset+0).'" style="color: #0174BE;" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+3].'</td>';
													}
													else
													{
														echo '	<td class="fd_sram fd_sram_main_status fd_sram_b'.($fd_b_offset+2).'" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+1].'</td>';
														echo '	<td class="fd_sram fd_sram_main_status fd_sram_b'.($fd_b_offset+1).'" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+2].'</td>';
														echo '	<td class="fd_sram fd_sram_main_status fd_sram_b'.($fd_b_offset+0).'" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+3].'</td>';
													}
													
													//---------------------------------------------------------------
													echo '</tr>';
													
													$fd_count+=4;
													$fd_sram_start_addr+=4;
													$fd_b_offset+=4;
												} 		
											}									
										?>
									</tbody>
							</table>
						</div>
						<!-- MAIN ITEM OE -->
						<div class="col-sm-6">
							<table class="table table-striped text-xs">
									<thead>
										<tr>
										  <th>MAIN ITEM (OE)</th>
										  <th>Addr</th>
										  <th>Byte3</th>
										  <th>Byte2</th>
										  <th>Byte1</th>
										  <th>Byte0</th>
										</tr>
									</thead>
									
									<tbody>
										<tr>
											<td>Checksum</td>
											<td>0x10007758</td>
											<td class="fd_sram fd_sram_b603">0</td>
											<td class="fd_sram fd_sram_b602">0</td>
											<td class="fd_sram fd_sram_b601">0</td>
											<td class="fd_sram fd_sram_b600">8-bit checksum</td>
										</tr>
										
										<tr>
											<td>IC summary</td>
											<td>0x1000775C</td>
											<td class="fd_sram fd_sram_b607">ic_num</td>
											<td class="fd_sram fd_sram_b606">0</td>
											<td class="fd_sram fd_sram_b605">0</td>
											<td class="fd_sram fd_sram_b604">0</td>
										</tr>
										
										<?php
											$fd_sram_main_item_each_ic = array(
												"E5_bk1_PA4","E5_bk1_PA3","E5_bk1_PA2", "E5_bk1_PA1",
												"E5_bk1_PA8","E5_bk1_PA7","E5_bk1_PA6", "E5_bk1_PA5",
												"E5_bk1_PA12","E5_bk1_PA11","E5_bk1_PA10", "E5_bk1_PA9",
											);
											$fd_sram_main_item_name = array(
												"DD Master", "DD Slave1", "DD Slave2", "DD Slave3",
												"DD Slave4", "DD Slave5", "DD Slave6", "DD Slave7",
											);
											
											$fd_sram_start_addr = 0x10007760;
											$fd_count = 0;
											$fd_name = 0;
											$fd_b_offset =  $fd_sram_start_addr - 0x10007500;
											$tmp_stella = '';
											$main_oe_offset = 0;
											for ($ic_num = 0; $ic_num < 8; $ic_num++) {
												$fd_count = 0;
												for ($x = 0; $x < 3; $x++) {
													echo '<tr>';
													if($x%3 == 0){
														echo '	<td>'.$fd_sram_main_item_name[$fd_name++].'</td>';
													}
													else{
														echo '	<td></td>';
													}
													
													echo '	<td>0x'.dechex($fd_sram_start_addr).'</td>';
													//---------------------------------------------------------------
													echo '	<td class="fd_sram fd_sram_main_oe fd_sram_b'.($fd_b_offset+3).'" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+0].'</td>';
													
													if($x==2){
														echo '	<td class="fd_sram fd_sram_main_oe fd_sram_b'.($fd_b_offset+2).'" style="color: #0174BE;" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+1].'</td>';
														echo '	<td class="fd_sram fd_sram_main_oe fd_sram_b'.($fd_b_offset+1).'" style="color: #0174BE;" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+2].'</td>';
														echo '	<td class="fd_sram fd_sram_main_oe fd_sram_b'.($fd_b_offset+0).'" style="color: #0174BE;" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+3].'</td>';
													}
													else
													{
														echo '	<td class="fd_sram fd_sram_main_oe fd_sram_b'.($fd_b_offset+2).'" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+1].'</td>';
														echo '	<td class="fd_sram fd_sram_main_oe fd_sram_b'.($fd_b_offset+1).'" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+2].'</td>';
														echo '	<td class="fd_sram fd_sram_main_oe fd_sram_b'.($fd_b_offset+0).'" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+3].'</td>';
													}
													
													//---------------------------------------------------------------
													echo '</tr>';
													
													$fd_count+=4;
													$fd_sram_start_addr+=4;
													$fd_b_offset+=4;
												} 		
											}									
										?>
									</tbody>
							</table>
						</div>
						<!-- SUB ITEM STATUS-->
						<div class="col-sm-6">
							<table class="table table-striped text-xs">
									<thead>
										<tr>
										  <th>SUB ITEM (Status)</th>
										  <th>Addr</th>
										  <th>Byte3</th>
										  <th>Byte2</th>
										  <th>Byte1</th>
										  <th>Byte0</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Checksum</td>
											<td>0x100075D0</td>
											<td class="fd_sram fd_sram_b211">0</td>
											<td class="fd_sram fd_sram_b210">0</td>
											<td class="fd_sram fd_sram_b209">0</td>
											<td class="fd_sram fd_sram_b208">8-bit checksum</td>
										</tr>									
										<?php
											$fd_sram_sub_item_each_ic = array(
												"SUB3","SUB2","SUB1", "SUB0",
												"SUB7","SUB6","SUB5", "SUB4",
												"SUB11","SUB10","SUB9", "SUB8",
												"SUB15","SUB14","SUB13", "SUB12",
												"SUB19","SUB18","SUB17", "SUB16",
												"SUB23","SUB22","SUB21", "SUB20",
											);
											
											
											$fd_sram_start_addr = 0x100075D4;
											$fd_count = 0;
											$fd_name = 0;
											$fd_b_offset = $fd_sram_start_addr - 0x10007500;
											$sub_offset_status = 0;
											for ($ic_num = 0; $ic_num < 8; $ic_num++) {
												$fd_count = 0;
												for ($x = 0; $x < 6; $x++) {
													echo '<tr>';
													if($x%6 == 0){
														echo '	<td>'.$fd_sram_main_item_name[$fd_name++].'</td>';
													}
													else{
														echo '	<td></td>';
													}
													
													echo '	<td>0x'.dechex($fd_sram_start_addr).'</td>';
													//---------------------------------------------------------------
													echo '	<td class="fd_sram fd_sram_sub_status fd_sram_b'.($fd_b_offset+3).'" msoffset="'.($sub_offset_status++).'">'.$fd_sram_sub_item_each_ic[$fd_count+0].'</td>';
													echo '	<td class="fd_sram fd_sram_sub_status fd_sram_b'.($fd_b_offset+2).'" msoffset="'.($sub_offset_status++).'">'.$fd_sram_sub_item_each_ic[$fd_count+1].'</td>';
													echo '	<td class="fd_sram fd_sram_sub_status fd_sram_b'.($fd_b_offset+1).'" msoffset="'.($sub_offset_status++).'">'.$fd_sram_sub_item_each_ic[$fd_count+2].'</td>';
													echo '	<td class="fd_sram fd_sram_sub_status fd_sram_b'.($fd_b_offset+0).'" msoffset="'.($sub_offset_status++).'">'.$fd_sram_sub_item_each_ic[$fd_count+3].'</td>';
													//---------------------------------------------------------------
													echo '</tr>';
													
													$fd_count+=4;
													$fd_sram_start_addr+=4;
													$fd_b_offset+=4;
												} 		
											}									
										?>
									</tbody>
							</table>
						</div>
						<!-- SUB ITEM OE-->
						<div class="col-sm-6">
							<table class="table table-striped text-xs">
									<thead>
										<tr>
										  <th>SUB ITEM (OE)</th>
										  <th>Addr</th>
										  <th>Byte3</th>
										  <th>Byte2</th>
										  <th>Byte1</th>
										  <th>Byte0</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Checksum</td>
											<td>0x100077C0</td>
											<td class="fd_sram fd_sram_b707">0</td>
											<td class="fd_sram fd_sram_b706">0</td>
											<td class="fd_sram fd_sram_b705">0</td>
											<td class="fd_sram fd_sram_b704">8-bit checksum</td>
										</tr>									
										<?php
											$fd_sram_sub_item_each_ic = array(
												"SUB3","SUB2","SUB1", "SUB0",
												"SUB7","SUB6","SUB5", "SUB4",
												"SUB11","SUB10","SUB9", "SUB8",
												"SUB15","SUB14","SUB13", "SUB12",
												"SUB19","SUB18","SUB17", "SUB16",
												"SUB23","SUB22","SUB21", "SUB20",
											);
											
											
											$fd_sram_start_addr = 0x100077C4;
											$fd_count = 0;
											$fd_name = 0;
											$fd_b_offset = $fd_sram_start_addr - 0x10007500;
											$sub_offset_oe = 0;
											for ($ic_num = 0; $ic_num < 8; $ic_num++) {
												$fd_count = 0;
												for ($x = 0; $x < 6; $x++) {
													echo '<tr>';
													if($x%6 == 0){
														echo '	<td>'.$fd_sram_main_item_name[$fd_name++].'</td>';
													}
													else{
														echo '	<td></td>';
													}
													
													echo '	<td>0x'.dechex($fd_sram_start_addr).'</td>';
													//---------------------------------------------------------------
													echo '	<td class="fd_sram fd_sram_sub_oe fd_sram_b'.($fd_b_offset+3).'" msoffset="'.($sub_offset_oe++).'">'.$fd_sram_sub_item_each_ic[$fd_count+0].'</td>';
													echo '	<td class="fd_sram fd_sram_sub_oe fd_sram_b'.($fd_b_offset+2).'" msoffset="'.($sub_offset_oe++).'">'.$fd_sram_sub_item_each_ic[$fd_count+1].'</td>';
													echo '	<td class="fd_sram fd_sram_sub_oe fd_sram_b'.($fd_b_offset+1).'" msoffset="'.($sub_offset_oe++).'">'.$fd_sram_sub_item_each_ic[$fd_count+2].'</td>';
													echo '	<td class="fd_sram fd_sram_sub_oe fd_sram_b'.($fd_b_offset+0).'" msoffset="'.($sub_offset_oe++).'">'.$fd_sram_sub_item_each_ic[$fd_count+3].'</td>';
													//---------------------------------------------------------------
													echo '</tr>';
													
													$fd_count+=4;
													$fd_sram_start_addr+=4;
													$fd_b_offset+=4;
												} 		
											}									
										?>
									</tbody>
							</table>
						</div>
					</div>
					<!--
					<div class="row">
						<div class="col-sm-6">
						</div>
						<div class="col-sm-6">
							<table class="table table-striped text-xs">
								<thead>
									<tr>
									  <th>#</th>
									  <th>Bit 7</th>
									  <th>Bit 6</th>
									  <th>Bit 5</th>
									  <th>Bit 4</th>
									  <th>Bit 3</th>
									  <th>Bit 2</th>
									  <th>Bit 1</th>
									  <th>Bit 0</th>
									</tr>
								</thead>
								<tbody>
									<tr></tr>
								</tbody>
							</table>
						</div>
					</div>
					-->
				</div>
				
			</div>
			<div class="card card-info collapsed-card">
				<div class="card-header" data-card-widget="collapse">
					<h3 class="card-title">0412 FD SRAM Parser</h3>
					<div class="card-tools">
						<button type="button" class="btn btn-tool parser_expand"  title="Collapse">
							<i class="fas fa-plus"></i>
						</button>
					</div>
				</div>
				<div class="card-body">
					<div class="row mb-4">
						<div class="col-sm-1">
							<button type="submit" class="btn btn-info ml-2" style="widht:100%; height: 100px;" id="pa0412_fd_sram_cal">
								<i class="fas fa-virus"></i> Enter
							</button>
						</div>
						<div class="col-sm-11">
							<span style="background-color: #E3EB98">FD SRAM 0x10007500 size (1kB)</span>
							<textarea class="" id="pa0412_fd_sram_content" style="width:100%; height: 100px;"></textarea>
						</div>
					</div>
					<div class="row post">
						<div class="col-sm-6">
							<table class="table table-striped text-xs">
									<thead>
										<tr>
										  <th>MAIN ITEM (Status)</th>
										  <th>Addr</th>
										  <th>Byte3</th>
										  <th>Byte2</th>
										  <th>Byte1</th>
										  <th>Byte0</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Checksum</td>
											<td>0x10007500</td>
											<td class="fd_sram_0412 fd_sram_0412_b3">0</td>
											<td class="fd_sram_0412 fd_sram_0412_b2">0</td>
											<td class="fd_sram_0412 fd_sram_0412_b1">0</td>
											<td class="fd_sram_0412 fd_sram_0412_b0">8-bit checksum</td>
										</tr>
										<tr>
											<td>IC summary</td>
											<td>0x10007504</td>
											<td class="fd_sram_0412 fd_sram_0412_b7">ic_num</td>
											<td class="fd_sram_0412 fd_sram_0412_b6">0</td>
											<td class="fd_sram_0412 fd_sram_0412_b5">0</td>
											<td class="fd_sram_0412 fd_sram_0412_b4">0</td>
										</tr>
									
									
										<?php
											$fd_sram_main_item_each_ic = array(
												"E5_bk0_PA5","E5_bk0_PA4","E5_bk0_PA3", "E5_bk0_PA2",
												"E5_bk0_PA9","E5_bk0_PA8","E5_bk0_PA7", "E5_bk0_PA6",
												"-","-","-", "E5_bk0_PA10",
												"E5_bk0_PA14", "E5_bk0_PA13","E5_bk0_PA12","E5_bk0_PA11",
											);
											$fd_sram_main_item_name = array(
												"DD Master", "DD Slave1", "DD Slave2", "DD Slave3",
												"DD Slave4", "DD Slave5", "DD Slave6", "DD Slave7",
											);
											
											$fd_sram_start_addr = 0x10007508;
											$fd_count = 0;
											$fd_name = 0;
											$fd_b_offset =  $fd_sram_start_addr - 0x10007500;
											$tmp_stella = '';
											$main_status_offset = 0;
											for ($ic_num = 0; $ic_num < 8; $ic_num++) {
												$fd_count = 0;
												for ($x = 0; $x < 4; $x++) {
													echo '<tr>';
													if($x%4 == 0){
														echo '	<td>'.$fd_sram_main_item_name[$fd_name++].'</td>';
													}
													else{
														echo '	<td></td>';
													}
													
													echo '	<td>0x'.strtoupper(dechex($fd_sram_start_addr)).'</td>';
													//---------------------------------------------------------------
													echo '	<td class="fd_sram_0412 fd_sram_0412_main_status fd_sram_0412_b'.($fd_b_offset+3).'" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+0].'</td>';
													
													if($x==3){
														echo '	<td class="fd_sram_0412 fd_sram_0412_main_status fd_sram_0412_b'.($fd_b_offset+2).'" style="color: #0174BE;" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+1].'</td>';
														echo '	<td class="fd_sram_0412 fd_sram_0412_main_status fd_sram_0412_b'.($fd_b_offset+1).'" style="color: #0174BE;" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+2].'</td>';
														echo '	<td class="fd_sram_0412 fd_sram_0412_main_status fd_sram_0412_b'.($fd_b_offset+0).'" style="color: #0174BE;" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+3].'</td>';
													}
													else
													{
														echo '	<td class="fd_sram_0412 fd_sram_0412_main_status fd_sram_0412_b'.($fd_b_offset+2).'" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+1].'</td>';
														echo '	<td class="fd_sram_0412 fd_sram_0412_main_status fd_sram_0412_b'.($fd_b_offset+1).'" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+2].'</td>';
														echo '	<td class="fd_sram_0412 fd_sram_0412_main_status fd_sram_0412_b'.($fd_b_offset+0).'" msoffset="'.($main_status_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+3].'</td>';
													}
													
													//---------------------------------------------------------------
													echo '</tr>';
													
													$fd_count+=4;
													$fd_sram_start_addr+=4;
													$fd_b_offset+=4;
												} 		
											}									
										?>
									</tbody>
							</table>
						</div>
						<!-- MAIN ITEM OE -->
						<div class="col-sm-6">
							<table class="table table-striped text-xs">
									<thead>
										<tr>
										  <th>MAIN ITEM (OE)</th>
										  <th>Addr</th>
										  <th>Byte3</th>
										  <th>Byte2</th>
										  <th>Byte1</th>
										  <th>Byte0</th>
										</tr>
									</thead>
									
									<tbody>
										<tr>
											<td>Checksum</td>
											<td>0x10007798</td>
											<td class="fd_sram_0412 fd_sram_0412_b667">0</td>
											<td class="fd_sram_0412 fd_sram_0412_b666">0</td>
											<td class="fd_sram_0412 fd_sram_0412_b665">0</td>
											<td class="fd_sram_0412 fd_sram_0412_b664">8-bit checksum</td>
										</tr>
										
										<tr>
											<td>IC summary</td>
											<td>0x1000779C</td>
											<td class="fd_sram_0412 fd_sram_0412_b671">ic_num</td>
											<td class="fd_sram_0412 fd_sram_0412_b670">0</td>
											<td class="fd_sram_0412 fd_sram_0412_b669">0</td>
											<td class="fd_sram_0412 fd_sram_0412_b668">0</td>
										</tr>
										
										<?php
											$fd_sram_main_item_each_ic = array(
												"E5_bk1_PA4","E5_bk1_PA3","E5_bk1_PA2", "E5_bk1_PA1",
												"E5_bk1_PA8","E5_bk1_PA7","E5_bk1_PA6", "E5_bk1_PA5",
												"-","-","-", "E5_bk1_PA9",
												"E5_bk1_PA13", "E5_bk1_PA12","E5_bk1_PA11","E5_bk1_PA10",
											);
											$fd_sram_main_item_name = array(
												"DD Master", "DD Slave1", "DD Slave2", "DD Slave3",
												"DD Slave4", "DD Slave5", "DD Slave6", "DD Slave7",
											);
											
											$fd_sram_start_addr = 0x100077A0;
											$fd_count = 0;
											$fd_name = 0;
											$fd_b_offset =  $fd_sram_start_addr - 0x10007500;
											$tmp_stella = '';
											$main_oe_offset = 0;
											for ($ic_num = 0; $ic_num < 8; $ic_num++) {
												$fd_count = 0;
												for ($x = 0; $x < 4; $x++) {
													echo '<tr>';
													if($x%4 == 0){
														echo '	<td>'.$fd_sram_main_item_name[$fd_name++].'</td>';
													}
													else{
														echo '	<td></td>';
													}
													
													echo '	<td>0x'.strtoupper(dechex($fd_sram_start_addr)).'</td>';
													//---------------------------------------------------------------
													echo '	<td class="fd_sram_0412 fd_sram_0412_main_oe fd_sram_0412_b'.($fd_b_offset+3).'" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+0].'</td>';
													
													if($x==3){
														echo '	<td class="fd_sram_0412 fd_sram_0412_main_oe fd_sram_0412_b'.($fd_b_offset+2).'" style="color: #0174BE;" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+1].'</td>';
														echo '	<td class="fd_sram_0412 fd_sram_0412_main_oe fd_sram_0412_b'.($fd_b_offset+1).'" style="color: #0174BE;" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+2].'</td>';
														echo '	<td class="fd_sram_0412 fd_sram_0412_main_oe fd_sram_0412_b'.($fd_b_offset+0).'" style="color: #0174BE;" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+3].'</td>';
													}
													else
													{
														echo '	<td class="fd_sram_0412 fd_sram_0412_main_oe fd_sram_0412_b'.($fd_b_offset+2).'" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+1].'</td>';
														echo '	<td class="fd_sram_0412 fd_sram_0412_main_oe fd_sram_0412_b'.($fd_b_offset+1).'" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+2].'</td>';
														echo '	<td class="fd_sram_0412 fd_sram_0412_main_oe fd_sram_0412_b'.($fd_b_offset+0).'" msoffset="'.($main_oe_offset++).'">'.$fd_sram_main_item_each_ic[$fd_count+3].'</td>';
													}
													
													//---------------------------------------------------------------
													echo '</tr>';
													
													$fd_count+=4;
													$fd_sram_start_addr+=4;
													$fd_b_offset+=4;
												} 		
											}									
										?>
									</tbody>
							</table>
						</div>
						<!-- SUB ITEM STATUS-->
						<div class="col-sm-6">
							<table class="table table-striped text-xs">
									<thead>
										<tr>
										  <th>SUB ITEM (Status)</th>
										  <th>Addr</th>
										  <th>Byte3</th>
										  <th>Byte2</th>
										  <th>Byte1</th>
										  <th>Byte0</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Checksum</td>
											<td>0x10007610</td>
											<td class="fd_sram_0412 fd_sram_0412_b275">0</td>
											<td class="fd_sram_0412 fd_sram_0412_b274">0</td>
											<td class="fd_sram_0412 fd_sram_0412_b273">0</td>
											<td class="fd_sram_0412 fd_sram_0412_b272">8-bit checksum</td>
										</tr>									
										<?php
											$fd_sram_sub_item_each_ic = array(
												"SUB3","SUB2","SUB1", "SUB0",
												"SUB7","SUB6","SUB5", "SUB4",
												"SUB11","SUB10","SUB9", "SUB8",
												"SUB15","SUB14","SUB13", "SUB12",
												"SUB19","SUB18","SUB17", "SUB16",
												"SUB23","SUB22","SUB21", "SUB20",
											);
											
											
											$fd_sram_start_addr = 0x10007614;
											$fd_count = 0;
											$fd_name = 0;
											$fd_b_offset = $fd_sram_start_addr - 0x10007500;
											$sub_offset_status = 0;
											for ($ic_num = 0; $ic_num < 8; $ic_num++) {
												$fd_count = 0;
												for ($x = 0; $x < 6; $x++) {
													echo '<tr>';
													if($x%6 == 0){
														echo '	<td>'.$fd_sram_main_item_name[$fd_name++].'</td>';
													}
													else{
														echo '	<td></td>';
													}
													
													echo '	<td>0x'.strtoupper(dechex($fd_sram_start_addr)).'</td>';
													//---------------------------------------------------------------
													echo '	<td class="fd_sram_0412 fd_sram_0412_sub_status fd_sram_0412_b'.($fd_b_offset+3).'" msoffset="'.($sub_offset_status++).'">'.$fd_sram_sub_item_each_ic[$fd_count+0].'</td>';
													echo '	<td class="fd_sram_0412 fd_sram_0412_sub_status fd_sram_0412_b'.($fd_b_offset+2).'" msoffset="'.($sub_offset_status++).'">'.$fd_sram_sub_item_each_ic[$fd_count+1].'</td>';
													echo '	<td class="fd_sram_0412 fd_sram_0412_sub_status fd_sram_0412_b'.($fd_b_offset+1).'" msoffset="'.($sub_offset_status++).'">'.$fd_sram_sub_item_each_ic[$fd_count+2].'</td>';
													echo '	<td class="fd_sram_0412 fd_sram_0412_sub_status fd_sram_0412_b'.($fd_b_offset+0).'" msoffset="'.($sub_offset_status++).'">'.$fd_sram_sub_item_each_ic[$fd_count+3].'</td>';
													//---------------------------------------------------------------
													echo '</tr>';
													
													$fd_count+=4;
													$fd_sram_start_addr+=4;
													$fd_b_offset+=4;
												} 		
											}									
										?>
									</tbody>
							</table>
						</div>
						<!-- SUB ITEM OE-->
						<div class="col-sm-6">
							<table class="table table-striped text-xs">
									<thead>
										<tr>
										  <th>SUB ITEM (OE)</th>
										  <th>Addr</th>
										  <th>Byte3</th>
										  <th>Byte2</th>
										  <th>Byte1</th>
										  <th>Byte0</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Checksum</td>
											<td>0x10007820</td>
											<td class="fd_sram fd_sram_b803">0</td>
											<td class="fd_sram fd_sram_b802">0</td>
											<td class="fd_sram fd_sram_b801">0</td>
											<td class="fd_sram fd_sram_b800">8-bit checksum</td>
										</tr>									
										<?php
											$fd_sram_sub_item_each_ic = array(
												"SUB3","SUB2","SUB1", "SUB0",
												"SUB7","SUB6","SUB5", "SUB4",
												"SUB11","SUB10","SUB9", "SUB8",
												"SUB15","SUB14","SUB13", "SUB12",
												"SUB19","SUB18","SUB17", "SUB16",
												"SUB23","SUB22","SUB21", "SUB20",
											);
											
											
											$fd_sram_start_addr = 0x10007824;
											$fd_count = 0;
											$fd_name = 0;
											$fd_b_offset = $fd_sram_start_addr - 0x10007500;
											$sub_offset_oe = 0;
											for ($ic_num = 0; $ic_num < 8; $ic_num++) {
												$fd_count = 0;
												for ($x = 0; $x < 6; $x++) {
													echo '<tr>';
													if($x%6 == 0){
														echo '	<td>'.$fd_sram_main_item_name[$fd_name++].'</td>';
													}
													else{
														echo '	<td></td>';
													}
													
													echo '	<td>0x'.strtoupper(dechex($fd_sram_start_addr)).'</td>';
													//---------------------------------------------------------------
													echo '	<td class="fd_sram_0412 fd_sram_0412_sub_oe fd_sram_0412_b'.($fd_b_offset+3).'" msoffset="'.($sub_offset_oe++).'">'.$fd_sram_sub_item_each_ic[$fd_count+0].'</td>';
													echo '	<td class="fd_sram_0412 fd_sram_0412_sub_oe fd_sram_0412_b'.($fd_b_offset+2).'" msoffset="'.($sub_offset_oe++).'">'.$fd_sram_sub_item_each_ic[$fd_count+1].'</td>';
													echo '	<td class="fd_sram_0412 fd_sram_0412_sub_oe fd_sram_0412_b'.($fd_b_offset+1).'" msoffset="'.($sub_offset_oe++).'">'.$fd_sram_sub_item_each_ic[$fd_count+2].'</td>';
													echo '	<td class="fd_sram_0412 fd_sram_0412_sub_oe fd_sram_0412_b'.($fd_b_offset+0).'" msoffset="'.($sub_offset_oe++).'">'.$fd_sram_sub_item_each_ic[$fd_count+3].'</td>';
													//---------------------------------------------------------------
													echo '</tr>';
													
													$fd_count+=4;
													$fd_sram_start_addr+=4;
													$fd_b_offset+=4;
												} 		
											}									
										?>
									</tbody>
							</table>
						</div>
					</div>
					<!--
					<div class="row">
						<div class="col-sm-6">
						</div>
						<div class="col-sm-6">
							<table class="table table-striped text-xs">
								<thead>
									<tr>
									  <th>#</th>
									  <th>Bit 7</th>
									  <th>Bit 6</th>
									  <th>Bit 5</th>
									  <th>Bit 4</th>
									  <th>Bit 3</th>
									  <th>Bit 2</th>
									  <th>Bit 1</th>
									  <th>Bit 0</th>
									</tr>
								</thead>
								<tbody>
									<tr></tr>
								</tbody>
							</table>
						</div>
					</div>
					-->
				</div>
				
			</div>
			<!--
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
			-->

		</section>
		
    <!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
  
  
<?php 
	//echo '  <script src="'.base_url().'assets/js/FileSaver.min.js"></script>'."\n";
	echo '  <script src="'.base_url().'assets/js/oem_debug_pa0402.js"></script>'."\n";
	
	if($val_fae == 0){
		echo '  <script src="'.base_url().'assets/js/oem_rom.js"></script>'."\n";
	}
?>