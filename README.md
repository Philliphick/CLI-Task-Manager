# WorkTrack CLI

WorkTrack CLI is a simple, productivity planner tool designed to help you track and manage your tasks for the day. This command-line interface (CLI) application allows you to input tasks, estimate durations, add comments, and generate a work report in PDF format.

## Features

- Add multiple tasks with titles, estimated durations, and comments.
- Calculate the total estimated duration for all tasks.
- Generate a PDF report summarizing your tasks and their details.

## Installation

To get started with **WorkTrack CLI**, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/worktrack-cli.git
cd worktrack-cli
```

### Step 2: Install Dependencies
Run the following command to install the necessary dependencies:

```bash
npm install
```

### Step 3: Link the Command Globally
To use the WorkTrack CLI globally on your machine, link it using npm:

```bash
npm link
```
This command will create a global symlink so you can run planner from anywhere.

# Usage
Once you have linked the command globally, you can start tracking your tasks by running:

```bash
planner
```
You will be prompted with the following questions:

Task title – Enter a title for your task.
Estimated duration – How long do you think the task will take (in minutes)?
Comments/Reminders – Optional field for any additional comments.
More tasks – After completing one task, you’ll be asked if you want to add more tasks. Type "yes" to continue or "no" to generate a PDF report.
The tool will calculate the total estimated duration of your tasks and generate a PDF report containing the details.

# Output
Once you finish entering your tasks, a PDF report will be generated with the following information:

Task title
Estimated duration
Any comments or reminders
Total estimated duration of all tasks
The PDF will be saved with a filename based on the current date and time (e.g., work_track_1631548201000.pdf).

Example
bash
```
$ planner
Give the task a title: Write documentation
How long do you estimate this to take? (in minutes): 60
Any comments/ reminders for your future self?: Focus on clarity and detail
Great! Any more tasks you'd like to get done for the day? Yes

Give the task a title: Fix bug in authentication
How long do you estimate this to take? (in minutes): 30
Any comments/ reminders for your future self?: Test after fixing
Great! Any more tasks you'd like to get done for the day? No

Work report saved as "work_track_1631548201000.pdf"
```
# Contributing

Feel free to fork this repository and submit pull requests! Contributions are welcome.
