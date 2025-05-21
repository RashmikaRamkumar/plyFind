# PRODUCT CATALOGUE AND CUSTOMER SUPPORT FOR PLYWOOD & GLASS BUSINESS 

## Rakesh Glass & Plywoods - Product Catalogue & Customer Support Website

A full-stack web application designed for Rakesh Glass & Plywoods to showcase a digital product catalogue, handle customer enquiries, and provide real-time bilingual chatbot support.

## 🔧 Tech Stack

- **Frontend**: React.js
- **Backend (API & Admin Panel)**: Node.js + Express
- **Chatbot Service**: Python + FastAPI
- **Database**: MongoDB Atlas
- **Additional Features**: WhatsApp Integration, Bilingual Chatbot (English & Tamil), WoodCalc estimator

---


## 📁 Project Structure

```
plyFind/
│
├── plyFind
├       ├──frontend/            # React.js app
├       ├── node-backend/       # Node.js + Express API 
├       ├──python-backend/      # Python FastAPI chatbot
└── Price_calculator            # Category based price estimator
```

---

## 🚀 Getting Started

Follow these steps to run the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/RashmikaRamkumar/plyFind.git 
cd plyFind
```

---

## 🌐 Frontend Setup

```bash
cd plyFind/frontend
npm install
npm run dev
```

The frontend will be available at: `http://localhost:8080` (or another port based on your setup).

---

## 🔙 Node.js Backend (Admin & APIs)

```bash
cd plyFind/backend
npm install
node server.js
```

The backend server will start on: `http://localhost:5000`

Make sure you have a `.env` file configured with:
```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

---

## 🤖 Python Chatbot (FastAPI)

```bash
cd chatbot
pip install -r requirements.txt
uvicorn app:app --port 8000
```

Chatbot runs at: `http://localhost:8000`

Make sure you have a `.env` file in the chatbot folder too.

---

## 🔐 Admin Login

Access the admin panel at `/admin` route from the frontend.

---

## 📦 Features

- 💬 Bilingual Chatbot (English & Tamil)
- 📱 WhatsApp Communication
- 📋 Product Catalogue with Enquiry Support
- 📍 Store Locator with Google Maps
- 🧮 WoodCalc - Real-time wood pricing calculator
- 🔐 Admin Dashboard for Enquiries & Messages
- 🌍 Fully Responsive UI

---

## 📸 Screenshots

- Home Page
- Product Listing
- Contact & Enquiry Forms
- Admin Dashboard
- Chatbot in Action
- WhatsApp & WoodCalc Integration

(Include images/gifs if available)

---

<!-- ## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

--- -->

## 👨‍💻 Authors

- [Padmapriya R (22ALR063)]()
- [Rashmika K R (22ALR076)]()
- [Rithik Chandrasekar (22ALR081)]()

Supervised by: Dr. M. Vimaladevi, Associate Professor, Department of AI

---

## 📬 Contact

For any inquiries, reach out via [rakeshkgm23@gmail.com](mailto:rakeshkgm23@gmail.com) or visit our store at:

**28-C, Nandhini Complex, Kovai Road, Kangeyam, Tamil Nadu – 638701**
