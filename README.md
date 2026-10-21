# 🎙️ Talky AI – Embeddable AI Voice Assistant Platform

**[🚀 Live Demo](https://talky-frontend-wp7b.onrender.com/builder)**

## 📖 About

**Talky AI** is a SaaS platform that lets anyone add a smart, voice-driven virtual assistant to their website, with no coding required. Sign in with Google, describe your business, pick a tone and theme, and copy one line of code. Your visitors can then **talk** to your website, ask questions, and even be **navigated to the right page by voice**.

---

## ✨ Features

| | Feature | Description |
|---|---|---|
| 🎤 | **Voice Conversations** | Visitors speak and the assistant answers out loud, using the browser's Web Speech API (speech recognition and speech synthesis). |
| 🧠 | **Business-Aware AI** | Powered by Google Gemini. The assistant is trained on your business name, type and description so answers stay relevant. |
| 🧭 | **Voice Navigation** | Say "open pricing" or "take me to contact" and the assistant redirects the visitor to the right page using your custom keywords. |
| 🎨 | **Customizable Look** | Choose from 4 themes (Light, Dark, Glass, Neon) and 3 personalities (Friendly, Professional, Sales). |
| 🔌 | **One-Line Embed** | Paste a single script tag before `</body>` and the floating assistant appears on your site. |
| 🔐 | **Google Sign-In** | Secure one-click login with Firebase Authentication and JWT cookie sessions. |
| 🔑 | **Bring Your Own Gemini Key** | Each user connects their own Gemini API key, with live status tracking (`active`, `quota_exceeded`, `invalid`). |
| 💳 | **Free and Pro Plans** | 200 free AI responses, then upgrade to Pro through Razorpay with server-side payment signature verification. |
| ⚡ | **Fast, Short Replies** | Responses are tuned to stay under 15 words, so voice playback feels instant and natural. |

---

## 🛠️ How It Works

```text
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

**Deployment**
- Render

---

## 📂 Project Structure

```text
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

## 🧩 Embedding the Assistant

After saving your assistant in the **Builder**, copy the generated snippet and paste it just before the closing `</body>` tag of your website:

```html
<script
  src="https://your-talky-ai-app.onrender.com/assistant.js"
  data-user-id="YOUR_USER_ID">
</script>
```

A floating Talky button appears on your site. Click it, tap the mic, and start talking. 🎉

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
