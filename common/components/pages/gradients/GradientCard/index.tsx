import styles from "./GradientCard.module.scss";
import "react-toastify/dist/ReactToastify.css";

import type { FC } from "react";
import type { GradientScheme } from "@types";

import { useState, useEffect } from "react";
import { useRouter, NextRouter } from "next/router";
import { toast } from "react-toastify";

import { TOAST_OPTIONS } from "@constants";
import { local } from "@services";

import IconSVG from "@components/elements/IconSVG";
import Gradient from "@components/elements/GradientBackground";
import Color from "@components/elements/ColorBackground";
import SpanMonochrome from "@components/elements/SpanMonochrome";
import Button from "@components/elements/Button";

interface GradientCardProps {
  gradient: GradientScheme;
}

const GradientCard: FC<GradientCardProps> = ({ gradient }) => {
  const [isSaved, setIsSaved] = useState<boolean>();

  useEffect(() => {
    setIsSaved(gradient ? local.gradients.includes(gradient.id) : false);
  }, [gradient]);

  const router: NextRouter = useRouter();

  const handleRedirect = () => void router.push(`/gradients/${gradient.id}`);

  const handleColorOnClick = (color: string) => {
    navigator.clipboard.writeText(color).then(
      () => {
        toast(`Copied ${color}`, TOAST_OPTIONS);
      },
      () => {
        toast("Copy to Clipboard Failed :/", TOAST_OPTIONS);
      }
    );
  };

  const handleSaveButtonOnClick = () => {
    const { id } = gradient as GradientScheme;
    if (local.gradients.includes(id)) local.gradients.remove(id);
    else local.gradients.add(id);
    local.gradients.save();
    setIsSaved(isSaved => !isSaved);
  };

  return (
    <div className={styles["card"]}>
      <div className={styles["card__colors"]}>
        {gradient.colors.map((color, idx) => (
          <div
            className={styles["card__color"]}
            key={idx}
            onClick={() => handleColorOnClick(color.toUpperCase())}
          >
            <Color hex={color}>
              <SpanMonochrome color={color}>
                {color.toUpperCase()}
              </SpanMonochrome>
            </Color>
          </div>
        ))}
      </div>

      <div className={styles["card__gradient"]} onClick={handleRedirect}>
        <Gradient colors={gradient.colors} />
      </div>

      <div className={styles["card__desc"]}>
        <Button label="Save" onClick={handleSaveButtonOnClick}>
          {isSaved ? (
            <IconSVG filled strokeWidth={1}>
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </IconSVG>
          ) : (
            <IconSVG strokeWidth={1}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </IconSVG>
          )}
        </Button>

        <Button onClick={handleRedirect} label={gradient.title} />
      </div>
    </div>
  );
};

export default GradientCard;
