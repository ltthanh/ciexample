<div class="container">
    <!-- form validation -->
    <section class="jstr-form">
        <h1>1. Create new account</h1>
        <form id="form-signup" method="POST" action="add">
            <fieldset>
                <legend>Sign up</legend>
                <p>
                    <label>Full name :</label>
                    <input type="text" name="fullname" placeholder="Enter your name"/>
                </p>
                <p>
                    <label>Email :</label>
                    <input type="email" name="email" placeholder="Enter your email"/>
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
                    <input type="checkbox" name="status" checked="1"> Agree</input>
                </p>
                <p>
                    <input type="submit" class="btn btn-success" name="submit" value="Sign up"/>
                    <input type="reset" class="btn btn-default" name="submit" value="Cancel"/>
                </p>
            </fieldset>
        </form>
    </section>
</div>