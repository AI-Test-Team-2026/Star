	<!-- Content Wrapper. Contains page content -->
	<div class="content-wrapper">
		<!-- Content Header (Page header) -->
		<section class="content-header">
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>
							<?php 
								echo $title;
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
			<div class="card card-info">
				<div class="card-header">
					<h3 class="card-title">Project Information</h3>
				</div>
				  <!-- /.card-header -->
				  <!-- form start -->
				  <form role="form">
					<div class="card-body">
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<label for="form_project_name">Project Name</label>
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text">
												<i class="fas fa-hamsa"></i>
											</span>
										</div>
										<?php 
											$json = json_decode($query_data);
											if($mtype == 1){
												$buffer_ind = strpos($json->panel_name,"_");  // first _ location
												$panel = substr($json->panel_name, 0, $buffer_ind);
												
												$buffer =  substr($json->panel_name, $buffer_ind+1, strlen($json->panel_name));
												$buffer_ind = strpos($buffer,"_"); // size
												$size = substr($buffer, 0, $buffer_ind);
												$project_namee = $panel.'_'.$size;
												
												echo '<input type="text" class="form-control" id="form_project_name" placeholder="PanelMaker_size_Tier1_Car" autocomplete="off" value="'.$project_namee.'">';
											}
											else{
												echo '<input type="text" class="form-control" id="form_project_name" placeholder="PanelMaker_size_Tier1_Car" autocomplete="off">';
											}
										?>
										<!--<input type="text" class="form-control" id="form_project_name" placeholder="PanelMaker_size_Tier1_Car" autocomplete="off">-->
									</div>
								</div>
								<div class="form-group">
									<label for="form_aa_size_horizontal">AA size in mm (Horizontal)</label>
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text">
												<i class="fas fa-arrows-alt-h"></i>
											</span>
										</div>
										<?php 
											if($mtype == 1){
												echo '<input type="text" class="form-control" id="form_aa_size_horizontal" placeholder="unit mm" autocomplete="off" value="'.$json->aa_size_horizontal.'">';
											}
											else{
												echo '<input type="text" class="form-control" id="form_aa_size_horizontal" placeholder="unit mm" autocomplete="off">';
											}
										?>
									</div>
								</div>
								<div class="form-group">
									<label for="form_aa_size_vertical">AA size in mm (Vertical)</label>
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text">
												<i class="fas fa-arrows-alt-v"></i>
											</span>
										</div>
										<?php 
											if($mtype == 1){
												echo '<input type="text" class="form-control" id="form_aa_size_vertical" placeholder="unit mm" autocomplete="off" value="'.$json->aa_size_vertical.'">';
											}
											else{
												echo '<input type="text" class="form-control" id="form_aa_size_vertical" placeholder="unit mm" autocomplete="off">';
											}
										?>
									</div>
								</div>
								
								
								<div class="form-group p-1">
									<div class="custom-control custom-radio mt-2">
										<input class="custom-control-input form_panel_type_radio" type="radio" id="type_lh" name="create_type_radio" checked="" value="LH">
										<label for="type_lh" class="custom-control-label">LONG-H ACTIVE</label>
									</div>
									<div class="custom-control custom-radio mt-1">
										<input class="custom-control-input form_panel_type_radio" type="radio" id="type_lv" name="create_type_radio" value="LV">
										<label for="type_lv" class="custom-control-label">V-Blanking ACTIVE</label>
									</div>
								</div>
								
							</div> <!-- col-sm-6-->
							<div class="col-sm-3">
								<div class="form-group">
									<label for="form_panelid">Panel ID (Hex).</label>
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text">
												<i class="fas fa-solar-panel"></i>
											</span>
										</div>
										<?php 
											if($mtype == 1){
												echo '<input type="text" class="form-control" id="form_panelid" placeholder="1B" autocomplete="off" value="'.dechex($json->panel_ver).'">';
											}
											else{
												echo '<input type="text" class="form-control" id="form_panelid" placeholder="1B" autocomplete="off">';
											}
										?>
									</div>
								</div>
								<div class="form-group">
									<label for="form_cascadeicnum">Cascade IC NUM</label>
									<div class="input-group mb-3">
										<div class="input-group-prepend">
											<span class="input-group-text">
												<i class="fas fa-list-ol"></i>
											</span>
										</div>
										<?php 
											if($mtype == 1){
												echo '<input type="text" class="form-control" id="form_cascadeicnum" placeholder="1" autocomplete="off" value="'.$json->cascade_ic_num.'">';
											}
											else{
												echo '<input type="text" class="form-control" id="form_cascadeicnum" placeholder="1" autocomplete="off">';
											}
										?>
									</div>
								</div>
								<div class="form-group">
									<label for="inputStatus">Select IC</label>
									<select class="form-control custom-select" id="form_ic_ver">
										<option value="1">HX83192-A</option>
										<option value="2">HX83192-B</option>
										<option value="3">HX83192-C</option>
										<option value="4">HX83193-A</option>
										<option value="5">HX83193-B</option>
									</select>
								</div>
								
								<div class="form-group p-1">
									<div class="custom-control custom-radio mt-2">
										<input class="custom-control-input form_panel_type_radio" type="radio" id="type_ltps" name="create_material_radio" checked="" value="LTPS">
										<label for="type_ltps" class="custom-control-label">LTPS</label>
									</div>
									<div class="custom-control custom-radio mt-1">
										<input class="custom-control-input form_panel_type_radio" type="radio" id="type_asi" name="create_material_radio" value="aSi">
										<label for="type_asi" class="custom-control-label">aSi</label>
									</div>
								</div>
							</div> <!-- col-sm-3-->
							<div class="col-sm-3">
								<div class="form-group">
									<label for="inputStatus">Select Power mode</label>
									<select class="form-control custom-select" id="form_ic_power_mode">
										<option value="1">1 Power Mode</option>
										<option value="3">3 Power Mode</option>
										<option value="5">5 Power Mode</option>
									</select>
								</div>
							</div> <!-- col-sm-3-->
						</div> <!-- row-->
					</div>
					<!-- /.card-body -->

					<div class="card-footer">
						<?php 
							if($mtype == 1) { // is modify
								echo '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modify_project_modal">Update</button>';
							}
							else{
								echo '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#create_project_modal">Submit</button>';
							}
						?>
					  
					</div>
				  </form>
				</div>
				<?php 
				if($mtype == 1) { // is modify
					echo '<div class="modal fade" id="modify_project_modal" style="display: none;" aria-hidden="true">';
					echo '	<div class="modal-dialog">';
					echo '		<div class="modal-content">';
					echo '			<div class="modal-header">';
					echo '				<h4 class="modal-title">Update Project to Server</h4>';
					echo '				<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
					echo '					<span aria-hidden="true">×</span>';
					echo '				</button>';
					echo '			</div>';
					echo '			<div class="modal-body">';
					echo '			 	<p>Are you sure to update a new project?</p>';
					echo '			</div>';
					echo '			<div class="modal-footer justify-content-between">';
					echo '				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
					echo '				<button type="button" class="btn btn-primary" data-dismiss="modal" id="Modify_project_button" onclick="Create_project(0, '.$project_id.');">Update</button>';
					echo '			</div>';
					echo '		</div> <!-- /.modal-content -->';
					echo '	</div> <!-- /.modal-dialog -->';
					echo '</div>';
					echo '';
					echo '';
					echo '';
					echo '';					
				}
				else{
					echo '<div class="modal fade" id="create_project_modal" style="display: none;" aria-hidden="true">';
					echo '	<div class="modal-dialog">';
					echo '		<div class="modal-content">';
					echo '			<div class="modal-header">';
					echo '				<h4 class="modal-title">Create Project to Server</h4>';
					echo '				<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
					echo '					<span aria-hidden="true">×</span>';
					echo '				</button>';
					echo '			</div>';
					echo '			<div class="modal-body">';
					echo '			 	<p>Are you sure to create a new project?</p>';
					echo '			</div>';
					echo '			<div class="modal-footer justify-content-between">';
					echo '				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
					echo '				<button type="button" class="btn btn-primary" data-dismiss="modal" id="Create_project_button" onclick="Create_project(1 , 0);">Create</button>';
					echo '			</div>';
					echo '		</div> <!-- /.modal-content -->';
					echo '	</div> <!-- /.modal-dialog -->';
					echo '</div>';
					echo '';
					echo '';
					echo '';
					echo '';					
				}
				?>
		</section>
		
    <!-- /.content -->
	</div>
	<!-- /.content-wrapper -->
  
  
<?php 
	echo '  <script src="'.base_url().'assets/js/s_oem_create_project.js"></script>'."\n";
?>