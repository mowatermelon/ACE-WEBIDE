'use strict'
$(function(){
  fnWait();
  $('[data-toggle="codeBox"]').html(getEditorToolDom(getEditorToolData()));
  layui.element.init();
  layui.element.render('nav');
  initCodingBtn();
  changingJS();
})
