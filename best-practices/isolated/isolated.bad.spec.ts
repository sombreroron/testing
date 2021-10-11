import { it } from 'mocha';
import { expect } from 'chai';
import { UserService } from '../user';

describe('Isolated (BAD)', () => {
    const userService = new UserService();

    it('should automatically create user name', () => {
        const result = userService.setUser();

        expect(result.username).to.equal('@user0');
    });

    it('should set user name', () => {
        const result = userService.setUser('@test');

        expect(result.username).to.equal('@test');
    });
});
