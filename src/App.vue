<template>
  <div>
    <input type="text" v-model="adi" />
    <input type="text" v-model="soyadi" />
    <MyBtn @click="Add" />
    <p v-for="index in $store.state.uye.uyeAd" :key="index.id">
      {{ index.ad }}
    </p>
    <!-- <button @click="uyee">deneme</button> -->
  </div>
</template>

<script>
import MyBtn from "./components/MyBtn.vue";
export default {
  name: "App",
  data() {
    return {
      adi: "",
      soyadi: "",
      a: 0,
      msg: [
        {
          id: 2,
          ad: "",
          soyad: "",
        },
      ],
    };
  },
  components: {
    MyBtn,
  },
  methods: {
    // uyee() {
    //   this.msg.id = this.a++;
    //   this.msg.ad = this.adi;
    //   this.msg.soyad = this.soyadi;
    //   alert(this.msg.ad);
    // },
    Add() {
      this.msg[this.id].id = this.a++;
      this.msg[this.id].ad = this.adi;
      this.msg[this.id].soyad = this.soyadi;
      this.$store.commit("uyeEkle", this.msg[this.id]);
    },
  },
};
</script>

<style></style>
