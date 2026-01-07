  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>FW Build Config</h1>
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
	<section class="content" id="build_tp_checking" isbuild="1" buildcode="0">
	<!-- Default box -->
		<div class="card">
			<div class="card-header">
				<!--
				<button class="btn btn-md bg-info float-md-right" id="tp_build_code_start">
					<i class="fa fa-code-branch" aria-hidden="true"></i>&nbsp;Start Build
				</button>-->
				<div class="btn-group float-md-right">
					<button type="button" class="btn btn-md bg-info" id="tp_build_code_start">
						<i class="fa fa-code-branch" aria-hidden="true"></i>&nbsp;Start Build
					</button>
					<button type="button" class="btn btn-info dropdown-toggle dropdown-icon" data-toggle="dropdown">
						<span class="sr-only">Toggle Dropdown</span>
					</button>
					<div class="dropdown-menu" role="menu">
						<a class="dropdown-item" href="#" id="tp_build_export">
							<i class="fa fa-reply fa-fw"></i>&nbsp;Export Setting
						</a>
						<a class="dropdown-item" href="#" id="tp_a_build_import">
							<i class="fa fa-share fa-fw"></i>&nbsp;Import Setting
						</a>
					</div>
				</div>
				<div style="display: none;">
					<input type="file" class="custom-file-input" id="tp_build_import" accept=".json">
				</div>

				<!--<button class="btn btn-md bg-success float-md-left" id="tp_build_cal_isram" disabled>
					<i class="fa fa-calculator" aria-hidden="true"></i>&nbsp;Calculate Remaing Isram Size
				</button>-->
				<h5 style="padding-top: 5px;">
					<i class="fa fa-calculator" aria-hidden="true"></i>&nbsp;Current Code Size Estimate:
					<span id="tp_build_cal_isram_size" style="background-color: #f2ffcc"></span>&nbsp; Bytes. The Remaining Size: 
					<span id="tp_build_cal_isram_remaining" style="background-color: #f2ffcc"></span>&nbsp; Bytes
				</h5>
			</div>
			<div class="card-body text-xs">
				<!--<div class="row mb-2">
						
				</div>-->
				
					
				<!--tp config_touch.h here-->
				<?php
				$content_table_number = ''; // type 2
				$content_table_select = ''; // type 1
				$content_table_switch = ''; // type 0
				$content_table_str = ''; // type 3
				$content_table_hide = '';
				
				$html = json_decode($json_file, true);

				foreach($html as $vfuncs){
					//===================================
					if(isset($vfuncs["tobereplace"])){
						$tobechanged = 1;
					}
					else{
						$tobechanged = 0;
					}
					
					if(isset($vfuncs["config_new"]) && ($vfuncs["config_new"] == 1) ){
						$new_config_class = 'create_tp_config';
					}
					else if(isset($vfuncs["config_cfg"]) && ($vfuncs["config_cfg"] == 1)){
						$new_config_class = 'mod_tp_cfg';
					}
					else if(isset($vfuncs["config_init"]) && ($vfuncs["config_init"] == 1)){
						$new_config_class = 'mod_tp_init';
					}
					else{
						$new_config_class = '';
					}
					//===================================
					
					if($vfuncs["show"] == 1){
						
						if($vfuncs["type"] == "0"){ // switch on/off
							$content_table_switch.='<div class="form-group float-sm-left  mr-2" style="width: 30%;">';
							$content_table_switch.='	<label>'.$vfuncs["name"].'</label>';
							$content_table_switch.='	<div class="input-group mb-3">';
							$content_table_switch.='		<div class="input-group-prepend">';
							if($vfuncs["value"] == 'On'){
								$content_table_switch.='			<button type="button" class="btn btn-info build_tp tp_build_switch_button '.$new_config_class.'" control="On" name="'.$vfuncs["name"].'" bereplaced="'.$tobechanged.'" csize="'.$vfuncs["size"].'">On</button>';
							}
							else
								$content_table_switch.='			<button type="button" class="btn btn-warning build_tp tp_build_switch_button '.$new_config_class.'" control="Off" name="'.$vfuncs["name"].'" bereplaced="'.$tobechanged.'" csize="'.$vfuncs["size"].'">Off</button>';
							$content_table_switch.='		</div>';
							$content_table_switch.='		<input type="text" class="form-control" value="'.$vfuncs["detail"].'" readonly>';
							$content_table_switch.='	</div>';
							$content_table_switch.='</div>';
			
						}
						else if($vfuncs["type"] == "1"){ // select type
							$content_table_select.='<div class="form-group float-sm-left  mr-2" style="width: 45%;">';
							if($vfuncs["detail"] == ""){
								$labelval = '&nbsp;<br />Select '.$vfuncs["name"];
							}
							else{
								$labelval = '('.$vfuncs["detail"].')<br />Select '.$vfuncs["name"];
							}
							
							$content_table_select.='	<label>'.$labelval.'</label>';
							$content_table_select.='	<select class="form-control custom-select build_tp build_tp_select '.$new_config_class.'" name="'.$vfuncs["name"].'" bereplaced="'.$tobechanged.'" csize="'.$vfuncs["size"].'">';
							for($k = 0; $k < count($vfuncs["select"]); $k++){
								if(isset($vfuncs["selectvalue"])){
									$content_table_select.='	<option value="'.$vfuncs["selectvalue"][$k].'">'.$vfuncs["select"][$k].'</option>';
								}
								else{
									$content_table_select.='	<option value="'.$vfuncs["select"][$k].'">'.$vfuncs["select"][$k].'</option>';
								}
							}
							$content_table_select.='	</select>';
							$content_table_select.='</div>';
						}
						else if($vfuncs["type"] == "2"){ // number type
							if($vfuncs["detail"] == ""){
								$labelval = '&nbsp;<br />Enter '.$vfuncs["name"];
							}
							else{
								$labelval = '('.$vfuncs["detail"].')<br />Enter '.$vfuncs["name"];
							}
							$content_table_number.='<div class="form-group float-sm-left  mr-2" style="width: 30%;">';
							$content_table_number.='	<label>'.$labelval.'</label>';
							$content_table_number.='	<div class="input-group mb-3">';
							$content_table_number.='		<div class="input-group-prepend">';
							$content_table_number.='			<span class="input-group-text"><i class="fa fa-mars" aria-hidden="true"></i></span>';
							$content_table_number.='		</div>';
							$content_table_number.='		<input type="text" class="form-control build_tp build_tp_number '.$new_config_class.'" name="'.$vfuncs["name"].'" bereplaced="'.$tobechanged.'" placeholder="'.$vfuncs["value"].'">';
							$content_table_number.='	</div>';
							$content_table_number.='</div>';
						}
						else if($vfuncs["type"] == "3"){ // string type
							if($vfuncs["detail"] == ""){
								$labelval = '&nbsp;<br />Enter '.$vfuncs["name"];
							}
							else{
								$labelval = '('.$vfuncs["detail"].')<br />Enter '.$vfuncs["name"];
							}
							$content_table_str.='<div class="form-group float-sm-left  mr-2" style="width: 30%;">';
							$content_table_str.='	<label>'.$labelval.'</label>';
							$content_table_str.='	<div class="input-group mb-3">';
							$content_table_str.='		<div class="input-group-prepend">';
							$content_table_str.='			<span class="input-group-text"><i class="fa fa-key" aria-hidden="true"></i></span>';
							$content_table_str.='		</div>';
							$content_table_str.='		<input type="text" class="form-control build_tp build_tp_string '.$new_config_class.'" name="'.$vfuncs["name"].'" bereplaced="'.$tobechanged.'" placeholder="'.$vfuncs["value"].'">';
							$content_table_str.='	</div>';
							$content_table_str.='</div>';
							
						}

					} // end of show == 1
					else{
						$content_table_hide.='<input type="text" class="form-control build_tp_hide '.$new_config_class.'" bereplaced="'.$tobechanged.'" name="'.$vfuncs["name"].'" value="'.$vfuncs["value"].'" >';
					} // end of show == 0
					

				}
				
				echo '<div class="row">';
				echo '	<div class="col-sm-6">';
				echo $content_table_select;
				echo '	</div>';
				echo '	<div class="col-sm-6">';
				echo $content_table_str;
				echo $content_table_number;
				echo '	</div>';
				echo '</div>';
				
				echo '<div class="row">';
				echo '	<div class="col-sm-12">';
				echo $content_table_switch;
				echo '	</div>';
				echo '</div>';
				
				echo '<div class="row" style="display: none;">';
				echo '	<div class="col-sm-12">';
				echo $content_table_hide;
				echo '	</div>';
				echo '</div>';
				?>
				<h5>Fill out the Dd init and workaround</h5>
				<div class="row mb-2 post">
					<div class="col-sm-12" id="tp_build_dd_init_header"> 
						<!-- dd init code header -->
						<table class="table table-bordered" spellcheck="false" >
							<!-- dd init code -->
							<tr>
								<th rowspan="4">Dd_initial</th>
							</tr>
							<tr class="tp_build_code_dd_init" name="header" style="color: #0066cc;">
								<td>
0x00, 0x04, 0x00, 0x00,
								</td>
							</tr>
							<tr class="tp_build_code_dd_init" name="body" style="background-color:  #cce6ff;" contenteditable>
								<td>
// Paste dd init code here....
<br /><br /><br />
								</td>
							</tr>
							<tr class="tp_build_code_dd_init" name="footer" style="color: #0066cc;">
								<td>
0x00,
								</td>
							</tr>
							<!-- Before PON -->
							<tr>
								<th rowspan="4">Dd_initial_before_pon</th>
							</tr>
							<tr class="tp_build_code_dd_before_pon" name="header"  style="color: #0066cc;">
								<td>
DD_WORKAROUND_TABLE_HEADER, <br />
DD_WORKAROUND_SEC_START(DD_INITIAL_ALL_CASCADE_ID),
								</td>
							</tr>
							<tr class="tp_build_code_dd_before_pon" name="body" style="background-color:  #cce6ff;" contenteditable>
								<td>
// Before pon here....
<br /><br /><br />
#if (0x01 == VIDEO_GEN)<br />
	DD_FMT_TRANS_TO_INI(0xB2, 0x00, 0x1A, 0x92), // video gen off<br />
	DD_FMT_TRANS_TO_INI(0xC7, 0x00, 0x01, 0x32), // video gen fixed 2 lines<br />
#endif<br /><br />

#if (0x01 == DD_TPS_DETECTION_EXTERNAL)<br />
	DD_FMT_TRANS_TO_INI(0xB8, 0x00, 0x01, 0x40), // TS_INPUT_SEL=0, TSENSOR_EN_M=1<br />
	DD_FMT_TRANS_TO_INI(0xB8, 0x01, 0x02, 0x87),<br />
	DD_FMT_TRANS_TO_INI(0xB8, 0x01, 0x03, 0x2B),<br />
	DD_FMT_TRANS_TO_INI(0xB8, 0x01, 0x04, 0x14),<br />
#endif<br /><br />

#if (0x01 == PLL_BY_DD_INIT)<br />
	//	Case 1: PA15 = 0x1B, PA16 = 0x91 --> SC_CLK1 = 15MHz<br />
	//	Case 2: PA15 = 0x1B, PA16 = 0x90 --> SC_CLK1 = 30MHz<br />
	//	Case 3: PA15 = 0x15, PA16 = 0x91 --> SC_CLK1 = 22.5MHz<br />
	//	Case 4: PA15 = 0x15, PA16 = 0x90 --> SC_CLK1 = 45MHz<br />
	//	Case 5: PA15 = 0x31, PA16 = 0x91 --> SC_CLK1 = 7.5MHz<br />
	//	Case 6: PA15 = 0x31, PA16 = 0x90 --> SC_CLK1 = 15MHz<br />
	//	Case 7: PA15 = 0x22, PA16 = 0x91 --> SC_CLK1 = 11.25MHz<br />
	//	Case 8: PA15 = 0x22, PA16 = 0x90 --> SC_CLK1 = 22.5MHz<br />
	// PLL reference CLK 15MHz<br />
	DD_FMT_TRANS_TO_INI(0xCB, 0x02, 0x0A, 0x18),<br />
	DD_FMT_TRANS_TO_INI(0xCB, 0x02, 0x0F, 0x1B),<br />
	DD_FMT_TRANS_TO_INI(0xCB, 0x02, 0x10, 0x91),<br />
#endif<br />
	DD_FMT_TRANS_TO_INI(0xB0, 0x00, 0x01, 0x00),<br />
	DD_WORKAROUND_DELAY(1000), //1us = 10cycle, 1000= 100us<br />
	DD_FMT_TRANS_TO_INI(0xBC, 0x00, 0x01, 0x1C), //VDDD=1.25v<br />
								
								</td>
							</tr>
							<tr class="tp_build_code_dd_before_pon" name="footer" style="color: #0066cc;">
								<td>
DD_WORKAROUND_TABLE_END,
								</td>
							</tr>
							<!-- After PON -->
							<tr>
								<th rowspan="4">Dd_initial_after_pon</th>
							</tr>
							<tr class="tp_build_code_dd_after_pon" name="header"  style="color: #0066cc;">
								<td>
DD_WORKAROUND_TABLE_HEADER,<br />
DD_WORKAROUND_SEC_START(DD_INITIAL_ALL_CASCADE_ID),<br /><br />

#if (CASCADE_IC_NUM == 1)<br />
	DD_WORKAROUND_DELAY(10000),<br />
	DD_FMT_TRANS_TO_INI(0xCB, 0x00, 0x0C, 0x05),<br />
#elif (CASCADE_IC_NUM > 1)<br />
	DD_WORKAROUND_DELAY(10000),<br />
	DD_FMT_TRANS_TO_INI(0xCB, 0x00, 0x0C, 0x01),<br />
#endif<br /><br />
								</td>
							</tr>
							<tr class="tp_build_code_dd_after_pon" name="body" style="background-color:  #cce6ff;" contenteditable>
								<td>
// After pon workaround here.....
<br /><br /><br />
								</td>
							</tr>
							<tr class="tp_build_code_dd_after_pon" name="footer" style="color: #0066cc;">
								<td>
DD_WORKAROUND_TABLE_END,
								</td>
							</tr>
							<!-- PON low workaround -->
							<tr>
								<th rowspan="4">Dd_initial_pon_low</th>
							</tr>
							<tr class="tp_build_code_dd_pon_low" name="header"  style="color: #0066cc;">
								<td>
DD_WORKAROUND_TABLE_HEADER, <br />
DD_WORKAROUND_SEC_START(DD_INITIAL_ALL_CASCADE_ID),<br />
#if (0x01 == IC_CUT_VERSION)<br />
// Workaround for preventing GAS large current... --> should be removed in cut1<br />
DD_FMT_TRANS_TO_INI(0xC0, 0x01, 0x04, 0x10),<br />
#endif
								</td>
							</tr>
							<tr class="tp_build_code_dd_pon_low" name="body" style="background-color:  #cce6ff;" contenteditable>
								<td>
// PON_LOW dd workaround here....<br /><br /><br />
								</td>
							</tr>
							<tr class="tp_build_code_dd_pon_low" name="footer" style="color: #0066cc;">
								<td>
DD_WORKAROUND_TABLE_END,
								</td>
							</tr>
							<!-- After D-sample -->
							<tr>
								<th rowspan="4">Dd_initial_after_dsample</th>
							</tr>
							<tr class="tp_build_code_dd_after_dsample" name="header"  style="color: #0066cc;">
								<td>
DD_WORKAROUND_TABLE_HEADER, <br />
DD_WORKAROUND_SEC_START(DD_INITIAL_ALL_CASCADE_ID),
								</td>
							</tr>
							<tr class="tp_build_code_dd_after_dsample" name="body" style="background-color:  #cce6ff;" contenteditable>
								<td>
// After D-sample workaround here....
<br /><br /><br />
								</td>
							</tr>
							<tr class="tp_build_code_dd_after_dsample" name="footer"  style="color: #0066cc;">
								<td>
DD_WORKAROUND_TABLE_END,
								</td>
							</tr>
						</table>
					</div>
				</div>
				<!--*********************************************************-->
				<!-- mapping table -->
				<h5>Paste tx/rx mapping</h5>
				<!-- hide----------------------->
				<!--==========================================-->
				<!--==========================================-->
				<div class="row" style="background-color: #f3f7d4; display: none;">
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
				<div class="row" style="background-color: #f3f7d4; display: none;">
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
				<div class="row" style="background-color: #f3f7d4; display: none;">
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
				<!--==========================================-->
				<!--==========================================-->
				<div class="row post mb-2">
					<div class="col-sm-1">
							<button class="btn btn-info " id="TSRAM_ADC_enter" style="height: 100%;width: 100%;">Enter</button>
							<button class="btn btn-info " id="TSRAM_ADC_clear" style="display: none;">Clear</button>
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
				<div class="row" style="display: none;">
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
				</div>
				<!--*********************************************************-->
			</div> <!-- end of card-body-->
			<div class="card-footer">
			</div>
		</div>

		
	</section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  
<?php 
	echo '  <script src="'.base_url().'assets/js/oem_tsram.js"></script>'."\n";
?>
