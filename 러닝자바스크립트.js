(function(){
    function rand (m,n){
        return m + Math.floor((n-m+1) * Math.random())}
    function randFace (){
       ['crown','anchor','heart','club','spade','diamond']
       [rand(1,randFace)];
    }
    let funds = 50;
    let round = 0;
    while(funds > 0 && funds < 100){
        round ++;
        console.log(`\tround${round}:`);
        console.log(`\tstarting funds:${funds}`);
        let bets = {crown:5,anchor:2,heart:2,club:2,spade:0,diamond:0};
        let totalbet = rand(1,funds);
        if(totalbet === 7){
            totalbet = funds;
            bets.heart = totalbet
        }else{
            let remaining = totalbet
            do{
                let bet = rand ( 1, remaining);
                let face = randFace();
                bets[face] += bet
                remaining -= bet
            }while(remaining > 0)
        }
        funds = funds - totalbet;
        console.log(`\tbets:`+Object.keys(bets).map(face => `${face}:${bets[face]}pence`).join(',,')+`(total:${totalbet}pence)`)
        const hand = [];
        for ( let roll = 0 ; roll < 3; roll++){
            hand.push(randFace())
        }
        console.log(`\thand:${hand.join(',')}`)
        let winning = 0;
        for (let die =0; die<hand.length; die++){
            let face = hand[die]
            if ( bets[face]>0 ){
                winning += bets[face];
            }
        funds += winning;
        console.log(`\twinning:${winning}`);
        }
    }
    console.log(`\tending funds:${funds}`)
 })();