<div class="container">
    <section class="list-users">
        <h3>Danh sách todotypes</h3>
        <ul>
            <?php
            $this->load->helper('url');
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