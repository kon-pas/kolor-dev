import styles from "@styles/pages/gradients.module.scss";

import type { NextPage, GetStaticProps } from "next";
import type { GradientScheme } from "@types";
import type { MainColors, MiscTags } from "@enums";

import { useEffect, useState, useCallback, useReducer } from "react";
import { prisma } from "@lib";
import { usePath } from "@hooks";
import { MISC_TAGS, MAIN_COLORS } from "@constants";

import GradientCard from "@components/pages/gradients/GradientCard";
import TextUnderlined from "@components/elements/TextUnderlined";
import Tag from "@components/elements/Tag";

interface GradientsProps {
  gradients: GradientScheme[];
}

const Gradients: NextPage<GradientsProps> = ({ gradients }) => {
  const [gradientsDisplayed, setGradientsDisplay] =
    useState<GradientScheme[]>(gradients);

  const { setName } = usePath();

  // @@@ TODO: Reducer is probably bad here.
  const [filters, filtersDispatch] = useReducer(
    (
      state: {
        miscTags: MiscTags[];
        mainColors: MainColors[];
      },
      action: {
        type:
          | "SEARCH"
          | "ADD_MISC_TAG"
          | "REMOVE_MISC_TAG"
          | "ADD_COLOR_TAG"
          | "REMOVE_COLOR_TAG";
        payload: {
          miscTag?: MiscTags;
          mainColor?: MainColors;
          search?: string;
        };
      }
    ) => {
      const {
        type,
        payload: { miscTag, mainColor, search },
      } = action;

      switch (type) {
        case "SEARCH":
          return {
            ...state,
            ...(search ? [search] : []),
          };
        case "ADD_MISC_TAG":
          return {
            ...state,
            miscTags: [...state.miscTags, ...(miscTag ? [miscTag] : [])],
          };
        case "REMOVE_MISC_TAG":
          return {
            ...state,
            miscTags: state.miscTags.filter(tag => tag !== miscTag),
          };
        case "ADD_COLOR_TAG":
          return {
            ...state,
            mainColors: [
              ...state.mainColors,
              ...(mainColor ? [mainColor] : []),
            ],
          };
        case "REMOVE_COLOR_TAG":
          return {
            ...state,
            mainColors: state.mainColors.filter(tag => tag !== mainColor),
          };
      }
    },
    { miscTags: [], mainColors: [] }
  );

  useEffect(() => {
    setName("gradients");
  }, [setName]);

  useEffect(() => {
    let newGradients = [...gradients];

    filters.miscTags.forEach((tag: MiscTags) => {
      newGradients = newGradients.filter(gradient =>
        gradient.tags?.misc.includes(tag)
      );
    });

    filters.mainColors.forEach((color: MainColors) => {
      newGradients = newGradients.filter(gradient =>
        gradient.tags?.mainColors.includes(color)
      );
    });

    setGradientsDisplay(newGradients);
  }, [filters, gradients]);

  return (
    <div className={styles["gradients-page"]}>
      <header className={styles["header"]}>
        <h1 className={styles["header__heading-1"]}>{gradients.length}</h1>

        <h2 className={styles["header__heading-2"]}>
          <TextUnderlined thickness={16} offset={2}>
            Gradients
          </TextUnderlined>
        </h2>

        <p className={styles["header__paragraph"]}>
          <span>Carefully selected for&nbsp;</span>

          <span>Artists</span>

          <span>,&nbsp;</span>

          <span>Designes</span>

          <span>&nbsp;&&nbsp;</span>

          <span>Developers</span>

          <span>.</span>
        </p>
      </header>

      <div className={styles["form"]}>
        <hr />

        <input
          className={styles["form__input"]}
          type="search"
          placeholder="Search by name"
        />

        <div className={styles["form__tags"]}>
          {Object.values(MAIN_COLORS).map((mainColor, idx) => {
            const isActive: boolean = filters.mainColors.includes(mainColor);
            return (
              <Tag
                type="color"
                color={mainColor}
                key={idx}
                active={isActive}
                onClick={() =>
                  filtersDispatch({
                    type: isActive ? "REMOVE_COLOR_TAG" : "ADD_COLOR_TAG",
                    payload: { mainColor },
                  })
                }
              >
                {mainColor}
              </Tag>
            );
          })}
        </div>

        <div className={styles["form__tags"]}>
          {Object.values(MISC_TAGS).map((miscTag, idx) => {
            const isActive: boolean = filters.miscTags.includes(miscTag);

            return (
              <Tag
                type="hash"
                key={idx}
                active={isActive}
                onClick={() =>
                  filtersDispatch({
                    type: isActive ? "REMOVE_MISC_TAG" : "ADD_MISC_TAG",
                    payload: { miscTag },
                  })
                }
              >
                {miscTag}
              </Tag>
            );
          })}
        </div>
      </div>

      <div className={styles["gradients-list"]}>
        {gradientsDisplayed.map((gradient, index) => (
          <GradientCard key={index} gradient={gradient} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const gradients = await prisma.gradient.findMany();
    return {
      props: {
        gradients,
      },
    };
  } catch {
    return {
      props: {
        gradients: [],
      },
    };
  }
};

export default Gradients;
