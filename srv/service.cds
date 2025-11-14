using { com.qualitas as my } from '../db/schema';

@path: 'TorreControlSRV'
service TorreControlService   { 
  
  @(restrict: [{ grant: '*', to: 'TorreControlAdmin' }])
  entity TorreControl as projection on my.TorreControl;
}