  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>FW Checklist</h1>
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
            <!--<div class="card-header">
                
            </div>-->
            <div class="card-body text-sm">
                <!--<div class="row mb-2">
                        
                </div>-->
                <ul class="nav nav-tabs" id="custom-content-below-tab" role="tablist">

                    <li class="nav-item">
                        <a class="nav-link" id="custom-content-below-tp-checklist-tab" data-toggle="pill" href="#custom-content-below-tp-checklist" role="tab" aria-controls="custom-content-below-tp-checklist" aria-selected="true">TP checklist</a>
                    </li>

                </ul>
                <div class="tab-content" id="custom-content-below-tabContent">

                    <?php
                        $i = 0;
                        $bg_color = array('#ff9900','#ffff00', '#99cc00', '#33ccff', '#e8b468', '#a5a19c');
                    ?>
                    <div class="tab-pane fade show active" id="custom-content-below-tp-checklist" role="tabpanel" aria-labelledby="custom-content-below-tp-checklist-tab">
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <?php 
                                echo '<a href="'.base_url().'Automotive/Fw_checklist_downloads/2" class="btn btn-sm bg-info">';
                                echo '<i class="fa fa-file-excel" aria-hidden="true"></i>&nbsp;&nbsp;Download Sample Release Note';
                                echo '</a>';
                                ?>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <table class="table table-bordered table-hover">
                                    <thead>
                                    <tr>
                                        <th>No#</th>
                                        <th>Test Item</th>
                                        <th>Description</th>
                                        <th>Notes</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">1</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>
初版FW設定->依據立項表設定<br/>
scan origin<br/>
max point<br/>
INT trigger<br/>
protocol<br/>
recal hold<br/>
Self-Diagnosis<br/>
FAIL_DET mode<br/>
LPWUG<br/>
Glove mode<br/>
GAMMA<br/>
OSC tracking精算表(Sensing Time)<br/>
mapping table<br/>
VDDD setting
                                            </td>
                                            <td>依照立項表需求及DD SE 提供的Feature Check List的內容設定</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">2</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>收到樣品後能否正常點亮畫面</td>
                                            <td>補NIOS setting</td>
                                            <td></td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">3</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>
Sensing Time, TX/RX sensing waveform (SCLK1, SCLK2, OSR, Voltage Setting)
                                            </td>
                                            <td></td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td colspan="2">
Step 1: 確認SC_CLK1頻率，FW預設為15 MHz<br/>
<?php 
echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/FAE_SNR_sc_clk1.png" ></img>'."\n<br />";
?>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
Step 2: 確認SC_CLK2頻率和Sensing Time<br/>
<?php 
echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/FAE_SNR_sc_clk2_osr.png" ></img>'."\n<br />";
?>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
Step 3: 確認電壓設定<br/>
<?php 
echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/14_voltage_setting.png" ></img>'."\n<br />";
echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/14_voltage_setting_2.png" ></img>'."\n<br />";
echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/14_voltage_setting_3.png" ></img>'."\n<br />";
?>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
Step 4: 跑精算表<br/>
1. 到小星星網站上傳bin，再點開DD OSC Calculate 分頁<br/>
2. 湖藍色的資料會自動帶出，但由於是外部設定，<span style="color:red">需要跟DD SE確認是否正確</span>。灰色的Frame Rate可以根據自己設定做更改，
<span style="background-color:#f5e76b;">Frame Rate須同步到0x10007118和0x10007119上</span>。<br/>
<?php
echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/3_sensing_time_3.png" ></img>'."\n<br />";
?>  
<br/>
3. 案 Calculate看結果，至少-2%可以安全通過。<br/>
<?php
echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/3_sensing_time_4.png" ></img>'."\n<br />";
?>  
                                                             </td>
                                                        </tr>
                                                    </table>
                                                </div>
                            
                                            
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">4</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>Fail Detection (OE & Behavior)</td>
                                            <td></td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
													<table class="table fw_checklist_expand_table_bg">
														<tr>
                                                            <td colspan="2">
Step 1: 請先確認Fail Det option<br/>
<?php 
echo ' <img style="width: 90%;" src="'.base_url().'assets/img/fail_det_option.png"></img>'."\n";
?>  
														    </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
Step 2: FW出去前先確認Fail detection是不是有舉<br/>                                                                
<?php 
echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/12_fail_det_2.png" ></img>'."\n";
?>                                                                  
                                                            </td>
                                                            <td>
<?php 
echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/12_fail_det_3.png" ></img>'."\n";
?>                                                                  
                                                            </td>                                                            
                                                        </tr>
													</table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+1].'">5</td>';
                                            ?>
                                            <td>Touch Peformance</td>
                                            <td>SNR(若沒CG，自行墊1.3mm蓋板，確認是否>40dB), noise, cc</td>
                                            <td></td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td colspan="2">
Step 1: 有CG的情況下，確認手摸Delta在1000上下，可以調整0x100075B3(F0_DSP_RAWDATA_DOWNSCALE)<br/>                                                                
Step 2: 請確認SNR > 40dB <br/>
Step 3: 請確認SNR的noise 值<br/>
根據高斯分布理論，
以下圖形的中心為一平均數，曲線寬度是不同的標準差。<br />
圖形中有三個數字，<strong style="color: green;">68%、95%、99.7%</strong>，意指常態分配的隨機數量，<br />
落在平均數一個正負標準差內的機率為68%<br />
落在平均數二個正負標準差內的機率為95%<br />
落在平均數三個正負標準差內的機率為99.7<br />
落在平均數六個標準差的機率則是99.99<br /><br />

一個標準差 = Nosie  = 6.84<br /><br />

因此至少在做砍CC時，至少要砍三倍標準差以上，也就是6.84*3 大約等於21<br />
保險起見可以砍到六倍標準差，也就是大約等於28~35，因此Rfeh_3F(0x100070C5)和Rfeh_42(0x100070C8)要設0x1C<br />
<br/>
<br/>
<?php 
echo ' <img  style="float: left;" src="'.base_url().'assets/img/fw_checklist/24_snr_noise_2.png" ></img>'."\n <br />";
echo ' <img  style="float: left;" src="'.base_url().'assets/img/fw_checklist/24_snr_noise_1.png" ></img>'."\n <br />";
?> 

                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+1].'">6</td>';
                                            ?>
                                            <td>Touch Peformance</td>
                                            <td>Rawdata (yin on/off) (normalize - disabled)</td>
                                            <td></td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td colspan="2">
Step 1: 把RAWDATA_NORMALIZE_EN先關閉 (0x10007133 bit7 設0)<br/>
Step 2: 到HxTool 的Rawdata頁面下，做yin off，算出rawdata的平均<br/>
Step 3: 把平均值填入Target 值(0x1000715A 和 0x1000715B)<br/>
Step 4: Target值設定好了以後，再把0x10007133 bit 7 設1，HxTool切到0x10檢查ratio table是否正確，如果偏離128太多(超過128 +/- 30% ( 90 ~ 166.4 ))，代表設定有問題。<br/>
<?php 
echo ' <img  style="float: left; width: 40%;" src="'.base_url().'assets/img/fw_checklist/21_normalize_1.png" ></img>'."\n <br />";
//echo ' <img  style="float: left; width: 40%;" src="'.base_url().'assets/img/fw_checklist/21_normalize_2.png" ></img>'."\n <br />";
?> 

                                                            </td>
                                                        <tr>
                                                            <td colspan="2">
<br />
BP = (RawData / RawData_Max) * 100%<br /><br />
 
目標:<br />
MPAP BP門檻為10-60，BP整面的值須調整到20~30<br />
(1) BP偏低，提高RawData<br />
(2) BP偏高，降低RawData<br />
請參考"Rawdata (yin on/off) (normalize - disabled)"調試 <br /><br />                                            
                                                                <?php 
                                                                echo ' <img  style="width: 50%;float:left" src="'.base_url().'assets/img/fw_checklist/FAE_MPAP_BP.png" ></img>'."\n";
                                                                ?>   
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+1].'">7</td>';
                                            ?>
                                            <td>Touch Peformance</td>
                                            <td>Finger Delta (900~1000) (若沒CG，自行墊1.3mm蓋板)/Noise</td>
                                            <td></td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td colspan="2">
Step 1: 確認手摸Delta需在900~1000，若沒有在此範圍區間，須調試DSP_RAWDATA_DOWNSCALE (0x100075B3)，且noise CC值和RAWDATA_NORMALIZE的target值也要重新調試<br/>
Step 2: <br/>
&nbsp;&nbsp;&nbsp;&nbsp;(1) 若Delta偏小，須先把RAWDATA_NORMALIZE_EN先關閉 (0x10007133 bit7 設0)，並降低DSP_RAWDATA_DOWNSCALE，此時SNR的rawdata/noise 值也會相對提高<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x27A1;<span style="background-color: yellow;">DSP_RAWDATA_DOWNSCALE: 192調小，訊號量變大；193 調小，訊號量變小</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;(2) 若Delta偏大，須先把RAWDATA_NORMALIZE_EN先關閉 (0x10007133 bit7 設0)，並提高DSP_RAWDATA_DOWNSCALE，此時SNR的rawdata/noise 值也會相對變小<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x27A1;<span style="background-color: yellow;">DSP_RAWDATA_DOWNSCALE: 192調小，訊號量變大；193 調小，訊號量變小</span><br/>

Step 3: 重新調試noise CC值和RAWDATA_NORMALIZE的target值<br/>

<?php 
echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/FAE_SNR_Delta.png" ></img>'."\n <br />";
?> 
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+1].'">8</td>';
                                            ?>
                                            <td>Touch Peformance</td>
                                            <td>Threshold, Weight (normal, glove)</td>
                                            <td></td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
Step 1: Threshld 調整<br/>
在CG sample下，delta調整至900~1000及SNR = 40左右後<br /><br />

最理想情況下，Rawdata與Sensor被觸摸的面積成正比<br /><br />

Thx設定:<br />
在delta調整為1000時，若報點門檻為250<br />
則可簡單視為該senor block被按壓1/4的面積<br /><br />

此門檻可視實際情況去設定<br /><br />

<span style="color: red;">Note: 請注意 Signal_scale 和 SIG_THX_SCALE_EN 設定</span>
<?php 
echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/25_thx_weighting_1.png" ></img>'."\n <br />";
?> 
                                                            </td>

                                                            <td>
Step 2: Weight 調整<br/>
在CG sample下，delta調整至900~1000及SNR = 40左右後 <br /> <br />

最理想情況下，Rawdata與Sensor被觸摸的面積成正比 <br /> <br />
                                        
Weigh設定: <br />
基本上權重設定會依據每個案子設定情況有很大不同 <br />
大部分案子都沒有特別卡權重，因為在辨別是否有過報點門檻時會比較難辨識 <br /> <br />

注意計算方式 <br />
權重設定 =  FW設定 * Rfeh[0x0F] <br /> 

Ex:  <br />
WET_THPX_1ST = Rfeh[0x16] * Rfeh[0x0F] <br />
240           =       0x18       *     0x0A 
<br />
<?php 
echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/25_thx_weighting_2.png" ></img>'."\n <br />";
?> 

                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>                         
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+1].'">9</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>畫線報點是否正常(Frame rate & Report Rate), Multi-touch</td>
                                            <td></td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td colspan="2">

IC硬體限制上<br />
<span style="color:red;">Report rate 必須要為 Frame rate的 1 或 2倍</span><br /><br />

Ex:<br />
(1) Frame rate = 55Hz 下，Report rate = 55 or 110 Hz<br />
(2) Frame rate = 60Hz 下，Report rate = 60 or 120 Hz<br /><br />

<span style="color:red;">Note: 檢查Report rate可以順便間接確認DD Vsync是不是55 or 60Hz</span><br />

<?php 
echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/8_frame_report_rate.png" ></img>'."\n";
?>
                                                            </td>
                                                           
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>    
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+1].'">10</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>MPAP (open/short/Mopen/BP)</td>
                                            <td>補BP, MPAP參數</td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <th colspan="2">
                                                            MPAP要在下列情況跑過1~2次<br />
                                                            (1)flash為空<br />
                                                            (2)flash有FW<br />

                                                            </th>
                                                        </tr>   
                                                        <tr>
                                                            <th colspan="2" style="background-color: yellow;">Open</th>
                                                        </tr>   
                                                        <tr>
                                                            <td colspan="2">
<span>
目標:<br />
把3/4面的值調整到198以下<br /><br />

注意事項:<br />
不要整面值都飽合到198<br />
希望測試至少兩片結果<br /><br />

如果不清楚可以再問小銘 aka Very BZ 團長<br />

</span>         
<br />                                                       
                                                                <?php 
                                                                echo ' <img  style="width: 50%;float:left" src="'.base_url().'assets/img/fw_checklist/11_mpap_1.png" ></img>'."\n";
                                                                echo ' <img  style="width: 50%; float:left;" src="'.base_url().'assets/img/fw_checklist/11_mpap_2.png" ></img>'."\n";
                                                                ?>                                      
                                                            </td>
                                                           
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2" style="background-color: yellow;">Short</th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
<span>
目標:<br />
把整面的值調整到10~15以下<br /><br />

注意事項:<br />
不要整面值都為0<br />
希望測試至少兩片結果<br />
</span>    
<br />                                                            
                                                                <?php 
                                                                echo ' <img  style="width: 50%;float:left" src="'.base_url().'assets/img/fw_checklist/11_mpap_3.png" ></img>'."\n";
                                                                echo ' <img  style="width: 50%;float:left" src="'.base_url().'assets/img/fw_checklist/11_mpap_4.png" ></img>'."\n";
                                                                ?>                                      
                                                            </td>
                                                           
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2" style="background-color: yellow;">M-Open</th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
<span>
目標:<br />
把整面的值調整到~40以下，但要跟short要有鑑別度<br />
從近端到遠端，數值會從小到大<br />

注意事項:<br />
不要整面值都過小，有時候M-open測項不過，但Touch還是OK，這種只能錯殺也不要漏放<br />
希望測試至少兩片結果<br />
</span>        
<br />                                                        
                                                                <?php 
                                                                echo ' <img  style="width: 50%;float:left" src="'.base_url().'assets/img/fw_checklist/11_mpap_5.png" ></img>'."\n";
                                                                echo ' <img  style="width: 50%;float:left" src="'.base_url().'assets/img/fw_checklist/11_mpap_6.png" ></img>'."\n";
                                                                ?>                                      
                                                            </td>
                                                           
                                                        </tr>


                                                    </table>
                                                
                                                </div>
                                            </td>
                                        </tr>       
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+1].'">11</td>';
                                            ?>
                                            <td>Touch Peformance</td>
                                            <td>Recal Threshold & 掌壓開機</td>
                                            <td>導致Negative Value</td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td colspan="2">
<br/>

<?php 
echo ' <img  style="width: 80%;" src="'.base_url().'assets/img/fw_checklist/FAE_RECAL.png" ></img>'."\n <br />";
echo ' <img  style="width: 80%;" src="'.base_url().'assets/img/fw_checklist/FAE_RECAL_hold.png" ></img>'."\n <br />";
//echo ' <img  style="width: 80%;" src="'.base_url().'assets/img/fw_checklist/FAE_RECAL_statck.png" ></img>'."\n <br />";
?> 

<br/>
紀錄發生recal，每次發生recal就會切換bit0/bit1<br/>
發生過一次bit0會先跳燈號並在之後每個報點的時候開始計數<br/>
如果再發生一次recal<br/>
此時會換成bit1的跳燈號<br/>
<table>
    <tr>
        <td>RE-K1: bit1</td>
        <td>RE-K0: bit0</td>
    </tr>
    <tr>
        <td>
<?php 
echo ' <img  style="width: 80%;" src="'.base_url().'assets/img/fw_checklist/FAE_RECAL_bit1.png" ></img>'."\n <br />";
?> 
        </td>
        <td>
<?php 
echo ' <img  style="width: 80%;" src="'.base_url().'assets/img/fw_checklist/FAE_RECAL_bit0.png" ></img>'."\n <br />";
?> 
        </td>
    </tr>
</table>
<br/>
目前Common FW中針對負值處理有 2 種情況 <br /><br />

情況1:<br />
掃描所有 block 的 delta，計算其 delta 低於門檻的有幾個<br />

這裡會使用到兩個參數<br />
<pre>
<code class="language-java">
.recal_thpx    = 0x50, //RFEH_0C (0x10007092)
.mut_null_blk  = 0x46, //RFEH_75 (0x100070FB)
</code>
</pre>                                                              


下方是目前討論出來的設定方式 <br /><br />

<span style="color: red;">(1) recal_thpx  &lt;  glove_thpx + glove_cc  (SNR  = 40以上 and delta = 1000, 可設定為100)</span><br />

&nbsp;&nbsp;如果負值翻上去變成正值時，有可能直接報成glove，所以把有可能翻上去就報點的擋掉<br />

<span style="color: red;">(2) mut_null_blk  &lt;&equals;  (column number - 2)</span><br />
 
&nbsp;&nbsp;針對如果浮接近一整條column的數量時，就觸發Recal<br />

<span style="color: red;">&nbsp;&nbsp;如果是橫掃，就設定為 mut_null_blk &lt;&equals;  (column number/2)</span><br /><br />

情況2:<br />
掃描所有 block 的 delta，紀錄最小的 delta 是多少<br /><br />

這裡會使用到一個參數<br />
.quit_idle_base_diff    [RFEH_52, 0x100070D8]<br /><br />

<span style="color: red;">(1) quit_idle_base_diff &lt;  ((mut_thpx_lgd * 0.9 ~ 1.0) / 10)</span><br />

&nbsp;&nbsp;取normal報點門檻 0.9 ~ 1倍，後面除以10是 quit_idle_base_diff 會放大10倍<br />   
Note:  Recal_en = 1 且不能有任何報點下，要連續滿足recal_tm張 frame才會執行recalibration.<br />

                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+1].'">12</td>';
                                            ?>
                                            <td>Touch Peformance</td>
                                            <td>Self Test Normal (SBP) & Inspect Mode</td>
                                            <td></td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td colspan="2">
Step 1: 確認normal self test mapping正確後，把SBP數據調到40~60 (0x100071C6, 0x100071C7)<br/>

如果發現遠近端數值差異很大<br />
可以同步把電流調大和電壓調大，來使數值不要差異太大  <br /><br />
<span style="color: red;">注意: <br />
Bist mode下不會做，可讀  0x9000_00E8  bit[14]確認mode<br />
</span>
若MPAP跑回來發現SBP fail，看一下數值<br /><br />

(1)如果數值都是 -1 &rarr; 此功能沒開<br />
(2)如果數值都是  0 &rarr; IC極大可能進 bist mode，還有一種可能 HXDS不支援（上次客戶用1.7.16.2工具就收到SBP 全0）<br />
<br/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
Step 2: Inspect Mode詳情參閱PPT
<?php 
echo '<a href="'.base_url().'Automotive/Fw_checklist_downloads/0" class="btn btn-sm bg-info">';
echo '<i class="fa fa-file-powerpoint" aria-hidden="true"></i>&nbsp;&nbsp;Download';
echo '</a>';
?>
<br />
請注意測試時間，若只有取一張frame，做完下列全部測項 <br />
(1) Open test (0x10007454寫0x5A0002A4)<br />
(2) Short test (0x10007454寫0x5A0001A5)<br />
(3) Nosie test (0x10007454寫0x5A00089E)<br />
ALL test (0x10007454寫0x5A000B9B)<br />
<br />

檢測時間與 .bnk_seh_lat  = 0x05, //RFEH_6E (0x100070F4)有關<br />
新的驅動會幫忙下為0x01，檢測時間會花大約4 sec<br /><br />

另外請試試看連續做兩次inspect mode 能不能回到正常畫線頁面<br /><br />

還有inspect mode 標準 sync MPAP，並且要比較寬鬆一點<br /><br />

如果不清楚可以再問小銘 aka Very BZ 團長
<br/>
                                                            </td>
                                                        </tr>                                                        
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+1].'">13</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>Large Object, Palm (Partial, Ratio)</td>
                                            <td></td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td colspan="2">
Step 1. 設定palm threshold (Same as Normal Signal Threshold)<br/>
修改Rfeh_2B (0x100070B1)*sig_scale <br/>
<br/>
Step 2. Large Object代表大手指，須依據客戶palm規格設定 <br/>
修改Normal mode 的palm門檻Rfeh_27 (0x100070AD), Glove mode的palm門檻Rfeh_B6 (0x1000713C)<br/>
建議: 20 ~ 50<br/>
<br/> 
EX: 拿35phi銅柱按壓，觀察debug msg上 RX4數值設定palm門檻<br/>
<?php 
echo ' <img  style="width: 40%;" src="'.base_url().'assets/img/fw_checklist/FAE_Palm.png" ></img>'."\n <br />";
?>
<br/> 
Step 3. Palm (Partial, Ratio)代表大手掌，須依據手掌按壓panel設定整面palm reject門檻<br/>
修改Normal mode 的palm reject門檻Rfeh_26 (0x100070AC), Glove mode的palm reject門檻Rfeh_24 (0x100070AA)<br/>
建議: 100 ~ 255<br/><br/>
EX: 手掌按壓，觀察debug msg上 RX4數值設定palm reject 門檻 (手掌大小因人而異)<br/>
<?php 
echo ' <img  style="width: 60%;" src="'.base_url().'assets/img/fw_checklist/FAE_Palm_r.png" ></img>'."\n <br />";
?>
                                                            </td>
                                                           
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+1].'">14</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>LPWUG</td>
                                            <td>補調試流程</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td colspan="2">

                                                            </td>
                                                           
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+1].'">15</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>First Touch Latency</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <th colspan="2" style="background-color: #0066cc; color: #ff9900;">Reaction Time</th>
                                                            <th rowspan="10">
                                                                詳情參閱PPT，Test finger要至少15phi以上，並放到MUX1 (Worst case) 
                                                                <?php 
                                                                echo '<a href="'.base_url().'Automotive/Fw_checklist_downloads/1" class="btn btn-sm bg-info">';
                                                                echo '<i class="fa fa-file-powerpoint" aria-hidden="true"></i>&nbsp;&nbsp;Download';
                                                                echo '</a>';
                                                                ?>
                                                                <br /> <br />

                                                                跑完後把結果貼到此表格，可統計最大最小平均 <br />
                                                                重點是最大值不能超過30ms <br />
                                                                平均值跟最小值也要確認是不是放錯MUX <br /> <br />

                                                                如果不清楚可以再問Yoyo
                                                            </th>
                                                        </tr>
                                                        <tr style="background-color : #66ccff;">
                                                            <td>Test Condition</td>
                                                            <td>Content</td>
                                                        </tr>
                                                        <tr style="background-color:  #e6f7ff;">
                                                            <td>Test Finger</td>
                                                            <td>21 mm</td>
                                                        </tr>
                                                        <tr style="background-color:  #e6f7ff;">
                                                            <td>Behavior</td>
                                                            <td>test 100 times</td>
                                                        </tr>
                                                        <tr style="background-color: #ffeb99;">
                                                            <td></td>
                                                            <td>Result</td>
                                                        </tr>
                                                        <tr style="background-color:  #fffae6;">
                                                            <td>Latency</td>
                                                            <td>Max 27.30ms; Typ 22.64ms;</td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">1st Touch Latency</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="background-color: yellow;">Min</td>
                                                            <td>18.00 ms</td>
                                                        </tr>
                                                        <tr>
                                                            <td style="background-color: yellow;">Mean</td>
                                                            <td>22.64 ms</td>
                                                        </tr>   
                                                        <tr>
                                                            <td style="background-color: yellow;">Max</td>
                                                            <td>27.30 ms</td>
                                                        </tr>   
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>    

                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+2].'">16</td>';
                                            ?>
                                            <td>EMI</td>
                                            <td>AVG, PK, QPK</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                               
                                                            </td>
                                                           
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr> 

                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+2].'">17</td>';
                                            ?>
                                            <td>EMI</td>
                                            <td>Sensing Waveform</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                               
                                                            </td>
                                                           
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>                                    
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+2].'">18</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>Hopping & 逆變器</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                               
                                                            </td>
                                                           
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+3].'">19</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>Accuracy, Linearity by P2P</td>
                                            <td></td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
請參閱 
<?php 
echo '<a href="'.base_url().'Automotive/Fw_checklist_downloads/8" class="btn btn-sm bg-info">';
echo '<i class="fa fa-file-excel" aria-hidden="true"></i>&nbsp;&nbsp;Download';
echo '</a>';
?>
<br/>
<?php 
echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/FAE_p2p_2.png" ></img>'."\n <br />";
?>       
<br/>      

                                                            </td>
                                                           
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+3].'">20</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>Jitter (Fix, repeat)</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                               
                                                            </td>
                                                           
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+3].'">21</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>Finger Separation</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                               
                                                            </td>
                                                           
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+4].'">22</td>';
                                            ?>
                                            <td>EMS/ESD</td>
                                            <td>Baseline & Recal 時間</td>
                                            <td></td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                        <td>
                                                        <?php 
                                                        echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/31_baseline.png" ></img>'."\n <br />";
                                                        ?>  
														</td>
														<td>
                                                        .bs_delay_frame_recal&nbsp;&nbsp;= 0x02, //RFEH_6B (0x100070F1)<br />
                                                        .bs_delay_frame_lpwug&nbsp;&nbsp;= 0x0A, //RFEH_6D (0x100070F3)<br />
                                                        .bs_delay_frame&nbsp;&nbsp;= 0x05, //RFEH_6F (0x100070F5)<br /><br />

                                                        .bnk_seh_lat &nbsp;&nbsp;= 0x05, //RFEH_6E (0x100070F4)<br /><br />

                                                        .recal_tm&nbsp;&nbsp;= 0x01, //RFEH_36<br />
                                                        .bas_udt_tm &nbsp;&nbsp;= 0x02, //RFEH_37 (0x100070BD)<br /><br />

                                                        FW第一次建立Baseline，需要花費10張TP frame 時間<br />
                                                        bs_delay_frame + bnk_seh_lat = 10<br /><br />

                                                        FW更新Baseline，需要花費51張TP frame 時間<br />
                                                        bas_udt_tm * 20 + recal_tm + 10 = 51張  &rarr; 425us
														</td>
                                                           
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>                               
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+4].'">23</td>';
                                            ?>
                                            <td>EMS/ESD</td>
                                            <td>Noise detect (ESD pattern, Negative Value)</td>
                                            <td></td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
ESD pattern<br/>
請確認是否開啟ESD_DETECTION功能<br/>     
<?php 
echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/FAE_ESD.png" ></img>'."\n <br />";
?>       
<br/>      

<?php 
echo '<a href="'.base_url().'Automotive/Fw_checklist_downloads/7" class="btn btn-sm bg-info">';
echo '<i class="fa fa-file-excel" aria-hidden="true"></i>&nbsp;&nbsp;Download';
echo '</a>';
?>
                                                            </td>
                                                           
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i+4].'">24</td>';
                                            ?>
                                            <td>EMS/ESD</td>
                                            <td>Ghsot Point Protection</td>
                                            <td></td>
                                            <td>V</td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td colspan="2">
請確認是否開啟GHOST_POINT_PROTECTION功能<br/>
<?php 
echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/FAE_gpp.png" ></img>'."\n <br />";
?>  
<br/>
鬼點保護有3種等級，其保護張數可以分別設定<br/><br/>

.ghost_frame_level1  = 0x14, //RFEH_96 (0x1000711C)<br/>
.ghost_frame_level2  = 0x64, //RFEH_97 (0x1000711D)<br/>
.ghost_frame_level3  = 0x05, //RFEH_82 (0x10007108)<br/><br/>

目前大家的設定<br/>
Level 1 張數 = 1~20 張 (如果可以，至少10張比較好，但這會影響到PON lantancy，要記得注意)<br/>
Level 2 張數 = 100 張<br/>
Level 3 張數 = 5 張<br/><br/>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
何謂鬼點 3不政策?<br />
不重建 不更新 不重數<br /><br />

------------------------------------------------------------------------------------------<br />
(1)不重建: <strong style="color: #33cc33;">(GHOST_PROTECT_SKIP_BUILD_BL_EN = 1)<br /></strong>
        當鬼點保護觸發時，Baseline不重建<br /><br />

Note: OSC tracking 觸發的鬼點保護一定要重建!!<br /><br />

------------------------------------------------------------------------------------------<br />
(2)不更新: <strong style="color: #33ccff;">(GHOST_PROTECT_SKIP_UPDATE_BL_EN = 1)<br /></strong>
        當鬼點保護觸發時，在保護張數過程中，Baseline不更新<br /><br />

------------------------------------------------------------------------------------------<br />
(3)不重數: <strong style="color: #ff9900;">(GHOST_PROTECT_SKIP_RECOUNT_EN = 1)<br /></strong>
        當鬼點保護觸發時，在保護張數過程中不重數，數完就出來<br /><br />
                                                            </td>
                                                            <td>
<span style="color: red;">Note: 如果有開LVDS on/off之鬼點，在保護張數過程中就會重數囉!!<br /></span>
<?php 
echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/47_ghost_3.png" ></img>'."\n <br />";
?>  

                                                            </td>
                                                           
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
Solution: <br/>
1. Enable Palm Recal (Enable PALM_RECOVERY and set palm_recovery_count rfeh_61 (0x100070E7), ex: 0x11 (time: 10秒))<br/>
    Baseline 7.0 + Normalize 7.0 + Negative Recal + 三不<br/><br/>
2. Disable Palm Recal<br/>
    Baseline 7.0 + Normalize 7.0 + Negative Recal + 兩不(Enable Update)<br/>
    <br/>
<table>
    <tr>
        <td></td>
        <td>二不</td>
        <td>三不</td>
    </tr>
    <tr>
        <td>GHOST_PROTECT_SKIP_BUILD_BL_EN (Rfeh_b0) bit 2</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
    <td>GHOST_PROTECT_SKIP_UPDATE_BL_EN (Rfeh_b0) bit 3</td>
        <td>0</td>
        <td>1</td>
    </tr>
    <tr>
    <td>GHOST_PROTECT_SKIP_RECOUNT_EN (Rfeh_b0) bit 5</td>
        <td>1</td>
        <td>1</td>
    </tr>
</table>
	

                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>    
    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <!--
                    <div class="tab-pane fade" id="custom-content-below-6-protocol" role="tabpanel" aria-labelledby="custom-content-below-6-protocol-tab">
                         <div class="row mt-2">
                            <div class="col-md-5">
                                

                            </div>
                        </div>
                    </div>
                    -->
    
                    
                </div> <!-- div-->
                
            </div>
            <div class="card-footer">

            </div>
        </div>

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  

