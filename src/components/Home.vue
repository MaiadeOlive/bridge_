<template>
  <v-card>
      <v-container>
        <v-row>  

        <!-- CARD CALCULATE -->
          <v-col cols="6">
            <v-card
              max-width="350"
              height="340"
              class="mx-auto"
            >
              <v-list-item>
                <v-list-item-avatar color="deep-purple lighten-3">
                   <v-img
                    src="../assets/arrow.svg">
                   ></v-img>
                </v-list-item-avatar>

              <!-- HEADER CARD CALCULATE -->
                <v-list-item-content>
                  Cálculo
                  <v-list-item-title class="headline"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>  
              <v-img
                src="../assets/mathback2.jpg"
                height="160"
              ></v-img>
            
            <!-- INPUT NUM -->
              <v-col cols="12">
                <v-flex xs12 sm6 md3>
                  <v-text-field
                    id="numero"
                    v-model="num"
                    color="deep-purple darken-3"
                    label="Número"
                    height="15"
                    outline
                  ></v-text-field>   
                </v-flex>
              </v-col>
              <v-card-actions>
                <v-spacer></v-spacer>

              <!-- CALCULATE BTN -->
                <v-btn
                  @click="sendNum()"
                  text
                  color="deep-purple accent-4"
                >Calcular o número
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

      <!-- CARD RESPONSE -->
        <v-col cols="6">
          <v-card
            max-width="350"
            height="340"
            class="mx-auto"
          >
            <v-list-item>
              <v-list-item-avatar color="deep-purple lighten-3">
                  <v-img
                  src="../assets/check.svg">
                  ></v-img>
              </v-list-item-avatar>

            <!-- HEADER CARD RESPONSE -->
              <v-list-item-content>
                Resposta
                <v-list-item-title class="headline"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>  
              <v-img
                src="../assets/mathback2.jpg"
                height="160"
              ></v-img>

              <!-- RESPONSE -->
              <v-card-text> 
                <v-alert
                  v-if="response!=true"
                  color="#9575cd"
                  :value="true"
                  height="90"
                >
                {{resposta}}
                </v-alert>            
              </v-card-text>
            </v-card>
          </v-col>  
        </v-row>
      </v-container>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  created () {
    this.$store.state('calculate')
  },
  computed: {
    ...mapGetters([
      'resposta'
    ])
    },
  data () {
    return {
      baseUrl: 'http://127.0.1:5000/calculate/',
      urlRoute:'',
      num: null,
  }
  },
  methods: {
    mountUrlRouterPost() {
      this.urlRoute = this.baseUrl + this.num 
      console.log('1',this.urlRoute)  
    },
    sendNum() {
      this.mountUrlRouterPost()
      this.$store.dispatch('calculate', this.urlRoute)
    }
}
}
</script>

<style>

</style>

