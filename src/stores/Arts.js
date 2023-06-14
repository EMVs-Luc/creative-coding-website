import {defineStore} from 'pinia'

export const useArts = defineStore('artsList', {

    state: () => (
        {
            arts: [
                {
                    title: "Lightning Bold",
                    description:"",
                    previewImage:"lightningbold.png",
                    categoryID:1,
                    link:"/arts/unsorted/lightning-bold"
                },
                {
                    title: "Pixel Sorter",
                    description:"",
                    previewImage:"pixel-sorter.png",
                    categoryID:2,
                    link:"/arts/pixels/pixel-sorter"
                },
                {
                    title: "Glitch Effect",
                    description:"",
                    previewImage:"glitch.png",
                    categoryID:2,
                    link:"/arts/pixels/glitch-effect"
                },
                {
                    title: "Dithering Effect",
                    description:"",
                    previewImage:"dithering.png",
                    categoryID:2,
                    link:"/arts/pixels/dithering"
                },
                {
                    title: "Merging Effect",
                    description:"",
                    previewImage:"mearging.png",
                    categoryID:2,
                    link:"/arts/pixels/merging"
                },
                {
                    title: "Resize Effect",
                    description:"",
                    previewImage:"image_resize.png",
                    categoryID:2,
                    link:"/arts/pixels/resize"
                },
                {
                    title: "Abstract Circle",
                    description:"",
                    previewImage:"abstract-circle.png",
                    categoryID:1,
                    link:"/arts/shapes/abstract-circle"
                },
                {
                    title: "Abstract Circle 2",
                    description:"",
                    previewImage:"abstract-circle2.png",
                    categoryID:1,
                    link:"/arts/shapes/abstract-circle2"
                },
                {
                    title: "L-System Interpreter",
                    description:"",
                    previewImage:"LSystem.png",
                    categoryID:4,
                    link:"/arts/l-system/l-system"
                },
                {
                    title: "Sentence Generator",
                    description:"",
                    previewImage:"sentence-generator.png",
                    categoryID:5,
                    link:"/arts/markov-chain/sentence-generator"
                },
                {
                    title: "Basic game of life",
                    description:"",
                    previewImage:"game-of-live.png",
                    categoryID:6,
                    link:"/arts/game-of-life/basic"
                },
                {
                    title: "Bubblesort",
                    description:"",
                    previewImage:"bublesort.png",
                    categoryID:7,
                    link:"/arts/sorter/bubblesort"
                },
                {
                    title: "Quicksort",
                    description:"",
                    previewImage:"quicksort.png",
                    categoryID:7,
                    link:"/arts/sorter/quicksort"
                },
                {
                    title: "MergeSort",
                    description:"",
                    previewImage:"mearg-sort.png", //mergesort.png
                    categoryID:7,
                    link:"/arts/sorter/mergesort"
                }
            ]
        }
    ),
    getters: {},
    actions: {}

})
