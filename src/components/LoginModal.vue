<template>
  <div class="modal" tabindex="-1" id="login">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold">登入</h5>
          <button 
            type="button" 
            class="btn-close"
            data-bs-dismiss="modal" 
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <label for="mail" class="form-label">帳號</label>
            <input type="email" id="mail" class="form-control">
            <label for="password" class="form-label">密碼</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control mb-2"
              autocomplete="off"
            >
            <p class="text-muted">
              忘記密碼？
            </p>
            <button class="btn btn-yellow w-100 rounded-pill mb-3 fw-bold">登入</button>
          </form>
          <div class="position-relative my-4">
            <div class="progress" style="height: 1px;">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100">
              </div>
            </div>
            <div 
              class="position-absolute top-0 start-50 
              translate-middle bg-white px-2
              text-center text-muted">
              還沒有帳號？<a href="#" class="link-danger ms-1">註冊一個帳號</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
