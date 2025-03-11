const addPost = (post) => {
    post.preventDefault();
    id=document.getElementById('id').value;
    title=document.getElementById('title').value;
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push({'id':id,'title':title});
    localStorage.setItem("posts", JSON.stringify(posts));
    window.location = "/";
}
