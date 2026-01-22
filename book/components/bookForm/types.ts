import z from "zod";
import type { SubmitHandler, SubmitErrorHandler } from "react-hook-form";

import Schema from "./schema";

export type SchemaInput = z.input<typeof Schema>;

export type SchemaOutput = z.output<typeof Schema>;

export interface Props {
  data?: SchemaInput;
  onValid?: SubmitHandler<SchemaOutput>;
  onInvalid?: SubmitErrorHandler<SchemaOutput>;
}
