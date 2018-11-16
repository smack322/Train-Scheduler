# Train-Scheduler

Instructions

Make sure that your app suits this basic spec:

1. When adding trains, administrators should be able to submit the following:
2. Train Name
3. Destination 
4. First Train Time -- in military time
5. Frequency -- in minutes
6. Code this app to calculate when the next train will arrive; this should be relative to the current time.
7. Users from many different machines must be able to view same train times.
8. Styling and theme are completely up to you. Get Creative!

Solution / Technical Approach - 

1. Setup a firebase database with permissions to read and write globally
2. Created an on click function associated with the submit button that would take in the values that were typed into the form
3. The user values from the different form fields (train, destination name, first train time, and frequency) were then pushed into the database
4. The fields from the form were then cleared out to make room for the next train
5. Moment JS was then used to calculate the current time (when the user submitted the form, against the frequency of when the train was to run) then the variable was used for the next arrival and minutes away columns at the top of the page. 
6. jQuery was used to create the new rows for the table through the DOM based on the input from the user.
7. A child snapshot was used to append the new data to the database and then the html page via jQuery.
