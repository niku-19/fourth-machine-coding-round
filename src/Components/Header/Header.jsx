import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h2 className={styles.brand__name}>MyForum</h2>
      </div>
    </header>
  );
};

export default Header;
