// This is our starting myFarm array.
var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

// Creating a variable to hold our array length.
var arrayLength = myFarm.length;

// Looping through our myFarm array.
for (var j = 0; j < arrayLength; j++) {

  // Console out the farm animal in the current index.
  console.log(myFarm[j]);

  // If the first character in the current animal is "c" or "o", alert the following message.
  if (myFarm[j].charAt(0) === "c" || myFarm[j].charAt(0) === "o") {
    alert("Starts with a c or an o!");
  }

}