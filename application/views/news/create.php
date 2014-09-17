<h2>ニュースを作成します。( Create a news )</h2>
<?php echo validation_errors(); ?>

<?php echo form_open('news/create') ?>

	<label for="title">タイトル (Title)</label>
	<input type="input" name="title" /><br />

	<label for="text">テキスト (Text)</label>
	<textarea name="text"></textarea><br />

	<input type="submit" name="submit" value="ニュース項目を作成します。">

</form>