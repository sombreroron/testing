import { expect } from 'chai';
import { UserService } from '../user';

describe('Focused (BAD)', () => {
    let userService;

    beforeEach(() => {
        userService = new UserService();
    })

    it('should generate user id', () => {
        const result = userService.setUser('@test');

        expect(result).to.deep.equal({ id: 0, username: '@test' });
    })

    it('should create random user name', () => {
        const result = userService.setUser();

        expect(result).to.deep.equal({ id: 0, username: '@user0' });
    })

    it('should increment user id', () => {
        expect(userService.setUser()).to.deep.equal({ id: 0, username: '@user0' });
        expect(userService.setUser()).to.deep.equal({ id: 1, username: '@user1' });
    })
})