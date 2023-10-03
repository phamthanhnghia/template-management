<form method="POST" action="{{ route('users.store') }}">
    @csrf
    <input type="text" name="name" placeholder="Name"><br>
    <input type="email" name="email" placeholder="Email"><br>
    <input type="password" name="password" placeholder="Password"><br>
    <!-- Add additional input fields for other user attributes here -->
    <button type="submit">Create</button>
</form>
