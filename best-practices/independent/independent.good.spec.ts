import { it } from 'mocha';
import { expect } from 'chai';
import { UserService } from '../user';

describe('Independent (GOOD)', () => {
    let userService;

    beforeEach(() => {
        userService  = new UserService();
    })

    it('should create user id', () => {
        const result = userService.setUser();

        expect(result.id).to.equal(0);
    });

    it('should increment user id', () => {
        userService.setUser();
        const result = userService.setUser();

        expect(result.id).to.equal(1);
    });
})