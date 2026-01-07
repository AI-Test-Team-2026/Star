				
				<div class="row mt-2">
					<div class="col-sm-6">
						<table class="table table-bordered" style="text-align: center; vertical-direction">
							<!-- TCON-->
							<tr class="tcon_script_tcon">
								<td rowspan="8" style="vertical-align: middle;">TCON</td>
								<td>Sensing Frequency (kHz)</td>
								<td style="font-weight: bold;" id="<?php echo $id_name;?>ac_sensing_freq"></td>
							</tr>
							<tr class="tcon_script_tcon">
								
								<td>OSR</td>
								<td id="<?php echo $id_name;?>ac_osr"></td>
							</tr>
							<tr class="tcon_script_tcon">
								
								<td>Precharge num</td>
								<td id="<?php echo $id_name;?>ac_precharge_num"></td>
							</tr>
							<tr class="tcon_script_tcon">
								
								<td>RST0 num</td>
								<td id="<?php echo $id_name;?>ac_rst0_num"></td>
							</tr>
							<tr class="tcon_script_tcon">
								
								<td>Sensing Time (us)</td>
								<td id="<?php echo $id_name;?>ac_sensing_time"></td>
							</tr>
							<tr class="tcon_script_tcon">
								
								<td>Sine-wave Enable</td>
								<td id="<?php echo $id_name;?>ac_sine_wave_en"></td>
							</tr>
							<tr class="tcon_script_tcon">
								
								<td>Slope</td>
								<td id="<?php echo $id_name;?>ac_slope"></td>
							</tr>
							<tr class="tcon_script_tcon">
								
								<td>time_with_SYS_RSTB2</td>
								<td id="<?php echo $id_name;?>ac_time_with_SYS_RSTB2"></td>
							</tr>
							<!-- Note -->
							<tr class="" style="">
								<td colspan="3" id="<?php echo $id_name;?>ac_mixer_note" style="background-color: #ffffe6; color: red; display: none;"></td>
							</tr>
							<!-- Mixer Info-->
							<tr style="">
								<td rowspan="2" style="vertical-align: middle;">Mixer Info</td>
								<td>win_tbl_len (Demical)</td>
								<td id="<?php echo $id_name;?>ac_win_tbl_len">512</td>
							</tr>
							<tr style="">
								
								<td>sin_tbl_len (Demical)</td>
								<td style="" id="<?php echo $id_name;?>ac_sin_tbl_len">4096</td>
							</tr>
							<!-- Mixer1-->
							<tr class="tcon_script_mixer1">
								<td rowspan="14" style="vertical-align: middle;">Mixer1</td>
								<td>Turn on</td>
								<td id="<?php echo $id_name;?>ac_mixer1_turn_on"></td>
							</tr>
							<tr class="tcon_script_mixer1">
								
								<td>x_in</td>
								<td id="<?php echo $id_name;?>ac_mixer1_x_in"></td>
							</tr>
							<tr class="tcon_script_mixer1">
								
								<td>coundown_cntr_init</td>
								<td id="<?php echo $id_name;?>ac_mixer1_coundown_cntr_init"></td>
							</tr>
							<tr class="tcon_script_mixer1">
								
								<td>Mixer window sel</td>
								<td id="<?php echo $id_name;?>ac_mixer1_mixer_win_sel"></td>
							</tr>
							<tr class="tcon_script_mixer1">
								
								<td>Mixer 1 Frequency (kHz)</td>
								<td id="<?php echo $id_name;?>ac_mixer1_freq"></td>
							</tr>
							<tr class="tcon_script_mixer1">
								
								<td>spl_type</td>
								<td id="<?php echo $id_name;?>ac_mixer1_spl_type"></td>
							</tr>
							<tr class="tcon_script_mixer1">
								
								<td>win_len_cntr_init</td>
								<td id="<?php echo $id_name;?>ac_mixer1_win_len"></td>
							</tr>
							<tr class="tcon_script_mixer1">
								
								<td>sin_addr_init</td>
								<td id="<?php echo $id_name;?>ac_mixer1_sin_addr_init"></td>
							</tr>
							<tr class="tcon_script_mixer1">
								<td>win_idle_cntr_pre_init</td>
								<td id="<?php echo $id_name;?>ac_mixer1_win_idle_cntr_pre_init"></td>
							</tr>
							<tr class="tcon_script_mixer1">
								
								<td>win_idle_cntr_post_init</td>
								<td id="<?php echo $id_name;?>ac_mixer1_win_idle_cntr_post_init"></td>
							</tr>
							<tr class="tcon_script_mixer1">
								<td>tx_win_addr_inc_pre</td>
								<td id="<?php echo $id_name;?>ac_mixer1_tx_win_addr_inc_pre"></td>
							</tr>
							<tr class="tcon_script_mixer1">
								<td>tx_win_addr_dec_post</td>
								<td id="<?php echo $id_name;?>ac_mixer1_tx_win_addr_dec_post"></td>
							</tr>
							
							<tr class="tcon_script_mixer1">
								<td>tx_win_bias_dc</td>
								<td id="<?php echo $id_name;?>ac_mixer1_tx_win_bias_dc"></td>
							</tr>
							<tr class="tcon_script_mixer1">
								
								<td>tx_win_bias_scale</td>
								<td id="<?php echo $id_name;?>ac_mixer1_tx_win_bias_scale"></td>
							</tr>
							<!-- Mixer2-->
							<tr class="tcon_script_mixer2">
								<td rowspan="12" style="vertical-align: middle;">Mixer2</td>
								<td>Turn on</td>
								<td id="<?php echo $id_name;?>ac_mixer2_turn_on"></td>
							</tr>
							<tr class="tcon_script_mixer2">
								
								<td>x_in</td>
								<td id="<?php echo $id_name;?>ac_mixer2_x_in"></td>
							</tr>
							<tr class="tcon_script_mixer2">
								
								<td>coundown_cntr_init</td>
								<td id="<?php echo $id_name;?>ac_mixer2_coundown_cntr_init"></td>
							</tr>
							<tr class="tcon_script_mixer2">
								
								<td>Mixer window sel</td>
								<td id="<?php echo $id_name;?>ac_mixer2_mixer_win_sel"></td>
							</tr>
							<tr class="tcon_script_mixer2">
								
								<td>Mixer 2 Frequency (kHz)</td>
								<td id="<?php echo $id_name;?>ac_mixer2_freq"></td>
							</tr>
							<tr class="tcon_script_mixer2">
								
								<td>spl_type</td>
								<td id="<?php echo $id_name;?>ac_mixer2_spl_type"></td>
							</tr>
							<tr class="tcon_script_mixer2">
								
								<td>win_len</td>
								<td id="<?php echo $id_name;?>ac_mixer2_win_len"></td>
							</tr>
							<tr class="tcon_script_mixer2">
								
								<td>sin_addr_init</td>
								<td id="<?php echo $id_name;?>ac_mixer2_sin_addr_init"></td>
							</tr>
							<tr class="tcon_script_mixer2">
								
								<td>win_idle_len_pre</td>
								<td id="<?php echo $id_name;?>ac_mixer2_win_idle_len_pre"></td>
							</tr>
							<tr class="tcon_script_mixer2">
								
								<td>win_idle_len_post</td>
								<td id="<?php echo $id_name;?>ac_mixer2_win_idle_len_post"></td>
							</tr>
							<tr class="tcon_script_mixer2">
								
								<td>tx_win_bias_dc</td>
								<td id="<?php echo $id_name;?>ac_mixer2_tx_win_bias_dc"></td>
							</tr>
							<tr class="tcon_script_mixer2">
								
								<td>tx_win_bias_scale</td>
								<td id="<?php echo $id_name;?>ac_mixer2_tx_win_bias_scale"></td>
							</tr>
							<!-- DSP-->
							<tr class="tcon_script_dsp">
								<td rowspan="5" style="vertical-align: middle;">DSP</td>
								<td>adc_rawdata_downscale</td>
								<td id="<?php echo $id_name;?>ac_adc_rawdata_downscale"></td>
							</tr>
							<tr class="tcon_script_dsp">
								
								<td>adc_iq_downscale</td>
								<td id="<?php echo $id_name;?>ac_adc_iq_downscale"></td>
							</tr>
							<tr class="tcon_script_dsp">
								
								<td>Ini_g_swdata</td>
								<td id="<?php echo $id_name;?>ac_Ini_g_swdata"></td>
							</tr>
							<tr class="tcon_script_dsp">
								
								<td>q_const</td>
								<td id="<?php echo $id_name;?>ac_q_const"></td>
							</tr>
							<tr class="tcon_script_dsp">
								
								<td>i_const</td>
								<td id="<?php echo $id_name;?>ac_i_const"></td>
							</tr>
						</table>
					</div> <!-- col-->
					<div class="col-sm-6 dc_PA0402 dc_ic_sel" style="display: block;">
						<!-- PA0402-->
						<table class="table table-bordered " style="text-align: center; vertical-direction ">
							<!-- TCON-->
							<tr>
								<td>VRH</td>
								<td id="<?php echo $id_name;?>dc_vrh"></td>
							</tr>
							<tr>
								<td>VR[1]</td>
								<td id="<?php echo $id_name;?>dc_vr1"></td>
							</tr>
							<tr>
								<td>VR[2]</td>
								<td id="<?php echo $id_name;?>dc_vr2"></td>
							</tr>
							<tr>
								<td>SET_CDAC_VRH</td>
								<td id="<?php echo $id_name;?>dc_set_cdac_vrh"></td>
							</tr>
							<tr>
								<td>SET_CDAC_VRL</td>
								<td id="<?php echo $id_name;?>dc_set_cdac_vrl"></td>
							</tr>
							<tr>
								<td>SET_VR[6]</td>
								<td id="<?php echo $id_name;?>dc_vr6"></td>
							</tr>
							<tr>
								<td>SET_VR[3] (Listen)</td>
								<td id="<?php echo $id_name;?>dc_vr3"></td>
							</tr>
							<tr>
								<td>SET_VR[5] (home key)</td>
								<td id="<?php echo $id_name;?>dc_vr5"></td>
							</tr>
						</table>
					</div> <!-- col-->
					<div class="col-sm-6 dc_PA0412 dc_ic_sel" style="display: none;">
						<!-- PA0412-->
						<table class="table table-bordered " style="text-align: center; vertical-direction ">
							<!-- TCON-->
							<tr>
								<td>VRH</td>
								<td id="pa0412_<?php echo $id_name;?>dc_vrh"></td>
							</tr>
							<tr>
								<td>VRL</td>
								<td id="pa0412_<?php echo $id_name;?>dc_vrl"></td>
							</tr>
							<tr>
								<td>VR1</td>
								<td id="pa0412_<?php echo $id_name;?>dc_vr1"></td>
							</tr>
							<tr>
								<td>SET_VR3 (Listen)</td>
								<td id="pa0412_<?php echo $id_name;?>dc_vr3"></td>
							</tr>
							<tr>
								<td>SET_VR4 (home key)</td>
								<td id="pa0412_<?php echo $id_name;?>dc_vr4"></td>
							</tr>
							<tr>
								<td>VR2</td>
								<td id="pa0412_<?php echo $id_name;?>dc_vr2"></td>
							</tr>
							<tr>
								<td>VR2H</td>
								<td id="pa0412_<?php echo $id_name;?>dc_vr2h"></td>
							</tr>
							<tr>
								<td>SET_CDAC_VRL</td>
								<td id="pa0412_<?php echo $id_name;?>dc_set_cdac_vrl"></td>
							</tr>
							<tr>
								<td>SET_CDAC_VRH</td>
								<td id="pa0412_<?php echo $id_name;?>dc_set_cdac_vrh"></td>
							</tr>
						</table>
					</div> <!-- col-->
				</div><!--row-->