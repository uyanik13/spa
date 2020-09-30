<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('reference_id')->nullable();
            $table->string('email')->unique();
            $table->text('bill_address')->nullable();
            $table->text('address')->default('istanbul');
            $table->string('phone')->unique()->nullable();
            $table->string('avatar')->default('https://via.placeholder.com/150');
            $table->text('social_data')->nullable();
            $table->text('about_data')->nullable();
            $table->text('user_data')->nullable();
            $table->text('notification_data')->nullable();
            $table->datetime('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('subscribed')->default('0');
            $table->boolean('isHere')->default('0');
            $table->timestamp('login_date')->nullable();
            $table->timestamp('logout_date')->nullable();
            $table->enum('role', ['admin','user','staff'])->default('user');
            $table->enum('status', ['1', '0'])->default('1');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
}
