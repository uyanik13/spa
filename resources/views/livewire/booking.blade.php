
            <form action="{{route('calendar.appointment')}}" class="contact-form" method="POST">
                @csrf

            <div class="input">
                <label for="">Ausgewähltes Datum </label>
                <input type="hidden" id="dateInput"   wire:model="day"   name="dateInput" value="" >
                <input type="text" id="dateInput2"  name="dateInput2" placeholder="DD / MM / JJJJ" value="" disabled>
            </div>
            <div class="input">
                <label for="">Bevorzugter Zeitbereich</label>
                <select name="timeRange" onchange="this.selected" required id="timeRange">
                                @if($selectedDay)
                                @foreach ($selectedDay as $key => $day)
                               @if ($day->quota > 0)
                               @if ($key == 0)
                               <option value="14:00-17:00" selected>Bitte wählen Sie die Option</option>
                               @endif
                               <option value="{{$day->time}}" class="bg-success text-white ">{{$day->time}}
                                <span>letzte {{$day->quota}} Personen</span>
                                 </option>
                               @else
                               <option value="{{$day->time}}"class="bg-danger text-white " disabled="true" >{{$day->time}}
                                <span>letzte {{$day->quota}} Personen</span>
                                </option>
                               @endif
                                @endforeach
                                @endif
                </select>
            </div>

            <div class="input text-center">
                <button
                    type="submit"
                    class="sc_button sc_button_square sc_button_style_filled  sc_button_size_base buttonup dark">
                    <div>
                        <span class="first">Nächster Schritt</span>
                        <span class="second">Nächster Schritt</span>
                    </div>
                </button>
            </div>

        </form>
@push('scripts')
@endpush
