@path: 'TorreControlSRV'
service TorreControlService {

  @(restrict: [{
    grant: '*',
    to   : 'TorreControlAdmin'
  }])
  @cds.persistence.exists
  entity TorreControl {
    key caseID      : UUID;
    key reporteSise : String(11);
        displayId   : String;
        marca       : String;
        modelo      : String;
        placas      : String;
        serie       : String;
        descripcion : String;
        color       : String;
        codigoAmis  : String;
        conductor   : String;
  };
}
