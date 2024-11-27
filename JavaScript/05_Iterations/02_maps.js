const map = new Map();
map.set('India', 'Delhi')
map.set('China', 'Beijing')
map.set('Japan', 'Tokyo')
map.set('France', 'Paris')
map.set('UK', 'London')
map.set('India', 'Delhi')

// console.log(map);

for (const [key,value] of map) {
    console.log(key, ': ', value);
}