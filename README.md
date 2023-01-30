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

## Table of Contents 📖 <!-- omit in toc -->

- [Introduction 🔎](#introduction-)
- [Usage 🚀](#usage-)
- [Tech Stack 💻](#tech-stack-)
- [Thoughts 💭](#thoughts-)
- [Acknowledgments 👥](#acknowledgments-)
- [License 📝](#license-)

## Introduction 🔎

_Kolor-Dev_ is a color-related toolkit initially developed by
[kon-pas](https://github.com/kon-pas) with the aim of self-learning web
development.

As for now, there is no intent to provide further support.

## Usage 🚀

**Head to [showcase.md](/showcase/showcase.md) for a quick showcase**.

Alternatively, visit [Kolor-Dev](https://kolor-dev.vercel.app/) directly or
clone the repository and run the following:

```bash
npm install
npm run build
npm run start
```

The website can now be accessed via `http://localhost:3000` on your machine or
via `<TARGET_MACHINE_IP>:3000` on your local network.

## Tech Stack 💻

- **Scripting**

  - `TypeScript`@`4.8.0` &ndash; static typing with pleasure
  - `SassScript`@`1.54.5` &ndash; CSS preprocessing

- **Backend**

  - `Next.js`@`12.2.5` &ndash; data fetching, routing & plenty of features
    Next.js has to offer
  - `Prisma`@`4.8.1` &ndash; data mapping, modeling & typing, database client

- **Frontend**

  - `React`@`18.2.0` &ndash; on which Next.js is built
  - `TailwindCSS`@`3.1.8` &ndash; utility CSS classes
  - `TailwindCSS Debug Screens`@`2.2.1` &ndash; manual layout testing

- **Deployment**

  - `MongoDB Atlas` &ndash; database deployment
  - `Vercel` &ndash; frontend & backend deployment

- **Design**

  - `Adobe Illustrator` &ndash; vector graphics
  - `Adobe Photoshop` &ndash; sketches, raster illustrations

- **Code Quality**

  - `ESLint`@`8.22.0` &ndash; static code analysis
  - `Prettier`@`2.8.3` &ndash; formatting
  - `BEM` &ndash; CSS methodolody
  - `Lighthouse` &ndash; performance, quality & correctness

- **Utils**

  - `clsx`@`1.2.1` &ndash; constructing class strings
  - `colvertize`@`0.1.0` &ndash; converting colors
  - `nanoid`@`4.0.0` &ndash; generating IDs
  - `react-toastify`@`9.1.1` &ndash; toast notifications

## Thoughts 💭

_Next.js_ with _TypeScript_ has the DX I admire.

Using _Prisma_ was convenient, but the project is way too small to fell
profiting from using it instead of using other tools, like _Mongoose_ for
database client and data modeling. As I was not restricted to a certain
database, mapping was not crucial.

_TailwindCSS_ did not boost my productivity, as it takes time to get used to it,
but I believe the reward compensates the effort.

Coding styles in _SCSS_ & _BEM_ was fine, but nothing more. I still would go
with CSS-in-JS if I were to choose.

That being said, in general and personally, _TailwindCSS_ with CSS-in-JS is my
favorite approach.

## Acknowledgments 👥

Inspired by [Color Hunt](https://colorhunt.co/) and
[coolors](https://coolors.co/). SVG icons by
[heroicons](https://heroicons.com/). Hero section SVG path of the landing page
taken from [LWKS](https://lwks.com/lightworks-features/).

## License 📝

This project is [MIT](/LICENSE.md) licensed.
