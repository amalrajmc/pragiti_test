
<template>
  <div class="card-footer-item">
    <button  class="btn button" style="width:100%;"  @click.prevent="unFavorite(product)"  >{{btntxt}} </button>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {
      liste:'',
      btntxt:'add'
    }
  },
  mounted () {
    this.liste = JSON.parse(localStorage.getItem('wishlist'));
if(this.liste.includes(this.product.id)){
  this.btntxt='remove'
}

  },
  computed: {
    isFavorite () {
        return this.favorited;

    }},
    methods:{
      favorite (post) {

        this.isFavorited=!this.isFavorited;
      },

      unFavorite (post) {

         if(this.liste.includes(this.product.id)){
           alert(1)
           this.liste = JSON.parse(localStorage.getItem('wishlist'));
            console.log(this.liste)
            this.liste.splice( this.liste.indexOf(this.product.id), 1 );

           localStorage.setItem('wishlist', JSON.stringify(this.liste))
           this.liste = JSON.parse(localStorage.getItem('wishlist'));
           console.log(this.liste)
           this.btntxt="add"

         }
         else{
           alert(2)
           this.liste = JSON.parse(localStorage.getItem('wishlist'));
           this.liste.push(this.product.id)
           localStorage.setItem('wishlist', JSON.stringify(this.liste))
           this.liste = JSON.parse(localStorage.getItem('wishlist'));
           console.log(this.liste)
           this.btntxt="remove"
         }
    }
    }
      }
</script>
