# History-Events-Application
This web application allows users to discover historical events that occurred on specific dates. Users can either input a custom date (in dd/mm format) or use the current date to fetch a random historical event from that day in history. The project features a clean, responsive design with smooth animations and intuitive controls.
Features
1. Date Input Options
Specific Date: Enter any date in dd/mm format to find historical events

Today in History: Automatically fetches events for the current date

Random Date: Generates a random valid date if no input is provided

2. Data Handling
Input Validation: Ensures dates are in correct format and are valid (e.g., rejects "31/02")

API Integration: Fetches historical data from the History API

Error Handling: Provides clear error messages for invalid inputs or failed requests

3. User Interface
Responsive Design: Works well on both desktop and mobile devices

Interactive Elements:

Hover effects on buttons

Smooth transitions and animations

Clear button to reset the display

Visual Feedback:

Color-coded messages (red for errors)

Automatic date display for current day

Files Structure
PastEvents.html: The main HTML file containing the page structure

PastEvents.css: Stylesheet with all visual styling and animations

PastEvents.js: JavaScript handling all logic, API calls, and user interactions

How to Use
Loading the Page:

Open PastEvents.html in a web browser

The current date will automatically display at the top

Finding Historical Events:

Option 1: Enter a date in dd/mm format and click "Specific date in the past"

Option 2: Click "Today in the past" to use the current date

Option 3: Leave the input blank and click "Specific date" to get a random date

Viewing Results:

Historical events will appear in the results box below

Each result shows the year and description of the event

Clearing Results:

Click the "Clear" button to empty the results and input field

Styling
Gradient background with smooth animations

Card-based design with hover effects

Responsive layout that works on all screen sizes

Clean typography and spacing for readability

Dependencies
Uses the free History API for event data

No additional libraries or frameworks required

Notes
Ensure all files are in the same directory

Requires an internet connection to fetch historical data

Designed for modern browsers (Chrome, Firefox, Safari, Edge)

Author
Amro Tarter
