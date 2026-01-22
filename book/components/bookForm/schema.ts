import z from "zod";

const Schema = z.object({
  name: z.string(),
  description: z.string().optional(),
  publicationDate: z.string(),
  authorId: z.string(),
  rating: z.number().min(0).max(5),
});

export default Schema;
