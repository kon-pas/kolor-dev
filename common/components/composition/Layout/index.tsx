import styles from "./Layout.module.scss";

import type { FC, ReactNode } from "react";
import { ToastContainer, Flip } from "react-toastify";

import Header from "@components/composition/Header";
import Footer from "@components/composition/Footer";
import Loader from "@components/composition/Loader";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Loader />

      <Header />

      <main className={styles.main}>{children}</main>

      <Footer />

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

export default Layout;
