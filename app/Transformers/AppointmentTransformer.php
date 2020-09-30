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
                    $data = [
                        'id' => $appointment->id,
                        'title' => $appointment->name,
                        'startDate' => $appointment->appointment_date,
                        'endDate' => $appointment->appointment_date,
                        'url' => '',
                        'classes' => $appointment->appointment_date < Carbon::now() ? 'event-success' : 'event-error',
                        'label'  => 'business'
                    ];

                    array_push($events , $data);
            }

                return $events;

    }


}
