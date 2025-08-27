"use client"

//import { Appwrite } from 'appwrite';
import { useEffect, useState } from "react";

const Shop = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setproductImage] = useState('');
    const [productList, setProductList] = useState([]);
    // Init your Web SDK


    interface Doll {
      ID: number;
      Name: string;
      Image: string;
      Price: number;
      Info: string;
    }


    const [DollList, setDollList] = useState<Doll[]>([]);

    useEffect(() => {
        fetch('/DollInfo.Json')
            .then(response => response.json())
            .then(data => setDollList(data.Dolls));
    }, []);

    {/*

    const sdk = new Appwrite();
    sdk
      .setEndpoint('http://localhost/v1') // Your API Endpoint
      .setProject(projectID) // Your project ID
    ;
      //Creating anonymous Session
    const createAnonymousSession = async() => {
      try{
        await sdk.account.createAnonymousSession();
      }catch(err){
        console.log(err)
      }
        
    }
    useEffect(()=> {
      createAnonymousSession()
      listProducts()
    }, [])

    */}
    
      
    // This is getting products from an API database, we need to change it to local files
    const listProducts = async () => {
      try {
        //let response = await sdk.database.listDocuments(collectionID);
        //setProductList(response.documents)
        // A dummy empty list of products to return
        setProductList([])
      } catch (error) {
        console.log(error)
        
      }
      
    }
    
    // This is for adding products to the database
    const handleProductCatalog = async () => {
      try{
        {/* 
          let promise = await sdk.database.createDocument(collectionID, 'unique()', {
          "productName" : productName,
          "productPrice": productPrice,
          "productImage": productImage
        });
        */}
        
        // This is just clearing data in the local variables
        setProductName('');
        setProductPrice('');
        setproductImage('');
      
        alert('This is an example of how saving your product would look like')
      
        //It then recalls list products as a new product should have been added
        listProducts()
      }catch(error){
        console.log(error)
      }
      
        
    }

    //const handleDelete = async (documentid) => {
    const handleDelete = async () => {
      try {
        //await sdk.database.deleteDocument(collectionID, documentid);
        alert("item have been deleted successfully")
        listProducts()
        
      } catch (error) {
        console.log(error)
      }
    }


    {/*

      <div className='product-catalog'>

        // This is code for a form to submit new products
        <div className="product-container mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div>
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                    Product Name
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={1}
                      value = {productName}
                      onChange= {(e)=> setProductName(e.target.value)}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md text-gray-700"
                      defaultValue={''} />
                  </div>
                  
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                      Link to Product Image
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        value={productImage}
                        onChange= {(e)=> setproductImage(e.target.value)}
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 text-gray-700"
                        placeholder="www.example.com" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      value={productPrice}
                      onChange= {(e)=> setProductPrice(e.target.value)}
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md text-gray-700"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                // This is the button that submits it. It call the function at onClick - this function currently does
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="button"
                    className="cursor inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleProductCatalog}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          {
            //productList ? (
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                  //productList.map(({productName, productImage, productPrice, $id}) => (
                  DollList.map(Doll =>  (
                    //<a href="#" className="group" id={$id}>
                    <a key={Doll.ID} href="#" className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <img src={"/Garfield_No_Compassion"} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                      </div>
                      <h3 className="mt-4 text-sm text-gray-700">{Doll.Name}</h3>
                      <p className="mt-1 text-lg font-medium text-gray-900">${Doll.Price}</p>
                      <button
                        type="button"
                        className="cursor inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={()=> handleDelete()} //onClick={()=> handleDelete($id)}     This is being commented becuase new dummy delete function doesnt take any arguments
                      >
                      Delete
                    </button>
                    </a>
                  ))
                }
              </div>
            //) : null
          }
        </div>
      </div>
      */}
    // </div>


    return (
    
      // This is the part that actually displays and lists the products for viewing

      <div>
          <h2>Doll List</h2>
          <ul>
              {DollList.map(Doll => (
                  <li key={Doll.ID}>
                    <img src={Doll.Image} alt={Doll.Name}/>
                      <p>
                          Name:
                          {Doll.Name}
                      </p>
                      <p>
                          Price:
                          {Doll.Price}
                      </p>
                      <p>
                          Extra info:
                          {Doll.Info}
                      </p>
                      {/* Add more user data fields as needed */}
                  </li>
              ))}
          </ul>
      </div>
    );
  }
  
  export default Shop;




  