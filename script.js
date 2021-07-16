$(function(){
    var effect_pos = -300; // 画面下からどの位置でフェードさせるか(px)
    var effect_move = 300; // どのぐらい要素を動かすか(px)
    var effect_time = 1000; // エフェクトの時間(ms) 1秒なら1000

    // フェードする前のcssを定義
    $('.scroll-fade').css({
        opacity: 0,
        transform: 'translateY('+ effect_move +'px)',
        transition: effect_time + 'ms'
    });

    // スクロールまたはロードするたびに実行
    $(window).on('scroll load', function(){
        var scroll_top = $(this).scrollTop();
        var scroll_btm = scroll_top + $(this).height();
        effect_pos = scroll_btm - effect_pos;

        // effect_posがthis_posを超えたとき、エフェクトが発動
        $('.scroll-fade').each( function() {
            var this_pos = $(this).offset().top;
            if ( effect_pos > this_pos ) {
                $(this).css({
                    opacity: 1,
                    transform: 'translateY(0)'
                });
            }
        });
    });
});



//ギャラリー

//lightbox オプションの設定※https://lokeshdhakar.com/projects/lightbox2/#options参照

lightbox.option({
    'wrapAround': true,//グループ最後の写真の矢印をクリックしたらグループ最初の写真に戻る
    'albumLabel': ' %1 / total %2 '//合計枚数中現在何枚目かというキャプションの見せ方を変更できる
  })
  
  //ふわっと見せるためのJS。3-5-3 ページが読み込まれたらすぐに動かしたい&画面をスクロールをしたら動かしたい場合内のソースコード使用
  
  function fadeAnime(){
  // flipLeft
  $('.gallery li').each(function(){ 
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
          $(this).addClass('flipLeft');
      }else{
          $(this).removeClass('flipLeft');
      }
  });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまでページが読み込まれたらすぐに動かしたい場合の記述
  
  
  
  
  
  Resources
