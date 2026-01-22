"use client";

import ReactSelect from "react-select";
import { useForm } from "react-hook-form";
import Select from "@/lib/components/select";
import authors from "@/api/authors";
import { createOption } from "@/lib/components/select/lib";
import type { Author } from "@/api/types";
import type { Props, SchemaInput, SchemaOutput } from "./types";

async function loadAuthors() {
  return authors.getAll().then(res => res.data);
}

function authorToOption(author: Author) {
  return createOption(author.name, author.id.toString());
}

export default function BookForm({
  data,
  onValid,
  onInvalid,
}: Props) {
  const { register, handleSubmit } = useForm<SchemaInput, unknown, SchemaOutput>({
    defaultValues: data
  });

  return (
    <form className="flex flex-col gap-2 m-2" onSubmit={handleSubmit(onValid, onInvalid)}>
      <h1>Create a new book!</h1>
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...register("name")} className="border" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          {...register("description")}
          className="border"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="publicationDate">Publication</label>
        <input
          id="publicationDate"
          {...register("publicationDate")}
          type="date"
          className="border"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="authorId">Author</label>
        <Select
          inputId="authorId"
          name="authorId"
          // {...register("authorId")}
          loadOptions={() => loadAuthors().then(res => res.map(authorToOption))}
          className="text-black"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          {...register("rating")}
          type="number"
          className="border"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
