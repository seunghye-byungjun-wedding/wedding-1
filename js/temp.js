function modal(id) {
    var zIndex = 9999;
    var modal = document.getElementById(id);

    // 모달 div 뒤에 희끄무레한 레이어
    var bg = document.createElement('div');
    bg.setStyle({
        position: 'fixed',
        zIndex: zIndex,
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        // 레이어 색갈은 여기서 바꾸면 됨
        backgroundColor: 'rgba(0,0,0,0.4)'
    });
    document.body.append(bg);

    // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
    modal.querySelector('.modal_close_btn').addEventListener('click', function() {
        bg.remove();
        modal.style.display = 'none';
    });

    modal.setStyle({
        position: 'fixed',
        display: 'block',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

        // 시꺼먼 레이어 보다 한칸 위에 보이기
        zIndex: zIndex + 1,

        // div center 정렬
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        webkitTransform: 'translate(-50%, -50%)'
    });
}

// Element 에 style 한번에 오브젝트로 설정하는 함수 추가
Element.prototype.setStyle = function(styles) {
    for (var k in styles) this.style[k] = styles[k];
    return this;
};

document.getElementById('popup_open_btn').addEventListener('click', function() {
    // 모달창 띄우기
    modal('my_modal');
});


function copyToClipboard(id) {
    //var text = document.getElementById(id).innerText;
    var text = id;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
  
  //alert("copyText : " + text);
  
  
  
  
 // var copyText2 = document.getElementById("myInput").innerHTML;
  //var copyText = document.getElementById("myInput").innerText;
 // alert(copyText2);
 // alert(copyText);
 // copyText.select();
 // copyText.setSelectionRange(0, 99999); /*For mobile devices*/
 // document.execCommand("copy");
 // alert("Copied the text: " + copyText.value);

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
