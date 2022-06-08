<script setup>

import { ref } from 'vue'

const emit = defineEmits(['change'])

const counter = ref(props.min || 0)

const props = defineProps({
  'min': {
    default: 0,
    type: Number
  },
  'max': {
    default: 5,
    type: Number
  }
})


  function decrease () {
    if (counter.value > props.min) {
      counter.value--
    emit('change', counter.value)
    }
  }

  function increase () {
    if (counter.value < props.max) {
      counter.value++
    
    emit('change', counter.value)
    }
  }


</script>

<template>
  <div data-testid="counter" class="counter">
    <button data-testid="decrement" @click="decrease">
      <i-mdi-minus-circle />
    </button>
    <span>{{ counter }}</span>
    <button data-testid="increment" @click="increase">
      <i-mdi-plus-circle />
    </button>
  </div>
</template>

<style scoped lang="scss">
.counter {
  display: inline-flex;
  font-size: 1.25rem;
  place-content: center center;
  border: 1px solid indigo;
  border-radius: 0.25rem;
  height: 100%;
  gap: 1rem;

  > * {
    display: inline-flex;
    align-items: center;
    color: indigo;
  }

  > button {
    flex-grow: 1;
    display: flex;
    place-content: center center;
  }
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
}

span {
  font-family: Inter, sans-serif;
}
</style>