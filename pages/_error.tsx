import styles from "@styles/pages/error.module.scss";

import type { NextPage, GetServerSideProps } from "next";

import { useRouter } from "next/router";
import { BRAND_COLORS } from "@constants";
import TextGradiented from "@components/elements/TextGradiented";
import IconSVG from "@components/elements/IconSVG";

interface ErrorPageProps {
  statusCode: number;
}

const ErrorPage: NextPage<ErrorPageProps> = props => {
  const { push } = useRouter();
  return (
    <div className={styles["error-page"]}>
      <div className={styles["info"]}>
        <span className={styles["info__code"]}>
          <TextGradiented
            colors={[BRAND_COLORS.C, BRAND_COLORS.M, BRAND_COLORS.Y]}
            direction="to top left"
          >
            {props.statusCode.toString()}
          </TextGradiented>
        </span>

        <span className={styles["info__annotation"]}>
          Something went wrong!
        </span>

        <button
          className={styles["info__button"]}
          onClick={() => push("/")}
        >
          <div className={styles["info__button-icon"]}>
            <IconSVG>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </IconSVG>
          </div>
          Home
        </button>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  return {
    props: {
      statusCode: res.statusCode,
    },
  };
};

export default ErrorPage;
