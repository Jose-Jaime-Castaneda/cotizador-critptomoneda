import {
  CryptoCurrenciesSchema,
  CryptoPriceSchema,
} from "../schema/cripto-schema";
import axios from "axios";
import { Pair } from "../types";

export async function getCryptos() {
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
export async function fetchCurrentCryptoPrice(pair: Pair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptoCurrency}&tsyms=${pair.currency}`;

  const {
    data: { DISPLAY },
  } = await axios(url);
  //console.log(DISPLAY);
  const result = CryptoPriceSchema.safeParse(
    DISPLAY[pair.criptoCurrency][pair.currency]
  );
  //console.log(result);
  if (result.success) {
    return result.data;
  }
}
