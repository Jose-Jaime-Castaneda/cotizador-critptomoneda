import { create } from "zustand";
import { CryptoCurrency, CryptoPrice, Pair } from "../types";
import { devtools } from "zustand/middleware";
import { fetchCurrentCryptoPrice, getCryptos } from "../sevices/CryptoService";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[];
  cryptoPrice: CryptoPrice;
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: Pair) => Promise<void>;
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    cryptoPrice: {} as CryptoPrice,
    loading: false,

    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos();
      set(() => ({
        cryptoCurrencies,
      }));
    },

    fetchData: async (pair) => {
      set(() => ({
        loading: true,
      }));
      const result = await fetchCurrentCryptoPrice(pair);
      set(() => ({
        cryptoPrice: result,
        loading: false,
      }));
    },
  }))
);
