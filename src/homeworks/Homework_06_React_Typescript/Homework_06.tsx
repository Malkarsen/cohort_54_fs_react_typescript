import { type Car } from "./types";
import { v4 } from "uuid";
import { type ReactNode } from "react";
import {
  Homework06PageWrapper,
  CardsContainer,
  CarCard,
  CarInfo,
  CarBrand,
} from "./styles";

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
      <CarCard key={v4()}>
        <CarBrand>{car.brand}</CarBrand>
        <CarInfo>Price: {car.price}</CarInfo>
        <CarInfo>Diesel: {car.isDiesel ? "Yes" : "No"}</CarInfo>
      </CarCard>
    );
  });

  return (
    <Homework06PageWrapper>
      <CardsContainer>{carList}</CardsContainer>
    </Homework06PageWrapper>
  );
}

export default Homework_06;
