import { expect } from 'chai';
import { UserService } from '../user';

describe('Focused (GOOD)', () => {
    let userService;

    beforeEach(() => {
        userService = new UserService();
    })

    it('should generate user id', () => {
        const result = userService.setUser('@test');

        expect(result.id).to.equal(0);
    })

    it('should create random user name', () => {
        const result = userService.setUser();

        expect(result.username).to.equal('@user0');
    })

    it('should increment user id', () => {
        expect(userService.setUser().id).to.equal(0);
        expect(userService.setUser().id).to.equal(1);
    })
})