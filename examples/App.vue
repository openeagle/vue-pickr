<template>
  <div>
    <div>{{ color }}</div>
    <div>
      <Pickr v-model:value="color" />
    </div>
    <div>
      <Pickr class="demo1" v-model:value="color" />
    </div>
    <div>
      <Pickr class="demo2" v-model:value="color" />
    </div>
    <div>
      <Pickr class="demo3" v-model:value="color" />
    </div>
    <div>
      <Pickr class="demo4" v-model:value="color">
        <template #default="color">
          <div>
            {{ color }}
          </div>
        </template>
      </Pickr>
    </div>
  </div>
</template>

<script>
import Pickr from '../src/Pickr';
export default {
  components: {
    Pickr
  },
  data() {
    return {
      color: '#ff0000'
    };
  }
};
</script>

<style scoped>
.demo1 {
  font-size: 20px;
}
.demo2 {
  font-size: 30px;
}
.demo3 {
  font-size: 50px;
}
</style>
