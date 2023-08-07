import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  
  if(localStorage.getItem('token')){
    return false
  }
  
  return true
  
  
  
};
