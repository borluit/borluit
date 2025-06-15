# Borluit.dev Portfolio Website

This repository contains the source code for the official Borluit.dev portfolio website, designed to showcase our Android applications available on the Google Play Store.

The website is built with clean, modern HTML, and Tailwind CSS, and is fully optimized for SEO and deployment on GitHub Pages.

## ✨ Features

-   **5 Pages:** Home, Apps, About, Contact, Privacy, and Disclaimer.
-   **Modern Design:** Clean, minimalist, and fully responsive.
-   **Dark/Light Mode:** User-toggleable theme.
-   **SEO Optimized:** Meta tags, OpenGraph, Twitter Cards, and Schema.org markup included.
-   **Contact Form:** Integrated with Formspree for easy email submissions.
-   **GitHub Pages Ready:** Optimized for easy and free hosting.

## 🚀 Deployment Guide

Follow these steps to get your website live on GitHub Pages.

### Step 1: Create a GitHub Repository

1.  Create a new public repository on GitHub. Name it `your-username.github.io` if you want the site to be at `https://your-username.github.io`. Otherwise, you can name it anything (e.g., `borluit-portfolio`), and it will be live at `https://your-username.github.io/borluit-portfolio`.

### Step 2: Upload Files

1.  Download all the files provided (`index.html`, `apps.html`, etc.).
2.  Create an `assets` folder and place a `favicon.ico` file inside. You can generate one from many free online tools.
3.  Upload all the files and the `assets` folder to your new GitHub repository. Your file structure should look like this:

    ```
    /
    ├── index.html
    ├── apps.html
    ├── about.html
    ├── contact.html
    ├── privacy.html
    ├── disclaimer.html
    ├── style.css
    ├── script.js
    ├── sitemap.xml
    ├── robots.txt
    ├── README.md
    └── /assets/
        └── favicon.ico
    ```

### Step 3: Configure the Contact Form (Formspree)

1.  Go to [Formspree.io](https://formspree.io/) and create a free account.
2.  Create a new form and point it to your email address (`kazirangaapps@gmail.com`).
3.  Formspree will give you a unique URL endpoint. It will look something like `https://formspree.io/f/xxxxxxxx`.
4.  Open `contact.html` and find the `<form>` tag. Replace the placeholder `action` URL with your unique Formspree URL:

    ```html
    <!-- BEFORE -->
    <form id="contact-form" action="https://formspree.io/f/your_form_id" method="POST">
    
    <!-- AFTER -->
    <form id="contact-form" action="https://formspree.io/f/xxxxxxxx" method="POST"> 
    ```
5.  Save the `contact.html` file and commit the change to your repository.

### Step 4: Enable GitHub Pages

1.  In your GitHub repository, go to **Settings > Pages**.
2.  Under the "Build and deployment" section, for the **Source**, select `Deploy from a branch`.
3.  For the **Branch**, select `main` (or `master`) and keep the folder as `/ (root)`.
4.  Click **Save**. GitHub will build and deploy your site. It might take a few minutes.
5.  Your website will be live at the URL shown on the GitHub Pages settings screen.

### Step 5: Update URLs and SEO Files

1.  **IMPORTANT:** Go through all `*.html` files, `sitemap.xml`, and `robots.txt` and replace every instance of `https://your-domain.com` with your actual live GitHub Pages URL (e.g., `https://your-username.github.io/borluit-portfolio`).
2.  Commit these changes to your repository.

### (Optional) Step 6: Custom Domain

1.  If you own a custom domain, you can connect it in the **Settings > Pages** section of your repository.
2.  Follow the instructions provided by GitHub to configure your DNS records with your domain registrar.

## 📈 SEO Keywords Suggestions

Based on the Borluit.dev profile, here are some suggested keywords to target:

**Primary Keywords:**
* Borluit.dev
* Android app developer
* Google Play developer

**App-Specific Keywords:**
* Any Text Widget
* Minimalist Wallpaper app
* All Files Document Reader
* Custom text widget Android
* Simple Android wallpaper

**General Keywords:**
* useful android apps
* productivity tools for android
* best utility apps android
* free android apps
* clean interface apps
