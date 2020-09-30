<?php

namespace Database\Factories;

use Carbon\Carbon;
use App\Models\User;
use Carbon\CarbonPeriod;
use Illuminate\Support\Str;
use App\Models\CalendarInfo;
use Illuminate\Database\Eloquent\Factories\Factory;

class CalendarInfoFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CalendarInfo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return
        $today = today();

        for($i=1; $i < $today->daysInMonth + 1; ++$i) {
            [
                'day' => Carbon::createFromDate($today->year, $today->month, $i)->format('F-d-Y'),
                'time' => '13',
                'quota' => '30',
                'price' => '30',

            ];
        }
    }
}
