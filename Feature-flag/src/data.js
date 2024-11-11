


const dummyApiResponse ={
showLightAndDarkMode :true ,
showTicToeBoard :true ,
showRandomColorGenerator: true ,
showAccrodian : true ,
showTreeView : true
}

const fetchFeatureFlagServiceCall =()  => {
    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse) , 500)
            else reject("some Error Occured! please try Again Later")
    })
}

export default fetchFeatureFlagServiceCall;