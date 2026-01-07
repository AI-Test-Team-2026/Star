			<?php
				if($val_flash_func == ''){
					$proj_detail_info = 0;
				}
				else{
					$proj_detail_info = 1;
				}
				
				
				// Fill out sample & range..................
				$Tp_init_obj = json_decode($val_sample_tp, true);
				//echo $Tp_init_obj[0]["value"];
				/*echo "hahhah";
				echo $Tp_init_obj[0]["value"];
				echo $Tp_init_obj[62]["value"];
				echo $Tp_init_obj[62]["rfeh"];
				echo $Tp_init_obj[62]["name"][0];*/
				//================================================
			?>
			
			<!--**************************************************-->
			<?php
				if($proj_detail_info == 1){
					echo '<div class="row notice_fw" style="display: block;">';
				}
				else{
					echo '<div class="row notice_fw" style="display: none;">';
				}
			?>
			<!--<div class="row notice_fw" style="display: none;">-->
				<div class="col-md-12">
					<div class="card card-danger collapsed-card button_load">
						<div class="card-header" data-card-widget="collapse">
							<h3 class="card-title">Notice</h3>
							<div class="card-tools">
								<button type="button" class="btn btn-tool parser_expand" title="Collapse">
									<i class="fas fa-plus"></i>
								</button>
							</div>
						</div>
					
						<div class="card-body">
							<div class="row">
								<div class="col-sm-6">
									<table class="table table-bordered table-striped table-hover">
										<tr>
											<th>itemlist</th>
											<th>Option</th>
											<th>Description</th>
										</tr>
										<tr>
											<td>Touch coordinate origin position on Sram</td>
											<td class="itemlist_style" name="itemlist_touch_coord"></td>
											<td>Sram收值預設用option1，沒辦法外部調整；<br/>畫線頁面可以動態調整x y反向</td>
										</tr>
										<tr>
											<td>Touch point number (Max.)</td>
											<td class="itemlist_style" name="itemlist_tp_point"></td>
											<td>可以調0x100070F8</td>
										</tr>
										<tr>
											<td>Touch Interrupt Trigger Type</td>
											<td class="itemlist_style" name="itemlist_tsix_trigger"></td>
											<td>可以調0x10007089 bit 0</td>
										</tr>
										<tr>
											<td>Touch Report Coordinate Formation</td>
											<td class="itemlist_style" name="itemlist_protocol"></td>
											<td>目前8098 FW用option 1，沒辦法外部調整</td>
										</tr>
										<tr>
											<td>Need Selftest normal mode?</td>
											<td class="itemlist_style" name="itemlist_self_test_normal"></td>
											<td>目前8098 FW預設關，沒辦法外部調整，但FAE需要填寫self test mapping</td>
										</tr>
										<tr>
											<td>Need Selftest Inpect mode?</td>
											<td class="itemlist_style" name="itemlist_self_test_inspect"></td>
											<td>目前8098 FW預設關，沒辦法外部調整</td>
										</tr>
										<tr>
											<td>FAIL_DET output mode</td>
											<td class="itemlist_style" name="itemlist_fail_det"></td>
											<td>Please refer to Rfeh_9A and Rfeh_9B.</td>
										</tr>
										<tr>
											<td>Need integrate bridge IC FAIL_DET?</td>
											<td class="itemlist_style" name="itemlist_gpio3"></td>
											<td>8098預設開，如果要關閉的話，請在dd init code把OE關閉<br/>0xE5 bank1 PA6 bit5設0</td>
										</tr>
										<tr>
											<td>Need LPWUG?</td>
											<td class="itemlist_style" name="itemlist_lpwug"></td>
											<td>8098預設關閉，外部不能調整</td>
										</tr>
										<tr>
											<td>Need Glove?</td>
											<td class="itemlist_style" name="itemlist_glove"></td>
											<td>8098預設打開，glove thx需要調整，可以下密碼關閉</td>
										</tr>
										<tr>
											<td>Osc Tracking Type</td>
											<td class="itemlist_style" name="itemlist_osc_tracking"></td>
											<td>外部不能調整</td>
										</tr>
										<tr>
											<td>是否需要燒錄DGMA到flash</td>
											<td class="itemlist_style" name="itemlist_dgc"></td>
											<td>外部不能調整，80A1開始可以透過parser顯示</td>
										</tr>
										<tr>
											<td>是否需要燒錄AGMA到flash</td>
											<td class="itemlist_style" name="itemlist_agma"></td>
											<td>外部不能調整，80A1開始可以透過parser顯示</td>
										</tr>
										<tr>
											<td>是否需要燒錄VCOM到flash</td>
											<td class="itemlist_style" name="itemlist_vcom"></td>
											<td>外部不能調整，80A1開始可以透過parser顯示</td>
										</tr>
										<!--
										<tr>
											<td></td>
											<td class="itemlist_style" name=""></td>
											<td></td>
										</tr>
										-->
									</table>
								</div>
								<div class="col-sm-6">
									<div id="compare_notice" style="width: 100%;">
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			
			
			<!--*******************************************************-->
			<div class="row">
				<div class="col-md-12">
					<div class="card card-olive collapsed-card button_load">
						<div class="card-header" data-card-widget="collapse">
							<h3 class="card-title">Flash header</h3>
							<div class="card-tools">
								<button type="button" class="btn btn-tool parser_expand" title="Collapse">
									<i class="fas fa-plus"></i>
								</button>
							</div>
						</div>
						<!-- /.card-header -->
						<div class="card-body">
							<div class="row">
								<div class="col-sm-5">
									<table class="table table-striped">
									  <thead>
										<tr>
										  <th>Function from flash</th>
										  <th>Switch</th>
										</tr>
									  </thead>
									  <tbody>
										<?php 
											$table = json_decode($PTABLE);
											$funcs = $table->FLASH_FUNC;
											
											foreach($funcs as $item){
												echo '<tr>';
												echo '	<td>'.$item->name.'</td>';
												
												if($val_flash_func==""){
													if($val_fae == 1){
														echo '	<td class="5478_flash_func 5478_flash_func_'.$item->class.'" name="'.$item->name.'" bit="'.$item->bit.'" style="cursor: pointer;"><span class="badge bg-warning">Off</span></td>';
													}
													else{
														echo '	<td class="5478_flash_func 5478_flash_func_macro 5478_flash_func_'.$item->class.'" name="'.$item->name.'" bit="'.$item->bit.'" style="cursor: pointer;"><span class="badge bg-warning">Off</span></td>';
													}
												}
												else{
													echo '	<td class="5478_flash_func 5478_flash_func_'.$item->class.'" name="'.$item->name.'" bit="'.$item->bit.'" style="cursor: pointer;">';
													$tmp = $item->name;
													if(($val_flash_func->$tmp) == 'On'){
														echo '	<span class="badge bg-success">On</span>';
														
													}
													else{
														echo '	<span class="badge bg-warning">Off</span>';
													}
													
												}
												echo '  </td>';
												echo '</tr>';
											
											}
											
										?>
									  </tbody>
									</table>
								</div>
								<div class="col-sm-4">
									<table class="table table-striped" spellcheck="false">
									  <thead>
										<tr>
										  <th>Flash Header</th>
										  <th>Content</th>
										</tr>
									  </thead>
									  <tbody>
										<?php 
											$funcs = $table->FLASH_HEADER;
											foreach($funcs as $item){
												echo '<tr>';
												echo '	<td>'.$item->name.'</td>';
												if($val_flash_header==""){
													if($val_fae == 1){
														echo '	<td class="5478_flash_header" name="'.$item->name.'" contenteditable="false">';
													}
													else{
														echo '	<td class="5478_flash_header" name="'.$item->name.'" contenteditable="true">';
													}
													echo '  </td>';
												}
												else{
													echo '	<td class="5478_flash_header" name="'.$item->name.'">';
													$tmp = $item->name;
													echo '	'.$val_flash_header->$tmp;
													echo '  </td>';
												}
												echo '</tr>';
												
											}
										?>
										
									  </tbody>
									</table>
								</div>
								<div class="col-sm-3">
									<table class="table table-striped">
									  <thead>
										<tr>
										  <th>TP Version</th>
										  <th>Content</th>
										</tr>
									  </thead>
									  <tbody>
										<?php 
										
											$funcs = $table->TP_VERSION_TABLE;
											foreach($funcs as $item){
												echo '<tr>';
												echo '	<td>'.$item->name.'</td>';
												if($val_tp_version==""){
													if($val_fae == 1){
														echo '	<td class="5478_tp_version" name="'.$item->name.'" contenteditable="false">';
													}
													else{
														echo '	<td class="5478_tp_version" name="'.$item->name.'" contenteditable="true">';
													}
													echo '  </td>';
												}
												else{
													echo '	<td class="5478_tp_version" name="'.$item->name.'">';
													$tmp = $item->name;
													echo '	'.$val_tp_version->$tmp;
													echo '  </td>';
												}
												echo '</tr>';
												
											}
										?>
										
									  </tbody>
									</table>
								</div>
							</div> <!--row-->
						</div>
					  <!-- /.card-body -->
					</div>
					<!-- /.card -->
				</div>
			</div> <!-- row --> 
			
			<div class="row">
				<div class="col-md-12">
					<div class="card card-olive collapsed-card button_load">
					  <div class="card-header" data-card-widget="collapse">
						<h3 class="card-title">ALG</h3>
						<div class="card-tools">
							<button type="button" class="btn btn-tool parser_expand" title="Collapse">
								<i class="fas fa-plus"></i>
							</button>
						</div>
					  </div>
					  <!-- /.card-header -->
					  <div class="card-body">
						<div class="row">
								<div class="col-md-6">
									<table class="table table-striped">
										<thead>
											<tr>
												<th>ALG</th>
												<th>Address from 0x11500</th>
												<th>Hex Value</th>
												<th>Sample Hex Value</th>
											</tr>
										</thead>
										<tbody>
											<?php 
												
												$funcs = $table->TP_HW_CONFIG_1_COD_FW_CONFIG;
												$i = 0;
												foreach($funcs as $item){
													echo '<tr>';
													echo '	<td>'.$item->name.'</td>';
													echo '	<td>RFEH_'.dechex($i).'</td>';
													if($val_alg==""){
														echo '	<td class="5478_sram_alg" name="'.$item->name.'" rfeh="'.dechex($i).'">0</td>';
													}
													else{
														echo '	<td class="5478_sram_alg" name="'.$item->name.'" rfeh="'.dechex($i).'">';
														$tmp = 'rfeh_'.dechex($i);
														echo '		'.$val_alg->$tmp;
														echo '  </td>';
													}
													echo '<td class="tp_sample_alg" rfeh="'.dechex($i).'">'.$Tp_init_obj[$i]["value"].'</td>';
													echo '</tr>';
													$i+=1;
												}
											?>
										</tbody>
									</table>
								</div>
								<div class="col-md-6">
									<table class="table table-striped">
										<thead>
											<tr>
												<th>Auto Self</th>
												<th>Address from 0x11680</th>
												<th>Hex Value</th>
												<th>Sample Hex Value</th>
											</tr>
										</thead>
										<tbody>
											<?php 
											
											$offset = 0;
											$funcs = $table->TP_HW_CONFIG_1_AUTO_SELF;
											foreach($funcs as $item){
												echo '<tr>';
												echo '	<td>'.$item->name.'</td><td></td>';
												if($val_auto_self == ""){
													echo '	<td class="5478_sram_autoself" name="'.$item->name.'" size="'.$item->size.'" offset="'.$offset.'">0</td>';
												}
												else{
													$tmp = $item->name;
													echo '	<td class="5478_sram_autoself" name="'.$item->name.'" size="'.$item->size.'" offset="'.$offset.'">';
													echo '	'.$val_auto_self->$tmp;
													echo '	</td>';
												}
												$offset = ($offset + $item->size);
												
												echo '	<td>'.$Tp_init_obj[$i]["value"].'</td>';
												$i+=1;
												
												echo '</tr>';
												
											}
											?>
										
										</tbody>
									</table>
								</div>
								<div class="col-md-12" style="display: none;">
									<?php
										$total_obj_count = count($Tp_init_obj);
										for($tc = $i; $tc < $total_obj_count; $tc++){
											//echo '<span class="5478_sram_alg_unlist" name="'.$Tp_init_obj[$tc]["name"].'">0</span>';
											echo '<span class="tp_sample_alg_unlist" name="'.$Tp_init_obj[$tc]["name"][0].'">'.$Tp_init_obj[$tc]["value"].'</span>';
											$i+=1;
										}
									?>
								</div>
								
							</div> <!--row-->
							<div class="row">
								<div class="col-md-12">
									<textarea class="textnote" style="width: 100%; height: 900px; font-size: 13px;" id="bin_tp_initial_code" readonly></textarea>
								</div>
							</div>
					  </div>
					  <!-- /.card-body -->
					</div>
					<!-- /.card -->
				</div>
            </div>
			
			<?php
				if($val_fae == 1){
					echo '<div class="row" style="display: none;">';
				}
				else{
					echo '<div class="row" style="display:block;">';
				}
			?>
			<!--<div class="row">-->
				<div class="col-md-12">
					<div class="card card-olive collapsed-card button_load">
					  <div class="card-header" data-card-widget="collapse">
						<h3 class="card-title">Chart</h3>
						<div class="card-tools">
							<button type="button" class="btn btn-tool parser_expand" title="Collapse">
								<i class="fas fa-plus"></i>
							</button>
						</div>
					  </div>
					  <!-- /.card-header -->
					  <div class="card-body">
						<div class="row">
							<div class="col-md-12">
								<div class="card">
									<div class="card-header">
										<h3 class="card-title">
											<i class="fas fa-chart-pie mr-1"></i>
											chart
										</h3>
										<div class="card-tools">
										
										  <ul class="nav nav-pills ml-auto">
											<li class="nav-item">
											  <a class="nav-link active" href="#Bl_build_chart_container" data-toggle="tab">Baseline Build</a>
											</li>
											<li class="nav-item">
											  <a class="nav-link" href="#Bl_update_chart_container" data-toggle="tab">Baseline Update</a>
											</li>
											<li class="nav-item">
											  <a class="nav-link " href="#Signal_chart" data-toggle="tab">Signal Threshold</a>
											</li>
										  </ul>
										</div>
									</div><!-- /.card-header -->
								  <div class="card-body">
									<div class="tab-content" style="height: 500px">
									  <!-- Morris chart - Sales -->
									  <div class="tab-pane active" id="Bl_build_chart_container" > </div>
									  <div class="tab-pane" id="Bl_update_chart_container"> </div>
									  <div class=" tab-pane" id="Signal_chart"></div>
										                         
								
									</div>
								  </div><!-- /.card-body -->
								</div>
							</div>
						</div>
					  </div>
					  <!-- /.card-body -->
					</div>
					<!-- /.card -->
				</div>
            </div>
			
			<div class="row" id="oem_project_detail" bit="<?php echo $proj_detail_info;?>">
				<div class="col-md-12">
					<div class="card card-olive collapsed-card">
					  <div class="card-header" data-card-widget="collapse">
						<h3 class="card-title">Parse ALG</h3>
						<div class="card-tools">
							<button type="button" class="btn btn-tool" title="Collapse">
								<i class="fas fa-plus"></i>
							</button>
						</div>
					  </div>
					  <!-- /.card-header -->
					  <div class="card-body">
						<!--<h4>Custom Content Below</h4>-->
						<?php 
							$Tp_alg_parser = json_decode($val_parser_tp, true);
							
							$ultab = '';
							$tabcontent = '';
							$modalcontent='';
							
							foreach($Tp_alg_parser as $tp_alg_item){
								$ultab .= ' <li class="nav-item">';
								$ultab .= ' 	<a class="nav-link" id="custom-content-below-'.$tp_alg_item["name"].'-tab" data-toggle="pill" href="#custom-content-below-'.$tp_alg_item["name"].'" role="tab" aria-controls="custom-content-below-'.$tp_alg_item["name"].'" aria-selected="'.$tp_alg_item["defaulttab"].'">'.$tp_alg_item["tabname"].'</a>'."\n";
								$ultab .= ' </li>';
								
								
								if($tp_alg_item["defaulttab"] == "true"){
									$tabcontent .= '<div class="tab-pane fade show active" id="custom-content-below-'.$tp_alg_item["name"].'" role="tabpanel" aria-labelledby="custom-content-below-'.$tp_alg_item["name"].'-tab">';
								}
								else{
									$tabcontent .= '<div class="tab-pane fade show" id="custom-content-below-'.$tp_alg_item["name"].'" role="tabpanel" aria-labelledby="custom-content-below-'.$tp_alg_item["name"].'-tab">';
								}
								$tabcontent .= '<div class="row">';
								$tabcontent .= '	<div class="col-md-4 pt-4">';
								if($tp_alg_item["imgname"]!=""){
									$tabcontent .= '		<a href="#" data-toggle="modal" data-target="#modal-'.$tp_alg_item["name"].'">';
									$tabcontent .= '			<img  style="width: 100%;" src="'.base_url().'assets/img/'.$tp_alg_item["imgname"].'" ></img>'."\n";
									$tabcontent .= '		</a>';
								}
								$tabcontent .= '	</div>';
								$tabcontent .= '	<div class="col-md-8">';
								$tabcontent .= '		<table class="table table-striped">';
								$tabcontent .= '			<thead>';
								$tabcontent .= '				<tr>';
								$tabcontent .= '					<th>Name</th>';
								$tabcontent .= '					<th>Condition</th>';
								$tabcontent .= '					<th>Rfeh[addr]</th>';
								$tabcontent .= '					<th>Value (Demical)</th>';
								$tabcontent .= '					<th class="tp_sample_alg_val">Sample (Demical)</th>';
								if(1){//$proj_detail_info == 0){
									$tabcontent .= '	<th class="tp_range_alg">Checker</th>';
								}
								$tabcontent .= '				</tr>';
								$tabcontent .= '			</thead>';
								$tabcontent .= '			<tbody>';
								
								//****************************************
								// modal
								if($tp_alg_item["imgname"]!=""){
									$modalcontent .= '<div class="modal fade" id="modal-'.$tp_alg_item["name"].'" style="display: none;" aria-hidden="true">';
									$modalcontent .= '	<div class="modal-dialog">';
									$modalcontent .= '		<div class="modal-content" style="width:850px;">';
									$modalcontent .= '			<div class="modal-header">';
						 
									$modalcontent .= '				<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
									$modalcontent .= '					<span aria-hidden="true">×</span>';
									$modalcontent .= '				</button>';
									$modalcontent .= '			</div>';
									$modalcontent .= '			<div class="modal-body">';
									if(strpos($tp_alg_item["imgname"],'.svg') !== false){
										$modalcontent .= '				<object type="image/svg+xml" style="width: 100%" data="'.base_url().'assets/img/'.$tp_alg_item["imgname"].'"></object>'."\n";
									}
									else{
										$modalcontent .= '				<object type="image/png" style="width: 100%" data="'.base_url().'assets/img/'.$tp_alg_item["imgname"].'"></object>'."\n";
									}
						  
									$modalcontent .= '			</div>';
									$modalcontent .= '		</div>';
									$modalcontent .= '		<!-- /.modal-content -->';
									$modalcontent .= '	</div>';
									$modalcontent .= '	<!-- /.modal-dialog -->';
									$modalcontent .= '</div>';
								}
								//****************************************
									// Init array.....
									//$arr_backind = array();
									unset($arr_backind);
									$arr_backind=array();
									
									foreach($tp_alg_item["parameters"] as $current_str_ind){
										$current_ind = hexdec($current_str_ind); 
										
										// get index=========================
										//$getind = '0x'.dechex($current_ind);
										
										if (array_key_exists($current_str_ind, $arr_backind)){ // is duplicate key
											$multi_bitset = $arr_backind[$current_str_ind];
											$arr_backind[$current_str_ind]+=1;
											
										}
										else{
											$arr_backind[$current_str_ind] = 1;
											$multi_bitset = 0;
										}
										// Get information......................................................
										$tp_c_title = $Tp_init_obj[$current_ind]["parsetitle"][$multi_bitset];
										$tp_c_condition = $Tp_init_obj[$current_ind]["condition"][$multi_bitset];
										$tp_c_rfeh = $Tp_init_obj[$current_ind]["parserfeh"][$multi_bitset];
										$tp_c_alg_name = $Tp_init_obj[$current_ind]["name"][$multi_bitset]; 
										$tp_c_max = $Tp_init_obj[$current_ind]["max"][$multi_bitset];
										$tp_c_min = $Tp_init_obj[$current_ind]["min"][$multi_bitset];
										$tp_c_patname = $Tp_init_obj[$current_ind]["patname"][$multi_bitset];
										$tp_c_description = $Tp_init_obj[$current_ind]["description"][$multi_bitset];
										// Fill out==================================================================

										$tabcontent .= '				<tr>';
										$tabcontent .= '					<td class="">'.$tp_c_title.'</td>';
										$tabcontent .= '					<td class="">'.$tp_c_condition.'</td>';
										$tabcontent .= $tp_c_rfeh;
										$tabcontent .= '					<td class="5478_sram_alg_val" name="'.$tp_c_alg_name.'">0</td>';
										$tabcontent .= '					<td class="tp_sample_alg_val" name="'.$tp_c_alg_name.'">0</td>';
										
										if(1){//$proj_detail_info == 0){
											if(($tp_c_max == -1) && ($tp_c_min == -1)){ // double check
												$tabcontent .= '					<td class="tp_range_alg" name="'.$tp_c_alg_name.'" max="'.$tp_c_max.'" min="'.$tp_c_min.'" patname="'.$tp_c_patname.'">'.$tp_c_description.'</td>';
											}
											else if(($tp_c_max == 0) && ($tp_c_min == 0)){ // no checker
												$tabcontent .= '					<td class="tp_range_alg" name="'.$tp_c_alg_name.'" max="'.$tp_c_max.'" min="'.$tp_c_min.'" patname="'.$tp_c_patname.'">'.$tp_c_description.'</td>';
											}
											else if($tp_c_max == $tp_c_min){
												$tabcontent .= '					<td class="tp_range_alg" name="'.$tp_c_alg_name.'" max="'.$tp_c_max.'" min="'.$tp_c_min.'" patname="'.$tp_c_patname.'">'.$tp_c_min.'<br/>'.$tp_c_description.'</td>';
											}
											else{
												$tabcontent .= '					<td class="tp_range_alg" name="'.$tp_c_alg_name.'" max="'.$tp_c_max.'" min="'.$tp_c_min.'" patname="'.$tp_c_patname.'">'.$tp_c_min.' ~ '.$tp_c_max.'<br/>'.$tp_c_description.'</td>';
											}
											
										}
										$tabcontent .= '				</tr>';
									}
								//****************************************
								$tabcontent .= '			</tbody>';
								$tabcontent .= '		</table>';
								$tabcontent .= '	</div>';
								$tabcontent .= '</div>';
								$tabcontent .= '</div><!-- tab-pane-->';
							}
						
						?>
						
						
						<ul class="nav nav-tabs" id="custom-content-below-tab" role="tablist">
							<li class="nav-item">
								<a class="nav-link" id="custom-content-below-switch-threshold-tab" data-toggle="pill" href="#custom-content-below-switch-threshold" role="tab" aria-controls="custom-content-below-switch-threshold" aria-selected="false">Function Switch</a>
							</li>
							<?php
								echo $ultab;
							?>
						</ul>
						<div class="tab-content" id="custom-content-below-tabContent">
							<div class="tab-pane fade" id="custom-content-below-switch-threshold" role="tabpanel" aria-labelledby="custom-content-below-switch-threshold-tab">
								<div class="row">
									
									<div class="col-md-12 pt-4">
										<table class="table table-striped">
											<thead>
												<tr>
												  <th>Function</th>
												   <th>Address</th>
												  <th>Enable/Disable</th>
												  <th>Sample (Demical)</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td class="">PALM_EN</td>
													<td class="">(Rfeh_02) bit 0</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_2" bit="0">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_2" bit="0">0</td>
												</tr>
												<tr>
													<td class="">RECAL_CAL_EN</td>
													<td class="">(Rfeh_02) bit 1</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_2" bit="1">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_2" bit="1">0</td>
												</tr>
												<tr>
													<td class="">BAS_UDT_EN</td>
													<td class="">(Rfeh_02) bit 2</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_2" bit="2">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_2" bit="2">0</td>
												</tr>
												<tr>
													<td class="">IDLE_EN</td>
													<td class="">(Rfeh_02) bit 3</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_2" bit="3">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_2" bit="3">0</td>
												</tr>
												<tr>
													<td class="">OSR_HOP_EN</td>
													<td class="">(Rfeh_02) bit 4</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_2" bit="4">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_2" bit="4">0</td>
												</tr>
												<tr>
													<td class="">CO_AXIS_CC_EN</td>
													<td class="">(Rfeh_02) bit 5</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_2" bit="5">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_2" bit="5">0</td>
												</tr>
												<tr>
													<td class="">LCM_CC_EN</td>
													<td class="">(Rfeh_02) bit 6</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_2" bit="6">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_2" bit="6">0</td>
												</tr>
												<tr>
													<td class="">OSC_TRACK_EN</td>
													<td class="">(Rfeh_02) bit 7</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_2" bit="7">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_2" bit="7">0</td>
												</tr>
												<tr>
													<td class="">SW_TSIX_EN</td>
													<td class="">(Rfeh_03) bit 0</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_3" bit="0">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_3" bit="0">0</td>
												</tr>
												<tr>
													<td class="">DSI_EN</td>
													<td class="">(Rfeh_03) bit 1</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_3" bit="1">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_3" bit="1">0</td>
												</tr>
												<tr>
													<td class="">SLEEP_OUT_EN</td>
													<td class="">(Rfeh_03) bit 2</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_3" bit="2">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_3" bit="2">0</td>
												</tr>
												<tr>
													<td class="">DISPLAY_ON_EN</td>
													<td class="">(Rfeh_03) bit 3</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_3" bit="3">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_3" bit="3">0</td>
												</tr>
												<tr>
													<td class="">LPWUG_EN</td>
													<td class="">(Rfeh_03) bit 4</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_3" bit="4">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_3" bit="4">0</td>
												</tr>
												<tr>
													<td class="">HSM_EN</td>
													<td class="">(Rfeh_03) bit 5</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_3" bit="5">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_3" bit="5">0</td>
												</tr>
												<tr>
													<td class="">WTR_MOD_EN</td>
													<td class="">(Rfeh_03) bit 6</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_3" bit="6">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_3" bit="6">0</td>
												</tr>
												<tr>
													<td class="">TX_HOP_EN</td>
													<td class="">(Rfeh_03) bit 7</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_3" bit="7">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_3" bit="7">0</td>
												</tr>
												<tr>
													<td class="">ID_FIFO_EN</td>
													<td class="">(Rfeh_04) bit 0</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_4" bit="0">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_4" bit="0">0</td>
												</tr>
												<tr>
													<td class="">STATE_INFO_EN</td>
													<td class="">(Rfeh_04) bit 1</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_4" bit="1">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_4" bit="1">0</td>
												</tr>
												<tr>
													<td class="">RAW_DBG_EN</td>
													<td class="">(Rfeh_04) bit 2</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_4" bit="2">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_4" bit="2">0</td>
												</tr>
												<tr>
													<td class="">ESD_DBG_EN</td>
													<td class="">(Rfeh_04) bit 3</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_4" bit="3">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_4" bit="3">0</td>
												</tr>
												<tr>
													<td class="">VIRTUAL_120HZ_EN</td>
													<td class="">(Rfeh_04) bit 4</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_4" bit="4">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_4" bit="4">0</td>
												</tr>
												<tr>
													<td class="">X_DEBUG_EN</td>
													<td class="">(Rfeh_04) bit 7</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_4" bit="7">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_4" bit="7">0</td>
												</tr>
												<tr>
													<td class="">DEFAULT_TP_MODE</td>
													<td class="">(Rfeh_73) bit 0</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_73" bit="0">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_73" bit="0">0</td>
												</tr>
												<tr>
													<td class="">VR_DIFF_EN</td>
													<td class="">(Rfeh_73) bit 1</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_73" bit="1">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_73" bit="1">0</td>
												</tr>
												<tr>
													<td class="">SAME_COORD_EN</td>
													<td class="">(Rfeh_73) bit 2</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_73" bit="2">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_73" bit="2">0</td>
												</tr>
												<tr>
													<td class="">BMW_V2_BIG_ENDIAN_EN</td>
													<td class="">(Rfeh_73) bit 3</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_73" bit="3">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_73" bit="3">0</td>
												</tr>
												<tr>
													<td class="">IDLE_FILTER_EN</td>
													<td class="">(Rfeh_73) bit 4</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_73" bit="4">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_73" bit="4">0</td>
												</tr>
												<tr>
													<td class="">BMW_PROTOCOL_V2_EN</td>
													<td class="">(Rfeh_73) bit 5</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_73" bit="5">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_73" bit="5">0</td>
												</tr>
												<tr>
													<td class="">DD_OSC_TRACK_EN</td>
													<td class="">(Rfeh_73) bit 6</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_73" bit="6">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_73" bit="6">0</td>
												</tr>
												<tr>
													<td class="">BMW_PROTOCOL_EN</td>
													<td class="">(Rfeh_73) bit 7</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_73" bit="7">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_73" bit="7">0</td>
												</tr>
												<tr>
													<td class="">X_REV</td>
													<td class="">(Rfeh_74) bit 0</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_74" bit="0">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_74" bit="0">0</td>
												</tr>
												<tr>
													<td class="">Y_REV</td>
													<td class="">(Rfeh_74) bit 1</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_74" bit="1">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_74" bit="1">0</td>
												</tr>
												<tr>
													<td class="">XY_REV</td>
													<td class="">(Rfeh_74) bit 2</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_74" bit="2">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_74" bit="2">0</td>
												</tr>
												<tr>
													<td class="">ROBOT_TEST_EN</td>
													<td class="">(Rfeh_74) bit 3</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_74" bit="3">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_74" bit="3">0</td>
												</tr>
												<tr>
													<td class="">X_INTP</td>
													<td class="">(Rfeh_74) bit 4</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_74" bit="4">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_74" bit="4">0</td>
												</tr>
												<tr>
													<td class="">Y_INTP</td>
													<td class="">(Rfeh_74) bit 5</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_74" bit="5">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_74" bit="5">0</td>
												</tr>
												<tr>
													<td class="">BORDER_PREVENT_EN</td>
													<td class="">(Rfeh_74) bit 6</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_74" bit="6">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_74" bit="6">0</td>
												</tr>
												<tr>
													<td class="">VIRTUAL_BLOCK_EN</td>
													<td class="">(Rfeh_74) bit 7</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_74" bit="7">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_74" bit="7">0</td>
												</tr>
												<tr>
													<td class="">SIG_THX_SCALE_EN</td>
													<td class="">(Rfeh_ad) bit 0</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_ad" bit="0">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_ad" bit="0">0</td>
												</tr>
												<tr>
													<td class="">SHOW_ALL_BL_EN</td>
													<td class="">(Rfeh_ad) bit 1</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_ad" bit="1">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_ad" bit="1">0</td>
												</tr>
												<tr>
													<td class="">LEAVE_THX_EN</td>
													<td class="">(Rfeh_ad) bit 2</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_ad" bit="2">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_ad" bit="2">0</td>
												</tr>
												<tr>
													<td class="">NOISE_DET_EN</td>
													<td class="">(Rfeh_ad) bit 3</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_ad" bit="3">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_ad" bit="3">0</td>
												</tr>
												<tr>
													<td class="">DA_PROTOCOL_EN</td>
													<td class="">(Rfeh_ad) bit 4</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_ad" bit="4">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_ad" bit="4">0</td>
												</tr>
												<tr>
													<td class="">FCA_PROTOCOL_EN</td>
													<td class="">(Rfeh_ad) bit 5</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_ad" bit="5">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_ad" bit="5">0</td>
												</tr>
												<tr>
													<td class="">ATMEL_PROTOCOL_EN</td>
													<td class="">(Rfeh_ad) bit 6</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_ad" bit="6">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_ad" bit="6">0</td>
												</tr>
												<tr>
													<td class="">RAWDATA_NORMALIZE_EN</td>
													<td class="">(Rfeh_ad) bit 7</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_ad" bit="7">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_ad" bit="7">0</td>
												</tr>
												<tr>
													<td class="">STOP_FW_BY_HOST_EN</td>
													<td class="">(Rfeh_af) bit 0</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_af" bit="0">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_af" bit="0">0</td>
												</tr>
												<tr>
													<td class="">HX_ID_EN</td>
													<td class="">(Rfeh_af) bit 1</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_af" bit="1">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_af" bit="1">0</td>
												</tr>
												<tr>
													<td class="">KNOB_EN</td>
													<td class="">(Rfeh_af) bit 2</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_af" bit="2">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_af" bit="2">0</td>
												</tr>
												<tr>
													<td class="">HX_ID_PATCH_EN</td>
													<td class="">(Rfeh_af) bit 3</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_af" bit="3">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_af" bit="3">0</td>
												</tr>
												<tr>
													<td class="">TSIX_LEVEL_KEEP_LOW_EN</td>
													<td class="">(Rfeh_af) bit 4</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_af" bit="4">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_af" bit="4">0</td>
												</tr>
												<tr>
													<td class="">SENSITIVITY_MODE_BIT0</td>
													<td class="">(Rfeh_af) bit 5</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_af" bit="5">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_af" bit="5">0</td>
												</tr>
												<tr>
													<td class="">SENSITIVITY_MODE_BIT1</td>
													<td class="">(Rfeh_af) bit 6</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_af" bit="6">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_af" bit="6">0</td>
												</tr>
												<tr>
													<td class="">HX_ID_PALM_EN</td>
													<td class="">(Rfeh_af) bit 7</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_af" bit="7">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_af" bit="7">0</td>
												</tr>
												<tr>
													<td class="">GHOST_PROTECTION_TSIX_EN</td>
													<td class="">(Rfeh_b0) bit 0</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b0" bit="0">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b0" bit="0">0</td>
												</tr>
												<tr>
													<td class="">PARTIAL_PALM_EN</td>
													<td class="">(Rfeh_b0) bit 1</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b0" bit="1">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b0" bit="1">0</td>
												</tr>
												<tr>
													<td class="">GHOST_PROTECT_SKIP_BUILD_BL_EN</td>
													<td class="">(Rfeh_b0) bit 2</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b0" bit="2">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b0" bit="2">0</td>
												</tr>
												<tr>
													<td class="">GHOST_PROTECT_SKIP_UPDATE_BL_EN</td>
													<td class="">(Rfeh_b0) bit 3</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b0" bit="3">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b0" bit="3">0</td>
												</tr>
												<tr>
													<td class="">RECAL_BY_GHOST_PROTECT_EN</td>
													<td class="">(Rfeh_b0) bit 4</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b0" bit="4">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b0" bit="4">0</td>
												</tr>
												<tr>
													<td class="">GHOST_PROTECT_SKIP_RECOUNT_EN</td>
													<td class="">(Rfeh_b0) bit 5</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b0" bit="5">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b0" bit="5">0</td>
												</tr>
												<tr>
													<td class="">GAMMA_STOP_PO_STATUS_EN</td>
													<td class="">(Rfeh_b0) bit 6</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b0" bit="6">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b0" bit="6">0</td>
												</tr>
												
												<tr>
													<td class="">HX_ID_EVENT_OFF</td>
													<td class="">(Rfeh_b1) bit 0</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b1" bit="0">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b1" bit="0">0</td>
												</tr>
												<tr>
													<td class="">HX_ID_MOVE_FORMAT_EN</td>
													<td class="">(Rfeh_b1) bit 1</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b1" bit="1">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b1" bit="1">0</td>
												</tr>
												<tr>
													<td class="">HX_ID_LEAVE_WITH_COORD_EN</td>
													<td class="">(Rfeh_b1) bit 2</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b1" bit="2">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b1" bit="2">0</td>
												</tr>
												<tr>
													<td class="">HX_ID_COORD_FORMAT_EN</td>
													<td class="">(Rfeh_b1) bit 3</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b1" bit="3">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b1" bit="3">0</td>
												</tr>
												<tr>
													<td class="">GM_DIAG_EN</td>
													<td class="">(Rfeh_b1) bit 4</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b1" bit="4">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b1" bit="4">0</td>
												</tr>
												<tr>
													<td class="">LH_60HZ_EN</td>
													<td class="">(Rfeh_b1) bit 5</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b1" bit="5">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b1" bit="5">0</td>
												</tr>
												<tr>
													<td class="">BORDER_ENHANCE_EN</td>
													<td class="">(Rfeh_b1) bit 6</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b1" bit="6">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b1" bit="6">0</td>
												</tr>
												<tr>
													<td class="">DD_REG_RW_SRAM_EN</td>
													<td class="">(Rfeh_b1) bit 7</td>
													<td class="5478_sram_alg_val 5478_sram_alg_val_rfeh_b1" bit="7">0</td>
													<td class="tp_sample_alg_val tp_sample_alg_val_rfeh_b1" bit="7">0</td>
												</tr>
											</tbody>
										</table>
									</div> <!-- col-md -->
								</div> <!-- row-->
						</div> <!--tab-pane-->
						
						<?php 
						echo $tabcontent;
						?>
						
						    
						</div><!--tab-content-->
					  </div><!-- /.card-body -->
					</div><!-- /.card -->
				</div>
			</div> <!-- row --> 
			
			<div class="row">
				<div class="col-md-12">
					<div class="card card-olive collapsed-card button_load">
					  <div class="card-header" data-card-widget="collapse">
						<h3 class="card-title">ADC Settings</h3>
						<div class="card-tools">
							<button type="button" class="btn btn-tool parser_expand" title="Collapse">
								<i class="fas fa-plus"></i>
							</button>
						</div>
					  </div>
					  <!-- /.card-header -->
					  <div class="card-body">
						<div class="row">
							<div class="col-md-6 oem_canvas_width_f0">
								<canvas id="f0_waveform" width="800" height="240" style="display: none;"></canvas>
							</div>
							<div class="col-md-6">
								<canvas id="f1_waveform" width="800" height="240" style="display: none;"></canvas>
							</div>
						</div> <!-- row -->
						
						<div class="row">
							<div class="col-md-6">
								<table class="table table-striped">
									<thead>
										<tr>
										  <th>Item</th>
										  <th>F0 Setting</th>
										</tr>
									</thead>
									<tbody>
									<?php 
										$offset = 0;
										$regs = $table->TP_ADC_CONFIG_NORMAL_F0;
										foreach($regs as $item){
											echo '<tr>';
											echo '	<td>'.$item->name.'</td>';
											if($val_waveform_f0==""){
												echo '	<td class="5478_sram_waveform 5478_sram_waveform_f0" name="'.$item->name.'" size="'.$item->size.'" offset="'.$offset.'">0</td>';
											}
											else{
												echo '	<td class="5478_sram_waveform 5478_sram_waveform_f0" name="'.$item->name.'" size="'.$item->size.'" offset="'.$offset.'">';
												$tmp = $item->name;
												echo '		'.$val_waveform_f0->$tmp;
												echo '  </td>';
											}
											echo '</tr>';
											$offset = ($offset+$item->size);
										}
									?>
									</tbody>
								</table>
							
							</div>
							<div class="col-md-6">
								<table class="table table-striped">
									<thead>
										<tr>
										  <th>Item</th>
										  <th>F1 Setting</th>
										</tr>
									</thead>
									<tbody>
									<?php 
										$offset = 0;
										//$regs = json_decode($PTABLE->SRAM_FREQ_SETTING_F1);
										$regs = $table->TP_ADC_CONFIG_NORMAL_F1;
										foreach($regs as $item){
											echo '<tr>';
											echo '	<td>'.$item->name.'</td>';
											if($val_waveform_f1 == ""){
												echo '	<td class="5478_sram_waveform 5478_sram_waveform_f1" name="'.$item->name.'" size="'.$item->size.'" offset="'.$offset.'">0</td>';
											}
											else{
												echo '	<td class="5478_sram_waveform 5478_sram_waveform_f1" name="'.$item->name.'" size="'.$item->size.'" offset="'.$offset.'">';
												$tmp = $item->name;
												echo '		'.$val_waveform_f1->$tmp;
												echo '  </td>';
											}
											echo '</tr>';
											$offset = ($offset+$item->size);
										}
									?>
									</tbody>
								</table>
							
							</div>
						</div>

					  </div>
					  <!-- /.card-body -->
					</div>
					<!-- /.card -->
				</div>
				
			</div> <!-- row --> 
			
			<div class="row">
				<div class="col-sm-12">
					<div class="card card-olive collapsed-card button_load">
						<div class="card-header" data-card-widget="collapse">
							<h3 class="card-title">DD init code</h3>
							<div class="card-tools">
								<button type="button" class="btn btn-tool parser_expand" title="Collapse">
									<i class="fas fa-plus"></i>
								</button>
							</div>
						</div>
					
						<div class="card-body">
							<div class="row" style="/*color: #e85b84;*/">
								<div class="col-sm-5">
									<table class="table table-borderless">
										<tr style="background-color:#f4e79c;">
											<th>VSP</th>
											<th id="dd_reg_vsp_parse"></th>
										</tr>
									</table>
									<table class="table table-bordered dd_checker_table"></table>
								</div>
							
							
								<div class="col-sm-7">
										<?php 
										if($val_dd_header!=""){
											echo '<textarea class="textnote" style="width: 100%; height: 900px; " id="bin_dd_initial_code">'.$val_dd_header->value.'</textarea>';
										}
										else{
											echo '<textarea class="textnote" style="width: 100%; height: 900px; " id="bin_dd_initial_code"></textarea>';
										}
										?>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> <!-- row --> 
			<div class="row">
				<div class="col-sm-12">
					<div class="card card-olive collapsed-card button_load">
						<div class="card-header" data-card-widget="collapse">
							<h3 class="card-title">P2P Table</h3>
							<div class="card-tools">
								<button type="button" class="btn btn-tool parser_expand" title="Collapse">
									<i class="fas fa-plus"></i>
								</button>
							</div>
						</div>
					
						<div class="card-body">
							<div class="row">
								<div class="col-sm-12">
									
										<?php 
										if($val_p2p_table!=""){
											echo '<textarea class="textnote" style="width: 100%; height: 900px; font-size: 13px;" id="bin_p2p_table">'.$val_p2p_table->value.'</textarea>';
										}
										else{
											echo '<textarea class="textnote" style="width: 100%; height: 900px; font-size: 13px;" id="bin_p2p_table"></textarea>';
										}
										?>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> <!-- row --> 
			<?php
				if($proj_detail_info == 0){
					//if($val_fae == 1){
					//	echo '<div class="row" style="display: none;">';
					//}
					//else{
						echo '<div class="row" style="display: block;">';
					//}
					echo '	<div class="col-sm-12">';
					echo '		<div class="card card-info collapsed-card button_load">';
					echo '			<div class="card-header" data-card-widget="collapse">';
					echo '				<h3 class="card-title">DD Rom code</h3>';
					echo '				<div class="card-tools">';
					echo '					<button type="button" class="btn btn-tool parser_expand" title="Collapse">';
					echo '						<i class="fas fa-plus"></i>';
					echo '					</button>';
					echo '				</div>';
					echo '			</div>';
					echo '			<div class="card-body">';
					echo '				<div class="row mb-2">';
					echo '					<div class="col-sm-12">';
					echo '						<h5>Checksum&nbsp;&nbsp;';
					echo '							<span id="dd_rom_checksum" style="background-color: #A6DBF1;"></span>';
					echo '						</h5>';
					echo '					</div>';
					echo '				</div>';
					echo '				<div class="row">';
					echo '					<div class="col-sm-12">';
					echo '						<textarea class="textnote" style="width: 100%; height: 900px; font-size: 13px;" id="bin_dd_rom_code" readonly></textarea>';
					echo '					</div>';
					echo '				</div>';
					echo '			</div>';
					echo '		</div>';
					echo '	</div>';
					echo '</div> <!-- row --> ';
					echo '';
					//=======================================================
					echo '<div class="row">';
					echo '	<div class="col-sm-12">';
					echo '		<div class="card card-info collapsed-card button_load">';
					echo '			<div class="card-header" data-card-widget="collapse">';
					echo '				<h3 class="card-title">TP TSRAM</h3>';
					echo '				<div class="card-tools">';
					echo '					<button type="button" class="btn btn-tool parser_expand" title="Collapse">';
					echo '						<i class="fas fa-plus"></i>';
					echo '					</button>';
					echo '				</div>';
					echo '			</div>';
					echo '			<div class="card-body">';
					echo '				<div class="row mb-2">';
					echo '					<div class="col-sm-12">';
					echo '						<textarea class="textnote" style="width: 100%; height: 400px; font-size: 13px;" id="tp_tsram_normal" readonly></textarea>';
					echo '					</div>';
					echo '				</div>';
					echo '			</div>';
					echo '		</div>';
					echo '	</div>';
					echo '</div> <!-- row --> ';
					echo '';
					//=======================================================
					echo '<div class="row">';
					echo '	<div class="col-sm-12">';
					echo '		<div class="card card-info collapsed-card button_load">';
					echo '			<div class="card-header" data-card-widget="collapse">';
					echo '				<h3 class="card-title">Self Test mapping</h3>';
					echo '				<div class="card-tools">';
					echo '					<button type="button" class="btn btn-tool parser_expand" title="Collapse">';
					echo '						<i class="fas fa-plus"></i>';
					echo '					</button>';
					echo '				</div>';
					echo '			</div>';
					echo '			<div class="card-body">';
					echo '				<div class="row mb-2">';
					echo '					<div class="col-sm-12">';
					echo '						<textarea class="textnote" style="width: 100%; height: 300px; font-size: 13px;" id="tp_self_mapping" readonly></textarea>';
					echo '					</div>';
					echo '				</div>';
					echo '			</div>';
					echo '		</div>';
					echo '	</div>';
					echo '</div> <!-- row --> ';
					echo '';
					//=======================================================
					echo '<div class="row tx_rx_mapping_show">';
					echo '	<div class="col-sm-12">';
					echo '		<div class="card card-info collapsed-card button_load">';
					echo '			<div class="card-header" data-card-widget="collapse">';
					echo '				<h3 class="card-title">TX RX Mapping</h3>';
					echo '				<div class="card-tools">';
					echo '					<button type="button" class="btn btn-tool parser_expand" title="Collapse">';
					echo '						<i class="fas fa-plus"></i>';
					echo '					</button>';
					echo '				</div>';
					echo '			</div>';
					echo '			<div class="card-body">';
					echo '				<div class="row mb-2">';
					echo '					<div class="col-sm-12">';
					echo '						<label for="mapping_cascade_ic_num">cascade IC num</label>';
					echo '						<div class="input-group mb-3">';
					echo '							<div class="input-group-prepend">';
					echo '								<span class="input-group-text"><i class="fas fa-plug"></i></span>';
					echo '							</div>';
					echo '							<input type="text" class="form-control" id="mapping_cascade_ic_num" name="" placeholder="" >';
					echo '							<div class="input-group-append">';
					echo '								<span class="input-group-text" id="enter_cascade_ic" style="cursor: pointer; background-color: #E3EB98;">Enter</span>';
					echo '							</div>';
					echo '						</div>';
					echo '					</div>';
					echo '				</div>';
					echo '				<div class="row mb-2 post">';
					echo '					<div class="col-sm-12 text-xs" id="tx_rx_mapping_table">';					
					echo '					</div>';
					echo '				</div>';
					echo '			</div>';
					echo '		</div>';
					echo '	</div>';
					echo '</div> <!-- row --> ';
					echo '';					
				}
			?>
			<div class="row">
				<div class="col-sm-12">
					<div class="card card-info collapsed-card button_load">
						<div class="card-header" data-card-widget="collapse">
							<h3 class="card-title">DD OSC Calculate</h3>
							<div class="card-tools">
								<button type="button" class="btn btn-tool parser_expand" title="Collapse">
									<i class="fas fa-plus"></i>
								</button>
							</div>
						</div>
					
						<div class="card-body">
							<?php
								echo $dd_osc_table;
							?>
						</div>
					</div>
				</div>
			</div> <!-- row --> 
			<div class="row">
				<div class="col-sm-12">
					<div class="card card-info collapsed-card button_load">
						<div class="card-header" data-card-widget="collapse">
							<h3 class="card-title">Fail Detect OE</h3>
							<div class="card-tools">
								<button type="button" class="btn btn-tool parser_expand" title="Collapse">
									<i class="fas fa-plus"></i>
								</button>
							</div>
						</div>
					
						<div class="card-body">
							<div class="row">
								<div class="col-md-12">
									<table class="table table-striped" style="text-align: center">
										<thead>
											<td colspan="4">
												<b> E5_bank1 OE</b> <br>
												0xE5 bank0 PA1 bit0 is FAIL_DET_EN
											</td>
										</thead>
										<tbody>
											<tr><td>FAIL_DET[n]</td><td>DD PA Address</td><td>Function</td><td>OE</td></tr>
											<tr class=" "><td>[0]</td><td>0xE5 bank1 PA1 bit[0]</td><td>Video CRC Error[0]</td><td class="bin_parser_fail_det bin_parser_fail_det_pa1" pa="1" bit="0"></td></tr>
											<tr class=" "><td>[1]</td><td>0xE5 bank1 PA1 bit[1]</td><td>Video CRC Error[1]</td><td class="bin_parser_fail_det bin_parser_fail_det_pa1" pa="1" bit="1"></td></tr>
											<tr class=" "><td>[2]</td><td>0xE5 bank1 PA1 bit[2]</td><td>Video CRC Error[2]</td><td class="bin_parser_fail_det bin_parser_fail_det_pa1" pa="1" bit="2"></td></tr>
											<tr class=" "><td>[3]</td><td>0xE5 bank1 PA1 bit[3]</td><td>Video CRC Error[3]</td><td class="bin_parser_fail_det bin_parser_fail_det_pa1" pa="1" bit="3"></td></tr>
											<tr class=" "><td>[4]</td><td>0xE5 bank1 PA1 bit[4]</td><td>Video CRC Error[4]</td><td class="bin_parser_fail_det bin_parser_fail_det_pa1" pa="1" bit="4"></td></tr>
											<tr class=" "><td>[5]</td><td>0xE5 bank1 PA1 bit[5]</td><td>VDD undervoltage</td><td class="bin_parser_fail_det bin_parser_fail_det_pa1" pa="1" bit="5"></td></tr>
											<tr class=" "><td>[6]</td><td>0xE5 bank1 PA1 bit[6]</td><td>VSP undervoltage</td><td class="bin_parser_fail_det bin_parser_fail_det_pa1" pa="1" bit="6"></td></tr>
											<tr class=" "><td>[7]</td><td>0xE5 bank1 PA1 bit[7]</td><td>VSN undervoltage</td><td class="bin_parser_fail_det bin_parser_fail_det_pa1" pa="1" bit="7"></td></tr>
											<tr class=" "><td>[8]</td><td>0xE5 bank1 PA2 bit[0]</td><td>VGH undervoltage</td><td class="bin_parser_fail_det bin_parser_fail_det_pa2" pa="2" bit="0"></td></tr>
											<tr class=" "><td>[9]</td><td>0xE5 bank1 PA2 bit[1]</td><td>VGL undervoltage</td><td class="bin_parser_fail_det bin_parser_fail_det_pa2" pa="2" bit="1"></td></tr>
											<tr class=" "><td>[10]</td><td>0xE5 bank1 PA2 bit[2]</td><td>Abnormal LVDS signal</td><td class="bin_parser_fail_det bin_parser_fail_det_pa2" pa="2" bit="2"></td></tr>
											<tr class=" "><td>[11]</td><td>0xE5 bank1 PA2 bit[3]</td><td>LVDS unlock</td><td class="bin_parser_fail_det bin_parser_fail_det_pa2" pa="2" bit="3"></td></tr>
											<tr class=" "><td>[12]</td><td>0xE5 bank1 PA2 bit[4]</td><td>LVDS CLK lane Hiz</td><td class="bin_parser_fail_det bin_parser_fail_det_pa2" pa="2" bit="4"></td></tr>
											<tr class=" "><td>[13]</td><td>0xE5 bank1 PA2 bit[5]</td><td>No LVDS signal</td><td class="bin_parser_fail_det bin_parser_fail_det_pa2" pa="2" bit="5"></td></tr>
											<tr class=" "><td>[14]</td><td>0xE5 bank1 PA2 bit[6]</td><td>OTP reload fail</td><td class="bin_parser_fail_det bin_parser_fail_det_pa2" pa="2" bit="6"></td></tr>
											<tr class=" "><td>[15]</td><td>0xE5 bank1 PA2 bit[7]</td><td>OTP program fail</td><td class="bin_parser_fail_det bin_parser_fail_det_pa2" pa="2" bit="7"></td></tr>
											<tr class=" "><td>[16]</td><td>0xE5 bank1 PA3 bit[0]</td><td>Glass broken</td><td class="bin_parser_fail_det bin_parser_fail_det_pa3" pa="3" bit="0"></td></tr>
											<tr class=" "><td>[17]</td><td>0xE5 bank1 PA3 bit[1]</td><td>VDD over-voltage</td><td class="bin_parser_fail_det bin_parser_fail_det_pa3" pa="3" bit="1"></td></tr>
											<tr class=" "><td>[18]</td><td>0xE5 bank1 PA3 bit[2]</td><td>VSP over-voltage</td><td class="bin_parser_fail_det bin_parser_fail_det_pa3" pa="3" bit="2"></td></tr>
											<tr class=" "><td>[19]</td><td>0xE5 bank1 PA3 bit[3]</td><td>VSN over-voltage</td><td class="bin_parser_fail_det bin_parser_fail_det_pa3" pa="3" bit="3"></td></tr>
											<tr class=" "><td>[20]</td><td>0xE5 bank1 PA3 bit[4]</td><td>PWM Fail</td><td class="bin_parser_fail_det bin_parser_fail_det_pa3" pa="3" bit="4"></td></tr>
											<tr class=" "><td>[21]</td><td>0xE5 bank1 PA3 bit[5]</td><td>Flash Reload Error</td><td class="bin_parser_fail_det bin_parser_fail_det_pa3" pa="3" bit="5"></td></tr>
											<tr class=" "><td>[22]</td><td>0xE5 bank1 PA3 bit[6]</td><td>Overheat Error indicator</td><td class="bin_parser_fail_det bin_parser_fail_det_pa3" pa="3" bit="6"></td></tr>
											<tr class=" "><td>[23]</td><td>0xE5 bank1 PA3 bit[7]</td><td>Abnormal Gate signal</td><td class="bin_parser_fail_det bin_parser_fail_det_pa3" pa="3" bit="7"></td></tr>
											<tr class=" "><td>[24]</td><td>0xE5 bank1 PA4 bit[0]</td><td>Abnormal Cascade Sync Signal</td><td class="bin_parser_fail_det bin_parser_fail_det_pa4" pa="4" bit="0"></td></tr>
											<tr class=" "><td>[25]</td><td>0xE5 bank1 PA4 bit[1]</td><td>VGH Pumping Error</td><td class="bin_parser_fail_det bin_parser_fail_det_pa4" pa="4" bit="1"></td></tr>
											<tr class=" "><td>[26]</td><td>0xE5 bank1 PA4 bit[2]</td><td>VGL Pumping Error</td><td class="bin_parser_fail_det bin_parser_fail_det_pa4" pa="4" bit="2"></td></tr>
											<tr class=" "><td>[27]</td><td>0xE5 bank1 PA4 bit[3]</td><td>OTP checksum fail</td><td class="bin_parser_fail_det bin_parser_fail_det_pa4" pa="4" bit="3"></td></tr>
											
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA5 bit[0]</td><td>WDT</td><td class="bin_parser_fail_det bin_parser_fail_det_pa5" pa="5" bit="0"></td></tr>
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA5 bit[1]</td><td>ESD</td><td class="bin_parser_fail_det bin_parser_fail_det_pa5" pa="5" bit="1"></td></tr>
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA5 bit[2]</td><td>DDCRC</td><td class="bin_parser_fail_det bin_parser_fail_det_pa5" pa="5" bit="2"></td></tr>
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA5 bit[3]</td><td>TPCRC</td><td class="bin_parser_fail_det bin_parser_fail_det_pa5" pa="5" bit="3"></td></tr>
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA5 bit[4]</td><td>GPP</td><td class="bin_parser_fail_det bin_parser_fail_det_pa5" pa="5" bit="4"></td></tr>
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA5 bit[7]</td><td>SHORT</td><td class="bin_parser_fail_det bin_parser_fail_det_pa5" pa="5" bit="7"></td></tr>
											
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA6 bit[0]</td><td>OPEN</td><td class="bin_parser_fail_det bin_parser_fail_det_pa6" pa="6" bit="0"></td></tr>
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA6 bit[1]</td><td>Slave1 TP_SYNC pin status</td><td class="bin_parser_fail_det bin_parser_fail_det_pa6" pa="6" bit="1"></td></tr>
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA6 bit[2]</td><td>Slave2 TP_SYNC pin status</td><td class="bin_parser_fail_det bin_parser_fail_det_pa6" pa="6" bit="2"></td></tr>
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA6 bit[3]</td><td>DD_REG_CRC</td><td class="bin_parser_fail_det bin_parser_fail_det_pa6" pa="6" bit="3"></td></tr>
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA6 bit[4]</td><td>POWERON</td><td class="bin_parser_fail_det bin_parser_fail_det_pa6" pa="6" bit="4"></td></tr>
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA6 bit[5]</td><td>GPIO3</td><td class="bin_parser_fail_det bin_parser_fail_det_pa6" pa="6" bit="5"></td></tr>
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA6 bit[6]</td><td>SLAVE1</td><td class="bin_parser_fail_det bin_parser_fail_det_pa6" pa="6" bit="6"></td></tr>
											<tr class=" "><td>Touch</td><td>0xE5 bank1 PA6 bit[7]</td><td>SLAVE2</td><td class="bin_parser_fail_det bin_parser_fail_det_pa6" pa="6" bit="7"></td></tr>
											
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> <!-- row -->
			
			<?php
				echo $modalcontent;
				if(($proj_detail_info == 0) && ($val_fae == 0)){
					echo '<div class="row">';
					echo '	<div class="col-sm-12">';
					echo '		<div class="card card-info collapsed-card button_load">';
					echo '			<div class="card-header" data-card-widget="collapse">';
					echo '				<h3 class="card-title">Binary Information</h3>';
					echo '				<div class="card-tools">';
					echo '					<button type="button" class="btn btn-tool parser_expand" title="Collapse"><i class="fas fa-plus"></i></button>';
					echo '				</div>';
					echo '			</div>';
					echo '			<div class="card-body">';
					echo '				<div class="row">';
					echo '					<div class="col-sm-12">';
					echo '						<img  style="width: 100%;" src="'.base_url().'assets/img/192_Binary_file.PNG" ></img>';
					echo '					</div>';
					echo '				</div>';
					echo '			</div>';
					echo '		</div>';
					echo '	</div>';
					echo '</div> <!-- row --> ';
				}
				
				if($proj_detail_info == 0){
					echo '  <script src="'.base_url().'assets/js/oem_mapping.js"></script>'."\n";
				}
			?>