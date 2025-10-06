# 🗄️ Express.js Product API – Week 2 Assignment

## 🚀 Objective
Build a **RESTful API** using Express.js that demonstrates:

- CRUD operations  
- Middleware (logging, authentication, validation)  
- Error handling  
- Advanced features (filtering, pagination, search, statistics)

---

## 📂 Project Structure
express-api/
│
├── routes/
│ └── products.js
├── middleware/
│ ├── logger.js
│ ├── auth.js
│ ├── validateProduct.js
│ └── errorHandler.js
├── errors/
│ ├── NotFoundError.js
│ └── ValidationError.js
├── server.js
├── package.json
└── README.md

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies
```bash
npm install
2️⃣ Start the Server
bash
Copy code
npm start
or with nodemon:

bash
Copy code
npm run dev
Server runs at: http://localhost:3000

🧩 Available Routes
Method	Endpoint	Description
GET	/api/products	List all products (supports filtering & pagination)
GET	/api/products/:id	Get a product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update an existing product
DELETE	/api/products/:id	Delete a product
GET	/api/products/search	Search products by name (?name=keyword)
GET	/api/products/stats	Get product count by category

🧩 Middleware
Logger
Logs every request method, URL, and timestamp.

Authentication
Checks for header:

makefile
Copy code
x-api-key: 12345
Validation
Validates product fields on POST and PUT requests.

Error Handling
Catches errors globally and returns JSON responses with proper status codes:

400 → Validation errors

404 → Not found

500 → Internal server errors

🧪 Example Product JSON
json
Copy code
{
  "name": "Smartphone",
  "description": "Latest Android phone",
  "price": 499.99,
  "category": "Electronics",
  "inStock": true
}
🔹 Testing Your API
Using Postman
Add header: x-api-key: 12345

Use JSON body for POST/PUT requests

Use query parameters for filtering/pagination:

bash
Copy code
/api/products?category=Electronics&page=1&limit=5
Search endpoint: /api/products/search?name=phone

Stats endpoint: /api/products/stats

Using PowerShell
Wrap URLs in quotes:

powershell
Copy code
curl "http://localhost:3000/api/products?category=Electronics&page=1&limit=2"
curl "http://localhost:3000/api/products/search?name=phone"
curl "http://localhost:3000/api/products/stats"
🔹 Example Responses
GET /api/products
json
Copy code
[
  { "id": 1, "name": "Phone", "category": "Electronics", "inStock": true },
  { "id": 2, "name": "Headphones", "category": "Audio", "inStock": true }
]
GET /api/products/search?name=phone
json
Copy code
[
  { "id": 1, "name": "Phone", "description": "Android smartphone", "category": "Electronics" }
]
GET /api/products/stats
json
Copy code
{
  "Electronics": 3,
  "Audio": 1,
  "Wearables": 1
}
Error Example
json
Copy code
{
  "error": "NotFoundError",
  "message": "Product not found"
}
✅ Expected Outcome
Fully functional RESTful API

Middleware for logging, authentication, validation

Comprehensive error handling with correct HTTP status codes

Advanced features: filtering, pagination, search, statistics

Fully testable with Postman or cURL

📸 Submission Checklist
server.js

routes/products.js

middleware/ folder

errors/ folder

package.json

README.md (this file)

Screenshot from Postman showing working endpoints
