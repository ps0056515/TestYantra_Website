# EmailJS Configuration Guide

This guide explains how to set up and configure **EmailJS** to receive real email notifications from the contact page form.

---

## Step 1: Create an EmailJS Account
1. Go to [EmailJS Signup Page](https://dashboard.emailjs.com/sign-up) and create an account.
2. Log into your dashboard.

---

## Step 2: Create an Email Service
1. In the left sidebar, click on **Email Services**.
2. Click **Add New Service**.
3. Select your email provider (e.g., **Gmail**, **Outlook**, or a custom SMTP server).
4. Click **Connect Account**, log in, and authorize EmailJS to send emails.
5. Note the **Service ID** (e.g., `service_xxxxxxx`). You will need this for your configuration.

---

## Step 3: Create an Email Template
1. In the left sidebar, click on **Email Templates**.
2. Click **Create New Template**.
3. Customize the email subject and body. To receive all the details submitted by the user through the contact form, use the following exact double-curly placeholder variables:
   *   `{{from_name}}` — The name of the sender.
   *   `{{reply_to}}` — The email address of the sender.
   *   `{{interest}}` — What the user is interested in (e.g., QE, AI Quality, Development, etc.).
   *   `{{industry}}` — The user's industry (e.g., Banking, Healthcare, SaaS, etc.).
   *   `{{message}}` — The detailed text message describing their challenges.
4. Set the **To Email** field to the inbox where you want to receive these enquiries (e.g., `contactus@testyantra.com`).
5. Set the **Reply-To** field to `{{reply_to}}` so you can reply directly to the sender.
6. Click **Save** in the top right.
7. Note the **Template ID** (e.g., `template_xxxxxxx`).

---

## Step 4: Find Your Public API Key
1. In the left sidebar, click on **Account** (or Account Settings).
2. Under the **API Keys** tab, copy your **Public Key** (e.g., `user_xxxxxxxxxxxxxxxx` or similar string).

---

## Step 5: Update Environment Variables
Open the [.env.local](file:///d:/office-projects/TestYantra_Website/.env.local) file in the root of this project and replace the placeholder values with your keys:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_real_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_real_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_real_public_key
```

Once configured and saved, restarting the dev server (`npm run dev`) or reloading the page will make EmailJS send actual emails!

---

## Step 6: Set Up a Premium Email HTML Template
To make emails sent to your inbox look modern and professional (matching the TestYantra dark/orange branding), use this template.

### Instructions:
1. In the EmailJS Template Editor, click the **`<Source>`** (or Source Code) button in the toolbar.
2. Delete everything inside it.
3. Paste the following HTML block:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #334155; margin: 0; padding: 20px; }
    .email-container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #0f172a; padding: 32px 24px; border-bottom: 4px solid #f38118; }
    .header h1 { color: #ffffff; font-size: 20px; font-weight: 700; margin: 0; letter-spacing: -0.02em; }
    .header p { color: #94a3b8; font-size: 13px; margin: 6px 0 0 0; }
    .content { padding: 32px 24px; }
    .grid-row { margin-bottom: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px; }
    .grid-label { font-size: 10px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin-bottom: 4px; }
    .grid-value { font-size: 14px; font-weight: 600; color: #0f172a; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-top: 24px; }
    .message-title { font-size: 10px; font-weight: 800; text-transform: uppercase; color: #64748b; margin-bottom: 8px; letter-spacing: 0.05em; }
    .message-text { font-size: 14px; line-height: 1.6; color: #334155; margin: 0; white-space: pre-wrap; }
    .reply-action-container { margin-top: 28px; text-align: center; }
    .reply-btn { display: inline-block; background-color: #f38118; color: #ffffff !important; padding: 12px 28px; font-size: 14px; font-weight: bold; border-radius: 8px; text-decoration: none; box-shadow: 0 4px 6px -1px rgba(243, 129, 24, 0.25); transition: background-color 0.2s; }
    .reply-btn:hover { background-color: #e07210; }
    .footer { background: #f1f5f9; padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; }
    .footer a { color: #f38118; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>New Customer Enquiry</h1>
      <p>TestYantra & Innovexce Contact Form Submission</p>
    </div>
    <div class="content">
      <div class="grid-row">
        <div class="grid-label">Full Name</div>
        <div class="grid-value">{{from_name}}</div>
      </div>
      <div class="grid-row">
        <div class="grid-label">Email Address</div>
        <div class="grid-value">
          <a href="mailto:{{reply_to}}" style="color: #f38118; text-decoration: none; font-weight: bold;">{{reply_to}}</a>
        </div>
      </div>
      <div class="grid-row">
        <div class="grid-label">Interest</div>
        <div class="grid-value">{{interest}}</div>
      </div>
      <div class="grid-row">
        <div class="grid-label">Industry</div>
        <div class="grid-value">{{industry}}</div>
      </div>
      <div class="message-box">
        <div class="message-title">Message Details</div>
        <p class="message-text">{{message}}</p>
      </div>
      
      <!-- Interactive Reply Action Button -->
      <div class="reply-action-container">
        <a href="mailto:{{reply_to}}?subject=Re: Your inquiry with TestYantra" class="reply-btn">Reply to Sender</a>
      </div>
    </div>
    <div class="footer">
      <p>This enquiry was sent from the <a href="https://testyantra.com" target="_blank">TestYantra Contact Form</a>.</p>
    </div>
  </div>
</body>
</html>
```

4. Click **`<Source>`** again to toggle back to preview mode (you will see the beautiful preview card layout).
5. Click **Save** to apply the template changes.

