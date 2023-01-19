// @@@ NOTE: This may be a bad design pattern. A lot of code is reduntant since
// this page is a modified `/gradients/[pid]`. I wanted this to be SSR, but
// `/gradients/[pid]` to stay SSG. I believe there is a better approach.

import styles from "@styles/pages/gradients/[pid].module.scss";
import "react-toastify/dist/ReactToastify.css";

import type { MiscTag, MainColor } from "@enums";
import type { NextPage, GetServerSideProps } from "next";
import type { GradientHue } from "@types";

import { NextRouter, withRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import { toast } from "react-toastify";

import { TOAST_OPTIONS } from "@constants";
import { getRGB, isMiscTag, isMainColor } from "@utils";
import ErrorPage from "next/error";
import { usePathName } from "@hooks";

import TextUnderlined from "@components/elements/TextUnderlined";
import Gradient from "@components/elements/GradientBackground";
import Color from "@components/elements/ColorBackground";
import IconSVG from "@components/elements/IconSVG";
import Button from "@components/elements/Button";
import CodeSnippet from "@components/elements/CodeSnippet";
import SpanMonochrome from "@components/elements/SpanMonochrome";

interface GradientPidProps {
  statusCode: 200 | 500;
  router: NextRouter;
  initialGradient: CustomGradientScheme;
}

interface CustomGradientScheme {
  colors: GradientHue;
  title: string;
}

const GradientPid: NextPage<GradientPidProps> = ({
  statusCode,
  router,
  initialGradient,
}) => {
  const { setPathName } = usePathName();
  const [currentGradient, setCurrentGradient] =
    useState<CustomGradientScheme>(initialGradient);
  const [newGradient, setNewGradient] =
    useState<CustomGradientScheme>(initialGradient);

  useEffect(() => {
    setPathName("Gradients");
  }, [setPathName]);

  if (statusCode === 500) return <ErrorPage statusCode={statusCode} />;

  const handleReturnButtonOnClick = () => {
    router.back();
  };

  const handleRotateButtonOnClick = () => {};

  const handleRandomizeButtonOnClick = () => {};

  const handleApplyChangesButtonOnClick = () => {};

  const handleShareButtonOnClick = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        toast("Link Copied to Clipboard", TOAST_OPTIONS);
      },
      () => {
        toast("Copy to Clipboard Failed :/", TOAST_OPTIONS);
      }
    );
  };

  const handleImageButtonOnClick = () => {
    const [width, height] = [1920, 1080];
    const canvas = document.createElement("canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const linearGradient = ctx.createLinearGradient(
      0,
      height / 2,
      width,
      height / 2
    );
    currentGradient.colors.forEach((color, idx, colors) => {
      linearGradient.addColorStop(idx / (colors.length - 1), color);
    });
    [canvas.width, canvas.height] = [width, height];
    ctx.fillStyle = linearGradient;
    ctx.fillRect(0, 0, width, height);
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    const name = currentGradient.title.replace(/[^a-z0-9]/gi, "").toLowerCase();
    link.download = `${name}.png`;
    link.href = image;
    link.click();
  };

  const handleColorOnCLick = (color: string) => {
    navigator.clipboard.writeText(color).then(
      () => {
        toast(`Copied ${color}`, TOAST_OPTIONS);
      },
      () => {
        toast("Copy to Clipboard Failed :/", TOAST_OPTIONS);
      }
    );
  };

  const handleCodeSnippetOnClick = (expr: string) => {
    navigator.clipboard.writeText(expr).then(
      () => {
        toast("Snippet Copied to Clipboard", TOAST_OPTIONS);
      },
      () => {
        toast("Copy to Clipboard Failed :/", TOAST_OPTIONS);
      }
    );
  };

  const handleTagOnClick = (tag: MiscTag | MainColor) => {
    router.push({
      pathname: "/gradients",
      query: isMiscTag(tag)
        ? {
            misc: tag,
          }
        : isMainColor(tag)
        ? {
            colors: tag,
          }
        : undefined,
    });
  };

  const codeSnippets: any[] = [
    // `${gradient.colors.map((color, idx) =>
    //   idx === 0 ? color.toUpperCase() : " " + color.toUpperCase()
    // )}`,
    // `background: linear-gradient(${gradient.colors.map((color, idx) =>
    //   idx === 0 ? color.toUpperCase() : " " + color.toUpperCase()
    // )});`,
    // `${gradient.colors.map((color, idx) =>
    //   idx === 0 ? getRGB(color) : " " + getRGB(color)
    // )}`,
    // `background: linear-gradient(${gradient.colors.map((color, idx) =>
    //   idx === 0 ? getRGB(color) : " " + getRGB(color)
    // )});`,
  ];

  return (
    <>
      <Head>
        <title>Kolor Dev | Create Gradient</title>
      </Head>

      <div className={styles["gradient-pid"]}>
        <header className={styles["header"]}>
          <div
            className={styles["header__return"]}
            onClick={handleReturnButtonOnClick}
          >
            <IconSVG>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </IconSVG>
          </div>

          <h1 className={styles["header__heading"]}>
            <TextUnderlined colors={newGradient.colors}>
              {newGradient.title}
            </TextUnderlined>
          </h1>
        </header>

        <div className={styles["gradient"]}>
          <Gradient colors={newGradient.colors} />
        </div>

        <div className={styles["buttons"]}>
          <div className={styles["buttons__left"]}>
            <Button label="Randomize" onClick={handleRandomizeButtonOnClick}>
              <IconSVG viewBox={[24, 24]}>
                <path d="M18 4l3 3l-3 3" />
                <path d="M18 20l3 -3l-3 -3" />
                <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
                <path d="M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5" />
              </IconSVG>
            </Button>

            <Button label="Rotate" onClick={handleRotateButtonOnClick}>
              <IconSVG>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </IconSVG>
            </Button>
          </div>

          <div className={styles["buttons__right"]}>
            <Button
              label="Apply Changes"
              onClick={handleApplyChangesButtonOnClick}
            >
              <IconSVG>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                />
              </IconSVG>
            </Button>

            <Button label="Share" onClick={handleShareButtonOnClick}>
              <IconSVG>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </IconSVG>
            </Button>

            <Button label="Image" onClick={handleImageButtonOnClick}>
              <IconSVG>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </IconSVG>
            </Button>
          </div>
        </div>

        <div className={styles["colors-list"]}>
          {newGradient.colors.map((color, idx, colors) => (
            <div className={styles["colors-list__item"]} key={idx}>
              <div
                className={styles["colors-list__color"]}
                onClick={() => handleColorOnCLick(color.toUpperCase())}
              >
                <Color hex={color}>
                  <SpanMonochrome color={color}>
                    {color.toUpperCase()}
                  </SpanMonochrome>
                </Color>
              </div>

              {idx + 1 !== colors.length && (
                <div className={styles["colors-list__arrow"]}>
                  <IconSVG>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                    />
                  </IconSVG>
                </div>
              )}
            </div>
          ))}
        </div>

        <section className={styles["code-snippets"]}>
          {codeSnippets.map((code, idx) => (
            <CodeSnippet
              key={idx}
              onClick={() => handleCodeSnippetOnClick(code)}
            >
              {code}
            </CodeSnippet>
          ))}
        </section>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      statusCode: 200,
      initialGradient: {
        colors: ["#BFFF00", "#BFFF00", "#BFFF00"],
        title: "Sample",
      },
    },
  };
};

export default withRouter(GradientPid);
