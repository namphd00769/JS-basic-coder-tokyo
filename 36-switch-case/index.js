function sale(price, card) {
   var percent;
   switch (memberCard.rank) {
      case 'bronze':
         percent = 0.2;
         break;
      case 'sliver':
         percent = 0.4;
         break;
      case 'gold':
         percent = 0.6;
         break;
      default:
         percent = 0.8;
         break;
   }
   return price * (1 - percent);
}
var memberCard = {
   rank: 'bronze'
}

var result = sale(18000, memberCard);
console.log(result);