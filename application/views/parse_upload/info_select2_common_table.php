<div class="row mb-3">
	<div class="col-sm-6">
		<h6>SRAM WAVEFORM</h6>
		<select class="released_fw_compare released_fw_compare_waveform" multiple="multiple">
			<?php
			$table = json_decode($PTABLE);
			$funcs = $table->TP_ADC_CONFIG_NORMAL_F0;
			echo '<optgroup label="F0_WAVEFORM">';
			foreach($funcs as $item){
				echo '	<option value="f0_'.$item->name.'">';
				echo '		F0_'.$item->name;
				echo '	</option>';
			}
			echo '</optgroup>';

			$funcs = $table->TP_ADC_CONFIG_NORMAL_F1;
			echo '<optgroup label="F1_WAVEFORM">';
			foreach($funcs as $item){
				echo '	<option value="f1_'.$item->name.'">';
				echo '		F1_'.$item->name;
				echo '	</option>';
			}
			echo '</optgroup>';

			?>
		</select>
	</div> <!-- col-->
</div><!-- row-->
<div class="row">
	<div class="col-sm-6">
		<h6>SRAM ALG</h6>
		<select class="released_fw_compare released_fw_compare_alg" multiple="multiple">
			<?php	
			$funcs = $table->TP_HW_CONFIG_1_COD_FW_CONFIG;
			$i = 0;
			echo '<optgroup label="ALG">';
			foreach($funcs as $item){
				echo '	<option value="rfeh_'.dechex($i).'">';
				echo '		'.'rfeh_'.dechex($i).' '.$item->name;
				echo '	</option>';
				$i+=1;
			}
			echo '</optgroup>';
			
			
			$funcs = $table->TP_HW_CONFIG_1_AUTO_SELF;
			echo '<optgroup label="Auto_Self">';
			foreach($funcs as $item){
				echo '	<option value="auto_'.$item->name.'">';
				echo '		'.$item->name;
				echo '	</option>';
			}
			echo '</optgroup>';
			?>
			
		</select>
	</div> <!-- col-->
	<div class="col-sm-6">
		<h6>FLASH</h6>
		<select class="released_fw_compare released_fw_compare_flash" multiple="multiple">
			<?php	
			$funcs = $table->FLASH_FUNC;
			echo '<optgroup label="Flash_func">';
			foreach($funcs as $item){
				echo '	<option value="ff_'.$item->name.'">';
				echo '		'.$item->name;
				echo '	</option>';
			}
			echo '</optgroup>';


			$funcs = $table->FLASH_HEADER;
			echo '<optgroup label="Flash_header">';
			foreach($funcs as $item){
				echo '	<option value="fh_'.$item->name.'">';
				echo '		'.$item->name;
				echo '	</option>';
			}
			echo '</optgroup>';

			
			$funcs = $table->TP_VERSION_TABLE;
			echo '<optgroup label="Flash_tp_version">';
			foreach($funcs as $item){
				echo '	<option value="ft_'.$item->name.'">';
				echo '		'.$item->name;
				echo '	</option>';
			}
			echo '</optgroup>';

			?>
		</select>
	</div> <!-- col-->
</div><!-- row-->
<div class="row mt-2">	
	<div class="col-sm-6">
		<h6>DD REG</h6>
		<select class="released_fw_compare released_fw_compare_dd" multiple="multiple">
			<optgroup label="Flash_dd_reg">
				<option value="fd_BC_0_1">
					VDDD
				</option>
				<option value="fd_DA_0_4">
					LVDS Bias
				</option>
			</optgroup>
		</select>
	</div> <!-- col-->
</div><!-- row-->