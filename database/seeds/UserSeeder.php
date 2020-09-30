<?php

use Carbon\Carbon;
use App\Models\User;
use App\Models\Message;
use App\Models\Payment;
use App\Models\Appointment;
use App\Models\CalendarInfo;
use Illuminate\Database\Seeder;



class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        User::create([
            'id' => '3387f290-dc98-11ea-af1b-17b4141fee92',
            'name' => 'Ogur',
            'email' => 'admin@admin.com',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
            'address' => 'inkilap',
            'email_verified_at' => Carbon::now(),
            'phone' => '905456134513',
            'social_data' => '{"twitter":"twitter","facebook":"facebook","instagram":"instagram","github":"github","linkedin":"linkedin","youtube":"youtube","slack":"slack"}',
            'about_data' => '{"bio":"afasfasfasf","dob":"11 August 2020","country":{"label":"Australia","value":"australia"},"lang_known":[{"label":"Spanish","value":"spanish"},{"label":"French","value":"french"}],"website":"dro","gender":"male"}',
            'user_data' => '{"EduData":[{"school":"adana","year":"asfafafsa"},{"year":"2018","school":"istanbul"}],"type":"EduData"}',
            'notification_data' => '{"comment":false,"answer":false,"follow":false,"news":true,"product_update":true,"blog":true}',
            'role' => 'admin'
        ]);

        $user = User::factory(20)->create();
        //$calendarInfo = CalendarInfo::factory(1)->create();
        $appointment = Appointment::factory(500)->create();
        $payment = Payment::factory(250)->create();



    }
}
