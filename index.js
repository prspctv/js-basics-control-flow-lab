function scuberGreetingForFeet(){
  // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
  
}

function ternaryCheckCity(){
  // Write your code here!
  return city === 'NYC' 
  ? 'Ok, sounds good.'
  : 'No go.'
}

function switchOnCharmFromTip(){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
  

}