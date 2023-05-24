import {defineStore} from 'pinia'

export const useCategories = defineStore('categoryList', {

    state: () => (
        {
            categories: [
                {
                    id: 0,
                    title: "Unsorted"
                },
                {
                    id: 1,
                    title: "Geometric Forms"
                },
                {
                    id: 2,
                    title: "Pixels"
                },
                {
                    id: 3,
                    title: "L-System"
                },
                {
                    id: 4,
                    title: "Markov Chain"
                },
                {
                    id: 5,
                    title: "Game of life"
                },
                {
                    id: 6,
                    title: "Sortieralgorithmus"
                }
            ]
        }
    ),
    getters: {},
    actions: {}

})
