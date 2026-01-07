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
                        <a class="nav-link" id="custom-content-below-dd-checklist-tab" data-toggle="pill" href="#custom-content-below-dd-checklist" role="tab" aria-controls="custom-content-below-dd-checklist" aria-selected="true">DD checklist</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="custom-content-below-tp-checklist-tab" data-toggle="pill" href="#custom-content-below-tp-checklist" role="tab" aria-controls="custom-content-below-tp-checklist" aria-selected="true">TP checklist</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="custom-content-below-panel-rule-tab" data-toggle="pill" href="#custom-content-below-panel-rule" role="tab" aria-controls="custom-content-below-panel-rule" aria-selected="true">First FW Rule</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="custom-content-below-fisrt-fw-tab" data-toggle="pill" href="#custom-content-below-fisrt-fw" role="tab" aria-controls="custom-content-below-fisrt-fw" aria-selected="false">首次調適FW一定要注意</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="custom-content-below-a-2-c-tab" data-toggle="pill" href="#custom-content-below-a-2-c" role="tab" aria-controls="custom-content-below-a-2-c" aria-selected="true">192A_to_192C注意事項</a>
                    </li>

                </ul>
                <div class="tab-content" id="custom-content-below-tabContent">
                    <div class="tab-pane fade show active" id="custom-content-below-dd-checklist" role="tabpanel" aria-labelledby="custom-content-below-dd-checklist-tab">
                        <div class="row mt-2">
                            <div class="col-md-12">
                                <?php 
                                echo '<a href="#" class="btn btn-sm bg-info" id="dd_checklist_xlsx">';
                                echo '<i class="fa fa-file-excel" aria-hidden="true"></i>&nbsp;&nbsp;Export DD Checklist to xlsx';
                                echo '</a>';
                                ?>
                                <button class="btn btn-md bg-info float-sm-right" id="dd_version_edit_click">
                                    <i class="fa fa-pencil-alt" aria-hidden="true"></i> &nbsp;Edit/Add Field
                                </button>
                                <button class="btn btn-md bg-info float-sm-right dd_version_edit mr-2" id="dd_version_save_click">
                                    <i class="fa fa-save" aria-hidden="true"></i> &nbsp;Save
                                </button>
                                
                                <button class="btn btn-md bg-danger float-sm-right dd_version_edit mr-2" id="dd_version_cancel_click">
                                    <i class="fa fa-trash-alt" aria-hidden="true"></i> &nbsp;Cancel 
                                </button>   
                            </div>
                        </div>
                         <div class="row mt-2">
                            <div class="col-md-12">
                            
                                <table class="table <!--table-striped--> table-bordered text-xs" id="dd_list_table" spellcheck="false">
                                    <tr>
                                        <th class="dd_list_table_item">#</th>
                                        <th class="dd_list_table_owner" coloron="80d4ff" style="font-weight: bold;">-</th>
                                        <th class="dd_list_table_feature" coloron="80d4ff" style="font-weight: bold;">HX83192 A/B/C</th>
                                        <th class="dd_list_table_setting" coloron="80d4ff" style="font-weight: bold;">Setting</th>
                                        <th class="dd_list_table_tp_se" coloron="80d4ff" style="font-weight: bold;">TP SE description</th>
                                    </tr>
                                    <?php
                                        $html = json_decode($json_file, true);
                                        $content_table = '';
                                        foreach($html as $vfuncs){
                                            $content_table.='   <tr>';
                                            $content_table.='       <td class="dd_list_table_item">'.$vfuncs["item"];
                                            //$content_table.='         <button class="dd_checklist_delete btn btn-sm bg-danger">';
                                            //$content_table.='             <i class="fa fa-trash-alt" aria-hidden="true"></i>';
                                            //$content_table.='         </button>';
                                            $content_table.='       </td>';
                                            /******************************************/
                                            if($vfuncs["owner"][1] == ""){
                                                $ft_color = "#000000";
                                            }
                                            else{
                                                $ft_color = $vfuncs["owner"][1];
                                            }
                                            if($vfuncs["owner"][2] == ""){
                                                $bg_color = "#ffffff";
                                            }
                                            else{
                                                $bg_color = $vfuncs["owner"][2];
                                            }
                                            
                                            $content_table.='       <td class="dd_list_table_owner" style="color: '.$ft_color.' ; background-color: '.$bg_color.';">';
                                            $content_table.='           <span class="dd_version_edit clr-field float-sm-right" style=" width: 15px; height: 15px; color:'.$bg_color.';">';
                                            $content_table.='               <button style="width: 100%; height: 100%;border: 1px solid black;" aria-labelledby="clr-open-label"></button>';
                                            $content_table.='               <input type="text" class=" oem_coloris"  style="width:10px;height: 10px;"/>';
                                            $content_table.='           </span>';
                                            $content_table.='           <span class="dd_list_table_owner_val float-sm-left" style="width: 90%;">'.$vfuncs["owner"][0].'</span>';
                                            $content_table.='       </td>';
                                            /******************************************/
                                            if($vfuncs["feature"][1] == ""){
                                                $ft_color = "#000000";
                                            }
                                            else{
                                                $ft_color = $vfuncs["feature"][1];
                                            }
                                            if($vfuncs["feature"][2] == ""){
                                                $bg_color = "#ffffff";
                                                $coloron = "";
                                            }
                                            else{
                                                $bg_color = $vfuncs["feature"][2];
                                                $coloron = substr($bg_color, 1); 
                                            }
                                                                                        
                                            $content_table.='       <td class="dd_list_table_feature" coloron="'.$coloron.'" style="color: '.$ft_color.' ; background-color: '.$bg_color.';">';
                                            $content_table.='           <span class="dd_version_edit clr-field float-sm-right" style=" width: 15px; height: 15px; color:'.$bg_color.';">';
                                            $content_table.='               <button style="width: 100%; height: 100%;border: 1px solid black;" aria-labelledby="clr-open-label"></button>';
                                            $content_table.='               <input type="text" class=" oem_coloris"  style="width:10px;height: 10px;"/>';
                                            $content_table.='           </span>';
                                            $content_table.='           <span class="dd_list_table_feature_val float-sm-left" style="width: 90%;">'.$vfuncs["feature"][0].'</span>';
                                            $content_table.='       </td>';
                                            /******************************************/
                                            if($vfuncs["setting"][1] == ""){
                                                $ft_color = "#000000";
                                                
                                            }
                                            else{
                                                $ft_color = $vfuncs["setting"][1];
                                            }
                                            if($vfuncs["setting"][2] == ""){
                                                $bg_color = "#ffffff";
                                                $coloron = "";
                                            }
                                            else{
                                                $bg_color = $vfuncs["setting"][2];
                                                $coloron = substr($bg_color, 1); 
                                            }
                                            
                                            $content_table.='       <td class="dd_list_table_setting" coloron="'.$coloron.'" style="color: '.$ft_color.' ; background-color: '.$bg_color.';" contenteditable>';
                                            $content_table.='           <span class="dd_version_edit clr-field float-sm-right" style="width: 15px; height: 15px; color:'.$bg_color.';">';
                                            $content_table.='               <button style="width: 100%; height: 100%;border: 1px solid black;" aria-labelledby="clr-open-label"></button>';
                                            $content_table.='               <input type="text" class=" oem_coloris"  style="width:10px;height: 10px;"/>';
                                            $content_table.='           </span>';
                                            $content_table.='           <span class="dd_list_table_setting_val float-sm-left" style="width: 90%;">'.$vfuncs["setting"][0].'</span>';
                                            $content_table.='       </td>';
                                            /******************************************/
                                            if($vfuncs["TP_SE"][1] == ""){
                                                $ft_color = "#000000";
                                                
                                            }
                                            else{
                                                $ft_color = $vfuncs["TP_SE"][1];
                                            }
                                            if($vfuncs["TP_SE"][2] == ""){
                                                $bg_color = "#ffffff";
                                                
                                            }
                                            else{
                                                $bg_color = $vfuncs["TP_SE"][2];
                                            }
                                            $content_table.='       <td class="dd_list_table_tp_se" style="color: '.$ft_color.'; background-color: '.$bg_color.' ;">'.$vfuncs["TP_SE"][0].'</td>';
                                            /******************************************/
                                            $content_table.='   </tr>';
                                        }
                                        
                                        echo $content_table;
                                    ?>
                                
                                </table>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-sm-12">
                                <button class="btn btn-md bg-danger float-sm-left dd_version_edit mr-2" id="dd_version_add_click">
                                    <i class="fa fa-code" aria-hidden="true"></i> &nbsp;Add Field
                                </button>   
                            </div>
                        </div>
                        
                    </div>
                    <?php
                        $i = 0;
                        $bg_color = array('#ff9900','#ffff00', '#99cc00', '#33ccff');
                    ?>
                    <div class="tab-pane fade" id="custom-content-below-tp-checklist" role="tabpanel" aria-labelledby="custom-content-below-tp-checklist-tab">
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
                                        <th>Date</th>
                                        <th>Notes</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">1</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>能否正常點亮畫面</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">2</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>畫面顯示是否正常</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">3</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>Sensing Time</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                                <span style="background-color: #d3edf8">1. Click Text DD OSC Parser</span><br />
                                                                <?php 
                                                                echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/3_sensing_time_1.png" ></img>'."\n<br />";
                                                                ?>  
                                                            </td>
                                                            <td>
                                                                <span style="background-color: #d3edf8">2. Paste the whole dd init code (.h)</span><br />
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/3_sensing_time_2.png" ></img>'."\n<br />";
                                                                ?>  
                                                                <span style="background-color: #d3edf8">3. Click Enter</span><br /><br />
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td colspan="2">
                                                                <span style="background-color: #d3edf8">4. <br />
                                                                    &nbsp;&nbsp;<span style="color: blue;">- 湖藍色的資料會自動帶出   (要記得跟DD確認是否填寫正確)</span><br />
                                                                    &nbsp;&nbsp;<span style="color: gray;">- 灰色的資料可以根據自己設定做更改</span>
                                                                </span><br />
                                                                <span style="background-color: #d3edf8">5. Click Calculate</span><br /><br />
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/3_sensing_time_3.png" ></img>'."\n<br />";
                                                                ?>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
                                                                <span style="background-color: #d3edf8">6. 至少-2%可以安全通過
                                                                </span><br />
                                                                <?php
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/3_sensing_time_4.png" ></img>'."\n<br />";
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
                                            <td>Code Size</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
													<table class="table fw_checklist_expand_table_bg">
														<tr><td>
														若有大幅更新code，或增加新功能  <br />
														請確認整體Stack還是剩下多少! <br />

														確認方式: <br />
														Debug &rarr; output &rarr; symbol.txt <br />
														拉到最下面 <br />
														<span style="color: red;">
														stack - end = 剩餘 <br />
														原則上至少要大於3KB，避免CCL發生overflow問題 <br /> <br />
														</span>
														Ex: <br />
														0x10000 - 0xd690 =  0x2970 (10608 bytes) <br />
														<?php 
														echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/4_code_size.png" ></img>'."\n";
														?>  
														<br /><br />
														可以讀 Max_sp去確認FW運行中，stack的變化 <br />
														</td></tr>
													</table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">5</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>Connect to HxDesignStudio</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">6</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>Protocol</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                                <?php 
                                                                /*echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/6_protocol_1.png" ></img>'."\n";
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/6_protocol_2.png" ></img>'."\n";
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/6_protocol_3.png" ></img>'."\n";
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/6_protocol_4.png" ></img>'."\n";
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/6_protocol_5.png" ></img>'."\n";
                                                                */
                                                                ?>  
<pre>
<code class="language-java">
#define BMW_PROTOCOL          (0x00)
#define DA_PROTOCOL           (0x00)
#define HX_PROTOCOL_ID        (0x00) //00: orginal data format; 01: report point ID instead of finger size
#define FCA_PROTOCOL          (0x00)
#define ATMEL_PROTOCOL        (0x00)

#if (0x01 == HX_PROTOCOL_ID)
#define HX_FORMAT_1           (0x01)  //(Event_ID 1.00)
#define DESAY_FORMAT          (0 & HX_FORMAT_1)     //(Event_ID 1.02)
#define HX_FORMAT_2           (0x00)                //(Event_ID 2.00)
#endif

#define BMW_PROTOCOL_EN       READ_VAR_BIT(Fw_config.algorithm_en_set_5, 7)
#define DA_PROTOCOL_EN        READ_VAR_BIT(Fw_config.algorithm_en_set_automobile, 4) 
#define FCA_PROTOCOL_EN       READ_VAR_BIT(Fw_config.algorithm_en_set_automobile, 5) 
#define ATMEL_PROTOCOL_EN     READ_VAR_BIT(Fw_config.algorithm_en_set_automobile, 6)

#define HX_ID_EN              READ_VAR_BIT(Fw_config.algorithm_en_set_automobile2, 1)
#define HX_ID_PATCH_EN        READ_VAR_BIT(Fw_config.algorithm_en_set_automobile2, 3)
</code>
</pre>                                                              
                                                            </td>
                                                            <td>
                                                                <span style="color: red;">FW預設為原本的報點方式，請注意是否有誤開!</span> <br />
                                                                若有 需要特殊報點格式<br />
                                                                (1)BMW<br />
                                                                &nbsp;&nbsp;&rarr; 打開define + BMW_PROTOCOL_EN<br /><br />

                                                                (2)DA<br />
                                                                &nbsp;&nbsp;&rarr; 打開define + DA_PROTOCOL_EN   (對格式細節有興趣，請問Eason aka E神老師)<br /><br />

                                                                (3)FCA<br />
                                                                &nbsp;&nbsp;&rarr; 打開define + FCA_PROTOCOL_EN<br /><br />

                                                                (4)ATMEL<br />
                                                                &nbsp;&nbsp;&rarr; 打開define + ATMEL_PROTOCOL_EN<br /><br />

                                                                (5)Event ID  (HX_PROTOCOL_ID)<br />
                                                                &nbsp;&nbsp;&rarr; 打開define + HX_ID_EN<br />
                                                                &nbsp;&nbsp;目前支援3種格式 ，請注意要再另外開 define<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #33ccff;">Event_ID 1.00</span> => HX_FORMAT_1 opition2<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #00cc00;">Event_ID 1.02</span => HX_FORMAT_1 + DESAY_FORMAT<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;- <span style="color: #ff9900;">Event_ID 2.00</span => HX_FORMAT_2<br /><br />

                                                                &nbsp;&nbsp;&nbsp;&nbsp;1.00和2.00的差異為<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;(A)前者會一直enter，直到移動後才變move; 後者enter一張後，就變move<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;(B)前者會leave只報FF; 後者會leave會報leave座標<br /><br />

                                                                &nbsp;&nbsp;&nbsp;&nbsp;請確認客戶驅動版號要讀inforamation<br /><br />
                                                                <span style="color: red;">
                                                                注意: <br />
                                                                如果出現tool 跳不出leave<br />
                                                                確認HX_ID_Pro要對應Event_ID 的板號下，近期的master會自動改好<br />
                                                                </span>
                                                                <?php 
                                                                echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/6_protocol_6.png" ></img>'."\n";
                                                                ?>                                                              
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">7</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>Edge/Level Trigger</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">                       
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                                <?php 
                                                                //echo ' <img  style="width: 100%" src="'.base_url().'assets/img/fw_checklist/7_edge_level_1.png" ></img>'."\n";
                                                                ?>  
<pre>
<code class="language-java">
#define SW_TSIX_EN     READ_VAR_BIT(Fw_config.algorithm_en_set_2, 0)
</code>
</pre>                                                              
                                                            </td>
                                                            <td>
                                                                <span style="color:red;">FW目前 FAE 要求 default 設定為 level trigger</span> <br />

                                                                Edge trigger: 請設定 SW_TSIX_EN = 1<br /><br />

                                                                Level trigger: 請設定 SW_TSIX_EN = 0<br /><br />


                                                                Edge trigger 行為:<br />
                                                                只要Event stack有資料，TSIX就會每120Hz troggle一次<br /><br />


                                                                Level trigger 行為:<br />
                                                                只要Event stack有資料，TSIX就會一直Keep low，直到資料收走才會為High<br />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
                                                                <table class="table table-bordered" style=" text-align: center;">
                                                                    <tr>
                                                                        <th colspan="2">Event stack有資料，<span style="color: red;">Host沒收走時的行為</span></th>
                                                                        <th>Event stack有資料，<span style="color: green;">Host馬上收走時的行為</span></th>
                                                                    </tr>
                                                                    <tr style="background-color: yellow;">
                                                                        <td>Edge Trigger</td>
                                                                        <td>Level Trigger</td>
                                                                        <td>Edge Trigger & Level Trigger</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <?php 
                                                                            echo ' <img  style="height:20rem;" src="'.base_url().'assets/img/fw_checklist/7_edge_level_2.png" ></img>'."\n";
                                                                            ?>  
                                                                        </td>
                                                                        <td>
                                                                            <?php 
                                                                            echo ' <img  style="height:20rem;" src="'.base_url().'assets/img/fw_checklist/7_edge_level_3.png" ></img>'."\n";
                                                                            ?>  
                                                                        </td>
                                                                        <td>
                                                                            <?php 
                                                                            echo ' <img  style="height:20rem;" src="'.base_url().'assets/img/fw_checklist/7_edge_level_4.png" ></img>'."\n";
                                                                            ?>  
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>

                                                        </tr>
                                                    </table>
                        
                
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">8</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>Frame rate & Report Rate</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/8_frame_report_rate.png" ></img>'."\n";
                                                                ?>
                                                            </td>
                                                            <td>
                                                                IC硬體限制上<br />
                                                                <span style="color:red;">Report rate 必須要為 Frame rate的 1 或 2倍</span><br /><br />

                                                                Ex:<br />
                                                                (1) Frame rate = 55Hz 下，Report rate = 55 or 110 Hz<br />
                                                                (2) Frame rate = 60Hz 下，Report rate = 60 or 120 Hz<br /><br />

                                                                <span style="color:red;">Note: 檢查Report rate可以順便間接確認DD Vsync是不是55 or 60Hz</span><br />
                                                            </td>
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/8_frame_report_rate_1.png" ></img>'."\n";
                                                                ?>                                  
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">9</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>Multi-touch</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
<pre>
<code class="language-java">
#define CASCADE_RELOAD_CHECK    (0x01 & (!LONGV_MODE))
</code>
</pre>                                                                  
                                                        
                                                            </td>
                                                            <td>
                                                                預設 FW 只能支援 9phi @ 8~9  fingers <br /><br />

                                                                打開 CASCADE_RELOAD_CHECK<br />
                                                                目前架構下可以壓線支援 9phi @ 10 fingers<br />

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/9_multi_touch_2.png" ></img>'."\n";
                                                                ?>
                                                            </td>
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/9_multi_touch_3.png" ></img>'."\n";
                                                                ?>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">10</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>畫線/收值/SNR確認</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                                                                
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">11</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>MPAP (open/short/Mopen)</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
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
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/11_mpap_1.png" ></img>'."\n";
                                                                ?>                                      
                                                            </td>
                                                            <td>
                                                                <span>
                                                                目標:<br />
                                                                把3/4面的值調整到198以下<br /><br />

                                                                注意事項:<br />
                                                                不要整面值都飽合到198<br />
                                                                希望測試至少兩片結果<br /><br />

                                                                如果不清楚可以再問小銘 aka Very BZ 團長<br />

                                                                </span>
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/11_mpap_2.png" ></img>'."\n";
                                                                ?>                                      
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2" style="background-color: yellow;">Short</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/11_mpap_3.png" ></img>'."\n";
                                                                ?>                                      
                                                            </td>
                                                            <td>
                                                                <span>
                                                                目標:<br />
                                                                把整面的值調整到10~15以下<br /><br />

                                                                注意事項:<br />
                                                                不要整面值都為0<br />
                                                                希望測試至少兩片結果<br />
                                                                </span>
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/11_mpap_4.png" ></img>'."\n";
                                                                ?>                                      
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2" style="background-color: yellow;">M-Open</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/11_mpap_5.png" ></img>'."\n";
                                                                ?>                                      
                                                            </td>
                                                            <td>
                                                                <span>
                                                                    目標:<br />
                                                                    把整面的值調整到~40以下，但要跟short要有鑑別度<br />
                                                                    從近端到遠端，數值會從小到大<br />

                                                                    注意事項:<br />
                                                                    不要整面值都過小，有時候M-open測項不過，但Touch還是OK，這種只能錯殺也不要漏放<br />
                                                                    希望測試至少兩片結果<br />
                                                                </span>
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/11_mpap_6.png" ></img>'."\n";
                                                                ?>                                      
                                                            </td>
                                                        </tr>
                                                    </table>
                                                
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">12</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>Fail Detection Read</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                                <?php 
                                                                echo ' <img style="height: 20rem;" src="'.base_url().'assets/img/fw_checklist/12_fail_det_1.png" ></img>'."\n";
                                                                ?>  
                                                            </td>
                                                            <td>
                                                                FW出去前先確認Fail detection是不是有舉<br />
                                                                請對照右方表格做查詢~<br /><br />

                                                                另外也可以回讀E5_01 BK3，確認是否曾經有舉的情況<br />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="height: 50rem;" src="'.base_url().'assets/img/fw_checklist/12_fail_det_3.png" ></img>'."\n";
                                                                ?>
                                                            </td>
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="height: 50rem;" src="'.base_url().'assets/img/fw_checklist/12_fail_det_3.png" ></img>'."\n";
                                                                ?>  
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>   
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">13</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>Self Test Normal & Inspect Mode</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                                <span style="text-decoration: underline;">Step 1: Click Self Test Mapping</span> <br />
                                                                <?php 
                                                                echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/13_self_test_normal_1.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                            <td>
                                                                <span style="text-decoration: underline;">
                                                                Step 2: Fill out <span style="background-color: yellow;">a chip </span> TX/RX and paste mapping table in tp init code (Only for normal mapping)
                                                                </span> <br />
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/13_self_test_normal_2.png" ></img>'." <br />\n";
                                                                ?>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
                                                                <span style="text-decoration: underline;">Step 3: Click Enter. Paste TSRAM word 60~139 and ADC_EN table result into tp init code. </span> <br />
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/13_self_test_normal_3.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                            
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
                                                                <span style="text-decoration: underline;">Step 4: In FW, please turn on the following define. <br /></span> 
<pre>
<code class="language-java">
#define SELF_TEST_V2_MAPPING          0x01
#define SELF_TEST_SETTING_BY_TP_INIT  0x01
</code>
</pre>
                                                                    
                                                                <span style="text-decoration: underline;">Step 5: 把SBP數據調到50~70，可透過下列參數調整<br /></span> 
<pre>
<code class="language-java">
.auto_self_test_voltage = 0x06,  //RFEH_140
.auto_self_test_current = 0x33,  //RFEH_141
</code>
</pre>

                                                                如果發現遠近端數值差異很大<br />
                                                                可以同步把電流調大和電壓調大，來使數值不要差異太大  <br /><br />
                                                                <span style="color: red;">注意: <br />
                                                                Bist mode下不會做，可讀  0x9000_00E8  bit[14]確認mode<br />
                                                                </span>
                                                                若MPAP跑回來發現SBP fail，看一下數值<br /><br />

                                                                (1)如果數值都是 -1 &rarr; 此功能沒開<br />
                                                                (2)如果數值都是  0 &rarr; IC極大可能進 bist mode<br />
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/13_self_test_normal_4.png" ></img>'."\n <br />";
                                                                ?>  
                                                                <br /><br />
                                                                <span style="text-decoration: underline;">Step 6 (Optional): 如果想要debug看self test mapping，可以打開 define SHOW_SELF_TEST_MAPPING，並切到Raw_out_sel 0x0A 看結果<br /></span> 
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/13_self_test_normal_5.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Inspect Mode詳情參閱PPT
                                                                <?php 
                                                                echo '<a href="'.base_url().'Automotive/Fw_checklist_downloads/0" class="btn btn-sm bg-info">';
                                                                echo '<i class="fa fa-file-powerpoint" aria-hidden="true"></i>&nbsp;&nbsp;Download';
                                                                echo '</a>';
                                                                ?>
                                                                <br /><br />

                                                                請注意測試時間，若只有取一張frame，做完下列全部測項 <br />
                                                                (1) Open test<br />
                                                                (2) Short test<br />
                                                                (3) Nosie test<br /><br />

                                                                檢測時間與 .bnk_seh_lat  = 0x05, //RFEH_6E有關<br />
                                                                新的驅動會幫忙下為0x01，檢測時間會花大約4 sec<br /><br />

                                                                另外請試試看連續做兩次inspect mode 能不能回到正常畫線頁面<br /><br />

                                                                還有inspect mode 標準 sync MPAP，並且要比較寬鬆一點<br /><br />

                                                                如果不清楚可以再問小銘 aka Very BZ 團長
                                                            </td>
                                                            <td>
<pre>
<code class="language-java">
AUTO_SELF_TEST_CONFIG_TABLE_T Auto_self_test_config =
{
    .short_high_boundary        = 0x0064,   //100   0x100074A2
    .short_low_boundary         = 0x0000,   //0     0x100074A0
    .open_high_boundary         = 0x01F4,   //500   0x100074A6
    .open_low_boundary          = 0x0032,   //50   0x100074A4
    .micro_open_high_boundary   = 0x0064,   //100   0x100074AA
    .micro_open_low_boundary    = 0x0000,   //0     0x100074A8
    .noise_high_boundary        = 0x0064,   //100   0x100074AE
    .noise_low_boundary         = 0x0064,   //0     0x100074AC
    .rawdata_short              = 0x005A,   //90    0x100074B2
    .rawdata_open               = 0x0014,   //20    0x100074B0
    .fail_ponit                 = 0x01,     //      0x100074B4
    .frame_base                 = 0x05,     //      0x100074B8
};
</code>
</pre>                                  
                                                            </td>                                       
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/13_self_test_inspect_1.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/13_self_test_inspect_2.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>                                       
                                                        </tr>
														<tr>
															<td>
Inspect mode 在8094 FW之後，遇到因為inspect cmd與密碼相同，導致沒有下dd init code<br />
請8094 FW確認右邊的init check都有下到<br /><br />

<span style="color: red;">DSRAM在上電參數沒有做初始化的話，數值會是隨機亂數。<br /></span>
如有在DSRAM新增flag或state，記得要在main.c中的Init_config()初始化，這樣Power on之後FW會先初始化。<br /><br />

如果有需要下密碼才能啟動的功能，記得密碼長度至少為 4-bytes<br />
長度如果小於4-bytes，上電時為亂數，很容易誤踩到密碼，就會誤啟動功能。<br />
															</td>
															<td>
<pre>
<code class="language-java">
if(flash_dsram_check != CFG_Info_Valid) // first boot
{
	Changedebuginfo = 0;
	TP_self_diagnosis_status = 0;
	Fail_detect_master = 0;
	Func_stop_report_point = 0;
	MV_rawoutsel = 0;
	MV_data_pre = 0;
	Ghost_dbg_header_tosram = 0;
	DD_fail_detect_status_1 = 0;
	DD_fail_detect_status_2 = 0;

	Tp_inspect_mode_cmd_current = 0x00; // init check
	TP_self_diagnosis_inpect_mode_command = 0x00; // init check
	Auto_self_going_flag = 0; // init check
</code>
</pre> 
															</td>
														</tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">14</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>Voltage Setting</td>
                                            <td>2022.Aug.03</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <?php 
                                                    echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/14_voltage_setting.png" ></img>'."\n <br />";
                                                    echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/14_voltage_setting_2.png" ></img>'."\n<br />";
                                                    echo ' <img  style="width: 90%;" src="'.base_url().'assets/img/fw_checklist/14_voltage_setting_3.png" ></img>'."\n<br />";
                                                    ?>  
                                                </div>
                                            </td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">15</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>VDDD Setting</td>
                                            <td>2022.Dec.22nd</td>
                                            <td></td>
                                        </tr>
										<tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
													<table class="table fw_checklist_expand_table_bg">
														<tr>
															<td>
重點宣導<br/>
<span style="color: red;">
(1) FW update 不可偷改VDDD電壓, 須寫在release note<br/>
(2) FW 發布前,須與SE / PM 先行確認目前案子進展<br/>
VDDD 最低操作電壓確認，需與 CP test 數據連結
</span>
															</td>
															<td>
VDDD Setting 文件下載
<?php 
echo '<a href="'.base_url().'Automotive/Fw_checklist_downloads/4" class="btn btn-sm bg-info">';
echo '<i class="fa fa-file-powerpoint" aria-hidden="true"></i>&nbsp;&nbsp;Download';
echo '</a>';
?>															</td>
														</tr>
														<tr class="text-xs">
															<td>
																<h5>VDDD 新案對策</h5><br/>
																<table class="table table-bordered">
																	<tr>
																		<td>
																		</td>
																		<td>VDDD類型</td>
																		<td>External LDO<br/>(LDO的電壓)</td>
																		<td>Internal VDDD<br/>(FW設定電壓)</td>
																		<td>Note</td>
																	</tr>
																	<tr>
																		<td>Case1 (新案)</td>
																		<td>外掛LDO提供</td>
																		<td>1.3V</td>
																		<td>1.2V</td>
																		<td>新案<span style="background-color:#f5e76b;">外灌</span>應用<br/>
																			External LDO提供電壓一律是1.3V<br/>
																			Internal VDDD設定電壓一律是1.2V
																		</td>
																	</tr>
																	<tr>
																		<td>Case2 (新案)</td>
																		<td>IC內部提供</td>
																		<td>-</td>
																		<td>1.3V</td>
																		<td>新案<span style="background-color:#b6f56b;">內建</span>應用<br/>
																			Internal VDDD設定電壓一律是1.3V
																		</td>
																	</tr>
																</table>
															</td>														
															<td>
																<h5>VDDD 舊案對策</h5><br/>
																<table class="table table-bordered">
																	<tr>
																		<td>
																		</td>
																		<td>VDDD類型</td>
																		<td>External LDO<br/>(LDO的電壓)</td>
																		<td>Internal VDDD<br/>(FW設定電壓)</td>
																		<td>Solution<br/>(變更Internal VDDD)</td>
																		<td>Note</td>
																	</tr>
																	<tr>
																		<td>Case1 (舊案)</td>
																		<td>外掛LDO提供</td>
																		<td>1.25V</td>
																		<td>1.05V</td>
																		<td style="color:red;">1.05V提高到 1.2V</td>
																		<td>實際外灌可能失效<br/>
																			有SRAM fail 風險，FW update時需做Internal VDDD修正
																		</td>
																	</tr>
																	<tr>
																		<td>Case2 (舊案)</td>
																		<td>外掛LDO提供</td>
																		<td>1.2V</td>
																		<td>1.15V</td>
																		<td style="color:red;">1.15V提高到 1.3V</td>
																		<td>
																			須注意IC VDDD電壓是否會反灌到外部LDO<br/>
																			外灌應用失效<br/>
																			有SRAM fail 風險，FW update時需做Internal VDDD修正
																		</td>
																	</tr>
																	<tr>
																		<td>Case3 (舊案)</td>
																		<td>外掛LDO提供</td>
																		<td>1.2V</td>
																		<td>1.05V</td>
																		<td style="color:red;">1.05V提高到 1.3V</td>
																		<td>
																			須注意IC VDDD電壓是否會反灌到外部LDO<br/>
																			外灌應用失效<br/>
																			有SRAM fail 風險，FW update時需做Internal VDDD修正
																		</td>
																	</tr>
																	<tr>
																		<td>Case4 (舊案)</td>
																		<td>IC內部提供</td>
																		<td>-</td>
																		<td>1.25V</td>
																		<td>Keep</td>
																		<td>現階段design in 案子如已經設定1.25V / 1.3V，就不需要再做變動
																		</td>
																	</tr>
																	<tr>
																		<td>Case5 (舊案)</td>
																		<td>IC內部提供</td>
																		<td>-</td>
																		<td>1.3V</td>
																		<td>Keep</td>
																		<td>現階段design in 案子如已經設定1.25V / 1.3V，就不需要再做變動
																		</td>
																	</tr>
																	<tr>
																		<td>Case6 (舊案)</td>
																		<td>IC內部提供</td>
																		<td>-</td>
																		<td>1.2V</td>
																		<td style="color:red;">1.2 提高到 1.25 / 1.3</td>
																		<td>
																			有SRAM fail 風險，FW  update時需做Internal VDDD修正<br/>
																			根據案子狀況，轉換成 Case4 或 Case5
																		</td>
																	</tr>
																</table>
															</td>
															
														</tr>
													</table>
                                                </div>
                                            </td>
                                        </tr>
										<tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">15</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td>Mapping tool</td>
                                            <td>2023.Mar.27th</td>
                                            <td></td>
                                        </tr>
										<tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
												
													<?php 
														echo '<div class="mb-1 mr-1" ><a href="'.base_url().'Automotive/Fw_checklist_downloads/5" class="btn btn-sm bg-info">';
														echo '<i class="fa fa-file-powerpoint" aria-hidden="true"></i>&nbsp;&nbsp;Download 192 Mapping';
														echo '</a></div>';
														
														echo '<div class="" ><a href="'.base_url().'Automotive/Fw_checklist_downloads/6" class="btn btn-sm bg-info">';
														echo '<i class="fa fa-file-powerpoint" aria-hidden="true"></i>&nbsp;&nbsp;Download 193 Mapping';
														echo '</a></div>';
                                                    ?>
												</div>
											</td>
										</tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">16</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">17</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">18</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">19</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">20</td>';
                                            ?>
                                            <td>Basic</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <!--20-------------------------------------->
                                        <?php $i++;?>
                                         <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">21</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>rawdata(yin on/off) -> normalize</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <div class="row mt-2 fw_checklist_expand_table_bg">  
                                                        <div class="col-md-12">
                                                            在CG sample下，delta調整至900~1000及SNR = 40左右後 <br /><br />

                                                            如果發現 IC Yin off下，Rawdata差異很大<br />
                                                            請開啟鬼之RAWDATA_NORMALIZE，把差異變不見，不然打機台會打到哭出來<br /><br />

                                                            <span style="color: red;">Note: 只能補 IC 之ADC個別差異，Panel的偏差是沒辦法的!!</span><br />
                                                            <table class="table table-bordered">
                                                                <tr style="color: red; background-color: yellow;">
                                                                    <th>Normalize之前</th>
                                                                    <th>Normalize之後</th>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <?php 
                                                                        echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/21_normalize_before.png" ></img>'."\n <br />";
                                                                        ?>  
                                                                    </td>
                                                                    <td>
                                                                        <?php 
                                                                        echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/21_normalize_after.png" ></img>'."\n <br />";
                                                                        ?>  
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <br />
                                                            具體作法:<br />
                                                            (1) 先量測SNR (固定同一位置)<br />
                                                            (2) 量測 Yin off下，rawdata的平均值<br />
                                                            (3) 將rawdata的平均值填入下方，轉16進制  Ex: 0xE10 = 3600<br />
<pre>
<code class="language-java">
.rawdata_normalized_target_f0_l    = 0x10, //RFEH_D4
.rawdata_normalized_target_f0_h    = 0x0E, //RFEH_D5
.rawdata_normalized_target_f1_l    = 0xA0, //RFEH_D6
.rawdata_normalized_target_f1_h    = 0x0F, //RFEH_D7
</code>
</pre>
                                                                
                                                            (4) 打開以下<br />
<pre>
<code class="language-java">
#define RAWDATA_NORMALIZE      (0x01)
#define RAWDATA_NORMALIZE_EN   READ_VAR_BIT(Fw_config.algorithm_en_set_automobile, 7)
</code>
</pre>
                                                            (5)量測 Yin off下，rawdata的分布<br />
                                                            (6)量測SNR (固定同一位置)，不要差異太多<br /><br />
                                                            
                                                            Note: 可以切Rawout type = 0x10檢查看是否有設錯，如果偏離128太多，代表設定有問題<br />
                                                            超過128 +/- 30% ( 90 ~ 166.4 )<br />

                                                        </div>
                                                    </div>
                                                    <div class="row mt-2">
                                                        <div class="col-md-3">
                                                            <?php 
                                                            echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/21_normalize_2.png" ></img>'."\n <br />";
                                                            ?>  
                                                        </div>
                                                        <div class="col-md-6">
                                                            <?php 
                                                            echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/21_normalize_1.png" ></img>'."\n <br />";
                                                            ?>  
                                                        </div>
                                                        <div class="col-md-3">
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">22</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>Hopping & 逆變器</td>
                                            <td>2022.Dec.22nd</td>
                                            <td></td>
                                        </tr>
										<tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
															<td>
<strong>跳頻</strong>功能開啟(F0/F1 Noise Detection and Hopping)
<pre>
<code class="language-java">
#define TX_HOPPING_DEF (0x01)
#define NOISE_DET_ONLY (0x00)
TX_HOP_EN -> 1
NOISE_DET_EN -> 0
.hopping_another_delay = 0x02, //RFEH_4A --> 一定要是2以上
</code>
</pre>																
															</td>
															<td>
<strong>F0 Noise Detection Only</strong>功能開啟(no F1 setting)
<pre>
<code class="language-java">
#define TX_HOPPING_DEF (0x01)
#define NOISE_DET_ONLY (0x01)
TX_HOP_EN -> 0
NOISE_DET_EN -> 1
</code>
</pre>																
															</td>
														</tr>
														<tr>
															<td>
逆變器報告
<?php 
echo '<a href="'.base_url().'Automotive/Fw_checklist_downloads/3" class="btn btn-sm bg-info">';
echo '<i class="fa fa-file-powerpoint" aria-hidden="true"></i>&nbsp;&nbsp;Download';
echo '</a>';
?>															
															</td>
															<td></td>
														</tr>
														<tr>
															<td colspan="2">
<?php 
echo ' <img  style="height: 50rem;" src="'.base_url().'assets/img/fw_checklist/22_inverter_1.png" ></img>'."\n <br />";
echo ' <img  style="height: 50rem;" src="'.base_url().'assets/img/fw_checklist/22_inverter_2.png" ></img>'."\n <br />";
echo ' <img  style="height: 50rem;" src="'.base_url().'assets/img/fw_checklist/22_inverter_3.png" ></img>'."\n <br />";
echo ' <img  style="height: 50rem;" src="'.base_url().'assets/img/fw_checklist/22_inverter_4.png" ></img>'."\n <br />";
echo ' <img  style="height: 50rem;" src="'.base_url().'assets/img/fw_checklist/22_inverter_5.png" ></img>'."\n <br />";
echo ' <img  style="height: 50rem;" src="'.base_url().'assets/img/fw_checklist/22_inverter_6.png" ></img>'."\n <br />";
echo ' <img  style="height: 50rem;" src="'.base_url().'assets/img/fw_checklist/22_inverter_7.png" ></img>'."\n <br />";
echo ' <img  style="height: 50rem;" src="'.base_url().'assets/img/fw_checklist/22_inverter_8.png" ></img>'."\n <br />";
echo ' <img  style="height: 50rem;" src="'.base_url().'assets/img/fw_checklist/22_inverter_9.png" ></img>'."\n <br />";
echo ' <img  style="height: 50rem;" src="'.base_url().'assets/img/fw_checklist/22_inverter_10.png" ></img>'."\n <br />";
echo ' <img  style="height: 50rem;" src="'.base_url().'assets/img/fw_checklist/22_inverter_11.png" ></img>'."\n <br />";
?> 															
															</td>
														</tr>
													</table>
												</div>
											</td>
										</tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">23</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>finger delta = 900~1000</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">24</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>SNR, noise , CC</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/24_snr_noise_2.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/24_snr_noise_1.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                            <td>
                                                                調整完F0_DSP_RAWDATA_DOWNSCALE後，在現有設定下量測SNR，取得左圖資訊 <br /><br />

                                                                高斯分布理論<br /><br />

                                                                該圖形的中心為一平均數，曲線寬度是不同的標準差。<br />
                                                                圖形中有三個數字，<strong style="color: green;">68%、95%、99.7%</strong>，意指常態分配的隨機數量，<br />
                                                                落在平均數一個正負標準差內的機率為68%<br />
                                                                落在平均數二個正負標準差內的機率為95%<br />
                                                                落在平均數三個正負標準差內的機率為99.7<br />
                                                                落在平均數六個標準差的機率則是99.99<br /><br />

                                                                一個標準差 = Nosie  = 6.84<br /><br />

                                                                因此至少在做砍CC時，至少要砍三倍標準差以上，也就是6.84*3 大約等於21<br />
                                                                保險起見可以砍到四~五倍標準差，也就是大約等於28~35<br /><br />
<pre>
<code class="language-java">
.sleep_out_cc  = 0x1C, //RFEH_3F
.startup_cc    = 0x1C, //RFEH_42
</code>
</pre>


                                                                此目是將所有可能性包含，並將讓delta頁面看到的數值都接近為 0
                                                                
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">25</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>Threshold, Weight</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr style="text-align: center;">
                                                            <th colspan="2">Signal Thx 設定</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
<pre>
<code class="language-java">
.mut_thpx_nor  = 0xFF, //RFEH_09  => Need to sync with mut_thpx_lgd <br />
.mut_thpx_lgd  = 0xFF, //RFEH_0A  => Need to sync with mut_thpx_nor<br />
.mut_thpx_ac   = 0xFF, //RFEH_0B

.sig_thx_scale = 0x01, //RFEH_60
#define SIG_THX_SCALE_EN    READ_VAR_BIT(Fw_config.algorithm_en_set_automobile, 0) //(Rfeh[0xAD] & 0x01) >> 0
</code>
</pre>                                                          
                                                                <?php 
                                                                echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/25_thx_weighting_1.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                            <td>
                                                                在CG sample下，delta調整至900~1000及SNR = 40左右後<br /><br />

                                                                最理想情況下，Rawdata與Sensor被觸摸的面積成正比<br /><br />

                                                                Thx設定:<br />
                                                                在delta調整為1000時，若報點門檻為250<br />
                                                                則可簡單視為該senor block被按壓1/4的面積<br /><br />

                                                                此門檻可視實際情況去設定<br /><br />

                                                                <span style="color: red;">Note: 請注意 Signal_scale 和 SIG_THX_SCALE_EN 設定</span>

                                                            </td>
                                                        </tr>
                                                        <tr style="text-align: center;">
                                                            <th colspan="2">Weight 設定</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
<pre>
<code class="language-java">
.raw_downscale             = 0x0A, //RFEH_0F 
.weg_thpx_1st_noise_add    = 0x0A, //RFEH_10
.weg_thpx_1st_area1_add    = 0x00, //RFEH_11 
.weg_thpx_1st_area2_add    = 0x00, //RFEH_12 
.weg_rx_area_1             = 0x00, //RFEH_13 
.weg_rx_area_2             = 0x00, //RFEH_14 
.weg_thpx_3rd_ent_ac       = 0x00, //RFEH_15
.weg_thpx_1st_lgd          = 0x18, //RFEH_16
.weg_thpx_1st_nor          = 0x18, //RFEH_17
.weg_thpx_1st_ac           = 0x00, //RFEH_18
.normal_idle_leave_pos_thx = 0xC8, //RFEH_19
.wet_thpx_1st_ent_lpwug    = 0x00, //RFEH_1A
</code>
</pre>                                                          
                                                            
                                                                <?php 
                                                                echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/25_thx_weighting_2.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                            <td>
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
                                                            
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>   
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">26</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>Accuracy, Linearity by P2P</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <th colspan="2">
                                                            NEW_GRAVITY = 0x00
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <?php 
                                                                    echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/26_p2p_1.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                            <td>
                                                                Step 1: Make sure <strong style="background-color: yellow;">TEST_BORDER_TXRX_MAPPING</strong> is on. <br />
                                                                Step 2: TBD. <br />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">
                                                                NEW_GRAVITY = 0x01<br />
                                                                若有 Sensor pitch大小不一情況 <br />
                                                                請開啟NEW_GRAVITY來過關<br />
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <?php 
                                                                    echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/26_p2p_2.png" ></img>'."\n <br />";
                                                                    echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/26_p2p_3.png" ></img>'."\n <br />";
                                                                    
                                                                ?>  
                                                                
                                                            </td>
                                                            <td>
                                                                <?php 
                                        
                                                                    echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/26_p2p_4.png" ></img>'."\n <br />";
                                                                    echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/26_p2p_5.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                            
                                                        </tr>
                                                        
                                                    </table>
                                                    
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">27</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>Jitter (Fix, repeat)</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">28</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>Finger Separation</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">29</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>Large Object, Palm (Partial, Ratio)</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">30</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>Glove</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                            
    
<pre>
<code class="language-java">
.glove_thpx           = 0x14, //RFEH_B2
.glove_key_thx        = 0x64, //RFEH_B3
.glove_weg_thpx_ent   = 0x50, //RFEH_B4
.glove_cc             = 0x18, //RFEH_B5
.glove_palm_blk       = 0x26, //RFEH_B6
.glove_ent_lev_frm    = 0x23, //RFEH_B7
.glove_ent_sel        = 0x14, //RFEH_B8

.glove_ent_ulmt       = 0x64, //RFEH_B9
.glove_ent_dlmt       = 0x14, //RFEH_BA
.glove_ent_fng_lev_tm = 0x01, //RFEH_BB

.glove_ent_bd_rng     = 0x00, //RFEH_BC
.glove_ent_weg_thx    = 0x64, //RFEH_BD
.glove_ent_rng        = 0xBF, //RFEH_BE
.glove_lev_mod_frm    = 0x0A, //RFEH_BF     
</code>
</pre>                                          
                                                        
                                                                <?php 
                                                                    echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/30_glove.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                            <td>
                                                                針對glove因為報點門檻較低，所以會多卡一些條件避免誤進<br /> <br />  

                                                                調整重點為<br /> 
                                                                (1)<span style="color: red;">glove_cc 至少要為4倍標準差 (建議設定與sleep_out_cc一樣)</span><br />  <br />  

                                                                (2)確認此案子支援多少PMMA手套<br />    <br />  

                                                                (3)舉個例子<br />   
                                                                &nbsp;&nbsp;支援2mm PMMA ，手套得delta訊號量在150左右<br /> 
                                                                &nbsp;&nbsp;門檻設100 (此數值要大於6倍標準差)<br />  
                                                                &nbsp;&nbsp;基本上我會讓手套權重 >= 手套門檻 1.5 ~ 2倍  <br /> <br />  
                                                                     
                                                                &nbsp;&nbsp;Note: 請注意權重在算法裡面已經有除以2，所以這邊設置門檻可視為2倍<br />  <br />  

                                                                (4)支援2mm PMMA ，記得1mm PMMA也要測試滑一下<br />  <br />  

                                                                (5) glove border設定<br />    
                                                                &nbsp;&nbsp;若master版本在0x74以前的fw，請注意Hst_detector function
                                                                &nbsp;&nbsp;當CFB_GLOVE_ENT_BD_RNG = 0x00，但仍會保護X或Y最小值的border，請照下方設定更正<br />                                                              
<pre>
<code class="language-java">
if( (FRM_MAX_BLOCK_POS.tx < (0 + LSN(CFB_GLOVE_ENT_BD_RNG)))
  ||(FRM_MAX_BLOCK_POS.tx >= (Tp_info.tx_num + 1 - LSN(CFB_GLOVE_ENT_BD_RNG)))
  || (FRM_MAX_BLOCK_POS.rx < (0 + LSN(CFB_GLOVE_ENT_BD_RNG)))
  ||(FRM_MAX_BLOCK_POS.rx >= (Tp_info.rx_num + 1 - LSN(CFB_GLOVE_ENT_BD_RNG)))
)
{
    // at border: no glove
    stl_iir_max = 0;
}
</code>
</pre>                                                              
                                                                <strong style="color: red;">Note: 請注意 Signal_scale 和 SIG_THX_SCALE_EN 設定</strong>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">31</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>Baseline & Recal</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
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
                                                        .bs_delay_frame_recal&nbsp;&nbsp;= 0x02, //RFEH_6B<br />
                                                        .bs_delay_frame_lpwug&nbsp;&nbsp;= 0x0A, //RFEH_6D<br />
                                                        .bs_delay_frame&nbsp;&nbsp;= 0x05, //RFEH_6F<br /><br />

                                                        .bnk_seh_lat &nbsp;&nbsp;= 0x05, //RFEH_6E   <br /><br />

                                                        .recal_tm&nbsp;&nbsp;= 0x01, //RFEH_36<br />
                                                        .bas_udt_tm &nbsp;&nbsp;= 0x02, //RFEH_37<br /><br />

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
                                            echo '<td style="background-color: '.$bg_color[$i].'">32</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>First Touch Latency</td>
                                            <td>2022.Apr.07</td>
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
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">33</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>掌壓開機</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">34</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td>RA Test</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <th colspan="2">Test Environment</th>
                                                            <th colspan="3">Notes</th>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="2">
                                                                <?php 
                                                                    echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/34_ra_1.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                            <td colspan="3">
                                                                使用的圖:<br />
                                                                白畫面<br /><br />

                                                                事前準備:<br />
                                                                在啟動前先放好銅棒並連接銅線到外部<br /><br />

                                                                實驗手法:<br />
                                                                分兩個降溫跟升溫<br />
                                                                (1)降溫<br />
                                                                過程觀察是否有報鬼點，並分別在25&#8451;、5&#8451;、-15和-40&#8451;時，手動讓銅線接地，測試FW是否正常報點<br /><br />

                                                                (2)升溫<br />
                                                                過程觀察是否有報鬼點，並分別在25&#8451;、45&#8451;、65&#8451;和85&#8451;時，手動讓銅線接地，測試FW是否正常報點<br />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Temperature</th>
                                                            <th>Corrdinate</th>
                                                            <th>Posistion 1</th>
                                                            <th>Posistion 2</th>
                                                            <th>Notes</th>
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="2">25</td>
                                                            <td>x</td>
                                                            <td>1653</td>
                                                            <td>746</td>
                                                            <td rowspan="8">
                                                                <strong>*Function Check</strong> <br />
                                                                two finger copper touch on panel<br /><br />
                                                                
                                                                <strong>*Temperature step test</strong><br />
                                                                  1. Test start temperature is 25&#8451; : function check<br />
                                                                  2. Temp range (25&#8451; ~ 65&#8451;) : Increase the temp by 20&#8451; and hold for 30 minute. And function check.<br />
                                                                  3. Temp (85&#8451;) :  hold for 30 minute. And function check.<br /><br />
                                                                
                                                                <strong>*Test_FW</strong><br />
                                                                HX83192B_LGD1584_RIVIAN_D03_C04_210324<br />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <!--<td>25</td>-->
                                                            <td>y</td>
                                                            <td>535</td>
                                                            <td>563</td>
                                                            <!--<td></td>-->
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="2">45</td>
                                                            <td>x</td>
                                                            <td>1654</td>
                                                            <td>748</td>
                                                            <!--<td></td>-->
                                                        </tr>
                                                        <tr>
                                                            <!--<td>45</td>-->
                                                            <td>y</td>
                                                            <td>532</td>
                                                            <td>563</td>
                                                            <!--<td></td>-->
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="2">65</td>
                                                            <td>x</td>
                                                            <td>1656</td>
                                                            <td>749</td>
                                                            <!--<td></td>-->
                                                        </tr>
                                                        <tr>
                                                            <!--<td>65</td>-->
                                                            <td>y</td>
                                                            <td>530</td>
                                                            <td>563</td>
                                                            <!--<td></td>-->
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="2">85</td>
                                                            <td>x</td>
                                                            <td>1657</td>
                                                            <td>751</td>
                                                            <!--<td></td>-->
                                                        </tr>
                                                        <tr>
                                                            <!--<td>85</td>-->
                                                            <td>y</td>
                                                            <td>529</td>
                                                            <td>563</td>
                                                            <!--<td></td>-->
                                                        </tr>
                                                    
                                                    </table>
                                                    
                                                    <!-- RA2 -->
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <th>Test item</th>
                                                            <th>Tool</th>
                                                            <th>Results</th>
                                                            <th>Notes</th>
                                                        </tr>
                                                        <tr>
                                                            <td>Ghost Point</td>
                                                            <td>
                                                                <?php 
                                                                    echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/34_ra_2.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                            <td>No Ghost Point</td>
                                                            <td>
                                                                使用的圖: <br />
                                                                白畫面<br /><br />

                                                                事前準備:<br />
                                                                不要只使用畫線頁面，要開啟 Scope<br /><br />

                                                                實驗手法:<br />
                                                                降溫及升溫6個循環<br /><br />

                                                                過程觀察是否有報鬼點<br />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="4">
                                                                <strong>*Temperature test</strong> <br />
                                                                1. Test start temperature is 25&#8451; <br />
                                                                2. Temp range (25&#8451; ~ -15&#8451;) : Decrease the temp by 20℃ and hold for 30 minute.<br />
                                                                3. Temp (-40&#8451;) :  hold for 30 minute.<br />
                                                                4. Temperature back to 25&#8451; <br />
                                                                5. Temp range (25&#8451; ~ 65&#8451;) : Increase the temp by 20℃ and hold for 30 minute.<br />
                                                                6. Temp (85&#8451;) :  hold for 30 minute.<br />
                                                                7. Temperature back to 25&#8451; <br />
                                                                Run 6 cycle<br /><br />
                                                                
                                                                <strong>*Test FW</strong><br />
                                                                HX83192B_LGD1584_RIVIAN_D03_C04_210324<br />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                    <!-- RA3 -->
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <th>Test item</th>
                                                            <th>Tool</th>
                                                            <th>Results</th>
                                                            <th>Notes</th>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Collect noise <br />
                                                                (Set max value on delta page)                               
                                                            </td>
                                                            <td>
                                                                <?php 
                                                                echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/34_ra_3.png" ></img>'."\n <br />";
                                                                ?>  
                                                            </td>
                                                            <td>XX~XX</td>
                                                            <td>
                                                                使用的圖: <br />
                                                                白畫面<br /><br />

                                                                事前準備:<br />
                                                                開啟delta頁面，Data keep選擇Max<br /><br />

                                                                實驗手法:<br />
                                                                降溫及升溫1個循環<br /><br />

                                                                收集過程中最大Noise，並log下來<br />
                                                                
                                                                noise 可以用FW紀錄<br />
                                                                若想記錄master的max noise，請在0x100074E4寫0x0000A55A，F0 max noise 在Debug_msg[21]<br />
                                                                若想記錄slave1的max noise，請在0x100074E4寫0x0001A55A，F0 max noise 在Debug_msg[21]<br />
                                                                若想記錄slave2的max noise，請在0x100074E4寫0x0002A55A，F0 max noise 在Debug_msg[21]<br />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="4">
                                                                <strong>*Temperature test</strong> <br />
                                                                1. Test start temperature is 25℃ <br />
                                                                2. Temp range (25℃ ~ -15℃) : Decrease the temp by 20℃ and hold for 30 minute.<br />
                                                                3. Temp (-40℃) :  hold for 30 minute.<br />
                                                                4. Temperature back to 25℃ <br />
                                                                5. Temp range (25℃ ~ 65℃) : Increase the temp by 20℃ and hold for 30 minute.<br />
                                                                6. Temp (85℃) :  hold for 30 minute.<br />
                                                                7. Temperature back to 25℃ <br />
                                                                Run 1 cycle<br /><br />
                                                                
                                                                <strong>*Test FW</strong><br />
                                                                HX83192B_LGD1584_RIVIAN_D03_C04_210324<br />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">35</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">36</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">37</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">38</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">39</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">40</td>';
                                            ?>
                                            <td>Touch Performance</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <!--40-------------------------------------->
                                        <?php $i++;?>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">41</td>';
                                            ?>
                                            <td>EMI</td>
                                            <td>AVG, PK, QPK</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">42</td>';
                                            ?>
                                            <td>EMI</td>
                                            <td>Sensing Waveform</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
													<table class="table fw_checklist_expand_table_bg">
														<tr>
															<td>
															<?php 
                                                            echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/42_sine_wave.png" ></img>'."\n <br />";
                                                            ?>
															</td>
															<td>
															最近陸續聽到幾個人在詢問改善EMI Performance，簡短寫個攻略與大家分享。<br />
                                                            前情提要192系列: 完美範例 (Sine波、前有兩階台階、後為Floating慢慢放電。)<br /><br />
                                                            
                                                            兩階台階(EQ_Head)設計，是因為192電路沒有設計可以緩慢上升與下降，所以透過FW搭配IC中斷來變相實現。<br /><br />
                                                            Step1: ISR5 (DD_PRE_TPEN)將VR123設成相同設定(低電壓)，<br />
                                                            Step2: ISR5 (DD_TPEN)Delay一小段時間<br />
                                                            Step3: ISR5 (DD_TPEN)再將VR123設成正常工作電壓。<br /><br />

                                                            192 series有提供兩種Touch波形(Sine波與梯形波)，底層電路分別使用Mixer與DAC產生波形。<br />
                                                            <span style="color: green;">
                                                            Sine波: 在Code裡，設定好Pre_charge與RST0，Code自動轉換好台階。<br />
                                                            Trap.波: 在Code裡，因IC設計限制，難以實現自動計算<br />
                                                            </span>
                                                            <span style="color: red; background-color: yellow;">
                                                            請大家如果發現台階有突波異常，請手動調整Delay時間。<br />
                                                            </span>
															</td>
														</tr>
													</table>
													<table class="table fw_checklist_expand_table_bg">
														<tr>
															<td>
															 <?php 
                                                            echo ' <img  style="height:18rem;" src="'.base_url().'assets/img/fw_checklist/42_sine_wave_eq.png" ></img>'."\n <br />";
                                                            ?>
															</td>
															<td>
<pre>
<code class="language-java">
#if (0x01 == EMI_RX_EQ_HEAD)
if ((READ_VAR_BIT(intc_status2, INTC_STAT_63_32_DD_PRE_TPEN)))
{
    if(( (Tpen_counter >=0 && Tpen_counter <= 3)||(Tpen_counter >=5 && Tpen_counter <= 8))&& (!MPFW_IS_MPFW_MODE))
    {
        #if ((TX_HOPPING_DEF == 0x01) && (0x00 == NOISE_DET_ONLY))
        REG_WRITE(TCON_SET_VR1, (ptr_adc_config_active_sram+Hopping_flag)->rx_eq_head_vr);
        REG_WRITE(TCON_SET_VR2, (ptr_adc_config_active_sram+Hopping_flag)->rx_eq_head_vr);
        REG_WRITE(TCON_SET_VR3, (ptr_adc_config_active_sram+Hopping_flag)->rx_eq_head_vr);

        #else
        REG_WRITE(TCON_SET_VR1, (ptr_adc_config_active_sram+0)->rx_eq_head_vr);
        REG_WRITE(TCON_SET_VR2, (ptr_adc_config_active_sram+0)->rx_eq_head_vr);
        REG_WRITE(TCON_SET_VR3, (ptr_adc_config_active_sram+0)->rx_eq_head_vr);
        #endif
    }
}
#endif
</code>
</pre>
<pre>
<code class="language-java">
if ((READ_VAR_BIT(intc_status2, INTC_STAT_63_32_DD_TPEN)))
{
    Fw_state = 0x5200;
    Tpen_counter++;
    
#if (0x01 == EMI_RX_EQ_HEAD)
    if  (((Tpen_counter >=1 && Tpen_counter <= 4)||(Tpen_counter >=6 && Tpen_counter <= 9)) && (!MPFW_IS_MPFW_MODE))
    {
        UINT16 delay;
#if ((TX_HOPPING_DEF == 0x01) && (0x00 == NOISE_DET_ONLY))
        delay = ((ptr_adc_config_active_sram+Hopping_flag)->tcon_sc_clk2_period) >> 3;
        Fun_himax_delay(delay); // Modify delay if needed.
        REG_WRITE(TCON_SET_VR3, (ptr_adc_config_active_sram+Hopping_flag)->tcon_set_vr3);
        REG_WRITE(TCON_SET_VR1, (ptr_adc_config_active_sram+Hopping_flag)->tcon_set_vr1);
        REG_WRITE(TCON_SET_VR2, (ptr_adc_config_active_sram+Hopping_flag)->tcon_set_vr2);
#else
        delay = ((ptr_adc_config_active_sram+0)->tcon_sc_clk2_period) >> 3;
        Fun_himax_delay(delay); // Modify delay if needed.
        REG_WRITE(TCON_SET_VR3, (ptr_adc_config_active_sram+0)->tcon_set_vr3);
        REG_WRITE(TCON_SET_VR1, (ptr_adc_config_active_sram+0)->tcon_set_vr1);
        REG_WRITE(TCON_SET_VR2, (ptr_adc_config_active_sram+0)->tcon_set_vr2);
#endif
    }
#endif
</code>
</pre>															
															</td>
														</tr>
														<tr>
															<td colspan="2">
															<?php 
                                                            echo ' <img  style="height:10rem;" src="'.base_url().'assets/img/fw_checklist/42_sine_wave_eq_3.png" ></img>'."\n <br />";
                                                            ?>
															</td>
														</tr>
														<tr>
															<td colspan="2">
															梯形波台階錯誤與正確示範: <br />
                                                            <?php 
                                                            echo ' <img  style="height: 20rem;" src="'.base_url().'assets/img/fw_checklist/42_sine_wave_4.png" ></img>'."\n <br />";
                                                            ?>
															</td>
														</tr>
														<tr>
															<td colspan="2">
另一方面，<br />
                                                            EMI實驗常常會有希望能夠關閉Touch功能，觀察Display的EMI表現。如以下Case 1~3.<br />
                                                            如果覺得TP RST踩LOW太暴力，關掉太多東西，可以考慮Case2, 3。<br /><br />
Case 1: TP all off: external TP reset low<br />
Case 2: TP MCU on  + ADC off : set as below<br />
<pre>
<code class="language-java">
#define EMI_TBS_LFD_SWITCH       (0x01)
#define MPFW_LFD_OFF_TEST_EN       READ_VAR_BIT(Fw_config.mpfw_function_en, 5)// Set as 1
#define MPFW_TBS_OFF_TEST_EN       READ_VAR_BIT(Fw_config.mpfw_function_en, 6)// Set as 1
</code>
</pre>
Case 3: TP MCU on  + ADC on but no touch waveform : set as below<br />
<pre>
<code class="language-java">
#define EMI_TBS_LFD_SWITCH       (0x01)
#define MPFW_LFD_OFF_TEST_EN       READ_VAR_BIT(Fw_config.mpfw_function_en, 5)// Set as 1
#define MPFW_TBS_OFF_TEST_EN       READ_VAR_BIT(Fw_config.mpfw_function_en, 6)// Set as 0
</code>
</pre>
Note: <br />
1. LFD means Load free driving which is used for decreasing RC loading on TDDI.<br />
2. TBS means AFE/ADC power switch<br /><br />
                                                            
                                                            綜合以上，<br />
                                                            a) 若要改sin-wave請確認下列<br />
                                                            &nbsp;&nbsp;<span style="background-color: #FFC300;">LONGH_DAC_SET_M = 0x0x00040002</span><br /><br />
                                                            
                                                            &nbsp;&nbsp;若要從270度開始(實際量測的OSR會比設定少一個，這是正常的)，請打開<span style="background-color: #FFC300;">#define EMI_RX_SINE_PHASE_270 </span><br />
                            
                                                            &nbsp;&nbsp;若要開頭做階梯，再多打開<span style="background-color: #FFC300;">#define EMI_RX_EQ_HEAD </span><br />               

                                                            b) 調整SCLK2頻率  Based on SCLK1 = 15MHz<br />
                                                            &nbsp;&nbsp;EX:<br />
                                                            &nbsp;&nbsp;TIME_SCLK2_LONGH = 330  (46kHz) &rarr; 15MHz/330 = 45.45kHz<br />
                                                            &nbsp;&nbsp;TIME_SCLK2_LONGH = 500  (30kHz) &rarr; 15MHz/500 = 30kHz<br /><br />

                                                            &nbsp;&nbsp;Note: 請注意OSR個數，建議要再重跑精算表<br /><br />

                                                            以上都確認過後<br />
                                                            請記得重新量SNR，盡量維持與原本差不多水準                 													
															</td>
														</tr>
													</table>
													<table class="table fw_checklist_expand_table_bg">
														<tr>
															<td>
															<?php 
                                                            echo ' <img  style="height:25rem;" src="'.base_url().'assets/img/fw_checklist/41_emi_4.png" ></img>'."\n <br />";
                                                            ?>
															</td>
															<td>
針對更進階的EMI，可以調整 SCLK1的頻率<br />
                                                            Note: 請注意SCLK2也會跟著變，若要維持一樣SCLK2，也要調整TIME_SCLK2_LONGH <br /><br />

                                                            (1)SCLK1 = 15Mhz 設定 (預設)<br />
                                                            在Dd_initial_before_pon中會下<br />
<pre>
<code class="language-cs">
DD_FMT_TRANS_TO_INI(0xCB, 0x02, 0x0A, 0x18),
DD_FMT_TRANS_TO_INI(0xCB, 0x02, 0x0F, 0x1B),
DD_FMT_TRANS_TO_INI(0xCB, 0x02, 0x10, 0x91),
</code>
</pre>



                                                            (2) SCLK1 = 22.5Mhz 設定 <br />
                                                            在Dd_initial_before_pon中會下<br />
<pre>
<code class="language-cs">
DD_FMT_TRANS_TO_INI(0xCB, 0x02, 0x0A, 0x18),
DD_FMT_TRANS_TO_INI(0xCB, 0x02, 0x0F, 0x15),
DD_FMT_TRANS_TO_INI(0xCB, 0x02, 0x10, 0x91),
</code>
</pre>															
															</td>
														</tr>
													</table>
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <!--43-------------------------------------->
                                        <?php $i++;?>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">43</td>';
                                            ?>
                                            <td>Stress Test</td>
                                            <td>EMS</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">44</td>';
                                            ?>
                                            <td>Stress Test</td>
                                            <td>BCI</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">45</td>';
                                            ?>
                                            <td>Stress Test</td>
                                            <td>ESD</td>
                                            <td>2022.May.18</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <th>#</th>
                                                            <th>ESD Pattern</th>
                                                            <th>Description</th>
                                                        </tr>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>
                                                            <?php 
                                                            echo ' <img style="height: 15rem;" src="'.base_url().'assets/img/fw_checklist/45_esd_1.png" ></img>'."\n";
                                                            ?>
                                                            </td>
                                                            <td>
                                                                On <strong>8091 </strong>FW<br />
                                                                Make sure #define ESD_DETECTION &nbsp;&nbsp;(0x01) <br />
                                                                <span style="background-color: #d9ff66">Max_sensed_block</span> can be set by 2-byte on Rfeh_9C (low) and Rfeh_9D (high)<br />
                                                                When <span style="background-color: #d9ff66">Max_sensed_block</span> is 0, this function is off.<br /><br />
                                                                When sensed blocks are more than <span style="background-color: #d9ff66">Max_sensed_block</span>, trigger level1 ghost point protection.<br />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>
                                                            <?php 
                                                            echo ' <img style="height: 20rem;" src="'.base_url().'assets/img/fw_checklist/45_esd_2.png" ></img>'."\n";
                                                            ?>
                                                            </td>
                                                            <td>
                                                                On <strong>8091 </strong>FW<br />
                                                                Make sure #define ESD_DETECTION &nbsp;&nbsp;(0x01) <br />
                                                                This is for <strong>vertical</strong> Mapping. <br />
                                                                2-byte <span style="background-color: #d9ff66">column_mean_thx</span> can be set by Rfeh_9E(low) and Rfeh_9F(high).<br />
                                                                1-byte <span style="background-color: #d9ff66">column_block_thx</span> can be set by Rfeh_A0.<br />
                                                                When <span style="background-color: #d9ff66">column_block_thx</span> is 0, this function is off.<br /><br />
                                                                (1) When the mean of the yellow column is more than <span style="background-color: #d9ff66">column_mean_thx</span>.<br />
                                                                (2) 紀錄在yellow column，delta 值超過<span style="background-color: #d9ff66">column_mean_thx</span> 的個數，當此個數超過<span style="background-color: #d9ff66">column_block_thx</span>個時<br />
                                                                當(1)跟(2)同時成立時，trigger level 1 ghost point protection.
                                                                <br /><br />
                                                                Example:<br />
                                                                <?php 
                                                                echo ' <img style="height: 20rem;" src="'.base_url().'assets/img/fw_checklist/45_esd_3.png" ></img>'."\n";
                                                                ?>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>
                                                            <?php 
                                                            echo ' <img style="height: 20rem;" src="'.base_url().'assets/img/fw_checklist/45_esd_4.png" ></img>'."\n";
                                                            ?>
                                                            </td>
                                                            <td>
                                                                On <strong>8092 </strong>FW<br />
                                                                Make sure #define ESD_DETECTION &nbsp;&nbsp;(0x01) <br />
                                                                2-byte <span style="background-color: #d9ff66">esd_max_delta</span> can be set by Rfeh_A1(low) and Rfeh_A2(high)<br />
                                                                When <span style="background-color: #d9ff66">esd_max_delta</span> is 0, this function is off.<br /><br />
                                                                When max delta is larger than <span style="background-color: #d9ff66">esd_max_delta</span>, trigger level 1 ghost point protection.<br /><br />
                                                                
                                                                <strong style="color: red;">There is update on 8099 FW. <br /></strong>
                                                                (1) When max delta is larger than <span style="background-color: #d9ff66">esd_max_delta</span><br />
                                                                (2) If the max delta is more than normal signal threshold<br />
                                                                當(1)跟(2)同時成立時，trigger level 1 ghost point protection.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>4</td>
                                                            <td>
                                                            <?php 
                                                            echo ' <img style="" src="'.base_url().'assets/img/fw_checklist/45_esd_6.png" ></img>'."\n";
                                                            ?>
                                                            </td>
                                                            <td>
                                                                On <strong>8096 </strong>FW<br />
                                                                Make sure #define ESD_DETECTION &nbsp;&nbsp;(0x01) <br />
                                                                1-byte <span style="background-color: #d9ff66">esd_debounce_block</span> can be set by Rfeh_AB<br />
                                                                1-byte <span style="background-color: #d9ff66">one_block_wet_th</span> can be set by Rfeh_16B<br />
                                                                When sensed blocks is more than <span style="background-color: #d9ff66">esd_debounce_block</span>, weighting threshold changes to Rfeh_16B*Rfeh_0F.<br /><br />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>5</td>
                                                            <td>
                                                            <?php 
                                                            echo ' <img style="" src="'.base_url().'assets/img/fw_checklist/45_esd_5.png" ></img>'."\n";
                                                            ?>
                                                            </td>
                                                            <td>
                                                                On <strong>8096 </strong>FW<br />
                                                                Make sure #define ESD_DETECTION &nbsp;&nbsp;(0x01) <br />
                                                                1-byte <span style="background-color: #d9ff66">esd_hor_a_mux_col_block_count</span> can be set by Rfeh_A5<br />
                                                                2-byte <span style="background-color: #d9ff66">esd_hor_a_mux_col_block_thx</span> can be set by Rfeh_A3(low) and Rfeh_A4(high)<br />
                                                                This is for <strong>Horizonal</strong> Mapping. <br />
                                                                When <span style="background-color: #d9ff66">esd_hor_a_mux_col_block_count</span> is 0, this function is off.<br /><br />
                                                                當某一mux的column值超過<span style="background-color: #d9ff66">esd_hor_a_mux_col_block_thx</span>時，count++，當count大於<span style="background-color: #d9ff66">esd_hor_a_mux_col_block_count</span>時，<br />
                                                                trigger level 1 ghost point protection.<br />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">46</td>';
                                            ?>
                                            <td>Stress Test</td>
                                            <td>Negative Value</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                                目前Common FW中針對負值處理有 2 種情況 <br /><br />

                                                                情況1:<br />
                                                                掃描所有 block 的 delta，計算其 delta 低於門檻的有幾個<br />

                                                                這裡會使用到兩個參數<br />
<pre>
<code class="language-java">
.recal_thpx    = 0x50, //RFEH_0C
.mut_null_blk  = 0x46, //RFEH_75
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
                                                                .quit_idle_base_diff    [RFEH_52]<br /><br />

                                                                <span style="color: red;">(1) quit_idle_base_diff &lt;  ((mut_thpx_lgd * 0.9 ~ 1.0) / 10)</span><br />

                                                                &nbsp;&nbsp;取normal報點門檻 0.9 ~ 1倍，後面除以10是 quit_idle_base_diff 會放大10倍<br />                                   
                                                            </td>
                                                            <td>
<pre>
<code class="language-java">
#define GHOST_PROTECT_SKIP_BUILD_BL_EN   READ_VAR_BIT(Fw_config.algorithm_en_set_automobile3, 2) //(Rfeh[0xB0] & 0x04) >> 2
#define GHOST_PROTECT_SKIP_UPDATE_BL_EN  READ_VAR_BIT(Fw_config.algorithm_en_set_automobile3, 3) //(Rfeh[0xB0] & 0x08) >> 3
#define RECAL_BY_GHOST_PROTECT_EN        READ_VAR_BIT(Fw_config.algorithm_en_set_automobile3, 4) //(Rfeh[0xB0] & 0x10) >> 4
#define GHOST_PROTECT_SKIP_RECOUNT_EN    READ_VAR_BIT(Fw_config.algorithm_en_set_automobile3, 5) //(Rfeh[0xB0] & 0x20) >> 5
</code>
</pre>                  
                                                            
                                                                另外負值處理要走 Recal_en，不要走鬼點保護，因為掌壓開機會卡死 AoA<br />
                                                                所以要把 RECAL_BY_GHOST_PROTECT_EN = 0<br /><br />

                                                                目前8097 FW有新增Recal_en == 0 才能做Baseline update<br />
<pre>
<code class="language-java">
Bl_update_flag = ((Point_count == 0) && (!Palm_flag) && (!Group_palm_flag)
    && ((Bist_mode_flag == LVDS_NORMAL) || (Bist_mode_flag == LVDS_BIST_LEAVE2)) // is normal display
    && (Recal_en == 0)
);
</code>
</pre>                                                              


                                                                建議如果有要使用 Recal_en，可以把上面黃色部分加上去~<br /><br />
                                                                Note:  Recal_en = 1 且不能有任何報點下，要連續滿足recal_tm張 frame才會執行recalibration.<br />
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">47</td>';
                                            ?>
                                            <td>Stress Test</td>
                                            <td>Ghsot Point Protection</td>
                                            <td>2022.Apr.07</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
<pre>
<code class="language-java">
#define GHOST_POINT_PROTECTION        (0x01)
#if (0x01 == GHOST_POINT_PROTECTION)
#define LVDS_ON_OFF_PROTECTION        (0x00)
#define PROTECT_FRAME_BY_TP_INIT      (0x01)
//#define PROTECT_NEGATIVE_DIFF       (0x00)
#define GHOST_POINT_DEBUG_BY_FAIL_DET (0x01)
#if (0x01 == LONGV_MODE)
#define PROTECTION_LEVEL_1            0x0F
#define PROTECTION_LEVEL_2            0x32
#define PROTECTION_PERIOD_MS          0x19 // Timer 1
#else
#define PROTECTION_LEVEL_1            0x01
#define PROTECTION_LEVEL_2            0x64
#define PROTECTION_PERIOD_MS          0x03 // Timer 1
#endif
#endif
#define GHOST_PROTECTION_TSIX        (0x00)
</code>
</pre>
                                                            </td>
                                                            <td>
                                                                鬼點保護有2種等級，其保護張數可以分別設定<br /><br />

                                                                如果有開<span style="color: red;">PROTECT_FRAME_BY_TP_INIT</span>，保護張數才能從TP  initial code設定<br />
<pre>
<code class="language-java">
.ghost_frame_level1  = 0x14, //RFEH_96
.ghost_frame_level2  = 0x64, //RFEH_97
</code>
</pre>
                                                                目前大家的設定<br /><br />
                                                                <span style="color: red;">
                                                                    Level 1 張數 = 1~20 張   (如果可以，至少10張比較好，但這會影響到PON lantancy，要記得注意) <br />
                                                                    Level 2 張數 = 100 張<br />
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
<pre>
<code class="language-java">
#define GHOST_PROTECT_SKIP_BUILD_BL_EN  READ_VAR_BIT(Fw_config.algorithm_en_set_automobile3, 2) //(Rfeh[0xB0] & 0x04) >> 2
#define GHOST_PROTECT_SKIP_UPDATE_BL_EN READ_VAR_BIT(Fw_config.algorithm_en_set_automobile3, 3) //(Rfeh[0xB0] & 0x08) >> 3

#define GHOST_PROTECT_SKIP_RECOUNT_EN   READ_VAR_BIT(Fw_config.algorithm_en_set_automobile3, 5) //(Rfeh[0xB0] & 0x20) >> 5
</code>
</pre>                                                          
                                                                <?php 
                                                                //echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/47_ghost_2.png" ></img>'."\n <br />";

                                                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/47_ghost_3.png" ></img>'."\n <br />";
                                                                ?>                                      
                                                            </td>
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

                                                                <span style="color: red;">Note: 如果有開LVDS on/off之鬼點，在保護張數過程中就會重數囉!!<br /></span>
                                                            </td>
                                                        </tr>
                                                    </table>

                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr data-widget="expandable-table" aria-expanded="false">
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">48</td>';
                                            ?>
                                            <td>Stress Test</td>
                                            <td>Stop output_buf</td>
                                            <td>2022.May.18</td>
                                            <td></td>
                                        </tr>
                                        <tr class="expandable-body">
                                            <td colspan="5">
                                                <div class="fw_checklist_expand_bg">
                                                    <table class="table fw_checklist_expand_table_bg">
                                                        <tr>
                                                            <td>
                                                            <?php 
                                                            echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/48_stop_output_buf_1.png" ></img>'."\n <br />";
                                                            ?>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                            <?php 
                                                            echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/48_stop_output_buf_2.png" ></img>'."\n <br />";
                                                            ?>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>                                           
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">49</td>';
                                            ?>
                                            <td>Stress Test</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">50</td>';
                                            ?>
                                            <td>Stress Test</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">51</td>';
                                            ?>
                                            <td>Stress Test</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <?php 
                                            echo '<td style="background-color: '.$bg_color[$i].'">52</td>';
                                            ?>
                                            <td>Stress Test</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="custom-content-below-fisrt-fw" role="tabpanel" aria-labelledby="custom-content-below-fisrt-fw-tab">
                         <div class="row mt-2">
                         
                            <div class="col-md-7">
                                <pre>
                                    <code class="language-java">
#define AUTO_MUX                    0x29 
#define SUB_NUM                     1000 
#define TIME_SCLK2_LONGH            330  // T_sclk2 = T_sclk1 x TIME_SCLK2_LONG 
#define LONGH_OSR                   10 
#define LONGH_RST                   2 
#define LONGH_PRECHARGE_NUM         2 
#define LONGH_MODE2_TP_CYCLE        5 

#define LONGH_PTBA_M                0x98920A 
#define LONGH_ADCCYC_M              0x2F1C 
#define LONGH_DAC_SLOP              0x3 
#define LONGH_DAC_SET_M             2//0x00040002 

#define F0_DSP_RAWDATA_DOWNSCALE    14 
#define F0_DSP_IQ_DOWNSCALE         255

#define LONGH_DAC_VH                0x13
#define LONGH_DAC_VL                0x05 
#define LONGH_DAC_VGND              0x0C
                                    </code>
                                </pre>
                            </div>
                            
                            <div class="col-md-5">
                                <span style="color: green;">192C_Sample_tp_initial_code</span><br />
                                裡面已經設定好這些參數，預期在CG sample可以達到40dB以上(記得用大拇指或16phi去測試)<br /><br />

                                幾點事情要特別注意:<br />
                                <span style="color: red;">(1)PTBA &rarr; 不能低於4uA ( 0x98920A )<br /><br /></span>

                                (2)若遇到SNR不足時，可以調整Swing大小 (量測時使用15phi以上，確保至少有一個sensor block會被按滿)<br />
                                &nbsp;&nbsp;VH = VR2      &rarr;  不能超過(5.85V -1V)<br />
                                &nbsp;&nbsp;VL = VR3      &rarr;  建議最低為0x05    (0.9V)<br />
                                &nbsp;&nbsp;VGND = VR1 &rarr;  (VH+VL) /2  <br />
                                &nbsp;&nbsp;目前設定Swing 2.6V    <br /><br />

                                (3)SLOP與斜率有關，調整Swing時要注意波型是梯形波or三角波<br />

                                (3)OSR個數若還想增加<br />
                                    請確認精算表，至少要跑過-2%以上 <br />
                                (4)ADCCYC若為192C以前的，要設定成0x2F14 <br />
                                     ADCCYC若為192C，要設定成0x2F1C <br /><br />

                                (5)要記得量測 VMD 確認波形<br /><br />


                                以上都確認過後<br />
                                最後一步是調整F0_DSP_RAWDATA_DOWNSCALE，可以依據手摸上CG的訊號，delta調整~900或1000<br />
                                
                            </div>
                        </div>
                         <div class="row mt-2">
                            <div class="col-md-6">
                                <?php 
    
                                echo ' <img  style="width: 100%;" src="'.base_url().'assets/img/fw_checklist/first_tx_waveform.png" ></img>'."\n";
                                ?>  
                            </div>
                            <div class="col-md-6">
                                <?php 
                                echo ' <img  style="width: 40%;" src="'.base_url().'assets/img/fw_checklist/first_snr.png" ></img>'."\n";
                                
                                ?>  
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="tab-pane fade" id="custom-content-below-a-2-c" role="tabpanel" aria-labelledby="custom-content-below-a-2-c-tab">
                         <div class="row mt-2">
                            <div class="col-md-12">
                                <table class="table table-bordered" style="background-color:#e6f7ff; ">
                                    <tr>
                                        <th>Item</th>
                                        <th>Description</th>
                                        <th>Notes</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            Config_touch.h裡，更新以下資訊<br />
<pre>
<code class="language-cs">
#define IC_SIGN_2       "HX83192-C"
#define IC_CUT_VERSION  (0x04)
</code>
</pre>                                          
                                        </td>
                                                                                
                                        <td>
                                            i) IC_CUT_VERSION可以透過讀DD REG (C4h bank0 PA1)得知，假設讀出來為0x04，IC_CUT_VERSION就填0x04  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            請跟DD確認rom code版本，如果該版本沒有在.\com_include\dd_rom_code\ 資料夾底下的話，請跟DD RD 拿.rom 檔，<br />
                                            再用小星星網站上傳.rom檔後，轉成.h檔，並放在.\com_include\dd_rom_code\ 資料夾底下<br />
                                            <?php 
                                            echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/a_2_c_1.png" ></img>'."\n";
                                            ?>                                          
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            C_CFG_INITIAL.c裡，用IC_CUT_VERSION include不同的dd init 跟 dd rom code (新的dd init code要跟DD 拿)，<br />
                                            以以下例子來說，請新增黃色部分<br />
                                            <?php 
                                            echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/a_2_c_2.png" ></img>'."\n";
                                            ?>  
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            因為dd init code有更新，如果有開OSC_TRACKING_LINE_COUNTER的話，<br />
                                            請跟DD確認LVDS timing 跟 external line是否有變，有變的話，EBh bank 1的golden值要重新計算
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Release 出去的時候，檔名可以標記一下是192C，像是HX83192C_AUO_1025_Bitech_GWM_D03_C02_20210806.bin</td>
                                        <td></td>
                                    </tr>
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="custom-content-below-panel-rule" role="tabpanel" aria-labelledby="custom-content-below-panel-rule-tab">
                         <div class="row mt-2">
                            <div class="col-md-12">
                                <table class="table table-bordered" style="background-color:#f2ffcc; ">
                                    <tr>
                                        <th>Item</th>
                                        <th>Description</th>
                                        <th>Notes</th>
                                    </tr>
                                    <tr>
                                        <td>*1</td>
                                        <td>
                                            a) 在Config_touch.h調好以下部分，可以詢問PM正確資訊 <br/>
<pre>
<code class="language-cs">
#define IC_SIGN_2       "HX83192-C"
#define IC_CUT_VERSION  (0x04)
</code>
</pre>                                          
                                        </td>
                                        <td>
                                            i) 當有new panel並從master branch長出來的時候，請在Config_touch.h裡，換掉CID_MAJOR_VER為PANEL_VER，CID_MINOR_VER歸0x00<br/>
<pre>
<code class="language-cs">
#define CID_MAJOR_VER   PANEL_VER //Customer Project
#define CID_MINOR_VER   0x00 // All Control
</code>
</pre>                              
                                            ii) IC_CUT_VERSION可以透過讀DD REG (C4h bank0 PA1)得知，假設讀出來為0x02，IC_CUT_VERSION就填0x02

                                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>*2</td>
                                        <td>
                                            a) 在Config_touch.h裡，填好resolution跟channel # 和mapping會用到的參數<br/>
                                            b) ADC_OPTION 為 0 為vertical mapping；1為horizontal mapping；2為特殊mapping<br/>
                                            c) 如果是1 power mode，請把PANEL_POWER_MODE填1 (影響到before_pon workaround)<br/>
                                            d) 如果是LV，請把LONGV_MODE 設1<br/>
                                            e) Panel_ver請先到此份文件的Panel_Ver sheet看看目前排到多少，再往下用下一個，並輸入新panel，儲存後，上傳新的文件到issue system上。<br/>
                                               一種panel size只會有一種，所以可以共用。    <br/>
<pre>
<code class="language-java">
#define PANEL_VER             0x0C
#define CASCADE_IC_NUM        2 //Total 1/2/3 IC
#define IC_VERSION            2 // A1/B2
#define ADC_OPTION            2
#define XRES                  1280
#define YRES                  1920
#define ADC_NUM_CYC_1         104
#define ADC_NUM_CYC_2         104
#define ADC_NUM_CYC_3         104
#define ADC_NUM_CYC_4         104
#if (0x01 == TX_RX_REVERSE)
#define MAX_RX_NUM            52
#define MAX_TX_NUM            (16 * CASCADE_IC_NUM)
#else
#define MAX_RX_NUM            (16 * CASCADE_IC_NUM)
#define MAX_TX_NUM            52
#endif
#define A_CHIP_RX_NUM         16
#define ADC_USED_NUM          104
#if (1 == CASCADE_IC_NUM)
#define SHIFT_TO_MASTER       0
//#define SHIFT_TO_SLAVE2     0
#else
#define SHIFT_TO_MASTER       A_CHIP_RX_NUM
#define SHIFT_TO_SLAVE2       (A_CHIP_RX_NUM << 1)
#endif

#define GESTURE_IS_VERTICAL   1
#define PANEL_POWER_MODE      1
#define VGL_VGH_LFDEN         01 // C0 bank1 PA1 bit[1:0]
#define LONGV_MODE            (0x00)
</code>
</pre>                                                 
                                        </td>
                                        <td>
                                            i) 如果是1 power mode，請確認main.c的before pon 要檢查DDTOP_DSAMPLE != 0x03 <br />
<pre>
<code class="language-java">
#if (0x01 == DD_INIT_REQ_WORKAROUND)
#if (0x01 == PANEL_POWER_MODE)
    if(DDTOP_DSAMPLE != 0x03) // only for 1-power mode
#else
    if (Dd_initial_code_lock != 0x00001234)
#endif
    {
        Fun_himax_before_PON_workaround();
    }
#endif  
    Fun_himax_lfd_setting(HIMAX_ENABLE);
</code>
</pre>                  
                                            ii) 請確認MPFW_SORTING.h裡，LH的MPFW_SORTING_FINISH_NUM是30，LV是60。<br />
                                                若是有193，MPFW_SORTING_TOGETHER_NUM 為3 (192為2)<br />
<pre>
<code class="language-c">
#if (0x00 == LONGV_MODE)
#ifdef PA5486_DEV
#define MPFW_SORTING_TOGETHER_NUM               3
#else
#define MPFW_SORTING_TOGETHER_NUM               2
#endif
#define MPFW_SORTING_DIV_NUM                    60
#define MPFW_SORTING_FINISH_NUM                 30
#else
#ifdef PA5486_DEV
#define MPFW_SORTING_TOGETHER_NUM               3
#else
#define MPFW_SORTING_TOGETHER_NUM               2
#endif
#define MPFW_SORTING_DIV_NUM                    60
#define MPFW_SORTING_FINISH_NUM                 60
#endif

</code>
</pre>
                    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>*3</td>
                                        <td>
                                            a) 在C_CFG_INITIAL.c填好dd/tp init code，DD workaround也要記得填<br />
                                            b) Rom code要問dd 要用哪一版 (可以用小星星網站把rom 轉成.h檔)      <br />
<pre>
<code class="language-java">
#if (0x01 == TM_146_2_LTPS_LH)
#if (0x02 == IC_CUT_VERSION)
#include "PA5478up2_B_v11_8_2_20200804.h"
#include "TM_146_2_LTPS_LH_dd_initial_code_20200511_cut2.h"
#else
#endif
#include "TM_146_2_LTPS_LH_tp_initial_code_20200409.h"
#endif

</code>
</pre>
                                            
                                        </td>
                                        <td>
                                            i) 請確認dd init code要有頭尾<br />
<pre>
<code class="language-java">
UINT8 Dd_initial[DD_INITIAL_LEN] =
{
    0x00, 0x04, 0x00, 0x00,
    
    // "length_parameter = 0" denotes "End".
    0x00,
};
</code>
</pre>
                                            ii) LH 多顆環境下，需在Config_touch.h裡打開Video_gen，並且在before pon workaround加入<br />
<pre>
<code class="language-c">
#if (0x01 == VIDEO_GEN)
DD_FMT_TRANS_TO_INI(0xB2, 0x00, 0x1A, 0x92), // video gen off   

DD_FMT_TRANS_TO_INI(0xC7, 0x00, 0x01, 0x32), // video gen fixed 2 lines
#endif
</code>
</pre>

                                            iii) tp init code裡面的Cfg_mapping_table_flash要記得把mapping table填進去<br />
                                            iv) 因為第一版還沒打機台，需要把ptp關掉，請把tp init code的Cod_amount_x 跟Cod_amount_y設0<br />                   
<pre>
<code class="language-c">
UINT16 Cod_amount_x   __attribute__((section(".tp_p2p_table"), aligned(2)))  = {0};
UINT16 Cod_amount_y   __attribute__((section(".tp_p2p_table"), aligned(2)))  = {0};
</code>
</pre>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>*4</td>
                                        <td>
                                         在C_CFG_INITIAL.c填好以下<br /> 
<pre>
<code class="language-java">
UINT8 Cfg_customer[12]      __attribute__((section(".tp_hw_config_0"), aligned(1))) = {""};  //Tier1_Car Maker
UINT8 Cfg_project[12]       __attribute__((section(".tp_hw_config_0"), aligned(1))) = {""};  //Panel Maker_Size
UINT8 Cfg_fw_major[12]      __attribute__((section(".tp_hw_config_0"), aligned(1))) = {""};  //Remark1
UINT8 Cfg_fw_minor[12]      __attribute__((section(".tp_hw_config_0"), aligned(1))) = {""};  //Remark2
UINT8 Cfg_date[12]          __attribute__((section(".tp_hw_config_0"), aligned(1))) = {""};  //Date

UINT8 Cfg_himax_ticket[12]  __attribute__((section(".tp_hw_config_0"), aligned(1))) = {""};  //Himax Ticket
</code>
</pre>                                      
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>*5</td>
                                        <td>
                                            a) 在LFD_setting function裡面，問DD VGH/VGL是否需要載MD，<br />    
                                                並設定在Config_touch.h的VGL_VGH_LFDEN<br />                                              
                                               以以下例子來說，HAN_123跟BOE_128的VGH和VGL都有載MD (C0h bank1 PA1 bit0/1)<br />            
<pre>
<code class="language-java">
#define VGL_VGH_LFDEN    01 // C0 bank1 PA1 bit[1:0]    --> AUO 151
#define VGL_VGH_LFDEN    11 // C0 bank1 PA1 bit[1:0]    --> HAN 123
</code>
</pre>                                             
                                            <?php 
                                            echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/panel_rule_1.png" ></img>'."\n";
                                            ?>  
                                        </td>
                                        <td>
                                            i) 8096 (common FW: 0x72)之後的版本，有多一個VGL_VGH_LFDEN define，請設定define<br />
                                              - VGL_VGH_LFDEN refers to C0 bank1 PA1 bit[1:0]<br />
                                              - When VGL_VGH_LFDEN is 11 --> VGL_LFDEN is 1, and VGH_LFDEN is 1.<br />
                                              - When VGL_VGH_LFDEN is 00 --> VGL_LFDEN is 0, and VGH_LFDEN is 0.<br />
                                              - When VGL_VGH_LFDEN is 01 --> VGL_LFDEN is 0, and VGH_LFDEN is 1. (Default)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>*6</td>
                                        <td>
                                            a) 請跟DD確認vsync頻率，若為60Hz，<br />
                                               Case1: 若此案子有FAE，<br />
                                                      請先在Config_touch.h裡開啟OSC_TRACKING_BY_TP_INIT，並把600填到tp init code的Rfeh_92(low)跟Rfeh_93(High)<br />
                                               Case2: 若此案子無FAE，<br />
                                                      請在main.c的Fun_himax_osc_tracking_enable跟Fun_himax_dd_osc_tracking_enable的最後一個參數填上600<br />
<pre>
<code class="language-java">
DEFS_STATUS_WHILE(Fun_himax_osc_tracking_enable(OSC_TRACK_EN, 500, 10, 10, 10, 20, 20, 40, 40, 600)); 
DEFS_STATUS_WHILE(Fun_himax_dd_osc_tracking_enable(DD_OSC_TRACK_EN, 900, 10, 10, 15, 20, 20, 40, 40, 600)); 
</code>
</pre>                                            
                                        </td>
                                        <td>
                                            i) 在LH下，當vsync 頻率非60 Hz時，請注意TPEN跟TPEN之間的距離時間要小於3ms，並且vsync到1ST TPEN的距離時間也要小於3ms。<br />
                                               在8093版本，3ms的設定可以調整PROTECTION_PERIOD_MS 或是 打開PROTECT_FRAME_BY_TP_INIT並設定Rfeh_91<br /><br />

                                            ii) 在LV下，當vsync 頻率非60 Hz時，vsync到1ST TPEN的距離時間要小於25ms。<br />
                                                在8093版本，25ms的設定可以調整PROTECTION_PERIOD_MS 或是 打開PROTECT_FRAME_BY_TP_INIT並設定Rfeh_91<br /><br />
                                            
                                            iii) 在8099版以後，Fun_himax_osc_tracking_enable跟Fun_himax_dd_osc_tracking_enable已經改寫function了，<br />
                                                 請進function 內調整頻率
                                        
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>*7</td>
                                        <td>
                                        a) 請跟DD確認Osc tracking type，DD有一個表格有在描述這件事(DD checklist裡)，<br />
                                           請根據type設定Config_touch.h。<br />
                                            <table class="table table-bordered">
                                                <tr>
                                                    <th>Type</th>
                                                    <th>OSC_TRACKING_BURST_MODE</th>
                                                    <th>OSC_TRACKING_LINE_COUNTER</th>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>1</td>
                                                    <td>0</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>1</td>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>0</td>
                                                    <td>1</td>
                                                </tr>
                                            </table>

                                        </td>
                                        <td>
                                            i) 當osc tracking type為3 或 4 時，請做以下步驟<br />
                                                   Step 1: 請跟DD要external line，也可以貼dd init code到小星星網站計算<br />
                                                   Step 2: 請計算(external_line / 11.11)*8000<br />
                                                   Step 3: 把剛剛計算的結果放到dd init code的EBh bank1 PA1(High)和PA2(Low)<br /><br />

                                                   Example: AUO 151的(external_line / 11.11)*8000 = 6632 (Demical) --> 轉hex為0x19E8<br />
                                                            將結果填入dd init code如下:
<pre>
<code class="language-c">
/* Driver_REBH_BK1 */
0x02, 0xEB,
0x19, 0xE8,
</code>
</pre>          
                                            ii) 8099之後才有type 4
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>*8</td>
                                        <td>
                                            a) 請跟DD確認LVDS timing，需要知道VSA(H)，VBP(H)，跟VFP(H)，並且跑過精算表 (可以用小星星網站跑一次精算表，目前是for LH)<br />
                                            搭配tp 的osr跟scclk2設定後，希望在-2.0% 以內可以Pass
                                            <?php 
                                            echo ' <img  style="" src="'.base_url().'assets/img/fw_checklist/panel_rule_2.png" ></img>'."\n";
                                            ?>  
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>a) 如果DD要用1129 command開機的話，可以打開
<pre>
<code class="language-java">
#define USE_1129_COMMAND  (0x01)
</code>
</pre>                                      
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>
                                            a) 請確認Config_touch.h的GHOST_POINT_PROTECTION有開啟，並確認protection 張數<br />
                                               Case1: 若此案子有FAE，<br />
                                                      請先在Config_touch.h裡開啟PROTECT_FRAME_BY_TP_INIT，並先預設Rfeh_96(level 1)為20，Rfeh_97(level 2)為0x64<br />
                                                      若為vsync 60Hz的狀況下，把Rfeh_91設成0x03 for LH；0x19 for LV
<pre>
<code class="language-java">
.ghost_frame_level1  = 0x14, //RFEH_96
.ghost_frame_level2  = 0x64, //RFEH_97
</code>
</pre>      

                                               Case2: 若此案子無FAE，<br />
                                                      請在himax_clib.c裡確認Level 1為1，Level 2為0x64                                       
<pre>
<code class="language-java">
#define PROTECTION_LEVEL_1   0x01
#define PROTECTION_LEVEL_2   0x64
</code>
</pre>                
                                        
                                        </td>
                                        <td>i) LV的話，Level 2的張數請預設成0x32</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>
                                            a) 如果有需要開啟normal self test，除了用人工排(可以找小名幫忙)，也可以開啟Config_touch.h裡面的SELF_TEST_V2_MAPPING，<br />
                                               並且注意tp init code需有:<br />
                                               1) UINT16 Cfg_adc_en[(ADC_NUM_HALF*8)]  __attribute__((section(".tp_self_mapping")))<br />
                                               2) 在UINT32 Tp_adc_config_swport_tsram_master[ADC_CONFIG_AHB_TSRAM_WORD_NUM] 裡須有word 60~139的設定<br />
                                               以上兩個部分可以由小星星網站產生(正常mapping的情況下)，請參考http://10.240.233.75/HX83192-A/7408#53390<br /><br />

                                            b) 若此案子有FAE，請開啟SELF_TEST_SETTING_BY_TP_INIT，以讓FAE可以透過tp init code的Rfeh_140跟Rfeh_141調整self test相關設定<br />
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>
                                            a) 如果有需要開Hugo 的Sin-wave的話，由於master 0x8092這一板還沒有導入，可以先參考LGD_149_2_LTPS_LH_Toyota branch。<br />
                                               如果master 已經跟到0x8093，可以直接打開EMI_RX_SINE_PHASE_270跟EMI_RX_EQ_HEAD。<br />
                                               另外，請注意以下事項:<br />
                                               1) Tp init code裡，請確認LONGH_RST, LONGH_PRECHARGE_NUM, F1_LONGH_RST, F1_LONGH_PRECHARGE_NUM 皆為1<br />
                                               2) Tp init code裡，請確認LONGH_DAC_SET_M為0x00040002<br />
                                               3) 當有開AUTO_SELF_TEST_NORMAL時，請確認Fun_himax_auto_self_test_normal_enable_setting裡，TCON_EN_PERIOD須為1500-4<br />
<pre>
<code class="language-java">
#if (0x01 == EMI_RX_SINE_PHASE_270)
REG_WRITE(TCON_EN_PERIOD, 1500-4);
#else
REG_WRITE(TCON_EN_PERIOD, 1500);
#endif
REG_WRITE(TCON_PRE_CHARGE_NUM, 100);
REG_WRITE(TCON_S_RST_PRD, 100);
</code>
</pre>                                             
                                        </td>
                                        <td>
                                            i) 8096 (common FW: 0x72)之後的版本，adc config 裡面可以設定sin-wave的VR，如下<br />
                                            .rx_eq_head_vr                            = 3,<br />            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>a) 如果有FAE的案子的話，請把Config_touch.h的ESD_DETECTION打開，並且確認tp init code的Rfeh_9C到Rfeh_A5皆為0</td>
                                        <td>
                                            i) 如果FAE要調整ESD pattern (Rfeh_9C到Rfeh_A2)，請參考http://10.240.233.75/HX83192-A/7408#53974<br />
                                            ii) 8096 (common FW: 0x72)之後的版本，ESD pattern 新增至Rfeh_A5
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>
                                            a) 如果有FAE的案子的話，請把Config_touch.h的GHOST_PROTECTION_TSIX打開,<br />
                                            FAE可以透過寫0xA55A到0x1000745E，可以將ghost point protection發生時，把ghost point header透過封包的方式送出
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>
                                            a) 請確認Fail detect 功能，目前支援的case為:<br />
<pre>
<code class="language-plaintext">
   Case 01: DD/TP fail det pin ................................(Rfeh_9A設0xFF，Rfeh_9B設0xFF)
   Case 02: DD fail det + TP GPIO1 level ......................(Rfeh_9A設0x2F，Rfeh_9B設0xFF)
   Case 03: DD fail det + TP GPIO1 alive ......................(Rfeh_9A設0x2F，Rfeh_9B設0x0F)
   Case 04: DD fail det + TP GPIO2 level ......................(Rfeh_9A設0x4F，Rfeh_9B設0xFF)
   Case 05: DD fail det + TP GPIO2 alive ......................(Rfeh_9A設0x4F，Rfeh_9B設0x0F)
   Case 06: DD GPIO 1 alive (with fail det) + TP fail det .....(Rfeh_9A設0xF2，Rfeh_9B設0xF0)
   Case 07: DD GPIO 2 alive (with fail det) + TP fail det .....(Rfeh_9A設0xF4，Rfeh_9B設0xF0)
   Case 08: DD GPIO 1 alive (with fail det) + TP GPIO 2 level .(Rfeh_9A設0x42，Rfeh_9B設0xF0)
   Case 09: DD GPIO 1 alive (with fail det) + TP GPIO 2 alive .(Rfeh_9A設0x42，Rfeh_9B設0x00)
   Case 10: DD GPIO 2 alive (with fail det) + TP GPIO 1 level .(Rfeh_9A設0x24，Rfeh_9B設0xF0)
   Case 11: DD GPIO 2 alive (with fail det) + TP GPIO 1 alive .(Rfeh_9A設0x24，Rfeh_9B設0x00)
   Case 12: DD GPIO 1 alive (with fail det) + TP GPIO 1 alive .(Rfeh_9A設0x22，Rfeh_9B設0x00)
   Case 13: DD GPIO 2 alive (with fail det) + TP GPIO 2 alive .(Rfeh_9A設0x44，Rfeh_9B設0x00)
</code>
</pre>   
                                            b) TP_REG_CRC (0x800), TP_POWERON (0x1000), TP_GPIO3 (0x2000), TP_SLAVE1(0x4000), TP_SLAVE2 (0x8000) are DD errors. <br />                                  
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>16</td>
                                        <td>a) 公版預設PLL_BY_DD_INIT為關閉，如果DD有把PLL設定放在before pon workaround裡了，那要把PLL_BY_DD_INIT開啟，以免display異常</td>
                                        <td>
                                            PLL設定一定要設定到!<br />
<pre>
<code class="language-java">
Fun_himax_ahb_ddreg_byte_write(0xCB, 0x02, 0x0A, 0x18); // ref div
Fun_himax_ahb_ddreg_byte_write(0xCB, 0x02, 0x0F, 0x1B);
Fun_himax_ahb_ddreg_byte_write(0xCB, 0x02, 0x10, 0x91);     
</code>
</pre>                                          
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>17</td>
                                        <td>a) 當DSARM_2爆掉的時候，可以打開AUTOMOBILE_REMOVE_FIR</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>
                                            a) Common FW 0x8095預設RAWDATA_NORMALIZE define為開啟，請確認<br />
                                               1) 如果沒有要開這個通能，RAWDATA_NORMALIZE_EN (Rfeh_AD bit7)要是0<br />
                                               2) 如果要開這個功能，請先填好target值，步驟如下<br />
                                                  >> RAWDATA_NORMALIZE_EN 關閉，並且YIN OFF<br />
                                                  >> 算出整面rawdata的平均值<br />
                                                  >> 將平均值放在Rfeh_D4/D5 for F0；Rfeh_D6/D7 for F1<br />
                                                  >> 打開RAWDATA_NORMALIZE_EN，並YIN ON，檢查rawdata是否改變
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>19</td>
                                        <td>a) Common FW 0x8095預設RECAL_HOLD開啟，請確認Rfeh_5C/5D/5E/5F的設定</td>
                                        <td></td>
                                    </tr>
                                    
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
  

