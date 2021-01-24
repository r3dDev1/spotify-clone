export const initialState = {
  playlists: [],
  user: null,
  token: null,
};

//   token:
//     "BQBC4mCfvs6EhDWKOmlazYDA0F6FtAkciyu_fJWVyuuGl1Sl1Qr8wQdkuOAHShm-dewkb1-EThZqr3oJ2mXB7rYwqhpLQRr2b64e2pT-Ekc8o1tchbP1uxt1m8B3WrCOWnz8mcLj8HYADwWULSSnaTVfJz5x_jhNPAZ80hMdn8_DRH_Z3hx_I_fewna7R8pehg",

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
