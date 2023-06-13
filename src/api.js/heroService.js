import getApiInstance from "./apiService";

const INSTANCE = getApiInstance()


const getAllHero = () => {
    return INSTANCE.get()
}

const getHeroById = (id) => {
    return INSTANCE.get("/" + id)
}



export {getAllHero,getHeroById}