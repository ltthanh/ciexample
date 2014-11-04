<?php 
class todolists extends CI_Controller {
    public function __constructor() {
        parent::__constructor;
    }

    public function index() {
        echo "Give me $5";
    }

    public function getAllTodoList() {
        $this->load->Model('TodoList');
        $data = $this->TodoList->getAllTodoList();
        header("Content-type: application/json");
        echo 'json('.json_encode($data).')';
    }

}
?>