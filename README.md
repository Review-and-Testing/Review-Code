### Features
Task Table: Displays a list of tasks with the following details:
Title: Name of the task.
Assigned To: Email address of the person the task is assigned to.
Status: Task status with the following options: Open/In-Progress/Under-review/Done
Priority: Task priority with the following options: Low/Medium/High
Start Date: The start date of the task (DDMMMYYYY format).
End Date: The end date of the task (DDMMMYYYY format), will be empty for tasks that are not completed.

Action Buttons:
Edit: Edit button available for each task to modify details like assignee, status, priority, etc.
Delete: Delete button available for each task. A confirmation dialog appears before the task is permanently removed.

Sorting: Users can sort the tasks based on the following columns:
Title
Assigned To
Status
Priority

Sorting is done by clicking the header of the respective column, which shows ascending or descending arrows for sorting.

Async Operations: The app supports asynchronous actions, ensuring smooth task management and performance.

Screens and Interactions
Task List View:

The main page displays the task list with all the details of each task.

Each task row has an Edit and Delete button in the last column.

Clicking on any row opens the task details page.

Task Edit Page:

When the Edit button is clicked, users are taken to a page where they can modify the task details. Users can:

Change the assignee.

Modify the task status.

Adjust the priority level.

Update the start and end dates.

Delete Task:

Clicking the Delete button shows a confirmation dialog to confirm task deletion. The task is only deleted after the user clicks on "OK" in the confirmation dialog.

### Installation
To run the app locally, follow these steps:
npm install

### Start the Application
npm start
This will start the development server and you can view the application in your browser at [http://localhost:3000].

### Prerequisites
Ensure that you have the following installed:

Node.js (LTS version)
npm (Node package manager)


Technologies Used
Frontend: React.js (for building the user interface)

State Management: Redux (for managing state and async actions)

Styling: CSS

### Surge link

You should see the app running on [https://statushub.surge.sh/].