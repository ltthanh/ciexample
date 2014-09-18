<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of users
 *
 * @author HOME
 */
class Users extends CI_Controller {

    //put your code here
    public function __construct() {
        parent::__construct();
    }    
    
    public function index() {
        $this->load->Model('User');
        $data['users'] = $this->User->listAll();
        $data['title'] = "List users";
        $this->load->view('templates/header', $data);
        $this->load->view('/users/list_users', $data);
        $this->load->view('templates/footer');
    }

    public function view() {
        echo $this->uri->segment(3);
    }

    public function add() {
        if ($_SERVER['REQUEST_METHOD'] === "POST") {
            $data['title'] = "Success";
            $this->load->view('templates/header', $data);
            $user = array(
                "user_fullname" => $_POST["fullname"],
                "user_email" => $_POST["email"],
                "user_password" => $_POST["password"],
                "user_status" => $_POST["status"]
            );
            $this->load->Model('User');
            $this->User->addUser($user);
            $this->load->view('templates/footer');
        } else {

            $data['title'] = "Add User";
            $this->load->view('templates/header', $data);
            if (!file_exists(APPPATH . '/views/users/add_user.php')) {
                show_404();
            }
            $this->load->view('users/add_user');
            $this->load->view('templates/footer');
            echo "<pre>";
            echo "asdasdasd";
            echo "</pre>";
        }
    }

    public function edit() {
        if ($_SERVER['REQUEST_METHOD'] === "POST") {
            $idUser = $this->input->post('hId');
            if (!isset($idUser)) {
                echo "Khong Co " . $idUser;
            } else {
                echo "Co " . $idUser;
                $userUpdate = array(
                    "user_id" => $this->input->post('hId'),
                    "user_fullname" => $this->input->post('fullname'),
                    "user_email" => $this->input->post('email'),
                    "user_password" => $this->input->post('password'),
                    "user_status" => $this->input->post('status')
                );
                echo "<pre>";
                print_r($userUpdate);
                echo "</pre>";
                $this->load->Model('User');
                $this->User->editUser($userUpdate);
            }
        } else {
            if ($this->uri->segment(3) === false) {
                show_404();
            }
            $data['title'] = "Edit user";
            $data['idU'] = $this->uri->segment(3);
            $this->load->Model('User');
            $queryArr = $this->User->getUserById($this->uri->segment(3));
            if (!isset($queryArr) || count($queryArr) <= 0) {
                // show_404();                
                show_error("Không tìm thấy người dùng này", 404, "Không tìm thấy");
            }
            $data['userInfo'] = $queryArr;
            $this->load->View('templates/header', $data);
            $this->load->View('users/edit_user', $data);
            $this->load->View('templates/footer');
        }
    }
    
    public function getAllUsers() {
        $this->load->Model('User');
        $data = $this->User->getAllUsers();
        return $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode($data));
    }

}
