

<div class="row post">
	<div class="col-sm-1">
		<!--
		<button type="submit" class="btn btn-warning" id="dd_osc_cal" onclick="Dd_osc_target();" style="width: 80%; height: 100%">
			Calculate
		</button>	
		-->
		<div class="btn-group-vertical" style="width: 80%; height: 100%">
			<button type="button" class="btn btn-warning" id="dd_osc_cal">Calculate</button>
			<button type="button" class="btn btn-default" id="import_dd_osc">Import Setting</button>
			<button type="button" class="btn btn-default" id="export_dd_osc">Export Setting</button>
		</div>
		<div style="display: none;">
			<input type="file" class="custom-file-input" id="import_dd_osc_hidden" accept=".json">
		</div>
	</div>
	<div class="col-sm-6">
		<?php 
		echo '<table class="osc_table_oem table table-striped" >';
		?>
			<thead>
				<tr>
					<td colspan="3" style="text-align: center">
						Input
					</td>
				</tr>
			</thead>
			<tbody>
				<!--
				<tr>
					<td>OSC 誤差 (%)</td>
					<td></td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_error">1.5</td>
				</tr>
				-->
				<tr class="">
					<td>PLL (MHz)</td>
					<td></td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_pll">120</td>
				</tr>
				<tr class="bg-gray">
					<td class="">FR (Hz)</td>
					<td></td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_fr">60</td>
				</tr>
				<tr class="bg-info">
					<td class="">VRes (H)</td>
					<td></td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_vres">0</td>
				</tr>
				<tr class="bg-info">
					<td class="">VSA (H)</td>
					<td></td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_vsa">0</td>
				</tr>
				<tr class="bg-info">
					<td class="">VBP (H)</td>
					<td></td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_vbp">0</td>
				</tr>
				<tr class="bg-info">
					<td class="">VFP (H)</td>
					<td></td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_vfp">0</td>
				</tr>
				<tr class="">
					<td class="">TP_DISP_LINECLK_CNT_M2</td>
					<td>0xE7_bank0 PA13 [7:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_tp_disp_lineclk_cnt_m2">0</td>
				</tr>
				<tr class="">
					<td class="">LINE_CLK_CNT_RATIO[1:0] (Binary)</td>
					<td>0xE7_bank0 PA31 [1:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_lineclk_cnt_ratio">0</td>
				</tr>
				
				<tr class="">
					<td class="">REPT_GB1</td>
					<td>0xE7_bank1 PA4 [4:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_rept_gb1"></td>
				</tr>
				<tr class="">
					<td class="">REPT_GB2</td>
					<td>0xE7_bank1 PA6 [4:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_rept_gb2"></td>
				</tr>
				<tr class="">
					<td class="">REPT_GB3</td>
					<td> 0xE7_bank1 PA8 [4:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_rept_gb3"></td>
				</tr>
				<tr class="">
					<td class="">DISP_GB1</td>
					<td>[8]: 0xE7_bank1 PA2 bit4; [7:0] 0xE7_bank1 PA3 [7:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_dsip_gb1"></td>
			
				<tr class="">
					<td class="">DISP_GB2</td>
					<td>[8]: 0xE7_bank1 PA2 bit5; [7:0] 0xE7_bank1 PA5 [7:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_dsip_gb2"></td>
				</tr>
				
				<tr class="">
					<td class="">DISP_GB3</td>
					<td>[8]: 0xE7_bank1 PA2 bit6; [7:0] 0xE7_bank1 PA7 [7:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_dsip_gb3"></td>
				</tr>
				<tr class="">
					<td class="">TP_VSYNC_PIPE_NUM[7:0] (Hex)</td>
					<td>0xE7_bank0 PA9 [7:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_tp_vsync_pipe_num"></td>
				</tr>
				<tr class="">
					<td class="">TP_INIT_LINE_CNT_RA_STR_M12 (Hex)</td>
					<td> 0xE7_bank0 PA10 [7:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_tp_init_line_cnt_ra_str_m12"></td>
				</tr>
				<tr class="">
					<td class="">TP_INIT_LINE_CNT_M2[7:0] (Hex)</td>
					<td>0xE7_bank0 PA12 [7:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_tp_init_line_cnt_m2"></td>
				</tr>
				
				<tr class="">
					<td class="">touch -&gt; display dummy#</td>
					<td>0xE7_bank2 PA10 bit[7:4] + [3:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_touch_display_dummy"></td>
				</tr>
				
				
				<!--
				<tr class="" style="color: #ff0066;">
					<td>Hardware EMI EN (Binary)</td>
					<td>0xE7_bank0_PA22 [6]</td>
					<td class="dd_osc" contenteditable="true" id="dd_osc_hardware_emi_en"></td>
				</tr>
				-->
				<tr class="">
					<td>EMI_offset_coefficient[3:0] (Hex)</td>
					<td>0xE7_bank0_PA22 [7:4]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_emi_offset_coeff"></td>
				</tr>
				<tr class="">
					<td>EMI_sw_range (Binary)</td>
					<td>0xE7_bank0_PA22 [3:1]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_emi_sw_range"></td>
				</tr>
				<tr class="" style="display: none;">
					<td>EMI_sw_range (Binary)--> 10TPEN</td>
					<td>0xE7_bank0_PA22 [3:1]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_emi_sw_range_10tpen"></td>
				</tr>
				<tr class="">
					<td>EMI_SUPPR_LINE_SEL [1:0] (Binary)</td>
					<td>0xE7_bank0_PA23 [5:4]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_emi_suppr_line_sel"></td>
				</tr>
				<tr class="">
					<td>EMI_SUPPRESSION_FREQ[3:0] (Binary)</td>
					<td>0xE7_bank0_PA23 [3:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_emi_suppression_freq"></td>
				</tr>
				<tr class="">
					<td>TP_PTS1_CLK_CNT_M23[7:0] (Hex)</td>
					<td>0xE7_bank0_PA16 [7:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_tp_pts1_clk_cnt_m23"></td>
				</tr>
				<tr class="">
					<td>TP_PTS3_CLK_CNT_M23[7:0] (Hex)</td>
					<td>0xE7_bank0_PA17 [7:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_tp_pts3_clk_cnt_m23"></td>
				</tr>
				<tr class="">
					<td>PTS1_CLK_CNT_STR_M23[7:0] (Hex)</td>
					<td>0xE7_bank0_PA34 [7:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_pts1_clk_cnt_str_m23"></td>
				</tr>
				<tr class="">
					<td>TP_TOUCH_LINE_CNT_M2[7:0] (Hex)</td>
					<td>0xE7_bank0_PA14 [7:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_tp_touch_line_cnt_m2"></td>
				</tr>
				<tr class="bg-info">
					<td>TP_TOUCH_CLK_CNT_M2[7:0] (Hex)</td>
					<td>0xE7_bank0_PA15 [7:0]</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_tp_touch_clk_cnt_m2"></td>
				</tr>

				<!--
				<tr class="bg-gray ">
					<td>DADJ Step</td>
					<td></td>
					<td class="dd_osc_enter" contenteditable="true" id="dd_osc_dadj_step">2</td>
				</tr>
				-->
				<tr class="bg-gray">
					<td>RX Freq (kHz)</td>
					<td></td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_scclk2">46</td>
				</tr>
				<tr class="bg-gray ">
					<td>DIV5</td>
					<td>DO_PLL_DD_CLK / DIV5 = SC_CLK1</td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_div5">6</td>
				</tr>
				<tr class="bg-gray">
					<td>TX Pulse Number (OSR)</td>
					<td></td>
					<td class="dd_osc_enter dd_osc_save" contenteditable="true" id="dd_osc_tp_osr">10</td>
				</tr>
			</tbody>
		</table>
	</div>
	<div class="col-sm-5">
		<table class="table table-striped">
			<tbody>
				<tr>
					<td></td>
					<td>max (+1%)</td>
					<td>typ</td>
					<td>min (-3%)</td>
				</tr>
				<tr>
					<td>PLL (MHz)</td>
					<td class="dd_osc_result dd_osc_save" id="r_pll_max"></td>
					<td class="dd_osc_result dd_osc_save" id="r_pll_typ"></td>
					<td class="dd_osc_result dd_osc_save" id="r_pll_min"></td>
				</tr>
				<tr>
					<td>SC_CLK1 (MHz)</td>
					<td class="dd_osc_result dd_osc_save" id="r_scclk1_max"></td>
					<td class="dd_osc_result dd_osc_save" id="r_scclk1_typ"></td>
					<td class="dd_osc_result dd_osc_save" id="r_scclk1_min"></td>
				</tr>
				<tr>
					<td>Sensing Time (us)</td>
					<td class="dd_osc_result dd_osc_save" id="r_sensing_time_max"></td>
					<td class="dd_osc_result dd_osc_save" id="r_sensing_time_typ"></td>
					<td class="dd_osc_result dd_osc_save" id="r_sensing_time_min"></td>
				</tr>
				<tr>
					<td>External 1H</td>
					<td class="dd_osc_result dd_osc_save" id="r_external_max"></td>
					<td class="dd_osc_result dd_osc_save" id="r_external_typ"></td>
					<td class="dd_osc_result dd_osc_save" id="r_external_min"></td>
				</tr>
				<tr>
					<td>Internal 1H</td>
					<td class="dd_osc_result dd_osc_save" id="r_internal_max"></td>
					<td class="dd_osc_result dd_osc_save" id="r_internal_typ"></td>
					<td class="dd_osc_result dd_osc_save" id="r_internal_min"></td>
				</tr>
				<tr>
					<td>2ND TPEN (us)</td>
					<td class="dd_osc_result dd_osc_save" id="r_2ndtpen_max"></td>
					<td class="dd_osc_result dd_osc_save" id="r_2ndtpen_typ"></td>
					<td class="dd_osc_result dd_osc_save" id="r_2ndtpen_min"></td>
				</tr>
				<tr>
					<td>1ST TPEN (us)</td>
					<td class="dd_osc_result dd_osc_save" id="r_1sttpen_max"></td>
					<td class="dd_osc_result dd_osc_save" id="r_1sttpen_typ"></td>
					<td class="dd_osc_result dd_osc_save" id="r_1sttpen_min"></td>
				</tr>
				<tr>
					<td>1-9th Tolerance ( >= 10us)</td>
					<td class="dd_osc_result dd_osc_save" id="r_status_max"></td>
					<td class="dd_osc_result dd_osc_save" id="r_status_typ"></td>
					<td class="dd_osc_result dd_osc_save" id="r_status_min"></td>
				</tr>
				<tr>
					<td>10th TPEN (us)</td>
					<td class="dd_osc_result dd_osc_save" id="r_10tpen_max"></td>
					<td class="dd_osc_result dd_osc_save" id="r_10tpen_typ"></td>
					<td class="dd_osc_result dd_osc_save" id="r_10tpen_min"></td>
				</tr>
				<!--
				<tr>
					<td>10th Tolerance ( >= 10us)</td>
					<td class="dd_osc_result dd_osc_save" id="r_10status_max"></td>
					<td class="dd_osc_result dd_osc_save" id="r_10status_typ"></td>
					<td class="dd_osc_result dd_osc_save" id="r_10status_min"></td>
				</tr>
				-->
			</tbody>
		</table>
		
	</div>

</div> <!-- row-->