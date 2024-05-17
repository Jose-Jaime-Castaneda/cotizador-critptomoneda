import { CurrencySchema } from "../schema/cripto-schema";
import { z } from "zod";

export type Currency = z.infer<typeof CurrencySchema>;
