  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Tp version List</h1>
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
		<div class="card">
			<div class="card-header">
				<button class="btn btn-md bg-info float-md-left tp_version_edit mr-2" id="tp_version_save_click">
					<i class="fa fa-save" aria-hidden="true"></i> &nbsp;Save to Server
				</button>
				<button class="btn btn-md bg-info float-md-left tp_version_edit mr-2" data-toggle="modal" data-target="#tp_version_add_click">
					<i class="fa fa-code" aria-hidden="true"></i> &nbsp;Add table
				</button>
				<button class="btn btn-md bg-info float-md-right" id="tp_version_edit_click"
				<?php 
				if($level < 2){
					echo "disabled";
				}
				?>
				>
					<i class="fa fa-pencil-alt" aria-hidden="true"></i> &nbsp;Edit 
				</button>
				<button class="btn btn-md bg-danger float-md-right tp_version_edit mr-2" id="tp_version_cancel_click">
					<i class="fa fa-trash-alt" aria-hidden="true"></i> &nbsp;Cancel 
				</button>
			</div>
			<div class="card-body">
				<!--<div class="row mb-2">
						
				</div>-->
				<?php
				$html = json_decode($json_file, true);
				?>
				<div class="row post">
					<?php
						foreach($html as $vfuncs){
							echo '<div class="col-sm-2 mb-1">';
							echo '<button class="btn btn-sm bg-olive tp_version_table_tab" name="'.$vfuncs["name"].'" style="width: 100%;font-size: 0.7rem !important;">';
							echo $vfuncs["name"];
							echo '</button>';
							echo '</div>';
						}
					?>
				</div>
				<div class="row" style="overflow-y: scroll;height: 1000px;" id="tp_version_parent">
					<div class="col-sm-12" id="" spellcheck="false">
						<!--tp version here-->
						<?php
						$content_table = '';
						$content_modal = '';
						
						
						foreach($html as $vfuncs){
							$content_table.='<table class="table table-bordered tp_version_table" name="'.$vfuncs["name"].'">';
							$content_table.='	<tr>';
							$content_table.='		<th colspan="3" style="text-align: center;">';
							$content_table.='			<span>'.$vfuncs["name"].'</span>';
							$content_table.='			<button class="btn btn-sm bg-info float-sm-right tp_version_edit" data-toggle="modal" data-target="#tp_version_edit_'.strtolower($vfuncs["name"]).'">Add Version</button>';
							$content_table.='		</th>';
							$content_table.='	</tr>';
							

							//==================================================================================
							$content_modal.='<div class="modal fade" id="tp_version_edit_'.strtolower($vfuncs["name"]).'" style="display: none;" aria-hidden="true">';
							$content_modal.='	<div class="modal-dialog">';
							$content_modal.='		<div class="modal-content ">';
							$content_modal.='			<div class="modal-header">';
							$content_modal.='				<h4 class="modal-title">Add Version into '.$vfuncs["name"].'</h4>';
							$content_modal.='				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>';
							$content_modal.='			</div>';
							$content_modal.='			<div class="modal-body">';
							$content_modal.='				<table class="table table-bordered" spellcheck="false">';
							//$content_modal.='					<tr>';
							//$content_modal.='						<th colspan="2" style="text-align: center; background-color:  #DAF7A6 ;" contenteditable>';
							//$content_modal.='							Enter Function Name';
							//$content_modal.='						</th>';
							//$content_modal.='					</tr>';
							$content_modal.='					<tr>';
							$content_modal.='						<!-- Version -->';
							$content_modal.='						<td id="tp_version_edit_insert_v_'.$vfuncs["name"].'" style="font-weight: bold;text-align: center; vertical-align: middle;width: 90px;" contenteditable>V0x.00</td>';
							$content_modal.='						<!-- Status -->';
							$content_modal.='						<td id="tp_version_edit_insert_s_'.$vfuncs["name"].'" style="font-weight: bold;text-align: center; vertical-align: middle;width: 20px;" contenteditable >o</td>';
							$content_modal.='						<!-- Description -->';
							$content_modal.='						<td id="tp_version_edit_insert_d_'.$vfuncs["name"].'" style="background-color:  #DAF7A6 ;" contenteditable>Enter Content....</td>';
							$content_modal.='					</tr>';
							$content_modal.='				</table>';
							$content_modal.='			</div>';
							$content_modal.='			<div class="modal-footer justify-content-between">';
							$content_modal.='				<button type="button" class="btn btn-outline-info" data-dismiss="modal">Close</button>';
							$content_modal.='				<button type="button" class="btn btn-outline-info tp_version_add_sure" data-dismiss="modal" name="'.$vfuncs["name"].'">Sure</button>		';
							$content_modal.='			</div>';
							$content_modal.='		</div> <!-- /.modal-content -->';
							$content_modal.='	</div> <!-- /.modal-dialog -->';
							$content_modal.='</div>	';
							//==================================================================================
							
							foreach($vfuncs["field"] as $item){
								$content_table.='	<tr>';
								$content_table.='		<!-- Version -->';
								$content_table.='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 90px;">'.$item["Version"].'</td>';
								$content_table.='		<!-- Status -->';
								$content_table.='		<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 20px;">'.$item["Status"].'</td>';
								$content_table.='		<!-- Description -->';
								$content_table.='		<td>'.$item["Description"].'</td>';
								$content_table.='	</tr>';
								
							}
							$content_table.='</table>';	
						
						}
						

						echo $content_table;
						?>
						
					</div>
				</div>
				
			</div>
			<div class="card-footer">
			</div>
		</div>

		<!--Modals here-->
		<div class="modal fade" id="tp_version_add_click" style="display: none;" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content ">
					<div class="modal-header">
						<h4 class="modal-title">Add Table</h4>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<table class="table table-bordered" spellcheck="false">
							<tr>
								<th id="tp_version_edit_insert_h_new" colspan="3" style="text-align: center; background-color:  #DAF7A6 ;" contenteditable>
									Enter Function Name
								</th>
							</tr>
							<tr>
								<!-- Version -->
								<td id="tp_version_edit_insert_v_new" style="font-weight: bold;text-align: center; vertical-align: middle;width: 90px;">V01.00</td>
								<!-- Status -->
								<td id="tp_version_edit_insert_s_new" style="font-weight: bold;text-align: center; vertical-align: middle;width: 20px;" contenteditable >o</td>
								<!-- Description -->
								<td id="tp_version_edit_insert_d_new" style="background-color:  #DAF7A6 ;" contenteditable>
									Content...
								</td>
							</tr>
							<tr>
								<!-- Version -->
								<td style="font-weight: bold;text-align: center; vertical-align: middle;width: 90px;">V00.00</td>
								<!-- Status -->
								<td></td>
								<!-- Description -->
								<td></td>
							</tr>
						</table>
					</div>
					<div class="modal-footer justify-content-between">
						<button type="button" class="btn btn-outline-info" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-outline-info" data-dismiss="modal" id="tp_version_add_sure_new">Sure</button>							
					</div>
				</div> <!-- /.modal-content -->
			</div> <!-- /.modal-dialog -->
		</div>
		<?php
		// append modals....
		echo $content_modal;
		?>
		

	</section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  

