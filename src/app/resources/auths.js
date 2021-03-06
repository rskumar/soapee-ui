import when from 'when';

import { post, get } from 'utils/http';
import baseUrl from 'utils/baseUrl';

export function getCurrentUser() {
    return when(
        get( baseUrl( 'auths/current-user' ) )
    );
}

export function signupOrLoginThirdParty( provider, accessToken ) {
    return when(
        post( baseUrl( 'auths' ), {
            params: {
                provider,
                accessToken
            }
        } )
    );
}

export function signupLocal( username, password ) {
    return when(
        post( baseUrl( 'auths' ), {
            params: {
                provider: 'local',
                userDetails: {
                    username,
                    password
                }
            }
        } )
    );
}

export function loginLocal( username, password ) {
    return when(
        post( baseUrl( 'auths/login' ), {
            params: {
                username,
                password
            }
        } )
    );
}

export function logout() {
    return when(
        post( baseUrl( 'auths/logout' ) )
    );
}

export function usernameExists( username ) {
    return when(
        get( baseUrl( `auths/users/${username}/exists` ) )
    );
}