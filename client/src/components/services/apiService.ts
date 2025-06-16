export const apiGet = async <T = any>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error('API GET request failed');
  return await response.json();
};
