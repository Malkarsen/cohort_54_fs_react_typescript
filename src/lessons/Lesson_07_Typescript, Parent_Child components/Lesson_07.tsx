import "./styles.css";
import { WEATHER_CODES } from "./types";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Counter from "components/Counter/Counter";

import { useState } from "react";

// !! Есть 2 основных способа вызова перерендера(обновления) компонента:
// 1 - изменения state(посредством вызова функции setState())
// 2 - изменение props

function Lesson_07() {
  // 12. enum
  // Создайте функцию, которая бы принимала бы следующие параметры:
  //   код погоды и функция decode, которая дает расшифровку погоды по коду.
  //   Функция должна возвращать строку, описывающую погоду. Таблица соответствия
  //   код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка
  //   (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым
  //   (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS -
  //   песчаная буря (видимость менее 10 км) Подсказка: удобно использовать в
  //   одном из методов switch-case:

  const decode = (weatherCode: string): string => {
    switch (weatherCode) {
      case WEATHER_CODES.SQ: {
        return "шквал";
      }
      case WEATHER_CODES.PO: {
        return "пыльный вихрь";
      }
      case WEATHER_CODES.FC: {
        return "торнадо";
      }
      case WEATHER_CODES.BR: {
        return "дымка (видимость от 1 до 9 км)";
      }
      case WEATHER_CODES.HZ: {
        return "мгла (видимость менее 10 км)";
      }
      case WEATHER_CODES.FU: {
        return "дым (видимость менее 10 км)";
      }
      case WEATHER_CODES.DS: {
        return "пыльная буря (видимость менее 10 км)";
      }
      case WEATHER_CODES.SS: {
        return "песчаная буря (видимость менее 10 км) ";
      }
      default:
        return "This code doesnt exist";
    }
  };
  const weather = decode("DS");
  console.log(weather);

  // 13. Generic
  type ArrayGenerator<valueType> = valueType[];

  const someStringsArray: ArrayGenerator<string> = ["a", "b", "c"];
  const someNumbersArray: ArrayGenerator<number> = [1, 2, 3, 4, 5];
  const someBooleansArray: ArrayGenerator<boolean> = [true, false, true];
  console.log(someStringsArray);
  console.log(someNumbersArray);
  console.log(someBooleansArray);

  // Generics with objects
  interface ShopItems<ValueType> {
    type: string;
    value: ValueType;
  }

  interface AppleType {
    model: string;
    articul: number;
  }

  const item1: ShopItems<number> = {
    type: "TV",
    value: 1234567890,
  };

  const item2: ShopItems<string> = {
    type: "PC",
    value: "Xiaomi Model 123",
  };

  const item3: ShopItems<AppleType> = {
    type: "PC",
    value: {
      model: "Apple Pro Book",
      articul: 12345678,
    },
  };
  console.log(item1);
  console.log(item2);
  console.log(item3);

  const [count, setCount] = useState<number>(0);

  const onPlus = () => {
    console.log("+");
    // Тут пишем логику по увеличению значения счетчика на 1
    setCount((prevValue: number) => {
      console.log(prevValue);
      return prevValue + 1;
    });
  };
  const onMinus = () => {
    console.log("-");
    // Тут пишем логику по уменьшению значения счетчика на 1
    setCount((prevValue: number) => {
      console.log(prevValue);
      return prevValue - 1;
    });
  };

  const sendDataToServer = () => {
    console.log(`Sending ${count} to server`);
  }

  return (
    <div className="lesson_07_page_wrapper">
      <Button buttonName="Send" onClick={sendDataToServer}/>
      <Input
        id="test-id"
        name="test"
        label="Test label"
        placeholder="Test placeholder"
      />
      <Counter onPlus={onPlus} onMinus={onMinus} count={count}/>
    </div>
  );
}
export default Lesson_07;
