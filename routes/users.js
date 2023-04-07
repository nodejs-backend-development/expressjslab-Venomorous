const express = require('express');
const { getUsers, addUser } = require('../controllers/users.controller');
// const axios = require('axios');
const http = require('http');

const router = express.Router();

// router.get('/users/:id/posts', async (req, res) => {
//     const { id } = req.params;

//     const options = {
//         hostname: 'gorest.co.in',
//         path: `/public/v2/users/${id}/posts`,
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': '307f41c022ff1bd09df4e98ec070770aefac6c31be77bf19ee6c784bef8b0cfd'
//         }
//     };

//     const request = http.request(options, (response) => {
//         let data = '';

//         response.on('data', (chunk) => {
//             data += chunk;
//             console.log(data);
//         });

//         response.on('end', () => {
//             console.log(JSON.parse(data));
//             res.status(200).json(JSON.parse(data));
//         });
//     });

//     request.on('error', (error) => {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     });

//     request.end();
// });

// router.get('/users/:id/posts', async (req, res) => {
//     const { id } = req.params;

//     try {
//         const response = await axios.get(`https://gorest.co.in/public/v2/users/${id}/posts`);
//         res.status(200).json(response.data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

/* GET users listing. */
router.get('/', getUsers);
router.post('/new', addUser);

module.exports = router;
