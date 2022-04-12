// _dirname     - path to current directory
// _filename    - file name
// require      - function to use modules (CommonJs)
// module       - info about current module (file)
// process      - info about env where the program is being executed

console.log(__filename)
setInterval(()=> {
    console.log('Hello World')
}, 1000)