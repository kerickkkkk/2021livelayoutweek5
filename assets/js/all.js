"use strict";

var ckeditor = document.getElementById("editor");
ClassicEditor.create(ckeditor).then(function (editor) {
  console.log(editor);
})["catch"](function (error) {
  console.error(error);
});
$(function () {
  console.log('Hello Bootstrap5');
  $('.ck-editor').addClass('collapse');
});
//# sourceMappingURL=all.js.map
