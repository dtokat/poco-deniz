const hammingCounter = (G1, G2) =>{
    let counter = 0;
    if(G1.length == G2.length){
        for (let i =0; i < G1.length; i++){
            if (G1[i] != G2[i] ){
                counter++;
            }
        }
        return counter
    }
    else{
        console.log("not the same length")
    }
} 
let G4 = "GAGCCTACTAACGGGATT";
let G3 = "CATCGTAATGACGGCCTF";
console.log(hammingCounter(G3,G4))
