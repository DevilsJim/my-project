<template>
  <div class="detail-con con">
    <h3 class="t1-b">{{detailData.title}}</h3>
    <div class="time-nav">
      <span v-for="item in detailData.timeNav" :key="item.id"><i></i><em>{{item}}</em></span>
    </div>
    <div class="contents">
      <p class="text">望京SOHO位于北京市朝阳区望京街与阜安,望京SOHO位于北京市朝阳区望京街与阜安,望京SOHO位于北京市朝阳区望京街与阜安,望京SOHO位于北京市朝阳区望京街与阜安</p>
      <!--<div class="enclosure single-img">-->
        <!--<img src="../../assets/images/img.jpg" alt="">-->
      <!--</div>-->
      <div class="enclosure album">
        <span></span>
        <span></span>
        <span></span>
        <em>6+</em>
      </div>
      <div class="line"></div>
      <div class="bottom-nav">
        <span><i></i>大众点评</span><em>更多美食</em>
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
        title: '图文大赏！摩托罗拉摄影',
        timeNav: ['2小时前', '1561', '36']
      }
    }
  }
}
</script>

<style scoped lang="less" type="text/less">
.detail-con{
  .contents{
    .enclosure{
      span, img, em{
        display: block;
        border-radius: 18px;
        overflow: hidden;
      }
    }
    .single-img{
      img{
        .w-h(680px, 280px);
      }
    }
    .album{
      position: relative;
      overflow: hidden;
      span{
        float: right;
        .w-h(166px,166px);
        .backgroundSize('../../assets/images/img.jpg', @sizeX: auto, @sizeY: 100%);
        &:first-child{
          float: left;
          .w-h(514px, 342px);
        }
        &:nth-child(3){
          margin-top: 10px;
        }
      }
      em{
        position: absolute;
        bottom: 0;
        right: 0;
        background: rgba(0,0,0,.4);
        letter-spacing: 4px;
        .w-h(166px, 166px);
        .font3(34px, @white, 166px, center);   // .font3(@fontSize, @color, @lineHeight, @align)
      }
      &:after{
        .clearFloat();
      }
    }
  }
}
</style>
