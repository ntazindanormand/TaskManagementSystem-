Task Management System
A simple task management application built using JavaScript and local storage. This system allows users to create, edit, delete, and filter tasks with ease.

Table of Contents
Setup and Installation
Features
Limitations and Improvements
Optional: Learnings and Challenges
Setup and Installation
Prerequisites
A web browser (Google Chrome, Firefox, Safari, etc.)
No external dependencies or packages are required.
Installation
Clone or Download the Repository

Clone the repository from GitHub using the command:
bash
Copy code
git clone https://github.com/username/repo-name.git
Alternatively, download the zip file and extract it to your local system.
Open the Application

Open the index.html file in your web browser.
The task management system will load in your browser window.
That's it! You can now start using the task management system.

Features
Core Features:
Create New Tasks

Users can create tasks by filling in a form that includes a title, description, category, and due date.
Task Status (Complete/Incomplete)

Tasks have a status, which can be toggled between "Complete" and "Incomplete".
Edit Task Details

Users can edit any task by clicking the "Edit" button. Task information such as title, description, category, and due date can be updated.
Delete Tasks

Tasks can be deleted by clicking the "Delete" button.
Visual Task List

Tasks are displayed in a table with their corresponding status, which is visually indicated.
Filter Tasks

Users can filter tasks by status (complete/incomplete) and by category.
Search Tasks

Users can search for tasks by typing in the search bar, which filters the task list by title.
Persistent Storage

Tasks are stored in the browser's local storage, ensuring that data is not lost when the page is refreshed.
Optional Bonus Features:
Categories/Tags
Tasks can be assigned a category (e.g., Work, Personal, Others) to help with organization.
Set Due Dates
Tasks can have a due date, which is displayed in the task table.
Limitations and Improvements
Known Limitations:
User Authentication:

There is currently no user authentication system. All tasks are accessible to anyone using the browser.
Data Persistence:

While tasks are saved in local storage, this data is specific to the browser and device. If the user switches browsers or clears their local storage, tasks will be lost. Switching to a database (like SQLite or MongoDB) would allow cross-browser data persistence.
Potential Improvements:
User Authentication:
Adding a user login system with authentication to ensure that tasks are user-specific.
Backend Integration:
Instead of using local storage, tasks could be stored in a database such as SQLite or MongoDB, allowing for persistent data across devices and sessions.
Task Prioritization:
Adding a feature for prioritizing tasks (e.g., High, Medium, Low priority) could enhance task management.
Notifications:
Adding notifications or reminders for tasks that are nearing or past their due date.
UI Enhancements:
Improving the visual design, adding animations, and making the user interface more intuitive.
Learnings and Challenges
(Optional)

During the development of this task management system, I learned how to work with local storage effectively for persisting data. One of the main challenges was ensuring the filtering and search features worked seamlessly together, especially when managing multiple conditions (status, category, search).

Another challenge was organizing the task data in such a way that it was easy to update both in the UI and in local storage. Ensuring that changes (like editing or deleting tasks) were accurately reflected in the UI and persisted correctly was a critical part of the project.
