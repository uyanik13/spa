<?php

namespace App\Transformers;

use Carbon\Carbon;
use App\Models\Appointment;
use League\Fractal\Resource\Collection;
use League\Fractal\TransformerAbstract;


class AppointmentTransformer extends TransformerAbstract
{


    public function transform($appointments)
    {

        $events = [];
            foreach ($appointments as $key => $appointment) {

                $hoursParse = explode('-',$appointment->hours_between);
                $h1= substr($hoursParse[0],0,-3);
                $h2= substr($hoursParse[1],0,-3);
                $carbon_date = Carbon::parse($appointment->appointment_date);
                $endDate = $carbon_date->addHours($h2 - $h1);
                    $data = [
                        'id' => $appointment->id,
                        'title' => substr($appointment->name,0,20),
                        'hours' => $appointment->hours_between,
                        'hour1' => $h1,
                        'hour2' => $h2,
                        'startDate' => $appointment->appointment_date,
                        'endDate' => $endDate,
                        'status' => $appointment->status,
                        'classes' => $appointment->appointment_date < Carbon::now() ? 'event-success' : 'event-warning',
                        'label'  => substr($appointment->name,0,20),
                    ];

                    array_push($events , $data);
            }

                return $events;

    }


}
