import ololog from 'ololog'; 
const log = ololog.configure({locate:false, time:false});
import treeify from 'treeify'

const treeView = (arrayOrObject) => {
    return (
        log.green(treeify.asTree(arrayOrObject,true))
    )
}

export default treeView