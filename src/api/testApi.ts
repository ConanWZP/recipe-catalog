import axios from "axios";

export const instanceRecipes = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/',  // для того что планирую сейчас recipes - достаточно
  //  withCredentials: true,
    //data: '1000',

    params: {
            /*"apiKey": '215c148e5b964cc884199c1bd0b79e5a'*/
        "apiKey": '6dcdc44c8bee4f2bbef1bdb633143496'
    },
  //  headers: {
 //       "x-api-key": '6dcdc44c8bee4f2bbef1bdb633143496'
 //   },

});

export const instanceCategories = axios.create({
    baseURL: 'https://6363843d8a3337d9a2dfc885.mockapi.io/',
  //  withCredentials: true,
    //data: '1000',


    //  headers: {
    //       "x-api-key": '6dcdc44c8bee4f2bbef1bdb633143496'
    //   },

});


export const instanceIngredients = axios.create({
    baseURL: 'https://api.spoonacular.com/food/ingredients/',
    params: {
        /*"apiKey": '215c148e5b964cc884199c1bd0b79e5a'*/
          "apiKey": '6dcdc44c8bee4f2bbef1bdb633143496'
    }
})