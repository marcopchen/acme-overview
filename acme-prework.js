//instructions
//write the 4 functions below
//no third party libraries
//try not to use any forEach
//each function should be short and some functions can depend on other functions (hint no function should be more than 10 lines)

//list of products
var products = [
  {
    id: 1,
    price: 5,
    name: 'foo'
  },
  {
    id: 2,
    price: 3,
    name: 'bar'
  },
  {
    id: 3,
    price: 9,
    name: 'bazz'
  }
];

//list of line items
var lineItems = [
   {
     productId: 1,
     quantity: 1
   },
   {
     productId: 1,
     quantity: 1
   },
   {
     productId: 2,
     quantity: 1
   },
   {
     productId: 3,
     quantity: 1
   },
];
//returns an object
//keys are the ids of products
//the values are the products themselves
function generateProductsMap(products){
  return products.reduce(function(map, product) {
    map[product.id] = product
    return map
  }, {})
}

//returns an object
//keys are the ids of products
//value is the total revenue for that product
function salesByProduct(products, lineItems){
  var map = generateProductsMap(products)
  return lineItems.reduce(function(sales, item) {
    if (sales[item.productId]) {
      sales[item.productId] += map[item.productId].price * item.quantity
    }
    else {
      sales[item.productId] = map[item.productId].price * item.quantity
    }
    return sales
  }, {})
}

//return the total revenue for all products
function totalSales(products, lineItems){
  var total = 0
  var sales = salesByProduct(products, lineItems)
  for (var item in sales) {
    total += sales[item]
  }
  return total
}

//return the product responsible for the most revenue
function topSellerByRevenue(products, lineItems){
  var highest = 0
  var best = 0
  var sales = salesByProduct(products, lineItems)
  for (var item in sales) {
    if (sales[item] > highest) {
      highest = sales[item]
      best = item
    }
  }
  return best
}
console.log(`generates product map - should be
{
  1:{
    id: 1,
    name: "foo",
    price: 5
  },
  2:{
    id: 2,
    name: "bar",
    price: 3
  },
  3:{
    id: 3,
    name: "bazz",
    price: 9
  }
}

`, generateProductsMap(products));
console.log(`sales by product - should be
  {
    1: 10,
    2: 3,
    3: 9
}`, salesByProduct( products, lineItems));
console.log('total sales - should be 22', totalSales( products, lineItems));
console.log('top seller by revenue', topSellerByRevenue(products, lineItems ));
