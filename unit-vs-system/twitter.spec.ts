import { describe, it } from 'mocha';
import chai from 'chai';
import spies from 'chai-spies';
import { Twitter, TweetEventEmitter, InMemoryTweetRepo } from './twitter';

chai.use(spies);

const { expect } = chai;

describe('InMemoryTweetRepo', () => {
    it('should save tweet', () => {
        const inMemoryTweetRepo = new InMemoryTweetRepo();

        inMemoryTweetRepo.save('hi');
        inMemoryTweetRepo.save('bye');

        expect(inMemoryTweetRepo.get()).to.deep.equal(['hi', 'bye']);
    });
})

describe('TweetEventEmitter', () => {
    it('should emit tweet', () => {
        const events = [];
        const tweetEventEmitter = new TweetEventEmitter();

        tweetEventEmitter.subscribe(tweet => events.push(tweet));

        tweetEventEmitter.emit('hi');
        tweetEventEmitter.emit('bye');

        expect(events).to.deep.equal(['hi', 'bye']);
    });
})

describe('Twitter', () => {
   let twitter;
   const tweetRepoMock = {
        save: chai.spy(message => message),
        get: chai.spy()
   };
   const tweetEmitterMock = {
        emit: chai.spy(),
        subscribe: chai.spy(),
   };

   beforeEach(() => {
       twitter = new Twitter(tweetRepoMock, tweetEmitterMock);
   });

   it('should send tweet', () => {
       twitter.tweet('hi');
       twitter.tweet('bye');

       expect(tweetRepoMock.save).to.have.been.called.with('hi');
       expect(tweetRepoMock.save).to.have.been.called.with('bye');

       expect(tweetEmitterMock.emit).to.have.been.called.with('hi');
       expect(tweetEmitterMock.emit).to.have.been.called.with('bye');
   });

    it('should get tweets', () => {
        const tweets = twitter.getTweets();

        expect(tweets).to.deep.equal([])
    })
});