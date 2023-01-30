<p align="center">
  <a href="https://kolor-dev.vercel.app/" target="_blank">
    <picture>
      <source
        media="(prefers-color-scheme: light)"
        srcset="/showcase/assets/kolor_dev_logo_0_light.svg"
      />
      <source
        media="(prefers-color-scheme: dark)"
        srcset="/showcase/assets/kolor_dev_logo_0.svg"
      />
      <img
        alt="Kolor-Dev"
        title="Kolor-Dev"
        src="/showcase/assets/kolor_dev_logo_0.svg"
        width="200"
        style="max-width: 100%;"
      />
    </picture>
  </a>
  <br />

  <b align="center">
    Colors-related toolkit<sup>1</sup> for Artists, Designers & Developers.
  </b>
  <br />
  <span><sup>1</sup>As of now, not really a toolkit.</span>
</p>

---

## Table of Contents <!-- omit in toc -->

- [Introduction](#introduction)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Thoughts](#thoughts)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Introduction

Kolor-Dev is a color-related toolkit initially developed by
[kon-pas](https://github.com/kon-pas) with the aim of self-learning web
development.

As for now, there is no intent to provide further support.

## Usage

**Head to [showcase.md](/showcase/showcase.md) for the prepared showcase**.

Alternatively, visit [Kolor-Dev](https://kolor-dev.vercel.app/) directly or
clone the repository and run the following:

```bash
npm install
npm run build
npm run start
```

The website can now be accessed via `http://localhost:3000` on your machine or
via `<TARGET_MACHINE_IP>:3000` on your local network.

## Tech Stack

- **Scripting**

  - `TypeScript`@`4.8.0` &ndash; static typing with pleasure
  - SassScript &ndash; CSS preprocessing

- **Backend**

  - Next.js &ndash; data fetching, routing & plenty of features Next.js has to offer
  - Prisma &ndash; data mapping, modeling & typing, database client

- **Frontend**

  - React &ndash; on which Next.js is built
  - TailwindCSS &ndash; utility CSS classes
  - TailwindCSS Debug Screens &ndash; manual layout testing

- **Deployment**

  - MongoDB Atlas &ndash; database deployment
  - Vercel &ndash; frontend & backend deployment

- **Design**

  - Adobe Illustrator &ndash; vector graphics
  - Adobe Photoshop &ndash; sketches, raster illustrations

- **Code Quality**

  - ESLint &ndash; static code analysis
  - Prettier &ndash; formatting
  - BEM &ndash; CSS methodolody
  - Lighthouse &ndash; performance, quality & correctness

- **Utils**

  - clsx &ndash; constructing class strings
  - colvertize &ndash; converting colors
  - nanoid &ndash; generating IDs
  - react-toastify &ndash; toast notifications

## Thoughts

Next.js with TypeScript has the DX I admire.

Using Prisma was convenient, but the project is way too small to fell profiting
from using it instead of using other tools, like Mongoose for database client
and data modeling. As I was not restricted to certain database, mapping was not
crucial.

TailwindCSS did not boost my productivity, as it takes time to get used to it,
but I believe the reward compensates the efford.

Coding styles in SCSS & BEM was fine, but nothing more. I still would go with
CSS-in-JS if I were to choose.

That being said, in general and personally, TailwindCSS with CSS-in-JS is my
favourite approach.

## Acknowledgments

Inspired by [Color Hunt](https://colorhunt.co/) and
[coolors](https://coolors.co/). SVG icons by
[heroicons](https://heroicons.com/). Hero section SVG path of the landing page
taken from [LWKS](https://lwks.com/lightworks-features/).

## License

This project is [MIT](/LICENSE.md) licensed.
