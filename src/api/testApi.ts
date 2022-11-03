import axios from "axios";

export const instanceRecipes = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/',  // для того что планирую сейчас recipes - достаточно
  //  withCredentials: true,
    //data: '1000',

    params: {
            "apiKey": '6dcdc44c8bee4f2bbef1bdb633143496'
    },
  //  headers: {
 //       "x-api-key": '6dcdc44c8bee4f2bbef1bdb633143496'
 //   },

});

