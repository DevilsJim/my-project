<template>
  <div class="main">
    <div class="con">
      <slide></slide>
      <ul class="nav">
        <li v-for="item in navData" :key="item.id">
          <em :style="{backgroundImage:'url('+ item.iconSrc +')'}"></em>
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
    <home-card></home-card>
  </div>
</template>

<script>
import slide from '@/components/swiper/slide'

export default {
  name: 'homePage',
  data () {
    return {
      navData: [
        {
          iconSrc: 'http://img1.lashouimg.com/txls/M00/00/05/CqgBTFnfDliANltSAAAI9-gaSMU797.png',
          title: '室内地图'
        },
        {
          iconSrc: 'http://img1.lashouimg.com/txls/M00/00/00/CqgBTVmmkwKAY8NlAAAK2RXdbL8561.png',
          title: '外卖'
        },
        {
          iconSrc: 'http://img1.lashouimg.com/txls/M00/00/00/CqgBTFmmkkSAZqMyAAAHjqdacMo487.png',
          title: '共享单车'
        },
        {
          iconSrc: 'http://img1.lashouimg.com/txls/M00/00/08/CqgBTFo6LJ-AKbMrAAALB1dKyHg248.png',
          title: '内购'
        },
        {
          iconSrc: 'http://www.api.tianxialashou.com.cn/static/assets/all.png',
          title: '全部'
        }
      ]
    }
  },
  components: {
    slide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" type="text/less">
  .con{
    padding: 0;
  }
  .swiper{
    padding: 47px 0 38px;
  }
  .nav{
    display: flex;
    padding-bottom: 34px;
    li{
      display: flex;
      flex: 1 0 auto;
      flex-flow: column nowrap;
      .flexCenter();
      em, span{
        display: inline-flex;
      }
      em{
        .w-h(55px, 55px);
        margin-bottom: 13px;
        background-size: 55px 55px;
      }
      span{
        .font2(24px, @titleGray, 44px);
      }
    }
  }
</style>
