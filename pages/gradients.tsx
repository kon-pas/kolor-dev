import styles from "@styles/pages/gradients.module.scss";

import type { NextPage, GetServerSideProps } from "next";
import type { NextRouter } from "next/router";
import type { GradientScheme } from "@types";
import type { MainColor, MiscTag } from "@enums";

import { useEffect, useState, useCallback } from "react";
import { withRouter } from "next/router";
import { clsx } from "clsx";
import { getGradients } from "@api";
import { usePathName } from "@hooks";
import { getCleanString, isMiscTag, isMainColor } from "@utils";
import { MISC_TAGS, MAIN_COLORS } from "@constants";
import { local } from "@services";

import GradientCard from "@components/pages/gradients/GradientCard";
import TextUnderlined from "@components/elements/TextUnderlined";
import Tag from "@components/elements/Tag";

interface GradientsProps {
  gradients: GradientScheme[];
  router: NextRouter;
}

interface Filters {
  name: string;
  misc: MiscTag[];
  colors: MainColor[];
  liked: boolean;
}

// @@@ NOTE: SWC does not support TypeScript 4.9 yet.
const initialFilters: Filters = {
  name: "",
  misc: [],
  colors: [],
  liked: false,
};

const Gradients: NextPage<GradientsProps> = ({ gradients, router }) => {
  const [gradientsDisplayed, setGradientsDisplay] =
    useState<GradientScheme[]>(gradients);

  const [filters, setFilters] = useState<Filters>({ ...initialFilters });

  const { setPathName } = usePathName();

  useEffect(() => {
    setPathName("gradients");
  }, [setPathName]);

  useEffect(() => {
    const { name, colors, misc } = router.query;

    if (typeof name === "string") setFilters(prev => ({ ...prev, name }));

    if (typeof colors === "string")
      colors.split(",").forEach(color => {
        if (isMainColor(color))
          setFilters(prev => ({
            ...prev,
            colors: [...prev.colors, color],
          }));
      });

    if (typeof misc === "string")
      misc.split(",").forEach(tag => {
        if (isMiscTag(tag))
          setFilters(prev => ({
            ...prev,
            misc: [...prev.misc, tag],
          }));
      });
  }, [router.query]);

  useEffect(() => {
    let filteredGradients = [...gradients];

    filteredGradients = filteredGradients.filter(gradient =>
      getCleanString(gradient.title).match(getCleanString(filters.name))
    );

    filters.colors.forEach((color: MainColor) => {
      filteredGradients = filteredGradients.filter(gradient =>
        gradient.tags?.colors.includes(color)
      );
    });

    filters.misc.forEach((tag: MiscTag) => {
      filteredGradients = filteredGradients.filter(gradient =>
        gradient.tags?.misc.includes(tag)
      );
    });

    if (filters.liked)
      filteredGradients = filteredGradients.filter(gradient =>
        local.gradients.includes(gradient.id)
      );

    setGradientsDisplay(filteredGradients);
  }, [gradients, filters.colors, filters.misc, filters.name, filters.liked]);

  // @@@ TODO: All those `useCallback`s may be an overkill since neither
  // callbacks passed are computationally intensive nor children components are
  // heavy

  const handleNameSearch = useCallback((name: string) => {
    setFilters(prev => ({
      ...prev,
      name,
    }));
  }, []);

  const handleColorToggle = useCallback(
    (color: MainColor, isIncluded: boolean) => {
      setFilters(prev => ({
        ...prev,
        colors: isIncluded
          ? prev.colors.filter(e => e !== color)
          : [...prev.colors, color],
      }));
    },
    []
  );

  const handleTagToggle = useCallback((tag: MiscTag, isIncluded: boolean) => {
    setFilters(prev => ({
      ...prev,
      misc: isIncluded ? prev.misc.filter(e => e !== tag) : [...prev.misc, tag],
    }));
  }, []);

  const handleLikeButton = useCallback(() => {
    setFilters(prev => ({ ...prev, liked: !prev.liked }));
  }, []);

  const handleLuckyButton = useCallback(() => {
    router.push(
      `/gradient/${gradients[Math.floor(Math.random() * gradients.length)].id}`
    );
  }, [router, gradients]);

  const handleResetButton = useCallback(() => {
    setFilters({ ...initialFilters });
  }, []);

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
          className={clsx(styles["form__input"], styles["form__container"])}
          type="search"
          placeholder="Search by name"
          value={filters.name}
          onChange={event => handleNameSearch(event.target.value)}
        />

        <div className={styles["form__tags"]}>
          {Object.values(MAIN_COLORS).map((color, idx) => {
            const isActive: boolean = filters.colors.includes(color);
            return (
              <Tag
                type="color"
                color={color}
                key={idx}
                active={isActive}
                onClick={() => handleColorToggle(color, isActive)}
              >
                {color}
              </Tag>
            );
          })}
        </div>

        <div className={styles["form__tags"]}>
          {Object.values(MISC_TAGS).map((tag, idx) => {
            const isActive: boolean = filters.misc.includes(tag);

            return (
              <Tag
                type="hash"
                key={idx}
                active={isActive}
                onClick={() => handleTagToggle(tag, isActive)}
              >
                {tag}
              </Tag>
            );
          })}
        </div>

        {/* @@@ TODO: event handlers */}
        <div
          className={clsx(styles["form__buttons"], styles["form__container"])}
        >
          <button
            className={clsx(
              styles["form__button"],
              filters.liked && styles["form__button--active"]
            )}
            onClick={handleLikeButton}
          >
            Show Liked
          </button>

          <button
            className={styles["form__button"]}
            onClick={handleLuckyButton}
          >
            Lucky Roll
          </button>

          <button
            className={styles["form__button"]}
            onClick={handleResetButton}
          >
            Reset Filters
          </button>
        </div>
      </div>

      {gradientsDisplayed.length !== 0 ? (
        <div className={styles["gradients-list"]}>
          {gradientsDisplayed.map((gradient, index) => (
            <GradientCard key={index} gradient={gradient} />
          ))}
        </div>
      ) : (
        <div className={styles["gradients-info"]}>
          Not a single gradient matches that :/
        </div>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const gradients = await getGradients();

  return {
    props: {
      gradients,
    },
  };
};

export default withRouter(Gradients);
