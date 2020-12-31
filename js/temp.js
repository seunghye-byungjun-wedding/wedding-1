
function copyToClipboard(elementId) {
  //alert (elementId);
  var copyText = elementId;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("Copy");
  alert('복사되었습니다, 감사합니다.');


출처: https://ddorang-d.tistory.com/117 [도라미도라미]
  
  // 글을 쓸 수 있는 란을 만든다.
  //var aux = document.createElement("input");

  // 지정된 요소의 값을 할당 한다.
  //aux.setAttribute("value", document.getElementById(elementId).innerHTML);

  // bdy에 추가한다.
  //document.body.appendChild(aux);

  // 지정된 내용을 강조한다.
  //aux.select();

  // 텍스트를 카피 하는 변수를 생성
  //document.execCommand("copy");

  // body 로 부터 다시 반환 한다.
  //document.body.removeChild(aux);
}
