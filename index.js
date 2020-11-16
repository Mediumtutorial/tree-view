import treeView from './utils/treeView.js'

const array = [
    ['Manish', 27, ['PHP', 'JavaScript', 'Java', ['HTML', 'CSS']]],
    ['Google', 'Medium', 'Facebook', 'Twitter']

]

const object = {
    name: 'Manish',
    age: 27,
    project: {
        language: {
            first: 'JavaScript',
        },
        OS: 'Windows',
        backend: 'node'
    }
}

treeView(array)


