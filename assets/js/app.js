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
  var trainName = "";
  var destination = "";
  var firstTrainTime = 0;
  var frequency = 0;

  //get the variables from the user input boxes

  trainName = $("#train-name-input").val().trim();
  destination = $("#destination-input").val().trim();
  firstTrainTime = $("#first-train-time-input").val().trim();
  frequency = $("#frequency-input").val().trim();

  //sync the user input with the database when a user clicks the submit button
 $("#add-employee-btn").on("click", function(){
    database.ref().set({
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequency: frequency
      });

 });

