function printTitle()
{
  return '***<没钱赚商店>购物清单***\n';
}
function printNomarlProduct(item,number)
{
  return '名称：'+item.name+
         '，数量：'+number+item.unit+
         '，单价：'+item.price.toFixed(2)+'(元)'+
         '，小计：'+(item.price*number).toFixed(2)+'(元)\n';
}
function printInventory(inputs){
  var allItems = loadAllItems();
  var number = 0;
  for(var i=0;i<allItems.length;i++)
    {
      if(inputs == allItems[i].barcode)
       {
         number += 1;
         console.log(printTitle()+printNomarlProduct(allItems[i],number));
       }
    }


}
