console.log("connected!");

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCGMij0Lvnh0lECDEewA418NsIZX6jgwMQ",
    authDomain: "train-schedule-924ee.firebaseapp.com",
    databaseURL: "https://train-schedule-924ee.firebaseio.com",
    projectId: "train-schedule-924ee",
    storageBucket: "train-schedule-924ee.appspot.com",
    messagingSenderId: "543537626259"
  };
  firebase.initializeApp(config);

  //set a variable for the database
  var database = firebase.database();

//   var trainName = "";
//   var destination = "";
//   var firstTrainTime = "";
//   var frequency = "";

  //get the variables from the user input boxes

  

  //sync the user input with the database when a user clicks the submit button
 $("#add-employee-btn").on("click", function(){

    trainName = $("#train-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    firstTrainTime = $("#first-train-time-input").val().trim();
    frequency = $("#frequency-input").val().trim();

        var addTrain = {
            trainName: trainName,
            destination: destination,
            firstTrainTime: firstTrainTime,
            frequency: frequency
        };

        database.ref().push(addTrain);

        console.log(addTrain.trainName);
        console.log(addTrain.destination);
        console.log(addTrain.firstTrainTime);
        console.log(addTrain.frequency);

        //clear the values from the inputs

        $("#train-name-input").val("");
        $("#destination-input").val("");
        $("#first-train-time-input").val("");
        $("#frequency-input").val("");   
 });

 database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firstTrainTime;
    var frequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);

    //append the values stored in the database to the Current Train Schedule near the top of the page
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(firstTrainTime),
        $("<td>").text(frequency)
      );

      $("#train-table > thead").append(newRow);

 });


