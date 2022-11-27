import styles from "./GradientCard.module.scss";
import "react-toastify/dist/ReactToastify.css";

import type { GradientScheme } from "@interfaces";
import type { GradientId } from "@types";

import { useRouter, NextRouter } from "next/router";
import { toast, ToastContainer, Flip } from "react-toastify";

import { TOAST_OPTIONS } from "@constants";
import { getCleanHex } from "@utils";
// import { local } from "@services";

import IconSVG from "@components/elements/IconSVG";
import Gradient from "@components/elements/GradientBackground";
import Color from "@components/elements/ColorBackground";
import SpanMonochrome from "@components/elements/SpanMonochrome";
import Button from "@components/elements/Button";

interface GradientCardProps {
  gradient: GradientScheme;
  gradientId: GradientId;
}

const GradientCard: React.FC<GradientCardProps> = ({
  gradient,
  gradientId,
}) => {
  const router: NextRouter = useRouter();

  const handleRedirect = () => router.push(`/gradient/${gradientId}`);

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
                {getCleanHex(color)}
              </SpanMonochrome>
            </Color>
          </div>
        ))}
      </div>

      <div className={styles["card__gradient"]} onClick={handleRedirect}>
        <Gradient colors={gradient.colors} />
      </div>

      <div className={styles["card__desc"]}>
        <Button label="Save">
          <IconSVG title="Like gradient" strokeWidth={1}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </IconSVG>
        </Button>

        <Button onClick={handleRedirect} label={gradient.title} />
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
    </div>
  );
};

export default GradientCard;
