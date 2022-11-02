export type typeAccount = { name: string; id: number };
export const accounts: typeAccount[] = [];

export function accountFactory(name: string): typeAccount {
  const nextId = accounts.length;
  return { name: name, id: nextId };
}
