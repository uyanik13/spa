<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Payment extends Model
{
    use HasFactory;
  protected $guarded = [];
  protected $with = ['user'];

  protected $casts = [ 'created_at' => 'date:Y-m-d'];

  public function user()
  {
    return $this->belongsTo('App\Models\User');
  }
}
