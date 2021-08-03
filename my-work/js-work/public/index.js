const message = document.getElementById('message')
const username = document.getElementById('username')
const useraddress = document.getElementById('useraddress')
const useraccount = document.getElementById('useraccount')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const register = document.getElementById('register')
//重點整理1.全域變數erro=""設定 因為要同時進行多項錯誤偵測，因此必須設定一個erro=""去接所有可能會出錯的數值
//三元運算子需要先括號 ()?:
//短路求值不需要括號 ||

register.addEventListener('click', function () {
  console.log('000123')
  let erro = ''

  ////if else判斷式
  //1.判斷資料是否存在，如果沒有了話erro就會增加資訊，資訊會隨著true越多而增加
  //2.最後再用message.innerHTML接收erro的值，然後那判斷，erro裡面有沒又值，有值就直接寫erro，如果沒有就代表沒有錯誤，也就是說表單驗證成功!
  // if(!username.value){
  //   erro+='名子'
  // }
  // if(!useraddress.value){
  //   erro+='地址'
  // }
  // if(!username.value){
  //   erro+='帳號'
  // }
  // if(!password.value){
  //   erro+='密碼'
  // }
  // if(!password2.value){
  //   erro+='確認密碼'
  // }

  // message.innerText=erro?erro:'恭喜成功'

  // if(erro){
  //   message.innerText=erro
  // }else{
  //   message.innerText="恭喜已成功填完"
  // }

  ///三元運算子求法 最佳解答
  //1.如果沒有值，負負得正，就是執行true，顯示缺少填寫的資訊! 反之若有值就會執false顯示空字串
  //2.在用message.innertext去接值，然後以有erro變數資訊為true，沒有了話就另外寫字串說表單驗證通過
  //記得true的時候要拿變數進來接收值喔!
  erro += !username.value ? '你沒填名稱' : ''
  !useraddress.value ? (erro += '你沒填信箱') : ''
  !useraccount.value ? (erro += '你沒填帳號') : ''
  !password.value ? (erro += '你沒填密碼') : ''
  !password2.value ? (erro += '你沒填確認碼') : ''
  message.innerText = erro ? erro : '表單驗證通過'

  ///短路求值算法  不適合
  // 1.先拿一個變數去接值
  //2.用or || 因為如果都是false就會執行沒填的資訊
  // erro+=username.value||''||"123" ;
  // erro+=useraddress.value||"你沒有填信箱"
  // erro+=useraccount.value||"你沒有填寫帳號"
  // erro+=password.value||"你沒有填密碼"
  // erro+=password2.value||"你沒有確認密碼"
  // message.innerText=erro?erro:"表單驗證通過"
})
