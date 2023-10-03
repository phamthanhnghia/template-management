@if (session()->has('errors'))
    <div class="alert alert-danger">
        @foreach (session()->get('errors')->all() as $error)
            <p>{{ $error }}</p>
        @endforeach
    </div>
@endif

<form method="POST" action="{{ route('users.update', $user->id) }}">
    @csrf
    @method('PUT')
    <input type="text" name="name" value="{{ $user->name }}"><br>
    <input type="email" name="email" value="{{ $user->email }}"><br>
    <!-- Add additional input fields for other user attributes here -->
    <button type="submit">Update</button>
</form>
