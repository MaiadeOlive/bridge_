<template>
    <v-app-bar
        app
        color="deep-purple lighten-3"
        > 
        <div class="d-flex align-center">
            <span class="mr-1">CRYPTO TURTLE</span>
        </div>
        <v-spacer></v-spacer>
        <div>
            <v-img
            height="50px"
            width="50px"
            src="../assets/animal.png">
            </v-img>
        </div>
    </v-app-bar>
</template>

<script>

export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>