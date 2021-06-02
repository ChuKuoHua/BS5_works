<template>
  <div>
    <Header/>
    <router-view/>
    <LoginModal></LoginModal>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LoginModal from '@/components/LoginModal.vue'

export default {
  components: {
    Header,
    Footer,
    LoginModal
  }
}
</script>
