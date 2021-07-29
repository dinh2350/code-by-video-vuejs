function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

Vue.createApp({
  data() {
    return {
      nameUser: "Nguyễn Phong Hào",
      className: 33,
    };
  },
}).mount("#interpolation");

Vue.createApp({
  data() {
    return {
      ImgUrl:
        "https://cdn.baogiaothong.vn/upload/images/2021-3/article_img/2021-07-07/img-bgt-2021-unnamed-1--1625645540-width700height1050.jpg",
      linkInfo: "https://vi.wikipedia.org/wiki/Lisa_(rapper)",
    };
  },
}).mount("#bind-attribute");

Vue.createApp({
  methods: {
    taoSoNut() {
      const mangXucXac = [
        getRandomInt(1, 6),
        getRandomInt(1, 6),
        getRandomInt(1, 6),
      ];
      const soNut = mangXucXac.reduce((tong, xacXac) => (tong += xacXac), 0);
      return soNut;
    },
    renderTaiHayXiu() {
      const soNut = this.taoSoNut();
      if (soNut > 11) {
        return "Tài";
      } else {
        return "Xỉu";
      }
    },
  },
}).mount("#method");

Vue.createApp({
  data() {
    return {
      message: `<h1> Học VueJS Thật Đỉnh </h1>`,
    };
  },
}).mount("#raw-html");

Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClickMe(event) {
      console.log(event.target);
      console.log("click me");
    },
    handleIncrement(params, event) {
      console.log(event.target);
      this.count = this.count + params;
    },
    hanldeSubmit() {
      alert("submit thành công");
    },
    handleLogin() {
      console.log("handleLogin");
    },
  },
}).mount("#event");

Vue.createApp({
  data() {
    return {
      message: "",
    };
  },
  methods: {},
}).mount("#two-way-binding");

Vue.createApp({
  data() {
    return {
      count: 0,
      lastName: "Nguyễn",
      firstName: "Phong Hào",
    };
  },
  computed: {
    fullName() {
      console.log("run fullName");
      return this.lastName + " " + this.firstName;
    },
  },
  methods: {
    // getFullName() {
    //   console.log("run getFullName");
    //   return this.lastName + " " + this.firstName;
    // }, // sai vì hong thay đổi mà vẫn chạy lại làm cho chúng ta bị mất hiệu năng
    handleIncrement() {
      this.count += 1;
      this.firstName = "Phong Dinh";
    },
  },
}).mount("#computed-and-watchers");
