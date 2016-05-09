function President(name, politicalParty, yearsInOffice, homeState){
  this.name = name;
  this.politicalParty = politicalParty;
  this.yearsInOffice = yearsInOffice;
  this.homeState = homeState;
  this.veto = function(){
    return "NO!";
  };
  this.passBill = function(){
    return "You can do that!";
  };
  this.doCharity = function(){
    return "I like to help people.";
  };
  this.conductPressInterview = function(){
    return "I am proud to be an American.";
  };
  this.sayHi = function(){
    return "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + ".";
  };
}

washington = new President("George Washington", "Independent Party", "1789-1797", "Virginia");
lincoln = new President("Abraham Lincoln", "National Union Party", "1861-1865", "Kentucky");
nixon = new President("Richard Nixon", "Republican Party", "1969-1974", "California");
carter = new President("Jimmy Carter", "Democratic Party", "1977-1981", "Georgia");
