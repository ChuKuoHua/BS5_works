<template>
<div>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item ls-1 mb-3">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button collapsed ls-1 text-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne">
          <span
            class="p-1 me-2 bg-yellow fw-bolder fz-10"
          >Q1</span>
          影片拍完之後可以編輯嗎？
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        <div class="accordion-body lh-lg text-secondary-3">
          可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
        </div>
      </div>
    </div>
    <div class="accordion-item ls-1 mb-3">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed ls-1 text-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo">
          <span 
            class="p-1 me-2 bg-yellow fw-bolder">Q2</span>
          有提供保固或維修服務嗎？
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample">
        <div class="accordion-body lh-lg text-secondary-3">
          提供產品售後服務，對產品本體(不含配件、線材)提供二年保固服務。
          產品因意外或人為不當使用或未經授權維修等非依使用手冊使用而造成產品損壞者，
          則不在保固範圍之內，得向客戶酌收產品維修服務費用。
        </div>
      </div>
    </div>
    <div class="accordion-item ls-1 mb-3">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed ls-1 text-dark"
          type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree">
          <span
            class="p-1 me-2 bg-yellow fw-bolder">Q3</span>
            補充包底片要去哪裡購買呢？
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample">
        <div class="accordion-body lh-lg text-secondary-3">
          本產品可以兼容 i-type 及 600
          相片，各大網路平台皆有販售。
        </div>
      </div>
    </div>
    <div class="accordion-item ls-1 mb-3">
      <h2 class="accordion-header" id="headingFour">
        <button
          class="accordion-button collapsed ls-1 text-dark"
          type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour">
          <span
            class="p-1 me-2 bg-yellow fw-bolder">Q4</span>
          印出來的拍立得照片需要充電嗎？
        </button>
      </h2>
      <div
        id="collapseFour"
        class="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample">
        <div class="accordion-body lh-lg text-secondary-3">
          不用，取出後稍微搖晃，相片與空氣接觸數秒後便會產生圖像顏色。
        </div>
      </div>
    </div>
    <div class="accordion-item ls-1 mb-3">
      <h2 class="accordion-header" id="headingFive">
        <button
          class="accordion-button collapsed ls-1 text-dark"
          type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive">
          <span
            class="p-1 me-2 bg-yellow fw-bolder">Q5</span>
          運送方式及付款方式有哪些呢？
        </button>
      </h2>
      <div
        id="collapseFive"
        class="accordion-collapse collapse"
        aria-labelledby="headingFive"
        data-bs-parent="#accordionExample">
        <div class="accordion-body lh-lg text-secondary-3">
          可以選擇超商取貨及宅配，付款方式有銀行轉帳及信用卡支付。
        </div>
      </div>
    </div>
    <div class="accordion-item ls-1 mb-3">
      <h2 class="accordion-header" id="headingSix">
        <button
          class="accordion-button collapsed ls-1 text-dark"
          type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseSix"
          aria-expanded="false"
          aria-controls="collapseSix">
          <span
            class="p-1 me-2 bg-yellow fw-bolder">Q6</span>
          退換貨方式及規則
        </button>
      </h2>
      <div
        id="collapseSix"
        class="accordion-collapse collapse"
        aria-labelledby="headingSix"
        data-bs-parent="#accordionExample">
        <div class="accordion-body lh-lg text-secondary-3">
          因商品封條多為一次性包裝，商品退貨時必須回復原狀，亦即必須回復至您收到商品時的原始狀態，
          且會視回收的商品狀態另外酌收額外的整新費用，請您務必確認有購買需求後再行拆封，感謝您的配合。
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* global $  */
export default {
  mounted(){
    $('.accordion-item').click(function() {
        $(this).addClass('active');
        $(this).nextAll().removeClass('active');
        $(this).prevAll().removeClass('active');
    })
  }
}
</script>
