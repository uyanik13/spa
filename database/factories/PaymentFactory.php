<?php

namespace Database\Factories;

use App\Models\Payment;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class PaymentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Payment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $dt = $this->faker->dateTimeBetween($startDate = '-1 years', $endDate = 'now');
        $date = $dt->format("Y-m-d");
        return [
            'user_id' => User::all()->random(),
            'payment_id' => rand(1111111,9999999),
            'payment_method' => 'payoneer',
            'payment_country' => $this->faker->randomElement(['germany', 'turkey', 'austria']),
            'amount'=>rand(0, 500),
            'status' => 'completed',
            'created_at' => $date,

        ];
    }
}
