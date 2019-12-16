
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
      liste:[],
      btntxt:'add'
    }
  },
  mounted () {

    if(localStorage.getItem('wishlist')){

    this.liste = JSON.parse(localStorage.getItem('wishlist'));

}
else{ this.liste =[]}
console.log(this.liste)
// if(this.liste.includes(this.product.id)){
//   this.btntxt='remove'
// }

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

            if(localStorage.getItem('wishlist')){
               this.liste = JSON.parse(localStorage.getItem('wishlist'));
          }
            this.liste.splice( this.liste.indexOf(this.product.id), 1 );
           localStorage.setItem('wishlist', JSON.stringify(this.liste))

           this.liste = JSON.parse(localStorage.getItem('wishlist'));
           console.log(this.liste)
           this.btntxt="add"

         }
         else{
             if(localStorage.getItem('wishlist')){
           this.liste = JSON.parse(localStorage.getItem('wishlist'));
         }
           this.liste.push(this.product.id)
           localStorage.setItem('wishlist', JSON.stringify(this.liste))
           this.liste = JSON.parse(localStorage.getItem('wishlist'));

           this.btntxt="remove"
         }
    }
    }
      }
</script>
