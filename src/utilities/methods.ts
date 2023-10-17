import { generate } from './generator';
export const dpf = (
  k: number,
  i: number,
  simulations: number,
  years: number
) => {
  let x = 0;
  while (x < years) {
    let I = i * k;
    k = k + I;
    x++;
  }
  return k;
};

export const coinGame = (nl: number,gap: number,cjue: number,simulations: number) => {
  let results : number[] = [];
  for (let i = 0; i < simulations; i++) {
    let gta = 0;
    let cd = 0;
    while (cd < nl) {
      cd++;
      let am1 = generate( Math.round(10 + 89 * Math.random()),2048,Math.round(1000 + 8999 * Math.random()),1 )[0];
      let am2 = generate(Math.round(10 + 89 * Math.random()),2048,Math.round(1000 + 8999 * Math.random()),1)[0];
      let am3 = generate( Math.round(10 + 89 * Math.random()),2048,Math.round(1000 + 8999 * Math.random()), 1)[0];
      if ((am1 > 0.5 && am2 > 0.5 && am3 > 0.5) ||(am1 <= 0.5 && am2 <= 0.5 && am3 <= 0.5)) {
        gta += gap - cjue;
      } else {
        gta -= cjue;
      }
    }
    results = [...results, gta]
  }
  return results;
};
export const calculateMean = (results:number[]) => {
  let mean = 0;
  for(let i = 0; i < results.length; i++){
    mean += results[i];
  }
  return mean = mean / results.length;
}
export const minimizeFunction = (nmi:number) => {
  let x1 = 0,x2 = 0;
  let aux1, aux2;
  let auxz,z = 9999999;
  let seed;
  let a;
  for (let i = 0; i < nmi; i++) {
    seed = Math.round(Math.random() * 8999 + 1000);
    seed = seed % 2 == 0 ? seed + 1 : seed;
    a = Math.round(Math.random() * 20);
    let randArray = generate(a, 1024, seed, 2);
    aux1 = Math.round(randArray[0] * 1000);
    aux2 = Math.round(randArray[1] * 95 + 5);
    if (6 * aux1 + 3 * aux2 >= 200 && 3 * aux1 + 5 * aux2 >= 180) {
      auxz = 2.5 * aux1 + 2 * aux2;
      if (auxz < z) {
        z = auxz;
        x1 = aux1;
        x2 = aux2;
      }
    }
  }
  return { z: z, x1: x1, x2: x2 };
}
export const diceGame = (nmj:number, cj:number, pcj:number, simulations:number) => {
  let cjue = 0,
    gneta = 0,
    jgc = 0;
  let rd1, rd2, sdado;
  let results: any = [];
  for (let i = 0; i < simulations; i++) {
    (cjue = 0), (gneta = 0), (jgc = 0);
    while (cjue < nmj) {
      cjue++;
      gneta += cj;
      rd1 = Math.round(1 + 5 *generate( Math.round(10 + 89 * Math.random()),2048,Math.round(1000 + 8999 * Math.random()),1)[0]);
      rd2 = Math.round( 1 +5 *generate( Math.round(10 + 89 * Math.random()),2048,Math.round(1000 + 8999 * Math.random()),1)[0]);
      sdado = rd1 + rd2;
      if (sdado === 7) gneta -= pcj;
      else jgc++;
    }
    let pgjc = (jgc / nmj) * 100;
    gneta = gneta + cj * jgc;
    results = [...results, { gneta, pgjc, jgc }];
  }
  return results;
}

export const obtainMeanOfObjects = (numberArray:any[]) => {
  const propertyNames = numberArray[0].getOwnPropertyNames();
  const means:any = {};
  for(let i = 0; i < numberArray.length ; i++){
    for(let j = 0; j < propertyNames.length; j++){
      means[propertyNames[j]] += numberArray[i][propertyNames[j]];
    }
  }
  return means;
}

