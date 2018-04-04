window.onload = () => {
  $('form').on('submit', function(e) {
    e.preventDefault();
    let $json = $('#json').val();
    $.ajax({
      url: 'index.html',
      type: 'POST',
      dataType: 'json',
      data: $json,
      contentType: 'application/json',
      success: (data) => $('#form').append(data),
      error: (data) => $('#form').append(`File Not Found: ${data}`)
  });
});
// const appendToDOM = (csv) => {
//   $('form').append(csv);
// }