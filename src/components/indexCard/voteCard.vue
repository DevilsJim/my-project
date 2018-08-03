<template>
  <div class="vote-con con">
    <h3 class="t1-b"><em>进行中</em>{{detailData.title}}</h3>
    <div class="time-nav">
      <span><i></i><em>2小时前</em></span>
      <span><em>1561人参与</em></span>
    </div>
    <div class="contents">
      <div class="enclosure vote">
        <!-- 投票中 -->
        <!--<ul class="in-voting">-->
          <!--<li><span>山东鲁能山山东鲁能山山东鲁能山山东鲁能山山东鲁能山山东鲁能山山东鲁能山</span></li>-->
          <!--<li><span>上海申花</span></li>-->
          <!--<li><span>长春亚泰</span></li>-->
        <!--</ul>-->

        <!-- 投票结束 -->
        <ul class="vote-result">
          <li>
            <p>
              <span class="txt">天之月影天之月影天之月影天之月影天之月影天之月影</span>
              <span class="progress-bar"><em></em></span>
            </p>
            <span>1291票</span>
          </li>
          <li>
            <p>
              <span class="txt">天之月影</span>
              <span class="progress-bar"><em></em></span>
            </p>
            <span>1291票</span>
          </li>
          <li>
            <p>
              <span class="txt">天之月影</span>
              <span class="progress-bar"><em></em></span>
            </p>
            <span>1291票</span>
          </li>
        </ul>

        <div class="img"></div>
      </div>
      <div class="line"></div>
      <div class="bottom-nav">
        <span><i></i>一座神奇的大厦</span><em>以投票，查看结果</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailCard',
  data () {
    return {
      detailData: {
        title: '今天谁赢？'
      }
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
.vote-con{
  .t1-b{
    display: flex;
    align-items: center;
    em{
      display: inline-flex;
      border-radius: 21px;
      background: #7F7AFE;;
      margin-right: 40px;
      .w-h(100px, 42px);
      .font2(22px, @white, 42px);  // .font2(@fontSize, @color, @lineHeight)
      .flexCenter();
      &.ended{
        color: @assistGray;
        background: @borderGray;
      }
    }
  }
  .contents{
  }
}
</style>
