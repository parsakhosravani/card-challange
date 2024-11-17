import banks from "../banks.json";

export type TBanks = {
  id: number;
  pan: string[];
  name: {
    en: string;
    fa: string;
  };
};

export function getBanks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(banks as TBanks[]);
    }, 2000);
  });
}

export default getBanks;
