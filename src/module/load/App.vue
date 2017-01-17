<template >
  <div id="container">

      <!-- route outlet -->
      <!-- component matched by the route will render here -->

      <transition enter-active-class="animated" leave-active-class="animated">
          <router-view></router-view>
      </transition>
  </div>
</template>
<script>



</script>
