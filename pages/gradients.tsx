import styles from "@styles/pages/gradients.module.scss";

import type { NextPage, GetServerSideProps } from "next";
import type { NextRouter } from "next/router";
import type { GradientScheme } from "@types";
import { MainColors, MiscTags } from "@enums";

import { useEffect, useState, useReducer } from "react";
import { withRouter } from "next/router";
import { prisma } from "@lib";
import { usePathName, useDebouncedCallback } from "@hooks";
import { getCleanString, isMiscTag, isMainColor } from "@utils";
import { MISC_TAGS, MAIN_COLORS } from "@constants";

import GradientCard from "@components/pages/gradients/GradientCard";
import TextUnderlined from "@components/elements/TextUnderlined";
import Tag from "@components/elements/Tag";

interface GradientsProps {
  gradients: GradientScheme[];
  router: NextRouter;
}

interface FilterState {
  searchQuery: string;
  miscTags: MiscTags[];
  mainColors: MainColors[];
}

// type FilterActions =
//   | { type: "SEARCH"; payload: { searchQuery: string } }
//   | { type: "ADD_MISC_TAG"; payload: { miscTag: MiscTags } }
//   | { type: "REMOVE_MISC_TAG"; payload: { miscTag: MiscTags } }
//   | { type: "ADD_COLOR_TAG"; payload: { mainColor: MainColors } }
//   | { type: "REMOVE_COLOR_TAG"; payload: { mainColor: MainColors } };

const Gradients: NextPage<GradientsProps> = ({ gradients, router }) => {
  const [gradientsDisplayed, setGradientsDisplay] =
    useState<GradientScheme[]>(gradients);

  const [filters, setGradientFilters] = useState<FilterState>({
    searchQuery: "",
    miscTags: [],
    mainColors: [],
  });

  const { setPathName } = usePathName();

  // const [filters, filtersDispatch] = useReducer(
  //   (state: FilterState, action: FilterActions) => {
  //     const { type, payload } = action;

  //     switch (type) {
  //       case "SEARCH":
  //         router.replace({
  //           query: {
  //             ...router.query,
  //             name: payload.searchQuery,
  //           },
  //         });
  //         return {
  //           ...state,
  //           searchQuery: payload.searchQuery,
  //         };
  //       case "ADD_COLOR_TAG":
  //         return {
  //           ...state,
  //           mainColors: [
  //             ...state.mainColors,
  //             ...(payload.mainColor ? [payload.mainColor] : []),
  //           ],
  //         };
  //       case "REMOVE_COLOR_TAG":
  //         return {
  //           ...state,
  //           mainColors: state.mainColors.filter(
  //             tag => tag !== payload.mainColor
  //           ),
  //         };
  //       case "ADD_MISC_TAG":
  //         return {
  //           ...state,
  //           miscTags: [
  //             ...state.miscTags,
  //             ...(payload.miscTag ? [payload.miscTag] : []),
  //           ],
  //         };
  //       case "REMOVE_MISC_TAG":
  //         return {
  //           ...state,
  //           miscTags: state.miscTags.filter(tag => tag !== payload.miscTag),
  //         };
  //     }
  //   },
  //   {
  //     searchQuery: "",
  //     miscTags: [],
  //     mainColors: [],
  //   }
  // );

  // @@@ TODO: Should run this before `filters` reducer declaration and
  // initialize reducer's default values with query values to prevent the
  // all-gradients-list-blink on page load.
  useEffect(() => {
    // if (typeof router.query.name === "string")
    //   filtersDispatch({
    //     type: "SEARCH",
    //     payload: {
    //       searchQuery: getCleanString(router.query.name),
    //     },
    //   });
    // if (typeof router.query.colors === "string")
    //   for (const color of router.query.colors.split(","))
    //     if (isMainColor(color))
    //       filtersDispatch({
    //         type: "ADD_COLOR_TAG",
    //         payload: {
    //           mainColor: color,
    //         },
    //       });
    // if (typeof router.query.tags === "string")
    //   for (const tag of router.query.tags.split(","))
    //     if (isMiscTag(tag))
    //       filtersDispatch({
    //         type: "ADD_MISC_TAG",
    //         payload: {
    //           miscTag: tag,
    //         },
    //       });

    let filteredGradients = [...gradients];

    const { name } = router.query;

    if (typeof name === "string") {
      setGradientFilters(prev => ({
        ...prev,
        searchQuery: name,
      }));
      filteredGradients = filteredGradients.filter(gradient =>
        getCleanString(gradient.title).match(name)
      );
    }

    // if (typeof router.query.colors === "string")
    //   for (const color of router.query.colors.split(","))
    //     if (isMainColor(color))
    //       filtersDispatch({
    //         type: "ADD_COLOR_TAG",
    //         payload: {
    //           mainColor: color,
    //         },
    //       });
    // if (typeof router.query.tags === "string")
    //   for (const tag of router.query.tags.split(","))
    //     if (isMiscTag(tag))
    //       filtersDispatch({
    //         type: "ADD_MISC_TAG",
    //         payload: {
    //           miscTag: tag,
    //         },
    //       });

    setGradientsDisplay(filteredGradients);
  }, [router, gradients]); // @@@ WARNING: This may be a bad approach, but router.query
  // changes on every `filtersDispatch` call, so putting whole `router` as
  // dependency prevents the infinite loop.

  useEffect(() => {
    setPathName("gradients");
  }, [setPathName]);

  // useEffect(() => {
  //   let filteredGradients = [...gradients];

  //   filteredGradients = filteredGradients.filter(gradient =>
  //     getCleanString(gradient.title).match(filters.searchQuery)
  //   );

  //   filters.mainColors.forEach((color: MainColors) => {
  //     filteredGradients = filteredGradients.filter(gradient =>
  //       gradient.tags?.mainColors.includes(color)
  //     );
  //   });

  //   filters.miscTags.forEach((tag: MiscTags) => {
  //     filteredGradients = filteredGradients.filter(gradient =>
  //       gradient.tags?.misc.includes(tag)
  //     );
  //   });

  //   setGradientsDisplay(filteredGradients);

  //   // router.push('/gradients', undefined, { shallow: true })
  // }, [
  //   filters.mainColors,
  //   filters.miscTags,
  //   filters.searchQuery,
  //   gradients,
  //   router,
  // ]);

  const handleSearch = useDebouncedCallback((searchQuery: string) => {
    // filtersDispatch({
    //   type: "SEARCH",
    //   payload: {
    //     searchQuery: getCleanString(searchQuery),
    //   },
    // });

    // setGradientFilters(prev => ({ ...prev, searchQuery }));

    router.replace(
      {
        pathname: "/gradients",
        query: {
          ...router.query,
          name: searchQuery,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
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
          value={filters.searchQuery}
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
                onClick={() => {
                  //   filtersDispatch({
                  //     type: isActive ? "REMOVE_COLOR_TAG" : "ADD_COLOR_TAG",
                  //     payload: { mainColor },
                  //   })
                }}
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
                onClick={() => {
                  // filtersDispatch({
                  //   type: isActive ? "REMOVE_MISC_TAG" : "ADD_MISC_TAG",
                  //   payload: { miscTag },
                  // })
                }}
              >
                {miscTag}
              </Tag>
            );
          })}
        </div>

        {/* @@@ TODO: onClick */}
        <button className={styles["form__button"]}>
          I&apos;m feeling lucky
        </button>
      </div>

      <div className={styles["gradients-list"]}>
        {gradientsDisplayed.map((gradient, index) => (
          <GradientCard key={index} gradient={gradient} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
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

export default withRouter(Gradients);
