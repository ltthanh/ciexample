<?php $this->load->helper('url'); ?>
<div>
    <h1>Add new todo type</h1>
    <p>
        <label for="todotype">Todotype name</label>
        <input type="text" id="todotype">
        <button id="btnAddTodotype">Add new todotype</button>
    </p>
    <p id="status-loading" class="no-display">
        <img src="<?php echo base_url(); ?>images/loading.gif" alt="">
    </p>
</div>