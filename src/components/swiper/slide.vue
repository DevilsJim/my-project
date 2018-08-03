<template>
  <div class="swiper">
    <swiper :options="swiperOption" :style="swiperBoxStyle">
      <swiper-slide class="swiper-slide" :style="swiperSlide" v-for="item in slideData" :key="item.id" >
        <p class="tags"><i v-for="sub in item.tags" :key="sub.id">{{sub}}</i></p>
        <img :src="item.imgSrc">
        <p class="txt">
          <span class="title"># {{item.title}} #</span>
          <!--<span class="desc">{{item.description}}</span>-->
        </p>
      </swiper-slide>
    </swiper>
    <!--<div class="swiper-pagination"  slot="pagination"></div>-->
  </div>

</template>
<script>
import {swiper, swiperSlider} from 'vue-awesome-swiper'

export default{
  name: 'test2',
  data () {
    return {
      slideData: [
        {
          id: '0',
          imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180050&di=0d2ee92eead284e8133d6df07535d75a&imgtype=0&src=http%3A%2F%2Fimg.sc115.com%2Fuploads1%2Fsc%2Fjpgs%2F1512%2Fapic16988_sc115.com.jpg',
          title: '品质生活',
          description: '生活中的点滴都是最美好的回忆！',
          tags: ['Ⅰ', 'Ⅱ']
        },
        {
          id: '1',
          imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180167&di=7412fd486c47c15f1d27485be0d7bd28&imgtype=0&src=http%3A%2F%2Fwww.duoxinqi.com%2Fimages%2F2012%2F06%2F20120605_8.jpg',
          title: '玩转你的场景',
          description: '在这里，你可以，随时随地新建属于自己的专属场景，用图片和文字记录你此刻所感所想；你还可以，内容与服务相匹配触达品质生活；',
          tags: ['游玩', '扫货']
        },
        {
          id: '3',
          imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180167&di=3bcedd33a30129b9951be2a81f9b505c&imgtype=0&src=http%3A%2F%2Fpic1.5442.com%2F2015%2F0420%2F06%2F05.jpg',
          title: '生活一点通',
          description: '生活乐趣，尽知晓',
          tags: ['美食', '扫货']
        }
      ],
      // 轮播config
      swiperOption: {
        debugger: true, // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        // autoplay: true, // 设置为true启动自动切换
        direction: 'horizontal', // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
        loop: 'true',
        spaceBetween: 45, // 在slide之间设置距离（单位px）
        slidesPerView: 'auto', // 设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        centeredSlides: true, // <span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
        effect: 'coverflow', // slide的切换效果，可设置为'slide'（普通切换、默认）,"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
        coverflowEffect: {
          rotate: 0, // slide做3d旋转时Y轴的旋转角度。默认50
          stretch: 0, // 每个slide之间的拉伸值，越大slide靠得越紧。 默认0
          depth: 100, // slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
          modifier: 1, // depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1
          slideShadows: false // 开启slide阴影。默认 true
        },
        mousewheel: true, // 开启鼠标滚轮控制Swiper切换
        watchOverflow: true // 当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航等。默认不开启这个功能。
        // pagination: { // 使用分页导航
        //   el: '.swiper-pagination',
        //   clickable: true // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        //   // type: 'fraction' // 分页器样式类型 'fraction'  分式
        // }
      },
      swiperBoxStyle: {
      },
      swiperSlide: {
        width: 652 / 75 + 'rem',
        height: 320 / 75 + 'rem',
        borderRadius: 30 / 75 + 'rem'
      }
    }
  },
  components: {
    swiper,
    swiperSlider
  }
}
</script>

<style lang="less" scoped type="text/less">
  .swiper{
    .swiper-container{
      padding-bottom: 20px;
    }
    .swiper-slide{
      box-shadow:0 6px 16px 0 rgba(167,167,167,1);
      img{
        .w-h(100%, 100%);
        border-radius: 30px;
      }
      .tags{
        display: flex;
        position: absolute;
        top: 18px;
        left: 18px;
        i{
          display: inline-flex;
          .flexCenter();
          /*order: 3;*/
          /*flex-grow: 0;*/
          /*flex-shrink: 1;*/
          /*flex-basis: auto;*/
          /*flex: auto; // 1 1 auto, 后两个参数可省略*/
          /*flex: none; // 0 0 auto*/
          margin-right: .2rem;
          .w-h(92px, 43px);
          .font1(24px, @white);
          .background100('../../assets/images/tags_bg.png');
        }
      }
      .txt{
        position: absolute;
        bottom: 0;
        left: 0;
        box-sizing: border-box;
        padding: 58px 0 18px;
        text-align: center;
        .w-h(652px, 124px);
        .background100('../../assets/images/slide_bg.png');
        .title{
          display: inline-block;
          .font2(38px, @white, 53px);
        }
      }
    }
  }
</style>
