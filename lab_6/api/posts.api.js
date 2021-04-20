const uuid = require('uuid');
const posts = new Map();
const {save, getAll, findViewById, removeById, update} = require('../dal/post.dao');

const createPost = async ({name, description}) =>{
   const post = {
       id : uuid.v4(),
       postedDate: new Date(),
       name,
       description
   }
  return  await save(post);

}
const getPosts = async () =>{
    return await getAll();
}

const getPost = async (id) =>{
    return  await findViewById(id);
}

const removePostById = async  (id) =>{
    const x = await findViewById(id);
     await removeById(id);
    return x;
}

const updatePostById = async  (id, {name, description, postedDate}) =>{
    postedDate = new Date()
    return await update(id, {name, description, postedDate});
}



module.exports = {getPosts, getPost, createPost, removePostById, updatePostById}