import { expect } from 'chai';
import { UserService } from '../user';

describe('Deterministic (GOOD)', () => {
    const userService = new UserService();
    const users = ['@dada', '@didi', '@dudu', '@dash'];

    beforeEach(() => {
        users.forEach(user => {
            userService.setUser(user);
        })
    })

    it('should get first user', () => {
        const user = userService.getUser(0);

        expect(user.username).to.equal(users[0])
    });

    it('should get next user', () => {
        const user = userService.getUser(1);

        expect(user.username).to.equal(users[1])
    });
})
