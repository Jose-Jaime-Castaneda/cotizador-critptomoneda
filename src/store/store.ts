import { create } from "zustand";

export const useCryptoSrore = create(() => ({
  fetchCryptos: () => {
    console.log("Hola..");
  },
}));
