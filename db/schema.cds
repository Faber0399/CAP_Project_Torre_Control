using {
    managed
} from '@sap/cds/common';

namespace com.qualitas;

entity TorreControl : managed {
    
    key IDcaso : UUID;
    key reporteSise: String(11);
    displayId: String;
    marca: String;
    modelo: String;
    placas: String;
    serie: String;
    descripcion: String;
    color: String;
    codigoAmis: String;
    conductor: String;
    
}