//Almacenamiento central
export const state = () => ({
    favoriteList: [],
})

//Getters para consultas a las BBDD, normalmente se llaman desde computed en los componentes
export const getters = {
    getFavorite(state){
        return state.favoriteList
    },
}

//Acciones, para llamar a las mutaciones
export const actions = {
   
}

//Mutadores, para modificar el almacenamiento
export const mutations = {
    addFavorite(state, favorite){ 
        state.favoriteList.push(favorite)
    },
    removeFavorite(state, id){ 
        for (let i=0; i<state.favoriteList.length; i++) {
            if(state.favoriteList.length===0){
                break
            } else {
                if(state.favoriteList[i].id===id)
            state.favoriteList.splice(i,1)
            }
        }
    }
}