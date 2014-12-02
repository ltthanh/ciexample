<?php 

class todotypes extends CI_Controller {
    public function __constructor() {
        parent::__constructor;
    }

    public function index() {
        $this->load->Model('TodoType');
        $data['title'] = "Index TODOTYPE";
        $data['todotypes'] = $this->TodoType->listAll();

        $this->load->view('templates/header', $data);
        $this->load->view('/todotypes/list_todotypes', $data);
        $this->load->view('templates/footer');
    }

    public function getAllTodoTypeJsonp() {
        $this->load->Model('TodoType');
        $data = $this->TodoType->getAllTodoType();
        header("Content-type: application/json");
        // return $this->output
        //     ->set_content_type('application/json')
        //     ->set_output(json_encode($data));
        echo 'json('.json_encode($data).')';
    }

    public function getAllTodoType() {
        $this->load->Model('TodoType');
        $data = $this->TodoType->getAllTodoType();
        return $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($data));
    }

    public function edit() {

    }

    public function add() {
        $data['title'] = "Add new todotype";
        $type_name = $this->uri->segment(3);
        $type_name_dunk = $this->uri->segment(4);

        if(!empty($type_name)) {
            // if have a parameter 3
            echo $type_name;
            $todotype = array(
                "id" => null,
                "typename" => $type_name,
                "lastupdated" => null
                );
            $this->load->Model('TodoType');
            $this->TodoType->insert($todotype);
            echo "Insert success";
            return "1";
        } else {
            // dont have parameter 3
            $this->load->view('templates/header', $data);
            $this->load->view('todotypes/add', $data);
            $this->load->view('templates/footer');
        }
        
    }
}

?>