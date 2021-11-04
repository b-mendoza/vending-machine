export async function fetcher<Result>(url: string) {
  const response = await fetch(url);

  return await (response.json() as Promise<Result>);
}
