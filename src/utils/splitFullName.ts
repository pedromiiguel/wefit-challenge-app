export function splitFullName(fullName: string): [string, string] {
  const [creator, name] = fullName.split('/');
  return [creator, name];
}
