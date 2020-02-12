let userName = 'Elizabeth';
userName ? console.log (`Hello, ${userName} I am the Magic 8 Ball, ask away!`):console.log ('Hello!');

let userQuestion = 'Should I take the job?';
console.log(`${userName} asked, ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';
switch (randomNumber){
  case 0:
    eightBall = 'Yes, you will be amazing at it!'
      break;
    case 1:
    eightBall = 'Think long and hard!!'
      break;
    case 2:
    eightBall = 'Def yes'
      break;
    case 3:
    eightBall = 'You are so talented and have so much potential!!'
      break;
    case 4:
    eightBall = 'Why would you not!?!'
      break;
    case 5:
    eightBall = 'Yes yes yes yes '
      break;
    case 6:
    eightBall ='I wish you wouldnt doubt yourself :/'
      break;
    case 7:
    eightBall = 'You would be crazy not to!!'
      break;
}
console.log (eightBall);