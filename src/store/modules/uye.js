export default {
  state: {
    uyeAd: [
      {
        id: 1,
        ad: "Ali",
        soyad: "Yilmaz",
      },
    ],
  },
  mutations: {
    uyeEkle(state, payload) {
      state.uyeAd.push(payload);
    },
  },
};
