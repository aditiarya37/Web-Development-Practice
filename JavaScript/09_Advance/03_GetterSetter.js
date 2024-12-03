class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email = val
    }
    get password(){
        return `${this._password}@123`
    }
    set password(val){
        this._password = val
    }
}
const naruto = new User("naruto@anime.com","sasuke")
console.log(naruto.email);
console.log(naruto.password);