import { CryptoCurrencySchema, CurrencySchema } from "../schema/cripto-schema";
import { z } from "zod";

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema>;
