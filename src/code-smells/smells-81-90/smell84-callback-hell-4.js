// TODO: Identify the callback hell issue in this code
// DEBUGGING TIP: Use console.log() to track callback execution

function fetchUserData(userId, callback) {
    fetch(`/api/users/${userId}`, (err, userData) => {
        if (err) {
            callback(err, null);
        } else {
            fetch(`/api/posts/${userId}`, (err, posts) => {
                if (err) {
                    callback(err, null);
                } else {
                    callback(null, {
                        user: userData,
                        posts: posts
                    });
                }
            });
        }
    });
}

// TODO: What happens when any of these API calls fail?
// TODO: How would you fix this issue?
// TODO: What debugging techniques would you use to identify this issue?
