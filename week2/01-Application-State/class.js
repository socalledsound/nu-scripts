class User {
    constructor(username, id, imageURl){
        this.username = username;
        this.id = id;
        this.avatar = imageURl;
    }
}

console.log(User)
console.log(typeof User)

const user1 = new User('sam', '0029823', 'cloudinaryimageURl')
console.log(user1)