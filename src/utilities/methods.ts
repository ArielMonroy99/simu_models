import { generate } from "./generator";
export const dpf = (k:number ,i:number, simulations:number, years: number) => {
   let x = 0;
   while(x < years){
        let I = i*k;
        k = k + I;
        x++;
   }
   return k;
}

export const coinGame = (nl:number,gap:number,cjue:number) =>  {
   let cd = 0; 
   let gta = 0; 
   while(cd < nl){
      cd++; 
      let am1 = generate(Math.round(10+89*Math.random()),2048 ,Math.round(1000+8999*Math.random()) , 1)[0];
      let am2 = generate(Math.round(10+89*Math.random()),2048 ,Math.round(1000+8999*Math.random()) , 1)[0];
      let am3 = generate(Math.round(10+89*Math.random()),2048 ,Math.round(1000+8999*Math.random()) , 1)[0];   
      if((am1 > 0.5 && am2 > 0.5 && am3 > 0.5) || (am1 <= 0.5 && am2 <= 0.5  && am3 <= 0.5) ){
         gta += gap - cjue;
      }
      else{
         gta -= cjue;
      }
   }
   return gta; 
   
}