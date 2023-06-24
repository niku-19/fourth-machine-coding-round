import { usePostData } from "../../Context/PostContex";
import styles from "./RightSidebar.module.css";

const RightSidebar = () => {
  const { dispatch } = usePostData();

  const handleSort = (e) => {
    console.log(e.target.value);
    dispatch({ type: `SORT__BY__${e.target.value}`, payload: e.target.value });
  };

  return (
    <div className="container">
      <label className={styles.label} htmlFor="for__sort">
        Sort By
      </label>
      <select
        name="sort"
        id="sort"
        className={styles.select}
        onChange={(e) => handleSort(e)}
      >
        <option value="" disabled>
          Sort By
        </option>
        <option value="Latest">Latest</option>
        <option value="Top__Votes">Top Votes</option>
      </select>
    </div>
  );
};

export default RightSidebar;
