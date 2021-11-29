import Card from "./Card";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Card
        date="28/10/2020"
        cardType="Amazon Gift"
        paymentType="Pay"
        metaData="Desktop - Mobile"
        color="rgb(255,165,0)"
      />

<Card
        date="17 Sep 2020"
        cardType="Apple Gift"
        paymentType="Payment"
        metaData="MacOS - Mobile"
        color="rgb(245,245,245)"
      />
    </div>
  );
}
