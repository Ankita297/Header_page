import classes from "./style.module.css";

const Toast = () => {
  return (
    <div className={classes.banner}>
      <p>Leverage Edu Scholarship Worth ₹ 7,00,00,000</p>
      <button className={classes.applyBtn}>Apply Now</button>
    </div>
  );
};


export default Toast;
