import { useState, type JSX } from "react";
import style from "./Sandwich.module.css";

function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>("Sandwich configurator: ");
  function handleAddCheese(): void {
    setSandwich(`${sandwich} CHEESE🧀`);
  }
  function handleAddTomato(): void {
    setSandwich(`${sandwich} TOMATO🍅`);
  }
  function handleAddBread(): void {
    setSandwich(`${sandwich} BREAD🍞`);
  }
  function handleAddBacon(): void {
    setSandwich(`${sandwich} BACON🥓`);
  }
  function resetSandwich(): void {
    setSandwich("Sandwich configurator: ");
  }
  return (
    <div className={style.wrapper}>
      <h1>Sandwich</h1>
      <img src="https://images.vexels.com/media/users/3/308857/isolated/preview/fd9e95116117345ca8a07ef9348f8172-sandwich-with-fresh-vegetables-and-cheese.png"></img>
      <div className={style.sandwich}>{sandwich}</div>
      <div className={`${style.container} ${style.font}`}>
        <button className={style.button} type="button" onClick={handleAddBread}>
          Add Bread
        </button>
        <button
          className={style.button}
          type="button"
          onClick={handleAddCheese}
        >
          Add Cheese
        </button>
        <button
          className={style.button}
          type="button"
          onClick={handleAddTomato}
        >
          Add Tomato
        </button>
        <button className={style.button} type="button" onClick={handleAddBacon}>
          Add Bacon
        </button>
        <button className={style.button} type="button" onClick={resetSandwich}>
          Sandwich reset
        </button>
      </div>
    </div>
  );
}

export default Sandwich;

// создали переменную состояния counter
// и функцию setCounter для изменения состояния
// useState -  это хук
// в круглых скобках начальное состояние переменной состояния
// хук useState  принимает начальное значение переменной состояния
// возвращает массив в котором на первом месте переменная состояния
// а на втором месте функция  сетер
// Хук - это функция которая используется только внутри компонента
// В жизненном цикле компонента React есть 3 фазы:
// Сборка (mounting)
// Обновление (updating)
// Разборка (unmounting
