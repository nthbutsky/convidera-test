<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <img src="../assets/logo.jpg" alt="Logo" />
        <p class="header__logo-text">Inform. Connect. Inspire.</p>
      </div>

      <div class="header__nav">
        <div
          class="header__link-lang-wrapper"
          :class="{ 'header__link-lang-wrapper_active': isMobileMenu }"
        >
          <a class="header__link" href="#">Über uns</a>
          <a class="header__link" href="#">Redaktion</a>
          <button class="header__lang" disabled>de</button>
          <button class="header__lang">en</button>
        </div>
        <div
          class="header__nav-menu-btn"
          :class="{ 'header__nav-menu-btn_active': isMobileMenu }"
          @click="showMobileMenu()"
        >
          <span class="header__nav-menu-btn-bar"></span>
          <span class="header__nav-menu-btn-bar"></span>
          <span class="header__nav-menu-btn-bar"></span>
        </div>
        <ul
          class="header__nav-list"
          :class="{ 'header__nav-list_active': isMobileMenu }"
        >
          <li class="header__nav-item">
            <i class="fa fa-search"></i><span>|</span>
          </li>
          <li class="header__nav-item">design+lifestyle<span>|</span></li>
          <li class="header__nav-item">trends<span>|</span></li>
          <li class="header__nav-item">infodelight<span>|</span></li>
          <li class="header__nav-item">smart living</li>
        </ul>
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
export default {
  data() {
    return {
      isMobileMenu: false,
    };
  },

  methods: {
    showMobileMenu() {
      this.isMobileMenu = !this.isMobileMenu;
    },
  },
};
</script>

<style lang="scss">
// HEADER and NAV section

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 2.5rem;

  &__logo {
    padding: 0 0 0.9375rem 0;

    &-text {
      font-weight: 500;
      font-size: 0.9063rem;
    }
  }

  &__link-lang-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.9375rem 0 0.9375rem 0.9375rem;
  }

  &__link {
    text-decoration: none;
    color: hsl(0, 0%, 20%);
    padding: 0.625rem;
    margin: 0 0.625rem;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  &__lang {
    height: 1.875rem;
    width: 1.875rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  }

  &__nav-menu-btn {
    display: none;
    float: right;
    position: absolute;
    z-index: 3;
    top: 1.0625rem;
    right: 1.25rem;

    &-bar {
      display: block;
      width: 1.875rem;
      height: 0.25rem;
      margin: 0.625rem 0;
      transition: all 0.3s ease-in-out;
      background-color: hsl(0, 0%, 20%);
    }
  }

  &__nav-list {
    display: flex;
  }

  &__nav-item {
    list-style: none;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0.625rem 0 1.25rem 0.9375rem;
    border-top: 10px solid transparent;
    transition: all 0.3s ease-in-out;

    &:hover {
      border-top: 0.625rem solid hsl(0, 0%, 20%);
      cursor: pointer;
    }

    i {
      transform: rotate(90deg);
      font-size: 1.25rem;
      cursor: pointer;
    }

    span {
      padding-left: 0.9375rem;
    }
  }
}

// MAIN section

.main {
  width: 100%;

  &__grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    column-gap: 0.125rem;
    row-gap: 0.125rem;
    color: hsl(0, 0%, 100%);
  }

  &__grid-item-a {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    position: relative;
    display: flex;

    &:hover .main__grid-item-a-img {
      transform: scale(0.99);
      filter: brightness(0.5);
    }

    &-text-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      text-align: center;
      cursor: pointer;
    }

    &-text-top {
      text-transform: uppercase;
    }

    &-text-center {
      font-size: 1.875rem;
      margin: 2.5rem 0;
    }

    &-img {
      width: 100%;
      height: 100%;
      filter: brightness(0.8);
      transition: all 0.3s ease-in-out;
    }
  }

  &__grid-item-b {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
    position: relative;
    background: hsl(0, 0%, 20%);

    &:hover .main__grid-item-b-img {
      transform: scale(0.99);
      filter: brightness(0.5);
    }

    &-text-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 0;
      padding: 15%;
      cursor: pointer;
    }

    &-text-top {
      font-size: 2vw;
    }

    &-text-center {
      margin: 2.5rem 0;
      line-height: 2;
    }

    &-btn {
      background: none;
      border: 0.125rem solid hsl(0, 0%, 100%);
      color: hsl(0, 0%, 100%);
      padding: 0.625rem;
      width: 12.5rem;
      text-transform: uppercase;
      margin: 0 0 1.25rem 0;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: hsl(0, 0%, 100%);
        color: hsl(0, 0%, 20%);
        cursor: pointer;
      }
    }
  }

  &__grid-item-c {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    position: relative;

    &:hover .main__grid-item-c-img {
      transform: scale(0.99);
      filter: brightness(0.5);
    }

    &-img {
      width: 100%;
      height: 100%;
      filter: brightness(0.8);
      transition: all 0.3s ease-in-out;
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
      cursor: pointer;
    }

    &-text-top {
      text-transform: uppercase;
    }

    &-text-center {
      font-size: 1.875rem;
      margin: 2.5rem 0;
    }
  }

  &__grid-item-d {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
    position: relative;

    &:hover .main__grid-item-d-img {
      transform: scale(0.99);
      filter: brightness(0.5);
    }

    &-img {
      width: 100%;
      height: 100%;
      filter: brightness(0.8);
      transition: all 0.3s ease-in-out;
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
      cursor: pointer;
    }

    &-text-top {
      text-transform: uppercase;
    }

    &-text-center {
      font-size: 1.875rem;
      margin: 2.5rem 0;
    }
  }
}

@media (max-width: 1280px) {
  .main__grid-item-b-text-center {
    line-height: 1.5;
    margin: 1rem 0;
  }

  .main__grid-item-b-btn {
    margin: 0 0 0.625rem 0;
  }
}

@media (max-width: 960px) {
  .main__grid-item-a-text-center,
  .main__grid-item-c-text-center,
  .main__grid-item-d-text-center {
    font-size: 1.25rem;
    margin: 1.25rem;
  }

  .main__grid-item-b-text-center {
    line-height: 1.5;
    margin: 1rem 0;
    font-size: 12px;
  }

  .main__grid-item-b-btn {
    width: 7.5rem;
    padding: 0.3125rem;
    font-size: 0.5rem;
  }
}

@media (max-width: 825px) {
  .header__nav {
    margin: 10px 0 0 0;
    float: none;
    text-align: center;
  }

  .header__nav-list {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: none;
    flex-direction: column;
    justify-content: center;
    background-color: hsla(0, 0%, 20%, 0.9);
    color: hsl(0, 0%, 100%);
    height: 100vh;
    width: 100vw;
    transition: all 0.3s ease-in-out;

    &_active {
      display: flex;
    }
  }
  .header__nav-item {
    margin: 0.625rem 0;
    font-size: 1.5rem;
  }
  .header__nav-menu-btn {
    display: block;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &_active {
      top: 1rem;
    }

    &_active .header__nav-menu-btn-bar:nth-child(2) {
      opacity: 0;
    }
    &_active .header__nav-menu-btn-bar:nth-child(1) {
      transform: translateY(14px) rotate(45deg);
      background-color: hsl(0, 0%, 100%);
    }
    &_active .header__nav-menu-btn-bar:nth-child(3) {
      transform: translateY(-14px) rotate(-45deg);
      background-color: hsl(0, 0%, 100%);
    }
  }

  .header__nav-item span {
    display: none;
  }

  .header__link-lang-wrapper {
    display: none;

    &_active {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      flex-direction: row-reverse;

      a {
        color: white;
      }
    }
  }

  .header__logo img {
    padding-top: 1.5625rem;
  }
}

@media (max-width: 768px) {
  .main__grid-item-a-text-center,
  .main__grid-item-c-text-center,
  .main__grid-item-d-text-center {
    font-size: 0.9375rem;
    margin: 1.25rem;
  }

  .main__grid-item-a-text-top,
  .main__grid-item-c-text-top,
  .main__grid-item-d-text-top {
    font-size: 0.8rem;
  }

  .main__grid-item-a-text-bottom,
  .main__grid-item-c-text-bottom,
  .main__grid-item-d-text-bottom {
    font-size: 0.7rem;
  }

  .main__grid-item-b-text-wrapper {
    padding: 1rem;
  }

  .main__grid-item-b-text-top {
    font-size: 1rem;
  }

  .main__grid-item-b-text-center {
    line-height: 1.2;
    margin: 0.5rem 0;
    font-size: 0.7rem;
  }

  .main__grid-item-b-btn {
    width: 7.5rem;
    padding: 0.4375rem;
    font-size: 0.6rem;
  }
}

@media (max-width: 540px) {
  .main__grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    row-gap: 0.125rem;
    color: hsl(0, 0%, 100%);
  }
  .main__grid-item-a {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .main__grid-item-b {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 3;
    height: 200px;
  }

  .main__grid-item-c {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .main__grid-item-d {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  .header__link {
    padding-right: 0;
    padding-left: 0;
  }
}
</style>
