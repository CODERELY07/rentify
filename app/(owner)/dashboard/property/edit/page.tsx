"use client"
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-client";
import { Listings } from "../../types";
import PropertyForm from "./PropertyForm";
import PropertyList from "./PropertyList";

export default function Dashboard() {
  const [newListings, setNewListings ] = useState<Listings>({title: "", description: "", price: 0, location: "", bedroom: 0, bathroom: 0} );
  const [listings, setListings] = useState<Listings[]>([]);

  const fetchListings = async () => {
    const {error, data} = await supabase.from('listings').select("*").order("id", {ascending: true});
    if(error){ return; }
    setListings(data || []);
  }

  const clearForm = () => {
    setNewListings({title: "", description: "", price: 0, location: "", bedroom: 0, bathroom: 0});
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if(newListings.id){
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
      } else {
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

  const deleteListing = async (id : number) => {
    try{
      const {error} = await supabase.from('listings').delete().eq("id", id);
      if(error){
        console.error("Error ", error.message);
      }
      fetchListings();
    }catch(error){
      console.log("Error: " , error);
    }
  }

  useEffect(()=>{
    fetchListings();
  }, [])

  return (
    <div className="min-h-screenp-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Property Management Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PropertyForm
            newListings={newListings}
            setNewListings={setNewListings}
            handleSubmit={handleSubmit}
            clearForm={clearForm}
          />
          <PropertyList
            listings={listings}
            setNewListings={setNewListings}
            deleteListing={deleteListing}
          />
        </div>
      </div>
    </div>
  );
}
