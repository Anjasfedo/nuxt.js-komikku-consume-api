import { PAGESIZE } from "../helpers/serverHelpers";

export default defineEventHandler(async (event) => {
  const { page } = getQuery(event);

  const recomends = await $fetch(
    `https://komiku-api.fly.dev/api/comic/recommended/page/${page || 1}`
  );

  const pageSize = PAGESIZE;

  const totalPages = 20;

  const result = recomends.data

  return { result, totalPages };
});
