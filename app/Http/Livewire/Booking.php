<?php

namespace App\Http\Livewire;

use Carbon\Carbon;
use Livewire\Component;
use App\Models\CalendarInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Booking extends Component
{

    protected $listeners = ['createdSessionDay' => 'changeDay'];

    public $stock = 30;
    public $day = '';
    public $selectedDay = '';


    public function __construct(){
        $this->day = session()->get('day');
    }


    public function changeDay()
    {
        $this->day =session()->get('day');
        $selectedDay = DB::table('calendar_infos')->where('day',$this->day)
            ->select('day', 'time','quota')->whereDate('day','>', Carbon::today()->format('y-m-d'))->get();
        $this->selectedDay = $selectedDay;

    }



    public function mount()
    {


    }

    public function render()
    {
        // $selectedDay = DB::table('calendar_infos')->where('day',$this->day)->select('day', 'time')->get();
        // $this->selectedDay = $selectedDay;
        return view('livewire.booking');
    }
}
