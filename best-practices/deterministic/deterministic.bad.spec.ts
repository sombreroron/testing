import { expect } from 'chai';
import { random } from 'lodash';
import { UserService } from '../user';

describe('Deterministic (BAD)', () => {
    const userService = new UserService();
    const users = ['@dada', '@didi', '@dudu', '@dash'];

    beforeEach(() => {
        users.forEach(user => {
            userService.setUser(user);
        })
    })

    it('should get user', () => {
        const id = random(0, users.length - 1);
        const user = userService.getUser(id);

        expect(user.username).to.equal(users[id])
    });
})
