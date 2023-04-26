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
                }
            ]
        }
    ),
    getters: {},
    actions: {}

})
