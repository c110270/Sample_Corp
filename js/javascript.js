/*==================================
swiper
===================================*/
if (window.matchMedia( "(max-width: 767px)" ).matches) {
  /* ウィンドウサイズが 767px以下の場合のコードをここに */
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      slidesPerView: 1.25,
      spaceBetween: 20,
      initialSlide: 0,
    });
  } else {
  /* ウィンドウサイズが 767px以上の場合のコードをここに */
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      slidesPerView: 2.75,
      spaceBetween: 40,
      initialSlide: 0,
    });
  }
  
/*==================================
アコーディオン
===================================*/
$(function(){
  //クリックした時
  jQuery('.bl_qa_que').click(
    function(){
  //.nextでクリックされた次の要素取得し、toggleメソッドでその時に応じて表示・非表示を切り替える
      jQuery(this).next().slideToggle();
 //.childrenで直下の子要素を取得する。toggleClassで、クラスの入れ替え。あれば削除し、無ければ追加する。
      jQuery(this).children('.js_qa_icon').toggleClass( 'js_qa_open' );
    });
});

/*==================================
ページトップ
===================================*/
 // 100px スクロールしたらボタン表示
 $(window).scroll(
  function () {
    // ページの一番上から100pxスクロールしたら表示
    // 100を150にする150pxとなる
   if ($(window).scrollTop() > 100) {
     // .fadeInで表示300は表示されるまでの時間大きくなればゆっくり
        $('.page_top').fadeIn(300);
   } else {
        $('.page_top').fadeOut(300);
   }
});

// Topボタンをクリックした時Topに戻る
$(function(){
$( '.page_top' ).click(
  function()
  {
    // [class:move-page-top]をクリックしたら起こる処理
    // ページ一番上(scrollTop:0)までゆっくり(slow)戻る
    $( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
  }
) ;
})

/*==================================
ドロワー
===================================*/
$(function() {
  /*　toggleをクリックした時に */
 $('.js_drawer_toggle').on('click', function () {
  /* 下記のように記述することでopenクラスを付与 */
  $(this).toggleClass('open');
  $('.bl_gnav_list').toggleClass('open');
  $('.ly_header').toggleClass('open');
  $('.js_drawer_layer').toggleClass('open');
  $('.ly_mainVisual').toggleClass('open');
 });
});

/*==================================
スムーススクロール
===================================*/

jQuery('a[href^="#"]').click(function() {
  // .headerクラスがついた要素の高さを取得
  let header = jQuery(".ly_header").innerHeight(); 
  let speed = 300;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  // トップからの距離からヘッダー分の高さを引く
  let position = jQuery(target).offset().top - header;
  // その分だけ移動すればヘッダーと被りません
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});