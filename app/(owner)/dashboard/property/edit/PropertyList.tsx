"use client"

import property from "@/data/property";
import { Listings } from "../../types";

interface PropertyListProps {
  listings: Listings[];
  setNewListings: React.Dispatch<React.SetStateAction<Listings>>;
  deleteListing: (id: number) => void;
}

export default function PropertyList({ listings, setNewListings, deleteListing }: PropertyListProps) {
  return (
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
            {listings.map(listing => (
              <tr key={listing.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{listing.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">{listing.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">{listing.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray">{listing.bedroom} / {listing.bathroom}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button onClick={() => setNewListings((prev) => ({...prev, ...listing, id: listing.id}))} className="text-blue-600 hover:text-blue-900">
                      Edit
                    </button>
                    <button onClick={() => deleteListing(listing.id!)} className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
