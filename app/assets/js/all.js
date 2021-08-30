const ckeditor = document.getElementById("editor");
ClassicEditor
  .create( ckeditor)
  .then( editor => {
  console.log( editor );
} )
  .catch( error => {
  console.error( error );
} );

$(function() {
  console.log('Hello Bootstrap5');
  $('.ck-editor').addClass('collapse')
});