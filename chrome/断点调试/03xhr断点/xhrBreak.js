const url = './1.txt';
$.ajax({
  url,
  success: (res) => {
    console.log(res);
  },
});
