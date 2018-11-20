# showMore
知乎“显示更多”效果

## 使用方式

```html
<!-- 依赖于JQuery，一定要加上 -->
<script src="http://lib.sinaapp.com/js/jquery/2.2.4/jquery-2.2.4.min.js"></script>
<script src="show-more.js"></script>
<script>
  // 此处是一个 id: 长文字 的预先定义
  showMore.data.long[1] = "long html here";
</script>
<div class="list-all">
    <!-- 类名 show-more-item 表示最大的框，展开后将加入 show-more-item-expand 类 -->
    <!-- data-id 必须写 -->
    <div class="show-more-item" data-id="<?= $index ?>">
        <h2>标题 <?= $index ?></h2>
        <!-- 类名 show-more-item-content 表示 里面 的内容将会被长文替换 -->
        <div class="show-more-item-content">
            <!-- show-more-btn 是展开更多按钮 -->
            <?= rand_chinese_text(100) ?><button class="show-more-btn">展开更多</button>
        </div>
        <div>
            <!-- show-more-less-btn 是收起按钮 -->
            <button class="show-more-less-btn" style="">收起</button>
        </div>
    </div>
</div>
```

## 动态加载信息流

如果想要实现类似知乎的动态加载，只需要在加载完毕后（dom安装完毕后，且`showMore.data.long`也已经填充）调用`showMore.rebindEvent()`即可重新绑定所有的事件（不需要单独处理新加载出来的部分）。

## 自定义事件

```js
$('.show-more-item').on('click.ShowMore', '.show-more-btn', function(e) {
  // 展开按钮
});
$('.show-more-item').on('click.ShowMore', '.show-more-less-btn', function(e) {
  // 收起按钮
});
```

## 性能问题

一般而言，全文都

