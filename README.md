<div align="center">

<img src="Client/public/logo.png" alt="Talky AI Logo" width="90" />

# Talky AI

### Give your website a voice. 🎙️

**Create a custom voice-enabled AI assistant for any website and embed it with a single `<script>` tag.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://your-talky-ai-app.onrender.com)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Express%205-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Gemini](https://img.shields.io/badge/Google%20Gemini-AI-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)

[Live Demo](https://your-talky-ai-app.onrender.com) · [Features](#-features) · [How It Works](#-how-it-works) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started)

</div>

---

## 📖 About

**Talky AI** is a SaaS platform that lets anyone add a smart, voice-driven virtual assistant to their website, with no coding required. Sign in with Google, describe your business, pick a tone and theme, and copy one line of code. Your visitors can then **talk** to your website, ask questions, and even be **navigated to the right page by voice**.

---

## ✨ Features

| | Feature | Description |
|---|---|---|
| 🎤 | **Voice Conversations** | Visitors speak and the assistant answers out loud, using the browser's Web Speech API (speech recognition and speech synthesis). |
| 🧠 | **Business-Aware AI** | Powered by Google Gemini. The assistant is trained on your business name, type and description so answers stay relevant. |
| 🧭 | **Voice Navigation** | Say *"open pricing"* or *"take me to contact"* and the assistant redirects the visitor to the right page using your custom keywords. |
| 🎨 | **Customizable Look** | Choose from 4 themes (Light, Dark, Glass, Neon) and 3 personalities (Friendly, Professional, Sales). |
| 🔌 | **One-Line Embed** | Paste a single script tag before `</body>` and the floating assistant appears on your site. |
| 🔐 | **Google Sign-In** | Secure one-click login with Firebase Authentication and JWT cookie sessions. |
| 🔑 | **Bring Your Own Gemini Key** | Each user connects their own Gemini API key, with live status tracking (`active`, `quota_exceeded`, `invalid`). |
| 💳 | **Free and Pro Plans** | 200 free AI responses, then upgrade to Pro through Razorpay with server-side payment signature verification. |
| ⚡ | **Fast, Short Replies** | Responses are tuned to stay under 15 words, so voice playback feels instant and natural. |

---

## 🛠️ How It Works

```
┌──────────────┐   1. Configure    ┌──────────────────┐
│   Builder    │ ────────────────► │   MongoDB        │
│  (React app) │                   │ (assistant config)│
└──────────────┘                   └──────────────────┘
       │ 2. Copy embed script                ▲
       ▼                                     │ 4. Fetch config
┌──────────────────────────────────┐         │
│  Your Website                    │ ────────┘
│  <script src=".../assistant.js"  │
│          data-user-id="...">     │ 3. Visitor speaks 🎤
│                                  │ ────────────────────┐
└──────────────────────────────────┘                     ▼
                                              ┌────────────────────┐
              6. Speaks the reply 🔊  ◄────── │ Express API        │
                                              │ • navigation intent│
                                              │ • Gemini response  │
                                              └────────────────────┘
```

1. **Build** your assistant in the dashboard: name, business info, tone, theme and navigation pages.
2. **Embed** the generated script tag on any website.
3. The widget loads your config, listens through the microphone, and sends the transcript to the API.
4. The server first checks for **navigation intent** (`open`, `go`, `show`, `take me`...). If a page keyword matches, it returns a redirect. Otherwise it builds a context-rich prompt and asks **Gemini**.
5. The reply is **spoken back** to the visitor and shown on screen.

---

## 🧰 Tech Stack

**Frontend**
- React 19 and Vite
- Tailwind CSS 4
- React Router 7, Axios, React Hot Toast
- Firebase Authentication (Google provider)

**Backend**
- Node.js and Express 5
- MongoDB with Mongoose
- JWT with HTTP-only cookies
- Razorpay (payments)
- Google Gemini API

**Embeddable Widget**
- Vanilla JavaScript and CSS (no framework dependency)
- Web Speech API (`SpeechRecognition` and `SpeechSynthesis`)

**Deployment**
- Render

---

## 📂 Project Structure

```
Talky-AI/
├── Client/                      # React frontend (Vite)
│   ├── public/
│   │   ├── assistant.js         # Embeddable voice widget
│   │   ├── assistant.css        # Widget styles and themes
│   │   └── logo.png, mic.svg
│   └── src/
│       ├── Components/          # Navbar, ProtectedRoute, AssistantPreview
│       ├── pages/               # Home, Login, Builder, Billing
│       └── utils/firebase.js    # Firebase auth setup
│
└── Server/                      # Express backend
    ├── Configs/                 # DB, Gemini, Razorpay, JWT token
    ├── Controllers/             # auth, user, assistant, billing
    ├── Middleware/isAuth.js     # JWT cookie verification
    ├── Models/                  # User, Billing schemas
    ├── Routes/                  # API route definitions
    └── index.js                 # App entry point
```

---

## 🔌 API Reference

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/auth/google` | – | Sign in or register with Google profile |
| `GET` | `/api/auth/logout` | – | Clear session cookie |
| `GET` | `/api/user/current-user` | ✅ | Get the logged-in user |
| `POST` | `/api/user/save-assistant` | ✅ | Save assistant configuration |
| `GET` | `/api/assistant/config/:userId` | – | Public config used by the embed widget (API key excluded) |
| `POST` | `/api/assistant/ask` | – | Send a message and get an AI or navigation response |
| `POST` | `/api/billing/order` | ✅ | Create a Razorpay order |
| `POST` | `/api/billing/verify` | ✅ | Verify payment signature and activate Pro |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A MongoDB database (local or Atlas)
- A Firebase project with Google sign-in enabled
- A Razorpay account (test keys work)
- A Google Gemini API key (from [Google AI Studio](https://aistudio.google.com/))

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/talky-ai.git
cd talky-ai
```

### 2. Set up the server
```bash
cd Server
npm install
```

Create `Server/.env`:
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

```bash
npm run dev
```

### 3. Set up the client
```bash
cd ../Client
npm install
```

Create `Client/.env`:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Update your Firebase config in `Client/src/utils/firebase.js`, then:
```bash
npm run dev
```

The app runs at `http://localhost:5173` and the API at `http://localhost:8000`.

---

## 🧩 Embedding the Assistant

After saving your assistant in the **Builder**, copy the generated snippet and paste it just before the closing `</body>` tag of your website:

```html
<script
  src="https://your-talky-ai-app.onrender.com/assistant.js"
  data-user-id="YOUR_USER_ID">
</script>
```

A floating Talky button appears on your site. Click it, tap the mic, and start talking. 🎉

> 💡 **Voice navigation tip:** add pages in the Builder (for example *Pricing → `/pricing` → keywords: `pricing, plans, cost`*). Visitors can then say *"open pricing"* and be taken there.

---

## ☁️ Deployment (Render)

Talky AI is deployed on **Render**.

**Backend (Web Service)**
- Root directory: `Server`
- Build command: `npm install`
- Start command: `node index.js`
- Environment variables: `PORT`, `MONGODB_URL`, `JWT_SECRET`, `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`

**Frontend (Static Site)**
- Root directory: `Client`
- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Environment variables: `VITE_FIREBASE_API_KEY`, `VITE_RAZORPAY_KEY_ID`

After deploying, point the client's server URL, the widget's API and asset URLs in `assistant.js`, and the server's CORS allowed origin to your Render URLs. Also add your Render domain to Firebase **Authorized domains**.

---

## 💎 Plans

| | Free | Pro |
|---|---|---|
| AI responses | 200 | Unlimited |
| Voice and navigation | ✅ | ✅ |
| All themes and tones | ✅ | ✅ |
| Validity | Lifetime | 90 days |
| Price | ₹0 | ₹699 |

---

## 🔒 Security Notes

- Sessions use **HTTP-only JWT cookies**.
- Razorpay payments are verified **server-side with HMAC-SHA256** before upgrading a user.
- The public config endpoint **never exposes** the user's Gemini API key.
- Secrets live in environment variables, never in the repo.

---

## 🗺️ Roadmap

- [ ] Multi-language voice support
- [ ] Conversation analytics dashboard
- [ ] Upload documents and FAQs to train the assistant
- [ ] Text chat mode alongside voice
- [ ] Domain whitelisting for embeds

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome. Feel free to open an issue or submit a pull request.

---

## 👤 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [your-profile](https://linkedin.com/in/your-profile)

---

<div align="center">

⭐ **If you like Talky AI, give it a star!** ⭐

</div>
