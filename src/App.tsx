import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Store from "./Store";
import { Address, Restaurant } from "./model/Restaurant";
import BestMenu from "./BestMenu";

let data: Restaurant = {
  name: "은진이 식당",
  category: "western",
  address: {
    city: "seoul",
    detail: "somewhere",
    zipCode: 12345,
  },
  menu: [
    { name: "rose pasta", price: 2000, category: "PASTA" },
    { name: "garlic steak", price: 3000, category: "STEAK" },
    { name: "onion soup", price: 1000, category: "SOUP" },
  ],
};

const App: React.FC = () => {
  // useState에서 타입 정해줄려면 <> 여기에다가 타입을 넣는다 제네릭문법
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);

  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };

  const showBestMenuName = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      {/* data의 타입을 정해주지 않으면 에러 */}
      <Store info={myRestaurant} changeAddress={changeAddress} />
      <BestMenu
        name="불고기피자"
        category="피자"
        // price 타입을 빼고싶으면? Omit 사용
        // price={1000}
        showBestMenuName={showBestMenuName}
      />
    </div>
  );
};

export default App;
