import {defineStore} from 'pinia'

export const useArts = defineStore('artsList', {

    state: () => (
        {
            arts: [
                {
                    title: "Lightning Bold",
                    description:"",
                    previewImage:"",
                    categoryID:0,
                    link:"/arts/unsorted/lightningbold"
                },
                {
                    title: "Pixel Sorter",
                    description:"",
                    previewImage:"",
                    categoryID:2,
                    link:"/arts/pixels/pixel-sorter"
                },
                {
                    title: "Glitch Effect",
                    description:"",
                    previewImage:"",
                    categoryID:2,
                    link:"/arts/pixels/glitch-effect"
                },
                {
                    title: "Dithering Effect",
                    description:"",
                    previewImage:"",
                    categoryID:2,
                    link:"/arts/pixels/dithering"
                }
            ]
        }
    ),
    getters: {},
    actions: {}

})
