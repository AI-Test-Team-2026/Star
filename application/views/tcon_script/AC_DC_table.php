
<style>
	.ctable{
		table-layout:fixed;
		width: 100%;
	}
	.ctable td{
		font-size: 0.65rem;
		height: 30px;
	}
	.crow{
		width: 3.1%;
	}
</style>	
<?php
	$Field_Color=array(
		"888888", /*reserve*/
		"ffdadc", "fae199", "fdfd96", "eef1ea", "a6e7ff", "aec9eb",
		"f2a0a1", "fed8b1", "fef6be", "a9d39e", "cae1d9", "e8eae6",
		"d7b1b2", "f9e8e2", "ffffc2", "c6ec7a", "a5ceec", "f7cee0",
		"eec5ce", "ffb865", "fffdd8", "a9d39e", "add8e6", "efc0fe",
		"efa6aa", "ffce81", "f1e788", "b1cdac", "d9d9f3", "d9e3e5",
		"fdd7e4", "d8b7cf", "faf0be", "c6e5ca", "a4f4f9", "c2b2f0"
	);
?>
				<!-- TCON **********************************************-->
				<div class="row mt-2" style="font-size: 0.5rem; !important">
					<div class="col-sm-12">
						<h4>TCON</h4>
						<table class="ctable table-bordered" style="text-align: center; vertical-direction">
							<!--======================================-->
							<tr class="crow">
								<td></td>
								<td>31</td><td>30</td><td>29</td><td>28</td>
								<td>27</td><td>26</td><td>25</td><td>24</td>
								<td>23</td><td>22</td><td>21</td><td>20</td>
								<td>19</td><td>18</td><td>17</td><td>16</td>
								<td>15</td><td>14</td><td>13</td><td>12</td>
								<td>11</td><td>10</td><td>9</td><td>8</td>
								<td>7</td><td>6</td><td>5</td><td>4</td>
								<td>3</td><td>2</td><td>1</td><td>0</td>
							</tr>
							<!--======================================-->
							<tr class="0402_script_title" word="0">
								<td rowspan="2">W0</td>
								<td colspan="4" len="4" tlen="16" ind="6_1" style="background-color:#<?php echo $Field_Color[6];?>">time_stp_SC_CLK1</td>
								<td colspan="4" len="4" tlen="4" ind="5" style="background-color:#<?php echo $Field_Color[5];?>">time_sta_SC_CLK1</td>
								<td colspan="16" len="16" tlen="16" ind="4" style="background-color:#<?php echo $Field_Color[4];?>">time_stp_PRE_CHARGE</td>
								<td colspan="4" len="4" tlen="4" ind="3" style="background-color:#<?php echo $Field_Color[3];?>">time_sta_PRE_CHARGE</td>
								<td colspan="2" len="2" tlen="2" ind="2" style="background-color:#<?php echo $Field_Color[2];?>">time_wth_DATA_LATCH</td>
								<td colspan="2" len="2" tlen="2" ind="1" style="background-color:#<?php echo $Field_Color[1];?>">time_sta_DATA_LATCH</td>
							</tr>
							<tr class="0402_script_bitfield" word="0">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="1">
								<td rowspan="2">W1</td>
								<td colspan="16" len="16" tlen="16" ind="8" style="background-color:#<?php echo $Field_Color[8];?>">time_stp_RST0</td>
								<td colspan="4" len="4" tlen="4" ind="7" style="background-color:#<?php echo $Field_Color[7];?>">time_sta_RST0</td>
								<td colspan="12" len="12" tlen="16" ind="6_2" style="background-color:#<?php echo $Field_Color[6];?>">time_stp_SC_CLK1</td>
							</tr>
							<tr class="0402_script_bitfield" word="1">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="2">
								<td rowspan="2">W2</td>
								<td colspan="12" len="12" tlen="16" ind="11_1" style="background-color:#<?php echo $Field_Color[11];?>">time_per_dac_control</td>
								<td colspan="16" len="16" tlen="16" ind="10" style="background-color:#<?php echo $Field_Color[10];?>">time_stp_dac_control</td>
								<td colspan="4" len="4" tlen="4" ind="9" style="background-color:#<?php echo $Field_Color[9];?>">time_sta_dac_control</td>
							</tr>
							<tr class="0402_script_bitfield" word="2">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="3">
								<td rowspan="2">W3</td>
								<td colspan="3" len="3" tlen="16" ind="15_1" style="background-color:#<?php echo $Field_Color[15];?>">time_stp_mixer_coef_en</td>
								<td colspan="16" len="16" tlen="16" ind="14" style="background-color:#<?php echo $Field_Color[14];?>">time_sta_mixer_coef_en</td>
								<td colspan="3" len="3" tlen="3" ind="13" style="background-color:#<?php echo $Field_Color[13];?>">dac_control_type</td>
								<td colspan="6" len="6" tlen="6" ind="12" style="background-color:#<?php echo $Field_Color[12];?>">dac_control_slope</td>
								<td colspan="4" len="4" tlen="16" ind="11_2" style="background-color:#<?php echo $Field_Color[11];?>">time_per_dac_control</td>
							</tr>
							<tr class="0402_script_bitfield" word="3">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="4">
								<td rowspan="2">W4</td>
								<td colspan="3" len="3" tlen="16" ind="17_1" style="background-color:#<?php echo $Field_Color[17];?>">time_stp_SD_LE</td>
								<td colspan="16" len="16" tlen="16" ind="16" style="background-color:#<?php echo $Field_Color[16];?>">time_sta_SD_LE</td>
								<td colspan="13" len="13" tlen="16" ind="15_2" style="background-color:#<?php echo $Field_Color[15];?>">time_stp_mixer_coef_en</td>
							</tr>
							<tr class="0402_script_bitfield" word="4">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="5">
								<td rowspan="2">W5</td>
								<td colspan="1" len="1" tlen="16" ind="20_1" style="background-color:#<?php echo $Field_Color[20];?>"><!--time_sta_SYS_RSTB2--></td>
								<td colspan="2" len="2" tlen="2" ind="19" style="background-color:#<?php echo $Field_Color[19];?>">rawdata_go_en</td>
								<td colspan="16" len="16" tlen="16" ind="18" style="background-color:#<?php echo $Field_Color[18];?>">time_per_SD_LE</td>
								<td colspan="13" len="13" tlen="16" ind="17_2" style="background-color:#<?php echo $Field_Color[17];?>">time_stp_SD_LE</td>
							</tr>
							<tr class="0402_script_bitfield" word="5">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="6">
								<td rowspan="2">W6</td>
								<td colspan="15" len="15" tlen="16" ind="22_1" style="background-color:#<?php echo $Field_Color[22];?>">time_sta_ADC_DMY_PULSE1</td>
								<td colspan="2" len="2" tlen="2" ind="21" style="background-color:#<?php echo $Field_Color[21];?>">time_wth_SYS_RSTB2</td>
								<td colspan="15" len="15" tlen="16" ind="20_2" style="background-color:#<?php echo $Field_Color[20];?>">time_sta_SYS_RSTB2</td>
							</tr>
							<tr class="0402_script_bitfield" word="6">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>	
							<!--**************************************-->
							<tr class="0402_script_title" word="7">
								<td rowspan="2">W7</td>
								<td colspan="6" len="6" tlen="6" ind="30" style="background-color:#<?php echo $Field_Color[0];?>">Reserve</td>
								<td colspan="1" len="1" tlen="1" ind="29" style="background-color:#<?php echo $Field_Color[0];?>">RST4_TYPE</td>
								<td colspan="1" len="1" tlen="1" ind="28" style="background-color:#<?php echo $Field_Color[0];?>">RST3_TYPE</td>
								<td colspan="1" len="1" tlen="1" ind="27" style="background-color:#<?php echo $Field_Color[0];?>">RST2_TYPE</td>
								<td colspan="1" len="1" tlen="1" ind="26" style="background-color:#<?php echo $Field_Color[0];?>">RST1_TYPE</td>
								<td colspan="1" len="1" tlen="1" ind="25" style="background-color:#<?php echo $Field_Color[25];?>">RST0_TYPE</td>
								<td colspan="4" len="4" tlen="4" ind="24" style="background-color:#<?php echo $Field_Color[24];?>">time_wth_edge_en_extend</td>
								<td colspan="16" len="16" tlen="16" ind="23" style="background-color:#<?php echo $Field_Color[23];?>">time_stp_ADC_DMY_PULSE1</td>
								<td colspan="1" len="1" tlen="16" ind="22_2" style="background-color:#<?php echo $Field_Color[22];?>"><!--time_sta_ADC_DMY_PULSE1--></td>
							</tr>
							<tr class="0402_script_bitfield" word="7">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>							
						</table>
					</div> <!-- col-->
				</div><!--row-->
				
				<!-- Mixer1 **********************************************-->
				<div class="row mt-2" style="font-size: 0.5rem; !important">
					<div class="col-sm-12">
						<h4>Mixer1</h4>
						<table class="ctable table-bordered" style="text-align: center; vertical-direction">
							<!--======================================-->
							<tr class="crow">
								<td></td>
								<td>31</td><td>30</td><td>29</td><td>28</td>
								<td>27</td><td>26</td><td>25</td><td>24</td>
								<td>23</td><td>22</td><td>21</td><td>20</td>
								<td>19</td><td>18</td><td>17</td><td>16</td>
								<td>15</td><td>14</td><td>13</td><td>12</td>
								<td>11</td><td>10</td><td>9</td><td>8</td>
								<td>7</td><td>6</td><td>5</td><td>4</td>
								<td>3</td><td>2</td><td>1</td><td>0</td>
							</tr>
							<!--======================================-->
							<tr class="0402_script_title" word="8">
								<td rowspan="2">W8</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[4];?>">turn_on</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[3];?>">x_in[1:0]</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[2];?>">countdown_cntr_init[7:0]</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[1];?>">mixer_cntr_init[14:0]</td>
							</tr>
							<tr class="0402_script_bitfield" word="8">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="9">
								<td rowspan="2">W9</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[6];?>">win_sel[2:0]</td>
								<td colspan="28" style="background-color:#<?php echo $Field_Color[5];?>">sin_addr_inc[25:0]</td>
							</tr>
							<tr class="0402_script_bitfield" word="9">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="10">
								<td rowspan="2">W10</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[8];?>">spl_type[5:0]</td>	
								<td colspan="24" style="background-color:#<?php echo $Field_Color[7];?>">win_addr_inc[23:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="10">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="11">
								<td rowspan="2">W11</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[10];?>">sin_addr_init[11:0]</td>	
								<td colspan="16" style="background-color:#<?php echo $Field_Color[9];?>">win_len_cntr_init[14:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="11">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="12">
								<td rowspan="2">W12</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[12];?>">win_idle_cntr_pre_init[12:0]</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[11];?>">win_idle_cntr_post_init[12:0]</td>
							</tr>
							<tr class="0402_script_bitfield" word="12">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="13">
								<td rowspan="2">W13</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[14];?>">bit_btw_gap_init[7:0]</td>
								<td colspan="24" style="background-color:#<?php echo $Field_Color[13];?>">tx_win_addr_inc_pre[23:0]</td>
							</tr>
							<tr class="0402_script_bitfield" word="13">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="14">
								<td rowspan="2">W14</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[16];?>">tx_win_scalor[4:0]</td>	
								<td colspan="24" style="background-color:#<?php echo $Field_Color[15];?>">tx_win_addr_dec_post[23:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="14">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>	
							<!--**************************************-->
							<tr class="0402_script_title" word="15">
								<td rowspan="2">W15</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[18];?>">tx_win_bias_scale[10:0]</td>	
								<td colspan="16" style="background-color:#<?php echo $Field_Color[17];?>">tx_win_bias_dc[9:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="15">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="16">
								<td rowspan="2">W16</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[21];?>">tx_tri_type[3:0]</td>	
								<td colspan="12" style="background-color:#<?php echo $Field_Color[20];?>">tx_sin_scalor[9:0]</td>	
								<td colspan="16" style="background-color:#<?php echo $Field_Color[19];?>">gap_cntr_init[15:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="16">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>		
							<!--**************************************-->
							<tr class="0402_script_title" word="17">
								<td rowspan="2">W17</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[23];?>">tri_idle_cntr_pre_init[12:0]</td>	
								<td colspan="16" style="background-color:#<?php echo $Field_Color[22];?>">tri_idle_cntr_post_init[12:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="17">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>		
							<!--**************************************-->
							<tr class="0402_script_title" word="18">
								<td rowspan="2">W18</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[0];?>">Reserve</td>	
								<td colspan="12" style="background-color:#<?php echo $Field_Color[25];?>">tx_tri_dec[10:0]</td>	
								<td colspan="4" style="background-color:#<?php echo $Field_Color[0];?>">Reserve</td>	
								<td colspan="12" style="background-color:#<?php echo $Field_Color[24];?>">tx_tri_inc[10:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="18">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>		
							<!--**************************************-->
							<tr class="0402_script_title" word="19">
								<td rowspan="2">W19</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[0];?>">Reserve</td>	
								<td colspan="12" style="background-color:#<?php echo $Field_Color[27];?>">win_dly_cntr_init[11:0]</td>	
								<td colspan="16" style="background-color:#<?php echo $Field_Color[26];?>">tx_tri_init[14:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="19">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>		
							<!--**************************************-->
							<tr class="0402_script_title" word="20">
								<td rowspan="2">W20</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[0];?>">Reserve</td>	
								<td colspan="12" style="background-color:#<?php echo $Field_Color[29];?>">tx_tri_tail_cntr_init[11:0]</td>	
								<td colspan="16" style="background-color:#<?php echo $Field_Color[28];?>">idle_dly_cntr_init[15:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="20">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>		
						</table>
					</div> <!-- col-->
				</div><!--row-->

				<!-- Mixer2 **********************************************-->
				<div class="row mt-2" style="font-size: 0.5rem; !important">
					<div class="col-sm-12">
						<h4>Mixer2</h4>
						<table class="ctable table-bordered" style="text-align: center; vertical-direction">
							<!--======================================-->
							<tr class="crow">
								<td></td>
								<td>31</td><td>30</td><td>29</td><td>28</td>
								<td>27</td><td>26</td><td>25</td><td>24</td>
								<td>23</td><td>22</td><td>21</td><td>20</td>
								<td>19</td><td>18</td><td>17</td><td>16</td>
								<td>15</td><td>14</td><td>13</td><td>12</td>
								<td>11</td><td>10</td><td>9</td><td>8</td>
								<td>7</td><td>6</td><td>5</td><td>4</td>
								<td>3</td><td>2</td><td>1</td><td>0</td>
							</tr>
							<!--======================================-->
							<tr class="0402_script_title" word="21">
								<td rowspan="2">W21</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[4];?>">turn_on</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[3];?>">x_in[1:0]</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[2];?>">countdown_cntr_init[7:0]</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[1];?>">mixer_cntr_init[14:0]</td>
							</tr>
							<tr class="0402_script_bitfield" word="21">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="22">
								<td rowspan="2">W22</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[6];?>">win_sel[2:0]</td>
								<td colspan="28" style="background-color:#<?php echo $Field_Color[5];?>">sin_addr_inc[25:0]</td>
							</tr>
							<tr class="0402_script_bitfield" word="22">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="23">
								<td rowspan="2">W23</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[8];?>">spl_type[5:0]</td>	
								<td colspan="24" style="background-color:#<?php echo $Field_Color[7];?>">win_addr_inc[23:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="23">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="24">
								<td rowspan="2">W24</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[10];?>">sin_addr_init[11:0]</td>	
								<td colspan="16" style="background-color:#<?php echo $Field_Color[9];?>">win_len_cntr_init[14:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="24">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="25">
								<td rowspan="2">W25</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[12];?>">win_idle_cntr_pre_init[12:0]</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[11];?>">win_idle_cntr_post_init[12:0]</td>
							</tr>
							<tr class="0402_script_bitfield" word="25">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="26">
								<td rowspan="2">W26</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[14];?>">bit_btw_gap_init[7:0]</td>
								<td colspan="24" style="background-color:#<?php echo $Field_Color[13];?>">tx_win_addr_inc_pre[23:0]</td>
							</tr>
							<tr class="0402_script_bitfield" word="26">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="27">
								<td rowspan="2">W27</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[16];?>">tx_win_scalor[4:0]</td>	
								<td colspan="24" style="background-color:#<?php echo $Field_Color[15];?>">tx_win_addr_dec_post[23:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="27">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>	
							<!--**************************************-->
							<tr class="0402_script_title" word="28">
								<td rowspan="2">W28</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[18];?>">tx_win_bias_scale[10:0]</td>	
								<td colspan="16" style="background-color:#<?php echo $Field_Color[17];?>">tx_win_bias_dc[9:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="28">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="29">
								<td rowspan="2">W29</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[21];?>">tx_tri_type[3:0]</td>	
								<td colspan="12" style="background-color:#<?php echo $Field_Color[20];?>">tx_sin_scalor[9:0]</td>	
								<td colspan="16" style="background-color:#<?php echo $Field_Color[19];?>">gap_cntr_init[15:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="29">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>		
							<!--**************************************-->
							<tr class="0402_script_title" word="30">
								<td rowspan="2">W30</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[23];?>">tri_idle_cntr_pre_init[12:0]</td>	
								<td colspan="16" style="background-color:#<?php echo $Field_Color[22];?>">tri_idle_cntr_post_init[12:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="30">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>		
							<!--**************************************-->
							<tr class="0402_script_title" word="31">
								<td rowspan="2">W31</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[0];?>">Reserve</td>	
								<td colspan="12" style="background-color:#<?php echo $Field_Color[25];?>">tx_tri_dec[10:0]</td>	
								<td colspan="4" style="background-color:#<?php echo $Field_Color[0];?>">Reserve</td>	
								<td colspan="12" style="background-color:#<?php echo $Field_Color[24];?>">tx_tri_inc[10:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="31">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>		
							<!--**************************************-->
							<tr class="0402_script_title" word="32">
								<td rowspan="2">W32</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[0];?>">Reserve</td>	
								<td colspan="12" style="background-color:#<?php echo $Field_Color[27];?>">win_dly_cntr_init[11:0]</td>	
								<td colspan="16" style="background-color:#<?php echo $Field_Color[26];?>">tx_tri_init[14:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="32">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>		
							<!--**************************************-->
							<tr class="0402_script_title" word="33">
								<td rowspan="2">W33</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[0];?>">Reserve</td>	
								<td colspan="12" style="background-color:#<?php echo $Field_Color[29];?>">tx_tri_tail_cntr_init[11:0]</td>	
								<td colspan="16" style="background-color:#<?php echo $Field_Color[28];?>">idle_dly_cntr_init[15:0]</td>	
							</tr>
							<tr class="0402_script_bitfield" word="33">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>		
						</table>
					</div> <!-- col-->
				</div><!--row-->
				
				<!-- DSP **********************************************-->
				<div class="row mt-2" style="font-size: 0.5rem; !important">
					<div class="col-sm-12">
						<h4>DSP</h4>
						<table class="ctable table-bordered" style="text-align: center; vertical-direction">
							<!--======================================-->
							<tr class="crow">
								<td></td>
								<td>31</td><td>30</td><td>29</td><td>28</td>
								<td>27</td><td>26</td><td>25</td><td>24</td>
								<td>23</td><td>22</td><td>21</td><td>20</td>
								<td>19</td><td>18</td><td>17</td><td>16</td>
								<td>15</td><td>14</td><td>13</td><td>12</td>
								<td>11</td><td>10</td><td>9</td><td>8</td>
								<td>7</td><td>6</td><td>5</td><td>4</td>
								<td>3</td><td>2</td><td>1</td><td>0</td>
							</tr>
							<!--======================================-->
							<tr class="0402_script_title" word="34">
								<td rowspan="2">W34</td>
								<td colspan="32" style="background-color:#<?php echo $Field_Color[1];?>">touch_rawdata_start_addr</td>
							</tr>
							<tr class="0402_script_bitfield" word="34">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="35">
								<td rowspan="2">W35</td>
								<td colspan="3" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[5];?>">capture_f1_en</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[4];?>">capture_f0_en</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[3];?>">f0_switch2_others</td>
								<td colspan="2" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="23" style="background-color:#<?php echo $Field_Color[2];?>">i_offset_manu</td>
							</tr>
							<tr class="0402_script_bitfield" word="35">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="36">
								<td rowspan="2">W36</td>
								<td colspan="2" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="7" style="background-color:#<?php echo $Field_Color[7];?>">ini_g_swdata</td>
								<td colspan="23" style="background-color:#<?php echo $Field_Color[6];?>">q_offset_manu</td>
							</tr>
							<tr class="0402_script_bitfield" word="36">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_script_title" word="37">
								<td rowspan="2">W37</td>
								<td colspan="12" style="background-color:#<?php echo $Field_Color[11];?>">IQ_dwnscl_factor</td>
								<td colspan="2" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[10];?>">rx_num_switch</td>
								<td colspan="5" style="background-color:#<?php echo $Field_Color[9];?>">dsp_control_set</td>
								<td colspan="12" style="background-color:#<?php echo $Field_Color[8];?>">raw_dwnscl_factor</td>
							</tr>
							<tr class="0402_script_bitfield" word="37">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							
						</table>
					</div>
				</div>
				
				<!-- DC Script **********************************************-->
				<!--PA0402-->
				<div class="row mt-2 dc_PA0402 dc_ic_sel" style="font-size: 0.5rem; !important; display: block;">
					<div class="col-sm-12">
						<h4>PA0402 DC</h4>
						<table class="ctable table-bordered" style="text-align: center; vertical-direction">
							<!--======================================-->
							<tr class="crow">
								<td></td>
								<td>31</td><td>30</td><td>29</td><td>28</td>
								<td>27</td><td>26</td><td>25</td><td>24</td>
								<td>23</td><td>22</td><td>21</td><td>20</td>
								<td>19</td><td>18</td><td>17</td><td>16</td>
								<td>15</td><td>14</td><td>13</td><td>12</td>
								<td>11</td><td>10</td><td>9</td><td>8</td>
								<td>7</td><td>6</td><td>5</td><td>4</td>
								<td>3</td><td>2</td><td>1</td><td>0</td>
							</tr>
							<!--======================================-->
							<tr class="0402_dc_script_title" word="0">
								<td rowspan="2">W0</td>
								<td colspan="7" style="background-color:#<?php echo $Field_Color[0];?>">Blank</td>
								<td colspan="25" style="background-color:#<?php echo $Field_Color[1];?>">ADCCYC[24:0]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="0">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="1">
								<td rowspan="2">W1</td>
								<td colspan="32" style="background-color:#<?php echo $Field_Color[2];?>">PTBA[31:0]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="1">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="2">
								<td rowspan="2">W2</td>
								<td colspan="5" style="background-color:#<?php echo $Field_Color[9];?>">SET_VR[6][4:0]</td>
								<td colspan="5" style="background-color:#<?php echo $Field_Color[8];?>">SET_VR[5][4:0]</td>
								<td colspan="5" style="background-color:#<?php echo $Field_Color[7];?>">SET_VR[3][4:0]</td>
								<td colspan="5" style="background-color:#<?php echo $Field_Color[6];?>">SET_VR[2][4:0]</td>
								<td colspan="5" style="background-color:#<?php echo $Field_Color[5];?>">SET_VR[1][4:0]</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[4];?>">SET_VRH[3:0]</td>
								<td colspan="3" style="background-color:#<?php echo $Field_Color[3];?>">AP[2:0]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="2">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="3">
								<td rowspan="2">W3</td>
								<td colspan="2" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="2" style="background-color:#<?php echo $Field_Color[20];?>">SELCLK[1:0]</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[19];?>">BC_EN</td>
								<td colspan="2" style="background-color:#<?php echo $Field_Color[18];?>">MIXER_EN[1:0]</td>
								<td colspan="5" style="background-color:#<?php echo $Field_Color[17];?>">SET_CDAC_VRL[4:0]</td>
								<td colspan="5" style="background-color:#<?php echo $Field_Color[16];?>">SET_CDAC_VRH[4:0]</td>
								<td colspan="3" style="background-color:#<?php echo $Field_Color[15];?>">CDAC_VR_AP[2:0]</td>
								<td colspan="3" style="background-color:#<?php echo $Field_Color[14];?>">BIAS_DACOP_L[2:0]</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[13];?>">SHK_MODE</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[12];?>">LFDEN</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[11];?>">TBS_L</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[10];?>">YIN_L[3:0]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="3">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="4">
								<td rowspan="2">W4</td>
								<td colspan="32" style="background-color:#<?php echo $Field_Color[21];?>">ADC_EN_L[31:0]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="4">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="5">
								<td rowspan="2">W5</td>
								<td colspan="32" style="background-color:#<?php echo $Field_Color[22];?>">ADC_EN_L[63:32]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="5">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="6">
								<td rowspan="2">W6</td>
								<td colspan="32" style="background-color:#<?php echo $Field_Color[23];?>">ADC_EN_L[95:64]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="6">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="7">
								<td rowspan="2">W7</td>
								<td colspan="3" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[26];?>">ADC_EN_SHK_L[124]</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[25];?>">ADC_EN_L[123:120] (Repair)</td>
								<td colspan="24" style="background-color:#<?php echo $Field_Color[24];?>">ADC_EN_L[96:119]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="7">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="8">
								<td rowspan="2">W8</td>
								<td colspan="3" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[9];?>">LFD_REF_SEL</td>
								<td colspan="3" style="background-color:#<?php echo $Field_Color[8];?>">SET_C_DL[2:0]</td>
								<td colspan="2" style="background-color:#<?php echo $Field_Color[7];?>">OPT_MODE[1:0]</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[6];?>">TCS[3][3:0]</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[5];?>">TCS[2][3:0]</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[4];?>">TCS[1][3:0]</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[3];?>">TCS[0][3:0]</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[2];?>">*LFD_HZ_REF</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[1];?>">*LFD_HZ</td>
								<td colspan="2" style="background-color:#<?php echo $Field_Color[30];?>">*RHP_LFD[1:0]</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[29];?>">*PSRR_VLFD</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[28];?>">*LFD_OPEN_REF</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[27];?>">*LFD_OPEN</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="8">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="9">
								<td rowspan="2">W9</td>
								<td colspan="2" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="30" style="background-color:#<?php echo $Field_Color[10];?>">YIN_RP[29:0]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="9">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="10">
								<td rowspan="2">W10</td>
								<td colspan="32" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="10">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
						</table>
					</div>
				</div>
				<!--PA0412-->
				<div class="row mt-2 dc_PA0412 dc_ic_sel" style="font-size: 0.5rem; !important; display: none;">
					<div class="col-sm-12">
						<h4>PA0412 DC</h4>
						<table class="ctable table-bordered" style="text-align: center; vertical-direction">
							<!--======================================-->
							<tr class="crow">
								<td></td>
								<td>31</td><td>30</td><td>29</td><td>28</td>
								<td>27</td><td>26</td><td>25</td><td>24</td>
								<td>23</td><td>22</td><td>21</td><td>20</td>
								<td>19</td><td>18</td><td>17</td><td>16</td>
								<td>15</td><td>14</td><td>13</td><td>12</td>
								<td>11</td><td>10</td><td>9</td><td>8</td>
								<td>7</td><td>6</td><td>5</td><td>4</td>
								<td>3</td><td>2</td><td>1</td><td>0</td>
							</tr>
							<!--======================================-->
							<tr class="0402_dc_script_title" word="0">
								<td rowspan="2">W0</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[1];?>">TCS</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[2];?>">SET</td>
								
							</tr>
							<tr class="0402_dc_script_bitfield" word="0">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="1">
								<td rowspan="2">W1</td>
								<td colspan="32" style="background-color:#<?php echo $Field_Color[5];?>">ADCCYC</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="1">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="2">
								<td rowspan="2">W2</td>
								<td colspan="32" style="background-color:#<?php echo $Field_Color[2];?>">SET_POW[31:0]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="2">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="3">
								<td rowspan="2">W3</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[9];?>">VLFDMD</td>
								<td colspan="24" style="background-color:#<?php echo $Field_Color[8];?>">PTBA[23:0]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="3">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="4">
								<td rowspan="2">W4</td>
								<td colspan="32" style="background-color:#<?php echo $Field_Color[1];?>">VR</td>			
							</tr>
							<tr class="0402_dc_script_bitfield" word="4">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="5">
								<td rowspan="2">W5</td>
								<td colspan="32" style="background-color:#<?php echo $Field_Color[21];?>">ADC_EN_L[31:0]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="5">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="6">
								<td rowspan="2">W6</td>
								<td colspan="32" style="background-color:#<?php echo $Field_Color[22];?>">ADC_EN_L[63:32]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="6">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="7">
								<td rowspan="2">W7</td>
								<td colspan="32" style="background-color:#<?php echo $Field_Color[23];?>">ADC_EN_L[95:64]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="7">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="8">
								<td rowspan="2">W8</td>
								<td colspan="3" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[26];?>">ADC_EN_SHK_L[124]</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[25];?>">ADC_EN_L[123:120] (Repair)</td>
								<td colspan="24" style="background-color:#<?php echo $Field_Color[24];?>">ADC_EN_L[96:119]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="8">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="9">
								<td rowspan="2">W9</td>
								<td colspan="2" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="30" style="background-color:#<?php echo $Field_Color[9];?>">YIN_RP[29:0]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="9">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="10">
								<td rowspan="2">W10</td>
								<td colspan="2" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="30" style="background-color:#<?php echo $Field_Color[10];?>">YIN_BC[29:0]</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="10">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_dc_script_title" word="11">
								<td rowspan="2">W11</td>
								<td colspan="15" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[1];?>">TBS</td>
								<td colspan="3" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="5" style="background-color:#<?php echo $Field_Color[2];?>">SET_VR2H</td>
								<td colspan="3" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="5" style="background-color:#<?php echo $Field_Color[3];?>">SET_VR2</td>
							</tr>
							<tr class="0402_dc_script_bitfield" word="11">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
						</table>
					</div>
				</div>
				
				
				<!--Cycle -->
				<!-- Cyc Script **********************************************-->
				<div class="row mt-2" style="font-size: 0.5rem; !important">
					<div class="col-sm-12">
						<h4>CYC</h4>
						<table class="ctable table-bordered" style="text-align: center; vertical-direction">
							<!--======================================-->
							<tr class="crow">
								<td></td>
								<td>31</td><td>30</td><td>29</td><td>28</td>
								<td>27</td><td>26</td><td>25</td><td>24</td>
								<td>23</td><td>22</td><td>21</td><td>20</td>
								<td>19</td><td>18</td><td>17</td><td>16</td>
								<td>15</td><td>14</td><td>13</td><td>12</td>
								<td>11</td><td>10</td><td>9</td><td>8</td>
								<td>7</td><td>6</td><td>5</td><td>4</td>
								<td>3</td><td>2</td><td>1</td><td>0</td>
							</tr>
							<!--======================================-->
							<tr class="0402_cyc_script_title" word="0">
								<td rowspan="3">W0</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[5];?>">Power</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[4];?>">Sensing</td>
								<td colspan="1" style="background-color:#<?php echo $Field_Color[3];?>">ADC_INT</td>
								<td colspan="3" style="background-color:#<?php echo $Field_Color[0];?>">x</td>
								<td colspan="4" style="background-color:#<?php echo $Field_Color[2];?>">YIN_MUX(R)</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[1];?>">AC_PTR</td>
							</tr>
							<tr class="" word="0">
								<td colspan="1">stop_pol</td>
								<td colspan="1">stop_edge</td>
								<td colspan="1">trig_pol</td>
								<td colspan="1">trig_edge</td>
								<td colspan="1">stop0<br/>sensing_done</td>
								<td colspan="1">trig2<br/>tpen</td>
								<td colspan="1">trig1<br/>pre_tpen</td>
								<td colspan="1">trig0<br/>vsync</td>
								<!---->
								<td colspan="1">stop_pol</td>
								<td colspan="1">stop_edge</td>
								<td colspan="1">trig_pol<br/>0:fall/low</td>
								<td colspan="1">trig_edge<br/>0:level</td>
								<td colspan="1">stop0<br/>tpen</td>
								<td colspan="1">trig2<br/>gpio_in</td>
								<td colspan="1">trig1<br/>adc_power_ready</td>
								<td colspan="1">trig0<br/>tpen</td>
								<td colspan="16"></td>
							</tr>
							<tr class="0402_cyc_script_bitfield" word="0">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'" contenteditable="true">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_cyc_script_title" word="1">
								<td rowspan="2">W1</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[9];?>">XIN</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[8];?>">YIN_L</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[7];?>">DC2_PTR</td>
								<td colspan="8" style="background-color:#<?php echo $Field_Color[6];?>">DC_PTR</td>
							</tr>
							<tr class="0402_cyc_script_bitfield" word="0">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'"  contenteditable="true">0</td>';
								}
								?>
							</tr>
							<!--**************************************-->
							<tr class="0402_cyc_script_title" word="2">
								<td rowspan="2">W2</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[11];?>">DSP_PTR_Bias</td>
								<td colspan="16" style="background-color:#<?php echo $Field_Color[10];?>">DMA_PTR_Bias</td>
							</tr>
							<tr class="0402_cyc_script_bitfield" word="0">
								<?php
								for($i = 31; $i >= 0; $i--){
									echo '<td offset="'.$i.'" contenteditable="true">0</td>';
								}
								?>
							</tr>
						</table>
					</div>
				</div>
				
				