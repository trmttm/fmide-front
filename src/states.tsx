export type Account = { name: string; id: number };
export const accounts: Account[] = [];

export function accountFactory(name: string): Account {
  const nextId = accounts.length;
  return { name: name, id: nextId };
}
