<?php

namespace Database\Factories;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        $startDate = Carbon::createFromTimeStamp($this->faker->dateTimeBetween('-3 hours', 'now')->getTimestamp());
        $login = $startDate->toDateTimeString();
        $logout = $startDate->addHours( $this->faker->numberBetween( 1, 3 ));


            return [
                'name' => $this->faker->firstName('male'),
                'email' => $this->faker->unique()->safeEmail,
                'role' => 'user',
                'email_verified_at' => now(),
                'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
                'phone' => $this->faker->unique()->phoneNumber,
                'subscribed' => rand(0,1),
                'isHere' => rand(0,1),
                'login_date' => $login,
                'logout_date' => $logout,

            ];

    }
}
