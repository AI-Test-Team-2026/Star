  <!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
		<div class="container-fluid">
			<div class="row mb-2">
				<div class="col-sm-6">
					<h1>Project List</h1>
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
		<div class="card card-solid">
			<div class="card-body pb-0">
				<div class="row d-flex align-items-stretch card-cust-style">	
					<?php 
					if(!empty($query_result)){
						$modal_del_content = '';
						foreach($query_result as $item){
							
							echo '<div class="col-sm-4 col-md-3 col-lg-3 col-xl-3 d-flex align-items-stretch">';
							if (strpos($item->ic_ver, '193') !== false) {
								echo '	<div class="card card-outline card-warning" style="width:100%">';
							}
							else{
								echo '	<div class="card card-outline card-info" style="width:100%">';
							}
							echo '		<div class="card-header">';
							echo '			<div style="float: left;"><i class="fas fa-cookie-bite"></i> '.$item->ic_ver.'</div>';
							if($username=="Stella"){
								echo '			<div style="float: right; font-size: 0.9rem;"><span>#'.$item->project_ticket.'</span>?'.$item->project_id.'</div>';
							}
							else{
								if($item->project_ticket > 0){
									echo '			<div style="float: right; font-size: 0.9rem;"><span>#'.$item->project_ticket.'</span></div>';
								}
							}
							echo '		</div>';
							if (strpos($item->ic_ver, '193') !== false) {
								echo '		<div class="card-body oem_project_list_cid card-oem-193" cid="'.$item->C_id.'" name="'.$item->panel_name.'">';
							}
							else{
								if ($item->ic_ver == 'HX83192-A' || $item->ic_ver == 'HX83192-B') {
									echo '		<div class="card-body oem_project_list_cid card-oem-192-cut2" cid="'.$item->C_id.'" name="'.$item->panel_name.'">';
								}
								else{
									echo '		<div class="card-body oem_project_list_cid card-oem-192" cid="'.$item->C_id.'" name="'.$item->panel_name.'">';
								}
							}
							echo '			<h2 class="lead"><b> '.$item->panel_name.'</b></h2>';
							echo '			<p class="text-muted text-xs"><b>'.$item->released_fw.'</b></p>';
							echo '		</div>';
							echo '		<div class="card-footer">';
							echo '			<div class="text-right text-xs">';
							echo '				<a href="#" class="btn btn-sm bg-danger" data-toggle="modal" data-target="#delete_project_'.$item->project_id.'"> <i class="fas fa-trash-alt"></i></a>';
							echo '				<a href="'.base_url().'Automotive/Modify_projects/'.$item->project_id.'" class="btn btn-sm bg-info">';
							echo '					<i class="fas fa-pencil-alt"></i> Edit';
							echo '				</a>';
							echo '				<a href="'.base_url().'Automotive/project_show_item/'.$item->C_id.'/'.$item->project_id.'" class="btn btn-sm btn-info">';
							echo '					 <i class="fas fa-info-circle"></i> Detail';
							echo '				</a>';
							echo '			</div>';
							echo '		</div>';
							echo '	</div>';
							echo '</div>';

							
							$modal_del_content.= '<div class="modal fade" id="delete_project_'.$item->project_id.'" style="display: none;" aria-hidden="true">';
							$modal_del_content.='	<div class="modal-dialog">';
							$modal_del_content.='		<div class="modal-content bg-danger">';
							$modal_del_content.='			<div class="modal-header">';
							$modal_del_content.='				<h4 class="modal-title">Delete Whole '.$item->panel_name.' Project</h4>';
							$modal_del_content.='				<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
							$modal_del_content.='					<span aria-hidden="true">×</span>';
							$modal_del_content.='				</button>';
							$modal_del_content.='			</div>';
							$modal_del_content.='			<div class="modal-body">';
							$modal_del_content.='				<p>Are you sure to delete the whole '.$item->panel_name.' project?</p>';
							$modal_del_content.='			</div>';
							$modal_del_content.='			<div class="modal-footer justify-content-between">';
							$modal_del_content.='				<button type="button" class="btn btn-outline-light" data-dismiss="modal">Close</button>';				
							$modal_del_content.='				<a type="button" class="btn btn-outline-light" href="'.base_url().'Automotive/project_delete_project/'.$item->project_id.'">Sure</a>';
							$modal_del_content.='			</div>';
							$modal_del_content.='		</div> <!-- /.modal-content -->';
							$modal_del_content.='	</div> <!-- /.modal-dialog -->';
							$modal_del_content.='</div>';
						}
					}
					?>
				
				</div>
			<!-- /.card-body -->
			<!--
			<div class="card-footer">
			  <nav aria-label="Contacts Page Navigation">
				<ul class="pagination justify-content-center m-0">
				  <li class="page-item active"><a class="page-link" href="#">1</a></li>
				  <li class="page-item"><a class="page-link" href="#">2</a></li>
				  <li class="page-item"><a class="page-link" href="#">3</a></li>
				  <li class="page-item"><a class="page-link" href="#">4</a></li>
				  <li class="page-item"><a class="page-link" href="#">5</a></li>
				  <li class="page-item"><a class="page-link" href="#">6</a></li>
				  <li class="page-item"><a class="page-link" href="#">7</a></li>
				  <li class="page-item"><a class="page-link" href="#">8</a></li>
				</ul>
			  </nav>
			</div>
			-->
			<!-- /.card-footer -->
			</div>
			<!-- /.card -->
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
					<div class="row" style="display: none;" id="dd_reg_list"></div>
				</div><!-- card body-->
				<div class="card-footer">
					<button type="submit" class="float-sm-right btn btn-info" id="released_fw_compare_button">
						<i class="fas fa-eye"></i> Start
					</button>		
					<button type="submit" class="float-sm-right btn btn-info mr-2" id="released_fw_compare_export">
						<i class="fas fa-file-export"></i> Export
					</button>	
				</div>
				
			</div>
	</section>
	<?php 
	if(!empty($query_result)){
		echo $modal_del_content;
	}
	?>

    <!-- /.content -->
</div>
<!-- /.content-wrapper -->
  
 
<script>
	function Edit_project(id){
		
	var cbaseurl = window.base_url+ "Automotive/Modify_projects/"+id;
		$.ajax({
			url : cbaseurl,
			dataType : "json",
			/*
			type : "POST",
			dataType : "json",
			data : {
					"project_name": project_name,
					"cascade_ic" : cascade_num,
					"type": typee,
					"ic_ver": icver,
					"panelid": panelid,
					"aa_size_vertical": aa_size_ver,
					"aa_size_horizontal": aa_size_hor
				},
			*/
			success : function(data) {
				console.log(data);
				
				$('#form_project_name').val(data["project_name"]);
				/*$('#form_aa_size_horizontal').val("");
				$('#form_aa_size_vertical').val("");
				$('#form_cascadeicnum').val("");
				$('#form_panelid').val("");
				
				$('.form_panel_type_radio[value="LH"]').prop('checked', true);
				$('#form_ic_ver option').removeAttr('selected').filter('[value="1"]').attr('selected', true);
					*/
				
			
			},
			error : function(data) {
				//console.log("Failed to create project...");
			}
		});
	
	
}

</script>
