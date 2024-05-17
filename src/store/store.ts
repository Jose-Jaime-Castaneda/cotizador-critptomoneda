import { create } from "zustand";
import { CryptoCurrency, Pair } from "../types";
import { devtools } from "zustand/middleware";
import { getCryptos } from "../sevices/CryptoService";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[];
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],

    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({
        cryptoCurrencies,
      }));
    },

    fetchData: async (pair) => {
      console.log(pair);
    },
  }))
);
