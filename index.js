function change() {
  // Get the value of the input field
  var date = document.querySelector(".input").value;
  
  // Calculate age from the selected date
  if (date) {
    var birthDate = new Date(date);
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var monthDifference = currentDate.getMonth() - birthDate.getMonth();
    
    // Adjust the age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
    
    // Display the age in the h2 element
    var h2Element = document.querySelector(".cls");
    h2Element.textContent = `Your age is ${age} years`;
  }
}

