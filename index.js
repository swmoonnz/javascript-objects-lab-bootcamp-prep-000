<<<<<<< HEAD
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) 
  {object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object, key);
  return delete clone[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}

=======
var objects = {recipes}
>>>>>>> a3143419e4215a59ec3d88981fb2ddd1586d356e
