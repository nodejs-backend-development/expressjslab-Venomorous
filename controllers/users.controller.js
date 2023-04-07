const {getRequest, postRequest} = require('../clients/httpClient');

const users = [
    {
        id: 1,
        firstName: 'FirstName1',
        lastName: 'LastName1',
        email: 'a1@b.com',
    },
    {
        id: 2,
        firstName: 'FirstName2',
        lastName: 'LastName2',
        email: 'a2@b.com',
    },
    {
        id: 3,
        firstName: 'FirstName3',
        lastName: 'LastName3',
        email: 'a3@b.com',
    },
];

const getUsers = async (req, res) => {
    // const { id } = req.params;
    // console.log(`https://gorest.co.in/public/v2/users/804440/posts`);
    // const data = await getRequest(`http://localhost:3000/posts`);
    const data = await getRequest(`https://gorest.co.in/public/v2/users/804440/posts`);
    console.log(data);
    res.status(200).json(data);
};

// add user using postRequest
const addUser = async (req, res) => {
    const user = req.body;
    console.log(user);
    // await postRequest(`http://localhost:3000/posts`, 'POST', user);
    await postRequest(`https://gorest.co.in/public/v2/users/804440/posts`, 'POST', user);
    // users.push(user);
    res.status(201).json(user);
};

module.exports = {
    getUsers,
    addUser,
};
