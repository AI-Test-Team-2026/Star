<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pa5478_model extends CI_Model {

    function __construct()
    {
        parent::__construct();
		$this->load->dbforge();
		
		
		$this->projects_table = 'pa5478_projects';
		$this->version_list_table = 'pa5478_version_lists';
		
		$this->version_OTHERS = 'pa5478_table_others';
		$this->version_TP_VERSION_TABLE = 'pa5478_table_tp_version_table';
		$this->version_TP_P2P_TABLE = 'pa5478_table_tp_p2p_table';
		$this->version_dd_header = 'pa5478_table_dd_header';
		$this->version_TP_ADC_CONFIG_NORMAL_F1 = 'pa5478_table_tp_adc_config_normal_f1';
		$this->version_TP_ADC_CONFIG_NORMAL_F0 = 'pa5478_table_tp_adc_config_normal_f0';
		$this->version_TP_HW_CONFIG_1_AUTO_SELF = 'pa5478_table_tp_hw_config_1_auto_self';
		$this->version_TP_HW_CONFIG_1_COD_FW_CONFIG = 'pa5478_table_hw_config_1_cod_fw_config';
		$this->version_FLASH_HEADER = 'pa5478_table_flash_header';
		$this->version_FLASH_FUNC = 'pa5478_table_flash_func';

		$this->auth_checker = 'pa_users';
		//$this->alg_range = 'stella';

		$this->Create_projects_table();
		$this->Create_version_list_table();
    }
	
	public function Create_projects_table() {
		if($this->db->table_exists($this->projects_table)){
			//exists
		}
		else{
			// not exists
			$pa5478_table =array(
				'project_id'=>array(
						'type' => 'INT',
						'null' => FALSE,
						'unsigned' => TRUE,
						'auto_increment' => TRUE
					),
				'panel_name'=>array(
						'type' =>'VARCHAR',
						'constraint' => 255,
						'null' => FALSE,
						'unique' => TRUE
					),
				'ic_ver'=>array(
						'type' =>'VARCHAR',
						'constraint' => 255,
						'null' => FALSE,
						'unique' => FALSE
					),
				'panel_ver'=>array(
						'type'=>'INT',
						'null' => FALSE,
						/*'unique' => TRUE*/
					),
				'type'=>array(
					'type'=>'VARCHAR',
					'constraint' => 2,
					'null' => FALSE
					),
				'cascade_ic_num'=>array(
					'type'=>'INT',
					'constraint' => 3,
					'unsigned' => TRUE,
					'null' => FALSE
					),
				'aa_size_horizontal' =>array(
					'type'=>'REAL',
					'null' => TRUE
				),
				'aa_size_vertical' =>array(
					'type'=>'REAL',
					'null' => TRUE
				),
				'ic_power_mode' =>array(
					'type'=>'INT',
					'unsigned' => TRUE,
					'null' => TRUE
				)
			);
			$this->dbforge->add_field($pa5478_table);
			$this->dbforge->add_field("PRIMARY KEY (project_id)");
			
			$this->dbforge->create_table($this->projects_table);
			
		}
	}
	
	public function Drop_pa5478_tables(){
		$this->dbforge->drop_table($this->version_alg_table, true); 
		//$this->dbforge->drop_table($this->version_list_table, true); 
		//$this->dbforge->drop_table($this->projects_table, true); // 整個table會被刪掉
	}
	
	public function Insert_projects($tomodeldata){
		$this->db->insert($this->projects_table, $tomodeldata);
		//echo 'order has successfully been created';
	}
	public function Update_projects($data){
		$this->db->where('project_id', $data["update_table_data_id"]);
		$this->db->update($this->projects_table, $data["update_table_content"]);
	}
	
	public function Drop_projects($id){
		$c_id = $id.'_';
		//print_r($c_id);

		// delete flash func table row with specific c_id
		$this->db->like('C_id', $c_id, 'after');
		$this->db->delete($this->version_OTHERS); 
		// delete flash header table row with specific c_id
		$this->db->like('C_id', $c_id, 'after');
		$this->db->delete($this->version_TP_VERSION_TABLE); 
		// delete waveform f0 table row with specific c_id
		$this->db->like('C_id', $c_id, 'after');
		$this->db->delete($this->version_TP_P2P_TABLE); 
		// delete waveform f1 table row with specific c_id
		$this->db->like('C_id', $c_id, 'after');
		$this->db->delete($this->version_dd_header); 
		// delete REG table row with specific c_id
		$this->db->like('C_id', $c_id, 'after');
		$this->db->delete($this->version_TP_ADC_CONFIG_NORMAL_F1); 
		
		$this->db->like('C_id', $c_id, 'after');
		$this->db->delete($this->version_TP_ADC_CONFIG_NORMAL_F0); 
		
		$this->db->like('C_id', $c_id, 'after');
		$this->db->delete($this->version_TP_HW_CONFIG_1_AUTO_SELF); 
		
		$this->db->like('C_id', $c_id, 'after');
		$this->db->delete($this->version_TP_HW_CONFIG_1_COD_FW_CONFIG); 
		$this->db->like('C_id', $c_id, 'after');
		$this->db->delete($this->version_FLASH_HEADER); 
		$this->db->like('C_id', $c_id, 'after');
		$this->db->delete($this->version_FLASH_FUNC); 
		
		
		$this->db->where('project_id', $id);
		$this->db->delete($this->version_list_table); 
		
		$this->db->where('project_id', $id);
		$this->db->delete($this->projects_table); 
	}
	//=======================================================
	
	//========================================================
	// Edit project....
	public function Load_project_to_edit($id){
		$query = $this->db->get_where($this->projects_table, array('project_id' => $id));
		
		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}
	}
	
	// Load projects....
	public function Load_projects($conditions, $project_id){
		$this->db->select($conditions);
		$this->db->where('project_id', $project_id); 
		$query = $this->db->get($this->projects_table);
		
		if ($query->num_rows() > 0){
			return $query->result()[0]; //result_array
		}
	}
	
	public function Load_all_projects($conditions){
		$this->db->select($conditions);
		
		$query = $this->db->get($this->projects_table);
		
		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}
	}
	
	public function Check_db_released_fw_exit($cid){
		
		$sql = 'SELECT '.$this->version_list_table.'.C_id FROM '.$this->version_list_table;
		$sql = $sql.' WHERE '.$this->version_list_table.'.C_id = \''.$cid.'\'';
		//print_r($sql);
		$query = $this->db->query($sql);
		
		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}
	}
	
	public function Check_db_project_exit($id){
		
		$sql = 'SELECT '.$this->projects_table.'.project_id FROM '.$this->projects_table;
		$sql = $sql.' WHERE '.$this->projects_table.'.project_id = \''.$id.'\'';
		//print_r($sql);
		$query = $this->db->query($sql);
		
		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}
	}
	
	public function Load_project_released(){ // Load latest fw of each projects
		
		/* no work
		$sql = 'SELECT '.$this->projects_table.'.panel_name, '.$this->projects_table.'.ic_ver, '.$this->version_list_table.'.released_fw, '.$this->version_list_table.'.C_id, MAX('.$this->version_list_table.'.version), '.$this->version_list_table.'.C_id';
		$sql = $sql.' FROM '.$this->projects_table;
		$sql = $sql.' INNER JOIN '.$this->version_list_table;
		$sql = $sql.' ON '.$this->projects_table.'.project_id='.$this->version_list_table.'.project_id';
		$sql = $sql.' GROUP BY '.$this->projects_table.'.project_id';
		*/
		
		// Can work --> find max version of each project_id
		/*$sql = 'SELECT a.released_fw, a.project_id, a.version';
		$sql = $sql.' FROM '.$this->version_list_table.' a';
		$sql = $sql.' LEFT JOIN '.$this->version_list_table.' b';
		$sql = $sql.' ON a.project_id = b.project_id AND a.version < b.version';
		$sql = $sql.' WHERE b.project_id IS NULL';*/
		
		
		$sql = 'SELECT c.panel_name, c.ic_ver, c.project_id, c.project_ticket, a.released_fw, a.C_id';
		$sql = $sql.' FROM '.$this->version_list_table.' a';
		$sql = $sql.' INNER JOIN '.$this->projects_table.' c';
		$sql = $sql.' ON c.project_id = a.project_id';
		$sql = $sql.' LEFT JOIN '.$this->version_list_table.' b';
		$sql = $sql.' ON a.project_id = b.project_id AND a.version < b.version';
		$sql = $sql.' WHERE b.project_id IS NULL';
		$sql = $sql.' GROUP BY c.panel_name';
		//echo $sql;
		
		$query = $this->db->query($sql);
		//$query_result = $query->result();
		// print_r($query_result);

		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}
	}
	
	public function Load_released_content($project_id){ // For certain project, load all released_fw
		$sql = 'SELECT a.released_fw, a.C_id FROM '.$this->version_list_table.' a';
		$sql = $sql.' WHERE a.project_id = '.$project_id;
		$sql = $sql.' ORDER BY a.version DESC';
		
		$query = $this->db->query($sql);
		/*$query_result = $query->result();
		print_r($query_result);*/
		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}
		
	}
	public function Load_released_content_others($C_id){ // query by C_id
		$sql = 'SELECT a.* FROM '.$this->version_OTHERS.' a';
		$sql = $sql.' WHERE a.C_id = \''.$C_id.'\'';
		
		$query = $this->db->query($sql);
		/*$query_result = $query->result();
		print_r($query_result[0]);*/
		if ($query->num_rows() > 0){
			return $query->result()[0]; //result_array
		}
	}
	public function Load_released_content_tp_version_table($C_id){ // query by C_id
		$sql = 'SELECT a.* FROM '.$this->version_TP_VERSION_TABLE.' a';
		$sql = $sql.' WHERE a.C_id = \''.$C_id.'\'';
		
		$query = $this->db->query($sql);
		/*$query_result = $query->result();
		print_r($query_result[0]);*/
		if ($query->num_rows() > 0){
			return $query->result()[0]; //result_array
		}
	}
	public function Load_released_content_p2p_table($C_id){ // query by C_id
		$sql = 'SELECT a.* FROM '.$this->version_TP_P2P_TABLE.' a';
		$sql = $sql.' WHERE a.C_id = \''.$C_id.'\'';
		
		$query = $this->db->query($sql);
		/*$query_result = $query->result();
		print_r($query_result[0]);*/
		if ($query->num_rows() > 0){
			return $query->result()[0]; //result_array
		}
	}
	public function Load_released_content_dd_header($C_id){ // query by C_id
		$sql = 'SELECT a.* FROM '.$this->version_dd_header.' a';
		$sql = $sql.' WHERE a.C_id = \''.$C_id.'\'';
		
		$query = $this->db->query($sql);
		/*$query_result = $query->result();
		print_r($query_result[0]);*/
		if ($query->num_rows() > 0){
			return $query->result()[0]; //result_array
		}
	}

	public function Load_released_content_waveform_f1($C_id){ // query by C_id
		$sql = 'SELECT a.* FROM '.$this->version_TP_ADC_CONFIG_NORMAL_F1.' a';
		$sql = $sql.' WHERE a.C_id = \''.$C_id.'\'';
		
		$query = $this->db->query($sql);
		/*$query_result = $query->result();
		print_r($query_result[0]);*/
		if ($query->num_rows() > 0){
			return $query->result()[0]; //result_array
		}
	}
	public function Load_released_content_waveform_f0($C_id){ // query by C_id
		$sql = 'SELECT a.* FROM '.$this->version_TP_ADC_CONFIG_NORMAL_F0.' a';
		$sql = $sql.' WHERE a.C_id = \''.$C_id.'\'';
		
		$query = $this->db->query($sql);
		/*$query_result = $query->result();
		print_r($query_result[0]);*/
		if ($query->num_rows() > 0){
			return $query->result()[0]; //result_array
		}
	}
	public function Load_released_content_auto_self($C_id){ // query by C_id
		$sql = 'SELECT a.* FROM '.$this->version_TP_HW_CONFIG_1_AUTO_SELF.' a';
		$sql = $sql.' WHERE a.C_id = \''.$C_id.'\'';
		
		$query = $this->db->query($sql);
		if ($query->num_rows() > 0){
			return $query->result()[0]; //result_array
		}
	}
	
	public function Load_released_content_alg($C_id){ // query by C_id
		$sql = 'SELECT a.* FROM '.$this->version_TP_HW_CONFIG_1_COD_FW_CONFIG.' a';
		$sql = $sql.' WHERE a.C_id = \''.$C_id.'\'';
		
		$query = $this->db->query($sql);
		/*$query_result = $query->result();
		print_r($query_result[0]);*/
		if ($query->num_rows() > 0){
			return $query->result()[0]; //result_array
		}
	}

	public function Load_released_content_flash_func($C_id){ // query by C_id
		$sql = 'SELECT a.* FROM '.$this->version_FLASH_FUNC.' a';
		$sql = $sql.' WHERE a.C_id = \''.$C_id.'\'';
		
		$query = $this->db->query($sql);
		/*$query_result = $query->result();
		print_r($query_result[0]);*/
		if ($query->num_rows() > 0){
			return $query->result()[0]; //result_array
		}
	}
	public function Load_released_content_flash_header($C_id){ // query by C_id
		$sql = 'SELECT a.* FROM '.$this->version_FLASH_HEADER.' a';
		$sql = $sql.' WHERE a.C_id = \''.$C_id.'\'';
		
		$query = $this->db->query($sql);
		/*$query_result = $query->result();
		print_r($query_result[0]);*/
		if ($query->num_rows() > 0){
			return $query->result()[0]; //result_array
		}
	}
	
	//========================================================
	public function Create_version_list_table() {
		if($this->db->table_exists($this->version_list_table)){
			//exists
		}
		else{
					
			$pa5478_version_table =array(
				'project_id'=>array(
						'type' => 'INT',
						'null' => FALSE,
						'unsigned' => TRUE,
						'auto_increment' => TRUE
					),
				'released_fw'=>array(
						'type' =>'VARCHAR',
						'constraint' => 255,
						'null' => FALSE
					),
				'C_id'=>array(
						'type'=>'VARCHAR',
						'constraint' => 255
					),
				'version'=>array(
					'type' => 'INT',
					'null' => FALSE,
					'unsigned' => TRUE
				)
			);
			$this->dbforge->add_field($pa5478_version_table);
			$this->dbforge->add_field("PRIMARY KEY (C_id)");
			$this->dbforge->add_field("FOREIGN KEY (project_id) REFERENCES ".($this->projects_table)."(project_id)");
			
			$this->dbforge->create_table($this->version_list_table);
		}
	}
	//========================================================
	// Create ALG/REG/waveform/flash table
	//========================================================
	public function Create_detail_tables($title){
		$this->Create_flash_header_list_table($title->FLASH_HEADER);
		$this->Create_flash_func_list_table($title->FLASH_FUNC);
		$this->Create_alg_list_table($title->TP_HW_CONFIG_1_COD_FW_CONFIG);
		$this->Create_autoself_list_table($title->TP_HW_CONFIG_1_AUTO_SELF);
		$this->Create_waveform_f0_list_table($title->TP_ADC_CONFIG_NORMAL_F0);
		$this->Create_waveform_f1_list_table($title->TP_ADC_CONFIG_NORMAL_F1);
		$this->Create_others_list_table($title->OTHERS);
		$this->Create_tp_version_list_table($title->TP_VERSION_TABLE);
		$this->Create_p2p_list_table($title->TP_P2P_TABLE);
		$this->Create_dd_header_list_table($title->dd_header);
	
	}
	
	public function Create_alg_list_table($title) {
		if($this->db->table_exists($this->version_TP_HW_CONFIG_1_COD_FW_CONFIG)){
			//exists
		}
		else{
			$name_content = array( 'type'=> 'VARCHAR', 'constraint' => 4, 'null'=> FALSE );
			
			$pa5478_alg_table =array(
				'C_id'=>array(
						'type'=>'VARCHAR',
						'constraint' => 255
					)
			);
			for($i = 0; $i < count($title); $i++){
				$key = "rfeh_".(dechex($i));
				$pa5478_alg_table[$key] = $name_content;
				
			}
			
			$this->dbforge->add_field($pa5478_alg_table);
			$this->dbforge->add_field("FOREIGN KEY (C_id) REFERENCES ".($this->version_list_table)."(C_id)");
			
			$this->dbforge->create_table($this->version_TP_HW_CONFIG_1_COD_FW_CONFIG);
		}
		
	}
	public function Create_autoself_list_table($title) {
		if($this->db->table_exists($this->version_TP_HW_CONFIG_1_AUTO_SELF)){
			//exists
		}
		else{
			$name_content = array( 'type'=> 'VARCHAR', 'constraint' => 10, 'null'=> FALSE );
			
			$pa5478_alg_table =array(
				'C_id'=>array(
						'type'=>'VARCHAR',
						'constraint' => 255
					)
			);
			for($i = 0; $i < count($title); $i++){
				$key = $title[$i]->name;
				$pa5478_alg_table[$key] = $name_content;
			}
			
			$this->dbforge->add_field($pa5478_alg_table);
			$this->dbforge->add_field("FOREIGN KEY (C_id) REFERENCES ".($this->version_list_table)."(C_id)");
			
			$this->dbforge->create_table($this->version_TP_HW_CONFIG_1_AUTO_SELF);
		}
		
	}
	public function Create_flash_header_list_table($title) {
		if($this->db->table_exists($this->version_FLASH_HEADER)){
			//exists
		}
		else{
			$name_content = array( 'type'=> 'VARCHAR', 'constraint' => 100, 'null'=> FALSE );
			
			$pa5478_table =array(
				'C_id'=>array(
						'type'=>'VARCHAR',
						'constraint' => 255
					)
			);
			for($i = 0; $i < count($title); $i++){
				$key = $title[$i]->name;
				$pa5478_table[$key] = $name_content;
				
			}
			
			$this->dbforge->add_field($pa5478_table);
			$this->dbforge->add_field("FOREIGN KEY (C_id) REFERENCES ".($this->version_list_table)."(C_id)");
			
			$this->dbforge->create_table($this->version_FLASH_HEADER);
		}
	}
	public function Create_flash_func_list_table($title) {
		if($this->db->table_exists($this->version_FLASH_FUNC)){
			//exists
		}
		else{
			$name_content = array( 'type'=> 'VARCHAR', 'constraint' => 3, 'null'=> FALSE );
			
			$pa5478_table =array(
				'C_id'=>array(
						'type'=>'VARCHAR',
						'constraint' => 255
					)
			);
			for($i = 0; $i < count($title); $i++){
				$key = $title[$i]->name;
				$pa5478_table[$key] = $name_content;
				
			}
			
			$this->dbforge->add_field($pa5478_table);
			$this->dbforge->add_field("FOREIGN KEY (C_id) REFERENCES ".($this->version_list_table)."(C_id)");
			
			$this->dbforge->create_table($this->version_FLASH_FUNC);
		}
	}
	public function Create_waveform_f0_list_table($title) {
		if($this->db->table_exists($this->version_TP_ADC_CONFIG_NORMAL_F0)){
			//exists
		}
		else{
			$name_content = array( 'type'=> 'VARCHAR', 'constraint' => 30, 'null'=> FALSE );
			
			$pa5478_table =array(
				'C_id'=>array(
						'type'=>'VARCHAR',
						'constraint' => 255
					)
			);
			for($i = 0; $i < count($title); $i++){
				$key = $title[$i]->name;
				$pa5478_table[$key] = $name_content;
				
			}
			
			$this->dbforge->add_field($pa5478_table);
			$this->dbforge->add_field("FOREIGN KEY (C_id) REFERENCES ".($this->version_list_table)."(C_id)");
			
			$this->dbforge->create_table($this->version_TP_ADC_CONFIG_NORMAL_F0);
		}
	}
	public function Create_waveform_f1_list_table($title) {
		if($this->db->table_exists($this->version_TP_ADC_CONFIG_NORMAL_F1)){
			//exists
		}
		else{
			$name_content = array( 'type'=> 'VARCHAR', 'constraint' => 30, 'null'=> FALSE );
			
			$pa5478_table =array(
				'C_id'=>array(
						'type'=>'VARCHAR',
						'constraint' => 255
					)
			);
			for($i = 0; $i < count($title); $i++){
				$key = $title[$i]->name;
				$pa5478_table[$key] = $name_content;
				
			}
			
			$this->dbforge->add_field($pa5478_table);
			$this->dbforge->add_field("FOREIGN KEY (C_id) REFERENCES ".($this->version_list_table)."(C_id)");
			
			$this->dbforge->create_table($this->version_TP_ADC_CONFIG_NORMAL_F1);
		}
	}
	public function Create_tp_version_list_table($title) {
		if($this->db->table_exists($this->version_TP_VERSION_TABLE)){
			
		}
		else{
			$name_content = array( 'type'=> 'VARCHAR', 'constraint' => 6, 'null'=> FALSE );
			
			$pa5478_table =array(
				'C_id'=>array(
						'type'=>'VARCHAR',
						'constraint' => 255
					)
			);
			for($i = 0; $i < count($title); $i++){
				$key = $title[$i]->name;
				$pa5478_table[$key] = $name_content;
				
			}
			$this->dbforge->add_field($pa5478_table);
			$this->dbforge->add_field("FOREIGN KEY (C_id) REFERENCES ".($this->version_list_table)."(C_id)");
			$this->dbforge->create_table($this->version_TP_VERSION_TABLE);
		}
	}
	public function Create_p2p_list_table($title) {
		if($this->db->table_exists($this->version_TP_P2P_TABLE)){
			
		}
		else{
			$name_content = array( 'type'=> 'text', 'null'=> FALSE );
			
			$pa5478_table =array(
				'C_id'=>array(
						'type'=>'VARCHAR',
						'constraint' => 255
					)
			);
			
			$pa5478_table["value"] = $name_content;
				
			
			$this->dbforge->add_field($pa5478_table);
			$this->dbforge->add_field("FOREIGN KEY (C_id) REFERENCES ".($this->version_list_table)."(C_id)");
			$this->dbforge->create_table($this->version_TP_P2P_TABLE);
		}
	}
	public function Create_dd_header_list_table($title) {
		if($this->db->table_exists($this->version_dd_header)){
			
		}
		else{
			$name_content = array( 'type'=> 'text', 'null'=> FALSE );
			
			$pa5478_table =array(
				'C_id'=>array(
						'type'=>'VARCHAR',
						'constraint' => 255
					)
			);
			
			$pa5478_table["value"] = $name_content;
				
			
			$this->dbforge->add_field($pa5478_table);
			$this->dbforge->add_field("FOREIGN KEY (C_id) REFERENCES ".($this->version_list_table)."(C_id)");
			$this->dbforge->create_table($this->version_dd_header);
		}
	}
	public function Create_others_list_table($title) {
		if($this->db->table_exists($this->version_OTHERS)){
			
		}
		else{
			$name_content = array( 'type'=> 'VARCHAR', 'constraint' => 10, 'null'=> FALSE );
			
			$pa5478_table =array(
				'C_id'=>array(
						'type'=>'VARCHAR',
						'constraint' => 255
					)
			);
			for($i = 0; $i < count($title); $i++){
				$key = $title[$i]->name;
				$pa5478_table[$key] = $name_content;
				
			}
			$this->dbforge->add_field($pa5478_table);
			$this->dbforge->add_field("FOREIGN KEY (C_id) REFERENCES ".($this->version_list_table)."(C_id)");
			$this->dbforge->create_table($this->version_OTHERS);
		}
	}
	//========================================================
	//========================================================
	
	//========================================================
	// Insert ALG/REG/waveform/flash table
	//========================================================
	public function Insert_released_fw_list($tomodeldata){
		$this->db->insert($this->version_list_table, $tomodeldata);
	}
	public function Insert_flash_func_list($tomodeldata){
		$this->db->insert($this->version_FLASH_FUNC, $tomodeldata);
	}
	public function Insert_flash_header_list($tomodeldata){
		$this->db->insert($this->version_FLASH_HEADER, $tomodeldata);
	}
	public function Insert_alg_list($tomodeldata){
		$this->db->insert($this->version_TP_HW_CONFIG_1_COD_FW_CONFIG, $tomodeldata);
		//echo 'order has successfully been created';
	}
	public function Insert_auto_self_list($tomodeldata){
		$this->db->insert($this->version_TP_HW_CONFIG_1_AUTO_SELF, $tomodeldata);
	}
	public function Insert_waveform_f0_list($tomodeldata){
		$this->db->insert($this->version_TP_ADC_CONFIG_NORMAL_F0, $tomodeldata);
	}
	public function Insert_waveform_f1_list($tomodeldata){
		$this->db->insert($this->version_TP_ADC_CONFIG_NORMAL_F1, $tomodeldata);
	}
	public function Insert_dd_header($tomodeldata){
		$this->db->insert($this->version_dd_header, $tomodeldata);
	}
	public function Insert_p2p_table($tomodeldata){
		$this->db->insert($this->version_TP_P2P_TABLE, $tomodeldata);
	}
	public function Insert_tp_version($tomodeldata){
		$this->db->insert($this->version_TP_VERSION_TABLE, $tomodeldata);
	}
	public function Insert_others($tomodeldata){
		$this->db->insert($this->version_OTHERS, $tomodeldata);
	}
	//========================================================
	//========================================================
	
	public function Update_released_fw_list($data){
		$this->db->where('project_id', $data["update_table_data_id"]);
		$this->db->update($this->version_list_table, $data["update_table_content"]);
	}
	//========================================================
	//========================================================
		
	public function Drop_released_fw_list($c_id){
		// Get C_id
		//$this->db->select('C_id');
		//$query_c_id = $this->db->get_where($this->version_list_table, array('project_id' => $id));
		
		
		//if ($query_c_id->num_rows() > 0){

			//$c_id = $query_c_id->result()[0]->C_id; //echo "query ".$c_id;
			//echo $query_c_id->result()[1]->C_id;
			// Drop forign key...	
			// delete alg table row with specific c_id
			//$sql = 'DELETE FROM '.$this->version_alg_table.' WHERE C_id="'.$c_id.'"';
			//$this->db->query($sql);
			$this->db->where('C_id', $c_id);
			$this->db->delete($this->version_OTHERS); 
			
			$this->db->where('C_id', $c_id);
			$this->db->delete($this->version_TP_VERSION_TABLE); 
			
			$this->db->where('C_id', $c_id);
			$this->db->delete($this->version_TP_P2P_TABLE); 
			
			$this->db->where('C_id', $c_id);
			$this->db->delete($this->version_dd_header); 
			
			$this->db->where('C_id', $c_id);
			$this->db->delete($this->version_TP_ADC_CONFIG_NORMAL_F1); 
			
			$this->db->where('C_id', $c_id);
			$this->db->delete($this->version_TP_ADC_CONFIG_NORMAL_F0); 
			
			$this->db->where('C_id', $c_id);
			$this->db->delete($this->version_TP_HW_CONFIG_1_AUTO_SELF); 
			
			$this->db->where('C_id', $c_id);
			$this->db->delete($this->version_TP_HW_CONFIG_1_COD_FW_CONFIG); 
			
			$this->db->where('C_id', $c_id);
			$this->db->delete($this->version_FLASH_HEADER); 
			
			$this->db->where('C_id', $c_id);
			$this->db->delete($this->version_FLASH_FUNC); 
			
		//}
		$this->db->where('C_id', $c_id);
		$this->db->delete($this->version_list_table); 
	}
	//========================================================
	//========================================================

	
	//=========================================================================
	//=========================================================================
	public function Create_table() {		
		$posts_fields=array(
			'id'=>array('type' => 'INT','constraint' => 5,'unsigned' => TRUE),
			'title'=>array('type' =>'VARCHAR','constraint' => 100),
			'content'=>array('type'=>'text'),
			'create_time'=>array('type'=>'INT','constraint'=>12));

		$this->dbforge->add_field($posts_fields);
		$this->dbforge->create_table('posts');
		//$this->db->insert('hah_entry', $data);
	}
	
	public function Query_by_text($sql){ 
		
		$query = $this->db->query($sql);
		/*$query_result = $query->result();
		print_r($query_result);*/
		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}
		
	}
	public function Query_project_latest_released_fw($project_id){
		
		$sql = 'SELECT a.released_fw, a.C_id FROM pa5478_version_lists a ';
		$sql = $sql.' LEFT JOIN pa5478_version_lists  b ON  b.project_id = '.$project_id.' AND a.version < b.version';
		$sql = $sql.' WHERE a.project_id  = '.$project_id.' AND b.project_id IS NULL';
		
		$query = $this->db->query($sql);
		/*$query_result = $query->result();*/
		//print_r($query_result);
		
		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}
		
	}
	
	public function Query_project_latest_released_fw_data($C_id){
		
		//$table_z = $this->version_list_table." z";
		$table_a = $this->version_FLASH_FUNC." a";
		$table_b = $this->version_FLASH_HEADER." b";
		$table_c = $this->version_TP_HW_CONFIG_1_COD_FW_CONFIG." c";
		$table_d = $this->version_TP_HW_CONFIG_1_AUTO_SELF." d";
		$table_e = $this->version_TP_ADC_CONFIG_NORMAL_F0." e";
		$table_f = $this->version_TP_ADC_CONFIG_NORMAL_F1." f";
		$table_g = $this->version_dd_header." g";
		$table_h = $this->version_TP_P2P_TABLE." h";
		$table_i = $this->version_TP_VERSION_TABLE." i";
		$table_j = $this->version_OTHERS." j";
	
		$sql = 'SELECT a.*, b.*, c.*, d.*, e.*, f.*, g.*, h.*, i.*, j.*  ';
		$sql = $sql.' FROM '.$table_a;
		$sql = $sql.' INNER JOIN '.$table_b.' ON a.C_id = b.C_id ';
		$sql = $sql.' INNER JOIN '.$table_c.' ON a.C_id = c.C_id ';
		$sql = $sql.' INNER JOIN '.$table_d.' ON a.C_id = d.C_id ';
		$sql = $sql.' INNER JOIN '.$table_e.' ON a.C_id = e.C_id ';
		$sql = $sql.' INNER JOIN '.$table_f.' ON a.C_id = f.C_id ';
		$sql = $sql.' INNER JOIN '.$table_g.' ON a.C_id = g.C_id ';
		$sql = $sql.' INNER JOIN '.$table_h.' ON a.C_id = h.C_id ';
		$sql = $sql.' INNER JOIN '.$table_i.' ON a.C_id = i.C_id ';
		$sql = $sql.' INNER JOIN '.$table_j.' ON a.C_id = j.C_id ';
		
		$sql = $sql.' WHERE a.C_id = "'.$C_id.'"';

		$query = $this->db->query($sql);
		/*$query_result = $query->result();*/
		//print_r($query_result);
		
		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}
	}
	
	public function Query_project_latest_released_fw_external($C_id){
		
		$table_j = $this->version_OTHERS." j";
	
		$sql = 'SELECT j.* ';
		$sql = $sql.' FROM '.$table_j;
		$sql = $sql.' WHERE j.C_id = "'.$C_id.'"';

		$query = $this->db->query($sql);
		/*$query_result = $query->result();*/
		//print_r($query_result);
		
		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}

	}
	
	public function Query_two_released_fw($data){

		$table_z = $this->version_list_table." z";
		$table_a = $this->version_FLASH_FUNC." a";
		$table_b = $this->version_FLASH_HEADER." b";
		$table_c = $this->version_TP_HW_CONFIG_1_COD_FW_CONFIG." c";
		$table_d = $this->version_TP_HW_CONFIG_1_AUTO_SELF." d";
		$table_e = $this->version_TP_ADC_CONFIG_NORMAL_F0." e";
		$table_f = $this->version_TP_ADC_CONFIG_NORMAL_F1." f";
		//$table_g = $this->version_dd_header." g";
		//$table_h = $this->version_TP_P2P_TABLE." h";
		$table_i = $this->version_TP_VERSION_TABLE." i";
		$table_j = $this->version_OTHERS." j";
	
		//$sql = 'SELECT z.C_id, z.released_fw, a.*, b.*, c.*, d.*, e.*, f.*, g.*, h.*, i.*, j.*  ';
		$sql = 'SELECT z.C_id, z.released_fw, a.*, b.*, c.*, d.*, e.*, f.*, i.*, j.*  ';
		$sql = $sql.' FROM '.$table_z;
		$sql = $sql.' INNER JOIN '.$table_a.' ON z.C_id = a.C_id ';
		$sql = $sql.' INNER JOIN '.$table_b.' ON z.C_id = b.C_id ';
		$sql = $sql.' INNER JOIN '.$table_c.' ON z.C_id = c.C_id ';
		$sql = $sql.' INNER JOIN '.$table_d.' ON z.C_id = d.C_id ';
		$sql = $sql.' INNER JOIN '.$table_e.' ON z.C_id = e.C_id ';
		$sql = $sql.' INNER JOIN '.$table_f.' ON z.C_id = f.C_id ';
		//$sql = $sql.' INNER JOIN '.$table_g.' ON z.C_id = g.C_id ';
		//$sql = $sql.' INNER JOIN '.$table_h.' ON z.C_id = h.C_id ';
		$sql = $sql.' INNER JOIN '.$table_i.' ON z.C_id = i.C_id ';
		$sql = $sql.' INNER JOIN '.$table_j.' ON z.C_id = j.C_id ';
		$sql = $sql.' WHERE z.C_id = "'.$data["fw_list"][0].'" OR z.C_id = "'.$data["fw_list"][1].'"';

		
		$query = $this->db->query($sql);
		/*$query_result = $query->result();*/
		//print_r($query_result);
		
		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}
	}
	
	public function Query_between_released_fw_in_same_project($data){
		$i = 0;

		$c_select = '';
		$c_join = '';
		$isfirst = '';
		$c_where = '';
		$selecttable = '';
		$table_z = $this->version_list_table." z";
		
		$table_a = $this->version_FLASH_FUNC." a";
		$table_b = $this->version_FLASH_HEADER." b";
		$table_c = $this->version_TP_HW_CONFIG_1_COD_FW_CONFIG." c";
		$table_d = $this->version_TP_HW_CONFIG_1_AUTO_SELF." d";
		$table_e = $this->version_TP_ADC_CONFIG_NORMAL_F0." e";
		$table_f = $this->version_TP_ADC_CONFIG_NORMAL_F1." f";
		$table_g = $this->version_dd_header." g";
		$table_h = $this->version_TP_P2P_TABLE." h";
		$table_i = $this->version_TP_VERSION_TABLE." i";
		$table_j = $this->version_OTHERS." j";
	
		// fw_list==================================================
		$isfirst = 'z';
		$selecttable = $table_z;
		
		$c_where = ' WHERE ';
		for($i = 0; $i < count($data["fw_list"]);$i++){
			if($i == 0){
				$c_where = $c_where.'('.$isfirst.'.C_id = "'.$data["fw_list"][$i].'")';
			}
			else{
				$c_where = $c_where.' OR ('.$isfirst.'.C_id = "'.$data["fw_list"][$i].'")';
			}
		}
		$c_where = $c_where.' ORDER BY '.$isfirst.'.C_id DESC ';
		
		$c_select = $c_select.'z.released_fw, z.C_id ';
		
		// FLASH FUNC============================================
		if(!empty($data["flash_func_list"])){
			for($i = 0; $i < count($data["flash_func_list"]);$i++){
				if($c_select == ''){
					$c_select = $c_select.'a.'.$data["flash_func_list"][$i];
				}
				else{
					$c_select = $c_select.', a.'.$data["flash_func_list"][$i];
				}
			}
			if($isfirst == ''){
				$isfirst ='a';
				$selecttable = $table_a;
			}
			else{
				$c_join = $c_join.' INNER JOIN '.$table_a.' ON '.$isfirst.'.C_id = a.C_id ';
			}
			
		}
		// FLASH HEADER============================================
		if(!empty($data["flash_header_list"])){
			for($i = 0; $i < count($data["flash_header_list"]);$i++){
				if($c_select == ''){
					$c_select = $c_select.'b.'.$data["flash_header_list"][$i];
				}
				else{
					$c_select = $c_select.', b.'.$data["flash_header_list"][$i];
				}
			}
			if($isfirst == ''){
				$isfirst ='b';
				$selecttable = $table_b;
			}
			else{
				$c_join = $c_join.' INNER JOIN '.$table_b.' ON '.$isfirst.'.C_id = b.C_id ';
			}
			
		}
		// ALG==================================================
		if(!empty($data["alg_list"])){
			for($i = 0; $i < count($data["alg_list"]);$i++){
				if($c_select == ''){
					$c_select = $c_select.'c.'.$data["alg_list"][$i];
				}
				else{
					$c_select = $c_select.', c.'.$data["alg_list"][$i];
				}
			}
			if($isfirst == ''){
				$isfirst = 'c';
				$selecttable = $table_c;
			}
			else{
				$c_join = $c_join.' INNER JOIN '.$table_c.' ON '.$isfirst.'.C_id = c.C_id ';
			}
		}
		if(!empty($data["auto_self_list"])){
			for($i = 0; $i < count($data["auto_self_list"]);$i++){
				if($c_select == ''){
					$c_select = $c_select.'d.'.$data["auto_self_list"][$i];
				}
				else{
					$c_select = $c_select.', d.'.$data["auto_self_list"][$i];
				}
			}
			if($isfirst == ''){
				$isfirst = 'd';
				$selecttable = $table_d;
			}
			else{
				$c_join = $c_join.' INNER JOIN '.$table_d.' ON '.$isfirst.'.C_id = d.C_id ';
			}
		}
		// WAVEFORM F0============================================
		if(!empty($data["waveform_f0_list"])){
			for($i = 0; $i < count($data["waveform_f0_list"]);$i++){
				if($c_select == ''){
					$c_select = $c_select.'e.'.$data["waveform_f0_list"][$i];
				}
				else{
					$c_select = $c_select.', e.'.$data["waveform_f0_list"][$i];
				}
			}
			if($isfirst == ''){
				$isfirst = 'e';
				$selecttable = $table_e;
			}
			else{
				$c_join = $c_join.' INNER JOIN '.$table_e.' ON '.$isfirst.'.C_id = e.C_id ';
			}
		}
		// WAVEFORM F1============================================
		if(!empty($data["waveform_f1_list"])){
			for($i = 0; $i < count($data["waveform_f1_list"]);$i++){
				if($c_select == ''){
					$c_select = $c_select.'f.'.$data["waveform_f1_list"][$i];
				}
				else{
					$c_select = $c_select.', f.'.$data["waveform_f1_list"][$i];
				}
			}	
			if($isfirst == ''){
				$isfirst ='f';
				$selecttable = $table_f;
			}
			else{
				$c_join = $c_join.' INNER JOIN '.$table_f.' ON '.$isfirst.'.C_id = f.C_id ';
			}
			
		}
		//=====================================================
		/*if(!empty($data["dd_header_list"])){
			for($i = 0; $i < count($data["dd_header_list"]);$i++){
				if($c_select == ''){
					$c_select = $c_select.'g.'.$data["dd_header_list"][$i];
				}
				else{
					$c_select = $c_select.', g.'.$data["dd_header_list"][$i];
				}
			}	
			if($isfirst == ''){
				$isfirst ='g';
				$selecttable = $table_g;
			}
			else{
				$c_join = $c_join.' INNER JOIN '.$table_g.' ON '.$isfirst.'.C_id = g.C_id ';
			}	
		}
		/*if(!empty($data["p2p_list"])){
			for($i = 0; $i < count($data["p2p_list"]);$i++){
				if($c_select == ''){
					$c_select = $c_select.'h.'.$data["p2p_list"][$i];
				}
				else{
					$c_select = $c_select.', h.'.$data["p2p_list"][$i];
				}
			}	
			if($isfirst == ''){
				$isfirst ='h';
				$selecttable = $table_h;
			}
			else{
				$c_join = $c_join.' INNER JOIN '.$table_h.' ON '.$isfirst.'.C_id = h.C_id ';
			}
			
		}*/
		if(!empty($data["tp_version_list"])){
			for($i = 0; $i < count($data["tp_version_list"]);$i++){
				if($c_select == ''){
					$c_select = $c_select.'i.'.$data["tp_version_list"][$i];
				}
				else{
					$c_select = $c_select.', i.'.$data["tp_version_list"][$i];
				}
			}	
			if($isfirst == ''){
				$isfirst ='i';
				$selecttable = $table_i;
			}
			else{
				$c_join = $c_join.' INNER JOIN '.$table_i.' ON '.$isfirst.'.C_id = i.C_id ';
			}
			
		}
		/*if(!empty($data["others_list"])){
			for($i = 0; $i < count($data["others_list"]);$i++){
				if($c_select == ''){
					$c_select = $c_select.'j.'.$data["others_list"][$i];
				}
				else{
					$c_select = $c_select.', j.'.$data["others_list"][$i];
				}
			}	
			if($isfirst == ''){
				$isfirst ='j';
				$selecttable = $table_j;
			}
			else{
				$c_join = $c_join.' INNER JOIN '.$table_j.' ON '.$isfirst.'.C_id = j.C_id ';
			}
			
		}*/
		
		//DD REG================================================	
		if(!empty($data["dd_reg_list"])){
			if($c_select == ''){
				$c_select = $c_select.'g.value';
			}
			else{
				$c_select = $c_select.', g.value';
			}

			if($isfirst == ''){
				$isfirst ='g';
				$selecttable = $table_g;
			}
			else{
				$c_join = $c_join.' INNER JOIN '.$table_g.' ON '.$isfirst.'.C_id = g.C_id ';
			}	
		}
		//******************************************************
		//******************************************************
		$sql = "SELECT ".$c_select.' FROM '.$selecttable;
		$sql = $sql.$c_join;
		$sql = $sql.$c_where;
	
		$query = $this->db->query($sql);
		/*$query_result = $query->result();*/
		//print_r($query_result);
		
		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}
	}
	
	//Practice============================================================
	//====================================================================
	public function save_as_new($data) {
		$this->db->insert('news', $data);
	}
	
	public function model_stella_create_table() {
		$posts_fields=array(
			'id'=>array('type' => 'INT','constraint' => 5,'unsigned' => TRUE),
			'title'=>array('type' =>'VARCHAR','constraint' => 100),
			'content'=>array('type'=>'text'),
			'create_time'=>array('type'=>'INT','constraint'=>12));

		$this->dbforge->add_field($posts_fields);
		$this->dbforge->create_table('posts');
		//$this->db->insert('hah_entry', $data);
	}
	
	public function model_stella_add_field() {
		// Can work
		$fields = [
			'preferences' => ['type' => 'TEXT']
		];
		$this->dbforge->add_column('posts', $fields);


		// Can work....
		////$this->db->query('ALTER TABLE tbl_name AUTO_INCREMENT 1'); 
		//$this->db->query('ALTER TABLE posts ADD email varchar(255)'); 

		
	}
	
	public function model_stella_insert_data(){
		$data=array(
			'id'=> 1,
			'title'=>"hahhah",
			'content'=>"This is a test",
			'create_time'=>202009
		);
		
		//$this->db->where('id', 2);
		$this->db->insert('posts', $data);
        echo 'order has successfully been created';
	}
	
	public function model_stella_update_data(){
		//$this->db->where('id', 2);
		
		$data=array(
			'id'=> 2,
			'title'=>"untt",
			'content'=>"This is a test2",
			'create_time'=>20200930
		);
		
		$this->db->update('posts', $data);
        echo 'update success';
	}
	
	public function model_stella_join_table(){
	
		$sql = 'SELECT '.$this->projects_table.'.panel_name, '.$this->projects_table.'.ic_ver, '.$this->version_list_table.'.released_fw, '.$this->version_list_table.'.C_id';
		$sql = $sql.' FROM '.$this->projects_table;
		$sql = $sql.' INNER JOIN '.$this->version_list_table;
		$sql = $sql.' ON '.$this->projects_table.'.project_id='.$this->version_list_table.'.project_id';
		
		//echo $sql;
		$query = $this->db->query($sql);
		$query_result = $query->result();


		// Get Lastest FW by index==================================
		$latestfw = -1;
		$backupfw = -1;
		
		for($i = 0; $i < count($query_result); $i++){
			$tmp_d_id = substr($query_result[$i]->released_fw, 1, 2); 
			$tmp_c_id = substr($query_result[$i]->released_fw, 5, 2);
			
			$d_id = hexdec($tmp_d_id);
			$c_id = hexdec($tmp_c_id);
			
			if($backupfw  < 0){
				$backupfw = ($d_id + $c_id);
				$latestfw = $backupfw;
				
				//$releasefw = 'D'.$tmp_d_id.'_C_'.$tmp_c_id;
				$releasefw_ind = $i;
			}
			else{
				$latestfw = ($d_id + $c_id);
				if($latestfw > $backupfw){
					//$releasefw = 'D'.$tmp_d_id.'_C'.$tmp_c_id;
					$releasefw_ind = $i;
					$backupfw = $latestfw;
				}
				else{
					
				}
				
			}
		
		}
		//====================================================

		return $query_result[$releasefw_ind];
	}
	
	public function model_stella_delete_table(){
		//$this->db->where('id', 2);
		//$this->db->delete('posts'); 

		// Can work
		//$this->db->empty_table('posts'); // 清空table
		//$this->db->truncate('posts');
		
		
		// Can work
		//$this->dbforge->drop_table('posts', true); // 整個table會被刪掉
		$this->dbforge->drop_table($this->version_OTHERS, true);
		$this->dbforge->drop_table($this->version_TP_VERSION_TABLE, true);
		$this->dbforge->drop_table($this->version_TP_P2P_TABLE, true);
		$this->dbforge->drop_table($this->version_dd_header, true);
		$this->dbforge->drop_table($this->version_TP_ADC_CONFIG_NORMAL_F1, true);
		$this->dbforge->drop_table($this->version_TP_ADC_CONFIG_NORMAL_F0, true);
		$this->dbforge->drop_table($this->version_TP_HW_CONFIG_1_AUTO_SELF, true);
		$this->dbforge->drop_table($this->version_TP_HW_CONFIG_1_COD_FW_CONFIG, true);
		$this->dbforge->drop_table($this->version_FLASH_HEADER, true);
		$this->dbforge->drop_table($this->version_FLASH_FUNC, true);
		
		$this->dbforge->drop_table($this->version_list_table, true);
		
		//$this->dbforge->drop_table($this->projects_table, true);
	}
	//====================================================================
	//====================================================================
	public function login($identity, $password)
	{

		if (empty($identity) || empty($password))
		{
			$this->set_error('login_unsuccessful');
			return FALSE;
		}

		$sql = 'SELECT a.id, a.username FROM '.$this->auth_checker.' a';
		$sql = $sql.' WHERE a.userid="'.$identity.'" AND a.password='.$password;
		//print_r($sql);
		$query = $this->db->query($sql);
		
		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}

	}
	
	public function Insert_users($tomodeldata){
		$this->db->insert($this->auth_checker, $tomodeldata);
	}
	public function Remove_users($userid){
		$this->db->where('userid', $userid);
		$this->db->delete($this->auth_checker); 
	}
	/*
	public function range_query($parameter_table)
	{

		$sql = 'SELECT a.description FROM '.$this->alg_range.' a';
		$sql = $sql.' WHERE a.id='.$parameter_table;
		//print_r($sql);
		$query = $this->db->query($sql);
		
		if ($query->num_rows() > 0){
			return $query->result(); //result_array
		}

	}*/
}
?>