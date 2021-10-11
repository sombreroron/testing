import { it } from 'mocha';
import { expect } from 'chai';
import { UserService } from '../user';

describe('Independent (BAD)', () => {
const userService = new UserService();

    it('should create user id', () => {
        const result = userService.setUser();

        expect(result.id).to.equal(0);
    });

    it('should increment user id', () => {
        const result = userService.setUser();

        expect(result.id).to.equal(1);
    });
})