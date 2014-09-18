<div class="container">
    <section class="list-users">
        <h3>Danh sách người dùng</h3>
        <ul>
            <?php
            $this->load->helper('url');
            foreach ($users as $row) {
                echo "<li>";
                echo "<div class='user-info'>";
                echo "<h4><a href=" . base_url() . "index.php/users/view/" . $row['user_id'] . ">" . $row['user_fullname'] . "</a></h4>";
                echo "<p><strong>Email :</strong> " . $row['user_email'] . "</p>";
                echo "<p><a href='#'>Edit</a></p>";
                echo "</li>";
            }
            ?>            
        </ul>
    </section>
</div>