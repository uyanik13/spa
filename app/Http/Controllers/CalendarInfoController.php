<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Carbon\CarbonInterval;
use App\Models\calendarInfo;
use Illuminate\Http\Request;

class CalendarInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\calendarInfo  $calendarInfo
     * @return \Illuminate\Http\Response
     */
    public function show(calendarInfo $calendarInfo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\calendarInfo  $calendarInfo
     * @return \Illuminate\Http\Response
     */
    public function edit(calendarInfo $calendarInfo)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\calendarInfo  $calendarInfo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, calendarInfo $calendarInfo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\calendarInfo  $calendarInfo
     * @return \Illuminate\Http\Response
     */
    public function destroy(calendarInfo $calendarInfo)
    {
        //
    }





    private function generateDateRange(Carbon $start_date, Carbon $end_date)

    {

        $dates = [];

        for($date = $start_date; $date->lte($end_date); $date->addDay()) {

            $dates[] = $date->format('Y-m-d');

        }

        return $dates;

    }

    //  public function createAllDays(Request $request)
    //      {

    //          $from = Carbon::createFromDate(2022, 12, 31);

    //          $to = Carbon::createFromDate(2020, 9, 1);

    //          $dates = $this->generateDateRange($to, $from);

    //          $hours = ['13:00-16:00', '16:00-19:00','19:00-22:00',];


    //          foreach ($dates as $key => $value) {
    //              foreach($hours as $hour){
    //                  CalendarInfo::create([
    //                      'day' => $value,
    //                      'time' => $hour,
    //                      'quota' => '30',
    //                      'price' => '100',
    //                  ]);
    //              }
    //          }

    //      }




}
