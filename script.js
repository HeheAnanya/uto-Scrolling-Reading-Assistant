async function trrryy(url){
    try{
        let a = await fetch(url)
        let b = await a.text()
        console.log(b)
    }
    catch(er){
        console.log(er)

    }
}
trrryy (`https://www.gutenberg.org/files/1342/1342-0.txt`)

