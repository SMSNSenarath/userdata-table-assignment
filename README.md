# Notes Application Assignment

## How to Run the Application in a local environment

1. Clone/Download the repository
2. Find the backend and frontend folders in it
3. Using a command line, run the following command in each folder:

   ```bash
   npm install
   ```

4. Then you can find node_modules in each folder.
5. Now all the npm libraries needed are installed.
6. Run the following command in each folder:

   ```bash
   npm start
   ```

7. To test the application, open the browser and navigate to http://localhost:3000/

## How to use the Application

1. Once you navigate to the application, you will see a landing page.
   ![LandingPage](/screenshots/image_1.png)

2. Then you can either log as a student or as an admin to the application

3. If you click the Login as a Student button, you will be redirected to the student login page.
   ![StudentLogin](/screenshots/image_2.png)

4. If you enter a wrong password or wrong email, a relevant alert will pop up.
   ![WrongEmailError](/screenshots/image_3.png)

   ![WrongPasswordError](/screenshots/image_4.png)

5. If you enter a correct email and password, you will be redirected to the student dashboard.
   ![StudentDashboard](/screenshots/image_5.png)

6. You can see following options:

   > - View Notes
   ![ViewNote](/screenshots/image_6.png)
   > - Create Note
   ![CreateNote](/screenshots/image_7.png)
   > - Edit Note
   ![EditNote](/screenshots/image_8.png)
   > - Delete Note

7. If you click the Login as an Admin button, you will be redirected to the admin login page.
   ![AdminLoginPage](/screenshots/image_9.png)

8. If you enter a correct email and password, you will be redirected to the admin dashboard.
   ![AdminDashboard](/screenshots/image_10.png)
   
9.  Here you can see the following options:

   > - View All Users in a table
   ![ViewUsers](/screenshots/image_11.png)
   > - Create a Student (Once the 'Create a Student' is clicked, you will be navigated to the following page)
   ![CreateStudent](/screenshots/image_12.png)
   > - View single User
   ![ViewAUser](/screenshots/image_13.png)
   > - Search for a User by Id, firstName and Email seperately
   ![Search](/screenshots/image_14.png)


10. Once you logged to the application (admin or student) you will see the first name and Logout button.
    
    ![Logout](/screenshots/image_15.png)

## Technologies Used

1. Backend application was constructed with <b>Nodejs Express Framework</b>. NPM Libraries such as below were used <br/>

   > - <b>Mongoose</b> were used to connect to the database.
   > - <b>Cryptojs</b> was used to encrypt/decrypt the password.
   > - <b>JWT</b> was used to generate a token for the user.
   > - <b>dotenv</b> was used to store the secret keys.
   > - <b>cors</b> was used to enable cross-origin resource sharing.

2. For the database <b>MongoDB Cloud database (MongoDB Atlas)</b> was used. <br/>

3. Frontend application was constructed with <b>Reactjs</b>.
   Libraries such as below were used:
   > - <b>React-Router</b> was used to navigate between the pages
   > - <b>Bulma CSS Framwork</b> were used to style the application.
   > - <b>Axios</b> was used to make the requests to the backend.
   > - <b>react-datepicker</b> was used to select the date.
   > - <b>react-loader-spinner</b> was used to show the loading spinner.