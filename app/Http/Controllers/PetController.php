<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Pet;

class PetController extends Controller
{
    public function index()
    {
        return Pet::orderBy('list_date', 'desc')->get();
    }

    public function show(Pet $pet)
    {
        return $pet;
    }

    public function store(Request $request)
    {
	    // Upon error it will stop here
	    $this->validate($request, [
		    'breed'            => 'required|max:255',
		    'age'              => 'required|numeric',
		    'price'            => 'required|numeric',
		    'list_date'        => 'required',
	    ]);

	    $pet = Pet::create($request->all());

        return response()->json($pet, 200);
    }

    public function update(Request $request, Pet $pet)
    {
	    // Upon error it will stop here
	    $this->validate($request, [
		    'breed'            => 'required|max:255',
		    'age'              => 'required|numeric',
		    'price'            => 'required|numeric',
		    'list_date'        => 'required',
	    ]);

        $pet->update($request->all());

        return response()->json($pet, 200);
    }

    public function delete(Pet $pet)
    {
        $pet->delete();

        return response()->json(null, 204);
    }
}
