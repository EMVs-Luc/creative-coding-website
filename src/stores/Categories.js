import {defineStore} from 'pinia'

export const useCategories = defineStore('categoryList', {

    state: () => (
        {
            categories: [
                {
                    id: 1,
                    title: "Shapes"
                },
                {
                    id: 2,
                    title: "Image manipulation"
                },
                {
                    id: 4,
                    title: "L-System"
                },
                {
                    id: 5,
                    title: "Markov chain"
                },
                {
                    id: 6,
                    title: "Game of life"
                },
                {
                    id: 7,
                    title: "Sortieralgorithmus"
                }
            ]
        }
    ),
    getters: {},
    actions: {}

})
