import { describe, it } from 'mocha';
import chai from 'chai';
import { app } from './twitter';

const { expect } = chai;

describe('Twitter', () => {
    it('should send tweet', () => {
        app.tweet('hi');
        app.tweet('bye');

        const tweets = app.getTweets();

        expect(tweets).to.deep.equal(['hi', 'bye']);
    });
})
