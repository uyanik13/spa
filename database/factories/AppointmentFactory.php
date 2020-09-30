<?php

namespace Database\Factories;

use App\Models\Appointment;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class AppointmentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Appointment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $date = $this->faker->dateTimeBetween($startDate = 'now', $endDate = '3 months');
        //$date = $dt->format("Y-m-d h:m");
        return [
                'name' => $this->faker->firstName('male'),
                'user_id' => User::all()->random(),
                'email' => $this->faker->unique()->safeEmail,
                'phone' => $this->faker->unique()->phoneNumber,
                'hours_between' =>  $this->faker->randomElement(['10:00-13:00', '13:00-17:00','17:00-21:00','21:00-24:00']),
                'appointment_date' => $date,
                'status' =>  $this->faker->randomElement(['pending']),

        ];
    }
}
