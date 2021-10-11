import { it } from 'mocha';
import { expect } from 'chai';
import { random } from 'lodash';
import { UserService } from '../user';

describe('Simple (BAD)', () => {
    const userService = new UserService();

    function generateData(username = '@test', id = random(1, 100)) {
        const user = userService.setUser(username, id);

        const result = userService.getUser(user.id);

        return result;
    }

    it('should set user name', () => {
        expect(generateData().username).to.equal('@test');
    });
});
