import { EventEmitter } from 'events';

interface TweetRepo {
    save(message: string): string;

    get(): string[];
}

interface TweetEmitter {
    emit(message: string): void;

    subscribe(fn): void;
}

export class Twitter {
    private tweets: string[] = [];

    constructor(private tweetRepo: TweetRepo, private tweetEmitter: TweetEmitter) {
        this.tweetEmitter.subscribe(tweet => this.tweets.push(tweet));
    }

    tweet(tweet: string): void {
        const result = this.tweetRepo.save(tweet);
        this.tweetEmitter.emit(result);
    }

    getTweets(): string[] {
        return this.tweets;
    }
}

export class InMemoryTweetRepo implements TweetRepo {
    private tweets: string[] = [];

    save(message: string): string {
        this.tweets.push(message);

        return this.tweets[0];
    }

    get(): string[] {
        return this.tweets;
    }
}

export class TweetEventEmitter implements TweetEmitter {
    private emitter = new EventEmitter();

    emit(tweet: string): void {
        this.emitter.emit('tweet', tweet);
    }

    subscribe(fn): void {
        this.emitter.on('tweet', fn);
    }
}

export const app = new Twitter(new InMemoryTweetRepo(), new TweetEventEmitter());
