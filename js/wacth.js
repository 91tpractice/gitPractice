const form = document.getElementById('myForm');
// const radios = form.querySelectorAll('input[type="radio"]');
const selects = form.querySelectorAll('.select');
const submit = form.querySelector('.submit');
 
function checkForm() {
    console.log("OK");
    let allChecked = true;
 
    // ラジオボタンのチェックを確認
    // for (let i = 0; i < radios.length; i++) {
    //     if (!radios[i].checked) {
    //         allChecked = false;
    //         break;
    //     }
    // }
 
    // セレクトボックスの選択を確認
    for (let j = 0; j < selects.length; j++) {
        if (selects[j].value === "") {
            allChecked = false;
            break;
        }
    }
 
    // ボタンの有効化/無効化を決定
    if (allChecked) {
        submit.classList.remove('disabled');
    } else {
        submit.classList.add('disabled');
    }
}
 
// ボタンがクリックされたときにフォームのチェックを実行する
submit.addEventListener('click', function(event) {
    event.preventDefault(); // フォームのデフォルトの送信を防止する
    checkForm(); // フォームのチェックを実行
});
 
// 初期状態でフォームのチェックを一度実行する
// checkForm();