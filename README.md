🗄️ Week 2: Express.js – Server-Side Framework
🚀 Objective
Build a RESTful API using Express.js with proper CRUD operations, middleware, error handling, and advanced features such as filtering, pagination, search, and statistics.
📂 Project Structure
express-api/
│
├── routes/
│   └── products.js          # RESTful product routes
│
├── middleware/
│   ├── logger.js            # Logs request method, URL, timestamp
│   ├── auth.js              # API key authentication
│   ├── validateProduct.js   # Product creation/update validation
│   └── errorHandler.js      # Global error handling middleware
│
├── errors/
│   ├── NotFoundError.js     # 404 error
│   └── ValidationError.js   # 400 error
│
├── server.js                # Main server setup
├── package.json             # Dependencies
└── README.md                # Documentation (this file)

⚙️ Setup Instructions
1️⃣ Install Dependencies

Make sure Node.js is installed, then run:

npm install

2️⃣ Start the Server
npm start

or with nodemon for auto-reloading:
npm run dev
Server runs on:
http://localhost:3000
🌍 Available Routes (Tasks 1–5)
Method	Endpoint	Description
GET	/api/products	List all products (supports filtering & pagination)
GET	/api/products/:id	Get product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update existing product
DELETE	/api/products/:id	Delete a product
GET	/api/products/search	Search products by name (?name=keyword)
GET	/api/products/stats	Get product count by category
🧩 Middleware Implemented

Logger Middleware
Logs each request: method, URL, timestamp

Authentication Middleware
Requires API key in header:

x-api-key: 12345


Validation Middleware
Validates product fields for POST/PUT requests

Error Handling Middleware
Catches all errors and returns JSON with proper status codes:

400 → Validation errors

404 → Not found

500 → Internal server error

🧪 Example Product JSON
{
  "name": "Smartphone",
  "description": "Latest Android phone",
  "price": 499.99,
  "category": "Electronics",
  "inStock": true
}

🔹 Testing Your API
Using Postman

Open Postman

Add header: x-api-key: 12345

Use endpoints as listed above

For POST/PUT requests, select Body → raw → JSON and paste the JSON above

Click Send

Using PowerShell (Windows)

Wrap URLs in quotes if using & in query parameters:

# List all products with filtering & pagination
curl "http://localhost:3000/api/products?category=Electronics&page=1&limit=2"

# Search products by name
curl "http://localhost:3000/api/products/search?name=phone"

# Get product statistics
curl "http://localhost:3000/api/products/stats"

🔹 Example Responses

1️⃣ GET /api/products

[
  { "id": 1, "name": "Phone", "category": "Electronics", "inStock": true },
  { "id": 2, "name": "Headphones", "category": "Audio", "inStock": true }
]


2️⃣ GET /api/products/search?name=phone

[
  { "id": 1, "name": "Phone", "description": "Android smartphone", "category": "Electronics" }
]

3️⃣ GET /api/products/stats

{
  "Electronics": 3,
  "Audio": 1,
  "Wearables": 1
}

4️⃣ Error Handling Example (Product Not Found)

{
  "error": "NotFoundError",
  "message": "Product not found"
}

✅ Expected Outcome

Fully RESTful API with CRUD operations

Middleware for logging, authentication, validation

Global error handling with proper status codes

Advanced features: filtering, pagination, search, product statistics

Easy to test with Postman or cURL

📸 Submission Checklist

server.js

routes/products.js

Middleware folder with logger, auth, validation, errorHandler

Errors folder with NotFoundError and ValidationError

package.json

README.md (this file)

Screenshot from Postman showing working API
