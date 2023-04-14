const { getRequest, postRequest } = require('../clients/httpClient');

const getPosts = async (req, res) => {
    const { id } = req.params;
    const data = await getRequest(`https://gorest.co.in/public/v2/users/${id}/posts`);
    console.log(data);
    res.status(200).json(data);
};

const addPost = async (req, res) => {
    const post = req.body;
    const { id } = req.params;
    const createdPost = await postRequest(
        `https://gorest.co.in/public/v2/users/${id}/posts`,
        'POST',
        post,
    );
    res.status(201).json(createdPost);
};

module.exports = {
    getPosts,
    addPost,
};
