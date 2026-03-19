

// ///
// function recursive(a){
// if(a>0){
//         console.log(a); 
//         a--;
//         recursive(a);
//     }
//     else{
//         console.log(0);
//     }

//     return
// }

// recursive(10);


/////

import readline from "readline";

const rl=readline.Interface({
    input:process.stdin,
    output:process.stdout,

})





////draw header
function drawhead(total){
let c='';
let r='';
    for(let i=1;i<=total;i++){
    c=c+'|';
   r=(i<Math.ceil(total/2))?r+' ':r;
}
    console.log(c);

    console.log(r+'r');


}


////draw mapPoint
function mapPoint(point,all){
    let draw='';
    for(let i=1;i<=all;i++){
        (i!=point)?draw=draw+'.':draw=draw+'p';
    }
    console.log(draw);
}


/////function to show b tree search
let P;
let Pmax;
function bTree(Q,total,Pmax=total,P=Math.ceil(total/2)){
    let PP=P;    ///previouse point
    mapPoint(P,total);
    if(Q===P){
             
             return;
    }
    else if(Q>P){
        P=Math.ceil(PP+(Pmax-PP)/2);
        
        bTree(Q,total,Pmax,P);


    }else if(Q<P){
        P=Math.floor(PP-(Pmax-P)/2);        
        Pmax=PP;

        bTree(Q,total,Pmax,P);
        
    }
return;
}
////// we include 0 
rl.question("Enter size of data:",function(tempInput){
        const sizeData=parseInt(tempInput);
        rl.question("find BinartTreeNumber:",function(secInput){
            const QNum=parseInt(secInput);
            
        drawhead(sizeData);
        bTree(QNum,sizeData);
        rl.close();
        });
        
    }
     
);
