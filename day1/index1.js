const { createApp, ref} = Vue; 

const app = createApp({
    setup(){
       /* const kegiatan = ref("");
        const dataKegiatan = ref(["Makan", "Minum"]);
        const modeUpdate = ref(false);

        const tambahKegiatan = (index) =>{
            dataKegiatan.value.push(kegiatan.value);
            kegiatan.value = "";
            modeUpdate.value = false;
        };

        const hapusKegiatan = (index) =>{
            dataKegiatan.value.splice(index, 1);
        }

        const getDataKegiatan = (index,kegiatan) =>{
            modeUpdate.value = true;
            dataKegiatan.value = kegiatan ;
            dataKegiatan.value[index] = kegiatan.value;
        }

        const updateKegiatan =(index) =>{

        };
        return{
            modeUpdate,
            kegiatan,
            dataKegiatan,
            tambahKegiatan,
            hapusKegiatan
        };*/
        /*const dataCovid = ref({});
        const orangSembuh = ref("");
        const orangMeninggal = ref("");
        const orangDirawat = ref("");
        const url = "https://data.covid19.go.id/public/api/update.json";

        const getDataCovid = async ()=>{
            const res = await axios.get (url);
            dataCovid.value = res.data.update;
            orangSembuh.value = dataCovid.value.penambahan.jumlah_sembuh;
            orangMeninggal.value = dataCovid.value.penambahan.jumlah_meninggal;
            orangDirawat.value = dataCovid.value.penambahan.jumlah_dirawat;
        }

        onMounted(async()=>{
            await getDataCovid();
        })

        return{
            getDataCovid,
            dataCovid,
            orangSembuh,
            orangMeninggal,
            orangDirawat,
        };*/

        const url = "https://randomuser.me/api/";
        const profileUser = ref("");
        const nameUser = ref ("");
        const imageUser = ref("");
        const lastUser = ref("");

        const generateUser = async ()=>{
            const resUser = await axios.get(url);
            nameUser.value = resUser.data.results[0].name.first;
            profileUser.value = resUser.data.results[0].picture.large;
            imageUser.value = resUser.data.results[0].picture.large;
            lastUser.value = resUser.data.results[0].name.last;
        };

        return{
            generateUser,
            profileUser,
            nameUser,
            imageUser,
            lastUser,
            
        };
    },
});

app.mount("#app");
