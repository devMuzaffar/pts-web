class UserDTO {
    constructor(user){
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.username = user.username;
        this.role = user.role;
    }
}


export default UserDTO;