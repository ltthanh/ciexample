<div class="container">
    <section class="list-users">
        <h3>Danh sách todotypes</h3>
        <?php 
        $this->load->helper('url');
        echo '<h1><a href="'. base_url().'index.php/todotypes/add">ADD NEW TODOTYPE</a></h1>'
         ?>
        <ul>
            <?php
            
            foreach ($todotypes as $row) {
                echo "<li>";
                echo "<div class='user-info'>";
                echo "<h4><a href=" . base_url() . "index.php/todotypes/view/" . $row['id'] . ">" . $row['typename'] . "</a></h4>";
                echo "<p><strong>Email :</strong> " . $row['typename'] . "</p>";
                echo "<p><a href='#'>Edit</a></p>";
                echo "</li>";
            }
            ?>
        </ul>
    </section>
</div>