<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1ZyKg0RQnkcEW8C-GEJSJtUuHPpXHK3js

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Contact Form (Send Email In-App)

The contact form can send emails without opening the user's email app by using EmailJS.

1. Create an EmailJS account and configure:
   - an Email `Service`
   - an Email `Template`
2. Add these variables to `.env.local`:
   - `VITE_EMAILJS_PUBLIC_KEY=...`
   - `VITE_EMAILJS_SERVICE_ID=...`
   - `VITE_EMAILJS_TEMPLATE_ID=...`
3. In your EmailJS template, use these params:
   - `from_name`, `from_email`, `phone`, `service_type`, `message`, `composed_message`
# Grupo AR Construcción
