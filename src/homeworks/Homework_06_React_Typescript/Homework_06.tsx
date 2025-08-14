import "./styles.css";
import {type Car} from "./types";
import { v4 } from "uuid";
import { type ReactNode } from "react";

function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carList: ReactNode = cars.map((car: Car) => {
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
