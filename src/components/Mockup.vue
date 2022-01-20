<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <img src="../assets/logo.jpg" alt="Logo" />
        <p class="header__logo-text">Inform. Connect. Inspire.</p>
      </div>
      <div class="header__control">
        <div class="header__link-lang-wrapper">
          <a class="header__link" href="#">Über uns</a>
          <a class="header__link" href="#">Redaktion</a>
          <button class="header__lang" disabled>de</button>
          <button class="header__lang">en</button>
        </div>
        <div class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <i class="fa fa-search"></i><span>|</span>
            </li>
            <li class="header__nav-item">design+lifestyle<span>|</span></li>
            <li class="header__nav-item">trends<span>|</span></li>
            <li class="header__nav-item">infodelight<span>|</span></li>
            <li class="header__nav-item">smart living</li>
          </ul>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="main__grid-container">
        <div class="main__grid-item-a">
          <img
            src="../assets/img-01.jpg"
            alt=""
            class="main__grid-item-a-img"
          />
          <div class="main__grid-item-a-text-wrapper">
            <p class="main__grid-item-a-text-top">
              | design+lifestyle | smart living |
            </p>
            <p class="main__grid-item-a-text-center">
              Was hilft mir, Energie zu sparen und <br />
              Spaß zu haben, bei mir zu Hause?
            </p>
            <p class="main__grid-item-a-text-bottom">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              <br />
              eiusmod tempor incididunt ut dolor in reprehenderit in quia...
            </p>
          </div>
        </div>
        <div class="main__grid-item-b">
          <div class="main__grid-item-b-text-wrapper">
            <p class="main__grid-item-b-text-top">
              A place called Inspiration.
            </p>
            <p class="main__grid-item-b-text-center">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam voluptatem.
            </p>
            <button class="main__grid-item-b-btn">Über die Autoren</button>
            <button class="main__grid-item-b-btn">Über das magazin</button>
          </div>
        </div>
        <div class="main__grid-item-c">
          <img
            src="../assets/img-02.jpg"
            alt=""
            class="main__grid-item-c-img"
          />
          <div class="main__grid-item-c-text-wrapper">
            <p class="main__grid-item-c-text-top">
              | design+lifestyle | smart living |
            </p>
            <p class="main__grid-item-c-text-center">
              Was hilft mir, Energie zu sparen und <br />
              Spaß zu haben, bei mir zu Hause?
            </p>
            <p class="main__grid-item-c-text-bottom">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              <br />
              eiusmod tempor incididunt ut dolor in reprehenderit in quia...
            </p>
          </div>
        </div>
        <div class="main__grid-item-d">
          <img
            src="../assets/img-03.jpg"
            alt=""
            class="main__grid-item-d-img"
          />
          <div class="main__grid-item-d-text-wrapper">
            <p class="main__grid-item-d-text-top">
              | design+lifestyle | smart living |
            </p>
            <p class="main__grid-item-d-text-center">
              Was hilft mir, Energie zu sparen und <br />
              Spaß zu haben, bei mir zu Hause?
            </p>
            <p class="main__grid-item-d-text-bottom">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              <br />
              eiusmod tempor incididunt ut dolor in reprehenderit in quia...
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
// header and nav section
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 40px;

  &__logo {
    padding: 0 10px 15px 0;

    &-text {
      font-weight: 500;
      font-size: 0.9063rem;
    }
  }

  &__control {
  }

  &__link-lang-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 15px 0;
  }

  &__link {
    text-decoration: none;
    color: #333333;
    padding: 10px;
  }

  &__lang {
    height: 30px;
    width: 30px;
    text-transform: uppercase;
    font-weight: bold;
  }

  &__nav {
  }

  &__nav-list {
    display: flex;
  }

  &__nav-item {
    list-style: none;
    text-transform: uppercase;
    font-weight: 500;
    padding: 10px 0 20px 15px;

    i {
      transform: rotate(90deg);
      font-size: 20px;
    }

    span {
      padding-left: 15px;
    }
  }
}
// main section
.main {
  width: 100%;

  &__grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    column-gap: 3px;
    row-gap: 3px;
    color: white;
  }

  &__grid-item-a {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    position: relative;
    display: flex;

    &-text-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      text-align: center;
    }

    &-text-top {
      text-transform: uppercase;
    }

    &-text-center {
      font-size: 30px;
      margin: 40px 0;
    }

    &-img {
      width: 100%;
      height: 100%;
      filter: brightness(0.8);
    }
  }

  &__grid-item-b {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
    position: relative;
    background: #323232;

    &-text-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 0;
      padding: 40px;
    }

    &-text-top {
      font-size: 30px;
    }

    &-text-center {
      margin: 40px 0;
      line-height: 2;
    }

    &-btn {
      background: none;
      border: 2px solid white;
      color: white;
      padding: 10px;
      width: 200px;
      text-transform: uppercase;
      margin: 0 0 10px 0;
    }
  }

  &__grid-item-c {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    position: relative;

    &-img {
      width: 100%;
      height: 100%;
      filter: brightness(0.8);
    }

    &-text-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
    }

    &-text-top {
      text-transform: uppercase;
    }

    &-text-center {
      font-size: 30px;
      margin: 40px 0;
    }
  }

  &__grid-item-d {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
    position: relative;

    &-img {
      width: 100%;
      height: 100%;
      filter: brightness(0.8);
    }

    &-text-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
    }

    &-text-top {
      text-transform: uppercase;
    }

    &-text-center {
      font-size: 30px;
      margin: 40px 0;
    }
  }
}
</style>
