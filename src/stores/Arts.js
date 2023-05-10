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
                },
                {
                    title: "Merging Effect",
                    description:"",
                    previewImage:"",
                    categoryID:2,
                    link:"/arts/pixels/merging"
                },
                {
                    title: "Resize Effect",
                    description:"",
                    previewImage:"",
                    categoryID:2,
                    link:"/arts/pixels/resize"
                },
                {
                    title: "Abstract Circle",
                    description:"",
                    previewImage:"",
                    categoryID:1,
                    link:"/arts/shapes/abstract-circle"
                },
                {
                    title: "Abstract Circle 2",
                    description:"",
                    previewImage:"",
                    categoryID:1,
                    link:"/arts/shapes/abstract-circle2"
                },
                {
                    title: "L-System Interpreter",
                    description:"",
                    previewImage:"",
                    categoryID:3,
                    link:"/arts/l-system/l-system"
                },
                {
                    title: "Sentence Generator",
                    description:"",
                    previewImage:"",
                    categoryID:4,
                    link:"/arts/markov-chain/sentence-generator"
                }
            ]
        }
    ),
    getters: {},
    actions: {}

})
