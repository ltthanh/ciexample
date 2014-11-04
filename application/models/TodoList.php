<?php 
class TodoList extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->load->database();
    }

    public function listAll() {
        $query = $this->db->get('todolist');
        return $query->result_array();
    }

    public function getAllTodoList() {
        $query = $this->db->get('todolist');
        return $query->result_array();
    }

    /*
     * insert todolist
     */
    public function insert($data) {
        
        if(isset($data)) {
            $this->db->insert('todolist', $data);    
        }
    }

    public function update($data) {
        $this->db->where('id', $data['id']);
        $this->db->update('todolist', $data);
    }
}
?>