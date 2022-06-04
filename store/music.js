//Almacenamiento central
export const state = () => ({
    arrayMusic: [],
    text: ""
})

//Actions
export const actions = {
    async loadMusic({commit, getters}){
        let text = getters.getText
        let { data } = await this.$axios.get("https://api.codetabs.com/v1/proxy?quest=https://api.deezer.com/search?q="+text)
        commit('setMusic', data)
    },
}

//Getters
export const getters = {
    getMusic(state){
        return state.arrayMusic
    },
    getText(state){
        return state.text
    }
}

//Mutaciones
export const mutations = {
    setMusic(state, datos){
        state.arrayMusic = []
        var resultados = state.arrayMusic
        datos.data.forEach(function(track) {
            var artist = track.artist.name;
            var title = track.title;
            var image = track.album.cover_medium;
            var preview = track.preview
            var duration = track.duration
            var minutes = Math.floor(duration/60)
            if(minutes < 10){
                minutes = "0"+minutes
            }
            var seconds = duration % 60
            if(seconds < 10){
                seconds = "0"+seconds
            }
            var trackDuration = minutes+":"+seconds
            var album = track.album.title
            var tracklist = track.album.tracklist
            var albumCover = track.album.cover_medium
            var id = track.id
           resultados.push({id, artist, title, image, preview, trackDuration, album, tracklist, albumCover});
        });
    },
    setText(state, text){
        state.text = text
    }
}
