# 📘 API Documentation

---

## 🔐 POST `/auth/sign-up`

**Register a new user.**

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

### ✅ Success Response

**Status:** `201 Created`

```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "_id": "userId",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### ❌ Error Response

**Status:** `400 Bad Request`

```json
{
  "success": false,
  "message": "Email already exists"
}
```

---

## 🔐 POST `/auth/sign-in`

**Login a user and return a JWT token.**

### Request Body

```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

### ✅ Success Response

**Status:** `200 OK`

```json
{
  "success": true,
  "message": "Logged in successfully",
  "token": "jwtToken"
}
```

### ❌ Error Response

**Status:** `401 Unauthorized`

```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

## 🔐 POST `/auth/logout`

**Logout the user by clearing the authentication token.**

### Headers

```
Authorization: Bearer jwtToken
```

### ✅ Success Response

**Status:** `200 OK`

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## 📝 Notes Endpoints

⚠️ All notes endpoints require authentication using JWT.

### Headers Example

```
Authorization: Bearer <your-jwt-token>
```

---

## 📄 GET `/notes`

**Retrieve all notes created by the authenticated user.**

### Query Parameters (optional)

- `page`: Page number for pagination
- `limit`: Number of notes per page

### ✅ Success Response

**Status:** `200 OK`

```json
{
  "success": true,
  "notes": [
    {
      "_id": "noteId1",
      "title": "First Note",
      "content": "This is the first note.",
      "createdAt": "2025-05-25T18:59:34.000Z"
    },
    {
      "_id": "noteId2",
      "title": "Second Note",
      "content": "This is the second note.",
      "createdAt": "2025-05-25T19:00:00.000Z"
    }
  ]
}
```

---

## 📄 GET `/notes/:id`

**Retrieve a single note by its ID.**

### URL Parameter

- `id` – Note ID

### ✅ Success Response

**Status:** `200 OK`

```json
{
  "success": true,
  "note": {
    "_id": "noteId1",
    "title": "First Note",
    "content": "This is the first note.",
    "createdAt": "2025-05-25T18:59:34.000Z"
  }
}
```

### ❌ Error Response

**Status:** `404 Not Found`

```json
{
  "success": false,
  "message": "Note not found"
}
```

---

## 📝 POST `/notes`

**Create a new note.**

### Request Body

```json
{
  "title": "New Note",
  "content": "This is the content of the new note."
}
```

### ✅ Success Response

**Status:** `201 Created`

```json
{
  "success": true,
  "message": "Note created successfully",
  "note": {
    "_id": "newNoteId",
    "title": "New Note",
    "content": "This is the content of the new note.",
    "createdAt": "2025-05-25T19:05:00.000Z"
  }
}
```

### ❌ Error Response

**Status:** `400 Bad Request`

```json
{
  "success": false,
  "message": "Title and content are required"
}
```

---

## ✏️ PUT `/notes/:id`

**Update a note by its ID.**

### URL Parameter

- `id` – Note ID

### Request Body

```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

### ✅ Success Response

**Status:** `200 OK`

```json
{
  "success": true,
  "message": "Note updated successfully",
  "note": {
    "_id": "noteId1",
    "title": "Updated Title",
    "content": "Updated content",
    "updatedAt": "2025-05-25T19:10:00.000Z"
  }
}
```

### ❌ Error Response

**Status:** `404 Not Found`

```json
{
  "success": false,
  "message": "Note not found"
}
```

---

## 🗑️ DELETE `/notes/:id`

**Delete a note by its ID.**

### URL Parameter

- `id` – Note ID

### ✅ Success Response

**Status:** `200 OK`

```json
{
  "success": true,
  "message": "Note deleted successfully"
}
```

### ❌ Error Response

**Status:** `404 Not Found`

```json
{
  "success": false,
  "message": "Note not found"
}
```

---

## ⚠️ Error Codes

| Code | Description                          |
|------|--------------------------------------|
| 400  | Bad Request (validation failed)      |
| 401  | Unauthorized (invalid token)         |
| 403  | Forbidden                            |
| 404  | Not Found (resource missing)         |
| 500  | Internal Server Error                |
