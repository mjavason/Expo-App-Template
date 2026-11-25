export function removeUnderscores(str: string): string {
  if (!str) {
    return "";
  }
  //   eslint-disable-next-line
  // @ts-ignore
  const res2 = str.replaceAll("_", " ");
  const res = res2[0].toUpperCase() + res2.slice(1);
  return res;
}