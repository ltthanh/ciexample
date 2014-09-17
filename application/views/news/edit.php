<?php 
$this->load->helper('form');
$attributes = array('class' => 'edit', 'id' => 'editNews');
echo form_open('news/edit', $attributes);
 ?>