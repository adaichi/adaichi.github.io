function janken(a)
{
    let rand = Math.floor(Math.random()*3);
    console.log(rand);
    let message='';
    let teki='';
    let kekka='';

    if(a===0)
    {
        message='あなた　グー';
        if(rand===0)
        {
            teki='わたし　グー';
            kekka='あいこです';
        }
        else if(rand===1)
        {
            teki='わたし　チョキ';
            kekka='あなたの勝ちです！！';
        }
        else if(rand===2)
        {
            teki='わたし　パー';
            kekka='あなたの負けです！！';
        }
    }
    else if(a===1)
    {
        message='あなた　チョキ';
        if(rand===0)
        {
            teki='わたし　グー';
            kekka='あなたの負けです！！';
        }
        else if(rand===1)
        {
            teki='わたし　チョキ';
            kekka='あいこです';
        }
        else if(rand===2)
        {
            teki='わたし　パー';
            kekka='あなたの勝ちです！！';
        }
    }
    else if(a===2)
    {
        message='あなた　パー';
        if(rand==0)
        {
            teki='わたし　グー';
            kekka='あなたの勝ちです！！';
        }
        else if(rand===1)
        {
            teki='わたし　チョキ';
            kekka='あなたの負けです！！';
        }
        else if(rand===2)
        {
            teki='わたし　パー';
            kekka='あいこです';
        }
    }
    console.log(message);
    console.log(teki);
    console.log(kekka);

    const kekka1=document.querySelector('#a');
    kekka1.textContent=message;
    const kekka2=document.querySelector('#b');
    kekka2.textContent=teki;
    const kekka3=document.querySelector('#c');
    kekka3.textContent=kekka;

    



}


$("#c").on('click',function(){
    // box31クラスのアニメーションを設定する
    $("#c").animate({
        'fontSize':'64px',
      width: "+=200",
      height: 200,
      opacity: 0.5,
      margin: "+=10"},
      3000,
    // box21クラスのアニメーション後のイベントを設定する
    function(){
      $("#c").css("background", "red");
    })
    .animate({
                'fontSize':'16px',
                width: "-=200",
                height: 200,
                opacity: 0.5,
                margin: "-=10"
            })
});
