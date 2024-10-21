<script setup>
import { ref, watch } from "vue"
import { VueFinalModal, ModalsContainer } from 'vue-final-modal'

let urlsText = ref(``)
let urlsArr = ref([])
let handleUrlsInput = (e) => {
  urlsText.value = e.target.value
  updateUrlArr()
}
let favicon = new Favico({
  animation: 'fade'
});
let updateUrlArr = () => {
  urlsArr.value = urlsText.value.split("\n").filter(str => str !== '');
}

watch(urlsArr, (count) => {
  count.length > 0 ? favicon.badge(count.length) : favicon.reset()
})
let imageViewShow = ref(false)
let curImageSrc = ref('')
let curImageIndex = ref(0)
let handleImageItemClick = (src, index) => {
  curImageSrc.value = src
  curImageIndex.value = index
  imageViewShow.value = true
}
</script>
<template>
  <div class="title">URL 输入</div>
  <div class="textarea-wrap">
    <textarea class="urls-textarea" :value="urlsText" @input="handleUrlsInput" placeholder="复制 URL 到此处"></textarea>
  </div>
  <div v-if="urlsArr.length > 0" class="url-count">Total：{{ urlsArr.length }} </div>
  <div class="title">图片</div>
  <div class="img-box">
    <div class="img-item" v-for="(item,index) in urlsArr" @click="handleImageItemClick(item, index)" :key="item">
      <img :src="item" alt="">
    </div>
  </div>
  <VueFinalModal v-model="imageViewShow" class="image-view-modal">
    <div class="image-view-content">
      <img :src="curImageSrc" alt="">
    </div>
    <div class="link-box">
      <span>第 {{ curImageIndex }} 张图片</span>
      <a target="_blank" :href="curImageSrc">点击打开图片=></a>
    </div>
  </VueFinalModal>
</template>
