const uuid = require('uuid');
const posts = new Map();

function createPost({name, description}){
   const post = {
       id : uuid.v4(),
       date: new Date(),
       name,
       description
   }
   posts.set(post.id, post);
   return post;
}
function getPosts(){
    return [...posts.values()] ;
}

function getPost(id){
    return posts.get(id);
}

module.exports = {getPosts, getPost, createPost}