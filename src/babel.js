async function start(){
    await Promise.resolve('async is working')
}

start().then(console.log)