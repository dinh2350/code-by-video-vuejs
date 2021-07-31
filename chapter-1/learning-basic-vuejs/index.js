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
      fullDataName: "",
    };
  },
  /**
   * watch dùng để xử lý :
   *    - theo dõi 1 data duy nhất
   */
  watch: {
    count(newValue, oldValue) {
      console.log("newValue : ", newValue);
      console.log("oldValue : ", oldValue);
      if (newValue > 10) {
        this.count = 0;
      }
    },
    lastName(newValue) {
      this.fullDataName = newValue + " " + this.firstName;
    },
    firstName(newValue) {
      this.fullDataName = this.lastName + " " + newValue;
    },
  },
  /**
   * computed dùng để xử lý :
   *    - tính toán nhiều data và cho ra một kết quả để hiển thị lên màn hình
   */
  computed: {
    fullName() {
      console.log("run fullName");
      return this.lastName + " " + this.firstName;
    },
  },
  /**
   * methods dùng để xử lý :
   *    - envents
   *    - function ( tính năng trên trang web )
   */
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

Vue.createApp({
  data() {
    return {
      active: false,
      styleForP: {
        backgroundColor: "red",
        color: "yellow",
        "font-size": "50px",
      },
      styleForText: {
        "text-align": "left",
      },
    };
  },
  methods: {
    hanldStyle() {
      this.styleForP.color = "blue";
    },
    handleActive() {
      this.active = true;
    },
  },
}).mount("#styling");

Vue.createApp({
  data() {
    return {
      isLogin: false,
      nameHero: "",
    };
  },
  methods: {
    handleLogin() {
      this.isLogin = true;
    },
    handleNameHero(nameHero) {
      this.nameHero = nameHero;
    },
  },
}).mount("#directive");
