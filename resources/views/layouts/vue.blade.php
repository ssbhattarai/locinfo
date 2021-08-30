<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>

<body>
    @php
        $user = true;
    @endphp
    @if ($user)
    @php
    $user_auth_data = [
        'isLoggedin' => true,
        'user' => (object) [
            'id' => 1,
            'name' => 'John Doe',
            'email' => "admin@example.com",
            'role' => 'admin'
    ]
    ]
    @endphp
@else
    @php
    $user_auth_data = [
        'isLoggedin' => false
    ];
    @endphp
@endif
<script>
    window.Laravel = JSON.parse(atob('{{ base64_encode(json_encode($user_auth_data)) }}'));
</script>



    <div id="app"></div>
    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>

</html>
