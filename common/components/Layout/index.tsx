import styles from "./Layout.module.scss";

import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
        <main className={styles.main}>
          {children}
        </main>
      <Footer />
    </>
  )
}

export default Layout;