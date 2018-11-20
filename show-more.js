window.showMore = {
  data: {
    long: {},
    short:{},
    pos:{},
  },
  // 获取页面的位置（兼容Safari、Chrome）
  getBodyScrollTop: function () {
    var el = document.scrollingElement || document.documentElement;
    return el.scrollTop;
  },
  reBindEvent:function() {
    $('.show-more-item').off('click.ShowMore').each(function(i, el){
      var $el = $(el)
      var id = $el.data('id')
      var $content = $el.find('.show-more-item-content');
      $el.on('click.ShowMore', '.show-more-btn', function(e) {
        showMore.data.short[id] = $content.html();
        $content.html(showMore.data.long[id]);
  
        $el.addClass('show-more-item-expand')
  
        // 记住页面位置
        var st =showMore.getBodyScrollTop();
        showMore.data.pos[id] = st;
      });
      $el.on('click.ShowMore', '.show-more-less-btn', function(e) {
        $content.html(showMore.data.short[id]);
  
        $el.removeClass('show-more-item-expand')
  
        // 回到原来的位置
        var top = showMore.data.pos[id];
        if (top!=='') {
          $('html, body').animate({scrollTop: top}, 200);
        }
      });
    });
  }
};

$(function() {
  showMore.reBindEvent();
});
