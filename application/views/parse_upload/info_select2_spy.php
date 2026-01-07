<?php
if($query_released_fw_p == 1){ // is project
	echo '<div class="row mb-3 oem_flag_project">';
}
else{
	echo '<div class="row mb-3">';
}
?>
	<div class="col-sm-12">
		<h6>Releasded FWs</h6>
		<select class="released_fw_compare released_fw_compare_fw" id="select2_releasedfw" multiple="multiple">
			<?php
			echo '<option value="all">all</option>';
			echo '<optgroup label="Releasded FW">';
			foreach($query_released_fw as $item){
				echo '	<option value="'.$item->C_id.'">';
				if($query_released_fw_p == 1){ // is project
					echo '		'.$item->panel_name.' '.$item->released_fw;
				}
				else{
					echo '		'.$item->released_fw;
				}
				echo '	</option>';
			}
			echo '</optgroup>';
			?>
		</select>
	</div>
</div>
