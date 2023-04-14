const request = require('supertest');
const app = require('../app');
const { getRequest, postRequest } = require('../clients/httpClient');

jest.mock('../clients/httpClient.js');

require('dotenv').config();

describe('GET /posts/972885', () => {
    it('should return all posts', async () => {
        const post = {
            id: 10907,
            user_id: 972885,
            title: 'My name is Vadym',
            body: 'Testing Iding1',
        };
        getRequest.mockReturnValue([post]);
        const res = await request(app).get('/posts/972885');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body).toStrictEqual([post]);
        expect(getRequest).toHaveBeenCalledTimes(1);
        expect(getRequest).toHaveBeenCalledWith(
            'https://gorest.co.in/public/v2/users/972885/posts',
        );
    });
});

describe('POST /posts/new/972885', () => {
    it('should add a post', async () => {
        const post = {
            id: 10907,
            user_id: 972885,
            title: 'My name is Vadym',
            body: 'Testing Iding1',
        };
        postRequest.mockReturnValue(post);
        const res = await request(app).post('/posts/new/972885').send({
            user_id: 972885,
            title: 'My name is Vadym',
            body: 'Testing Iding1',
        });
        expect(res.statusCode).toBe(201);
        expect(res.body).toStrictEqual(post);
        expect(postRequest).toHaveBeenCalledTimes(1);
        expect(postRequest).toHaveBeenCalledWith(
            'https://gorest.co.in/public/v2/users/972885/posts',
            'POST',
            { body: 'Testing Iding1', title: 'My name is Vadym', user_id: 972885 },
        );
    });
});
