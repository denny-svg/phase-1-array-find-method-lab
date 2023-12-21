// Define the custom find method on the Array prototype
Array.prototype.findSuperBowlWin = function () {
    return this.find(entry => entry.result === "W");
  };
  
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // ... other entries
  ];
  
  // Use the custom find method to check for Super Bowl win
  const superBowlWin = record.findSuperBowlWin();
  
  if (superBowlWin) {
    console.log("The team had a Super Bowl win in the year", superBowlWin.year);
  } else {
    console.log("The team has not won the Super Bowl.");
  }
  
  