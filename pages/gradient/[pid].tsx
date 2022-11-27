import styles from "@styles/pages/gradient/[pid].module.scss";
import "react-toastify/dist/ReactToastify.css";

import { MiscTags } from "@enums";
import type { GradientScheme, GradientsJSON } from "@interfaces";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

import { useState, useEffect } from "react";
import ErrorPage from "next/error";
import { toast, ToastContainer, Flip } from "react-toastify";
import { ParsedUrlQuery } from "querystring";

import { TOAST_OPTIONS } from "@constants";
import { getCleanHex, getRGB } from "@utils";
import { local } from "@services";

import TextUnderlined from "@components/elements/TextUnderlined";
import Gradient from "@components/elements/GradientBackground";
import Color from "@components/elements/ColorBackground";
import IconSVG from "@components/elements/IconSVG";
import Button from "@components/elements/Button";
import CodeSnippet from "@components/elements/CodeSnippet";
import Tag from "@components/elements/Tag";
import SpanMonochrome from "@components/elements/SpanMonochrome";

interface GradientPidProps {
  statusCode: 404 | 500;
  gradient?: GradientScheme;
}

const GradientPid: NextPage<GradientPidProps> = ({ gradient, statusCode }) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  useEffect(() => {
    setIsSaved(gradient ? local.gradients.includes(gradient.id) : false);
  }, [gradient]);

  if (statusCode === 404) return <ErrorPage statusCode={statusCode} />;

  gradient = gradient as GradientScheme;

  const codeSnippets = [
    {
      title: "Plain",
      expr: `${gradient.colors.map((color, idx) =>
        idx === 0 ? color.toUpperCase() : " " + color.toUpperCase()
      )}`,
    },

    {
      title: "CSS",
      expr: `background: linear-gradient(${gradient.colors.map((color, idx) =>
        idx === 0 ? color.toUpperCase() : " " + color.toUpperCase()
      )});`,
    },

    {
      title: "Plain",
      expr: `${gradient.colors.map((color, idx) =>
        idx === 0 ? getRGB(color) : " " + getRGB(color)
      )}`,
    },

    {
      title: "CSS",
      expr: `background: linear-gradient(${gradient.colors.map((color, idx) =>
        idx === 0 ? getRGB(color) : " " + getRGB(color)
      )});`,
    },
  ];

  const handleSaveButtonOnClick = () => {
    const { id } = gradient as GradientScheme;
    if (local.gradients.includes(id)) local.gradients.remove(id);
    else local.gradients.add(id);
    setIsSaved((isSaved) => !isSaved);
  };

  const handleLinkButtonOnClick = () => {
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

    gradient!.colors.forEach((color, idx, colors) => {
      linearGradient.addColorStop(idx / (colors.length - 1), color);
    });

    [canvas.width, canvas.height] = [width, height];
    ctx.fillStyle = linearGradient;
    ctx.fillRect(0, 0, width, height);

    const image = canvas.toDataURL();
    const link = document.createElement("a");
    const name = gradient!.title.replace(/[^a-z0-9]/gi, "").toLowerCase();

    link.download = `${name}.png`;
    link.href = image;
    link.click();
  };

  const handleEditButtonOnClick = () => {
    toast("Not Yet Available", TOAST_OPTIONS);
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

  return (
    <>
      <div className={styles["gradient-pid"]}>
        <header className={styles["header"]}>
          <h1 className={styles["header__heading"]}>
            <TextUnderlined colors={gradient.colors}>
              {gradient.title}
            </TextUnderlined>
          </h1>
        </header>

        <div className={styles["gradient"]}>
          <Gradient colors={gradient.colors} />
        </div>

        <div className={styles["buttons"]}>
          <div className={styles["buttons__left"]}>
            <Button label="Save" onClick={handleSaveButtonOnClick}>
              {isSaved ? (
                <IconSVG filled>
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </IconSVG>
              ) : (
                <IconSVG>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </IconSVG>
              )}
            </Button>
          </div>

          <div className={styles["buttons__right"]}>
            <Button label="Link" onClick={handleLinkButtonOnClick}>
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

            <Button label="Edit" onClick={handleEditButtonOnClick}>
              <IconSVG>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </IconSVG>
            </Button>
          </div>
        </div>

        <div className={styles["colors-list"]}>
          {gradient.colors.map((color, idx, colors) => (
            <div className={styles["colors-list__item"]} key={idx}>
              <div
                className={styles["colors-list__color"]}
                onClick={() => handleColorOnCLick(color.toUpperCase())}
              >
                <Color hex={color}>
                  <SpanMonochrome color={color}>
                    {getCleanHex(color)}
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
          {codeSnippets.map(({ title, expr }, idx) => (
            <CodeSnippet
              key={idx}
              title={title}
              onClick={() => handleCodeSnippetOnClick(expr)}
            >
              <span>{expr}</span>
            </CodeSnippet>
          ))}
        </section>

        <div className={styles["tags"]}>
          <div className={styles["tags__color-tags"]}>
            {gradient.tags?.mainColors.map((color, idx) => (
              <Tag type="color" color={color} key={idx}>
                {color}
              </Tag>
            ))}
          </div>

          <div className={styles["tags__hash-tags"]}>
            {gradient.tags?.misc.map((label, idx) => (
              <Tag type="hash" key={idx}>
                {MiscTags[label]}
              </Tag>
            ))}
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        transition={Flip}
        theme="dark"
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/gradients", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const gradients: GradientsJSON = await res.json();
  type Path = {
    params: {
      pid: string;
    };
  };
  const paths: Path[] = Object.keys(gradients).map((key) => ({
    params: { pid: key },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  type Params = ParsedUrlQuery & {
    pid: string;
  };
  const { pid } = params as Params;
  const res = await fetch(`http://localhost:3000/api/gradient/${pid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf8",
    },
  });

  if (!res.ok) {
    return {
      props: {
        statusCode: 404,
      },
    };
  }

  const gradient = await res.json();

  return {
    props: {
      gradient,
      statusCode: 500,
    },
  };
};

export default GradientPid;
