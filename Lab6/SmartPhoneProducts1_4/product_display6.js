//define store name and push it to the DOM
const store_name="Marina Cleavenger";
top_title.innerHTML=(store_name + ("'s Used Smart Phone Store")); 

    //send store name to footer title
bottom_title.innerHTML=("Your one stop shop for used phones - "+store_name+"'s");

//initializing hits and spins and send to DOM
let hits=0;
let spins=1;
// let wins;
let over_half=false;
hits_span.innerHTML = hits;
spins_span.innerHTML = spins;

//two functions. Changes the item name to rotate, true false, and also the hits and spins game.
    function changeClassName(element) {
        if(element.className=='item'){
            spins=spins+1;
            element.className = 'item rotate'; 

        } else {
                }

        //element.className = 'item rotate'; 
     //   spins=spins+1;
        if(spins<2*hits&&hits<spins){
           // wins=true;
           over_half=true;
        } else {
           // wins=false;
        }
       // win_span.innerHTML=wins;
         win_span.innerHTML=over_half
        spins_span.innerHTML=spins;
        hit_spin_span.innerHTML=(hits/spins).toFixed(2);
        //winning progress depdends on hits and spins
let hits_spins_ratio = hits/spins;
let progress;
//professors code
// if ( hits_spins_ratio > 0.5 ) {
//     if (hits<spins){
//         progress="You Win!";
//     } 
// } else if (hits_spins_ratio>=0.25){
//             progress = 'Almost there!';
// } else if ( hits_spins_ratio >= 0 ) {
//                      progress = 'On your way!';
//                  }
//      else {
//          progress = 'Get going!' ;
//  }
//  win_span.innerHTML=progress; 
// } 
if ( hits_spins_ratio > 0 ) {
    progress = 'On your way!';
    if ( hits_spins_ratio >= 0.25 ) {
        progress = 'Almost there!';
        if ( hits_spins_ratio >= 0.5 ) {
            if( hits < spins) { 
                progress = 'You win!';
            }
        }
    }
}
else {
    progress = 'Get going!' ;
}
win_span.innerHTML=progress; 
    }
    function resetClassName(element) {
        if(element.className=='item rotate'){
            hits=hits+=2;
            element.className='item';
        } else {
            changeClassName(element);
        }
        if(spins<2*hits&&hits<spins){
          //  wins=true;
          over_half=true;
        } else {
            //wins=false;
        }
       // win_span.innerHTML=wins;
       win_span.innerHTML=over_half
        hits_span.innerHTML=hits;
        hit_spin_span.innerHTML=(hits_span.innerHTML/spins_span.innerHTML).toFixed(2);
        //winning progress depends on hits and spins 
        let hits_spins_ratio = hits/spins;
let progress;
if ( hits_spins_ratio > 0 ) {
    progress = 'On your way!';
    if ( hits_spins_ratio >= 0.25 ) {
        progress = 'Almost there!';
        if ( hits_spins_ratio >= 0.5 ) {
            if( hits < spins) { 
                progress = 'You win!';
            }
        }
    }
}
else {
    progress = 'Get going!' ;
}
win_span.innerHTML=progress; 
    }
//professors code 
// if ( hits_spins_ratio > 0.5 ) {
//     if (hits<spins){
//         progress="You Win!";
//     } 
// } else if (hits_spins_ratio>=0.25){
//             progress = 'Almost there!';
// } else if ( hits_spins_ratio >= 0 ) {
//                      progress = 'On your way!';
//                  }
//      else {
//          progress = 'Get going!' ;
//  }
//  win_span.innerHTML=progress; 
// } 