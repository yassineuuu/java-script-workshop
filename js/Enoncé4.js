function Blackjack(carte){
    let compt=0
    switch (carte){
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 :
            compt=1
            break;
        case 7 :
        case 8 :
        case 9 :
            compt=-1
            break;
     
    }
    return compt

}