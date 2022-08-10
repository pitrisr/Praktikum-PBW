const { createApp, ref} = Vue; 

const app = createApp({
    setup(){
        const urlMakan = "http://localhost:7000/makanan";
        const urlMinum = "http://localhost:7000/minuman";
        const namaMakan = ref([]);
        const namaMinum = ref([]);
        

        const generateMakanan = async ()=> {
            const resMakan = await axios.get(urlMakan);
            namaMakan.value = resMakan.data;
            namaMinum.value = [];
            console.log(namaMakan);
        };

        const generateMinuman = async ()=>{
            const resMinum = await axios.get(urlMinum);
            namaMinum.value = resMinum.data;
            namaMakan.value = [];
            console.log(namaMinum);
            
        };



        return{
            generateMakanan,
            generateMinuman,
            namaMakan,
            namaMinum,
            
        };
    },
});

app.mount("#app");
