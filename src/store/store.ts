import { create } from "zustand";
import axios from "axios";
import { CryptoCurrenciesSchema } from "../schema/cripto-schema";

async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

  const {
    data: { Data },
  } = await axios(url);
  const result = CryptoCurrenciesSchema.safeParse(Data);
  console.log(result);

  console.log(Data);
}

export const useCryptoSrore = create(() => ({
  fetchCryptos: () => {
    getCryptos();
  },
}));
