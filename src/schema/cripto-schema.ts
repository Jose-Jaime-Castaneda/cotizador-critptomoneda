import { z } from "zod";

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoCurrencySchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  }),
});

export const CryptoCurrenciesSchema = z.array(CryptoCurrencySchema);

export const PairSchema = z.object({
  currency: z.string(),
  criptoCurrency: z.string(),
});
