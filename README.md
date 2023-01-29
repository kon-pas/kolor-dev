<p align="center">
  <a href="https://kolor-dev.vercel.app/" target="_blank">
    <picture>
      <source
        media="(prefers-color-scheme: dark)"
        srcset="/showcase/assets/kolor_dev_logo_0.svg"
      />
      <source
        media="(prefers-color-scheme: light)"
        srcset="/showcase/assets/kolor_dev_logo_0_light.svg"
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
- [Tech Stack](#tech-stack)
- [Development](#development)
- [Thoughts](#thoughts)
- [Showcase](#showcase)
- [Acknowledgments](#acknowledgments)

## Introduction

Kolor-Dev is a color-related toolkit initially developed by
[kon-pas](https://github.com/kon-pas) with the aim of self-learning web
development.

As for now, there is no intent to provide further support.

## Tech Stack

- **Scripting**

  - TypeScript - static typing with pleasure
  - SassScript - CSS preprocessing

- **Backend**

  - Next.js -
  - Prisma - data mapping, modeling & typing, database client

- **Frontend**

  - React - on which Next.js is built
  - TailwindCSS - utility CSS classes
  - TailwindCSS Debug Screens - layout manual testing

- **Deployment**

  - MongoDB Atlas - database deployment
  - Vercel - frontend & backend deployment

- **Design**

  - Adobe Illustrator - vector graphics
  - Adobe Photoshop - sketches, raster illustrations

- **Code Quality**

  - ESLint - static code analysis
  - Prettier - formatting
  - BEM - CSS methodolody
  - Lighthouse - performance, quality & correctness

- **Utils**

  - clsx - constructing class strings
  - colvertize - converting colors
  - nanoid - generating IDs
  - react-toastify - toast notifications

## Development

lighthouse, bem

## Thoughts

Next.js with TypeScript has the DX I admire.

Using Prisma was convenient, but the project is way too small to fell profiting from using it instead of using other tools, like Mongoose for database client and data modeling. As I was not restricted to certain database, mapping was not crucial.

TailwindCSS did not boost my productivity, as it takes time to get used to it,
but I believe the reward compensates the efford.

Coding styles in SCSS & BEM was fine, but nothing more. I still would go with CSS-in-JS if I were to choose.

That being said, in general and personally, TailwindCSS with CSS-in-JS () is my favourite approach.

## Showcase

Head to [showcase.md](/showcase/showcase.md) for the prepared showcase or visit
[Kolor-Dev](https://kolor-dev.vercel.app/) directly.

## Acknowledgments

icons, phone graphic
