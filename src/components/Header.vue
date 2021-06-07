<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light border-bottom border-warning border-4">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            class="logo-img"
            src="https://hexschool.github.io/boootstrap5WebLayout/assets/logo.jpg"
            alt="Logo">      
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-secondary-600" aria-current="page" href="#">關於</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">挖寶</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" aria-current="page" href="#">我有個大膽的想法</a>
            </li>
          </ul>
          <div class="d-flex justify-content-end">
            <button
              class="btn btn-yellow me-3 rounded-pill px-4 fw-bolder" 
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#login"
            >登入</button>
            <button
              class="btn btn-outline-secondary rounded-pill px-4 fw-bolder"
              type="button">註冊</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
