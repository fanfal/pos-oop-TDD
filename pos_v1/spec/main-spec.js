describe("pos",function(){
  var inputs;

  beforeEach(function(){
    inputs = 'ITEM000000';
  });

  it("should return correct text",function(){

    spyOn(console, 'log');

    printInventory(inputs);

    var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：可口可乐，数量：1瓶，单价：3.00(元)，小计：3.00(元)\n';
    expect(console.log).toHaveBeenCalledWith(expectText);
  });

});
