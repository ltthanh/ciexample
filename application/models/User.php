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
        $this->db->order_by('user_id');
        $this->db->limit(10,0);
        $query = $this->db->get('users');
        return $query->result_array();
    }

    public function addUser($data) {
        $this->db->insert('users', $data);
    }
    
    public function editUser($data) {
        $this->db->where('user_id', $data['user_id']);
        $this->db->update('users', $data);
    }
    
    public function getUserById($id = 0) {
        $this->db->where('user_id', $id);        
        $query = $this->db->get('users');
        return $query->result_array();
    }
    
    public function getAllUsers() {
        $query = $this->db->get('users');
        return $query->result_array();
    }

}
