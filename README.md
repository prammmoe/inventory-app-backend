# Inventory App Backend

Inventory App REST API made with ExpressJS

## Installation

To run this API, follow the required steps below:
1. Clone the repository:
```
git clone https://github.com/prammmoe/inventory-app-backend
```
2. Install all dependencies
```
npm i
```

3. Copy `.env.example` and rename it to `.env` and fill with your own credentials.

4. Configure your db connection in `configs/db.js`

5. Dump the data `dump_data_example.sql` on your local database

6. Start the database server

7. Run the API

```
npm start
```

## Response

Sample response:

### Request

```
GET\ localhost:5000/products
```

### Response
```
{
  "status": 200,
  "error": false,
  "message": "Successfully get all products data!",
  "data": [
    {
      "id": 1,
      "name": "Pembersih Wajah - Cerah Seketika",
      "description": "Pembersih wajah lembut yang efektif membersihkan kotoran, minyak, dan makeup. Membuat wajah tampak lebih cerah dan berseri.",
      "image": "pembersih_wajah.jpg",
      "category": "Produk Kecantikan",
      "quantity": 100,
      "date_added": "2024-03-29T21:30:52.000Z",
      "date_update": "2024-03-29T21:30:52.000Z"
    },
    {
      "id": 2,
      "name": "Toner Penyeimbang Kulit",
      "description": "Toner yang menyegarkan dan menyeimbangkan pH kulit. Mempersiapkan kulit untuk produk selanjutnya agar lebih mudah menyerap.",
      "image": "toner.jpg",
      "category": "Produk Kecantikan",
      "quantity": 80,
      "date_added": "2024-03-29T21:30:52.000Z",
      "date_update": "2024-03-29T21:30:52.000Z"
    }
  ]
}
```

Using query params:

### Request

```
GET\ localhost:5000/products?limit=1
```

### Response

```
{
  "status": 200,
  "error": false,
  "message": "Successfully get all products data!",
  "data": [
    {
      "id": 1,
      "name": "Pembersih Wajah - Cerah Seketika",
      "description": "Pembersih wajah lembut yang efektif membersihkan kotoran, minyak, dan makeup. Membuat wajah tampak lebih cerah dan berseri.",
      "image": "pembersih_wajah.jpg",
      "category": "Produk Kecantikan",
      "quantity": 100,
      "date_added": "2024-03-29T21:30:52.000Z",
      "date_update": "2024-03-29T21:30:52.000Z"
    }
  ]
}
```

## Project Structure

    .
    ├── src
    │   ├──configs
    │   ├──controllers
    │   ├──middleware
    │   ├──routes
    │   └──middleware
    ├──.gitignore              
    ├──app.js
    ├──dump_data_example.sql
    ├──package-lock.json
    ├──package.json
    └── README.md

## TODO

<input type="checkbox" disabled /> API Documentation