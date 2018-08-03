<template>
  <div class="card-con">
    <detail-card></detail-card>
    <vote-card></vote-card>
    <vote-card></vote-card>
  </div>
</template>

<script>
import detailCard from './indexCard/detailCard'
import voteCard from './indexCard/voteCard'

export default {
  name: 'homeCard',
  components: {
    detailCard,
    voteCard
  }
}
</script>

<style scoped>

</style>
