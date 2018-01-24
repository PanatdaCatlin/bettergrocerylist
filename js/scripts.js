function Groceries(item, amount, store) {
  this.item = item;
  this.amount = amount;
  this.store = store;
}

Groceries.prototype.groceryList = function() {
  return this.amount + "   " + this.item  + " from "  + this.store + "    </label><input id='checkbox' type ='checkbox'>";
};

$(document).ready(function() {
  $("#groceryForm").submit(function(event) {


  event.preventDefault();
    var itemInput = $("#userInputItem").val();
    var amountInput = $("#userInputAmount").val();
    var storeInput = $("#userInputStore").val();

    var newGroceries = new Groceries(itemInput, amountInput, storeInput);

    $("ul#groceryList").append("<li><label>" + newGroceries.groceryList() + " </li>");

    $('li:last-child > #checkbox').change(function(){
      $(this).parent().find("label").toggleClass("strikeThrough");
    });

  });

});
