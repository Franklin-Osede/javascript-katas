// TODO: Identify the infinite recursion issue in this code
// HINT: Look for recursive functions without proper termination
// DEBUGGING TIP: Use console.log() to track recursion calls

function countDown(n) {
    console.log(n);
    // TODO: What's missing here that causes infinite recursion?
    return countDown(n - 1);
}

function findParent(node) {
    // TODO: What's wrong with this recursive function?
    if (node.parent) {
        return findParent(node.parent);
    }
    return node;
}

// TODO: What happens when you call countDown(5)?
// TODO: What happens when you call findParent with a circular reference?
// TODO: How would you fix this infinite recursion issue?
// TODO: What debugging techniques would you use to identify this issue?
