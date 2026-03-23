// types.ts
export type RootStackParamList = {
  Quantity: undefined;
  Flavor: { quantity: number };

  Checkout: { quantity: number; flavor: string; date: string };
};
