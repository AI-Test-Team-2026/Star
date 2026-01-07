<?php
	if ($show_f0_f1 == 0){ // show all
		echo '<style>.dd_osc_tableshow{display:block}</style>';
	}
	else{
		echo '<style>.dd_osc_tableshow{display:none}</style>';
	}	
?>

<div class="row">
	<div class="col-sm-1">
		<button type="submit" class="btn btn-warning" id="dd_osc_cal" onclick="Dd_osc_target();" style="width: 80%; height: 100%">
			Calculate
		</button>			
	</div>
	<div class="col-sm-6">
		<?php 
		echo '<table class="osc_table_oem table table-striped" isfill="'.$fill_out_osc_table.'">';
		?>
			<thead>
				<tr>
					<td colspan="3" style="text-align: center">
						Display Input
					</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>OSC 誤差 (%)</td>
					<td></td>
					<td class="dd_osc_enter" contenteditable="true">1.5</td>
				</tr>
				<tr class="dd_osc_save">
					<td>OSC (MHz)</td>
					<td></td>
					<td class="dd_osc_enter" contenteditable="true" id="dd_osc_osc">90</td>
				</tr>
				<tr class="bg-gray dd_osc_save">
					<td class="">FR (Hz)</td>
					<td></td>
					<td class="dd_osc_enter" contenteditable="true" id="dd_osc_fr">60</td>
				</tr>
				<tr class="bg-info">
					<td class="">VRes (H)</td>
					<td>
						<p>[11:8]: 0xB2_bank0 PA5 [3:0]</p>
						<p>[7:0]: 0xB2_bank0 PA6 [7:0]</p>
					</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_vres"></td>
				</tr>
				<tr class="bg-info dd_osc_save">
					<td class="">VSA (H)</td>
					<td>0xB3_bank0, PA5 bit[3:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_vsa"></td>
				</tr>
				<tr class="bg-info dd_osc_save">
					<td class="">VBP (H)</td>
					<td>0xB3_bank0, PA6 bit[7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_vbp"></td>
				</tr>
				<tr class="bg-info dd_osc_save">
					<td class="">VFP (H)</td>
					<td>0xB3_bank0, PA4 bit[7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_vfp"></td>
				</tr>
				<tr class="bg-info dd_osc_save">
					<td class="">TP_DISP_LINECLK_CNT_M2 (Hex)</td>
					<td>0xE7_bank0 PA12 [7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_tp_disp_lineclk_cnt_m2"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">lineclk_cnt_ratio (Binary)</td>
					<td>0xE7_bank0 PA21 [3:2]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_lineclk_cnt_ratio"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">REPT_GB1</td>
					<td>0xE7_bank1, PA4 [4:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_rept_gb1"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">REPT_GB2</td>
					<td>0xE7_bank1, PA6 [4:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_rept_gb2"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">REPT_GB3</td>
					<td> 0xE7_bank1, PA8 [4:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_rept_gb3"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">DISP_GB1</td>
					<td>[8]: 0xE7_bank1 PA2 bit4; [7:0] 0xE7_bank1 PA3 [7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_dsip_gb1"></td>
				<tr class="dd_osc_save">
					<td class="">DISP_GB2</td>
					<td>[8]: 0xE7_bank1 PA2 bit5; [7:0] 0xE7_bank1 PA5 [7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_dsip_gb2"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">DISP_GB3</td>
					<td>[8]: 0xE7_bank1 PA2 bit6; [7:0] 0xE7_bank1 PA7 [7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_dsip_gb3"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">TP_VSYNC_PIPE_NUM[7:0] (Hex)</td>
					<td>0xE7_bank2 PA30 [7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_tp_vsync_pipe_num"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">TP_INIT_LINE_CNT_RA_STR_M12 (Hex)</td>
					<td> 0xE7_bank0 PA9 [7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_tp_init_line_cnt_ra_str_m12"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">TP_INIT_LINE_CNT_M2[7:0] (Hex)</td>
					<td>0xE7_bank0 PA11 [7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_tp_init_line_cnt_m2"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">touch -&gt; display dummy#</td>
					<td>0xE7_bank2 PA10 bit[3:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_touch_display_dummy"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">TP_TOUCH_LINE_CNT_M2[7:0] (Hex)</td>
					<td>0xE7_bank0 PA13 [7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_tp_touch_line_cnt_m2"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">TP_TOUCH_CLK_CNT_M2[7:0] (Hex)</td>
					<td>0xE7_bank0 PA14 [7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_tp_touch_clk_cnt_m2"></td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="col-sm-5">
		<table class="table table-striped">
			<tbody>
				<tr class="bg-gray dd_osc_save">
					<td>Frame rate target for OSC tracking (Hz)</td>
					<td></td>
					<td class="dd_osc_enter" contenteditable="true" id="dd_osc_fr_dev">60</td>
				</tr>
				<tr class="dd_osc_save" style="color: #ff0066;">
					<td>Hardware EMI EN (Binary)</td>
					<td>0xE7_bank0_PA22 [6]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_hardware_emi_en"></td>
				</tr>
				<tr class="dd_osc_save">
					<td>EMI_offset_coefficient[3:0] (Hex)</td>
					<td>0xE7_bank0_PA5 [7:4]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_emi_offset_coeff"></td>
				</tr>
				<tr class="dd_osc_save">
					<td>
						<span style="color: #669900;font-weight: bold;">192</span>
						EMI_sw_range (TP_CTRL_OPT[25:24]) (Binary)
					</td>
					<td> 0xE7_bank0_PA21 [1:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_emi_sw_range"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">
						<span style="color:  #669900; font-weight: bold;">192</span>
						EMI_suppression_line_sel (TP_CTRL_OPT[30:29]) (Binary)
					</td>
					<td>0xE7_bank0_PA21 [6:5]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_emi_suppression_line_sel"></td>
				</tr>
				<tr class="dd_osc_save">
					<td>
						<span style="color:  #cc9900; font-weight: bold;">193</span>
						Line_width_update_stage (Binary)
					</td>
					<td> 0xE7_bank0_PA45 [6:4]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_line_width_update_stage"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">
						<span style="color:  #cc9900;font-weight: bold; ">193</span>
						Line_width_update_Freq (Binary)
					</td>
					<td>0xE7_bank0_PA21 [6:5]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_line_width_update_freq"></td>
				</tr>
				<tr class="dd_osc_save">
					<td class="">
						<span style="color: #cc9900;font-weight: bold; ">193</span>
						Line_width_update_freq_range (Hex)
					</td>
					<td>0xE7_bank0_PA45 [3:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_line_width_update_freq_range"></td>
				</tr>
				<tr class="dd_osc_save">
					<td>TP_PTS1_CLK_CNT_M23[7:0] (Hex)</td>
					<td> 0xE7_bank0_PA15 [7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_tp_pts1_clk_cnt_m23"></td>
				</tr>
				<tr class="dd_osc_save">
					<td>TP_PTS3_CLK_CNT_M23[7:0] (Hex)</td>
					<td> 0xE7_bank0_PA16 [7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_tp_pts3_clk_cnt_m23"></td>
				</tr>
				<tr class="dd_osc_save">
					<td>PTS1_CLK_CNT_STR_M23[7:0] (Hex)</td>
					<td> 0xE7_bank0_PA33 [7:0]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_pts1_clk_cnt_str_m23"></td>
				</tr>
				<tr class="bg-gray dd_osc_save">
					<td>DADJ Step</td>
					<td></td>
					<td class="dd_osc_enter" contenteditable="true" id="dd_osc_dadj_step">2</td>
				</tr>
				<tr class="bg-gray dd_osc_save">
					<td>SCCLK2</td>
					<td></td>
					<td class="dd_osc_enter" contenteditable="true" id="dd_osc_tp_scclk2">330</td>
				</tr>
				<tr class="bg-gray dd_osc_save">
					<td>TX Pulse Number (OSR)</td>
					<td></td>
					<td class="dd_osc_enter" contenteditable="true" id="dd_osc_tp_osr">11</td>
				</tr>
				<tr class="bg-gray dd_osc_save">
					<td>scclk1 div</td>
					<td></td>
					<td class="dd_osc_enter" contenteditable="true" id="dd_osc_scclk1_div">6</td>
				</tr>
			</tbody>
		</table>
		
	</div>
</div> <!-- row-->

<!-- Table Information-->
<div class="row mt-2">
	<div class="col-sm-12">
		<table class="table table-striped">
			<thead id="dd_osc_table_1_9_title">
				<tr>
					<td>Target</td>
					<td class="dd_osc_tableshow">Tolerance</td>
					<td>Real</td>
					<td class="dd_osc_tableshow">DIV</td>
					<td>SCCLK1</td>
					<td class="">DIV</td>
					<td>SCCLK2</td>
					<td>OSR</td>
					<td>Touch Sensing Time</td>
					<td>10</td>
					<td>external 1H</td>
					<td>internal 1H</td>
					<td>2-9 TPEN per touch block </td>
					<td>1ST TPEN per touch block </td>
					<td class="dd_osc_tableshow">RA1 </td>
					<td class="dd_osc_tableshow">EMI offset</td>
					<td class="dd_osc_tableshow">PTS1,3</td>
					<td>Tolerance</td>
					<td>Status</td>
				</tr>
			</thead>
			<tbody id="dd_osc_table_1_9">
			</tbody>
		</table>
	</div>
</div><!-- row-->
<div class="row mt-2">
	<div class="col-sm-12">
		<table class="table table-striped">
			<thead id="dd_osc_table_10_title">
				<tr>
					<td>Target</td>
					<td>internal 1H (min)</td>
					<td>10th TPEN per touch block (Max)</td>
					<td>10th TPEN per touch block (Max)</td>
					<td>Tolerance</td>
					<td>Status</td>
				</tr>
			</thead>
			<tbody id="dd_osc_table_10">
			</tbody>
		</table>
	</div>
</div><!-- row-->

<div class="row mt-2" style="display: none;">
	<div class="col-sm-12">
		<span id="record_e5_bank1"></span>
		<span id="record_eb_bank1"></span>
	</div>
</div><!-- row-->

