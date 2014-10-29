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

    public function addTodoType($data) {
        $this->db->insert('todotypes', $data);
    }

    public function getAllTodoType() {
        $query = $this->db->get('todotype');
        return $query->result_array();
    }
}
?>