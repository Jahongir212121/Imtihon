export interface UserType {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
  __v: number;
}
export interface CartType {
  id: number;
  userId: number;
  date: string;
  products: [
    {
      productId: number;
      quantity: number;
    },
    {
      productId: number;
      quantity: number;
    },
    {
      productId: number;
      quantity: number;
    }
  ];
  __v: number;
}
export interface ProductItem {
  productId: number;
  quantity: number;
}
