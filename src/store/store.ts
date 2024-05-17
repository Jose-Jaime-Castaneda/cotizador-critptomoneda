import { create } from "zustand";
import axios from "axios";
import { CryptoCurrenciesSchema } from "../schema/cripto-schema";
import { CryptoCurrency } from "../types";
import { devtools } from "zustand/middleware";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[];
  fetchCryptos: () => Promise<void>;
};

async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

  const {
    data: { Data },
  } = await axios(url);
  //console.log(Date);
  const result = CryptoCurrenciesSchema.safeParse(Data);
  if (result.success) {
    return result.data;
  }
}

export const useCryptoSrore = create<CryptoStore>()(
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
