const app = Vue.createApp({
    
    data(){
        return{
            url:"www.youtube.com",
            showBooks:true,
            books: [
                {title:'name of wind', author:'patric rothfuss', img:'assets/1.jpg', isFav:true},
                {title:'the way of kings', author:'brandon sanderson', img:'assets/2.jpg', isFav:false},
                {title:'the final empire', author:'brandon sanderson', img:'assets/3.jpg', isFav:true}
            ]
        }
    },

    methods: {
        changeTitle() {
            this.title = 'methods in title'
        },
        changeTitleName(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
        
    },
    computed: {
        filteredBooks(){
            return this.books.filter((book) =>book.isFav)
        }
    }

})

app.mount('#app')