function towns(arr){
for(let items of arr){
    let [townName, duljina, shirina] = items.split(' | ');
    duljina = Number(duljina).toFixed(2);
    shirina = Number(shirina).toFixed(2);

    let townObj = { town: townName, latitude: duljina, longitude: shirina };
    console.log(townObj);
}
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);
//towns(['Plovdiv | 136.45 | 812.575']);
// { town: 'Beijing', latitude: '39.91', longitude: '116.36' }