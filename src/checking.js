import React from 'react'
import { statesData } from './data';
const checking = () => {
    statesData.features.map((state) => {
        const axis1 = state.x;
        const axis2=state.y;
        const axis3=state.z;
        let var1,var2,var3,var4,var5,var6;
        const num=[0,0,0];
        while(num.size!==3){
            num.add(Math.floor(Math.random()*100)+1);
        }
        for(let i=0;i<num.size;i++){
             var1=axis1*num[0]+axis2*num[1]+axis3*num[2];
             var2=axis1*num[0]+axis2*num[2]+axis3*num[1];
             var3=axis2*num[0]+axis1*num[1]+axis3*num[2];
             var4=axis2*num[0]+axis2*num[2]+axis3*num[1];
             var5=axis3*num[0]+axis2*num[1]+axis1*num[2];
             var6=axis3*num[0]+axis2*num[2]+axis1*num[1];
        }
        if(var1===100 || var2===100 || var3===100 || var4===100 || var5===100 || var6===100){
            console.log(axis1,axis2,axis3);
        }else{
            console.log("NO!!")
        }
        return(
            
                axis1={axis1},
                axis2={axis2},
                axis3={axis3}
        )
      }
    )
  
}

export default checking