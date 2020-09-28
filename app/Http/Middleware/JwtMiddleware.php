<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\URL;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenBlacklistedException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Auth\Middleware\Authenticate as Middleware;

class JWTMiddleware extends Middleware
{
    public function handle($request, Closure $next)
    {


        try {
            JWTAuth::parseToken()->authenticate();

        }
        catch (TokenBlacklistedException $e){
            return response()->json([
                'status' => "Unauthorized",
                'token_blacklisted' => true,
                'locale' => app()->getLocale(),
                'errors' => true,
                'data' => [
                    'message' => $e->getMessage(),
                ]
            ], isset(JsonResponse::$statusTexts[401]) ? 401 : JsonResponse::HTTP_UNAUTHORIZED);
        }
        catch (TokenExpiredException $e){

            if(URL::current() === URL::route('token.refresh')){
                $refreshed = JWTAuth::refresh(JWTAuth::getToken());
                $user = JWTAuth::setToken($refreshed)->toUser();
                //$request->headers->set('Authorization','Bearer '.$refreshed);
                //request()->cookie('token', $refreshed);
                return response()->json($refreshed);
                //return $next($request);
            }
            else{
                return response()->json([
                    'status' => "Unauthorized",
                    'token_expired' => true,
                    'locale' => app()->getLocale(),
                    'errors' => true,
                    'data' => [
                        'message' => $e->getMessage(),
                    ]
                ], isset(JsonResponse::$statusTexts[401]) ? 401 : JsonResponse::HTTP_UNAUTHORIZED);
            }
        }
        catch (TokenInvalidException $e){
            return response()->json([
                'status' => "Unauthorized",
                'token_invalid' => true,
                'locale' => app()->getLocale(),
                'errors' => true,
                'data' => [
                    'message' => $e->getMessage(),
                ]
            ], isset(JsonResponse::$statusTexts[401]) ? 401 : JsonResponse::HTTP_UNAUTHORIZED);
        }
        catch (JWTException $e){
            return response()->json([
                'status' => "Unauthorized",
                'login_required' => true,
                'locale' => app()->getLocale(),
                'errors' => true,
                'data' => [
                    'message' => $e->getMessage(),
                ]
            ], isset(JsonResponse::$statusTexts[401]) ? 401 : JsonResponse::HTTP_UNAUTHORIZED);
        }
        catch (AuthenticationException $e){
            return response()->json([
                'status' => "Unauthorized",
                'locale' => app()->getLocale(),
                'errors' => true,
                'data' => [
                    'message' => $e->getMessage(),
                ]
            ], isset(JsonResponse::$statusTexts[401]) ? 401 : JsonResponse::HTTP_UNAUTHORIZED);
        }

        return $next($request);
    }
}
