<template>
  <div>ユーザー登録
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="email"
          label="メールアドレス"
        />
        <v-text-field
          v-model="password"
          label="パスワード"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn
          color="primary"
          @click="signUp"
        >ユーザー登録する</v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn
          color="secondary"
          to="./login"
        >ログインページ</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods:{
    signUp(){
      const auth = getAuth(this.$firebase)
      createUserWithEmailAndPassword(auth, this.email, this.password)
      .then( userCredential => {
        console.log( userCredential.user )
        console.log('ユーザー登録ok!')
      })
      .catch( e => {
        alert(e.message)
        console.error('error:', e)
      })
    }
  }
}
</script>

<style>

</style>