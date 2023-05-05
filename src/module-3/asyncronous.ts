const makePromise = ():Promise<string> => {

  return  new Promise<string>((resolve, reject) => {

        const data: string = 'data is fetched';
        if (data) {
            resolve(data);
        }
        else {
            reject('failed to fetched data');
        }

    })
}

const getPromiseData = async():Promise<string> => {

    const data = await makePromise();
    return data;
}

//boolean promise
const makePromiseBoolean = ():Promise<boolean> => {

    return  new Promise<boolean>((resolve, reject) => {
  
          const data: boolean = true;
          if (data) {
              resolve(data);
          }
          else {
              reject('failed to fetched data');
          }
  
      })
}
  
const getPromiseDataBoolean = async():Promise<boolean> => {

    const data = await makePromiseBoolean();
    return data;
}

//promise object



type DataType = {  //promise in type alias
    name: string
}

const makePromiseObject = ():Promise<DataType> => {

    return  new Promise<DataType>((resolve, reject) => {
  
          const data: DataType = {name: 'Rahat'};
          if (data) {
              resolve(data);
          }
          else {
              reject('failed to fetched data');
          }
  
      })
  }

  const getPromiseDataObject = async():Promise<DataType> => {

    const data = await makePromiseObject();
    return data;
}

// json place holder
interface IData  {

    userId: number,
    id: number,
    title: string,
    body: string
}

const getPost = async():Promise<IData> => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
  
}

const getPostData = async ():Promise<void> => {
    
    const result = await getPost();
    console.log(result);

}

getPostData();