<template>
  <div>
    <img
      class="m-auto d-block"
      src="https://ecjia.com.tw/demo/bs5_homework_0526/assets/hezuo.svg"
      alt="hezuo" />
    <div class="position-relative my-4">
      <div class="border border-warning"></div>
      <div 
        class="position-absolute top-0 start-50 
        translate-middle bg-white 
        text-center px-3 h3 fw-bold">贊
        助專案
      </div>
    </div>
    <form>
      <div class="mb-3">
        <label
          for="project"
          class="form-label text-dark-3">贊助方案</label>
        <select
          class="form-select border-light bg-light text-muted"
          id="project" aria-label="select project">
          <option selected="" disabled>請選擇一個方案</option>
          <option value="1">方案1</option>
          <option value="2">方案2</option>
          <option value="3">方案3</option>
        </select>
      </div>
      <div class="mb-3">
        <label
          for="name"
          class="form-label text-dark-3">收件人姓名</label>
        <input
          type="text"
          class="form-control border-light bg-light" id="name" />
      </div>
      <div class="mb-3">
        <label
          for="address"
          class="form-label text-dark-3">收件地址</label>
        <input
          type="text"
          class="form-control border-light bg-light"
          id="address" />
      </div>
      <div class="mb-3">
        <label
          for="phone"
          class="form-label text-dark-3">聯絡電話</label>
        <input
          type="text"
          class="form-control border-light bg-light"
          id="phone" />
      </div>
      <div class="mb-3">
        <label
          for="email"
          class="form-label text-dark-3">聯絡信箱</label>
        <input
          type="email" 
          class="form-control border-light bg-light" 
          :class="{'is-invalid': isInvalid === true}"
          id="email"
          v-model="email"
          required />
        <div v-if="isInvalid" :class="{'invalid-feedback': isInvalid === true}">
          請輸入正確的郵件格式
        </div>
      </div>
      <div class="mb-4 mb-md-3">
        <label
          for="payment"
          class="form-label text-dark-3">付款方式</label>
        <select
          id="payment"
          class="form-select border-light bg-light text-muted"
          aria-label="select payment">
          <option selected="">信用卡付款</option>
          <option value="2">貨到付款</option>
        </select>
      </div>
      <div class="d-grid d-lg-block">
        <button 
          type="submit"
          class=" btn btn-yellow btn-lg 
            d-lg-block m-lg-auto px-5 mt-2
            fw-bold rounded-pill">
          贊助專案
        </button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      email: '',
      isInvalid: false
    }
  },
  watch:{
    email: function() {
      const emailRule = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      
      if(this.email === '' || !emailRule.test(this.email)){
        this.isInvalid = true
      } else {
        this.isInvalid = false
      }
    }
  }
}
</script>
