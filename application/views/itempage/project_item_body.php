	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
	<!-- Content Header (Page header) -->
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>
							<?php 
								echo $query_panel->panel_name;
							?>
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
			<div class="callout callout-info">
				<h5><i class="fas fa-info"></i> Information: </h5>
				<div class="row invoice-info">
					<div class="col-sm-4 invoice-col">
					  <address>
						<!--<strong>DD</strong><br>-->
						<b>Resolution:</b>  
							<?php 
								$res_y_h = hexdec($query_alg->rfeh_76)*256;
								$res_y_l = hexdec($query_alg->rfeh_77);
								
								$res_x_h = hexdec($query_alg->rfeh_78)*256;
								$res_x_l = hexdec($query_alg->rfeh_79);
								
								echo ($res_y_h+$res_y_l).' x '.($res_x_h+$res_x_l);
							?>
							<br>
						<b>Channel #:</b> 
							<?php 
								$channel_x = hexdec($query_alg->rfeh_70);
								$channel_y = hexdec($query_alg->rfeh_71);
								echo $channel_x.' x '.$channel_y;
							?>
							<br>
						<b>Cascade IC#:</b> 
							<?php 
								echo $query_panel->cascade_ic_num;
							?>
							<br>
						
					  </address>
					</div>
					<!-- /.col -->
					<div class="col-sm-4 invoice-col">
						<address>
							<!--<strong>TP</strong><br>-->
							<b>Averaged Sensor Pitch:</b> 
								<?php
									$sp_x = floatval($query_panel->aa_size_horizontal) / $channel_x;
									$sp_y = floatval($query_panel->aa_size_vertical) / $channel_y;
									echo round($sp_x, 4).' mm x '.round($sp_y,4).' mm';
									
								?>
								<br>
							<b>AA size:</b>
								<?php  
									echo $query_panel->aa_size_horizontal.' mm x '.$query_panel->aa_size_vertical.' mm';
								?><br>
							<b>panel ID: </b>
								<?php 
									echo '0x'.dechex($query_panel->panel_ver);
								?>
						</address>
					</div>
					<!-- /.col -->
					<div class="col-sm-4 invoice-col">
						<b>Power Mode:</b> 
						<?php
							echo $query_panel->ic_power_mode;
						?>
						<br>
					</div>
					<!-- /.col -->
				</div>
			</div>
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Released FW List</h3>

					<div class="card-tools">
						<button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
							<i class="fas fa-minus"></i>
						</button>
						<!--<button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
							<i class="fas fa-times"></i>
						</button>-->
					</div>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-sm-12">
						
						  <?php
							$i = 0;
							foreach($query_released_fw as $item){
								if($i == 0){
									$latest_cid = $item->C_id;
									$latest_fw_name = $item->released_fw;
									echo '<button class="btn btn-info float-left mr-1 mb-1 released_list" name="'.$item->C_id.'">';
								}
								else{
									echo '<button class="btn btn-outline-info float-left mr-1 mb-1 released_list" name="'.$item->C_id.'">';
								}
								echo '	'.$item->released_fw;
								echo '</button>';
								$i+=1;
							}
						  ?>
							
						</div>	
					</div>
				</div>
				<!-- /.card-body -->
				<!--<div class="card-footer"></div>-->
			<!-- /.card-footer-->
			</div>

			
			
			<!-- Default box -->
			<div class="card">
				<div class="card-header">
					<h3 class="card-title released_title">
						<?php
							echo $query_released_fw[0]->released_fw;
						?>
					</h3>

					<div class="card-tools">
						<button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
						<i class="fas fa-minus"></i>
						</button>
						<!--
						<button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
						  <i class="fas fa-times"></i>
						</button>-->
					</div>
				</div>
				
				<div class="card-body text-xs">
					<?php
					echo $html_content;
					echo $html_external;
					?>
				</div>
				<div class="card-footer">
					<div class="row">
						<div class="col-sm-12">
							<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#delete_released_fw_modal">
							<?php 
								echo '	<span><i class="fas fa-trash-alt"></i> Delete FW Record </span>';
								echo '	<span class="class_delete_released_fw">'.$latest_fw_name.'</span>';
							?>
							</button>
							
							<!--<button type="submit" class="btn btn-info" style="margin-left: 5px;" id="export_ap_note_data"> Export AP note data
							</button>-->
							<ol class="breadcrumb p-0 m-0 float-sm-right">
								<select class="form-control" id="show_export_sample">
									<option value="NAN">Select Export Template</option>
									<?php
										foreach($sample_files as $item){
											echo '<option value="'.$item.'">'.$item.'</option>';
										}
									?>
								</select>
							</ol>
						</div>
					</div>
				
				</div>
			</div>
		</section>
	
		<section class="content">
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Show Specific Items Between Released FWs</h3>

					<div class="card-tools">
						<button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
							<i class="fas fa-minus"></i>
						</button>
						<!--<button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
							<i class="fas fa-times"></i>
						</button>-->
					</div>
				</div> <!-- card header-->
				
				<div class="card-body">
					<div class="post">
						<h4 class="text-dark"><i class="fas fa-tags"></i> Select Conditions</h4>
						<?php 
							echo $html_select2_spy;
							echo $html_select2_common;
						?>
					</div>
					<h4 class="text-dark"><i class="fas fa-scroll"></i> Results</h4>
					<div class="row mt-2" id="select2_released_result"> <!-- show result--></div>
				</div><!-- card body-->
				<div class="card-footer">
					<button type="submit" class="float-sm-right btn btn-info" id="released_fw_compare_button">
						<i class="fas fa-eye"></i> Start
					</button>		
				</div>
				
			</div>
			
			<div class="card">
				<div class="card-header">
					<h3 class="card-title">Compare</h3>

					<div class="card-tools">
						<button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
							<i class="fas fa-minus"></i>
						</button>
						<!--<button type="button" class="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
							<i class="fas fa-times"></i>
						</button>-->
					</div>
				</div> <!-- card header-->
				<div class="card-body">
					<div class="post">
						<h4 class="text-dark"><i class="fas fa-dice-two"></i> Select Two FWs</h4>
						<div class="row">
							<div class="col-sm-12 pt-1">
								 <?php
									
									foreach($query_released_fw as $item){
										echo '<button class="btn oem_button_unselect float-left mr-1 mb-1 released_compare" name="'.$item->C_id.'">';
										
										echo '	'.$item->released_fw;
										echo '</button>';
									}
							?>
							</div>
						</div>
					</div>
					<h4 class="text-dark">
						<i class="fas fa-scroll"></i> Results
					</h4>
					
					<div class="row" >
						<div class="col-sm-12">
							<div class="btn-group float-sm-right oem_show_diff_button" style="display: none;">
								<button type="button" class="btn btn-default oem_show_diff_button_all">
									<i class="fas fa-list-ul"></i> <!--Show All-->
								</button>
								<button type="button" class="btn btn-default oem_show_diff_button_diff">
									<i class="fas fa-not-equal"></i> <!--Show Diff Only-->
								</button>
							</div>
						</div>
					</div>
					<div class="row mt-2"> 
						<div class="col-sm-12" id="compare_released_result">
						</div>
						<!-- show result-->
					</div>
				</div><!-- card body-->
				<div class="card-footer">
					<button type="submit" class="float-sm-right btn btn-info" id="released_two_compare">
						<i class="fas fa-star-of-david"></i> Compare
					</button>		
				</div>
			</div>
		</section>
		

		<div class="modal fade" id="delete_released_fw_modal" style="display: none;" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content bg-danger">
					<div class="modal-header">
						<h4 class="modal-title">Delete Released FW</h4>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<?php 
							echo '<p>Are you sure to delete <span class="class_delete_released_fw">'.$latest_fw_name.'</span> fw?</p>';
						?>
					</div>
					<div class="modal-footer justify-content-between">
						<button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>
						<?php
							echo '<button type="button" class="btn btn-outline-light" data-dismiss="modal" id="delete_released_fw" name="'.$latest_cid.'">Sure</button>';
						?>
					</div>
				</div>
			<!-- /.modal-content -->
			</div>
		<!-- /.modal-dialog -->
		</div>
	
    <!-- /.content -->
	</div>
  <!-- /.content-wrapper -->
  
<?php
	
?>
