import styles from "@styles/pages/error.module.scss";

import type { GetServerSideProps } from "next";

function ErrorPage() {
  return (
    <div className={styles["error-page"]}>
      <div className={styles["info"]}>
        <span className={styles["info__code"]}>404</span>
      </div>
    </div>
  );
}

// Error.getInitialProps = ({ res, err }) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//   return { statusCode };
// };

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {},
  };
};

export default ErrorPage;
