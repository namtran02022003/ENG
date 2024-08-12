const shuffleDatas = (datas:[]) => {
    return datas.sort(()=> Math.random()- Math.random())
}
export {shuffleDatas}