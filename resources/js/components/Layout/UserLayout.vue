<template >
    <div>
        <userMenu></userMenu>
         <router-view></router-view>
    </div>

</template>

<script>

import userMenu from "../menu/userMenu";

export default {
  data() {
    return {
     
    };
  },
  components: {
    userMenu,
    
  },
  mounted() {}
};
</script>