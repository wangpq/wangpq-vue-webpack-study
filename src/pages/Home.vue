<template>
  <div id="aa">
      <common-header></common-header>
      <Nav></Nav>

      <img src="../assets/images/logo.png">

      <welcome></welcome>
      <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader'
import Nav from '@/components/Nav'
import CommonFooter from '@/components/CommonFooter'
import Welcome from '@/components/Welcome'

export default {
  components: {
    CommonHeader,
    Nav ,
    CommonFooter,
    Welcome
  }
}
</script>

<style scoped>
</style>
