<?php 
class TodoType extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->load->database();
    }

    public function listAll() {
        $query = $this->db->get('todotype');
        return $query->result_array();
    }

    public function getAllTodoType() {
        $query = $this->db->get('todotype');
        return $query->result_array();
    }

    /*
     * insert todotype
     */
    public function insert($data) {
        // check exists typename
        if(isset($data)) {
            $this->db->insert('todotype', $data);    
        }
    }

    public function update($data) {
        $this->db->where('id', $data['id']);
        $this->db->update('todotype', $data);
    }
}
?>