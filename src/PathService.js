
const rootPath = "http://localhost:9001/paths";

export default class PathService {

addPath(path){
	return	fetch(rootPath, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(path)
		})
}

getPath(){
	return fetch(rootPath, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		})
}

deletePath(deletedPath){
	return 	fetch(rootPath + deletedPath.id, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' }
		})
}

}
