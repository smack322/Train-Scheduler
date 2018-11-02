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

    var firstTrainTime = moment(firstTrainTime, "HH:mm").subtract(1, "years");
    console.log(firstTrainTime);

    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var trainFrequency = frequency;
    console.log(trainFrequency);

    var diffTime = moment().diff(moment(firstTrainTime), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    var tRemainder = diffTime % trainFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = trainFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);

    //append the values stored in the database to the Current Train Schedule near the top of the page
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(nextTrain),
        $("<td>").text(tMinutesTillTrain)
      );

      $("#train-table > thead").append(newRow);

 });


