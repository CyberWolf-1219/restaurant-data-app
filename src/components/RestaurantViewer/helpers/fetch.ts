export async function fetchHelper(
  url: string,
  config: RequestInit
): Promise<{ status: 'OK'; payload: any } | { status: 'ERROR'; payload: any }> {
  const response = await fetch(url, config);
  const payload = await response.json();
  if (response.ok) {
    return { status: 'OK', payload: payload.message };
  } else {
    return { status: 'ERROR', payload: payload.message };
  }
}
