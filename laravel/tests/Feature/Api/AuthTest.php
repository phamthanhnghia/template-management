<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test a successful login.
     *
     * @return void
     */
    public function testLoginSuccess()
    {
        // Create a user
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
        ]);

        // Send a request to the login route
        $response = $this->postJson('/api/login', [
            'email' => 'test@example.com',
            'password' => 'password',
        ]);

        // Assert that the response has a successful status code
        $response->assertStatus(200);

        // Assert that the response has a token
        $response->assertJsonStructure([
            'token',
        ]);
    }

    /**
     * Test an invalid login.
     *
     * @return void
     */
    public function testInvalidLogin()
    {
        // Send a request with invalid credentials
        $response = $this->postJson('/api/login', [
            'email' => 'test@example.com',
            'password' => 'wrongpassword',
        ]);

        // Assert that the response has an error status code
        $response->assertStatus(401);

        // Assert that the response has an error message
        $response->assertJson([
            'error' => 'Invalid credentials',
        ]);
    }
}
