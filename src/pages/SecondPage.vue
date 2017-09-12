<template>
  <div id="aa">
      <common-header></common-header>
      <Nav></Nav>
      <Second></Second>
      <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import Nav from '@/components/Nav'
import CommonFooter from '@/components/CommonFooter'
import Second from '@/components/Second'

export default {
  components: {
    CommonHeader,
    Nav ,
    CommonFooter,
    Second
  },
  created () {
    /*
      this.$http.get('/api/goods').then((data) => {
          this.items = data.body.data;
      })
    */
  }
}
</script>

<style scoped>
</style>
