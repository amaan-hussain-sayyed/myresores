
export  const FeildsError= async(error:any)=> {
    const result = await error.map((key:any) => {
        return {name:[key.path[0]],error: key.message }
    })
    return result 
}