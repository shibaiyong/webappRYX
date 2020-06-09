
$('.ordernum strong').click(function(){
    var txt = $(this).prev().text();
    copyText(txt);
    
})
function copyText(text) {
    const textString = text.toString();
    let input = document.querySelector('#copy-input');
    if (!input) {
      input = document.createElement('input');
      input.id = "copy-input";
      input.readOnly = "readOnly";
      input.style.position = "absolute";
      input.style.left = "-1000px";
      input.style.zIndex = "-1000";
      document.body.appendChild(input)
    }
    input.value = textString;
    selectText(input, 0, textString.length);
    if (document.execCommand('copy')) {
      document.execCommand('copy');
    }
    input.blur();
    mui.toast('复制成功',{ duration:1500, type:'div' }) 
    function selectText(textbox, startIndex, stopIndex) {
      if (textbox.createTextRange) {
        const range = textbox.createTextRange();
        range.collapse(true);
        range.moveStart('character', startIndex);
        range.moveEnd('character', stopIndex - startIndex);
        range.select();
      } else {
        textbox.setSelectionRange(startIndex, stopIndex);
        textbox.focus();
      }
    }
  };