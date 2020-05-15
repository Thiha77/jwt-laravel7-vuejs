<template>
    <div>
        <publicMenu></publicMenu>  
        <router-view></router-view>
    </div>
</template>

<script>

import publicMenu from "../menu/publicMenu";

export default {
  data() {
    return {
     
    };
  },
  components: {
    publicMenu,
    
  },
  mounted() {}
};
</script>