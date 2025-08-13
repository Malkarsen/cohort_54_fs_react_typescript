import "./styles.css";
import { v4 } from "uuid";

function Homework_06() {
  interface Car {
    brand: string;
    price: number;
    isDiesel: boolean;
  }

  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carList = cars.map((car: Car) => {
    return (
      <div key={v4()} className="car_card">
        <p className="car_info" id="car_brand">
          {car.brand}
        </p>
        <p className="car_info">Price: {car.price}</p>
        <p className="car_info">Diesel: {car.isDiesel ? "Yes" : "No"}</p>
      </div>
    );
  });

  return (
    <div className="homework_06_page_wrapper">
      <div className="cards_container">{carList}</div>
    </div>
  );
}

export default Homework_06;
