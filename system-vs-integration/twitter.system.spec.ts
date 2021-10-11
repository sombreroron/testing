import { describe, it } from 'mocha';
import chai from 'chai';
import nock from 'nock';
import { app } from './twitter';

nock('http://localhost:3333')
    .persist()
    .post('/tweet')
    .reply(201, (uri, body) => body)

const { expect } = chai;

describe('Twitter', () => {
    it('should send tweet', async () => {
        await app.tweet('hi');
        await app.tweet('bye');

        const tweets = await app.getTweets();

        expect(tweets).to.deep.equal(['hi', 'bye']);
    });
})
