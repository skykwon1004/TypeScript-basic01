// let data = {
//     name: "은진이 식당",
//     category: "western",
//     address: {
//       city: "seoul",
//       detail: "somewhere",
//       zipCode: 12345,
//     },
//     menu: [
//       { name: "rose pasta", price: 2000, category: "PASTA" },
//       { name: "garlic steak", price: 3000, category: "STEAK" },
//       { name: "onion soup", price: 1000, category: "SOUP" },
//     ],
//   };

export type Restaurant = {
    name: string;
    category: string;
    address: Address;
    menu: Menu[]
}

export type Address = {
    city: string;
    detail: string;
    zipCode: Number;
}

// export type Address = {
//     city: string;
//     detail: string;
//     // zipCode?: 쓰는 이유 Omit과 같은 ? 있을 수도 있고 없을 수도 있고
//     zipCode?: Number;
// }

export type Menu = {
    name: string;
    price: number;
    category: string;
}


// Restaurant에서 category만 가져오고 싶을 때는 Pick 씀
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>

// Address에서 zipCode만 빼고 싶을때는?
// Omit<Address, 'zipCode'> 이렇게 하면 zipCode 빼고 2개만 나옴
export type AddressWithoutZip = Omit<Address, 'zipCode'>

// export type ApiResponse<T>{
//     data: T[],
//     totalPage: number,
//     page: number
// }

// export type RestaurantResponse = ApiResponse<Restaurant>
// export type MenuResponse = ApiResponse<Menu>
