<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pa5478_parse extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function __construct()
	{
		parent::__construct();
		
		$this->load->helper('url');	
		$this->load->library('pagination');
		$this->load->helper('download');
		$this->load->helper('file');
		$this->load->model('Pa5478_model'); //loads your model 
		
		$this->load->library('session');
		//$this->load->library('upload');
		//$this->output->cache(1);
		
	} 
	
	public function index() // Show all projects with latest FW
	{
		// Get Auth
		//$Auth = $this->check_auth();
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else if($_SESSION['id'] == 0){
			redirect('Automotive/FAE_Bin_Parser', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
			
			//===============================
			// Create detail table
			$table_format = $this->Create_parse_table();
			$json = json_decode($table_format["PTABLE"]);
			$this->Pa5478_model->Create_detail_tables($json);
			//===============================
			//===============================
			$config = array();
			$config['base_url'] = base_url().'Automotive/index';
			//$config['use_page_numbers'] = TRUE;
			$this->pagination->initialize($config);
			
			$data["links"] = $this->pagination->create_links();
			
			$data["username"] = $auth["username"];
			// Load projects from database======================
			$query_result = $this->Pa5478_model->Load_project_released();
			if($query_result == NULL){
				$data["query_result"] = "";
			}
			else{
				$data["query_result"] = $query_result;
				//=====================================
				$spyfw["query_released_fw"] = $query_result;
				$spyfw["query_released_fw_p"] = 1; // project list
				$data['html_select2_spy'] = $this->load->view('parse_upload/info_select2_spy', $spyfw, true);
				$data['html_select2_common'] = $this->load->view('parse_upload/info_select2_common_table', $table_format, true);
			}
			
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			$this->load->view('mainpage/project_view_body', $data);
			$this->load->view('mainpage/project_view_footer');
		}
	}
	
	public function project_show_item($C_id, $project_id) // Show projects detail information....
	{
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
		
			$this->load->helper('url');
			//$this->output->cache(1);
			$data = $this->Create_parse_table();
			
			// query for basic panel information=================================================
			$conditions = 'project_id , panel_name, panel_ver, cascade_ic_num, aa_size_horizontal, aa_size_vertical, ic_power_mode';
			$query_result = $this->Pa5478_model->Load_projects($conditions, $project_id, 1);
			$content["query_panel"] = $query_result;
			
			//query for panel: all releasaed_fw============================================
			$query_result = $this->Pa5478_model->Load_released_content($project_id);
			$content["query_released_fw"] = $query_result;
			$spyfw["query_released_fw"] =  $query_result;
			$spyfw["query_released_fw_p"] = 0;
			
			// query alg,regs, waveform, flash information=================================
			$query_result = $this->Pa5478_model->Load_released_content_flash_func($C_id);
			//$content['query_flash_func'] = $query_result;
			$data['val_flash_func'] = $query_result;
			
			$query_result = $this->Pa5478_model->Load_released_content_flash_header($C_id);
			//$content['query_flash_header'] = $query_result;
			$data['val_flash_header'] = $query_result;
			
			$query_result = $this->Pa5478_model->Load_released_content_alg($C_id);
			$content['query_alg'] = $query_result;
			$data['val_alg'] = $query_result;
			
			$query_result = $this->Pa5478_model->Load_released_content_auto_self($C_id);
			//$content['query_auto_self'] = $query_result;
			$data['val_auto_self'] = $query_result;
			
			$query_result = $this->Pa5478_model->Load_released_content_waveform_f0($C_id);
			//$content['query_waveform_f0'] = $query_result;
			$data['val_waveform_f0'] = $query_result;
			
			$query_result = $this->Pa5478_model->Load_released_content_waveform_f1($C_id);
			//$content['query_waveform_f1'] = $query_result;
			$data['val_waveform_f1'] = $query_result;
			
			$query_result = $this->Pa5478_model->Load_released_content_dd_header($C_id);
			//$content['query_dd_header'] = $query_result;
			$data['val_dd_header'] = $query_result;

			$query_result = $this->Pa5478_model->Load_released_content_p2p_table($C_id);
			//$content['query_p2p_table'] = $query_result;
			$data['val_p2p_table'] = $query_result;

			$query_result = $this->Pa5478_model->Load_released_content_tp_version_table($C_id);
			//$content['query_tp_version'] = $query_result;
			$data['val_tp_version'] = $query_result;	

			$query_result = $this->Pa5478_model->Load_released_content_others($C_id);
			//$content['query_others'] = $query_result;
			$data_others['val_others'] = $query_result;
			
			//=============================================================================
			// Create html format table
			$osc_data["show_f0_f1"] = 1;
			$osc_data["fill_out_osc_table"] = 1;
			$data['dd_osc_table'] = $this->load->view('parse_upload/info_table_dd_osc', $osc_data, true);
			
			// Read sample file..............................
			$data['val_sample_tp'] = read_file('./assets/alg_recommand/Automotive_sample.json');
			$data['val_parser_tp'] = read_file('./assets/alg_recommand/Automotive_alg_parser.json');
			$data['val_fae'] = 0;
			
			$content['html_content'] = $this->load->view('parse_upload/info_table_macro_bin', $data, true);
			$content['html_select2_spy'] = $this->load->view('parse_upload/info_select2_spy', $spyfw, true);
			$content['html_select2_common'] = $this->load->view('parse_upload/info_select2_common_table', $data, true);

			$content['html_external'] = $this->load->view('parse_upload/info_table_external_table', $data_others, true);
			
			// Load samples===============================================================
			$content["sample_files"] = get_filenames('./assets/export_sample');
			//=============================================================================
			
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			$this->load->view('itempage/project_item_body', $content);
			//$this->load->view('parse_upload/info_table_modal');
			$this->load->view('mainpage/project_view_footer');
		}
	}
	
	public function project_show_item_detail($C_id) // Show projects 
	{
		// query alg,regs, waveform, flash information=================================

		$query_result = $this->Pa5478_model->Load_released_content_flash_func($C_id);
		$flash_func = json_encode($query_result);
		
		$query_result = $this->Pa5478_model->Load_released_content_flash_header($C_id);
		$flash_header = json_encode($query_result);
		
		$query_result = $this->Pa5478_model->Load_released_content_alg($C_id);
		$alg = json_encode($query_result);
		
		$query_result = $this->Pa5478_model->Load_released_content_auto_self($C_id);
		$auto_self = json_encode($query_result);
		
		$query_result = $this->Pa5478_model->Load_released_content_waveform_f0($C_id);
		$waveform_f0 = json_encode($query_result);
		
		$query_result = $this->Pa5478_model->Load_released_content_waveform_f1($C_id);
		$waveform_f1 = json_encode($query_result);
	
		$query_result = $this->Pa5478_model->Load_released_content_dd_header($C_id);
		$dd_header = json_encode($query_result);
		
		$query_result = $this->Pa5478_model->Load_released_content_p2p_table($C_id);
		$p2p = json_encode($query_result);

		$query_result = $this->Pa5478_model->Load_released_content_tp_version_table($C_id);
		$tp_version = json_encode($query_result);

		$query_result = $this->Pa5478_model->Load_released_content_others($C_id);
		$others = json_encode($query_result);
		
		$content = '{
				"flash_func":'.$flash_func.',
				"flash_header":'.$flash_header.',
				"alg":'.$alg.',
				"auto_self":'.$auto_self.',
				"waveform_f0":'.$waveform_f0.',
				"waveform_f1":'.$waveform_f1.',
				"dd_header":'.$dd_header.',
				"p2p":'.$p2p.',
				"others":'.$others.',
				"tp_version":'.$tp_version.'
			}';
		echo ($content);
		
		//echo json_encode('{"result": "success"}');
	}
	
	public function project_delete_released_fw($project_id, $C_id) // Delete certain releasaed_fw from project
	{
		// Remove project from database....
		$this->Pa5478_model->Drop_released_fw_list($C_id);
		$query = $this->Pa5478_model->Load_released_content($project_id); // re-get latest FW
		//print_r ($query[0]->C_id);
		
		
		if($query == null){
			
			echo ('{"C_id": "-1"}'); // new CID
		}
		else{
			echo ('{"C_id": "'.$query[0]->C_id.'"}'); // new CID
		}
	}
	
	public function project_delete_project($project_id) // Delete projects from table...
	{
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
		
			// Remove project from database....
			$this->Pa5478_model->Drop_projects($project_id);

			$query_result = $this->Pa5478_model->Load_project_released();
			$data["query_result"] = $query_result;
			
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			$this->load->view('mainpage/project_view_body', $data);
			$this->load->view('mainpage/project_view_footer');
		}
	}
	
	/*public function upload_parse()
	{	
		$this->load->helper('url');

		$data = $this->Create_parse_table();

		$this->load->view('mainpage/project_view_header');
		$this->load->view('mainpage/project_view_nav');
		
		$content['html_content'] = $this->load->view('parse_upload/info_table_macro', $data, true);
		$content['default_panel'] = 0;
		
		// Load from database
		$conditions = 'project_id , panel_name';
		$query_result = $this->Pa5478_model->Load_all_projects($conditions); 
		$content["query_result"] = $query_result;
		
		$this->load->view('parse_upload/upload_file', $content);
		$this->load->view('parse_upload/info_table_modal');
		$this->load->view('mainpage/project_view_footer');
	}*/
	
	public function macro_script_download()
	{
		$filename = "192_Macro_run_v2";
		// read file contents
		$data = file_get_contents(base_url('/download/'.$filename));
		force_download($filename, $data);
	}
	
	public function Savetojsonfile(){	
		$data = $this->input->post();
		
		$table_format = $this->Create_parse_table();
		$json = json_decode($table_format["PTABLE"]);

		$i = 0;
		for($i = 0; $i < count($data["SRAM_ALG"]); $i++){
			$json->SRAM_ALG[$i]->value = $data["SRAM_ALG"][$i];
		}
		for($i = 0; $i < count($data["REG"]); $i++){
			$json->REG[$i]->value = $data["REG"][$i];
		}
		for($i = 0; $i < count($data["FLASH_HEADER"]); $i++){
			$json->FLASH_HEADER[$i]->value = $data["FLASH_HEADER"][$i];
		}
		for($i = 0; $i < count($data["FLASH_FUNC"]); $i++){
			$json->FLASH_FUNC[$i]->value = $data["FLASH_FUNC"][$i];
		}
		for($i = 0; $i < count($data["SRAM_FREQ_SETTING_F0"]); $i++){
			$json->SRAM_FREQ_SETTING_F0[$i]->value = $data["SRAM_FREQ_SETTING_F0"][$i];
		}
		for($i = 0; $i < count($data["SRAM_FREQ_SETTING_F1"]); $i++){
			$json->SRAM_FREQ_SETTING_F1[$i]->value = $data["SRAM_FREQ_SETTING_F1"][$i];
		}	
		
		echo json_encode($json);

		//=====================================================
		// Write to server..... --> move to model --> database
		// Get filename
		$d_ver = substr(($json->SRAM_ALG[1]->value), 2, 2);
		$c_ver = substr(($json->SRAM_ALG[0]->value) ,2, 2);
		$filename = ($json->FLASH_HEADER[9]->value)."_D".$d_ver."_C".$c_ver;
		
		$writefile = json_encode($json);
		if(! write_file(('./download/'.$filename), $writefile, 'w'))
		{
			// failed...
		}
		//=====================================================

	}

	public function Check_fw_exist($cid){
		$res = $this->Pa5478_model->Check_db_released_fw_exit($cid);
		
		if($res == ""){
			echo ('{"result": 0}');
		}
		else{
			echo ('{"result": 1}');
		}
	}
	/*
	public function Check_project_exist($panel_name){
		$res = $this->Pa5478_model->Check_db_project_exit($cid);
		
		if($res == ""){
			echo ('{"result": 0}');
		}
		else{
			echo ('{"result": 1}');
		}
	}
	*/
	public function Savetodatabase($id){	
		$data = $this->input->post();

		$d_ver = substr(($data["ALG"]["rfeh_1"]), 2, 2);
		$c_ver = substr(($data["ALG"]["rfeh_0"]) ,2, 2);
		
		$releasedefw = "D".$d_ver."_C".$c_ver."_".$data["FLASH_HEADER"]["cfg_date"];
		$c_id = $id.'_'."D".$d_ver."_C".$c_ver;
		
		$version = hexdec($d_ver) + hexdec($c_ver);
		// Remove test fw bit=========
		if($version >= 256){
			$version-=256;
		}
		if($version >= 128){
			$version-=128;
		}
		//============================
		$tomodeldata=array(
			'project_id' => $id,
			'released_fw' => $releasedefw,
			'C_id' => $c_id,
			'version'=> $version
		);
		// Fill out released FW table==============================
		$this->Pa5478_model->Insert_released_fw_list($tomodeldata);
		
		
		// Fill out Flsah Func table==============================
		$data["FLASH_FUNC"]["C_id"] = $c_id;
		$this->Pa5478_model->Insert_flash_func_list($data["FLASH_FUNC"]);
		// Fill out Flsah Header table============================
		$data["FLASH_HEADER"]["C_id"] = $c_id;
		$this->Pa5478_model->Insert_flash_header_list($data["FLASH_HEADER"]);
		// Fill out ALG table=======================================
		$data["ALG"]["C_id"] = $c_id;
		$this->Pa5478_model->Insert_alg_list($data["ALG"]);
		
		$data["AUTO_SELF"]["C_id"] = $c_id;
		$this->Pa5478_model->Insert_auto_self_list($data["AUTO_SELF"]);

		// Fill out Waveform F0 table==============================
		$data["F0_ADC_SETTING"]["C_id"] = $c_id;
		$this->Pa5478_model->Insert_waveform_f0_list($data["F0_ADC_SETTING"]);
		// Fill out Waveform F1 table==============================
		$data["F1_ADC_SETTING"]["C_id"] = $c_id;
		$this->Pa5478_model->Insert_waveform_f1_list($data["F1_ADC_SETTING"]);
		// Fill out REG table==============================
		$data["DD_Header"]["C_id"] = $c_id;
		$this->Pa5478_model->Insert_dd_header($data["DD_Header"]);
		
		$data["P2P_table"]["C_id"] = $c_id;
		$this->Pa5478_model->Insert_p2p_table($data["P2P_table"]);
		
		$data["TP_version"]["C_id"] = $c_id;
		$this->Pa5478_model->Insert_tp_version($data["TP_version"]);
		
		$data["Others"]["C_id"] = $c_id;
		$this->Pa5478_model->Insert_others($data["Others"]);

		echo json_encode('{"result": "success"}');
	}
	
	
	public function Query_projects($id){
		$query_result = $this->Pa5478_model->Load_project_to_edit($id);
		
		return json_encode($query_result[0]);
	}
	
	public function Modify_projects($id){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
		
			$query_result = $this->Query_projects($id);
			
			$data["title"] = "Modify Project";
			$data["mtype"]= 1;
			$data['project_id'] = $id;
			$data['query_data'] = $query_result;

			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav',$auth);
			$this->load->view('itempage/create_projects', $data);
			$this->load->view('mainpage/project_view_footer');
		
		
			//return json_encode($query_result[0]);
			//echo json_encode('{"result": "success"}');
		}
	}
	
	
	public function Create_projects(){	
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
			
			//$this->load->helper('url');
			$data["title"] = "Create Project";
			$data["mtype"]= 0;
			$data['project_id'] = '';
			$data['query_data'] = '';
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav',$auth);
			$this->load->view('itempage/create_projects', $data);
			$this->load->view('mainpage/project_view_footer');
		}
	}
	
	public function Create_projects_todatabase() {
		$data = $this->input->post();

		$tomodeldata=array(
			/*'project_id'=> 1,*/
			'panel_name'=>$data["project_name"],
			'panel_ver'=>$data["panelid"],
			'type'=> $data["type"],
			"ic_ver" => $data["ic_ver"],
			'cascade_ic_num'=> $data["cascade_ic"],
			'aa_size_vertical'=> $data["aa_size_vertical"],
			'aa_size_horizontal'=> $data["aa_size_horizontal"],
			'ic_power_mode'=> $data["ic_power_mode"]
		);
		
		$this->Pa5478_model->Insert_projects($tomodeldata);
		
		echo json_encode('{"result": "success"}');
	}
	
	public function Modify_projects_todatabase($id) {
		$data = $this->input->post();

		$tomodeldata=array(
			'panel_name'=>$data["project_name"],
			'panel_ver'=>$data["panelid"],
			'type'=> $data["type"],
			"ic_ver" => $data["ic_ver"],
			'cascade_ic_num'=> $data["cascade_ic"],
			'aa_size_vertical'=> $data["aa_size_vertical"],
			'aa_size_horizontal'=> $data["aa_size_horizontal"],
			'ic_power_mode' => $data["ic_power_mode"]
			
		);
		$content["update_table_content"] = $tomodeldata;
		$content["update_table_data_id"] = $id;
		
		
		echo json_encode('{"result": "success"}');
		$this->Pa5478_model->Update_projects($content);
	}
	
	//=============================================================
	//=============================================================
	public function create_test()
	{	
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
			
			$this->load->helper('url');
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav',$auth);
			$this->load->view('create_test/create_test');
			$this->load->view('mainpage/project_view_footer');
		}
	}
	
	public function bizzy_test()
	{	
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
			
			$this->load->helper('url');
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav',$auth);
			$this->load->view('create_test/create_PM');
			$this->load->view('mainpage/project_view_footer');
		}
	}
	
	public function Create_json_textarea() {
		$data = $this->input->post();
		// now I can get account and passwd by array index
		$account = $data["account"];
		$passwd = $data["passwd"];
		
		echo json_encode($data);
	}
	
	public function Tp_version_show()
	{	
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
		
			$this->load->helper('url');
			
			$data['json_file'] = read_file('./assets/tp_version/Tp_version_List.json');
			
			$data['level'] = $_SESSION['id'];
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			$this->load->view('create_test/tp_version_create', $data);
			$this->load->view('mainpage/project_view_footer');
		}
	}
	
	public function Tp_version_save()
	{	
		$data = $this->input->post();
		
		$new_file_path = './assets/tp_version/Tp_version_List.json'; // modify this line to point to the actual location of the file
		write_file($new_file_path, $data["result"]);		
		
		//$data["result"] = "123";
		echo json_encode($data);
	}
	
	public function Dd_version_save()
	{	
		$data = $this->input->post();
		
		$new_file_path = './assets/tp_version/Dd_checklist.json';
		write_file($new_file_path, $data["result"]);

		echo json_encode($data);
	}
	
	public function Fw_checklist_show()
	{	
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
		
			$this->load->helper('url');
			
			$data['json_file'] = read_file('./assets/tp_version/Dd_checklist.json');
			
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			if($auth["level"] == 0){
				$this->load->view('create_test/fw_checklist_create_FAE', $data);
			}
			else{
				$this->load->view('create_test/fw_checklist_create', $data);
			}
			
			$this->load->view('mainpage/project_view_footer');
		}
	}
	public function Fw_checklist_downloads($filetype)
	{
		
		if($filetype == 0){
			$filename = "HX83192_Self_Diagnosis_20210714.pptx";
		}
		else if($filetype == 1){
			$filename = "INT Latency Test Guide v2.0.ppt";
		}
		else if($filetype == 2){
			$filename = "FW&SW_ReleaseNote_date.xlsx";
		}
		else if($filetype == 3){
			$filename = "Inverter_Adaptor_Noise_Analysis_221215.pptx";
		}
		else if($filetype == 4){
			$filename = "HX83192_193_Update_VDDD_setting_for_SRAM_issue_20221128.pptx";
		}
		else if($filetype == 5){
			$filename = "20220303_RX Mapping 2 fw chn mapping array_192.xlsx";
		}
		else if($filetype == 6){
			$filename = "20220303_RX Mapping 2 fw chn mapping array_193.xlsx";
		}
		else if($filetype == 7){
			$filename = "HX83192_FW_report_20210715_EMS_ESD.pptx";
		}
		else if($filetype == 8){
			$filename = "PTP調整說明V2.xlsx";
		}
		force_download('download/'.$filename, NULL);
	}
	
	public function Build_Config_Setting()
	{	
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
		
			$this->load->helper('url');
			
			$data['json_file'] = read_file('./assets/tp_config/192_Config_Touch.json');
			
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			$this->load->view('create_test/build_tp_config', $data);
			$this->load->view('mainpage/project_view_footer');
		}
	}
	
	public function Build_Config_Start(){
		$data = $this->input->post();
		
		$filedir = './assets/build_status/build_status';
		$result = read_file($filedir);
		$result = str_replace(array("\r", "\n"), '', $result);
		
		if(($result != "-1") && is_writable($filedir)){ // Start building....
			// clear status
			write_file($filedir, -1);
			
			// Write json in to file========================
			$fp_json = './assets/build_status/build_json.json';
			write_file($fp_json, $data["result"]);
			//==============================================
			
			// Write client name in to file========================
			$fp_client = './assets/build_status/client_name';
			$ip = $this->input->ip_address();
			//echo $ip;
			//echo $_SERVER['REMOTE_ADDR'];
			write_file($fp_client, gethostbyaddr($ip));
			//==============================================
			// Replace dd header
			write_file('./assets/build_status/build_dd_init', json_decode($data["dd_file"], true) );
			//==============================================
			
			//==============================================
			// Fill out mappings....
			write_file('./assets/build_status/build_tp_init_txrx', $data["tp_init_txrx"]);
			write_file('./assets/build_status/build_tp_init_self_adc', $data["tp_init_adc_mapping"] );
			write_file('./assets/build_status/build_tp_init_self_tsram', $data["tp_init_tsram_mapping"]/*json_decode($data["tp_init_tsram_mapping"], true)*/ );
			//==============================================
		
			$c='start D:\Build_Start.bat'; 
			$r=pclose(popen($c, 'r')); 
			
			echo json_encode('{"build_status": "1"}');
		}
		else{ // busy
			//read occupied by
			$fp_client = './assets/build_status/client_name';
			$result = read_file($fp_client);
			echo json_encode('{"build_status": "0", "building_name": "'.$result.'"}');
		}
		
	}
	
	
	public function Build_Config_Going(){
		
		$result = read_file('./assets/build_status/build_status');
		$result = str_replace(array("\r", "\n"), '', $result);
		
		
		$target = read_file('./assets/build_status/build_results');
		$target = str_replace(array("\r", "\n"), '', $target);
		if(empty($target)){
			$target = "0";
		}
		// 0: finish
		// -1: going
		// others: fail
		
		if($result == "0"){ // finish
			copy('./assets/build_status/client_name', 'download/'.$target.'/client_name');
		}
		
		echo json_encode('{"result": "'.$result.'", "build_code": "'.$target.'"}');

	}
	
	public function Build_FW_Download($target){
		
		//$result = read_file('./assets/build_status/build_results');
		//$result = str_replace(array("\r", "\n"), '', $result);
		//echo $result;
		//if(($result != "0") && (empty($result) == false) ){
		$directory_path = 'download/'.$target;
		if(file_exists($directory_path)){ //$target != "0"
			$fileList = glob($directory_path.'/*.bin');
			echo $fileList[0];
			if(is_file($fileList[0])){
				force_download($fileList[0], NULL);
			}   
		}
		else{
			
		}
	}
	
	public function Query_database()
	{	
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
		
			$this->load->helper('url');
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			$this->load->view('create_test/sql_test');
			$this->load->view('mainpage/project_view_footer');
		}
	}
	public function Text_to_DB(){
		$data = $this->input->post();
		$sql = $data["query_req"];
		
		//$sql = "SELECT project_id, panel_name FROM pa5478_projects";		
		$query_result = $this->Pa5478_model->Query_by_text($sql);

		echo json_encode($query_result);
	}
	
	public function Select2_to_DB(){
		$data = $this->input->post();
		
		$query_result = $this->Pa5478_model->Query_between_released_fw_in_same_project($data);
		
		//==========================
		/*$dd_init_exit = 0;
		for($i = 0; $i < count($query_result); $i++){
			foreach($query_result[$i] as $key=>&$field){
				if($key == "value"){
					$dd_init_exit = 1;
					$field = "jje";
				}
			}
		}*/
		//==========================
		echo json_encode($query_result);

	}
	public function Compare_to_DB(){
		$data = $this->input->post();
		/*
		$table_a = "pa5478_alg_lists a";
		$table_b = "pa5478_waveform_f0_lists b";
		$table_c = "pa5478_waveform_f1_lists c";
		$table_d = "pa5478_reg_tcon_lists d";
		$table_e = "pa5478_reg_scu_lists e";
		$table_f = "pa5478_reg_others_lists f";
		$table_g = "pa5478_flash_func_lists g";
		$table_h = "pa5478_flash_header_lists h";
	
		$sql = 'SELECT a.*, b.*, c.*, d.*, e.*, f.*, g.*, h.*  ';
		$sql = $sql.' FROM '.$table_a;
		$sql = $sql.' INNER JOIN '.$table_b.' ON a.C_id = b.C_id ';
		$sql = $sql.' INNER JOIN '.$table_c.' ON a.C_id = c.C_id ';
		$sql = $sql.' INNER JOIN '.$table_d.' ON a.C_id = d.C_id ';
		$sql = $sql.' INNER JOIN '.$table_e.' ON a.C_id = e.C_id ';
		$sql = $sql.' INNER JOIN '.$table_f.' ON a.C_id = f.C_id ';
		$sql = $sql.' INNER JOIN '.$table_g.' ON a.C_id = g.C_id ';
		$sql = $sql.' INNER JOIN '.$table_h.' ON a.C_id = h.C_id ';
		$sql = $sql.' WHERE a.C_id = "'.$data["fw_list"][0].'" OR a.C_id = "'.$data["fw_list"][1].'"';

		echo json_encode('{"result": '.$sql.'}');*/
		
		$query_result = $this->Pa5478_model->Query_two_released_fw($data);
		echo json_encode($query_result);
	}
	
	public function Compare_macro_project_latest_fw($project_id){
		//$data = $this->input->post();
		
		$query_result = $this->Pa5478_model->Query_project_latest_released_fw($project_id);
		if($query_result == null){
			$data["result"] = "-1";
			echo json_encode($data);
		}
		else
			echo json_encode($query_result);
	}
	
	public function Compare_macro_project_latest_fw_req($C_id){
		
		/*$table_a = "pa5478_alg_lists a";
		$table_b = "pa5478_waveform_f0_lists b";
		$table_c = "pa5478_waveform_f1_lists c";
		$table_d = "pa5478_reg_tcon_lists d";
		$table_e = "pa5478_reg_scu_lists e";
		$table_f = "pa5478_reg_others_lists f";
		$table_g = "pa5478_flash_func_lists g";
		$table_h = "pa5478_flash_header_lists h";
	
		$sql = 'SELECT a.*, b.*, c.*, d.*, e.*, f.*, g.*, h.*  ';
		$sql = $sql.' FROM '.$table_a;
		$sql = $sql.' INNER JOIN '.$table_b.' ON a.C_id = b.C_id ';
		$sql = $sql.' INNER JOIN '.$table_c.' ON a.C_id = c.C_id ';
		$sql = $sql.' INNER JOIN '.$table_d.' ON a.C_id = d.C_id ';
		$sql = $sql.' INNER JOIN '.$table_e.' ON a.C_id = e.C_id ';
		$sql = $sql.' INNER JOIN '.$table_f.' ON a.C_id = f.C_id ';
		$sql = $sql.' INNER JOIN '.$table_g.' ON a.C_id = g.C_id ';
		$sql = $sql.' INNER JOIN '.$table_h.' ON a.C_id = h.C_id ';
		$sql = $sql.' WHERE a.C_id = "'.$C_id.'"';
		

		echo json_encode('{"result": '.$sql.'}');*/
		
		
		$query_result = $this->Pa5478_model->Query_project_latest_released_fw_data($C_id);
		echo json_encode($query_result);
	}
	public function Compare_macro_project_latest_fw_req_external($C_id){
		$query_result = $this->Pa5478_model->Query_project_latest_released_fw_external($C_id);
		/*if($query_result == null){
			$data["result"] = "-1";
			echo json_encode($data);
		}
		else{*/
			echo json_encode($query_result);
		//}
	}
	public function Stella_test($id){	
		/*$conditions = 'project_id , panel_name, ic_ver';
		$query_result = $this->Pa5478_model->Load_projects($conditions);
		print_r($query_result);*/
		//$a = $this->Pa5478_model->Check_released_fw_exit('29_D08_C08');
		/*$conditions = 'project_id , panel_name, panel_ver, cascade_ic_num, aa_size_horizontal, aa_size_vertical';
		$query_result = $this->Pa5478_model->Load_projects($conditions, 27, 1);
		print_r($query_result);*/
		
		//$this->Pa5478_model->model_stella_delete_table();
		//$this->Pa5478_model->Load_released_content_alg('26_D03_C03');
		//echo ($query[0]->released_fw);
		//$this->Pa5478_model->Load_released_content(26);
		//$this->project_delete_released_fw(27, "27_D02_C02");
		/*print_r ($query->released_fw);
		print_r ($query->C_id);
		print_r ($query->ic_ver);*/
		//$results = $query->num_rows();
		
			// = explode('_',$query[0]->released_fw);
			//echo $c_id;
		
		
		/*
		$table_format = $this->Create_parse_table();
		$json = json_decode($table_format["PTABLE"]);
		
		$this->Pa5478_model->Create_reg_tcon_list_table($json->REG_TCON);
		*/
	}
	

	public function Create_parse_table(){
		// Create table information...
		$data["PTABLE"] = '{
			"FLASH_FUNC": 
			[
				{
					"class": "alg_2", 
					"name": "Edge_Trigger_FUNC_v3",
					"value": 0,
					"bit": 0
				},
				{
					"class": "alg_2", 
					"name": "SYNC_BL",
					"value": 0,
					"bit": 1
				},
				{
					"class": "alg_2", 
					"name": "RATIO_PALM",
					"value": 0,
					"bit": 2
				},
				{
					"class": "alg_2", 
					"name": "FCA_PROTOCOL",
					"value": 0,
					"bit": 3
				},
				{
					"class": "alg_2", 
					"name": "ATMEL_PROTOCOL",
					"value": 0,
					"bit": 4
				},
				{
					"class": "alg_2", 
					"name": "CASCADE_RELOAD_CHECK",
					"value": 0,
					"bit": 5
				},
				{
					"class": "alg_2", 
					"name": "FW_RELOAD_8_WIRE",
					"value": 0,
					"bit": 6
				},
				{
					"class": "alg_2", 
					"name": "MIXER_TX",
					"value": 0,
					"bit": 7
				},
				{
					"class": "alg_2", 
					"name": "AUTOMOTIVE_FAST_DRAWING",
					"value": 0,
					"bit": 8
				},
				{
					"class": "alg_2", 
					"name": "ESD_DETECTION",
					"value": 0,
					"bit": 9
				},
				{
					"class": "alg_2", 
					"name": "GHOST_PROTECTION_TSIX",
					"value": 0,
					"bit": 10
				},
				{
					"class": "alg_2", 
					"name": "PALM_RECOVERY",
					"value": 0,
					"bit": 11
				},
				{
					"class": "alg_2", 
					"name": "NEW_GRAVITY",
					"value": 0,
					"bit": 12
				},
				{
					"class": "alg_2", 
					"name": "RAWDATA_NORMALIZE",
					"value": 0,
					"bit": 13
				},
				{
					"class": "alg_2", 
					"name": "GLOVE_WEIGHT_BY_SCALE",
					"value": 0,
					"bit": 14
				},
				{
					"class": "alg_2", 
					"name": "RECAL_THX_BY_SCALE",
					"value": 0,
					"bit": 15
				},
				{
					"class": "alg_2", 
					"name": "EMI_IDLE_MODE",
					"value": 0,
					"bit": 16
				},
				{
					"class": "alg_2", 
					"name": "TEST_BORDER_TXRX_MAPPING",
					"value": 0,
					"bit": 17
				},
				{
					"class": "alg_2", 
					"name": "SKIP_OSC_TRACKING_WHEN_POINT",
					"value": 0,
					"bit": 18
				},
				{
					"class": "alg_2", 
					"name": "OSC_TRACKING_ENABLE_GOLDEN_LIMIT",
					"value": 0,
					"bit": 19
				},
				{
					"class": "alg_2", 
					"name": "SUPER_SAFE_MODE",
					"value": 0,
					"bit": 20
				},
				{
					"class": "alg_2", 
					"name": "SAFE_MODE_ISR_OFF",
					"value": 0,
					"bit": 21
				},
				{
					"class": "alg_2", 
					"name": "DESAY_FORMAT",
					"value": 0,
					"bit": 22
				},
				{
					"class": "alg_2", 
					"name": "DELTA_OUT_OF_RANGE_REMOVE",
					"value": 0,
					"bit": 23
				},
				{
					"class": "alg_2", 
					"name": "OSD_HINT_FUNCTION",
					"value": 0,
					"bit": 24
				},
				{
					"class": "alg_2", 
					"name": "FLASH_RECORD_FUNCTION",
					"value": 0,
					"bit": 25
				},
				{
					"class": "alg_2", 
					"name": "DBG_PRINT",
					"value": 0,
					"bit": 26
				},
				{
					"class": "alg_2", 
					"name": "BORDER_ENHANCE",
					"value": 0,
					"bit": 27
				},
				{
					"class": "alg_2", 
					"name": "TOUCH_FW_OFF",
					"value": 0,
					"bit": 28
				},
				{
					"class": "alg_2", 
					"name": "SUPER_FS",
					"value": 0,
					"bit": 29
				},
				{
					"class": "alg_2", 
					"name": "FD_GPIO_DEFAULT",
					"value": 0,
					"bit": 30
				},
				{
					"class": "display",
					"name": "DD_INIT_REQ_INIT_CODE",
					"value": 0,
					"bit": 0
				},
				{
					"class": "display",
					"name": "DD_INIT_REQ_WORKAROUND", 
					"value": 0,
					"bit": 1
				},
				{
					"class": "display",
					"name": "VIDEO_GEN",
					"value": 0,
					"bit": 2
				},
				{
					"class": "display",
					"name": "EMI_ADJUST_TPEN",
					"value": 0,
					"bit": 3
				},
				{
					"class": "display",
					"name": "DD_GAMMA_UPDATE",
					"value": 0,
					"bit": 4
				},
				{
					"class": "display",
					"name": "DYNAMIC_OSC_EN",
					"value": 0,
					"bit": 5
				},
				{
					"class": "display",
					"name": "LVDS_NORMAL_FRAME_WORKAROUND",
					"value": 0,
					"bit": 6
				},
				{
					"class": "display",
					"name": "DYNAMIC_HSYNC_ASYNC_GAS",
					"value": 0,
					"bit": 7
				},
				{
					"class": "display",
					"name": "POLLING_DISP",
					"value": 0,
					"bit": 8
				},
				{
					"class": "display",
					"name": "LPWUG_DEF",
					"value": 0,
					"bit": 9
				},
				{
					"class": "display",
					"name": "ESD_BIST_SOLUTION",
					"value": 0,
					"bit": 10
				},
				{
					"class": "display",
					"name": "SLEEPOUT_TP_RESET",
					"value": 0,
					"bit": 11
				},
				{
					"class": "display",
					"name": "DD_VIDEO_CRC_HOST_CHECK_MODE",
					"value": 0,
					"bit": 12
				},
				{
					"class": "display",
					"name": "DD_UPDATE_VCOM_FROM_FLASH_WHEN_PO",
					"value": 0,
					"bit": 13
				},
				{
					"class": "display",
					"name": "DD_UPDATE_AGMA_FROM_FLASH_WHEN_PO",
					"value": 0,
					"bit": 14
				},
				{
					"class": "display",
					"name": "DD_UPDATE_DGMA_FROM_FLASH_WHEN_PO",
					"value": 0,
					"bit": 15
				},
				{
					"class": "display",
					"name": "DD_DYNAMIC_UPDATE_VCOM_BY_HOST",
					"value": 0,
					"bit": 16
				},
				{
					"class": "display",
					"name": "DD_DYNAMIC_UPDATE_AGMA_BY_HOST",
					"value": 0,
					"bit": 17
				},
				{
					"class": "display",
					"name": "DD_DYNAMIC_UPDATE_DGMA_BY_HOST",
					"value": 0,
					"bit": 18
				},
				{
					"class": "display",
					"name": "TPS_DYNAMIC_UPDATE_VCOM",
					"value": 0,
					"bit": 19
				},
				{
					"class": "display",
					"name": "TPS_DYNAMIC_UPDATE_AGMA",
					"value": 0,
					"bit": 20
				},
				{
					"class": "display",
					"name": "TPS_DYNAMIC_UPDATE_DGMA",
					"value": 0,
					"bit": 21
				},
				{
					"class": "display",
					"name": "DD_INITIAL_TPRST_SKIP_E7",
					"value": 0,
					"bit": 22
				},
				{
					"class": "display",
					"name": "DSAMPLE_RESCUE_DDRST_1TIMES",
					"value": 0,
					"bit": 23
				},
				{
					"class": "display",
					"name": "DD_REG_RW_BY_SRAM",
					"value": 0,
					"bit": 24
				},
				{
					"class": "display",
					"name": "DD_INITIAL_TPRST_SKIP_B2",
					"value": 0,
					"bit": 25
				},
				{
					"class": "display",
					"name": "CASCADE_VIDEO_GEN_TOGGLE",
					"value": 0,
					"bit": 26
				},
				{
					"class": "display",
					"name": "DD_INITIAL_CODE_2",
					"value": 0,
					"bit": 27
				},
				{
					"class": "display",
					"name": "BIST_HSYNC_ASYNC",
					"value": 0,
					"bit": 28
				},
				{
					"class": "mpfw",
					"name": "MPFW_SELT_TEST",
					"value": 0,
					"bit": 0
				},
				{
					"class": "mpfw",
					"name": "MPFW_SORTING_TEST",
					"value": 0,
					"bit": 1
				},
				{
					"class": "mpfw",
					"name": "MPFW_SHORT_TEST",
					"value": 0,
					"bit": 2
				},
				{
					"class": "mpfw",
					"name": "MPFW_OPEN_TEST",
					"value": 0,
					"bit": 3
				},
				{
					"class": "mpfw",
					"name": "MPFW_MICRO_OPEN_TEST",
					"value": 0,
					"bit": 4
				},
				{
					"class": "mpfw",
					"name": "MPFW_DOZE_TEST",
					"value": 0,
					"bit": 5
				},
				{
					"class": "mpfw",
					"name": "MPFW_LPWUG_TEST",
					"value": 0,
					"bit": 6
				},
				{
					"class": "mpfw",
					"name": "MPFW_LPWUG_IDLE_TEST",
					"value": 0,
					"bit": 7
				},
				{
					"class": "mpfw",
					"name": "MPFW_ULTRA_LOW_POWER_TEST",
					"value": 0,
					"bit": 8
				},
				{
					"class": "mpfw",
					"name": "MPFW_LOAD_OPEN_TEST",
					"value": 0,
					"bit": 9
				},
				{
					"class": "mpfw",
					"name": "MPFW_WEIGHT_AND_IIR_NEG_NOISE_TEST",
					"value": 0,
					"bit": 10
				},
				{
					"class": "mpfw",
					"name": "AUTO_SELF_TEST_NORMAL",
					"value": 0,
					"bit": 11
				},
				{
					"class": "mpfw",
					"name": "AUTO_SELF_TEST_INSPECT",
					"value": 0,
					"bit": 12
				},
				{
					"class": "mpfw",
					"name": "SELF_TEST_V2_MAPPING",
					"value": 0,
					"bit": 13
				},
				{
					"class": "clib",
					"name": "GHOST_POINT_PROTECTION",
					"value": 0,
					"bit": 0
				},
				{
					"class": "clib",
					"name": "ESD_KEEP_BASELINE",
					"value": 0,
					"bit": 1
				},
				{
					"class": "clib",
					"name": "TCON_MONITOR",
					"value": 0,
					"bit": 2
				},
				{
					"class": "clib",
					"name": "WAIT_SLEEPOUT_DISPLAY",
					"value": 0,
					"bit": 3
				},
				{
					"class": "clib",
					"name": "DD_OSC_TRACKING_ENABLE_UADJ",
					"value": 0,
					"bit": 4
				},
				{
					"class": "clib",
					"name": "DD_RST_WORKAROUND",
					"value": 0,
					"bit": 5
				},
				{
					"class": "clib",
					"name": "RESET_MAYDAY_FLOW",
					"value": 0,
					"bit": 6
				},
				{
					"class": "clib",
					"name": "FW_STOP_BY_HOST",
					"value": 0,
					"bit": 7
				},
				{
					"class": "clib",
					"name": "RELOAD_CMD_8_WIRE_TP_DD",
					"value": 0,
					"bit": 8
				},
				{
					"class": "clib",
					"name": "LONGV_MODE",
					"value": 0,
					"bit": 9
				},
				{
					"class": "clib",
					"name": "OSC_TRACKING_BURST_MODE",
					"value": 0,
					"bit": 10
				},
				{
					"class": "clib",
					"name": "OSC_TRACKING_LINE_COUNTER",
					"value":  0,
					"bit": 11
				},
				{
					"class": "clib",
					"name": "POWER_ON_INRUSH_WORKAROUND",
					"value":  0,
					"bit": 12
				},
				{
					"class": "clib",
					"name": "DYNAMIC_HSYNC_ASYNC_WORKAROUND",
					"value":  0,
					"bit": 13
				},
				{
					"class": "clib",
					"name": "GAS_INT_RST",
					"value":  0,
					"bit": 14
				},
				{
					"class": "clib",
					"name": "RELOAD_FAIL_DETECT",
					"value":  0,
					"bit": 15
				},
				{
					"class": "alg",
					"name": "GLOVE_FUNCTION_DEF",
					"value":  0,
					"bit": 0
				},
				{
					"class": "alg",
					"name": "BMW_PROTOCOL",
					"value":  0,
					"bit": 1
				},
				{
					"class": "alg",
					"name": "PARTIAL_PALM",
					"value":  0,
					"bit": 2
				},
				{
					"class": "alg",
					"name": "HOVER_PALM",
					"value":  0,
					"bit": 3
				},
				{
					"class": "alg",
					"name": "TOUCH_WORK_AS_PALM_LEAVE",
					"value":  0,
					"bit": 4
				},
				{
					"class": "alg",
					"name": "MEAN_FILTER_2_FRAMES",
					"value":  0,
					"bit": 5
				},
				{
					"class": "alg",
					"name": "MEAN_FILTER_WHEN_TOUCH",
					"value":  0,
					"bit": 6
				},
				{
					"class": "alg",
					"name": "TX_HOPPING_DEF",
					"value":  0,
					"bit": 7
				},	
				{
					"class": "alg",
					"name": "TX_RX_REVERSE",
					"value":  0,
					"bit": 8
				},	
				{
					"class": "alg",
					"name": "REVERSE_OUTPUTBUF",
					"value":  0,
					"bit": 9
				},
				{
					"class": "alg",
					"name": "COORDINATE_INETERPOLATION",
					"value":  0,
					"bit": 10
				},	
				{
					"class": "alg",
					"name": "HUNGARIAN",
					"value":  0,
					"bit": 11
				},	
				{
					"class": "alg",
					"name": "XY_JITTER",
					"value":  0,
					"bit": 12
				},
				{
					"class": "alg",
					"name": "SAFE_MODE_LOCK",
					"value":  0,
					"bit": 13
				},
				{
					"class": "alg",
					"name": "RAW_DATA_RAM",
					"value":  0,
					"bit": 14
				},
				{
					"class": "alg",
					"name": "USE_SGC",
					"value":  0,
					"bit": 15
				},
				{
					"class": "alg",
					"name": "USE_CCM",
					"value":  0,
					"bit": 16
				},
				{
					"class": "alg",
					"name": "VIRTUAL_BLOCK",
					"value":  0,
					"bit": 17
				},	
				{
					"class": "alg",
					"name": "CO_AXIS_FILTER2",
					"value":  0,
					"bit": 18
				},	
				{
					"class": "alg",
					"name": "MAPPING_V2",
					"value":  0,
					"bit": 19
				},	
				{
					"class": "alg",
					"name": "GLOVE_DETECT_WHEN_NORMAL",
					"value":  0,
					"bit": 20
				},	
				{
					"class": "alg",
					"name": "MUTUAL_KEY_ENABLE3",
					"value":  0,
					"bit": 21
				},
				{
					"class": "alg",
					"name": "FINGER_SEPARATE_DEBOUNCE",
					"value":  0,
					"bit": 22
				},	
				{
					"class": "alg",
					"name": "AUTOMOBILE_EN",
					"value":  0,
					"bit": 23
				},	
				{
					"class": "alg",
					"name": "SAME_COORD_DISABLE",
					"value":  0,
					"bit": 24
				},
				{
					"class": "alg",
					"name": "ROBOT_TEST_XY_COORD",
					"value":  0,
					"bit": 25
				},	
				{
					"class": "alg",
					"name": "SAFE_MODE_LOCK_ACK",
					"value":  0,
					"bit": 26
				},	
				{
					"class": "alg",
					"name": "PURE_DIFF_DO_CCL",
					"value":  0,
					"bit": 27
				},					
				{
					"class": "alg",
					"name":	"RECAL_HOLD",
					"value": 0,
					"bit": 28
				},
				{
					"class": "alg",
					"name":	"NEW_WEIGHTING_FILTER",
					"value": 0,
					"bit": 29
				},
				{
					"class": "alg",
					"name":	"HX_PROTOCOL_ID",
					"value": 0,
					"bit": 30
				},
				{
					"class": "alg",
					"name":	"DA_PROTOCOL",
					"value": 0,
					"bit": 31
				}
			],
			"FLASH_HEADER": 
			[
				{
					"name": "username",
					"value": ""
				},
				{
					"name": "time",
					"value": ""
				},
				{
					"name": "ic_sign",
					"value": ""
				},
				{
					"name": "commit_no",
					"value": ""
				},
				{
					"name": "hxds_ver",
					"value": ""
				},
				{
					"name": "checksumadded_ver",
					"value": ""
				},
				{
					"name":"rom_code_ver",
					"value": ""
				},
				{
					"name": "cfg_cid",
					"value": ""
				},
				{
					"name":"cfg_cust",
					"value": ""
				},
				{
					"name": "cfg_proj",
					"value": ""
				},
				{
					"name": "cfg_date",
					"value": ""
				},
				{
					"name":"cfg_sign",
					"value": ""
				},
				{
					"name": "cfg_fw",
					"value": ""
				},
				{
					"name": "cfg_fw_major",
					"value": ""
				},
				{
					"name": "cfg_fw_minor",
					"value": ""
				},
				{
					"name": "cfg_himax_ticket",
					"value": ""
				}
			],
			"TP_HW_CONFIG_1_COD_FW_CONFIG": 
			[
				{
					"name": "cfg_version",
					"value": 0
				},
				{
					"name": "display_version",
					"value": 0
				},
				{
					"name": "algorithm_en_set_1",
					"value": 0
				},
				{
					"name": "algorithm_en_set_2",
					"value": 0
				},
				{
					"name": "algorithm_en_set_3",
					"value": 0
				},
				{
					"name": "que_osc_sel",
					"value": 0
				},
				{
					"name": "touch_mode",
					"value": 0
				},
				{
					"name": "idle_report_rate",
					"value": 0
				},
				{
					"name": "mut_iir_lgd",
					"value": 0
				},
				{
					"name": "mut_thpx_nor",
					"value": 0
				},
				{
					"name": "mut_thpx_lgd",
					"value": 0
				},
				{
					"name": "mut_thpx_ac",
					"value": 0
				},
				{
					"name": "recal_thpx",
					"value": 0
				},
				{
					"name": "lpwug_active_thpx",
					"value": 0
				},
				{
					"name": "lpwug_1cycle_thpx",
					"value": 0
				},
				{
					"name": "raw_downscale",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_noise_add",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_area1_add",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_area2_add",
					"value": 0
				},
				{
					"name": "weg_rx_area_1",
					"value": 0
				},
				{
					"name": "weg_rx_area_2",
					"value": 0
				},
				{
					"name": "weg_thpx_3rd_ent_ac",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_lgd",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_nor",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_ac",
					"value": 0
				},
				{
					"name": "normal_idle_leave_pos_thx",
					"value": 0
				},
				{
					"name": "wet_thpx_1st_ent_lpwug",
					"value": 0
				},
				{
					"name": "moving_jitter_x",
					"value": 0
				},
				{
					"name": "moving_jitter_y",
					"value": 0
				},
				{
					"name": "tap_const_frm",
					"value": 0
				},
				{
					"name": "tap_dis_pr",
					"value": 0
				},
				{
					"name": "avg_jit",
					"value": 0
				},
				{
					"name": "avg_dst",
					"value": 0
				},
				{
					"name": "avg_ord",
					"value": 0
				},
				{
					"name": "avg_dyc",
					"value": 0
				},
				{
					"name": "mut_plam_frame ",
					"value": 0
				},
				{
					"name": "mut_rej_blk",
					"value": 0
				},
				{
					"name": "mut_palm_blk",
					"value": 0
				},
				{
					"name": "mut_rej_blk_lgd",
					"value": 0
				},
				{
					"name": "mut_palm_blk_lg",
					"value": 0
				},
				{
					"name": "mut_lrg_blk",
					"value": 0
				},
				{
					"name": "fig_siz_set",
					"value": 0
				},
				{
					"name": "avg_iir_min",
					"value": 0
				},
				{
					"name": "mut_thpx_palm",
					"value": 0
				},
				{
					"name": "pt_ent_num",
					"value": 0
				},
				{
					"name": "pt_lev_num",
					"value": 0
				},
				{
					"name": "pt_lev_num_lpwug",
					"value": 0
				},
				{
					"name": "acc_outer_wet_area_cnt",
					"value": 0
				},
				{
					"name": "mut_ccl_ord_l",
					"value": 0
				},
				{
					"name": "mut_ccl_ord_d",
					"value": 0
				},
				{
					"name": "mut_ccl_ord_s",
					"value": 0
				},
				{
					"name": "mut_ccl_dis ",
					"value": 0
				},
				{
					"name": "mut_ccl_ord_lgd_l",
					"value": 0
				},
				{
					"name": "mut_ccl_ord_lgd_d",
					"value": 0
				},
				{
					"name": "recal_tm",
					"value": 0
				},
				{
					"name": "bas_udt_tm",
					"value": 0
				},
				{
					"name": "idl_mod_tm",
					"value": 0
				},
				{
					"name": "lpwug_idl_mod_tm",
					"value": 0
				},
				{
					"name": "idl_lev_udt_tm",
					"value": 0
				},
				{
					"name": "idl_tm_scale",
					"value": 0
				},
				{
					"name": "osr_hop_thx",
					"value": 0
				},
				{
					"name": "osr_hop_b00",
					"value": 0
				},
				{
					"name": "startup_frm",
					"value": 0
				},
				{
					"name": "sleep_out_cc",
					"value": 0
				},
				{
					"name": "lpwug_cc",
					"value": 0
				},
				{
					"name": "idle_cc",
					"value": 0
				},
				{
					"name": "startup_cc",
					"value": 0
				},
				{
					"name": "ac_mode_cc",
					"value": 0
				},
				{
					"name": "gc_fir_cc",
					"value": 0
				},
				{
					"name": "idle_lpwug_cc",
					"value": 0
				},
				{
					"name": "co_axis_div",
					"value": 0
				},
				{
					"name": "co_axis_div_ac",
					"value": 0
				},
				{
					"name": "co_axis_div_bigarea",
					"value": 0
				},
				{
					"name": "co_axis_div_bending",
					"value": 0
				},
				{
					"name": "hopping_another_delay",
					"value": 0
				},
				{
					"name": "noise_jitter",
					"value": 0
				},
				{
					"name": "big_area_jitter",
					"value": 0
				},
				{
					"name": "game_mode_jitter",
					"value": 0
				},
				{
					"name": "normal_idle_leave_neg_thx",
					"value": 0
				},
				{
					"name": "lpwug_idle_sum_thpx",
					"value": 0
				},
				{
					"name": "sw_tsix_low_period",
					"value": 0
				},
				{
					"name": "sw_tsix_delay_frame",
					"value": 0
				},
				{
					"name": "quit_idle_base_diff",
					"value": 0
				},
				{
					"name": "ghost_dbg_oe_l",
					"value": 0
				},
				{
					"name": "ghost_dbg_oe_h",
					"value": 0
				},
				{
					"name": "mut_thpx_sen_l2",
					"value": 0
				},
				{
					"name": "mut_thpx_sen_l3",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_sen_l2",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_sen_l3",
					"value": 0
				},
				{
					"name": "iq_sum_shft_lpwug_idle",
					"value": 0
				},
				{
					"name": "wtr_diff_thx",
					"value": 0
				},
				{
					"name": "pt_ent_num_2nd",
					"value": 0
				},
				{
					"name": "recal_count",
					"value": 0
				},
				{
					"name": "recal_distance",
					"value": 0
				},
				{
					"name": "recal_count_scale",
					"value": 0
				},
				{
					"name": "recal_distance_scale",
					"value": 0
				},
				{
					"name": "sig_thx_scale",
					"value": 0
				},
				{
					"name": "palm_recovery_count",
					"value": 0
				},
				{
					"name": "mkey_num",
					"value": 0
				},
				{
					"name": "mkey_tx_chn",
					"value": 0
				},
				{
					"name": "mkey_dc_cc",
					"value": 0
				},
				{
					"name": "mkey_mut_thx",
					"value": 0
				},
				{
					"name": "mkey_addr_0",
					"value": 0
				},
				{
					"name": "dc_diff_detect_update_ratio",
					"value": 0
				},
				{
					"name": "bank_search_extend_ratio",
					"value": 0
				},
				{
					"name": "f1_bnk_lmt_rng",
					"value": 0
				},
				{
					"name": "f0_bnk_lmt_rng",
					"value": 0
				},
				{
					"name": "bs_delay_frame_recal",
					"value": 0
				},
				{
					"name": "bnk_seh_lat_lpwug",
					"value": 0
				},
				{
					"name": "bs_delay_frame_lpwug",
					"value": 0
				},
				{
					"name": "bnk_seh_lat",
					"value": 0
				},
				{
					"name": "bs_delay_frame",
					"value": 0
				},
				{
					"name": "tx_num",
					"value": 0
				},
				{
					"name": "rx_num",
					"value": 0
				},
				{
					"name": "pb_num",
					"value": 0
				},
				{
					"name": "algorithm_en_set_5",
					"value": 0
				},
				{
					"name": "algorithm_en_set_4",
					"value": 0
				},
				{
					"name": "mut_null_blk",
					"value": 0
				},
				{
					"name": "rx_pix_h",
					"value": 0
				},
				{
					"name": "rx_pix_l",
					"value": 0
				},
				{
					"name": "tx_pix_h",
					"value": 0
				},
				{
					"name": "tx_pix_l",
					"value": 0
				},
				{
					"name": "weg_thpx_2nd_lgd",
					"value": 0
				},
				{
					"name": "weg_thpx_2nd_nor",
					"value": 0
				},
				{
					"name": "weg_thpx_2nd_ac",
					"value": 0
				},
				{
					"name": "weg_thpx_2nd_noise_add",
					"value": 0
				},
				{
					"name": "weg_thpx_3rd_lgd",
					"value": 0
				},
				{
					"name": "weg_thpx_3rd_nor",
					"value": 0
				},
				{
					"name": "weg_thpx_3rd_ac",
					"value": 0
				},
				{
					"name": "weg_thpx_3rd_noise_add",
					"value": 0
				},
				{
					"name": "ghost_frame_level3",
					"value": 0
				},
				{
					"name": "palm_detection_en",
					"value": 0
				},
				{
					"name": "finger_width_min",
					"value": 0
				},
				{
					"name": "finger_width_max",
					"value": 0
				},
				{
					"name": "palm_detection_length_min",
					"value": 0
				},
				{
					"name": "palm_detection_length_max",
					"value": 0
				},
				{
					"name": "width_length_hyst",
					"value": 0
				},
				{
					"name": "palm_detection_relation_valid_width_min",
					"value": 0
				},
				{
					"name": "palm_detection_relation_valid_width_max",
					"value": 0
				},
				{
					"name": "palm_detection_relation_max",
					"value": 0
				},
				{
					"name": "relation_hyst",
					"value": 0
				},
				{
					"name": "palm_detection_size_valid_width_min",
					"value": 0
				},
				{
					"name": "palm_detection_size_valid_width_max",
					"value": 0
				},
				{
					"name": "palm_detection_size_max",
					"value": 0
				},
				{
					"name": "size_hyst",
					"value": 0
				},
				{
					"name": "ghost_detect_period_ms",
					"value": 0
				},
				{
					"name": "vsync_target_l",
					"value": 0
				},
				{
					"name": "vsync_target_h",
					"value": 0
				},
				{
					"name": "normal_idle_leave_pos_count",
					"value": 0
				},
				{
					"name": "normal_idle_leave_neg_count",
					"value": 0
				},
				{
					"name": "ghost_frame_level1",
					"value": 0
				},
				{
					"name": "ghost_frame_level2",
					"value": 0
				},
				{
					"name": "knob_dent",
					"value": 0
				},
				{
					"name": "normal_idle_enter_frame",
					"value": 0
				},
				{
					"name": "fail_det_pin_sel",
					"value": 0
				},
				{
					"name": "fail_det_mode_sel",
					"value": 0
				},
				{
					"name": "esd_max_sensed_block_l",
					"value": 0
				},
				{
					"name": "esd_max_sensed_block_h",
					"value": 0
				},
				{
					"name": "esd_col_mean_thx_l",
					"value": 0
				},
				{
					"name": "esd_col_mean_thx_h",
					"value": 0
				},
				{
					"name": "esd_col_block_thx",
					"value": 0
				},
				{
					"name": "esd_max_delta_l",
					"value": 0
				},
				{
					"name": "esd_max_delta_h",
					"value": 0
				},
				{
					"name": "esd_hor_a_mux_col_block_thx_l",
					"value": 0
				},
				{
					"name": "esd_hor_a_mux_col_block_thx_h",
					"value": 0
				},
				{
					"name": "esd_hor_a_mux_col_block_count",
					"value": 0
				},
				{
					"name": "neg_sum",
					"value": 0
				},
				{
					"name": "reserve_a7",
					"value": 0
				},
				{
					"name": "esd_col_mul_finger_num",
					"value": 0
				},
				{
					"name": "esd_cyc_noise_nthpx",
					"value": 0
				},
				{
					"name": "esd_cyc_block_thpx",
					"value": 0
				},
				{
					"name": "esd_debounce_block",
					"value": 0
				},
				{
					"name": "one_sen_block_frame",
					"value": 0
				},
				{
					"name": "algorithm_en_set_automobile",
					"value": 0
				},
				{
					"name": "leave_mut_thx",
					"value": 0
				},
				{
					"name": "algorithm_en_set_automobile2",
					"value": 0
				},
				{
					"name": "algorithm_en_set_automobile3",
					"value": 0
				},
				{
					"name": "reserve_b1",
					"value": 0
				},
				{
					"name": "glove_thpx",
					"value": 0
				},
				{
					"name": "glove_key_thx",
					"value": 0
				},
				{
					"name": "glove_weg_thpx_ent",
					"value": 0
				},
				{
					"name": "glove_cc",
					"value": 0
				},
				{
					"name": "glove_palm_blk",
					"value": 0
				},
				{
					"name": "glove_ent_lev_frm",
					"value": 0
				},
				{
					"name": "glove_ent_sel",
					"value": 0
				},
				{
					"name": "glove_ent_ulmt",
					"value": 0
				},
				{
					"name": "glove_ent_dlmt",
					"value": 0
				},
				{
					"name": "glove_ent_fng_lev_tm",
					"value": 0
				},
				{
					"name": "glove_ent_bd_rng",
					"value": 0
				},
				{
					"name": "glove_ent_weg_thx",
					"value": 0
				},
				{
					"name": "glove_ent_rng",
					"value": 0
				},
				{
					"name": "glove_lev_mod_frm",
					"value": 0
				},
				{
					"name": "wtr_dev_thx",
					"value": 0
				},
				{
					"name": "wtr_elm_wgt",
					"value": 0
				},
				{
					"name": "wtr_ent_lev_tm",
					"value": 0
				},
				{
					"name": "wtr_ccl_ord",
					"value": 0
				},
				{
					"name": "wtr_palm_check_thx",
					"value": 0
				},
				{
					"name": "x_debug_pos",
					"value": 0
				},
				{
					"name": "noise_sum_shift",
					"value": 0
				},
				{
					"name": "dummy_dma_shift_f0",
					"value": 0
				},
				{
					"name": "dummy_dma_shift_f1",
					"value": 0
				},
				{
					"name": "hopping_noise_cc",
					"value": 0
				},
				{
					"name": "hopping_thx",
					"value": 0
				},
				{
					"name": "hopping_thx_f1",
					"value": 0
				},
				{
					"name": "enter_noise_thx",
					"value": 0
				},
				{
					"name": "enter_noise_thx_f1",
					"value": 0
				},
				{
					"name": "exit_noise_frm",
					"value": 0
				},
				{
					"name": "osc_tracking_5_dd_frame",
					"value": 0
				},
				{
					"name": "hopping_bl_update_frm",
					"value": 0
				},
				{
					"name": "noise_iir_level",
					"value": 0
				},
				{
					"name": "hopping_cc",
					"value": 0
				},
				{
					"name": "noise_cc",
					"value": 0
				},
				{
					"name": "rawdata_normalized_target_f0_l",
					"value": 0
				},
				{
					"name": "rawdata_normalized_target_f0_h",
					"value": 0
				},
				{
					"name": "rawdata_normalized_target_f1_l",
					"value": 0
				},
				{
					"name": "rawdata_normalized_target_f1_h",
					"value": 0
				},
				{
					"name": "db_clk_rng",
					"value": 0
				},
				{
					"name": "xy_pix_thr",
					"value": 0
				},
				{
					"name": "lpwug_idle_lev_block_count",
					"value": 0
				},
				{
					"name": "lpwug_idle_lev_doubleclick_frame",
					"value": 0
				},
				{
					"name": "bs_neg_limit_ratio",
					"value": 0
				},
				{
					"name": "target_limit_ratio",
					"value": 0
				},
				{
					"name": "hov_blk_rng",
					"value": 0
				},
				{
					"name": "hov_avg_ulmt",
					"value": 0
				},
				{
					"name": "hov_avg_dlmt",
					"value": 0
				},
				{
					"name": "hov_max_thx",
					"value": 0
				},
				{
					"name": "hov_thx_scale",
					"value": 0
				},
				{
					"name": "stylus_ent_ulmt",
					"value": 0
				},
				{
					"name": "stylus_ent_dlmt",
					"value": 0
				},
				{
					"name": "stylus_ent_weg_ulmt",
					"value": 0
				},
				{
					"name": "stylus_ent_weg_dlmt",
					"value": 0
				},
				{
					"name": "oppo_inner_to_border_interval_distance",
					"value": 0
				},
				{
					"name": "oppo_border_extend_coor_dis_y",
					"value": 0
				},
				{
					"name": "oppo_extend_keep_detect_frm",
					"value": 0
				},
				{
					"name": "border_extend_inner_to_border_thr",
					"value": 0
				},
				{
					"name": "center_xy_pix",
					"value": 0
				},
				{
					"name": "virtual_shift_border_long_12",
					"value": 0
				},
				{
					"name": "virtual_shift_border_short_12",
					"value": 0
				},
				{
					"name": "virtual_shift_corner_12",
					"value": 0
				},
				{
					"name": "virtual_shift_corner_34",
					"value": 0
				},
				{
					"name": "reserve_f0",
					"value": 0
				},
				{
					"name": "board_prevent_rx",
					"value": 0
				},
				{
					"name": "board_prevent_tx",
					"value": 0
				},
				{
					"name": "board_prevent_rng",
					"value": 0
				},
				{
					"name": "board_prevent_tm",
					"value": 0
				},
				{
					"name": "cover_ulmt",
					"value": 0
				},
				{
					"name": "cover_dlmt",
					"value": 0
				},
				{
					"name": "cover_blk_thx",
					"value": 0
				},
				{
					"name": "cover_ent_weg",
					"value": 0
				},
				{
					"name": "reserve_f9",
					"value": 0
				},
				{
					"name": "reserve_fa",
					"value": 0
				},
				{
					"name": "gest_x_size",
					"value": 0
				},
				{
					"name": "gest_y_size",
					"value": 0
				},
				{
					"name": "gest_left_right_size",
					"value": 0
				},
				{
					"name": "gest_up_down_size",
					"value": 0
				},
				{
					"name": "swu_press_timer",
					"value": 0
				},
				{
					"name": "lpwug_freq",
					"value": 0
				},
				{
					"name": "act_area_left_top_rx_msb",
					"value": 0
				},
				{
					"name": "act_area_left_top_rx_lsb",
					"value": 0
				},
				{
					"name": "act_area_left_top_tx_msb",
					"value": 0
				},
				{
					"name": "act_area_left_top_tx_lsb",
					"value": 0
				},
				{
					"name": "act_area_right_bot_rx_msb",
					"value": 0
				},
				{
					"name": "act_area_right_bot_rx_lsb",
					"value": 0
				},
				{
					"name": "act_area_right_bot_tx_msb",
					"value": 0
				},
				{
					"name": "act_area_right_bot_tx_lsb",
					"value": 0
				},
				{
					"name": "touch_slop_tci1",
					"value": 0
				},
				{
					"name": "touch_slop_tci2",
					"value": 0
				},
				{
					"name": "knock_distance_tci1",
					"value": 0
				},
				{
					"name": "knock_distance_tci2",
					"value": 0
				},
				{
					"name": "time_gap_tci1_msb",
					"value": 0
				},
				{
					"name": "time_gap_tci1_lsb",
					"value": 0
				},
				{
					"name": "time_gap_tci2_msb",
					"value": 0
				},
				{
					"name": "time_gap_tci2_lsb",
					"value": 0
				},
				{
					"name": "total_count_tci1",
					"value": 0
				},
				{
					"name": "total_count_tci2",
					"value": 0
				},
				{
					"name": "int_delay_time_tci1_msb",
					"value": 0
				},
				{
					"name": "int_delay_time_tci1_lsb",
					"value": 0
				},
				{
					"name": "int_delay_time_tci2_msb",
					"value": 0
				},
				{
					"name": "int_delay_time_tci2_lsb",
					"value": 0
				},
				{
					"name": "tci_int_en",
					"value": 0
				},
				{
					"name": "tci_int_status",
					"value": 0
				},
				{
					"name": "reserve_119",
					"value": 0
				},
				{
					"name": "reserve_11a",
					"value": 0
				},
				{
					"name": "reserve_11b",
					"value": 0
				},
				{
					"name": "reserve_11c",
					"value": 0
				},
				{
					"name": "reserve_11d",
					"value": 0
				},
				{
					"name": "reserve_11e",
					"value": 0
				},
				{
					"name": "mpfw_sort_lfd_sel",
					"value": 0
				},
				{
					"name": "mpfw_vb_short_prechg_first",
					"value": 0
				},
				{
					"name": "mpfw_vb_short_prechg_another",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_prechg_first",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_prechg_another",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_voltage",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_current",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_osr",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_clk2",
					"value": 0
				},
				{
					"name": "mpfw_vb_micro_open_prechg_first",
					"value": 0
				},
				{
					"name": "mpfw_vb_micro_open_prechg_another",
					"value": 0
				},
				{
					"name": "mpfw_vb_micro_open_voltage",
					"value": 0
				},
				{
					"name": "mpfw_vb_micro_open_current",
					"value": 0
				},
				{
					"name": "mpfw_lh_short_prechg",
					"value": 0
				},
				{
					"name": "mpfw_lh_open_prechg",
					"value": 0
				},
				{
					"name": "mpfw_lh_open_voltage",
					"value": 0
				},
				{
					"name": "mpfw_lh_open_current",
					"value": 0
				},
				{
					"name": "mpfw_lh_open_osr",
					"value": 0
				},
				{
					"name": "mpfw_lh_open_clk2",
					"value": 0
				},
				{
					"name": "mpfw_lh_micro_open_prechg",
					"value": 0
				},
				{
					"name": "mpfw_lh_micro_open_voltage",
					"value": 0
				},
				{
					"name": "mpfw_lh_micro_open_current",
					"value": 0
				},
				{
					"name": "mpfw_iq_shift",
					"value": 0
				},
				{
					"name": "mpfw_vb_short_listen_time",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_listen_time",
					"value": 0
				},
				{
					"name": "mpfw_vb_micro_open_listen_time",
					"value": 0
				},
				{
					"name": "mpfw_lh_short_listen_time",
					"value": 0
				},
				{
					"name": "mpfw_lh_open_listen_time",
					"value": 0
				},
				{
					"name": "mpfw_lh_micro_open_listen_time",
					"value": 0
				},
				{
					"name": "mpfw_short_en_period_percent",
					"value": 0
				},
				{
					"name": "mpfw_open_en_period_percent",
					"value": 0
				},
				{
					"name": "mpfw_micro_open_en_period_percent",
					"value": 0
				},
				{
					"name": "mpfw_function_en",
					"value": 0
				},
				{
					"name": "auto_self_test_voltage",
					"value": 0
				},
				{
					"name": "auto_self_test_current",
					"value": 0
				},
				{
					"name": "auto_self_test_unused_ch_l",
					"value": 0
				},
				{
					"name": "auto_self_test_unused_ch_r",
					"value": 0
				},
				{
					"name": "reserve_144",
					"value": 0
				},
				{
					"name": "minus_more_cc_wegight_nor",
					"value": 0
				},
				{
					"name": "minus_more_cc_wegight_lgd",
					"value": 0
				},
				{
					"name": "minus_more_cc_base",
					"value": 0
				},
				{
					"name": "reserve_148",
					"value": 0
				},
				{
					"name": "reserve_149",
					"value": 0
				},
				{
					"name": "precision_x",
					"value": 0
				},
				{
					"name": "precision_y",
					"value": 0
				},
				{
					"name": "reserve_14C",
					"value": 0
				},
				{
					"name": "reserve_14D",
					"value": 0
				},
				{
					"name": "reserve_14E",
					"value": 0
				},
				{
					"name": "yin_off_frame",
					"value": 0
				},
				{
					"name": "yin_off_lmt_rng",
					"value": 0
				},
				{
					"name": "reserve_151",
					"value": 0
				},
				{
					"name": "reserve_152",
					"value": 0
				},
				{
					"name": "reserve_153",
					"value": 0
				},
				{
					"name": "line_prevent_max_rng",
					"value": 0
				},
				{
					"name": "line_prevent_dlmt",
					"value": 0
				},
				{
					"name": "line_prevent_ulmt",
					"value": 0
				},
				{
					"name": "line_prevent_cnt",
					"value": 0
				},
				{
					"name": "line_prevent_period",
					"value": 0
				},
				{
					"name": "blew_iir_en",
					"value": 0
				},
				{
					"name": "blew_iir_debounce",
					"value": 0
				},
				{
					"name": "blew_last_ch_iir_low_th",
					"value": 0
				},
				{
					"name": "blew_last_ch_block_num_th",
					"value": 0
				},
				{
					"name": "blew_delay_frame",
					"value": 0
				},
				{
					"name": "blew_wet_th",
					"value": 0
				},
				{
					"name": "esd_block_iir_th",
					"value": 0
				},
				{
					"name": "finger_debounce_lgd",
					"value": 0
				},
				{
					"name": "finger_debounce_nor",
					"value": 0
				},
				{
					"name": "finger_size_decrease_block",
					"value": 0
				},
				{
					"name": "finger_size_decrease_timer",
					"value": 0
				},
				{
					"name": "big_small_mut_thpx_lgd",
					"value": 0
				},
				{
					"name": "big_small_weg_thpx",
					"value": 0
				},
				{
					"name": "big_small_2nd_pt_block",
					"value": 0
				},
				{
					"name": "big_small_pt_block_diff",
					"value": 0
				},
				{
					"name": "big_small_delay_frame",
					"value": 0
				},
				{
					"name": "pull_bar_detection_area",
					"value": 0
				},
				{
					"name": "pull_bar_detection_frame",
					"value": 0
				},
				{
					"name": "one_block_wet_th",
					"value": 0
				},
				{
					"name": "vr_diff_avg_gap",
					"value": 0
				},
				{
					"name": "mut_thpx_earphone_add",
					"value": 0
				},
				{
					"name": "thumb_weighting",
					"value": 0
				},
				{
					"name": "thumb_decrease_weight",
					"value": 0
				},
				{
					"name": "thumb_weighting_bottom",
					"value": 0
				},
				{
					"name": "thumb_decrease_weight_bottom",
					"value": 0
				},
				{
					"name": "thumb_flying_line_keep",
					"value": 0
				},
				{
					"name": "bottom_side_distance",
					"value": 0
				},
				{
					"name": "reserve_174",
					"value": 0
				},
				{
					"name": "reserve_175",
					"value": 0
				},
				{
					"name": "wtr_bor_max_wet_ord_and_offset",
					"value": 0
				},
				{
					"name": "reserve_177",
					"value": 0
				},
				{
					"name": "reserve_178",
					"value": 0
				},
				{
					"name": "reserve_179",
					"value": 0
				},
				{
					"name": "reserve_17a",
					"value": 0
				},
				{
					"name": "reserve_17b",
					"value": 0
				},
				{
					"name": "reserve_17c",
					"value": 0
				},
				{
					"name": "reserve_17d",
					"value": 0
				},
				{
					"name": "reserve_17e",
					"value": 0
				},
				{
					"name": "reserve_17F",
					"value": 0
				}
			],
			"TP_HW_CONFIG_1_AUTO_SELF":
			[
				{
					"name": "short_high_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "short_low_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "open_high_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "open_low_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "micro_open_high_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "micro_open_low_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "noise_high_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "noise_low_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "rawdata_short",
					"size": "2",
					"value": "0"
				},
				{
					"name": "rawdata_open",
					"size": "2",
					"value": "0"
				},
				{
					"name": "fail_ponit",
					"size": "1",
					"value": "0"
				},
				{
					"name": "frame_base",
					"size": "1",
					"value": "0"
				}
			],
			"TP_ADC_CONFIG_NORMAL_F0":
			[
				{
					"name": "tcon_adc_set_sram_addr_cyc03to00",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc07to04",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc11to08",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc15to12",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc19to16",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc23to20",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc27to24",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc31to28",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc35to32",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc39to36",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_dac_set",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_ptba_reg",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_tp_en_mask_l",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_cyc_active_0",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_cyc_active_1",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_cyc_active_2",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_mode2_display_period",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_mode2_tpen_h_period",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_auto_dd_to_auto_dd_period",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_auto_tp_to_auto_tp_period",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_tp_act_vblank",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_wp_hl2_lpwug",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_vgh_en_lpwug",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_vgl_en_lpwug",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_lpwug_turn_on_teim",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_modify_for_sync_gen",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_vg_ldo_pre_enable",
					"size": "4",
					"value": "0"
				},
				{
					"name": "scu_tcon_clk_control",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_pre_charge",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_pre_charge_num",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_adccyc",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_sc_clk2_period",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_en_period",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_s_rst_prd",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_mixer_act_countdown_num",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_mode2_vsync_period",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_mode2_tpen_l_period",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_osc_pre_enable",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_pll_ldo_pre_enable",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_pll_pre_enable",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_lpwug_vsync_enable",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_auto_mux",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_dac_slope",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_ap",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_set_vr1",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_set_vr2",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_set_vr3",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_set_vr4",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_set_vr5",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_set_vrh",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_opt_mode",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_mux_sel",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_sense_mode",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_en_source_select",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_cascade_source_sel",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_en_mask",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_report_rate",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_ch_mux_num",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_vsync_tp_en_delay",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_stb_delay",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_stb",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_pll_extend_dly",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_enable_osc_en_finish",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_sd_dly",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_last_all_cycle_mode0",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_mode2_dd_cycle",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_mode2_tp_cycle",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_mode3_tp_cycle",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_m_sync_dd_tp_en",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_gen_vblank_short_stop_en",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_cyc_set_for_stop_adc",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_vsync_latch_en",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_gclk_trig_by_vsync_en",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_gen_vblank_active",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_reg_syn_v_micro",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_source_select",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_bank_update_clk_sel",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_gclk_dly",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_vsync_gen_gclk",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_bank_ap",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_bank_control_sel",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_pre_charge_unit",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_rst_unit",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_osr_count",
					"size": "1",
					"value": "0"
				},
				{
					"name": "dsp_rawdata_downscale",
					"size": "1",
					"value": "0"
				},
				{
					"name": "dsp_iq_downscale",
					"size": "1",
					"value": "0"
				},
				{
					"name": "rx_eq_head_vr",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_antest",
					"size": "2",
					"value": "0"
				}
			],
			"TP_ADC_CONFIG_NORMAL_F1":
			[
				{
					"name": "tcon_adc_set_sram_addr_cyc03to00",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc07to04",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc11to08",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc15to12",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc19to16",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc23to20",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc27to24",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc31to28",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc35to32",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_set_sram_addr_cyc39to36",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_dac_set",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_ptba_reg",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_tp_en_mask_l",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_cyc_active_0",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_cyc_active_1",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_cyc_active_2",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_mode2_display_period",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_mode2_tpen_h_period",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_auto_dd_to_auto_dd_period",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_auto_tp_to_auto_tp_period",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_adc_tp_act_vblank",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_wp_hl2_lpwug",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_vgh_en_lpwug",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_vgl_en_lpwug",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_lpwug_turn_on_teim",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_modify_for_sync_gen",
					"size": "4",
					"value": "0"
				},
				{
					"name": "tcon_vg_ldo_pre_enable",
					"size": "4",
					"value": "0"
				},
				{
					"name": "scu_tcon_clk_control",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_pre_charge",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_pre_charge_num",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_adccyc",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_sc_clk2_period",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_en_period",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_s_rst_prd",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_mixer_act_countdown_num",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_mode2_vsync_period",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_mode2_tpen_l_period",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_osc_pre_enable",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_pll_ldo_pre_enable",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_pll_pre_enable",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_lpwug_vsync_enable",
					"size": "2",
					"value": "0"
				},
				{
					"name": "tcon_auto_mux",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_dac_slope",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_ap",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_set_vr1",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_set_vr2",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_set_vr3",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_set_vr4",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_set_vr5",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_set_vrh",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_opt_mode",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_mux_sel",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_sense_mode",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_en_source_select",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_cascade_source_sel",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_en_mask",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_report_rate",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_ch_mux_num",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_vsync_tp_en_delay",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_stb_delay",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_stb",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_pll_extend_dly",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_enable_osc_en_finish",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_sd_dly",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_last_all_cycle_mode0",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_mode2_dd_cycle",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_mode2_tp_cycle",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_mode3_tp_cycle",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_m_sync_dd_tp_en",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_gen_vblank_short_stop_en",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_cyc_set_for_stop_adc",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_vsync_latch_en",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_gclk_trig_by_vsync_en",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_gen_vblank_active",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_reg_syn_v_micro",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_tp_source_select",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_bank_update_clk_sel",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_gclk_dly",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_vsync_gen_gclk",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_bank_ap",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_bank_control_sel",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_pre_charge_unit",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_rst_unit",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_osr_count",
					"size": "1",
					"value": "0"
				},
				{
					"name": "dsp_rawdata_downscale",
					"size": "1",
					"value": "0"
				},
				{
					"name": "dsp_iq_downscale",
					"size": "1",
					"value": "0"
				},
				{
					"name": "rx_eq_head_vr",
					"size": "1",
					"value": "0"
				},
				{
					"name": "tcon_antest",
					"size": "2",
					"value": "0"
				}
			],
			"dd_header":
			[
				{
					"value":""
				}
			],
			"TP_P2P_TABLE":
			[
				{
					"value":""
				}
			],
			"TP_VERSION_TABLE":
			[
				{
					"name": "Master",
					"value":""
				},
				{
					"name": "Auto_Self",
					"value":""
				},
				{
					"name": "Osc_Tracking",
					"value":""
				},
				{
					"name": "Hopping",
					"value":""
				},
				{
					"name": "Tapping",
					"value":""
				},
				{
					"name": "Palm",
					"value":""
				},
				{
					"name": "Baseline",
					"value":""
				},
				{
					"name": "Recal",
					"value":""
				},
				{
					"name": "Gamma",
					"value":""
				},
				{
					"name": "Ghost_Point",
					"value":""
				},
				{
					"name": "Fail_Detect",
					"value":""
				},
				{
					"name": "ESD",
					"value":""
				},
				{
					"name": "Reload_Cmd",
					"value":""
				},
				{
					"name": "MPFW",
					"value":""
				},
				{
					"name": "GAS",
					"value":""
				},
				{
					"name": "HX_ID_Pro",
					"value":""
				},
				{
					"name": "Safe_Mode",
					"value":""
				},
				{
					"name": "Glove",
					"value":""
				},
				{
					"name": "Tsix",
					"value":""
				},
				{
					"name": "Emi_idle",
					"value":""
				},
				{
					"name": "TPS",
					"value":""
				},
				{
					"name": "Rawdata_out",
					"value":""
				},
				{
					"name": "Normalize",
					"value":""
				},
				{
					"name": "LPWUG",
					"value":""
				},
				{
					"name": "VGW_BIST",
					"value":""
				},
				{
					"name": "Rx_Pull_Gnd",
					"value":""
				},
				{
					"name": "Normal_Display",
					"value":""
				},
				{
					"name": "Bist_Solution",
					"value":""
				},
				{
					"name": "PON",
					"value":""
				},
				{
					"name": "Power_on_check",
					"value":""
				},
				{
					"name": "OSD",
					"value":""
				},
				{
					"name": "Flash_Record",
					"value":""
				},
				{
					"name": "Debug_Print",
					"value":""
				},
				{
					"name": "Ddreg_sram",
					"value":""
				},
				{
					"name": "Border",
					"value":""
				},
				{
					"name": "Video_Gen",
					"value":""
				},
				{
					"name": "CCL",
					"value":""
				}
			],
			"OTHERS":
			[
				{
					"name": "VSP",
					"value":""
				},
				{
					"name":"OSC_Freq",
					"value":""
				},
				{
					"name":"VSA",
					"value":""
				},
				{
					"name":"VBP",
					"value":""
				},
				{
					"name":"VFP",
					"value":""
				},
				{
					"name": "PLL",
					"value":"0x1B"
				}
			]
		}';
		
		return $data;
	}
	
	public function Create_parse_table_pa5495(){
		// Create table information...
		$data["PTABLE"] = '{
			"FLASH_FUNC": 
			[
				{
					"class": "alg_2", 
					"name": "Edge_Trigger_FUNC_v3",
					"value": 0,
					"bit": 0
				},
				{
					"class": "alg_2", 
					"name": "RATIO_PALM",
					"value": 0,
					"bit": 2
				},
				{
					"class": "alg_2", 
					"name": "FCA_PROTOCOL",
					"value": 0,
					"bit": 3
				},
				{
					"class": "alg_2", 
					"name": "ATMEL_PROTOCOL",
					"value": 0,
					"bit": 4
				},

				{
					"class": "alg_2", 
					"name": "FW_RELOAD_8_WIRE",
					"value": 0,
					"bit": 6
				},
				{
					"class": "alg_2", 
					"name": "MIXER_TX",
					"value": 0,
					"bit": 7
				},
				{
					"class": "alg_2", 
					"name": "AUTOMOTIVE_FAST_DRAWING",
					"value": 0,
					"bit": 8
				},
				{
					"class": "alg_2", 
					"name": "ESD_DETECTION",
					"value": 0,
					"bit": 9
				},
				{
					"class": "alg_2", 
					"name": "GHOST_PROTECTION_TSIX",
					"value": 0,
					"bit": 10
				},
				{
					"class": "alg_2", 
					"name": "PALM_RECOVERY",
					"value": 0,
					"bit": 11
				},
				{
					"class": "alg_2", 
					"name": "NEW_GRAVITY",
					"value": 0,
					"bit": 12
				},
				{
					"class": "alg_2", 
					"name": "RAWDATA_NORMALIZE",
					"value": 0,
					"bit": 13
				},
				{
					"class": "alg_2", 
					"name": "DESAY_FORMAT",
					"value": 0,
					"bit": 22
				},
				{
					"class": "mpfw",
					"name": "MPFW_SELT_TEST",
					"value": 0,
					"bit": 0
				},
				{
					"class": "mpfw",
					"name": "MPFW_SORTING_TEST",
					"value": 0,
					"bit": 1
				},
				{
					"class": "mpfw",
					"name": "MPFW_SHORT_TEST",
					"value": 0,
					"bit": 2
				},
				{
					"class": "mpfw",
					"name": "MPFW_OPEN_TEST",
					"value": 0,
					"bit": 3
				},
				{
					"class": "mpfw",
					"name": "MPFW_MICRO_OPEN_TEST",
					"value": 0,
					"bit": 4
				},
				{
					"class": "mpfw",
					"name": "MPFW_DOZE_TEST",
					"value": 0,
					"bit": 5
				},
				{
					"class": "mpfw",
					"name": "MPFW_LPWUG_TEST",
					"value": 0,
					"bit": 6
				},
				{
					"class": "mpfw",
					"name": "MPFW_LPWUG_IDLE_TEST",
					"value": 0,
					"bit": 7
				},
				{
					"class": "mpfw",
					"name": "MPFW_ULTRA_LOW_POWER_TEST",
					"value": 0,
					"bit": 8
				},
				{
					"class": "mpfw",
					"name": "MPFW_LOAD_OPEN_TEST",
					"value": 0,
					"bit": 9
				},
				{
					"class": "mpfw",
					"name": "MPFW_WEIGHT_AND_IIR_NEG_NOISE_TEST",
					"value": 0,
					"bit": 10
				},
				{
					"class": "mpfw",
					"name": "AUTO_SELF_TEST_NORMAL",
					"value": 0,
					"bit": 11
				},
				{
					"class": "mpfw",
					"name": "AUTO_SELF_TEST_INSPECT",
					"value": 0,
					"bit": 12
				},
				{
					"class": "clib",
					"name": "DD_INIT_SET_BY_TP",
					"value": 0,
					"bit": 0
				},
				{
					"class": "clib",
					"name": "LONGV_MODE",
					"value": 0,
					"bit": 1
				},
				{
					"class": "clib",
					"name": "RAWDATA_BY_EVENTSTACK",
					"value": 0,
					"bit": 7
				},
				{
					"class": "alg",
					"name": "GLOVE_FUNCTION_DEF",
					"value":  0,
					"bit": 0
				},
				{
					"class": "alg",
					"name": "BMW_PROTOCOL",
					"value":  0,
					"bit": 1
				},
				{
					"class": "alg",
					"name": "PARTIAL_PALM",
					"value":  0,
					"bit": 2
				},
				{
					"class": "alg",
					"name": "HOVER_PALM",
					"value":  0,
					"bit": 3
				},
				{
					"class": "alg",
					"name": "TOUCH_WORK_AS_PALM_LEAVE",
					"value":  0,
					"bit": 4
				},
				{
					"class": "alg",
					"name": "MEAN_FILTER_2_FRAMES",
					"value":  0,
					"bit": 5
				},
				{
					"class": "alg",
					"name": "MEAN_FILTER_WHEN_TOUCH",
					"value":  0,
					"bit": 6
				},
				{
					"class": "alg",
					"name": "TX_HOPPING_DEF",
					"value":  0,
					"bit": 7
				},	
				{
					"class": "alg",
					"name": "TX_RX_REVERSE",
					"value":  0,
					"bit": 8
				},	
				{
					"class": "alg",
					"name": "REVERSE_OUTPUTBUF",
					"value":  0,
					"bit": 9
				},
				{
					"class": "alg",
					"name": "COORDINATE_INETERPOLATION",
					"value":  0,
					"bit": 10
				},	
				{
					"class": "alg",
					"name": "HUNGARIAN",
					"value":  0,
					"bit": 11
				},	
				{
					"class": "alg",
					"name": "XY_JITTER",
					"value":  0,
					"bit": 12
				},
				{
					"class": "alg",
					"name": "SAFE_MODE_LOCK",
					"value":  0,
					"bit": 13
				},
				{
					"class": "alg",
					"name": "RAW_DATA_RAM",
					"value":  0,
					"bit": 14
				},
				{
					"class": "alg",
					"name": "SSCG",
					"value":  0,
					"bit": 15
				},
				{
					"class": "alg",
					"name": "USE_CCM",
					"value":  0,
					"bit": 16
				},
				{
					"class": "alg",
					"name": "VIRTUAL_BLOCK",
					"value":  0,
					"bit": 17
				},	
				{
					"class": "alg",
					"name": "CO_AXIS_FILTER2",
					"value":  0,
					"bit": 18
				},	
				{
					"class": "alg",
					"name": "GLOVE_DETECT_WHEN_NORMAL",
					"value":  0,
					"bit": 20
				},	
				{
					"class": "alg",
					"name": "MUTUAL_KEY_ENABLE3",
					"value":  0,
					"bit": 21
				},
				{
					"class": "alg",
					"name": "FINGER_SEPARATE_DEBOUNCE",
					"value":  0,
					"bit": 22
				},	
				{
					"class": "alg",
					"name": "AUTOMOBILE_EN",
					"value":  0,
					"bit": 23
				},	
				{
					"class": "alg",
					"name": "SAME_COORD_DISABLE",
					"value":  0,
					"bit": 24
				},
				{
					"class": "alg",
					"name": "ROBOT_TEST_XY_COORD",
					"value":  0,
					"bit": 25
				},	
				{
					"class": "alg",
					"name": "SAFE_MODE_LOCK_ACK",
					"value":  0,
					"bit": 26
				},	
				{
					"class": "alg",
					"name": "PURE_DIFF_DO_CCL",
					"value":  0,
					"bit": 27
				},					
				{
					"class": "alg",
					"name":	"RECAL_HOLD",
					"value": 0,
					"bit": 28
				},
				{
					"class": "alg",
					"name":	"NEW_WEIGHTING_FILTER",
					"value": 0,
					"bit": 29
				},
				{
					"class": "alg",
					"name":	"HX_PROTOCOL_ID",
					"value": 0,
					"bit": 30
				},
				{
					"class": "alg",
					"name":	"DA_PROTOCOL",
					"value": 0,
					"bit": 31
				}
			],
			"FLASH_HEADER": 
			[
				{
					"name": "username",
					"value": ""
				},
				{
					"name": "time",
					"value": ""
				},
				{
					"name": "ic_sign",
					"value": ""
				},
				{
					"name": "commit_no",
					"value": ""
				},
				{
					"name": "hxds_ver",
					"value": ""
				},
				{
					"name": "checksumadded_ver",
					"value": ""
				},
				{
					"name":"rom_code_ver",
					"value": ""
				},
				{
					"name": "cfg_cid",
					"value": ""
				},
				{
					"name":"cfg_cust",
					"value": ""
				},
				{
					"name": "cfg_proj",
					"value": ""
				},
				{
					"name": "cfg_date",
					"value": ""
				},
				{
					"name":"cfg_sign",
					"value": ""
				},
				{
					"name": "cfg_fw",
					"value": ""
				},
				{
					"name": "cfg_fw_major",
					"value": ""
				},
				{
					"name": "cfg_fw_minor",
					"value": ""
				},
				{
					"name": "cfg_himax_ticket",
					"value": ""
				}
			],
			"TP_HW_CONFIG_1_COD_FW_CONFIG": 
			[
				{
					"name": "cfg_version",
					"value": 0
				},
				{
					"name": "display_version",
					"value": 0
				},
				{
					"name": "algorithm_en_set_1",
					"value": 0
				},
				{
					"name": "algorithm_en_set_2",
					"value": 0
				},
				{
					"name": "algorithm_en_set_3",
					"value": 0
				},
				{
					"name": "que_osc_sel",
					"value": 0
				},
				{
					"name": "touch_mode",
					"value": 0
				},
				{
					"name": "idle_report_rate",
					"value": 0
				},
				{
					"name": "mut_iir_lgd",
					"value": 0
				},
				{
					"name": "mut_thpx_nor",
					"value": 0
				},
				{
					"name": "mut_thpx_lgd",
					"value": 0
				},
				{
					"name": "mut_thpx_ac",
					"value": 0
				},
				{
					"name": "recal_thpx",
					"value": 0
				},
				{
					"name": "lpwug_active_thpx",
					"value": 0
				},
				{
					"name": "lpwug_1cycle_thpx",
					"value": 0
				},
				{
					"name": "raw_downscale",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_noise_add",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_area1_add",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_area2_add",
					"value": 0
				},
				{
					"name": "weg_rx_area_1",
					"value": 0
				},
				{
					"name": "weg_rx_area_2",
					"value": 0
				},
				{
					"name": "cc_downscale",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_lgd",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_nor",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_ac",
					"value": 0
				},
				{
					"name": "normal_idle_thpx",
					"value": 0
				},
				{
					"name": "wet_thpx_1st_ent_lpwug",
					"value": 0
				},
				{
					"name": "moving_jitter_x",
					"value": 0
				},
				{
					"name": "moving_jitter_y",
					"value": 0
				},
				{
					"name": "tap_const_frm",
					"value": 0
				},
				{
					"name": "tap_dis_pr",
					"value": 0
				},
				{
					"name": "avg_jit",
					"value": 0
				},
				{
					"name": "avg_dst",
					"value": 0
				},
				{
					"name": "avg_ord",
					"value": 0
				},
				{
					"name": "avg_dyc",
					"value": 0
				},
				{
					"name": "mut_plam_frame ",
					"value": 0
				},
				{
					"name": "mut_rej_blk",
					"value": 0
				},
				{
					"name": "mut_palm_blk",
					"value": 0
				},
				{
					"name": "mut_rej_blk_lgd",
					"value": 0
				},
				{
					"name": "mut_palm_blk_lg",
					"value": 0
				},
				{
					"name": "mut_lrg_blk",
					"value": 0
				},
				{
					"name": "fig_siz_set",
					"value": 0
				},
				{
					"name": "avg_iir_min",
					"value": 0
				},
				{
					"name": "pt_ent_num_2nd",
					"value": 0
				},
				{
					"name": "pt_ent_num",
					"value": 0
				},
				{
					"name": "pt_lev_num",
					"value": 0
				},
				{
					"name": "pt_lev_num_lpwug",
					"value": 0
				},
				{
					"name": "acc_outer_wet_area_cnt",
					"value": 0
				},
				{
					"name": "mut_ccl_ord_l",
					"value": 0
				},
				{
					"name": "mut_ccl_ord_d",
					"value": 0
				},
				{
					"name": "mut_ccl_ord_s",
					"value": 0
				},
				{
					"name": "mut_ccl_dis ",
					"value": 0
				},
				{
					"name": "mut_ccl_ord_lgd_l",
					"value": 0
				},
				{
					"name": "mut_ccl_ord_lgd_d",
					"value": 0
				},
				{
					"name": "recal_tm",
					"value": 0
				},
				{
					"name": "bas_udt_tm",
					"value": 0
				},
				{
					"name": "idl_mod_tm",
					"value": 0
				},
				{
					"name": "lpwug_idl_mod_tm",
					"value": 0
				},
				{
					"name": "idl_lev_udt_tm",
					"value": 0
				},
				{
					"name": "idl_tm_scale",
					"value": 0
				},
				{
					"name": "osr_hop_thx",
					"value": 0
				},
				{
					"name": "osr_hop_b00",
					"value": 0
				},
				{
					"name": "startup_frm",
					"value": 0
				},
				{
					"name": "sleep_out_cc",
					"value": 0
				},
				{
					"name": "lpwug_cc",
					"value": 0
				},
				{
					"name": "idle_cc",
					"value": 0
				},
				{
					"name": "startup_cc",
					"value": 0
				},
				{
					"name": "ac_mode_cc",
					"value": 0
				},
				{
					"name": "gc_fir_cc",
					"value": 0
				},
				{
					"name": "idle_lpwug_cc",
					"value": 0
				},
				{
					"name": "co_axis_div",
					"value": 0
				},
				{
					"name": "co_axis_div_ac",
					"value": 0
				},
				{
					"name": "co_axis_div_bigarea",
					"value": 0
				},
				{
					"name": "co_axis_div_bending",
					"value": 0
				},
				{
					"name": "hopping_another_delay",
					"value": 0
				},
				{
					"name": "noise_jitter",
					"value": 0
				},
				{
					"name": "big_area_jitter",
					"value": 0
				},
				{
					"name": "game_mode_jitter",
					"value": 0
				},
				{
					"name": "normal_idle_sum_thpx",
					"value": 0
				},
				{
					"name": "lpwug_idle_sum_thpx",
					"value": 0
				},
				{
					"name": "sw_tsix_low_period",
					"value": 0
				},
				{
					"name": "sw_tsix_delay_frame",
					"value": 0
				},
				{
					"name": "quit_idle_base_diff",
					"value": 0
				},
				{
					"name": "dd_temp_startup_timer",
					"value": 0
				},
				{
					"name": "dd_temp_quit_idle_timer",
					"value": 0
				},
				{
					"name": "mut_thpx_sen_l2",
					"value": 0
				},
				{
					"name": "mut_thpx_sen_l3",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_sen_l2",
					"value": 0
				},
				{
					"name": "weg_thpx_1st_sen_l3",
					"value": 0
				},
				{
					"name": "iq_sum_shft_lpwug_idle",
					"value": 0
				},
				{
					"name": "wtr_diff_thx",
					"value": 0
				},
				{
					"name": "wtr_ent_num",
					"value": 0
				},
				{
					"name": "recal_count",
					"value": 0
				},
				{
					"name": "recal_distance",
					"value": 0
				},
				{
					"name": "recal_count_scale",
					"value": 0
				},
				{
					"name": "recal_distance_scale",
					"value": 0
				},
				{
					"name": "reserve_60",
					"value": 0
				},
				{
					"name": "palm_recovery_count",
					"value": 0
				},
				{
					"name": "mkey_num",
					"value": 0
				},
				{
					"name": "mkey_tx_chn",
					"value": 0
				},
				{
					"name": "mkey_dc_cc",
					"value": 0
				},
				{
					"name": "mkey_mut_thx",
					"value": 0
				},
				{
					"name": "mkey_addr_0",
					"value": 0
				},
				{
					"name": "dc_diff_detect_update_ratio",
					"value": 0
				},
				{
					"name": "bank_search_extend_ratio",
					"value": 0
				},
				{
					"name": "f1_bnk_lmt_rng",
					"value": 0
				},
				{
					"name": "f0_bnk_lmt_rng",
					"value": 0
				},
				{
					"name": "bs_delay_frame_recal",
					"value": 0
				},
				{
					"name": "bnk_seh_lat_lpwug",
					"value": 0
				},
				{
					"name": "bs_delay_frame_lpwug",
					"value": 0
				},
				{
					"name": "bnk_seh_lat",
					"value": 0
				},
				{
					"name": "bs_delay_frame",
					"value": 0
				},
				{
					"name": "single_tx_max",
					"value": 0
				},
				{
					"name": "single_rx_max",
					"value": 0
				},
				{
					"name": "pb_num",
					"value": 0
				},
				{
					"name": "algorithm_en_set_5",
					"value": 0
				},
				{
					"name": "algorithm_en_set_4",
					"value": 0
				},
				{
					"name": "mut_null_blk",
					"value": 0
				},
				{
					"name": "rx_pix_h",
					"value": 0
				},
				{
					"name": "rx_pix_l",
					"value": 0
				},
				{
					"name": "tx_pix_h",
					"value": 0
				},
				{
					"name": "tx_pix_l",
					"value": 0
				},
				{
					"name": "weg_thpx_2nd_lgd",
					"value": 0
				},
				{
					"name": "weg_thpx_2nd_nor",
					"value": 0
				},
				{
					"name": "weg_thpx_2nd_ac",
					"value": 0
				},
				{
					"name": "weg_thpx_2nd_noise_add",
					"value": 0
				},
				{
					"name": "weg_thpx_3rd_lgd",
					"value": 0
				},
				{
					"name": "weg_thpx_3rd_nor",
					"value": 0
				},
				{
					"name": "weg_thpx_3rd_ac",
					"value": 0
				},
				{
					"name": "weg_thpx_3rd_noise_add",
					"value": 0
				},
				{
					"name": "wet_thpx_1st_still",
					"value": 0
				},
				{
					"name": "weg_dec_thx",
					"value": 0
				},
				{
					"name": "weg_dec_ratio",
					"value": 0
				},
				{
					"name": "gc_poly_tx1_h",
					"value": 0
				},
				{
					"name": "gc_poly_tx1_l",
					"value": 0
				},
				{
					"name": "gc_poly_tx0",
					"value": 0
				},
				{
					"name": "tap_dis_ratio",
					"value": 0
				},
				{
					"name": "tap_dis_thr",
					"value": 0
				},
				{
					"name": "tap_thr_and_slope",
					"value": 0
				},
				{
					"name": "gc_poly_rx2e_l",
					"value": 0
				},
				{
					"name": "gc_poly_rx1e_h",
					"value": 0
				},
				{
					"name": "gc_poly_rx1e_l",
					"value": 0
				},
				{
					"name": "gc_poly_rx0e",
					"value": 0
				},
				{
					"name": "gc_poly_tx3e_h",
					"value": 0
				},
				{
					"name": "gc_poly_tx3e_l",
					"value": 0
				},
				{
					"name": "gc_poly_tx2e_h",
					"value": 0
				},
				{
					"name": "gc_poly_tx2e_l",
					"value": 0
				},
				{
					"name": "gc_poly_tx1e_h",
					"value": 0
				},
				{
					"name": "gc_poly_tx1e_l",
					"value": 0
				},
				{
					"name": "gc_poly_tx0e",
					"value": 0
				},
				{
					"name": "slf_bnk_ulmt",
					"value": 0
				},
				{
					"name": "slf_bnk_dlmt",
					"value": 0
				},
				{
					"name": "knob_dent",
					"value": 0
				},
				{
					"name": "sleep_out_cc_2",
					"value": 0
				},
				{
					"name": "fail_det_pin_sel",
					"value": 0
				},
				{
					"name": "fail_det_mode_sel",
					"value": 0
				},
				{
					"name": "lpwug_frame_rate",
					"value": 0
				},
				{
					"name": "lpwug_idle_frame_rate",
					"value": 0
				},
				{
					"name": "adc_front_l",
					"value": 0
				},
				{
					"name": "adc_back_l",
					"value": 0
				},
				{
					"name": "adc_front_r",
					"value": 0
				},
				{
					"name": "esd_max_delta_l",
					"value": 0
				},
				{
					"name": "esd_max_delta_h",
					"value": 0
				},
				{
					"name": "line_shift_start",
					"value": 0
				},
				{
					"name": "line_shift_number",
					"value": 0
				},
				{
					"name": "line_shift_updated_frame",
					"value": 0
				},
				{
					"name": "neg_sum",
					"value": 0
				},
				{
					"name": "neg_block",
					"value": 0
				},
				{
					"name": "esd_cyc_noise_pthpx",
					"value": 0
				},
				{
					"name": "esd_cyc_noise_nthpx",
					"value": 0
				},
				{
					"name": "esd_cyc_block_thpx",
					"value": 0
				},
				{
					"name": "esd_debounce_block",
					"value": 0
				},
				{
					"name": "one_sen_block_frame",
					"value": 0
				},
				{
					"name": "algorithm_en_set_automobile",
					"value": 0
				},
				{
					"name": "leave_mut_thx",
					"value": 0
				},
				{
					"name": "algorithm_en_set_automobile2",
					"value": 0
				},
				{
					"name": "algorithm_en_set_automobile3",
					"value": 0
				},
				{
					"name": "algorithm_en_set_automobile4",
					"value": 0
				},
				{
					"name": "glove_thpx",
					"value": 0
				},
				{
					"name": "glove_key_thx",
					"value": 0
				},
				{
					"name": "glove_weg_thpx_ent",
					"value": 0
				},
				{
					"name": "glove_cc",
					"value": 0
				},
				{
					"name": "glove_palm_blk",
					"value": 0
				},
				{
					"name": "glove_ent_lev_frm",
					"value": 0
				},
				{
					"name": "glove_ent_sel",
					"value": 0
				},
				{
					"name": "glove_ent_ulmt",
					"value": 0
				},
				{
					"name": "glove_ent_dlmt",
					"value": 0
				},
				{
					"name": "glove_ent_fng_lev_tm",
					"value": 0
				},
				{
					"name": "glove_ent_bd_rng",
					"value": 0
				},
				{
					"name": "glove_ent_weg_thx",
					"value": 0
				},
				{
					"name": "glove_ent_rng",
					"value": 0
				},
				{
					"name": "glove_lev_mod_frm",
					"value": 0
				},
				{
					"name": "wtr_dev_thx",
					"value": 0
				},
				{
					"name": "wtr_elm_wgt",
					"value": 0
				},
				{
					"name": "wtr_ent_lev_tm",
					"value": 0
				},
				{
					"name": "wtr_ccl_ord",
					"value": 0
				},
				{
					"name": "wtr_palm_check_thx",
					"value": 0
				},
				{
					"name": "x_debug_pos",
					"value": 0
				},
				{
					"name": "noise_sum_shift",
					"value": 0
				},
				{
					"name": "dummy_dma_shift_f0",
					"value": 0
				},
				{
					"name": "dummy_dma_shift_f1",
					"value": 0
				},
				{
					"name": "hopping_noise_cc",
					"value": 0
				},
				{
					"name": "hopping_thx",
					"value": 0
				},
				{
					"name": "hopping_thx_f1",
					"value": 0
				},
				{
					"name": "enter_noise_thx",
					"value": 0
				},
				{
					"name": "enter_noise_thx_f1",
					"value": 0
				},
				{
					"name": "exit_noise_frm",
					"value": 0
				},
				{
					"name": "osc_tracking_5_dd_frame",
					"value": 0
				},
				{
					"name": "hopping_bl_update_frm",
					"value": 0
				},
				{
					"name": "noise_iir_level",
					"value": 0
				},
				{
					"name": "hopping_cc",
					"value": 0
				},
				{
					"name": "noise_cc",
					"value": 0
				},
				{
					"name": "rawdata_normalized_target_f0_l",
					"value": 0
				},
				{
					"name": "rawdata_normalized_target_f0_h",
					"value": 0
				},
				{
					"name": "rawdata_normalized_target_f1_l",
					"value": 0
				},
				{
					"name": "rawdata_normalized_target_f1_h",
					"value": 0
				},
				{
					"name": "db_clk_rng_tolerance",
					"value": 0
				},
				{
					"name": "xy_pix_thr",
					"value": 0
				},
				{
					"name": "lpwug_idle_lev_block_count",
					"value": 0
				},
				{
					"name": "lpwug_idle_lev_doubleclick_frame",
					"value": 0
				},
				{
					"name": "gesture_max_frm",
					"value": 0
				},
				{
					"name": "gesture_min_frm",
					"value": 0
				},
				{
					"name": "hov_blk_rng",
					"value": 0
				},
				{
					"name": "hov_avg_ulmt",
					"value": 0
				},
				{
					"name": "hov_avg_dlmt",
					"value": 0
				},
				{
					"name": "hov_max_thx",
					"value": 0
				},
				{
					"name": "hov_thx_scale",
					"value": 0
				},
				{
					"name": "stylus_ent_ulmt",
					"value": 0
				},
				{
					"name": "stylus_ent_dlmt",
					"value": 0
				},
				{
					"name": "stylus_ent_weg_ulmt",
					"value": 0
				},
				{
					"name": "stylus_ent_weg_dlmt",
					"value": 0
				},
				{
					"name": "oppo_inner_to_border_interval_distance",
					"value": 0
				},
				{
					"name": "oppo_border_extend_coor_dis_y",
					"value": 0
				},
				{
					"name": "oppo_extend_keep_detect_frm",
					"value": 0
				},
				{
					"name": "border_extend_inner_to_border_thr",
					"value": 0
				},
				{
					"name": "center_xy_pix",
					"value": 0
				},
				{
					"name": "virtual_shift_border_long_12",
					"value": 0
				},
				{
					"name": "virtual_shift_border_short_12",
					"value": 0
				},
				{
					"name": "virtual_shift_corner_12",
					"value": 0
				},
				{
					"name": "virtual_shift_corner_34",
					"value": 0
				},
				{
					"name": "reserve_f0",
					"value": 0
				},
				{
					"name": "board_prevent_rx",
					"value": 0
				},
				{
					"name": "board_prevent_tx",
					"value": 0
				},
				{
					"name": "reserve_f3",
					"value": 0
				},
				{
					"name": "reserve_f4",
					"value": 0
				},
				{
					"name": "reserve_f5",
					"value": 0
				},
				{
					"name": "esd_cyc_noise_pthpx",
					"value": 0
				},
				{
					"name": "esd_cyc_noise_nthpx",
					"value": 0
				},
				{
					"name": "esd_cyc_block_thpx",
					"value": 0
				},
				{
					"name": "reserve_f9",
					"value": 0
				},
				{
					"name": "reserve_fa",
					"value": 0
				},
				{
					"name": "gest_x_size",
					"value": 0
				},
				{
					"name": "gest_y_size",
					"value": 0
				},
				{
					"name": "gest_left_right_size",
					"value": 0
				},
				{
					"name": "gest_up_down_size",
					"value": 0
				},
				{
					"name": "swu_press_timer",
					"value": 0
				},
				{
					"name": "lpwug_freq",
					"value": 0
				},
				{
					"name": "act_area_left_top_rx_msb",
					"value": 0
				},
				{
					"name": "act_area_left_top_rx_lsb",
					"value": 0
				},
				{
					"name": "act_area_left_top_tx_msb",
					"value": 0
				},
				{
					"name": "act_area_left_top_tx_lsb",
					"value": 0
				},
				{
					"name": "act_area_right_bot_rx_msb",
					"value": 0
				},
				{
					"name": "act_area_right_bot_rx_lsb",
					"value": 0
				},
				{
					"name": "act_area_right_bot_tx_msb",
					"value": 0
				},
				{
					"name": "act_area_right_bot_tx_lsb",
					"value": 0
				},
				{
					"name": "touch_slop_tci1",
					"value": 0
				},
				{
					"name": "touch_slop_tci2",
					"value": 0
				},
				{
					"name": "knock_distance_tci1",
					"value": 0
				},
				{
					"name": "knock_distance_tci2",
					"value": 0
				},
				{
					"name": "time_gap_tci1_msb",
					"value": 0
				},
				{
					"name": "time_gap_tci1_lsb",
					"value": 0
				},
				{
					"name": "time_gap_tci2_msb",
					"value": 0
				},
				{
					"name": "time_gap_tci2_lsb",
					"value": 0
				},
				{
					"name": "total_count_tci1",
					"value": 0
				},
				{
					"name": "total_count_tci2",
					"value": 0
				},
				{
					"name": "int_delay_time_tci1_msb",
					"value": 0
				},
				{
					"name": "int_delay_time_tci1_lsb",
					"value": 0
				},
				{
					"name": "int_delay_time_tci2_msb",
					"value": 0
				},
				{
					"name": "int_delay_time_tci2_lsb",
					"value": 0
				},
				{
					"name": "tci_int_en",
					"value": 0
				},
				{
					"name": "tci_int_status",
					"value": 0
				},
				{
					"name": "pen_num",
					"value": 0
				},
				{
					"name": "pen_x_rx",
					"value": 0
				},
				{
					"name": "pen_x_tx",
					"value": 0
				},
				{
					"name": "pen_y_rx",
					"value": 0
				},
				{
					"name": "pen_y_tx",
					"value": 0
				},
				{
					"name": "reserve_11e",
					"value": 0
				},
				{
					"name": "mpfw_sort_lfd_sel",
					"value": 0
				},
				{
					"name": "mpfw_vb_short_prechg_first",
					"value": 0
				},
				{
					"name": "mpfw_vb_short_prechg_another",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_prechg_first",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_prechg_another",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_voltage",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_current",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_osr",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_clk2",
					"value": 0
				},
				{
					"name": "mpfw_vb_micro_open_prechg_first",
					"value": 0
				},
				{
					"name": "mpfw_vb_micro_open_prechg_another",
					"value": 0
				},
				{
					"name": "mpfw_vb_micro_open_voltage",
					"value": 0
				},
				{
					"name": "mpfw_vb_micro_open_current",
					"value": 0
				},
				{
					"name": "mpfw_lh_short_prechg",
					"value": 0
				},
				{
					"name": "mpfw_lh_open_prechg",
					"value": 0
				},
				{
					"name": "mpfw_lh_open_voltage",
					"value": 0
				},
				{
					"name": "mpfw_lh_open_current",
					"value": 0
				},
				{
					"name": "mpfw_lh_open_osr",
					"value": 0
				},
				{
					"name": "mpfw_lh_open_clk2",
					"value": 0
				},
				{
					"name": "mpfw_lh_micro_open_prechg",
					"value": 0
				},
				{
					"name": "mpfw_lh_micro_open_voltage",
					"value": 0
				},
				{
					"name": "mpfw_lh_micro_open_current",
					"value": 0
				},
				{
					"name": "mpfw_iq_shift",
					"value": 0
				},
				{
					"name": "mpfw_vb_short_listen_time",
					"value": 0
				},
				{
					"name": "mpfw_vb_open_listen_time",
					"value": 0
				},
				{
					"name": "mpfw_vb_micro_open_listen_time",
					"value": 0
				},
				{
					"name": "mpfw_lh_short_listen_time",
					"value": 0
				},
				{
					"name": "mpfw_lh_open_listen_time",
					"value": 0
				},
				{
					"name": "mpfw_lh_micro_open_listen_time",
					"value": 0
				},
				{
					"name": "mpfw_short_en_period_percent",
					"value": 0
				},
				{
					"name": "mpfw_open_en_period_percent",
					"value": 0
				},
				{
					"name": "mpfw_micro_open_en_period_percent",
					"value": 0
				},
				{
					"name": "mpfw_function_en",
					"value": 0
				},
				{
					"name": "auto_self_test_voltage",
					"value": 0
				},
				{
					"name": "auto_self_test_current",
					"value": 0
				},
				{
					"name": "auto_self_test_unused_ch_l",
					"value": 0
				},
				{
					"name": "auto_self_test_unused_ch_r",
					"value": 0
				},
				{
					"name": "reserve_144",
					"value": 0
				},
				{
					"name": "minus_more_cc_wegight_nor",
					"value": 0
				},
				{
					"name": "minus_more_cc_wegight_lgd",
					"value": 0
				},
				{
					"name": "minus_more_cc_base",
					"value": 0
				},
				{
					"name": "reserve_148",
					"value": 0
				},
				{
					"name": "reserve_149",
					"value": 0
				},
				{
					"name": "precision_x",
					"value": 0
				},
				{
					"name": "precision_y",
					"value": 0
				},
				{
					"name": "palm_detection_en",
					"value": 0
				},
				{
					"name": "finger_width_min",
					"value": 0
				},
				{
					"name": "finger_width_max",
					"value": 0
				},
				{
					"name": "palm_detection_length_min",
					"value": 0
				},
				{
					"name": "palm_detection_length_max",
					"value": 0
				},
				{
					"name": "width_length_hyst",
					"value": 0
				},
				{
					"name": "palm_detection_relation_valid_width_min",
					"value": 0
				},
				{
					"name": "palm_detection_relation_valid_width_max",
					"value": 0
				},
				{
					"name": "palm_detection_relation_max",
					"value": 0
				},
				{
					"name": "relation_hyst",
					"value": 0
				},
				{
					"name": "palm_detection_size_valid_width_min",
					"value": 0
				},
				{
					"name": "palm_detection_size_valid_width_max",
					"value": 0
				},
				{
					"name": "palm_detection_size_max",
					"value": 0
				},
				{
					"name": "size_hyst",
					"value": 0
				},
				{
					"name": "blew_iir_debounce",
					"value": 0
				},
				{
					"name": "blew_last_ch_iir_low_th",
					"value": 0
				},
				{
					"name": "blew_last_ch_block_num_th",
					"value": 0
				},
				{
					"name": "blew_delay_frame",
					"value": 0
				},
				{
					"name": "blew_wet_th",
					"value": 0
				},
				{
					"name": "esd_block_iir_th",
					"value": 0
				},
				{
					"name": "finger_debounce_lgd",
					"value": 0
				},
				{
					"name": "finger_debounce_nor",
					"value": 0
				},
				{
					"name": "finger_size_decrease_block",
					"value": 0
				},
				{
					"name": "finger_size_decrease_timer",
					"value": 0
				},
				{
					"name": "big_small_mut_thpx_lgd",
					"value": 0
				},
				{
					"name": "big_small_weg_thpx",
					"value": 0
				},
				{
					"name": "big_small_2nd_pt_block",
					"value": 0
				},
				{
					"name": "big_small_pt_block_diff",
					"value": 0
				},
				{
					"name": "big_small_delay_frame",
					"value": 0
				},
				{
					"name": "pull_bar_detection_area",
					"value": 0
				},
				{
					"name": "pull_bar_detection_frame",
					"value": 0
				},
				{
					"name": "one_block_wet_th",
					"value": 0
				},
				{
					"name": "vr_diff_avg_gap",
					"value": 0
				},
				{
					"name": "mut_thpx_earphone_add",
					"value": 0
				},
				{
					"name": "thumb_weighting",
					"value": 0
				},
				{
					"name": "thumb_decrease_weight",
					"value": 0
				},
				{
					"name": "thumb_weighting_bottom",
					"value": 0
				},
				{
					"name": "thumb_decrease_weight_bottom",
					"value": 0
				},
				{
					"name": "thumb_flying_line_keep",
					"value": 0
				},
				{
					"name": "bottom_side_distance",
					"value": 0
				},
				{
					"name": "reserve_174",
					"value": 0
				},
				{
					"name": "reserve_175",
					"value": 0
				},
				{
					"name": "wtr_bor_max_wet_ord_and_offset",
					"value": 0
				},
				{
					"name": "total_tx_num",
					"value": 0
				},
				{
					"name": "total_rx_num",
					"value": 0
				},
				{
					"name": "tx_ic_num",
					"value": 0
				},
				{
					"name": "rx_ic_num",
					"value": 0
				},
				{
					"name": "reserve_17b",
					"value": 0
				},
				{
					"name": "reserve_17c",
					"value": 0
				},
				{
					"name": "reserve_17d",
					"value": 0
				},
				{
					"name": "reserve_17e",
					"value": 0
				},
				{
					"name": "reserve_17F",
					"value": 0
				}
			],
			"TP_HW_CONFIG_1_AUTO_SELF":
			[
				{
					"name": "short_high_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "short_low_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "open_high_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "open_low_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "micro_open_high_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "micro_open_low_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "noise_high_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "noise_low_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "rawdata_short",
					"size": "2",
					"value": "0"
				},
				{
					"name": "rawdata_open",
					"size": "2",
					"value": "0"
				},
				{
					"name": "fail_ponit",
					"size": "1",
					"value": "0"
				},
				{
					"name": "frame_base",
					"size": "1",
					"value": "0"
				},
				{
					"name": "unused_channel",
					"size": "2",
					"value": "0"
				}
			],
			"TP_P2P_TABLE":
			[
				{
					"value":""
				}
			],
			"TP_VERSION_TABLE":
			[
				{
					"name": "Master",
					"value":""
				},
				{
					"name": "Auto_Self",
					"value":""
				},
				{
					"name": "Osc_Tracking",
					"value":""
				},
				{
					"name": "Hopping",
					"value":""
				},
				{
					"name": "Tapping",
					"value":""
				},
				{
					"name": "Palm",
					"value":""
				},
				{
					"name": "Baseline",
					"value":""
				},
				{
					"name": "Recal",
					"value":""
				},
				{
					"name": "Gamma",
					"value":""
				},
				{
					"name": "Ghost_Point",
					"value":""
				},
				{
					"name": "Fail_Detect",
					"value":""
				},
				{
					"name": "ESD",
					"value":""
				},
				{
					"name": "Reload_Cmd",
					"value":""
				},
				{
					"name": "MPFW",
					"value":""
				},
				{
					"name": "GAS",
					"value":""
				},
				{
					"name": "HX_ID_Pro",
					"value":""
				},
				{
					"name": "Safe_Mode",
					"value":""
				},
				{
					"name": "Glove",
					"value":""
				},
				{
					"name": "Tsix",
					"value":""
				},
				{
					"name": "Emi_idle",
					"value":""
				},
				{
					"name": "TPS",
					"value":""
				},
				{
					"name": "Rawdata_out",
					"value":""
				},
				{
					"name": "Normalize",
					"value":""
				},
				{
					"name": "LPWUG",
					"value":""
				}
			]
		}';
		
		return $data;
	}
	
	
	public function Create_parse_table_pa0402(){
		// Create table information...
		$data["PTABLE"] = '{
			"FLASH_FUNC": 
			[
				{
					"class": "alg_2", 
					"name": "Edge_Trigger_FUNC_v3",
					"value": 0,
					"bit": 0
				},
				{
					"class": "alg_2", 
					"name": "BORDER_ENHANCE",
					"value": 0,
					"bit": 1
				},
				{
					"class": "alg_2", 
					"name": "RATIO_PALM",
					"value": 0,
					"bit": 2
				},
				{
					"class": "alg_2", 
					"name": "FCA_PROTOCOL",
					"value": 0,
					"bit": 3
				},
				{
					"class": "alg_2", 
					"name": "ATMEL_PROTOCOL",
					"value": 0,
					"bit": 4
				},
				{
					"class": "alg_2", 
					"name": "CASCADE_RELOAD_CHECK",
					"value": 0,
					"bit": 5
				},
				{
					"class": "alg_2", 
					"name": "FW_RELOAD_8_WIRE",
					"value": 0,
					"bit": 6
				},
				{
					"class": "alg_2", 
					"name": "FLASH_RECORD_FUNCTION",
					"value": 0,
					"bit": 7
				},
				{
					"class": "alg_2", 
					"name": "OSD_HINT_FUNCTION",
					"value": 0,
					"bit": 8
				},
				{
					"class": "alg_2", 
					"name": "ESD_DETECTION",
					"value": 0,
					"bit": 9
				},
				{
					"class": "alg_2", 
					"name": "GHOST_PROTECTION_TSIX",
					"value": 0,
					"bit": 10
				},
				{
					"class": "alg_2", 
					"name": "PALM_RECOVERY",
					"value": 0,
					"bit": 11
				},
				{
					"class": "alg_2", 
					"name": "NEW_GRAVITY",
					"value": 0,
					"bit": 12
				},
				{
					"class": "alg_2", 
					"name": "EMI_IDLE_MODE",
					"value": 0,
					"bit": 13
				},
				{
					"class": "mpfw",
					"name": "MPFW_SELT_TEST",
					"value": 0,
					"bit": 0
				},
				{
					"class": "mpfw",
					"name": "MPFW_SORTING_TEST",
					"value": 0,
					"bit": 1
				},
				{
					"class": "mpfw",
					"name": "MPFW_SHORT_TEST",
					"value": 0,
					"bit": 2
				},
				{
					"class": "mpfw",
					"name": "MPFW_OPEN_TEST",
					"value": 0,
					"bit": 3
				},
				{
					"class": "mpfw",
					"name": "MPFW_MICRO_OPEN_TEST",
					"value": 0,
					"bit": 4
				},
				{
					"class": "mpfw",
					"name": "MPFW_DOZE_TEST",
					"value": 0,
					"bit": 5
				},
				{
					"class": "mpfw",
					"name": "MPFW_LPWUG_TEST",
					"value": 0,
					"bit": 6
				},
				{
					"class": "mpfw",
					"name": "MPFW_LPWUG_IDLE_TEST",
					"value": 0,
					"bit": 7
				},
				{
					"class": "mpfw",
					"name": "MPFW_ULTRA_LOW_POWER_TEST",
					"value": 0,
					"bit": 8
				},
				{
					"class": "mpfw",
					"name": "MPFW_LOAD_OPEN_TEST",
					"value": 0,
					"bit": 9
				},
				{
					"class": "mpfw",
					"name": "MPFW_WEIGHT_AND_IIR_NEG_NOISE_TEST",
					"value": 0,
					"bit": 10
				},
				{
					"class": "mpfw",
					"name": "AUTO_SELF_TEST_NORMAL",
					"value": 0,
					"bit": 11
				},
				{
					"class": "mpfw",
					"name": "AUTO_SELF_TEST_INSPECT",
					"value": 0,
					"bit": 12
				},
				{
					"class": "clib",
					"name": "LONGV_MODE",
					"value": 0,
					"bit": 0
				}, 
				{
					"class": "clib",
					"name": "LFD_HZ_REF_MS",
					"value": 0,
					"bit": 1
				}, 
				{
					"class": "clib",
					"name": "DD_OSC_TRACKING_ENABLE_UADJ",
					"value": 0,
					"bit": 2
				},
				{
					"class": "clib",
					"name": "OSC_TRACKING_BURST_MODE",
					"value": 0,
					"bit": 3
				},
				{
					"class": "clib",
					"name": "OSC_TRACKING_LINE_COUNTER",
					"value": 0,
					"bit": 4
				},
				{
					"class": "clib",
					"name": "OSC_TRACKING_ENABLE_GOLDEN_LIMIT",
					"value": 0,
					"bit": 5
				},
				{
					"class": "clib",
					"name": "BOOTLOADER_EXT_OSD",
					"value": 0,
					"bit": 6
				},
				{
					"class": "clib",
					"name": "RAWDATA_BY_EVENTSTACK",
					"value": 0,
					"bit": 7
				},
				{
					"class": "clib",
					"name": "DEFAULT_SENSE_MODE",
					"value": 0,
					"bit": 8
				},
				{
					"class": "clib",
					"name": "TOUCH_MONITOR",
					"value": 0,
					"bit": 9
				},
				{
					"class": "clib",
					"name": "CASCADE_CHECKSUM",
					"value": 0,
					"bit": 10
				},
				{
					"class": "clib",
					"name": "FD_FAIL_SIMULATION",
					"value": 0,
					"bit": 11
				},								
				{
					"class": "alg",
					"name": "GLOVE_FUNCTION_DEF",
					"value":  0,
					"bit": 0
				},
				{
					"class": "alg",
					"name": "BMW_PROTOCOL",
					"value":  0,
					"bit": 1
				},
				{
					"class": "alg",
					"name": "PARTIAL_PALM",
					"value":  0,
					"bit": 2
				},
				{
					"class": "alg",
					"name": "HOVER_PALM",
					"value":  0,
					"bit": 3
				},
				{
					"class": "alg",
					"name": "TOUCH_WORK_AS_PALM_LEAVE",
					"value":  0,
					"bit": 4
				},
				{
					"class": "alg",
					"name": "MEAN_FILTER_2_FRAMES",
					"value":  0,
					"bit": 5
				},
				{
					"class": "alg",
					"name": "MEAN_FILTER_WHEN_TOUCH",
					"value":  0,
					"bit": 6
				},
				{
					"class": "alg",
					"name": "TX_HOPPING_DEF",
					"value":  0,
					"bit": 7
				},	
				{
					"class": "alg",
					"name": "TX_RX_REVERSE",
					"value":  0,
					"bit": 8
				},
				{
					"class": "alg",
					"name": "FAST_BASELINE",
					"value":  0,
					"bit": 9
				},
				{
					"class": "alg",
					"name": "COORDINATE_INETERPOLATION",
					"value":  0,
					"bit": 10
				},
				{
					"class": "alg",
					"name": "HUNGARIAN",
					"value":  0,
					"bit": 11
				},
				{
					"class": "alg",
					"name": "XY_JITTER",
					"value":  0,
					"bit": 12
				},
				{
					"class": "alg",
					"name": "SAFE_MODE_LOCK",
					"value":  0,
					"bit": 13
				},
				{
					"class": "alg",
					"name": "RAW_DATA_RAM",
					"value":  0,
					"bit": 14
				},
				{
					"class": "alg",
					"name": "FW_FAIL_DETECTION",
					"value":  0,
					"bit": 15
				},
				{
					"class": "alg",
					"name": "USE_CCM",
					"value":  0,
					"bit": 16
				},
				{
					"class": "alg",
					"name": "VIRTUAL_BLOCK",
					"value":  0,
					"bit": 17
				},
				{
					"class": "alg",
					"name": "CO_AXIS_FILTER2",
					"value":  0,
					"bit": 18
				},
				{
					"class": "alg",
					"name": "DSP_FAST_MODE",
					"value":  0,
					"bit": 19
				},
				{
					"class": "alg",
					"name": "GLOVE_DETECT_WHEN_NORMAL",
					"value":  0,
					"bit": 20
				},
				{
					"class": "alg",
					"name": "FD_STACK_REPORT",
					"value":  0,
					"bit": 21
				},
				{
					"class": "alg",
					"name": "FINGER_SEPARATE_DEBOUNCE",
					"value":  0,
					"bit": 22
				},
				{
					"class": "alg",
					"name": "AUTOMOBILE_EN",
					"value":  0,
					"bit": 23
				},
				{
					"class": "alg",
					"name": "SAME_COORD_DISABLE",
					"value":  0,
					"bit": 24
				},
				{
					"class": "alg",
					"name": "PURE_DIFF_DO_CCL",
					"value":  0,
					"bit": 27
				},
				{
					"class": "alg",
					"name": "RECAL_HOLD",
					"value":  0,
					"bit": 28
				},
				{
					"class": "alg",
					"name": "NEW_WEIGHTING_FILTER",
					"value":  0,
					"bit": 29
				},
				{
					"class": "alg",
					"name":	"HX_PROTOCOL_ID",
					"value": 0,
					"bit": 30
				},
				{
					"class": "alg",
					"name":	"DA_PROTOCOL",
					"value": 0,
					"bit": 31
				},
				{
					"class": "display",
					"name":	"DD_INIT_REQ_INIT_CODE",
					"value": 0,
					"bit": 0
				},
				{
					"class": "display",
					"name":	"DD_INIT_REQ_WORKAROUND",
					"value": 0,
					"bit": 1
				},
				{
					"class": "display",
					"name":	"VIDEO_GEN",
					"value": 0,
					"bit": 2
				},
				{
					"class": "display",
					"name":	"DD_GAMMA_UPDATE",
					"value": 0,
					"bit": 4
				},
				{
					"class": "display",
					"name":	"DYNAMIC_OSC_EN",
					"value": 0,
					"bit": 5
				},
				{
					"class": "display",
					"name":	"USE_1129_COMMAND",
					"value": 0,
					"bit": 7
				},
				{
					"class": "display",
					"name":	"POLLING_DISP",
					"value": 0,
					"bit": 8
				},
				{
					"class": "display",
					"name":	"GAS_INT_RST",
					"value": 0,
					"bit": 9
				},
				{
					"class": "display",
					"name":	"ESD_BIST_SOLUTION",
					"value": 0,
					"bit": 10
				},
				{
					"class": "display",
					"name":	"SLEEPOUT_TP_RESET",
					"value": 0,
					"bit": 11
				},
				{
					"class": "display",
					"name":	"DSAMPLE_RESCUE_DDRST_1TIMES",
					"value": 0,
					"bit": 12
				},
				{
					"class": "display",
					"name":	"DD_UPDATE_VCOM_FROM_FLASH_WHEN_PO",
					"value": 0,
					"bit": 13
				},
				{
					"class": "display",
					"name":	"DD_UPDATE_AGMA_FROM_FLASH_WHEN_PO",
					"value": 0,
					"bit": 14
				},
				{
					"class": "display",
					"name":	"DD_UPDATE_DGMA_FROM_FLASH_WHEN_PO",
					"value": 0,
					"bit": 15
				},
				{
					"class": "display",
					"name":	"DD_DYNAMIC_UPDATE_VCOM_BY_HOST",
					"value": 0,
					"bit": 16
				},
				{
					"class": "display",
					"name":	"DD_DYNAMIC_UPDATE_AGMA_BY_HOST",
					"value": 0,
					"bit": 17
				},
				{
					"class": "display",
					"name":	"DD_DYNAMIC_UPDATE_DGMA_BY_HOST",
					"value": 0,
					"bit": 18
				},
				{
					"class": "display",
					"name":	"DD_REG_RW_BY_SRAM",
					"value": 0,
					"bit": 19
				},
				{
					"class": "display",
					"name":	"DD_ROM_WITH_DD_INIT",
					"value": 0,
					"bit": 20
				},
				{
					"class": "display",
					"name":	"TPS_DYNAMIC_UPDATE_VCOM",
					"value": 0,
					"bit": 21
				},
				{
					"class": "display",
					"name":	"TPS_DYNAMIC_UPDATE_AGMA",
					"value": 0,
					"bit": 22
				},
				{
					"class": "display",
					"name":	"TPS_DYNAMIC_UPDATE_DGMA",
					"value": 0,
					"bit": 23
				}
			],
			"FLASH_HEADER": 
			[
				{
					"name": "username",
					"value": ""
				},
				{
					"name": "time",
					"value": ""
				},
				{
					"name": "ic_sign",
					"value": ""
				},
				{
					"name": "commit_no",
					"value": ""
				},
				{
					"name": "hxds_ver",
					"value": ""
				},
				{
					"name": "checksumadded_ver",
					"value": ""
				},
				{
					"name":"rom_code_ver",
					"value": ""
				},
				{
					"name": "cfg_cid",
					"value": ""
				},
				{
					"name":"cfg_cust",
					"value": ""
				},
				{
					"name": "cfg_proj",
					"value": ""
				},
				{
					"name": "cfg_date",
					"value": ""
				},
				{
					"name":"cfg_sign",
					"value": ""
				},
				{
					"name": "cfg_fw",
					"value": ""
				},
				{
					"name": "cfg_fw_major",
					"value": ""
				},
				{
					"name": "cfg_fw_minor",
					"value": ""
				},
				{
					"name": "cfg_himax_ticket",
					"value": ""
				}
			],
			"TP_HW_CONFIG_1_COD_FW_CONFIG": 
			[
					{
						"name": "cfg_version",
						"value": 0
					},
					{
						"name": "display_version",
						"value": 0
					},
					{
						"name": "algorithm_en_set_1",
						"value": 0
					},
					{
						"name": "algorithm_en_set_2",
						"value": 0
					},
					{
						"name": "algorithm_en_set_3",
						"value": 0
					},
					{
						"name": "que_osc_sel",
						"value": 0
					},
					{
						"name": "touch_mode",
						"value": 0
					},
					{
						"name": "idle_report_rate",
						"value": 0
					},
					{
						"name": "mut_iir_lgd",
						"value": 0
					},
					{
						"name": "mut_thpx_nor",
						"value": 0
					},
					{
						"name": "mut_thpx_lgd",
						"value": 0
					},
					{
						"name": "mut_thpx_ac",
						"value": 0
					},
					{
						"name": "recal_thpx",
						"value": 0
					},
					{
						"name": "lpw_active_thpx",
						"value": 0
					},
					{
						"name": "lpw_1cycle_thpx",
						"value": 0
					},
					{
						"name": "raw_downscale",
						"value": 0
					},
					{
						"name": "weg_thpx_1st_noise_add",
						"value": 0
					},
					{
						"name": "weg_thpx_1st_area1_add",
						"value": 0
					},
					{
						"name": "weg_thpx_1st_area3_add",
						"value": 0
					},
					{
						"name": "weg_rx_area_1",
						"value": 0
					},
					{
						"name": "weg_rx_area_2",
						"value": 0
					},
					{
						"name": "cc_downscale",
						"value": 0
					},
					{
						"name": "weg_thpx_1st_lgd",
						"value": 0
					},
					{
						"name": "weg_thpx_1st_nor",
						"value": 0
					},
					{
						"name": "weg_thpx_1st_ac",
						"value": 0
					},
					{
						"name": "normal_idle_thpx",
						"value": 0
					},
					{
						"name": "wet_thpc_1st_ent_lpwug",
						"value": 0
					},
					{
						"name": "moving_jitter_x",
						"value": 0
					},
					{
						"name": "moving_jitter_y",
						"value": 0
					},
					{
						"name": "tap_const_frm",
						"value": 0
					},
					{
						"name": "tap_dis_pr",
						"value": 0
					},
					{
						"name": "first_jitter_x",
						"value": 0
					},
					{
						"name": "first_jitter_y",
						"value": 0
					},
					{
						"name": "avg_ord",
						"value": 0
					},
					{
						"name": "avg_dyc",
						"value": 0
					},
					{
						"name": "mut_plam_frame",
						"value": 0
					},
					{
						"name": "mut_rej_blk",
						"value": 0
					},
					{
						"name": "mut_palm_blk",
						"value": 0
					},
					{
						"name": "mut_rej_blk_lgd",
						"value": 0
					},
					{
						"name": "mut_palm_blk_lg",
						"value": 0
					},
					{
						"name": "mut_lrg_blk",
						"value": 0
					},
					{
						"name": "fig_siz_set",
						"value": 0
					},
					{
						"name": "avg_iir_min",
						"value": 0
					},
					{
						"name": "pt_ent_num_2nd",
						"value": 0
					},
					{
						"name": "pt_ent_num",
						"value": 0
					},
					{
						"name": "pt_lev_num",
						"value": 0
					},
					{
						"name": "pt_lev_num_lpwug",
						"value": 0
					},
					{
						"name": "acc_outer_wet_area_cnt",
						"value": 0
					},
					{
						"name": "mut_ccl_ord_l",
						"value": 0
					},
					{
						"name": "mut_ccl_ord_d",
						"value": 0
					},
					{
						"name": "mut_ccl_ord_s",
						"value": 0
					},
					{
						"name": "mut_ccl_dis",
						"value": 0
					},
					{
						"name": "mut_ccl_ord_lgd_l",
						"value": 0
					},
					{
						"name": "mut_ccl_ord_lgd_d",
						"value": 0
					},
					{
						"name": "recal_tm",
						"value": 0
					},
					{
						"name": "bas_udt_tm",
						"value": 0
					},
					{
						"name": "idl_mod_tm",
						"value": 0
					},
					{
						"name": "lpwug_idl_mod_tm",
						"value": 0
					},
					{
						"name": "idl_lev_udt_tm",
						"value": 0
					},
					{
						"name": "idl_tm_scale",
						"value": 0
					},
					{
						"name": "osr_hop_thx",
						"value": 0
					},
					{
						"name": "stop_point_count",
						"value": 0
					},
					{
						"name": "startup_frm",
						"value": 0
					},
					{
						"name": "sleep_out_cc",
						"value": 0
					},
					{
						"name": "lpwug_cc",
						"value": 0
					},
					{
						"name": "idle_cc",
						"value": 0
					},
					{
						"name": "startup_cc",
						"value": 0
					},
					{
						"name": "ac_mode_cc",
						"value": 0
					},
					{
						"name": "gc_fir_cc",
						"value": 0
					},
					{
						"name": "idle_lpwug_cc",
						"value": 0
					},
					{
						"name": "co_axis_div",
						"value": 0
					},
					{
						"name": "co_axis_div_ac",
						"value": 0
					},
					{
						"name": "co_axis_div_bigarea",
						"value": 0
					},
					{
						"name": "co_axis_div_f1",
						"value": 0
					},
					{
						"name": "hopping_another_delay",
						"value": 0
					},
					{
						"name": "noise_jitter",
						"value": 0
					},
					{
						"name": "big_area_jitter",
						"value": 0
					},
					{
						"name": "game_mode_jitter",
						"value": 0
					},
					{
						"name": "normal_idle_leave_neg_thx",
						"value": 0
					},
					{
						"name": "lpwug_idle_sum_thpx",
						"value": 0
					},
					{
						"name": "sw_tsix_low_period",
						"value": 0
					},
					{
						"name": "sw_tsix_delay_frame",
						"value": 0
					},
					{
						"name": "min_diff",
						"value": 0
					},
					{
						"name": "ghost_dbg_oe_l",
						"value": 0
					},
					{
						"name": "ghost_dbg_oe_h",
						"value": 0
					},
					{
						"name": "mut_thpx_sen_l2",
						"value": 0
					},
					{
						"name": "mut_thpx_sen_l3",
						"value": 0
					},
					{
						"name": "weg_thpx_1st_sen_l2",
						"value": 0
					},
					{
						"name": "weg_thpx_1st_sen_l3",
						"value": 0
					},
					{
						"name": "iq_sum_shift_lpwug_idle",
						"value": 0
					},
					{
						"name": "knob_size_num",
						"value": 0
					},
					{
						"name": "wtr_ent_num",
						"value": 0
					},
					{
						"name": "recal_count",
						"value": 0
					},
					{
						"name": "recal_distance",
						"value": 0
					},
					{
						"name": "recal_count_scale",
						"value": 0
					},
					{
						"name": "recal_distance_scale",
						"value": 0
					},
					{
						"name": "reserve_60",
						"value": 0
					},
					{
						"name": "palm_recovery_count",
						"value": 0
					},
					{
						"name": "mkey_num",
						"value": 0
					},
					{
						"name": "mkey_tx_chn",
						"value": 0
					},
					{
						"name": "mkey_dc_cc",
						"value": 0
					},
					{
						"name": "mkey_mut_thx",
						"value": 0
					},
					{
						"name": "mkey_addr_0",
						"value": 0
					},
					{
						"name": "dc_diff_detect_update_ratio",
						"value": 0
					},
					{
						"name": "bank_search_extend_ratio",
						"value": 0
					},
					{
						"name": "f1_bnk_lmt_rng",
						"value": 0
					},
					{
						"name": "f0_bnk_lmt_rng",
						"value": 0
					},
					{
						"name": "bs_delay_frame_recal",
						"value": 0
					},
					{
						"name": "bnk_seh_lat_lpwug",
						"value": 0
					},
					{
						"name": "bs_delay_frame_lpwug",
						"value": 0
					},
					{
						"name": "bnk_seh_lat",
						"value": 0
					},
					{
						"name": "bs_delay_frame",
						"value": 0
					},
					{
						"name": "single_rx_max",
						"value": 0
					},
					{
						"name": "single_tx_max",
						"value": 0
					},
					{
						"name": "pb_num",
						"value": 0
					},
					{
						"name": "algorithm_en_set_5",
						"value": 0
					},
					{
						"name": "algorithm_en_set_4",
						"value": 0
					},
					{
						"name": "mut_null_blk",
						"value": 0
					},
					{
						"name": "rx_pix_h",
						"value": 0
					},
					{
						"name": "rx_pix_l",
						"value": 0
					},
					{
						"name": "tx_pix_h",
						"value": 0
					},
					{
						"name": "tx_pix_l",
						"value": 0
					},
					{
						"name": "weg_thpx_2nd_lgd",
						"value": 0
					},
					{
						"name": "weg_thpx_2nd_nor",
						"value": 0
					},
					{
						"name": "weg_thpx_2nd_ac",
						"value": 0
					},
					{
						"name": "weg_thpx_2nd_nois_add",
						"value": 0
					},
					{
						"name": "weg_thpx_3rd_lgd",
						"value": 0
					},
					{
						"name": "weg_thpx_3rd_nor",
						"value": 0
					},
					{
						"name": "weg_thpx_3rd_ac",
						"value": 0
					},
					{
						"name": "weg_thpx_3rd_nois_add",
						"value": 0
					},
					{
						"name": "ghost_frame_level3",
						"value": 0
					},
					{
						"name": "palm_detection_en",
						"value": 0
					},
					{
						"name": "finger_width_min",
						"value": 0
					},
					{
						"name": "finger_width_max",
						"value": 0
					},
					{
						"name": "palm_detection_length_min",
						"value": 0
					},
					{
						"name": "palm_detection_length_max",
						"value": 0
					},
					{
						"name": "width_length_hyst",
						"value": 0
					},
					{
						"name": "palm_detection_relation_valid_width_min",
						"value": 0
					},
					{
						"name": "palm_detection_relation_valid_width_max",
						"value": 0
					},
					{
						"name": "palm_detection_relation_max",
						"value": 0
					},
					{
						"name": "relation_hyst",
						"value": 0
					},
					{
						"name": "palm_detection_size_valid_width_min",
						"value": 0
					},
					{
						"name": "palm_detection_size_valid_width_max",
						"value": 0
					},
					{
						"name": "palm_detection_size_max",
						"value": 0
					},
					{
						"name": "size_hyst",
						"value": 0
					},
					{
						"name": "ghost_detect_period_ms",
						"value": 0
					},
					{
						"name": "vsync_target_l",
						"value": 0
					},
					{
						"name": "vsync_target_h",
						"value": 0
					},
					{
						"name": "gc_poly_tx1e_l",
						"value": 0
					},
					{
						"name": "gc_poly_tx0e",
						"value": 0
					},
					{
						"name": "ghost_frame_level1",
						"value": 0
					},
					{
						"name": "ghost_frame_level2",
						"value": 0
					},
					{
						"name": "knob_dent",
						"value": 0
					},
					{
						"name": "normal_idle_enter_frame",
						"value": 0
					},
					{
						"name": "fail_det_pin_sel",
						"value": 0
					},
					{
						"name": "fail_det_mode_sel",
						"value": 0
					},
					{
						"name": "lpwug_frame_rate",
						"value": 0
					},
					{
						"name": "lpwug_idle_frame_rate",
						"value": 0
					},
					{
						"name": "adc_front_l",
						"value": 0
					},
					{
						"name": "adc_back_l",
						"value": 0
					},
					{
						"name": "adc_front_r",
						"value": 0
					},
					{
						"name": "adc_back_r",
						"value": 0
					},
					{
						"name": "line_shift_type",
						"value": 0
					},
					{
						"name": "line_shift_start",
						"value": 0
					},
					{
						"name": "line_shift_number",
						"value": 0
					},
					{
						"name": "line_shift_updated_frame",
						"value": 0
					},
					{
						"name": "neg_sum",
						"value": 0
					},
					{
						"name": "neg_block",
						"value": 0
					},
					{
						"name": "esd_cyc_noise_pthpx",
						"value": 0
					},
					{
						"name": "esd_max_sensed_block_l",
						"value": 0
					},
					{
						"name": "esd_max_sensed_block_h",
						"value": 0
					},
					{
						"name": "one_sen_block_iir_thpx",
						"value": 0
					},
					{
						"name": "one_sen_block_frame",
						"value": 0
					},
					{
						"name": "algorithm_en_set_automobile",
						"value": 0
					},
					{
						"name": "reserve_ae",
						"value": 0
					},
					{
						"name": "algorithm_en_set_automobile2",
						"value": 0
					},
					{
						"name": "algorithm_en_set_automobile3",
						"value": 0
					},
					{
						"name": "algorithm_en_set_automobile4",
						"value": 0
					},
					{
						"name": "glove_thpx",
						"value": 0
					},
					{
						"name": "glove_key_thx",
						"value": 0
					},
					{
						"name": "glove_weg_thpx_ent",
						"value": 0
					},
					{
						"name": "glove_cc",
						"value": 0
					},
					{
						"name": "glove_palm_blk",
						"value": 0
					},
					{
						"name": "glove_ent_lev_frm",
						"value": 0
					},
					{
						"name": "glove_ent_sel",
						"value": 0
					},
					{
						"name": "glove_ent_ulmt",
						"value": 0
					},
					{
						"name": "glove_ent_dlmt",
						"value": 0
					},
					{
						"name": "glove_ent_fng_lev_tm",
						"value": 0
					},
					{
						"name": "glove_ent_bd_rng",
						"value": 0
					},
					{
						"name": "glove_ent_weg_thx",
						"value": 0
					},
					{
						"name": "glove_ent_rng",
						"value": 0
					},
					{
						"name": "glove_lev_mod_frm",
						"value": 0
					},
					{
						"name": "wtr_dev_thx",
						"value": 0
					},
					{
						"name": "wtr_elm_wgt",
						"value": 0
					},
					{
						"name": "wtr_ent_lev_tm",
						"value": 0
					},
					{
						"name": "wtr_ccl_ord",
						"value": 0
					},
					{
						"name": "wtr_palm_check_thx",
						"value": 0
					},
					{
						"name": "x_debug_pos",
						"value": 0
					},
					{
						"name": "noise_sum_shift",
						"value": 0
					},
					{
						"name": "dummy_dma_shift_f0",
						"value": 0
					},
					{
						"name": "dummy_dma_shift_f1",
						"value": 0
					},
					{
						"name": "hopping_noise_cc",
						"value": 0
					},
					{
						"name": "hopping_thx",
						"value": 0
					},
					{
						"name": "hopping_thx_f1",
						"value": 0
					},
					{
						"name": "enter_noise_thx",
						"value": 0
					},
					{
						"name": "enter_noise_thx_f1",
						"value": 0
					},
					{
						"name": "exit_noise_frm",
						"value": 0
					},
					{
						"name": "osc_tracking_5_dd_frame",
						"value": 0
					},
					{
						"name": "hopping_bl_update_frm",
						"value": 0
					},
					{
						"name": "ac_iir_level",
						"value": 0
					},
					{
						"name": "hopping_cc",
						"value": 0
					},
					{
						"name": "noise_cc",
						"value": 0
					},
					{
						"name": "rawdata_normalize_target_f0_L",
						"value": 0
					},
					{
						"name": "rawdata_normalize_target_f0_H",
						"value": 0
					},
					{
						"name": "rawdata_normalize_target_f1_L",
						"value": 0
					},
					{
						"name": "rawdata_normalize_target_f1_H",
						"value": 0
					},
					{
						"name": "db_clk_rng_tolerance",
						"value": 0
					},
					{
						"name": "x_y_pix_thr",
						"value": 0
					},
					{
						"name": "gesture_small_x_y_size",
						"value": 0
					},
					{
						"name": "gesture_border_delta_x_y",
						"value": 0
					},
					{
						"name": "bs_neg_limit_ratio",
						"value": 0
					},
					{
						"name": "target_limit_ratio",
						"value": 0
					},
					{
						"name": "hov_blk_rng",
						"value": 0
					},
					{
						"name": "hov_avg_ulmt",
						"value": 0
					},
					{
						"name": "hov_avg_dlmt",
						"value": 0
					},
					{
						"name": "hov_max_thx",
						"value": 0
					},
					{
						"name": "hov_thx_scale",
						"value": 0
					},
					{
						"name": "stylus_ent_ulmt",
						"value": 0
					},
					{
						"name": "stylus_ent_dlmt",
						"value": 0
					},
					{
						"name": "stylus_ent_weg_ulmt",
						"value": 0
					},
					{
						"name": "stylus_ent_weg_dlmt",
						"value": 0
					},
					{
						"name": "oppo_inner_to_border_interval_distance",
						"value": 0
					},
					{
						"name": "oppo_border_extend_coor_dis_y",
						"value": 0
					},
					{
						"name": "oppo_extend_keep_detect_frm",
						"value": 0
					},
					{
						"name": "border_extend_inner_to_border_thr",
						"value": 0
					},
					{
						"name": "center_x_y_pix",
						"value": 0
					},
					{
						"name": "virtual_shift_border_long",
						"value": 0
					},
					{
						"name": "virtual_shift_border_short",
						"value": 0
					},
					{
						"name": "virtual_shift_corner12",
						"value": 0
					},
					{
						"name": "virtual_shift_corner34",
						"value": 0
					},
					{
						"name": "tcon_reg_tbs_ctrl",
						"value": 0
					},
					{
						"name": "tcon_reg_tbs_ctrl_delay_b0",
						"value": 0
					},
					{
						"name": "tcon_reg_tbs_ctrl_delay_b1",
						"value": 0
					},
					{
						"name": "tcon_reg_tbs_ctrl_delay_b2",
						"value": 0
					},
					{
						"name": "tcon_reg_tbs_ctrl_delay_b3",
						"value": 0
					},
					{
						"name": "tcon_reg_set_vr_ctrl",
						"value": 0
					},
					{
						"name": "tcon_reg_dac_ctrl",
						"value": 0
					},
					{
						"name": "tcon_ptc_multi_dac_ctrl_en",
						"value": 0
					},
					{
						"name": "tcon_ptc_dac_init_value",
						"value": 0
					},
					{
						"name": "tcon_reg_dac_high_value",
						"value": 0
					},
					{
						"name": "tcon_reg_dac_low_value",
						"value": 0
					},
					{
						"name": "mixer_ctrl_b0",
						"value": 0
					},
					{
						"name": "mixer_ctrl_b1",
						"value": 0
					},
					{
						"name": "tcon_reg_dac_comp_p",
						"value": 0
					},
					{
						"name": "tcon_reg_dac_comp_n",
						"value": 0
					},
					{
						"name": "tcon_reg_logic_en",
						"value": 0
					},
					{
						"name": "lpwug_freq",
						"value": 0
					},
					{
						"name": "act_area_left_top_rx_msb",
						"value": 0
					},
					{
						"name": "act_area_left_top_rx_lsb",
						"value": 0
					},
					{
						"name": "act_area_left_top_tx_msb",
						"value": 0
					},
					{
						"name": "act_area_left_top_tx_lsb",
						"value": 0
					},
					{
						"name": "act_area_right_bot_rx_msb",
						"value": 0
					},
					{
						"name": "act_area_right_bot_rx_lsb",
						"value": 0
					},
					{
						"name": "act_area_right_bot_tx_msb",
						"value": 0
					},
					{
						"name": "act_area_right_bot_tx_lsb",
						"value": 0
					},
					{
						"name": "touch_slop_tci1",
						"value": 0
					},
					{
						"name": "touch_slop_tci2",
						"value": 0
					},
					{
						"name": "knock_distance_tci1",
						"value": 0
					},
					{
						"name": "knock_distance_tci2",
						"value": 0
					},
					{
						"name": "time_gap_tci1_msb",
						"value": 0
					},
					{
						"name": "time_gap_tci1_lsb",
						"value": 0
					},
					{
						"name": "time_gap_tci2_msb",
						"value": 0
					},
					{
						"name": "time_gap_tci2_lsb",
						"value": 0
					},
					{
						"name": "total_count_tci1",
						"value": 0
					},
					{
						"name": "total_count_tci2",
						"value": 0
					},
					{
						"name": "int_delay_time_tci1_msb",
						"value": 0
					},
					{
						"name": "int_delay_time_tci1_lsb",
						"value": 0
					},
					{
						"name": "int_delay_time_tci2_msb",
						"value": 0
					},
					{
						"name": "int_delay_time_tci2_lsb",
						"value": 0
					},
					{
						"name": "tci_int_en",
						"value": 0
					},
					{
						"name": "tci_int_status",
						"value": 0
					},
					{
						"name": "pen_num",
						"value": 0
					},
					{
						"name": "pen_x_rx",
						"value": 0
					},
					{
						"name": "pen_x_tx",
						"value": 0
					},
					{
						"name": "pen_y_rx",
						"value": 0
					},
					{
						"name": "pen_y_tx",
						"value": 0
					},
					{
						"name": "reserve_11e",
						"value": 0
					},
					{
						"name": "sort_lfd_sel",
						"value": 0
					},
					{
						"name": "mpfw_vb_short_prechg_first",
						"value": 0
					},
					{
						"name": "mpfw_vb_short_prechg_another",
						"value": 0
					},
					{
						"name": "mpfw_vb_open_prechg_first",
						"value": 0
					},
					{
						"name": "mpfw_vb_open_prechg_another",
						"value": 0
					},
					{
						"name": "mpfw_vb_open_voltage",
						"value": 0
					},
					{
						"name": "mpfw_vb_open_current",
						"value": 0
					},
					{
						"name": "mpfw_vb_open_osr",
						"value": 0
					},
					{
						"name": "mpfw_vb_open_clk2",
						"value": 0
					},
					{
						"name": "mpfw_vb_micro_open_prechg_first",
						"value": 0
					},
					{
						"name": "mpfw_vb_micro_open_prechg_another",
						"value": 0
					},
					{
						"name": "mpfw_vb_micro_open_voltage",
						"value": 0
					},
					{
						"name": "mpfw_vb_micro_open_current",
						"value": 0
					},
					{
						"name": "mpfw_lh_short_prechg",
						"value": 0
					},
					{
						"name": "mpfw_lh_open_prechg",
						"value": 0
					},
					{
						"name": "mpfw_lh_open_voltage",
						"value": 0
					},
					{
						"name": "mpfw_lh_open_current",
						"value": 0
					},
					{
						"name": "mpfw_lh_open_osr",
						"value": 0
					},
					{
						"name": "mpfw_lh_open_clk2",
						"value": 0
					},
					{
						"name": "mpfw_lh_micro_open_prechg",
						"value": 0
					},
					{
						"name": "mpfw_lh_micro_open_voltage",
						"value": 0
					},
					{
						"name": "mpfw_lh_micro_open_current",
						"value": 0
					},
					{
						"name": "mpfw_iq_shift",
						"value": 0
					},
					{
						"name": "mpfw_vb_short_listen_time",
						"value": 0
					},
					{
						"name": "mpfw_vb_open_listen_time",
						"value": 0
					},
					{
						"name": "mpfw_vb_micro_open_listen_time",
						"value": 0
					},
					{
						"name": "mpfw_lh_short_listen_time",
						"value": 0
					},
					{
						"name": "mpfw_lh_open_listen_time",
						"value": 0
					},
					{
						"name": "mpfw_lh_micro_open_listen_time",
						"value": 0
					},
					{
						"name": "reserve_13c",
						"value": 0
					},
					{
						"name": "reserve_13d",
						"value": 0
					},
					{
						"name": "reserve_13e",
						"value": 0
					},
					{
						"name": "mpfw_func_en",
						"value": 0
					},
					{
						"name": "auto_self_test_voltage",
						"value": 0
					},
					{
						"name": "auto_self_test_current",
						"value": 0
					},
					{
						"name": "auto_self_test_unused_ch_l",
						"value": 0
					},
					{
						"name": "auto_self_test_unused_ch_h",
						"value": 0
					},
					{
						"name": "board_protect_ent_weg",
						"value": 0
					},
					{
						"name": "minus_more_cc_wegight_nor",
						"value": 0
					},
					{
						"name": "minus_more_cc_wegight_lgd",
						"value": 0
					},
					{
						"name": "minus_more_cc_base",
						"value": 0
					},
					{
						"name": "reserve_148",
						"value": 0
					},
					{
						"name": "reserve_149",
						"value": 0
					},
					{
						"name": "precision_x",
						"value": 0
					},
					{
						"name": "precision_y",
						"value": 0
					},
					{
						"name": "reserve_14c",
						"value": 0
					},
					{
						"name": "reserve_14d",
						"value": 0
					},
					{
						"name": "reserve_14e",
						"value": 0
					},
					{
						"name": "yin_off_frame",
						"value": 0
					},
					{
						"name": "yin_off_lmt_rng",
						"value": 0
					},
					{
						"name": "finger_size_actual_aa_height",
						"value": 0
					},
					{
						"name": "finger_size_actual_aa_width",
						"value": 0
					},
					{
						"name": "finger_size_upscale_ratio",
						"value": 0
					},
					{
						"name": "lineprevent_max_rng",
						"value": 0
					},
					{
						"name": "lineprevent_dlmt",
						"value": 0
					},
					{
						"name": "lineprevent_ulmt",
						"value": 0
					},
					{
						"name": "lineprevent_cnt",
						"value": 0
					},
					{
						"name": "lineprevent_period",
						"value": 0
					},
					{
						"name": "blew_iir_en",
						"value": 0
					},
					{
						"name": "blew_iir_debounce",
						"value": 0
					},
					{
						"name": "blew_last_ch_iir_low_th",
						"value": 0
					},
					{
						"name": "blew_last_ch_block_num_th",
						"value": 0
					},
					{
						"name": "blew_delay_frame",
						"value": 0
					},
					{
						"name": "blew_wet_th",
						"value": 0
					},
					{
						"name": "esd_block_iir_th",
						"value": 0
					},
					{
						"name": "finger_debounce_lgd",
						"value": 0
					},
					{
						"name": "finger_debounce_nor",
						"value": 0
					},
					{
						"name": "finger_size_decrease_block",
						"value": 0
					},
					{
						"name": "finger_size_decrease_timer",
						"value": 0
					},
					{
						"name": "big_small_mut_thpx_lgd",
						"value": 0
					},
					{
						"name": "big_small_weg_thpx",
						"value": 0
					},
					{
						"name": "big_small_2nd_pt_block",
						"value": 0
					},
					{
						"name": "big_small_pt_block_diff",
						"value": 0
					},
					{
						"name": "big_small_delay_frame",
						"value": 0
					},
					{
						"name": "pull_bar_detection_area",
						"value": 0
					},
					{
						"name": "pull_bar_detection_frame",
						"value": 0
					},
					{
						"name": "one_block_wet_th",
						"value": 0
					},
					{
						"name": "vr_diff_avg_gap",
						"value": 0
					},
					{
						"name": "mut_thpx_earphone_add",
						"value": 0
					},
					{
						"name": "thumb_weighting",
						"value": 0
					},
					{
						"name": "thumb_decrease_weight",
						"value": 0
					},
					{
						"name": "thumb_weighting_bottom",
						"value": 0
					},
					{
						"name": "thumb_decrease_weight_bottom",
						"value": 0
					},
					{
						"name": "thumb_flying_line_keep",
						"value": 0
					},
					{
						"name": "bottom_side_distance",
						"value": 0
					},
					{
						"name": "reserve_174",
						"value": 0
					},
					{
						"name": "reserve_175",
						"value": 0
					},
					{
						"name": "wtr_bor_max_wet_ord_and_wet_offset",
						"value": 0
					},
					{
						"name": "total_rx_num",
						"value": 0
					},
					{
						"name": "total_tx_num",
						"value": 0
					},
					{
						"name": "rx_ic_num",
						"value": 0
					},
					{
						"name": "tx_ic_num",
						"value": 0
					},
					{
						"name": "reserve[0]",
						"value": 0
					},
					{
						"name": "reserve[1]",
						"value": 0
					},
					{
						"name": "reserve[2]",
						"value": 0
					},
					{
						"name": "reserve[3]",
						"value": 0
					},
					{
						"name": "reserve[4]",
						"value": 0
					}

			],
			"TP_HW_CONFIG_1_AUTO_SELF":
			[
				{
					"name": "short_high_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "short_low_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "open_high_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "open_low_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "micro_open_high_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "micro_open_low_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "noise_high_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "noise_low_boundary",
					"size": "2",
					"value": "0"
				},
				{
					"name": "rawdata_short",
					"size": "2",
					"value": "0"
				},
				{
					"name": "rawdata_open",
					"size": "2",
					"value": "0"
				},
				{
					"name": "fail_ponit",
					"size": "1",
					"value": "0"
				},
				{
					"name": "frame_base",
					"size": "1",
					"value": "0"
				},
				{
					"name": "unused_channel",
					"size": "2",
					"value": "0"
				}
			],
			"TP_P2P_TABLE":
			[
				{
					"value":""
				}
			],
			"TP_VERSION_TABLE":
			[
				{
					"name": "Master",
					"value":""
				},
				{
					"name": "Auto_Self",
					"value":""
				},
				{
					"name": "Osc_Tracking",
					"value":""
				},
				{
					"name": "Hopping",
					"value":""
				},
				{
					"name": "Tapping",
					"value":""
				},
				{
					"name": "Palm",
					"value":""
				},
				{
					"name": "Baseline",
					"value":""
				},
				{
					"name": "Recal",
					"value":""
				},
				{
					"name": "Gamma",
					"value":""
				},
				{
					"name": "Ghost_Point",
					"value":""
				},
				{
					"name": "Fail_Detect",
					"value":""
				},
				{
					"name": "ESD",
					"value":""
				},
				{
					"name": "Reload_Cmd",
					"value":""
				},
				{
					"name": "MPFW",
					"value":""
				},
				{
					"name": "GAS",
					"value":""
				},
				{
					"name": "HX_ID_Pro",
					"value":""
				},
				{
					"name": "Safe_Mode",
					"value":""
				},
				{
					"name": "Glove",
					"value":""
				},
				{
					"name": "Tsix",
					"value":""
				},
				{
					"name": "Emi_idle",
					"value":""
				},
				{
					"name": "TPS",
					"value":""
				},
				{
					"name": "Rawdata_out",
					"value":""
				},
				{
					"name": "Normalize",
					"value":""
				},
				{
					"name": "LPWUG",
					"value":""
				}
			]
		}';
		
		return $data;
	}
	
	public function Create_parse_table_pa5738(){
		// Create table information...
		$data["PTABLE"] = '{
			"FLASH_HEADER": 
			[
				{
					"name": "username",
					"value": ""
				},
				{
					"name": "time",
					"value": ""
				},
				{
					"name": "ic_sign",
					"value": ""
				},
				{
					"name": "commit_no",
					"value": ""
				},
				{
					"name": "hxds_ver",
					"value": ""
				},
				{
					"name": "checksumadded_ver",
					"value": ""
				},
				{
					"name":"rom_code_ver",
					"value": ""
				},
				{
					"name": "cfg_cid",
					"value": ""
				},
				{
					"name":"cfg_cust",
					"value": ""
				},
				{
					"name": "cfg_proj",
					"value": ""
				},
				{
					"name": "cfg_date",
					"value": ""
				},
				{
					"name":"cfg_sign",
					"value": ""
				},
				{
					"name": "cfg_fw",
					"value": ""
				},
				{
					"name": "cfg_fw_major",
					"value": ""
				},
				{
					"name": "cfg_fw_minor",
					"value": ""
				},
				{
					"name": "cfg_himax_ticket",
					"value": ""
				}
			],
			"TP_VERSION_TABLE":
			[
				{
					"name": "ALG_major",
					"value":""
				},
				{
					"name": "ALG_minor",
					"value":""
				},
				{
					"name": "Auto_Self",
					"value":""
				},
				{
					"name": "Osc_Tracking",
					"value":""
				},
				{
					"name": "Tapping",
					"value":""
				},
				{
					"name": "Palm",
					"value":""
				},
				{
					"name": "Baseline",
					"value":""
				},
				{
					"name": "Recal",
					"value":""
				},
				{
					"name": "Ghost_Point",
					"value":""
				},		
				{
					"name": "Fail_Detect",
					"value":""
				},				
				{
					"name": "ESD",
					"value":""
				},
				{
					"name": "Reload_Cmd",
					"value":""
				},
				{
					"name": "MPFW",
					"value":""
				},
				{
					"name": "HX_ID_Pro",
					"value":""
				},
				{
					"name": "Safe_Mode",
					"value":""
				},
				{
					"name": "Glove",
					"value":""
				},
				{
					"name": "Tsix",
					"value":""
				},
				{
					"name": "Rawdata_out",
					"value":""
				},
				{
					"name": "Normalize",
					"value":""
				},
				{
					"name": "LPWUG",
					"value":""
				},
				{
					"name": "Flash_Record",
					"value":""
				},
				{
					"name": "Debug_Print",
					"value":""
				}				
			],
			"TP_HW_CONFIG_1_COD_FW_CONFIG": 
			[
					{
						"name": "cfg_version",
						"value": 0
					},
					{
						"name": "fw_version",
						"value": 0
					},
					{
						"name": "algorithm_en_set_1",
						"value": 0
					},
					{
						"name": "algorithm_en_set_2",
						"value": 0
					},
					{
						"name": "algorithm_en_set_3",
						"value": 0
					},
					{
						"name": "que_ord",
						"value": 0
					},
					{
						"name": "curve_rx_offset",
						"value": 0
					},
					{
						"name": "curve_tx_offset",
						"value": 0
					},
					{
						"name": "mut_thr_lgd_to_nor",
						"value": 0
					},
					{
						"name": "mut_thr_nor",
						"value": 0
					},
					{
						"name": "mut_thr_lgd",
						"value": 0
					},
					{
						"name": "leave_mut_thr",
						"value": 0
					},
					{
						"name": "recal_thr",
						"value": 0
					},
					{
						"name": "mut_thpx_palm",
						"value": 0
					},
					{
						"name": "thr_reserve",
						"value": 0
					},
					{
						"name": "raw_downscale",
						"value": 0
					},
					{
						"name": "wgt_thpx",
						"value": 0
					},
					{
						"name": "wgt_thpx_noise",
						"value": 0
					},
					{
						"name": "wet_reserve_0",
						"value": 0
					},
					{
						"name": "weg_rx_area_1",
						"value": 0
					},
					{
						"name": "wet_reserve_1",
						"value": 0
					},
					{
						"name": "wet_reserve_2",
						"value": 0
					},
					{
						"name": "wet_thpx_1st_ent",
						"value": 0
					},
					{
						"name": "wet_thpx_1st_ent_noise",
						"value": 0
					},
					{
						"name": "wet_reserve_3",
						"value": 0
					},
					{
						"name": "normal_idle_leave_pos_thr",
						"value": 0
					},
					{
						"name": "slf_rx_thr",
						"value": 0
					},
					{
						"name": "slf_tx_thr",
						"value": 0
					},
					{
						"name": "slf_bt_thr",
						"value": 0
					},
					{
						"name": "slf_rx_thr_idle",
						"value": 0
					},
					{
						"name": "slf_tx_thr_idle",
						"value": 0
					},
					{
						"name": "slf_bt_thr_idle",
						"value": 0
					},
					{
						"name": "reserve_t0",
						"value": 0
					},
					{
						"name": "reserve_t1",
						"value": 0
					},
					{
						"name": "reserve_t2",
						"value": 0
					},
					{
						"name": "reserve_t3",
						"value": 0
					},
					{
						"name": "mut_lev_plam_frame",
						"value": 0
					},
					{
						"name": "mut_palm_pt_blk_num",
						"value": 0
					},
					{
						"name": "mut_palm_frm_blk_num",
						"value": 0
					},
					{
						"name": "slf_palm_rx_chn_num",
						"value": 0
					},
					{
						"name": "slf_palm_tx_chn_num",
						"value": 0
					},
					{
						"name": "slf_big_area_chn_num",
						"value": 0
					},
					{
						"name": "finger_size_shift",
						"value": 0
					},
					{
						"name": "finger_size_max",
						"value": 0
					},
					{
						"name": "jitter_first",
						"value": 0
					},
					{
						"name": "jitter_moving",
						"value": 0
					},
					{
						"name": "jitter_noise",
						"value": 0
					},
					{
						"name": "jitter_big_area",
						"value": 0
					},
					{
						"name": "reserve_j0",
						"value": 0
					},
					{
						"name": "reserve_j1",
						"value": 0
					},
					{
						"name": "reserve_j2",
						"value": 0
					},
					{
						"name": "reserve_j3",
						"value": 0
					},
					{
						"name": "avg_ord",
						"value": 0
					},
					{
						"name": "avg_dyc",
						"value": 0
					},
					{
						"name": "avg_iir_min",
						"value": 0
					},
					{
						"name": "reserve_a0",
						"value": 0
					},
					{
						"name": "reserve_a1",
						"value": 0
					},
					{
						"name": "reserve_a2",
						"value": 0
					},
					{
						"name": "reserve_a3",
						"value": 0
					},
					{
						"name": "pt_ent_num",
						"value": 0
					},
					{
						"name": "pt_lev_num",
						"value": 0
					},
					{
						"name": "pt_ent_num_2nd",
						"value": 0
					},
					{
						"name": "ent_lev_reserve",
						"value": 0
					},
					{
						"name": "sleep_out_cc",
						"value": 0
					},
					{
						"name": "startup_cc",
						"value": 0
					},
					{
						"name": "idle_cc",
						"value": 0
					},
					{
						"name": "gc_fir_cc",
						"value": 0
					},
					{
						"name": "slf_rx_cc0",
						"value": 0
					},
					{
						"name": "slf_tx_cc0",
						"value": 0
					},
					{
						"name": "slf_rx_cc1",
						"value": 0
					},
					{
						"name": "slf_tx_cc1",
						"value": 0
					},
					{
						"name": "mut_hopping_cc",
						"value": 0
					},
					{
						"name": "mut_noise_cc",
						"value": 0
					},
					{
						"name": "mut_hopping_noise_cc",
						"value": 0
					},
					{
						"name": "slf_rx_noise_cc",
						"value": 0
					},
					{
						"name": "slf_rx_hopping_noise_cc",
						"value": 0
					},
					{
						"name": "slf_tx_noise_cc",
						"value": 0
					},
					{
						"name": "slf_tx_hopping_noise_cc",
						"value": 0
					},
					{
						"name": "cc_reserve",
						"value": 0
					},
					{
						"name": "co_axis_div",
						"value": 0
					},
					{
						"name": "co_axis_div_glv",
						"value": 0
					},
					{
						"name": "co_axis_div_bigarea",
						"value": 0
					},
					{
						"name": "co_axis_div_hop",
						"value": 0
					},
					{
						"name": "mut_ccl_ord_lgd_l",
						"value": 0
					},
					{
						"name": "mut_ccl_ord_lgd_d",
						"value": 0
					},
					{
						"name": "mut_ccl_ord_separation",
						"value": 0
					},
					{
						"name": "mut_ccl_reserve_0",
						"value": 0
					},
					{
						"name": "mut_ccl_reserve_1",
						"value": 0
					},
					{
						"name": "fs_distance",
						"value": 0
					},
					{
						"name": "fs_debounce",
						"value": 0
					},
					{
						"name": "knob_size_num",
						"value": 0
					},
					{
						"name": "tap_dst_rng",
						"value": 0
					},
					{
						"name": "tap_dst_jit",
						"value": 0
					},
					{
						"name": "tap_dst_max",
						"value": 0
					},
					{
						"name": "reserve_5E_0",
						"value": 0
					},
					{
						"name": "reserve_5E_1",
						"value": 0
					},
					{
						"name": "sig_thx_scale",
						"value": 0
					},
					{
						"name": "reserve_61",
						"value": 0
					},
					{
						"name": "mkey_num",
						"value": 0
					},
					{
						"name": "reserve_63_0",
						"value": 0
					},
					{
						"name": "reserve_63_1",
						"value": 0
					},
					{
						"name": "reserve_63_2",
						"value": 0
					},
					{
						"name": "reserve_63_3",
						"value": 0
					},
					{
						"name": "reserve_63_4",
						"value": 0
					},
					{
						"name": "reserve_63_5",
						"value": 0
					},
					{
						"name": "recal_tm",
						"value": 0
					},
					{
						"name": "bas_udt_tm",
						"value": 0
					},
					{
						"name": "bs_delay_frame_recal",
						"value": 0
					},
					{
						"name": "bs_delay_frame_idle",
						"value": 0
					},
					{
						"name": "bs_delay_frame",
						"value": 0
					},
					{
						"name": "bnk_seh_lat",
						"value": 0
					},
					{
						"name": "bs_reserve_0",
						"value": 0
					},
					{
						"name": "rx_num",
						"value": 0
					},
					{
						"name": "tx_num",
						"value": 0
					},
					{
						"name": "pt_num",
						"value": 0
					},
					{
						"name": "algorithm_en_set_5",
						"value": 0
					},
					{
						"name": "algorithm_en_set_4",
						"value": 0
					},
					{
						"name": "algorithm_en_set_6",
						"value": 0
					},
					{
						"name": "rx_pix_h",
						"value": 0
					},
					{
						"name": "rx_pix_l",
						"value": 0
					},
					{
						"name": "tx_pix_h",
						"value": 0
					},
					{
						"name": "tx_pix_l",
						"value": 0
					},
					{
						"name": "border_ext_dir",
						"value": 0
					},
					{
						"name": "border_start_pxl",
						"value": 0
					},
					{
						"name": "border_start_dist",
						"value": 0
					},
					{
						"name": "border_tail_pxl",
						"value": 0
					},
					{
						"name": "border_tail_dist",
						"value": 0
					},
					{
						"name": "reserve_b0",
						"value": 0
					},
					{
						"name": "reserve_b1",
						"value": 0
					},
					{
						"name": "reserve_b2",
						"value": 0
					},
					{
						"name": "reserve_82_0",
						"value": 0
					},
					{
						"name": "reserve_82_1",
						"value": 0
					},
					{
						"name": "reserve_82_2",
						"value": 0
					},
					{
						"name": "reserve_82_3",
						"value": 0
					},
					{
						"name": "reserve_82_4",
						"value": 0
					},
					{
						"name": "reserve_82_5",
						"value": 0
					},
					{
						"name": "reserve_82_6",
						"value": 0
					},
					{
						"name": "reserve_82_7",
						"value": 0
					},
					{
						"name": "reserve_82_8",
						"value": 0
					},
					{
						"name": "reserve_82_9",
						"value": 0
					},
					{
						"name": "reserve_82_10",
						"value": 0
					},
					{
						"name": "reserve_82_11",
						"value": 0
					},
					{
						"name": "reserve_82_12",
						"value": 0
					},
					{
						"name": "reserve_82_13",
						"value": 0
					},
					{
						"name": "reserve_82_14",
						"value": 0
					},
					{
						"name": "reserve_82_15",
						"value": 0
					},
					{
						"name": "reserve_82_16",
						"value": 0
					},
					{
						"name": "reserve_82_17",
						"value": 0
					},
					{
						"name": "reserve_82_18",
						"value": 0
					},
					{
						"name": "reserve_82_19",
						"value": 0
					},
					{
						"name": "reserve_82_20",
						"value": 0
					},
					{
						"name": "reserve_82_21",
						"value": 0
					},
					{
						"name": "reserve_82_22",
						"value": 0
					},
					{
						"name": "reserve_82_23",
						"value": 0
					},
					{
						"name": "reserve_82_24",
						"value": 0
					},
					{
						"name": "reserve_82_25",
						"value": 0
					},
					{
						"name": "reserve_82_26",
						"value": 0
					},
					{
						"name": "reserve_82_27",
						"value": 0
					},
					{
						"name": "reserve_82_28",
						"value": 0
					},
					{
						"name": "reserve_82_29",
						"value": 0
					},
					{
						"name": "reserve_82_30",
						"value": 0
					},
					{
						"name": "reserve_82_31",
						"value": 0
					},
					{
						"name": "reserve_82_32",
						"value": 0
					},
					{
						"name": "reserve_82_33",
						"value": 0
					},
					{
						"name": "reserve_82_34",
						"value": 0
					},
					{
						"name": "reserve_82_35",
						"value": 0
					},
					{
						"name": "reserve_82_36",
						"value": 0
					},
					{
						"name": "reserve_82_37",
						"value": 0
					},
					{
						"name": "reserve_82_38",
						"value": 0
					},
					{
						"name": "reserve_82_39",
						"value": 0
					},
					{
						"name": "reserve_82_40",
						"value": 0
					},
					{
						"name": "reserve_82_41",
						"value": 0
					},
					{
						"name": "reserve_82_42",
						"value": 0
					},
					{
						"name": "algorithm_en_set_automobile",
						"value": 0
					},
					{
						"name": "reserve_AE",
						"value": 0
					},
					{
						"name": "algorithm_en_set_automobile2",
						"value": 0
					},
					{
						"name": "algorithm_en_set_automobile3",
						"value": 0
					},
					{
						"name": "algorithm_en_set_automobile4",
						"value": 0
					},
					{
						"name": "glove_thpx",
						"value": 0
					},
					{
						"name": "glove_key_thx",
						"value": 0
					},
					{
						"name": "glove_weg_thpx_ent",
						"value": 0
					},
					{
						"name": "glove_cc",
						"value": 0
					},
					{
						"name": "glove_palm_blk",
						"value": 0
					},					
					{
						"name": "glove_ent_lev_frm",
						"value": 0
					},
					{
						"name": "glove_ent_sel",
						"value": 0
					},
					{
						"name": "glove_ent_ulmt",
						"value": 0
					},
					{
						"name": "glove_ent_dlmt",
						"value": 0
					},
					{
						"name": "glove_ent_fng_lev_tm",
						"value": 0
					},
					{
						"name": "glove_ent_bd_rng",
						"value": 0
					},
					{
						"name": "glove_ent_weg_thx",
						"value": 0
					},
					{
						"name": "glove_ent_rng",
						"value": 0
					},
					{
						"name": "glove_lev_mod_frm",
						"value": 0
					},					
					{
						"name": "glove_normal_rejec",
						"value": 0
					},
					{
						"name": "glove_reserve_0",
						"value": 0
					},
					{
						"name": "wtr_mut_thpx",
						"value": 0
					},
					{
						"name": "wtr_mut_wet",
						"value": 0
					},
					{
						"name": "wtr_lab_cnt",
						"value": 0
					},
					{
						"name": "wtr_fng_max",
						"value": 0
					},
					{
						"name": "wtr_reserve_0",
						"value": 0
					},
					{
						"name": "wtr_reserve_1",
						"value": 0
					},
					{
						"name": "wtr_reserve_2",
						"value": 0
					},
					{
						"name": "wtr_reserve_3",
						"value": 0
					},
					{
						"name": "precision_x",
						"value": 0
					},
					{
						"name": "precision_y",
						"value": 0
					},
					{
						"name": "recal_count",
						"value": 0
					},
					{
						"name": "recal_distance",
						"value": 0
					},
					{
						"name": "recal_count_scale",
						"value": 0
					},
					{
						"name": "recal_distance_scale",
						"value": 0
					}
			]
		}';
		
		return $data;
	}
	public function fail_det_table_0402(){
		$array_fail_det = array(
			"Video CRC Error[0]","Video CRC Error[1]","Video CRC Error[2]","Video CRC Error[3] ","Video CRC Error[4] ",
			"VDD1 Undervoltage ","VSP Undervoltage ","VSN Undervoltage ","VGH Undervoltage ","VGL Undervoltage ",
			"Abnormal LVDS signal ","LVDS unlock ","No LVDS signal","Glass broken","OTP reload fail ",
			"OTP program fail ","VDD1 Over-voltage","VSP Over-voltage","VSN Over-voltage","VGH Over-voltage",
			"VGL Over-voltage","Flash Reload Error ","Overheat Error indicator","Gate Error indicator","wr_chk_out",
			"PWM_OV_P_DETECT","PWM_OV_N_DETECT","ABD_STATUS_PULSE_ORI","CRC_ERROR_FLG_RELOAD","CUR1_ERROR_FLG_RELOAD",
			"CUS2_ERROR_FLG_RELOAD","CASCADE_SYNC_FAIL","vgh_clk_fail","vgl_clk_fail","PO0_UNLOCK_En",
			"PO1_UNLOCK_En","PO0_BWDAB_En_L0","PO0_BWDAB_En_L1","PO0_BWDAB_En_L2","PO0_BWDAB_En_L3",
			"PO1_BWDAB_En_L0","PO1_BWDAB_En_L1","PO0_CRC_En_L0","PO0_CRC_En_L1","PO0_CRC_En_L2",
			"PO0_CRC_En_L3","PO1_CRC_En_L0","PO1_CRC_En_L1","UP_RST_CNT_FLAG_FAILDET_UP1","UP_RST_CNT_FLAG_FAILDET_UP2",
			"porb_fail","nreset_fail","osd_sram_crc_fail","up2_sram_crc_fail","ecc_error_flag",
			"pwm_pclk_fail || pwm_nclk_fail","tp_sd_l2r_timeout","tp_sd_r2l_timeout","RESERVE","RESERVE",
			"RESERVE","RESERVE","RESERVE","RESERVE",
			
			// TP part
			"Reset","Boot","Sensing Timing (GPP)","Rawdata Noise (Gpp)",
			"","","","External Device",
			"SRAM","HW Interface","","Touch Sensor",
			"HW Interconnect","Clock","","",
			"","","","",
			"","","","",
			
			"Master IC Fail","Slave1 IC Fail","Slave2 IC Fail","Slave3 IC Fail",
			"Slave4 IC Fail","Slave5 IC Fail","Slave6 IC Fail","Slave7 IC Fail",
		);	
		return $array_fail_det;
	}

	public function Text_debug_parser(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];	
			
			$data_tmp['val_fae'] = 0;
			$data_tmp['val_ic'] = 192;
			$data['val_fae'] = 0;
			$data['dd_rom_convert'] = $this->load->view('itempage/dd_rom_parser', $data_tmp, true);
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			$this->load->view('itempage/text_parser_debug', $data);
			$this->load->view('mainpage/project_view_footer');
		}
	}
	
	public function Text_dd_osc_parser(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];	
			
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav',$auth);
			
			$osc_data["show_f0_f1"] = 0;
			$osc_data["fill_out_osc_table"] = 0;
			$content['dd_osc_table'] = $this->load->view('parse_upload/info_table_dd_osc', $osc_data, true);
			
			$this->load->view('itempage/text_parser_dd_osc', $content);
			$this->load->view('mainpage/project_view_footer');
		}
	}
	public function Bin_parser(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];		
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			
			// Create HTML=======================================
			$data = $this->Create_parse_table();
			$data['val_flash_func'] = "";
			$data['val_flash_header'] = "";
			$data['val_alg'] = "";
			$data['val_auto_self'] = "";
			$data['val_waveform_f0'] = "";
			$data['val_waveform_f1'] = "";
			$data['val_dd_header'] = "";
			$data['val_p2p_table'] = "";
			$data['val_tp_version'] = "";	
			$data_others['val_others'] = "";
			
			// Load dd osc formula table
			$osc_data["show_f0_f1"] = 1;
			$osc_data["fill_out_osc_table"] = 0;
			
			// Read sample file..............................
			$data['val_sample_tp'] = read_file('./assets/alg_recommand/Automotive_sample.json');
			$data['val_parser_tp'] = read_file('./assets/alg_recommand/Automotive_alg_parser.json');
			$data['val_fae'] = 0;
			$data['val_range'] = read_file('./assets/export_sample/192C_Ap_Note_V2_1');
			
			$data['dd_osc_table'] = $this->load->view('parse_upload/info_table_dd_osc', $osc_data, true);
			$content['html_content'] = $this->load->view('parse_upload/info_table_macro_bin', $data, true);
			$content['html_external'] = $this->load->view('parse_upload/info_table_external_table', $data_others,true);
			
			$content['default_panel'] = 0;
			// Load from database=============================================
			$conditions = 'project_id , panel_name, project_ticket';
			$query_result = $this->Pa5478_model->Load_all_projects($conditions); 
			$content["db_projects"] = $query_result;
			
			// Load samples===================================================
			$content["sample_files"] = get_filenames('./assets/export_sample');
			$content['val_fae'] = 0;
			
			$this->load->view('itempage/bin_parser', $content);
			//$this->load->view('parse_upload/info_table_modal');
			$this->load->view('mainpage/project_view_footer');
		}
	}
	public function Csv_parser(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];		
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			
			$this->load->view('itempage/csv_parser');
			$this->load->view('mainpage/project_view_footer');
		}
	}
	public function Add_users(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];		
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			
			$this->load->view('itempage/add_users');
			$this->load->view('mainpage/project_view_footer');
		}
	}
	public function Self_mapping(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];		
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			
			$this->load->view('itempage/self_test_mapping');
			$this->load->view('mainpage/project_view_footer');
		}
	}
	
	public function Request_Add_Users(){
		$data = $this->input->post();
		
		$tomodeldata=array(
			'id' => 1,
			'userid' => $data["userid"],
			'password' => $data["passwd"],
			'username'=> $data["username"]
		);
		// Fill out released FW table==============================
		$this->Pa5478_model->Insert_users($tomodeldata);
		
		
		echo json_encode('{"result": "success"}');
	}
	public function Request_Remove_Users($userid){
		
		// Fill out released FW table==============================
		$this->Pa5478_model->Remove_users($userid);
		
		
		echo json_encode('{"result": "success"}');
	}
	//=========================================================
	// FAE Tool
	//=========================================================
	public function FAE_Self_mapping(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];		
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			
			$this->load->view('fae_tool/fae_tool_self_test_mapping');
			$this->load->view('mainpage/project_view_footer');
		}
	}
	public function FAE_Horizontal_Mapping(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];		
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			
			$this->load->view('fae_tool/fae_tool_horizontal_mapping');
			$this->load->view('mainpage/project_view_footer');
		}
	}
	public function FAE_PTBA_VR(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];		
			
			$data_tmp['val_fae'] = 1;
			$data_tmp['val_ic'] = 192;
			$data['val_fae'] = 1;
			$data['dd_rom_convert'] = $this->load->view('itempage/dd_rom_parser', $data_tmp, true);
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			
			$this->load->view('itempage/text_parser_debug', $data);
			$this->load->view('mainpage/project_view_footer');
		}
	}
	//=========================================================
	// Sample Checker
	public function FAE_Bin_Parser(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];	

			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav', $auth);
			
			// Create HTML=======================================
			$data = $this->Create_parse_table();
			$data['val_flash_func'] = "";
			$data['val_flash_header'] = "";
			$data['val_alg'] = "";
			$data['val_auto_self'] = "";
			$data['val_waveform_f0'] = "";
			$data['val_waveform_f1'] = "";
			$data['val_dd_header'] = "";
			$data['val_p2p_table'] = "";
			$data['val_tp_version'] = "";	
			//$data_others['val_others'] = "";
			
			//-----------------------
			// Read sample file..............................
			$data['val_sample_tp'] = read_file('./assets/alg_recommand/Automotive_sample.json');
			$data['val_parser_tp'] = read_file('./assets/alg_recommand/Automotive_alg_parser.json');
			$data['val_fae'] = 1;
			$data['val_range'] = read_file('./assets/export_sample/192C_Ap_Note_V2_1');
			
			// Load dd osc formula table
			$osc_data["show_f0_f1"] = 1;
			$osc_data["fill_out_osc_table"] = 0;
			$data['dd_osc_table'] = $this->load->view('parse_upload/info_table_dd_osc', $osc_data, true);
			$content['html_content'] = $this->load->view('parse_upload/info_table_macro_bin', $data, true);
			//$content['html_external'] = $this->load->view('parse_upload/info_table_external_table', $data_others,true);
			
			//$content['default_panel'] = 0;
			// Load from database=============================================
			//$conditions = 'project_id , panel_name';
			//$query_result = $this->Pa5478_model->Load_all_projects($conditions); 
			//$content["db_projects"] = $query_result;
			// Load samples===============================================================
			$content["sample_files"] = get_filenames('./assets/export_sample');
			$content['val_fae'] = 1;
			//=============================================================================
			
			$this->load->view('itempage/bin_parser', $content);
			//$this->load->view('parse_upload/info_table_modal');
			$this->load->view('mainpage/project_view_footer');
		}
	}
	//=========================================================
	/*
	function do_upload()
	{
		$config['upload_path'] = './upload/';
		$config['allowed_types'] = 'txt|gif|jpg|png';
		$config['max_size']	= '100';
		$config['max_width']  = '1024';
		$config['max_height']  = '768';

		$this->load->library('upload', $config);

		if ( ! $this->upload->do_upload())
		{
			$error = array('error' => $this->upload->display_errors());

			//$this->load->view('upload_form'，$error);
			echo "Stella success";
		}
		else
		{
			$data = array('upload_data' => $this->upload->data());

			//$this->load->view('upload_success'，$data);
			echo "Stella fail";
		}
	}*/
	//===================================================
	public function Show_Export_Samples($target_sample_name)
    {
		$files = read_file('./assets/export_sample/'.$target_sample_name);
		if($files == FALSE){
			echo 'hnono';
			
		}
		else{
			
			echo json_encode($files);
		}
	}
	
	
	
	//===================================================
	public function stella()
    {
        $this->load->model('Pa5478_model');

		$filter_data = array(
            "id_buku" => "1",
            "jumlah" => "sssss",
            "subtotal" => "dddd"
        );

        //$data['query'] = $this->Pa5478_model->save_as_new();
		//$this->Pa5478_model->save_as_new($filter_data);
		$this->db->insert('news', $filter_data);
        //$this->load->view('blog',$data);
		
    }
	
	//public function get_alg_range()
	//{
		
		/*$query_result =  $this->Pa5478_model->range_query(8096);
			
		if($query_result == 0){ // invalid users
			$newdata = array(
				'id' => -1
			);
			echo json_encode($newdata);
		}
		else{
			
			echo json_encode($query_result[0]);
		}*/
		//$da = read_file('./assets/export_sample/192C_Ap_Note_V2_1');
		//$cc = json_decode($da, true); 
		///echo $cc[0]["itemname"];
		//$Stella = new stdClass();
		//$Stella->{$cc[0]["itemname"]} = new stdClass();
		//$Stella->{$cc[0]["itemname"]}->max = $cc[0]["max"];
		
		//echo $Stella->sleep_out_cc->max;
		
		//$h = json_decode($html["sleep_out_cc"], true);
		//echo $h["max"];
		
	//}
	//===========================================================
	//===========================================================	
	public function login()
	{

		// View==========================================
		$this->load->view('s_auth');
		
		/*if (!$this->ion_auth->logged_in())
		{
			// redirect them to the login page
			redirect('Automotive/auth_index', 'refresh');
		}
		else if (!$this->ion_auth->is_admin()) // remove this elseif if you want to enable this for non-admins
		{
			// redirect them to the home page because they must be an administrator to view this
			show_error('You must be an administrator to view this page.');
		}
		else
		{
			$this->data['title'] = $this->lang->line('index_heading');
			
			// set the flash data error message if there is one
			$this->data['message'] = (validation_errors()) ? validation_errors() : $this->session->flashdata('message');

			//list the users
			$this->data['users'] = $this->ion_auth->users()->result();
			
			//USAGE NOTE - you can do more complicated queries like this
			//$this->data['users'] = $this->ion_auth->where('field', 'value')->users()->result();
			
			foreach ($this->data['users'] as $k => $user)
			{
				$this->data['users'][$k]->groups = $this->ion_auth->get_users_groups($user->id)->result();
			}

			$this->_render_page('auth' . DIRECTORY_SEPARATOR . 'index', $this->data);
		}*/
	}

	/**
	 * Log the user in
	 */
	public function pa5478_login()
	{
		$data = $this->input->post();
		
		if($data["guest"] == 1){ // guest mode
			$newdata = array(
				'id' => 0,
				'username' => "Guest",
			);

			$this->session->set_userdata($newdata);


			echo json_encode($newdata);
		}
		else{
		
			$query_result =  $this->Pa5478_model->login($data["userid"], $data["password"]);
			
			if($query_result == 0){ // invalid users
				$newdata = array(
					'id' => -1
				);
				echo json_encode($newdata);
			}
			else{
				
				$newdata = array(
					'id' => $query_result[0]->id,
					'username' => $query_result[0]->username,
					//'username' => $data["userid"],
				);

				$this->session->set_userdata($newdata);


				echo json_encode($query_result[0]);
			}
		
		}
	}

	public function pa5478_logout()
	{
		unset(
			$_SESSION['id'],
			$_SESSION['username']
		);
		// redirect them to the login page
		redirect('Automotive/login', 'refresh');
	}
	
	//==============================================
	//==============================================
	// PA5495=======================================
	//==============================================
	//==============================================
	public function pa5495_tcon_script()
	{
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
		
			$data_show['id_name'] = '';
			$data['ac_dc_parser'] = $this->load->view('tcon_script/AC_DC_Parser',$data_show, true);
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav_pa5495', $auth);
			$this->load->view('tcon_script/tcon_script', $data);
			$this->load->view('mainpage/project_view_footer_pa5495');
			
		}
		
	}
	public function pa5495_bin_parser()
	{
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
		
			// Create HTML=======================================
			$data = $this->Create_parse_table_pa5495();
			$data['val_flash_func'] = "";
			$data['val_flash_header'] = "";
			$data['val_alg'] = "";
			$data['val_auto_self'] = "";
			//$data['val_tcon_script'] = "";
			//$data['val_dd_header'] = "";
			$data['val_p2p_table'] = "";
			$data['val_tp_version'] = "";	
		
			// Read sample file..............................
			$data['val_sample_tp'] = read_file('./assets/alg_recommand/Automotive_sample_pa5495.json');
			$data['val_parser_tp'] = read_file('./assets/alg_recommand/Automotive_alg_parser_pa5495.json');
		
			$data_show['id_name'] = 'F0_';
			$data['ac_dc_parser_f0'] = $this->load->view('tcon_script/AC_DC_Parser',$data_show, true);
			$data_show['id_name'] = 'F1_';
			$data['ac_dc_parser_f1'] = $this->load->view('tcon_script/AC_DC_Parser',$data_show, true);
			
			$content['html_content'] = $this->load->view('parse_upload/info_table_macro_bin_pa5495', $data, true);
			$content['level'] = $auth["level"];
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav_pa5495', $auth);
			$this->load->view('itempage/bin_parser_pa5495', $content);
			$this->load->view('mainpage/project_view_footer_pa5495');
			
		}
		
	}
	public function pa5495_Tp_version_show()
	{	
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
		
			$this->load->helper('url');
			
			$data['json_file'] = read_file('./assets/tp_version/Tp_version_List_pa5495.json');
			
			$data['level'] = $_SESSION['id'];
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav_pa5495', $auth);
			$this->load->view('create_test/tp_version_create', $data);
			$this->load->view('mainpage/project_view_footer_pa5495');
		}
	}
	
	public function pa5495_Tp_version_save()
	{	
		$data = $this->input->post();
		
		$new_file_path = './assets/tp_version/Tp_version_List_pa5495.json'; // modify this line to point to the actual location of the file
		write_file($new_file_path, $data["result"]);		
		
		//$data["result"] = "123";
		echo json_encode($data);
	}
	
	public function pa5495_Text_debug_parser(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];	
			
			$data_tmp['val_fae'] = 0;
			$data_tmp['val_ic'] = 180;
			$data['val_fae'] = 0;
			$data['dd_rom_convert'] = $this->load->view('itempage/dd_rom_parser', $data_tmp, true);
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav_pa5495', $auth);
			$this->load->view('itempage/text_parser_debug_pa5495', $data);
			$this->load->view('mainpage/project_view_footer_pa5495');
		}
	}
	//==============================================
	//==============================================
	// PA0402=======================================
	//==============================================
	//==============================================
	public function pa0402_pic_ac_script(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];	
			
			//==========================================
			$data_show['id_name'] = '';
			$data['ac_dc_parser'] = $this->load->view('tcon_script/AC_DC_Parser_0402',$data_show, true);
			$data['ac_dc_table'] = $this->load->view('tcon_script/AC_DC_table',$data_show, true);
			//==========================================
			
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav_pa0402', $auth);
			$this->load->view('itempage/text_parser_script', $data);
			$this->load->view('mainpage/project_view_footer_pa0402');
		}
	}
	public function pa0402_rx_mapping(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];	
			
			//==========================================
			//==========================================
			
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav_pa0402', $auth);
			$this->load->view('itempage/text_0402_remapping');
			$this->load->view('mainpage/project_view_footer_pa0402');
		}
	}
	public function pa0402_bin_parser(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];	
			
			//==========================================
			// Create HTML=======================================
			$data = $this->Create_parse_table_pa0402();
			$data['val_flash_func'] = "";
			$data['val_flash_header'] = "";
			$data['val_alg'] = "";
			$data['val_auto_self'] = "";
			//$data['val_tcon_script'] = "";
			$data['val_dd_header'] = "";
			$data['val_p2p_table'] = "";
			$data['val_tp_version'] = "";	
		
			//----------------------------------------------
			// Read fail det array
			$data['array_fail_det'] = $this->fail_det_table_0402();
			$data['pll_0402'] = $this->load->view('itempage/0402_pll', "", true);

			// Read sample file..............................
			$data['val_sample_tp'] = read_file('./assets/alg_recommand/Automotive_sample_pa0402.json');
			$data['val_parser_tp'] = read_file('./assets/alg_recommand/Automotive_alg_parser_pa0402.json');
		
			$data_show['id_name'] = 'F0_';
			$data['ac_dc_parser_f0'] = $this->load->view('tcon_script/AC_DC_Parser_0402',$data_show, true);
			$data_show['id_name'] = 'F1_';
			$data['ac_dc_parser_f1'] = $this->load->view('tcon_script/AC_DC_Parser_0402',$data_show, true);
			$data['dd_osc'] = $this->load->view('parse_upload/info_table_dd_osc_0402', $data, true);
			
			$content['html_content'] = $this->load->view('parse_upload/info_table_macro_bin_pa0402', $data, true);
			$content['level'] = $auth["level"];
			$content["sample_files"] = get_filenames('./assets/export_sample');
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav_pa0402', $auth);
			$this->load->view('itempage/bin_parser_pa0402', $content);
			$this->load->view('mainpage/project_view_footer_pa0402');
			//==========================================
		}
		
	}
	public function pa0402_text_debug_parser(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];	
			
			$data_tmp['val_fae'] = 0;
			$data_tmp['val_ic'] = 194;
			$data['val_fae'] = 0;
			$data['dd_rom_convert'] = $this->load->view('itempage/dd_rom_parser', $data_tmp, true);
			$data['gamma_bin'] = $this->load->view('itempage/gamma_tobin', $data_tmp, true);
			$data['pll_0402'] = $this->load->view('itempage/0402_pll', $data_tmp, true);
			$data['vr_0402'] = $this->load->view('itempage/0402_VR_cal', $data_tmp, true);
			$data['vr_0412'] = $this->load->view('itempage/0412_VR_cal', $data_tmp, true);

			// Read fail det array---------------------------
			$data['array_fail_det'] = $this->fail_det_table_0402();
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav_pa0402', $auth);
			$this->load->view('itempage/text_parser_debug_pa0402', $data);
			$this->load->view('mainpage/project_view_footer_pa0402');
		}
	}
	public function pa0402_Tp_version_show()
	{	
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];
		
			$this->load->helper('url');
			
			$data['json_file'] = read_file('./assets/tp_version/Tp_version_List_pa0402.json');
			
			$data['level'] = $_SESSION['id'];
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav_pa0402', $auth);
			$this->load->view('create_test/tp_version_create_pa0402', $data);
			$this->load->view('mainpage/project_view_footer_pa0402');
		}
	}
	
	public function pa0402_Tp_version_save()
	{	
		$data = $this->input->post();
		
		$new_file_path = './assets/tp_version/Tp_version_List_pa0402.json'; // modify this line to point to the actual location of the file
		write_file($new_file_path, $data["result"]);		
		
		//$data["result"] = "123";
		echo json_encode($data);
	}
	
	//==========================================
	public function pa5738_bin_parser(){
		if(!isset($_SESSION['id'])){
			redirect('Automotive/login', 'refresh');
		}
		else{
			$auth["level"] = $_SESSION['id'];
			$auth["username"] = $_SESSION['username'];	
			
			//==========================================
			// Create HTML=======================================
			$data = $this->Create_parse_table_pa5738();
			$data['val_flash_func'] = "";
			$data['val_flash_header'] = "";
			$data['val_alg'] = "";
			//$data['val_auto_self'] = "";
			//$data['val_tcon_script'] = "";
			//$data['val_dd_header'] = "";
			//$data['val_p2p_table'] = "";
			$data['val_tp_version'] = "";	
		
			// Read sample file..............................
			$data['val_sample_tp'] = read_file('./assets/alg_recommand/Automotive_sample_pa5738.json');
			$data['val_parser_tp'] = read_file('./assets/alg_recommand/Automotive_alg_parser_pa5738.json');

			$content['html_content'] = $this->load->view('parse_upload/info_table_macro_bin_pa5738', $data, true);
			$content['level'] = $auth["level"];
			// View==========================================
			$this->load->view('mainpage/project_view_header');
			$this->load->view('mainpage/project_view_nav_pa5738', $auth);
			$this->load->view('itempage/bin_parser_pa5738', $content);
			$this->load->view('mainpage/project_view_footer_pa5738');
			//==========================================
		}
		
	}
	
}
?>