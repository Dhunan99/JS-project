const RenderPosts = () => {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let tableBody = document.getElementById('postsTableBody');
    tableBody.innerHTML=''; 
    posts.forEach(post => {
        let row=document.createElement('tr');
        row.innerHTML=`<td>${post.id}</td><td>${post.title}</td> <button class="minus">-</button></td>`;
        tableBody.appendChild(row);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    RenderPosts();
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    document.querySelector('.minus').addEventListener
});
