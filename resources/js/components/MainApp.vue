<template>

    <div>
      <PublicLayout v-if="this.$store.getters.currentUser === null"></PublicLayout>
      <AdminLayout v-if="this.$store.getters.currentUser !== null && this.$store.getters.currentUser.role === 1"></AdminLayout>
      <UserLayout v-if="this.$store.getters.currentUser !== null && this.$store.getters.currentUser.role === 2"></UserLayout>
    </div>

</template>

<script>
import AdminLayout from "../components/Layout/AdminLayout";
import PublicLayout from "../components/Layout/PublicLayout";
import UserLayout from "../components/Layout/UserLayout";

export default {
  data() {
    return {
      role: ""
    };
  },
  components: {
    AdminLayout,
    PublicLayout,
    UserLayout
  },
  mounted() {}
};
</script>