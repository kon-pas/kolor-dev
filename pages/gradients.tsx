import styles from "@styles/pages/gradients.module.scss";

import type { NextPage, GetServerSideProps } from "next";
import type { NextRouter } from "next/router";
import type { GradientScheme } from "@types";
import type { MainColor, MiscTag } from "@enums";

import { useEffect, useState, useCallback } from "react";
import { withRouter } from "next/router";
import { prisma } from "@lib";
import { usePathName } from "@hooks";
import { getCleanString, isMiscTag, isMainColor } from "@utils";
import { MISC_TAGS, MAIN_COLORS } from "@constants";

import GradientCard from "@components/pages/gradients/GradientCard";
import TextUnderlined from "@components/elements/TextUnderlined";
import Tag from "@components/elements/Tag";

interface GradientsProps {
  gradients: GradientScheme[];
  router: NextRouter;
}

const Gradients: NextPage<GradientsProps> = ({ gradients, router }) => {
  const [gradientsDisplayed, setGradientsDisplay] =
    useState<GradientScheme[]>(gradients);

  const [filters, setFilters] = useState<{
    name: string;
    misc: MiscTag[];
    colors: MainColor[];
  }>({
    name: "",
    misc: [],
    colors: [],
  });

  const { setPathName } = usePathName();

  useEffect(() => {
    setPathName("gradients");
  }, [setPathName]);

  useEffect(() => {
    const { name, colors, misc } = router.query;

    if (typeof name === "string")
      setFilters(prev => ({ ...prev, name }));

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

    setGradientsDisplay(filteredGradients);
  }, [gradients, filters.colors, filters.misc, filters.name]);

  const handleNameToggle = useCallback((name: string) => {
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
          value={filters.name}
          onChange={event => handleNameToggle(event.target.value)}
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
