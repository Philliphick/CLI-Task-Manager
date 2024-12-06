#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import { select } from "@inquirer/prompts";
import fs from "fs";
import PDFDocument from "pdfkit";
import { sign } from "crypto";

// qs : task name, duration, project name?, other comments?

// const template = `

// `;
let answers = [];

const taskQuestions = [
  {
    name: "TaskName",
    message: "Give the task a title:",
    validate: (input) =>
      input ? true : "Please create a title before moving on!",
  },
  {
    name: "Duration",
    message: "How long do you estimate this to take? (in minutes):",
    validate: (input) =>
      input ? true : "Please create a title before moving on!",
  },
  {
    name: "Comments",
    message: "Any comments/ reminders for your future self?:",
    validate: (input) =>
      input ? true : "Please create a title before moving on!",
  },
];
async function singleTask() {
  const res = await inquirer.prompt(taskQuestions);
  answers.push(res);
  console.log(answers);
  return answers;
}

async function askMoreTask() {
  const moreTasks = await select({
    message: "Great! Any more tasks you'd like to get done for the day?",
    choices: [
      {
        name: "Yes",
        value: "yes",
      },
      {
        name: "No",
        value: "no",
      },
    ],
  });
  return moreTasks;
}

async function fullForm() {
  try {
    await singleTask();

    let moreTasks = await askMoreTask();

    while (moreTasks === "yes") {
      await singleTask();
      moreTasks = await askMoreTask();
    }

    await generateWorkReport(answers);
  } catch (err) {
    console.error(err.message);
  }
}

async function generateWorkReport(answers) {
  console.log("got to generate");

  let totalTime = 0;

  answers.map((answer) => {
    totalTime += Number(answer.Duration);
  });

  const doc = new PDFDocument();

  const date = Date.now();

  const fileName = `work_track_${date}.pdf`;

  doc.pipe(fs.createWriteStream(fileName));

  doc.fontSize(32);
  doc.text("Todays Tasks", {
    align: "center",
  });
  doc.moveDown();

  doc.fontSize(16);
  answers.map((answer) => {
    console.log(answer.TaskName);
    doc.text(`TASK: ${answer.TaskName}`);
    doc.moveDown();
    doc.text(`ESTIMATED DURATION: ${answer.Duration}`);
    doc.moveDown();
    doc.text(`FURTHER INFO: ${answer.Comments}`);
    doc.moveDown(2);
  });

  doc.text(`Total Estimated Duration: ${totalTime}`);

  doc.end();
}

fullForm();
