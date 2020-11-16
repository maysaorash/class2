class User {
    constructor(uName,eMail) {
      this._username = uName;
      this.email = eMail;
      this._password = User.generatePassword(8);
    }
  
    get password() {
      return this._password;
    }
  
    set password(value) {
      this._password = value;
    }
  
    static generatePassword(num = 8) {
      // minimum [num] carachters long, included at least 1 number, 1 Uppercase, 1 special characters such as @#$%&!
      const numbers = '1234567890';
      const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
      const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const specials = '!@#$%^&*';
      const all = numbers + lowerCase + upperCases + specials;
      let password = []
  
      password.push(numbers[Math.floor(Math.random() * numbers.length)]);
      password.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
      password.push(upperCases[Math.floor(Math.random() * upperCases.length)]);
      password.push(specials[Math.floor(Math.random() * specials.length)]);
  
      for(let i = 0; i < num - 5; i++){
        password.push(all[Math.floor(Math.random() * all.length)]);
      }
  
      // Start shuffling the password array
      let currentIndex = password.length
      let temporaryValue;
      let randomIndex;
  
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
  
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
  
        // And swap it with the current element.
        temporaryValue = password[currentIndex];
        password[currentIndex] = password[randomIndex];
        password[randomIndex] = temporaryValue;
      }
  
      return password.join('');
  
    }
  }
  
  class TwitterUser extends User {
    constructor(uName, eMail, twts) {
      super(uName,eMail);
      this.tweets = twts;
    }
  
    get username() {
      return '@' + this._username;
    }
  }
  
  const jack = new User('Jack', 'jack@example.com');
  
  const john = new TwitterUser('John', 'john@example.com',['hellow, this is my first tweeet', 'oh yeah! thats second tweet here!!!']);
  
  