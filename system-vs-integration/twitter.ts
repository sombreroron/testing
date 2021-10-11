import { EventEmitter } from 'events';
import axios from 'axios';

interface TweetRepo {
    save(message: string): Promise<string>;
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

    async tweet(tweet: string): Promise<void> {
        const result = await this.tweetRepo.save(tweet);
        this.tweetEmitter.emit(result);
    }

    getTweets(): string[] {
        return this.tweets;
    }
}

export class TweetCrudRepo implements TweetRepo {
    async save(tweet: string): Promise<string> {
        const result = await axios.post('http://localhost:3333/tweet', { tweet });

        return result.data.tweet;
    }

    async get(): Promise<string[]> {
        const result = await axios.get('http://localhost:3333/tweet');

        return result.data;
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

export const app = new Twitter(new TweetCrudRepo(), new TweetEventEmitter());