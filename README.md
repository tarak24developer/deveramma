# Meruga Vari Deveramma Temple Website

This repository contains the official website for the Meruga Vari Deveramma Temple, located in Mantada village near Vijayawada city in Andhra Pradesh, India.

##  About the Temple

Deveramma Temple has a rich history dating back to the early 1900s. The temple was initially considered as Meruga Venkateswara Rao Garu's **Thaataku Illu**. In the 2000s, Meruga Venkata Subbaiah Garu's grandson, Meruga Rajesh Garu, built the temple building on August 29, 2007, as an act of devotion towards Deveramma.

The temple is dedicated to the worship of Goddess Deveramma, a revered deity known for her blessings and miracles, particularly worshiped by the Meruga family.

##  Website Features

- Multilingual support (English and Telugu)
- Information about temple history, deity, and architecture
- Temple services and poojas
- Events calendar
- Photo gallery
- Contact information and visit planning assistance
- Donation options

##  Technical Implementation

This website is built with [Astro](https://astro.build), a modern web framework for building fast, content-focused websites.

### Project Structure

```text
/
├── public/          # Static assets (images, favicon, etc.)
├── src/
│   ├── components/  # Reusable UI components
│   ├── data/        # Data files for events, etc.
│   ├── i18n/        # Internationalization files
│   ├── layouts/     # Page layouts
│   ├── pages/       # All pages (routes)
│   │   ├── en/      # English language pages
│   │   └── te/      # Telugu language pages
│   ├── services/    # API services
│   └── styles/      # Global styles
└── package.json
```

##  Development Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build the production site to `./dist/`           |
| `npm run preview`         | Preview the build locally, before deploying      |

##  Contact

For any inquiries regarding the temple or this website, please contact us at:

- Email: contact@deveramma.org
- Phone: +91 6303252209
