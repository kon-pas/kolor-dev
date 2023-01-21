import styles from "@styles/pages/gradients/custom.module.scss";
import "react-toastify/dist/ReactToastify.css";

import type { NextPage, GetServerSideProps } from "next";
import type { CustomGradientScheme } from "@interfaces";

import { NextRouter, withRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import { toast } from "react-toastify";

import { TOAST_OPTIONS, EIGHT_DIRECTIONS, CONSTRAINTS } from "@constants";
import { getRGB, getRandomHex } from "@utils";
import ErrorPage from "next/error";
import { usePathName } from "@hooks";

import TextUnderlined from "@components/elements/TextUnderlined";
import BackgroundGradient from "@components/elements/BackgroundGradient";
import BackgroundColor from "@components/elements/BackgroundColor";
import IconSVG from "@components/elements/IconSVG";
import Button from "@components/elements/Button";
import CodeSnippet from "@components/elements/CodeSnippet";
import SpanMonochrome from "@components/elements/SpanMonochrome";

interface GradientCustomPageProps {
  statusCode: 200 | 500;
  router: NextRouter;
  initialGradient: CustomGradientScheme;
}

const GradientCustomPage: NextPage<GradientCustomPageProps> = ({
  statusCode,
  router,
  initialGradient,
}) => {
  const [directionIndex, setDirectionIndex] = useState<number>(0);

  const [customGradient, setCustomGradient] =
    useState<CustomGradientScheme>(initialGradient);

  const { setPathName } = usePathName();

  useEffect(() => {}, [setPathName]);

  if (statusCode === 500) return <ErrorPage statusCode={statusCode} />;

  const handleReturnButtonOnClick = () => {
    router.back();
  };

  const handleRandomizeButtonOnClick = () => {
    setCustomGradient(prev => ({
      ...customGradient,
      colors: prev.colors.map(() => getRandomHex()),
    }));
  };

  const handleRotateButtonOnClick = () => {
    setDirectionIndex(prev => (prev + 1) % EIGHT_DIRECTIONS.length);
  };

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
    const angle: number = (45 / 360) * Math.PI;
    const linearGradient = ctx.createLinearGradient(
      0,
      height / 2,
      Math.cos(angle) * width,
      Math.sin(angle) * (height / 2)
    );

    customGradient.colors.forEach((color, idx, colors) => {
      linearGradient.addColorStop(idx / (colors.length - 1), color);
    });

    [canvas.width, canvas.height] = [width, height];

    ctx.fillStyle = linearGradient;
    ctx.fillRect(0, 0, width, height);

    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(Math.cos(angle) * width, (Math.sin(angle) * height) / 2);
    ctx.stroke();

    const image = canvas.toDataURL();
    const link = document.createElement("a");
    const name = customGradient.title.replace(/[^a-z0-9]/gi, "").toLowerCase();

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

  const handleRemoveColorOnClick = (idx: number) => {
    if (customGradient.colors.length > CONSTRAINTS.MIN_GRADIENT_COLORS) {
      const tempGradient: CustomGradientScheme = { ...customGradient };
      tempGradient.colors.splice(idx, 1);
      setCustomGradient(tempGradient);
    } else
      toast(
        `Must have ${CONSTRAINTS.MIN_GRADIENT_COLORS} colors at least`,
        TOAST_OPTIONS
      );
  };

  const handleEditColorOnClick = (color: string, idx: number) => {
    const tempGradient: CustomGradientScheme = { ...customGradient };
    tempGradient.colors[idx] = color;
    setCustomGradient(tempGradient);
  };

  const handleAddColorOnClick = () => {
    if (customGradient.colors.length < CONSTRAINTS.MAX_GRADIENT_COLORS)
      setCustomGradient(prev => ({
        ...prev,
        colors: [...prev.colors, prev.colors[prev.colors.length - 1]],
      }));
    else
      toast(
        `Can have ${CONSTRAINTS.MAX_GRADIENT_COLORS} colors at most`,
        TOAST_OPTIONS
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

  const codeSnippets: string[] = [
    `${customGradient.colors.map((color, idx) =>
      idx === 0 ? color.toUpperCase() : " " + color.toUpperCase()
    )}`,
    `${customGradient.colors.map((color, idx) =>
      idx === 0 ? getRGB(color) : " " + getRGB(color)
    )}`,
    `background: linear-gradient(${customGradient.colors.map((color, idx) =>
      idx === 0 ? color.toUpperCase() : " " + color.toUpperCase()
    )});`,
    `background: linear-gradient(${customGradient.colors.map((color, idx) =>
      idx === 0 ? getRGB(color) : " " + getRGB(color)
    )});`,
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
            <TextUnderlined colors={customGradient.colors}>
              {customGradient.title}
            </TextUnderlined>
          </h1>
        </header>

        <div className={styles["gradient"]}>
          <BackgroundGradient
            colors={customGradient.colors}
            direction={EIGHT_DIRECTIONS[directionIndex].label}
          />
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
              <IconSVG>{EIGHT_DIRECTIONS[directionIndex].iconPath}</IconSVG>
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
          {customGradient.colors.map((color, idx, colors) => (
            <div className={styles["colors-list__item"]} key={idx}>
              <div className={styles["colors-list__color"]}>
                <BackgroundColor hex={color}>
                  <div
                    className={styles["colors-list__hex"]}
                    onClick={() => handleColorOnCLick(color.toUpperCase())}
                  >
                    <SpanMonochrome color={color}>
                      {color.toUpperCase()}
                    </SpanMonochrome>
                  </div>

                  <div className={styles["colors-list__pane"]}>
                    <div
                      className={styles["colors-list__icon"]}
                      onClick={() => handleRemoveColorOnClick(idx)}
                    >
                      <SpanMonochrome color={color}>
                        <IconSVG>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </IconSVG>
                      </SpanMonochrome>
                    </div>

                    <div className={styles["colors-list__icon"]}>
                      <SpanMonochrome color={color}>
                        <IconSVG>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                          />
                        </IconSVG>
                      </SpanMonochrome>
                      <input
                        type="color"
                        value={color}
                        onChange={event =>
                          handleEditColorOnClick(event.target.value, idx)
                        }
                      />
                    </div>
                  </div>
                </BackgroundColor>
              </div>

              {idx + 1 < CONSTRAINTS.MAX_GRADIENT_COLORS && (
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

          {customGradient.colors.length < CONSTRAINTS.MAX_GRADIENT_COLORS && (
            <div
              className={styles["colors-list__arrow"]}
              onClick={handleAddColorOnClick}
            >
              <IconSVG>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </IconSVG>
            </div>
          )}
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

export default withRouter(GradientCustomPage);
