"use client"

import { Listings } from "./types";

interface PropertyFormProps {
  newListings: Listings;
  setNewListings: React.Dispatch<React.SetStateAction<Listings>>;
  handleSubmit: (e: any) => void;
  clearForm: () => void;
}

export default function PropertyForm({ newListings, setNewListings, handleSubmit, clearForm }: PropertyFormProps) {
  return (
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
              onChange={(e) => setNewListings((prev) => ({...prev, price: Number(e.target.value)}))}
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
            {newListings.id ? 'Update Property' : 'Create Property'}
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
  );
}
