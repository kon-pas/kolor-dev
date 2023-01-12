import styles from "@styles/pages/gradients.module.scss";

import type { NextPage, GetStaticProps } from "next";
import type { GradientScheme } from "@types";
import type { MainColors, MiscTags } from "@enums";

import { useEffect, useState, useReducer } from "react";
import { prisma } from "@lib";
import { usePathName, useDebouncedCallback } from "@hooks";
import { getCleanString } from "@utils";
import { MISC_TAGS, MAIN_COLORS } from "@constants";

import IconSVG from "@components/elements/IconSVG";
import GradientCard from "@components/pages/gradients/GradientCard";
import TextUnderlined from "@components/elements/TextUnderlined";
import Tag from "@components/elements/Tag";

interface GradientsProps {
  gradients: GradientScheme[];
}

const Gradients: NextPage<GradientsProps> = ({ gradients }) => {
  const [gradientsDisplayed, setGradientsDisplay] =
    useState<GradientScheme[]>(gradients);

  const [rawSearchQuery, setRawSearchQuery] = useState<string>("");

  const { setPathName } = usePathName();

  const [filters, filtersDispatch] = useReducer(
    (
      state: {
        searchQuery: string;
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
          searchQuery?: string;
        };
      }
    ) => {
      const {
        type,
        payload: { miscTag, mainColor, searchQuery },
      } = action;

      switch (type) {
        case "SEARCH":
          return {
            ...state,
            searchQuery: searchQuery ?? "",
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
      }
    },
    { miscTags: [], mainColors: [], searchQuery: "" }
  );

  useEffect(() => {
    setPathName("gradients");
  }, [setPathName]);

  useEffect(() => {
    let filteredGradients = [...gradients];

    filteredGradients = filteredGradients.filter(gradient =>
      getCleanString(gradient.title).match(filters.searchQuery)
    );

    filters.mainColors.forEach((color: MainColors) => {
      filteredGradients = filteredGradients.filter(gradient =>
        gradient.tags?.mainColors.includes(color)
      );
    });

    filters.miscTags.forEach((tag: MiscTags) => {
      filteredGradients = filteredGradients.filter(gradient =>
        gradient.tags?.misc.includes(tag)
      );
    });

    setGradientsDisplay(filteredGradients);
  }, [filters, gradients]);

  const handleSearch = useDebouncedCallback((searchQuery: string) => {
    filtersDispatch({
      type: "SEARCH",
      payload: {
        searchQuery: getCleanString(searchQuery),
      },
    });
  }, 250);

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
          onChange={event => handleSearch(event.target.value)}
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
