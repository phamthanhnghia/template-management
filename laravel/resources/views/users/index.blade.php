@foreach ($users as $user)
    <p>{{ $user->name }}</p>
    <p>{{ $user->email }}</p>
    <!-- Add additional user fields here as needed -->
    <hr>
@endforeach
