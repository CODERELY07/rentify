"use client"
import {supabase} from "@/lib/supabase-client";
import { clear } from "console";
import { useEffect, useState } from "react";

interface Listings{
    id?: number,
    title: string,
    description: string,
    price: number,
    location: string,
    bedroom: number,
    bathroom: number,
}


export default function Dashboard() {
    const [newListings, setNewListings ] = useState<Listings>({title: "", description: "", price: 0, location: "", bedroom: 0, bathroom: 0} );
    const [listings, setListings] = useState<Listings[]>([]);

    const fetchListings = async () => {
        const {error, data} = await supabase.from('listings').select("*").order("id", {ascending: true});

        if(error){
          return;
        }
        setListings(data || []);
    }

    const clearForm = () => {
        setNewListings({title: "", description: "", price: 0, location: "", bedroom: 0, bathroom: 0});
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try{
          if(newListings.id){
            console.log(newListings.id);
            const {error} = await supabase.from('listings').update({
              title: newListings.title,
              description: newListings.description,
              price: newListings.price,
              location: newListings.location,
              bedroom: newListings.bedroom,
              bathroom: newListings.bathroom
            }).eq('id', newListings.id);

            if (error) {
              console.error("Error updating listing: ", error.message);
              return;
            }
            console.log("Listing updated successfully");
          }else{
            const {error} = await supabase.from('listings').insert(newListings).single();
            if(error){
                console.error("Error adding task: ", error.message);
            }
          }
          clearForm();
          fetchListings();
        }catch(error){
          console.log("Error: ", error)
        }
    }

    const deleteListing = async (id : any) => {
      try{
          const {error} = await supabase.from('listings').delete().eq("id", id);

          if(error){
            console.error("Error ", error.message);
          }
          fetchListings();
           console.log("Listing deleted successfully");
      }catch(error){
        console.log("Error: " , error);
      }
    
    }
    useEffect(()=>{
      fetchListings();
    }, [fetchListings])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Property Management Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Add New Property</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
         
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={newListings.title}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter property title"
                  onChange={(e) => setNewListings((prev) => ({...prev, title: e.target.value}))}
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={3}
                  value={newListings.description}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter property description"
                onChange={(e) => setNewListings((prev) => ({...prev, description: e.target.value}))}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                    Price ($)
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    value={newListings.price}
                    onChange={(e) => setNewListings((prev) => ({...prev, price: Number( e.target.value)}))}
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={newListings.location}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter location"
                    onChange={(e) => setNewListings((prev) => ({...prev, location: e.target.value}))}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="bedroom" className="block text-sm font-medium text-gray-700 mb-1">
                    Bedroom
                  </label>
                  <input
                    type="number"
                    name="bedroom"
                    id="bedroom"
                    value={newListings.bedroom}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0"
                    min="0"
                    onChange={(e) => setNewListings((prev) => ({...prev, bedroom: Number(e.target.value)}))}
                  />
                </div>
                
                <div>
                  <label htmlFor="bathroom" className="block text-sm font-medium text-gray-700 mb-1">
                    Bathroom
                  </label>
                  <input
                    type="number"
                    name="bathroom"
                    id="bathroom"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="0"
                    min="0"
                    value={newListings.bathroom}
                    step="0.5"
                    onChange={(e) => setNewListings((prev) => ({...prev, bathroom: Number(e.target.value)}))}
                  />
                </div>
              </div>
              
              <div className="flex space-x-4 pt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {
                    newListings.id ?  'Update Property' : 'Create Property'
                  }
                  
                </button>
                <button
                  onClick={clearForm}
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Clear Form
                </button>
              </div>
            </form>
          </div>
          
          {/* Listings Section */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Property Listings</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bed/Bath
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                      listings.map(listing => (
                        <tr key={listing.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{listing.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">{listing.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">{listing.location}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">{listing.bedroom} / {listing.bathroom}</td>
                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button onClick={() => setNewListings((prev) => ({...prev, ...listing, id:listing.id}))} className="text-blue-600 hover:text-blue-900">
                                Edit
                              </button>
                              <button onClick={() => deleteListing(listing.id)} className="text-red-600 hover:text-red-900">
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}