# AI Safety Dashboard

This is a React-based **AI Safety Incident Dashboard** application built using **React**, **TypeScript**, and **CSS**. The application displays a list of AI safety incidents, allows users to filter and sort incidents, and enables users to report new incidents.

## Features

- **View AI Safety Incidents**: Displays a list of incidents with title, severity, and reported date.
- **Filter by Severity**: Filter the incidents by severity (Low, Medium, High).
- **Sort by Date**: Sort the incidents by their reported date (Newest First, Oldest First).
- **View Details**: Click on an incident to toggle the visibility of the full description.
- **Report a New Incident**: A form to submit a new incident with Title, Description, and Severity.

## Installation

### Prerequisites
You need to have **Node.js** and **npm** installed on your machine.

### Steps to Run

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/abishek17yadav/ai-safety-dashboard.git
    ```

2. Navigate to the project folder:
    ```bash
    cd ai-safety-dashboard
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Run the application:
    ```bash
    npm start
    ```

This will start the app at `http://localhost:3000` in your browser.

## Project Structure

- `src/App.tsx`: The main component that renders the dashboard and form.
- `src/components/IncidentCard.tsx`: Displays individual incident details.
- `src/components/NewIncidentForm.tsx`: Form to report a new incident.
- `src/styles.css`: Basic CSS for styling the components.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **TypeScript**: Type-safe JavaScript for better tooling and debugging.
- **CSS**: For styling the components with a clean and responsive design.

## Challenges

- Implementing state management for toggling the incident details.
- Ensuring responsive design for mobile-friendly use.

