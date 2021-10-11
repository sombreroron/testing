export class UserService {
    private users = [];

    setUser(username?, id?) {
        const _id = id || this.users.length;
        const _username = username || `@user${_id}`;

        const user = { id: _id, username: _username };

        this.users.push(user);

        return user;
    }

    getUser(id) {
        if (!id) throw Error("id is missing");

        return this.users.find(user => user.id === id);
    }
}
