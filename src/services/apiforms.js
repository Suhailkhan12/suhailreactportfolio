import supabase from "./supabase";

export async function createFormData(newform) {
  let query = supabase.from("formdata");

  //Create
  query = query.insert([{ ...newform }]);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("form error");
  }

  return data;
}
