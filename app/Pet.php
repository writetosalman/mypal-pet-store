<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    //
	protected $fillable = ['breed', 'age', 'name', 'price', 'list_date', 'sale_date'];
}
