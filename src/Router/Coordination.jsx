
export const gotoHome=(navigate)=>{
    navigate('/')
}

export const gotoPokedex=(navigate)=>{
    navigate('/pokedex')
}

export const gotoDetail=(navigate,namePokemon)=>{
    navigate('/details/'+namePokemon)
}

