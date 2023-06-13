<?php

namespace App\Http\Controllers;

use App\Models\User;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class PassportController extends Controller
{
    /**
     * Register a new user.
     *
     * @throws ValidationException
     */
    public function register(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $user = User::create([
            'firstName' => $request->input('firstName'),
            'lastName' => $request->input('lastName'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        $token = JWT::encode([
            'sub' => $user->id,
            'iat' => time(),
            'exp' => time() + (60 * 60)
        ], env('JWT_SECRET'), 'HS256');

        return response()->json(['token' => $token], 200);
    }

    /**
     * Authenticate a user and generate a JWT token.
     */
    public function login(Request $request): JsonResponse
    {

        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {

            $user = auth()->user();

            if ($request->input('remember_me')) {

                $token = JWT::encode([
                    'sub' => $user->id,
                    'iat' => time(),
                    'exp' => time() + (60 * 60 * 24 * 30)
                ], env('JWT_SECRET'), 'HS256');

            } else {

                $token = JWT::encode([
                    'sub' => $user->id,
                    'iat' => time(),
                    'exp' => time() + (60 * 60)
                ], env('JWT_SECRET'), 'HS256');

            }

            return response()->json(
                [
                    'token' => $token,
                    'user' => auth()->user()
                ]
            );
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    /**
     * Get the authenticated user's info.
     */
    public function userInfo(): JsonResponse
    {
        $user = auth()->user();
        return response()->json(['user' => $user], 200);
    }

    /**
     * Verify a JWT token.
     */
    public function verifyToken(Request $request): JsonResponse
    {
        $token = $request->bearerToken();

        if (!$token) {
            return response()->json(['error' => 'Token not provided'], 401);
        }

        try {
            $decoded = JWT::decode($token, new Key(env('JWT_SECRET'), 'HS256'));
            return response()->json([
                'valid' => true
            ], 200);
        } catch (ExpiredException $e) {
            return response()->json([
                'valid' => false,
                'error' => 'Token has expired'
            ], 401);
        } catch (\Exception $e) {
            return response()->json([
                'valid' => false,
                'error' => 'Invalid token'
            ], 401);
        }
    }
}
