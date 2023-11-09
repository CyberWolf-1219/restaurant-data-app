export async function fetchHelper(url: string, config: RequestInit) {
  console.log(config);
  const response = await fetch(url, config);
  return await response.json();
}
