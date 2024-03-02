import React from "react";
import { Address, Restaurant } from "./model/Restaurant";

interface OwnProps {
  info: Restaurant;
  // 함수 interface 리턴타입이 없으면 void
  changeAddress(address: Address): void;
}

const Store: React.FC<OwnProps> = ({ info }) => {
  return <div>{info.name}</div>;
};

export default Store;
