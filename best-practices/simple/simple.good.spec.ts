import { it } from 'mocha';
import { expect } from 'chai';
import { UserService } from '../user';

describe('Simple (GOOD)', () => {
    const userService = new UserService();

    it('should set user name', () => {
        const { id } = userService.setUser('@test');
        const user = userService.getUser(id)

        expect(user.username).to.equal('@test');
    });
});
