<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of User
 *
 * @author HOME
 */
class User extends CI_Model {

    //put your code here
    public function __construct() {
        parent::__construct();
        $this->load->database();
    }

    public function listAll() {
        $this->db->order_by('user_fullname');
        $this->db->limit(1,0);
        $query = $this->db->get('users');
        return $query->result_array();
    }

    public function addUser($data) {
        $this->db->insert('users', $data);
    }

}
