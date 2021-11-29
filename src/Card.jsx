import styles from "./Card.module.css";
import Date from "./Date.jsx";
import Heading from "./Heading.jsx";
import Pay from "./Pay.jsx";
import Meta from "./Meta.jsx";

export default function Card({ date, cardType, paymentType, metaData, color }) {
  return (
    <div className={styles.card} style={{ background: color }}>
      <Date date={date} />
      <button className="button"> Case Study </button>
      <Heading heading={cardType} />
      <Pay subHead={paymentType} />
      <Meta details={metaData} />
    </div>
  );
}
