import { describe, it } from 'mocha';
import chai from 'chai';
import { app } from './twitter';

const { expect } = chai;

describe('Twitter', () => {
    it('should send tweet', async () => {
        await app.tweet('hi');
        await app.tweet('bye');

        const tweets = await app.getTweets();

        expect(tweets).to.deep.equal(['hi', 'bye']);
    });
})
