<template>
  <Alert type="info"><span class="mie12">👌🏽</span>AgnosticUI — Vue 3</Alert>
  <div id="vue" class="counter">
    <Button mode="secondary" isRounded @click="subtract()">-</Button>
    <pre>{{ count }}</pre>
    <Button mode="primary" isRounded @click="add()">+</Button>
  </div>
</template>
<script setup>
import { ref, onMounted, useCssModule } from "vue";
import "agnostic-vue/dist/common.properties.min.css";
import "agnostic-vue/dist/common.resets.min.css";
import "agnostic-vue/dist/common.utilities.min.css";
import "agnostic-vue/dist/opinions.min.css";
// Components CSS
import "agnostic-vue/dist/index.css";
import {
  Alert,
  Button,
} from "agnostic-vue";

const count = ref(0);
const add = () => (count.value = count.value + 1);
const subtract = () => (count.value = count.value - 1);
</script>