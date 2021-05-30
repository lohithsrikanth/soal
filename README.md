# Documentation

A simple webpage containing the list of students along with their details such as which cohort they belong to, their email address and phone number.

If a user is logged in, the user can click on the student's name and view their profile which contains essential statistics such as their attendance count, number of lines of code written and number of commits made in the form of Pie Charts and Bar Graphs. If a user is not logged in and he clicks against the student's name, the user will be redirected to the login page.

Also, only after the user is logged will they have the ability to delete a student from the database.

The user also has the ability to search for a student by typing inside the search box.

## Packages Used

The following packages have been used for creating this project:

- lodash: For pagination and searching
- recharts: For rendering the visualizations of the student statistics
- @reduxjs/toolkit: For creating and using the Redux store
- bootstrap: For the overrall look of the website
- JOI: For input validation
