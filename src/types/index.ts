import {
  CryptoCurrencySchema,
  CryptoPriceSchema,
  CurrencySchema,
  PairSchema,
} from "../schema/cripto-schema";
import { z } from "zod";

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema>;
export type Pair = z.infer<typeof PairSchema>;
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>;
