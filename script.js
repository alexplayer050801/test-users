$(document).ready(function() {
	$('#show-users-btn').click(function() {
		$.ajax({
			type: 'GET',
			url: 'get_users.php',
			success: function(data) {
				var users = JSON.parse(data);
				var userList = $('#user-list');
				userList.empty(); // clear the list
				$.each(users, function(index, user) {
					userList.append('<p>ID: ' + user.id + ', Username: ' + user.username + '</p>');
				});
			}
		});
	});
});
