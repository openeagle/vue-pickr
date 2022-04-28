# Vue Pickr

`@openeagle/vue-pickr` 是基于 [Simonwep/pickr](https://github.com/Simonwep/pickr) 封装实现的适用于 vue3 的颜色选择器，

## 用法

```vue
<template>
  <div>
    <ColorPickr v-model:value="color" @update:value="handleChange" />
    <ColorPickr class="demo1" v-model:value="color" @update:value="handleChange" />
    <ColorPickr class="demo2" v-model:value="color" @update:value="handleChange" />
    <ColorPickr class="demo3" v-model:value="color" @update:value="handleChange" />
  </div>
</template>

<script>
import { ColorPickr } from '@openeagle/vue-pickr';
import '@openeagle/vue-pickr/es/index.less';
export default {
  components: {
    ColorPickr
  },
  data() {
    return {
      color: '#ff0000'
    };
  },
  methods: {
    handleChange(color) {
      console.log(color);
    }
  },
};
</script>

<style scoped>
.demo1 {
  width: 50px;
  height: 50px;
}
.demo2 {
  width: 100px;
  height: 100px;
}
.demo3 {
  width: 200px;
  height: 200px;
}
</style>
```
