const request = require('supertest');
const app = require('../app');

require('dotenv').config();

describe ('GET /posts', () => {
    it ('should return all posts', async () => {
        const res = await request(app).get('/posts');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe ('POST /posts/new', () => {
    it ('should add a post', async () => {
        const res = await request(app).post('/posts/new').send({
            user_id: 804440,
            title: 'My name is Vadym',
            body: 'This is the text for testing',
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.body).toBe('This is the text for testing');
    });
});