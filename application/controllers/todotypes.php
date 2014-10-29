<?php 

class todotypes extends CI_Controller {
    public function __constructor() {
        parent::__constructor;
    }

    public function index() {
        $this->load->Model('TodoType');
        $data['todotypes'] = $this->TodoType->listAll();

        $this->load->view('templates/header', $data);
        $this->load->view('/todotypes/list_todotypes', $data);
        $this->load->view('templates/footer');
    }

    public function getAllTodoType() {
        $this->load->Model('TodoType');
        $data = $this->TodoType->getAllTodoType();
        header("Content-type: application/json");
        // return $this->output
        //     ->set_content_type('application/json')
        //     ->set_output(json_encode($data));
        echo 'json('.json_encode($data).')';
    }

    public function getAllTodoTypeJsonp() {
        $this->load->Model('TodoType');
        $data = $this->TodoType->getAllTodoType();
        return $data;
    }
}

 ?>