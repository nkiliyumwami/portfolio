// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

//Filter and sort list
let options = {
    valueNames: [ 'name', 'type', 'expertise' ]
  };
  
  let donationList = new List('donations', options);