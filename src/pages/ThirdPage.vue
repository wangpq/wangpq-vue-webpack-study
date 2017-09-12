<template>
  <div id="aa">
      <common-header></common-header>
      <Nav></Nav>
      <Test></Test>
      <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import Nav from '@/components/Nav'
import Test from '@/components/Test'
import CommonFooter from '@/components/CommonFooter'

export default {
  components: {
    CommonHeader,
    Nav ,
    Test , 
    CommonFooter
  }
}
</script>

<style scoped>
</style>
