<template>
  <div>
    <b-modal id="modalku" title="Edit Profile" hide-footer>
      <p>sadklasmdkasm</p>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      // edit: {}
    }
  },
  methods: {
    processFile (event) {
      this.image = event.target.files[0]
      // this.sendData()
    },
    sendData () {
      this.edit.newImage = this.image
      // console.log(this.bio_users)
      this.onUpdateData(this.edit)
        .then((response) => {
          alert(response)
          window.location.reload()
        })
        .catch((err) => {
          alert(err)
        })
    },
    ...mapActions({
      onUpdateData: 'sUsers/updateData'
    })
  },
  computed: {
    ...mapGetters({
      edit: 'sUsers/getOneUser'
    })
  }
}
</script>
