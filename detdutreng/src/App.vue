<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

import { onMounted, ref, } from 'vue';
const items = ref([
            {
                label: 'Fjell',
                icon: 'pi pi-fw pi-home',
                to: '/mountain'
            },
            {
                label: 'Sjø',
                icon: 'pi pi-fw pi-calendar',
                to: '/sea'
            },
               {
                label: 'Kart',
                icon: 'fa-solid fa-map',
                to: '/map'
            }
        ]);


</script>

<template>
 <div >
    
            <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/mountain">
        <font-awesome  class="nav-link" icon="mountain" href="/mountain" />
    </a>
  </li>
  <li class="nav-item">
     <a class="nav-link active" aria-current="page" href="/sea">

   <font-awesome  class="nav-link" icon="water" href="/sea" />
     </a>

  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/map">
  <font-awesome  class="nav-link" icon="map" href="/map" />

    </a>
  
  </li>

  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="/weather">
  <font-awesome  class="nav-link" icon="cloud" href="/weather" />

    </a>
  
  </li>
  
</ul>
            <router-view/>
        
     
  </div>



</template>

<style>
@import "@/assets/base.css";
@import 'primevue/resources/themes/saga-blue/theme.css';   
@import 'primevue/resources/primevue.min.css';
@import 'primeicons/primeicons.css';
#app {
  

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* @media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
