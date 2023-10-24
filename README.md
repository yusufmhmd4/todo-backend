# Simple Todos API

The Simple Todos API is a backend server that provides endpoints for managing a to-do list. It allows you to perform operations like creating, updating, deleting, and retrieving tasks. This README provides an overview of the API and its available endpoints.

## Table of Contents
- [Overview](#overview)
- [Endpoints](#endpoints)
  - [GET /todos](#get-todos)
  - [POST /todos](#post-todos)
  - [PUT /todos/:taskId](#put-todostaskid)
  - [DELETE /todos/:taskId](#delete-todostaskid)
- [Usage](#usage)

## Overview

The Simple Todos API is built using Node.js and SQLite for data storage. It provides a set of endpoints for managing tasks in a to-do list. You can perform the following operations:

- **GET**: Retrieve all tasks.
- **POST**: Create a new task.
- **PUT**: Update an existing task.
- **DELETE**: Delete a task.

## Endpoints

### GET /todos

This endpoint allows you to retrieve all tasks in the to-do list.

**Request:**

**Response:**
- Status: 200 OK
- Body: An array of tasks in JSON format.

### POST /todos

This endpoint allows you to create a new task.

**Request:**

**Request Body (JSON):**
- `title` (string): The title of the task.
- `description` (string): The description of the task.
- `completed` (number): Whether the task is completed (0 for not completed, 1 for completed).

**Response:**
- Status: 200 OK
- Body: A success message.

### PUT /todos/:taskId

This endpoint allows you to update an existing task by its `taskId`.

**Request:**

**Request Parameters:**
- `taskId` (string): The ID of the task to update.

**Request Body (JSON):**
- `title` (string): The updated title of the task.
- `description` (string): The updated description of the task.
- `completed` (number): Whether the task is completed (0 for not completed, 1 for completed).

**Response:**
- Status: 200 OK
- Body: A success message if the task is updated successfully.

### DELETE /todos/:taskId

This endpoint allows you to delete a task by its `taskId`.

**Request:**

**Request Parameters:**
- `taskId` (string): The ID of the task to delete.

**Response:**
- Status: 200 OK
- Body: A success message if the task is deleted successfully.

## Usage

To use the Simple Todos API, you can make HTTP requests to the provided endpoints using tools like `curl`, `Postman`, or integrate it with a front-end application. Make sure to run the API server locally or deploy it to a cloud platform.

Example API base URL: `http://localhost:3001`

Remember to handle the responses and errors appropriately in your applications.

Feel free to explore and integrate this API to manage your to-do list efficiently.
