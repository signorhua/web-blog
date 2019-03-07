$(() => {
  const $addBtn = $('.add');
  const $subBtn = $('.subtract');
  const $con = $('.container');
  function getNum() {
    return window.parseInt($con.text());
  }
  function changeNum(num) {
    $con.text(num);
  }
  $addBtn.click(() => {
    changeNum(getNum() + 1);
  });
  $subBtn.click(() => {
    changeNum(getNum() - 1);
  });
});
