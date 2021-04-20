
const posts = require('./').db('posts').collection('posts');
const peoples = require('./').db('peoples').collection('peoples');

const save = async ({id, name, description,postedDate}) =>{
    const result = await posts.insertOne({id, name, description,postedDate});
   /* const results = await peoples.insertOne({id, name, description,postedDate});
    results.ops[0];*/
    return result.ops[0];
};

const getAll = async () =>{
    const cursor = await posts.find();
    return cursor.toArray();
};

const findViewById = async (id) =>{
    return await posts.findOne({id})
}

const removeById = async (id) =>{
    const result = await posts.deleteOne({id});
    return result.ops[0];
}

const update = async (id, {name, description, postedDate}) =>{
    const result= await posts.replaceOne({id}, {id,name,description,postedDate });
    return result.ops[0];
}

module.exports = {save, getAll, findViewById, removeById, update};

