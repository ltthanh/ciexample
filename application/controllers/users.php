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
        $this->load->view('/users/list_users', $data);
    }

    public function view() {
        echo "View";
    }

    public function add() {        
        if ($_SERVER['REQUEST_METHOD'] === "POST") {
            $data['title'] = "Success";
            $this->load->view('templates/header', $data);
            $user = array (
              "user_fullname"=>$_POST["fullname"],
              "user_email"=>$_POST["email"],
              "user_password"=>$_POST["password"],
              "user_status"=>$_POST["status"]
            );
            $this->load->Model('User');
            $this->User->addUser($user);
            $this->load->view('templates/footer');
        } else {
            
            $data['title'] = "Add User";
            $this->load->view('templates/header', $data);
            if(!file_exists(APPPATH.'/views/users/add_user.php')){
                show_404();
            }
            $this->load->view('users/add_user');            
            $this->load->view('templates/footer');
            echo "<pre>";
            echo "asdasdasd";
            echo "</pre>";            
        }
    }

}
