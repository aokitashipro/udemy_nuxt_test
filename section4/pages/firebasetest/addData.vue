<template>
  <div>
    <v-btn @click="addData">追加</v-btn>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } 
from 'firebase/firestore'

export default {
  data(){
    return {
      id: '001',
      title: 'テスト'
    }
  },
  methods:{
    async addData(){
      try {
        const db = getFirestore(this.$firebase)
        const docRef = await addDoc(collection(db, 'tasks'), {
          id: this.id,
          title: this.title
        })
        console.log('追加したデータのID:', docRef.id)
      } catch (e){
        console.error('error:', e)
      }
    }
  }
}
</script>

<style>

</style>