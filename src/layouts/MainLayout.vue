<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Sistema de Gerenciamento Imobiliário
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          MENU
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Gerenciar Pessoas',
    caption: 'Físicas e Jurídicas',
    icon: 'group',
    link: '/pessoas'
  },
  {
    title: 'Gerenciar Imóveis',
    caption: 'Rurais e Urbanos',
    icon: 'other_houses',
    link: '/imoveis',
    disable: true
  },
  {
    title: 'Gerenciar Acessos',
    caption: 'Usuários e Perfis',
    icon: 'manage_accounts',
    link: '/accounts',
    disable: true
  },
  {
    title: 'Github',
    caption: 'github.com/marcelomoura',
    icon: 'code',
    link: 'https://github.com/marcelogmoura'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
