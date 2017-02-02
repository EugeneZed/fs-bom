function _addBom(name,season){
  return {
    "name": name,
    "season": season,
    "id" : (Math.floor(Math.random() * (10000) + 1))
  }
}


export default function addBom(params){
  return _addBom(params.name,params.season);
}
