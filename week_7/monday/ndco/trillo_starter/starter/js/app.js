$(function() {
  console.log("Hi");
//As a user, I want cards in the done column to disappear when I click them, so I can keep my done column compact.
const $card = $('.card');
// console.log($card);
const $deleteButton = $('.delete');
// console.log($deleteButton);

$('.card').on('click', '.delete', function (){
  console.log(this);
  $(this).parent().remove();
})


//As a user, I want cards in the to do column to move to the done column when I click them, so I can keep track of my progress
const $doneCard = $('.card.done');
// console.log($doneCard);
const $toDoCard = $('.card.todo');
// console.log($toDoCard);
const $finishButton = $('.finish');
// console.log($finishButton);


  $('.card.todo').on('click', '.finish', moveToDone())


  function moveToDone() {
    this.remove();
    let $newParent = $(this).parent();
    console.log($newParent);
    $newParent.removeClass('todo');
    $newParent.addClass('done');
    console.log(newParent);
    $newParent.remove();
    $newParent.appendTo('.card.done');

  }
//As a user, I want to a new card to be added to the todo column when I enter text and click the 'Add Card' button, so I can add new things to my list



});
