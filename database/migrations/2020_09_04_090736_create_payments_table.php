<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('payments', function (Blueprint $table) {
        $table->increments('id');
        $table->foreignUuid('user_id');
        $table->integer('payment_id');
        $table->string('payment_method');
        $table->string('payment_country')->nullable();
        $table->float('amount');
        $table->enum('status', ['pending', 'completed'])->default('pending');
        $table->timestamps();
          $table->foreign('user_id')
            ->references('id')
            ->on('users')
            ->onDelete('cascade');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
