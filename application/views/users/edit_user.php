<div class="container">
    <!-- form validation -->
    <section class="jstr-form">
        <h1>Edit account <?php echo $idU; ?></h1>
        <form id="form-signup" method="POST" action=".">
            <fieldset>
                <legend>Update info</legend>
                <input type="hidden" name="hId" value="<?php echo $idU; ?>" />
                <p>
                    <label>Full name :</label>
                    <input type="text" name="fullname" value="<?php echo $userInfo[0]['user_fullname'] ?>" placeholder="Enter your name"/>
                </p>
                <p>
                    <label>Email :</label>
                    <input type="email" name="email" value="<?php echo $userInfo[0]['user_email'] ?>" placeholder="Enter your email"/>
                </p>
                <p>
                    <label>Password :</label>
                    <input type="password" name="password" placeholder="Enter your password"/>
                </p>
                <p>
                    <label>Password Retype:</label>
                    <input type="password" name="passwordretype" placeholder="Retype your password"/>
                </p>
                <p>
                    <input type="checkbox" name="status" checked="<?php echo $userInfo[0]['user_status']?>"> Agree</input>
                </p>
                <p>
                    <input type="submit" class="btn btn-success" name="submit" value="Update"/>
                    <input type="reset" class="btn btn-default" name="submit" value="Reset"/>
                </p>
            </fieldset>
        </form>
    </section>
</div>