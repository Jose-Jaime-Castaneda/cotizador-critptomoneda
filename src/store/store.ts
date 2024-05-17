import { create } from "zustand";
import { CryptoCurrency } from "../types";
import { devtools } from "zustand/middleware";
import { getCryptos } from "../sevices/CryptoService";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[];
  fetchCryptos: () => Promise<void>;
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
  }))
);
