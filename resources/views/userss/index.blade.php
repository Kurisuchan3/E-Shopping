<!-- resources/views/users/index.blade.php -->
@foreach($users as $user)
    <p>Username: {{ $user->email }}</p>
    <p>Password (hashed): {{ $user->password }}</p>
@endforeach