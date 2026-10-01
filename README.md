# Fikri Portfolio

## 📌 Description

Designed to present a comprehensive overview of my engineering capabilities, software projects, and academic background. Featuring a clean layout and structured navigation, it offers an intuitive experience to explore my work, key milestones, and technical expertise.

---

## 🛠️ Tech Stack

| Category                    | Technologies Used                                                                                                                |
| :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| 🌐 **Programming Language** | `TypeScript`                                                                                                                     |
| 🧩 **Frameworks**           | `Next.js`, `Tailwind CSS`                                                                                                        |
| ⚛️ **Libraries**            | `React`, `shadcn/ui`, `next-themes`, `Zod`, `React Hook Form`,<br>`React Google Recaptcha V3`, `Motion`, `React Icons`, `theSVG` |
| 📩 **Email Service**        | `Resend`                                                                                                                         |
| 🚀 **Deployment**           | `Vercel`                                                                                                                         |

---

## ⚙️ Setup Instructions

1. **Prerequisites**
   - Node.js 24 or higher.
   - Git installed on your system.
   - PNPM 10 installed on your system (Optional).
   - An active [Resend](https://resend.com) account.
   - A [Google reCAPTCHA v3](https://www.google.com/recaptcha/admin/create) site configuration.

2. **Resend Account Setup**
   - Visit the official [Resend website](https://resend.com).
   - Click **Log in** and select **Log in with GitHub**.
   - Navigate to **API Keys** in the dashboard and click **Create API Key**.
   - Enter a name for your key, click **Add**, and copy the generated **API Key** to use during environment configuration.

3. **Google reCAPTCHA Setup**
   - Visit the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create).
   - Enter a descriptive label for your project.
   - Select **Score based (v3)** as the reCAPTCHA type.
   - In the **Domains** section, add `localhost` and `127.0.0.1` (add your live production domain if deployed).
   - Enter your project name and click **Submit**.
   - Copy both the **Site Key** and **Secret Key** provided for environment configuration.

4. **Clone the Repository**

```bash
git clone https://github.com/Fikri-Rouzan/fikri-portfolio.git
cd fikri-portfolio
```

5. **Install Packages**

```bash
# Using npm
npm i

# Using pnpm
pnpm i
```

6. **Configure Environment Variables**

```bash
cp .env.example .env
```

- Open the `.env` file and configure the following variables

  ```env
  RESEND_API_KEY="YOUR_RESEND_API_KEY"
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY="YOUR_RECAPTCHA_SITE_KEY"
  RECAPTCHA_SECRET_KEY="YOUR_RECAPTCHA_SECRET_KEY"
  ```

7. **Run the Program**

```bash
# Using npm
npm run dev

# Using pnpm
pnpm dev
```
