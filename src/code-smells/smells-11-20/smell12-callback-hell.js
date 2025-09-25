// TODO: Identify the callback hell issue in this code
// HINT: Look for nested callbacks and error handling
// DEBUGGING TIP: Use console.log() to track callback execution

function fetchUserData(userId, callback) {
    // TODO: What's wrong with this nested callback structure?
    fetch(`/api/users/${userId}`, (err, userData) => {
        if (err) {
            callback(err, null);
        } else {
            fetch(`/api/posts/${userId}`, (err, posts) => {
                if (err) {
                    callback(err, null);
                } else {
                    fetch(`/api/comments/${userId}`, (err, comments) => {
                        if (err) {
                            callback(err, null);
                        } else {
                            callback(null, {
                                user: userData,
                                posts: posts,
                                comments: comments
                            });
                        }
                    });
                }
            });
        }
    });
}

// TODO: What happens when any of these API calls fail?
// TODO: How would you fix this callback hell?
// TODO: What debugging techniques would you use to identify this issue?
