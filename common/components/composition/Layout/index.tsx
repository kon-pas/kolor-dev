import styles from "./Layout.module.scss";

import Header from "@components/composition/Header";
import Footer from "@components/composition/Footer";
import Loader from "@components/composition/Loader";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Loader />

      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
