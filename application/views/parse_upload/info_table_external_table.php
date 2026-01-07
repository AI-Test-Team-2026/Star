<?php
	if($val_others == ""){
		echo '<div class="row bin_external_settings" style="display: none">';
	}
	else{
			echo '<div class="row bin_external_settings" style="display: block">';
	}
?>
	<div class="col-sm-12">
		<div class="card card-info">
			<div class="card-header" data-card-widget="collapse">
				<h3 class="card-title">Information</h3>
				<div class="card-tools">
					<button type="button" class="btn btn-tool parser_expand" title="Collapse">
						<i class="fas fa-plus"></i>
					</button>
				</div>
			</div>
		
			<div class="card-body">
				<!--***********************************************************************-->
				<div class="row">
					<div class="col-sm-12" >
						<h4></h4>
						<table class="table table-bordered s_table">
						
							<tr style="background-color: #b2c1ef;">
								<th colspan="8">Information</th>
							</tr>
							<tr>
								<td colspan="8">
									<div class="row">
										<div class="col-sm-3">
											<div class="form-group" style="text-align: left;">
												<label for="form_bin_vsync_freq">Vsync_Freq (Hz)</label>
												<div class="input-group mb-3">
													<div class="input-group-prepend">
														<span class="input-group-text" style="font-weight: bold;">
															<i class="fas fa-wave-square"></i>
														</span>
													</div>
													<?php
														if($val_others ==""){
															echo '<input type="text" class="form-control " id="form_bin_vsync_freq" name="OSC_Freq" placeholder="" autocomplete="off">';
														}
														else{
															echo '<input type="text" class="form-control " id="form_bin_vsync_freq" name="OSC_Freq" placeholder="" value="'.$val_others->OSC_Freq.'">';
														}
													?>
													
												</div>
											</div>
										</div>
										<div class="col-sm-3">
											<div class="form-group" style="text-align: left;">
												<label for="form_bin_VSP">VSP (V)</label>
												<div class="input-group mb-3">
													<div class="input-group-prepend">
														<span class="input-group-text" style="font-weight: bold;">
															<i class="fas fa-plug"></i>
														</span>
													</div>
													<?php
														if($val_others ==""){
															echo '<input type="text" class="form-control " id="form_bin_VSP" name="VSP" placeholder="" autocomplete="off">';
														}
														else{
															echo '<input type="text" class="form-control " id="form_bin_VSP" name="VSP" placeholder="" value="'.$val_others->VSP.'">';
														}
													?>
												</div>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group" style="text-align: left;">
												<label for="form_bin_PLL">0xCB bank2 PA15 (HEX)</label>
												<div class="input-group mb-3">
													<div class="input-group-prepend">
														<span class="input-group-text" style="font-weight: bold;">
															<i class="fas fa-plug"></i>
														</span>
													</div>
													<?php
														if($val_others ==""){
															echo '<input type="text" class="form-control " id="form_bin_PLL" name="PLL" placeholder="" autocomplete="off">';
														}
														else{
															echo '<input type="text" class="form-control " id="form_bin_PLL" name="PLL" placeholder="" value="'.$val_others->PLL.'">';
														}
													?>
													<div class="input-group-append">
														<span class="input-group-text" id="update_scclk1" style="cursor: pointer; background-color: #E3EB98;">Update</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-6">
											<div class="form-group" style="text-align: left;">
												<label for="lvds_timing_topology_sel">LVDS Topology</label>
												<select class="form-control custom-select" id="lvds_timing_topology_sel" name="LVDSTOPOLOGY">
													<?php 
														if($val_others->LVDSTOPOLOGY == 2){
															echo '<option value="0">Un-select</option>';
															echo '<option value="1">Point-to-Point</option>';
															echo '<option selected="true" value="2">MultiDrop</option>';
														}
														else if($val_others->LVDSTOPOLOGY == 1){
															echo '<option value="0">Un-select</option>';
															echo '<option selected="true" value="1">Point-to-Point</option>';
															echo '<option value="2">MultiDrop</option>';
														}
														else{
															echo '<option selected="true" value="0">Un-select</option>';
															echo '<option value="1">Point-to-Point</option>';
															echo '<option value="2">MultiDrop</option>';
														}
													?>
												</select>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="form-group" style="text-align: left;">
												<label for="lvds_timing_port_number_sel">LVDS Port Number</label>
												<select class="form-control custom-select" id="lvds_timing_port_number_sel" name="LVDSPORTNUMBER">
													<?php 
														if($val_others->LVDSPORTNUMBER == 2){
															echo '<option value="0">Un-select</option>';
															echo '<option value="1">1-Port</option>';
															echo '<option selected="true" value="2">2-Port</option>';
															echo '<option value="4">4-Port</option>';
														}
														else if($val_others->LVDSPORTNUMBER == 1){
															echo '<option value="0">Un-select</option>';
															echo '<option selected="true" value="1">1-Port</option>';
															echo '<option value="2">2-Port</option>';
															echo '<option value="4">4-Port</option>';
														}
														else if($val_others->LVDSPORTNUMBER == 4){
															echo '<option value="0">Un-select</option>';
															echo '<option value="1">1-Port</option>';
															echo '<option value="2">2-Port</option>';
															echo '<option selected="true"  value="4">4-Port</option>';
														}
														else{
															echo '<option selected="true" value="0">Un-select</option>';
															echo '<option value="1">1-Port</option>';
															echo '<option value="2">2-Port</option>';
															echo '<option value="4">4-Port</option>';
														}
													?>
												</select>
											</div>
										</div>
										
									</div>
								</td>
							</tr>
							<tr style="background-color: #b2c1ef; font-weight: bold;">
								<td colspan="3">LVDS Timing Parameter (Total)</td>
								<td>Symbol</td>
								<td>Min</td>
								<td>Typ</td>
								<td>Max</td>
								<td>Unit</td>
								
							</tr>
							<tr>
								<td rowspan="2">DCLK</td>
								<td colspan="2">Frequency</td>
								<td>fclk</td>
								<?php
									if($val_others ==""){
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_FCLK_min" name="FCLK_min"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_FCLK" name="FCLK"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_FCLK_max" name="FCLK_max"></td>';
									}
									else{
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_FCLK_min" name="FCLK_min">'.$val_others->FCLK_min.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_FCLK" name="FCLK">'.$val_others->FCLK.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_FCLK_max" name="FCLK_max">'.$val_others->FCLK_max.'</td>';
									}
								?>
								<td>MHz</td>
								
							</tr>
							<tr>
								
								<td colspan="2">Period</td>
								<td>tclk</td>
								<?php
									if($val_others ==""){
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_TCLK_min" name="TCLK_min"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_TCLK" name="TCLK"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_TCLK_max" name="TCLK_max"></td>';
									}
									else{
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_TCLK_min" name="TCLK_min">'.$val_others->TCLK_min.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_TCLK" name="TCLK">'.$val_others->TCLK.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_TCLK_max" name="TCLK_max">'.$val_others->TCLK_max.'</td>';
									}
								?>
								<td>ns</td>
								
							</tr>
							<tr>
								<td rowspan="5">HSYNC</td>
								<td colspan="2">Period</td>
								<td>tHP</td>
								<?php
									if($val_others ==""){
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_HP_min" name="HP_min"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_HP" name="HP"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_HP_max" name="HP_max"></td>';
									}
									else{
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_HP_min" name="HP_min">'.$val_others->HP_min.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_HP" name="HP">'.$val_others->HP.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_HP_max" name="HP_max">'.$val_others->HP_max.'</td>';
									}
								?>
								<td rowspan="5">tCLK</td>
								
							</tr>
							<tr>
								
								<td colspan="2">Width</td>
								<td>tHW</td>
								<?php
									if($val_others ==""){
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_HW_min" name="HW_min"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_HW" name="HW"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_HW_max" name="HW_max"></td>';
									}
									else{
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_HW_min" name="HW_min">'.$val_others->HW_min.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_HW" name="HW">'.$val_others->HW.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_HW_max" name="HW_max">'.$val_others->HW_max.'</td>';
									}
								?>
								
								
							</tr>
							<tr style="color: #30a8c5;">
								
								<td colspan="2">Horizontal Valid</td>
								<td>tHV</td>
								<?php
									if($val_others ==""){
										echo '<td colspan="3" class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_HV" name="HV"></td>';
									}
									else{
										echo '<td colspan="3" class="5478_others lvds_timing_edit" id="form_bin_HV" name="HV">'.$val_others->HV.'</td>';
									}
								?>
								
								
							</tr>
							<tr>
								
								<td rowspan="2">Horizontal<br />Invalid</td>
								<td>Horizontal Back Porch</td>
								<td>tHBP</td>
								<?php
									if($val_others ==""){
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_HBP_min" name="HBP_min"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_HBP" name="HBP"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_HBP_max" name="HBP_max"></td>';
									}
									else{
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_HBP_min" name="HBP_min">'.$val_others->HBP_min.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_HBP" name="HBP">'.$val_others->HBP.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_HBP_max" name="HBP_max">'.$val_others->HBP_max.'</td>';
									}
								?>
								
								
							</tr>
							<tr>
								
								
								<td>Horizontal Front Porch</td>
								<td>tHFP</td>
								<?php
									if($val_others ==""){
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_HFP_min" name="HFP_min"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_HFP" name="HFP"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_HFP_max" name="HFP_max"></td>';
									}
									else{
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_HFP_min" name="HFP_min">'.$val_others->HFP_min.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_HFP" name="HFP">'.$val_others->HFP.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_HFP_max" name="HFP_max">'.$val_others->HFP_max.'</td>';
									}
								?>
								
								
							</tr>
							<tr>
								<td rowspan="5">VSYNC</td>
								<td colspan="2">Period</td>
								<td>tVP</td>
								<?php
									if($val_others ==""){
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_VP_min" name="VP_min"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_VP" name="VP"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_VP_max" name="VP_max"></td>';
									}
									else{
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_VP_min" name="VP_min">'.$val_others->VP_min.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_VP" name="VP">'.$val_others->VP.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_VP_max" name="VP_max">'.$val_others->VP_max.'</td>';
									}
								?>
								<td rowspan="5">tHP</td>
								
							</tr>
							<tr>
								
								<td colspan="2">Width</td>
								<td>tWV</td>
								<?php
									if($val_others ==""){
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_VSA_min" name="VSA_min"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_VSA" name="VSA"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_VSA_max" name="VSA_max"></td>';
									}
									else{
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_VSA_min" name="VSA_min">'.$val_others->VSA_min.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_VSA" name="VSA">'.$val_others->VSA.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_VSA_max" name="VSA_max">'.$val_others->VSA_max.'</td>';
									}
								?>
								
								
							</tr>
							<tr style="color: #30a8c5;">
								
								<td colspan="2">Vertical Valid</td>
								<td>tVV</td>
								<?php
									if($val_others ==""){
										echo '<td colspan="3" class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_VV" name="VV"></td>';
									}
									else{
										echo '<td colspan="3" class="5478_others lvds_timing_edit" id="form_bin_VV" name="VV">'.$val_others->VV.'</td>';
									}
								?>
								
								
							</tr>
							<tr>
								
								<td rowspan="2">Vertical<br/>Invalid</td>
								<td>Vertical Back Porch</td>
								<td>tVBP</td>
								<?php
									if($val_others ==""){
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_VBP_min" name="VBP_min"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_VBP" name="VBP"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_VBP_max" name="VBP_max"></td>';
									}
									else{
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_VBP_min" name="VBP_min">'.$val_others->VBP_min.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_VBP" name="VBP">'.$val_others->VBP.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_VBP_max" name="VBP_max">'.$val_others->VBP_max.'</td>';
									}
								?>
								
								
							</tr>
							<tr>
								
								
								<td>Vertical Front Porch</td>
								<td>tVFP</td>
								<?php
									if($val_others ==""){
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_VFP_min" name="VFP_min"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_VFP" name="VFP"></td>';
										echo '<td class="5478_others lvds_timing_edit" contenteditable="true" id="form_bin_VFP_max" name="VFP_max"></td>';
									}
									else{
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_VFP_min" name="VFP_min">'.$val_others->VFP_min.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_VFP" name="VFP">'.$val_others->VFP.'</td>';
										echo '<td class="5478_others lvds_timing_edit" id="form_bin_VFP_max" name="VFP_max">'.$val_others->VFP_max.'</td>';
									}
								?>
								
							</tr>
						</table>
					</div>
				</div>
				<!--***********************************************************************-->
				
				
			</div>
		</div>
	</div>
</div> <!-- row-->