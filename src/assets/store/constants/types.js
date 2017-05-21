module.exports = keyMirror({

    FETCH_LIST_REQUEST: null,
    FETCH_LIST_SUCCESS: null,
    FETCH_LIST_FAILURE: null,

    NEWS_LIST_REQUEST: null,
    NEWS_LIST_SUCCESS: null,
    NEWS_LIST_FAILURE: null    
    
})

function keyMirror (obj) {
  if (obj instanceof Object) {
    var _obj = Object.assign({}, obj)
    var _keyArray = Object.keys(obj)
    _keyArray.forEach(key => _obj[key] = key)
    return _obj
  }
}