<template>
  <div>
    <p>
      <q-form ref="formPessoa" @submit="cadastrar" class="bg">

      </q-form>
      Teste template
    </p>
  </div>

</template>

<script>

import { ref } from 'vue'

export default {
  name: 'CreateEditPessoa',
  setup () {
    const pessoa = ref({
      nome: null
    })
    return {
      pessoa
    }
  },
  methods: {
    cadastrar () {
      console.log('cadastrar')
    }
  }
}
</script>
