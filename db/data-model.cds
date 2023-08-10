namespace trainer;
using {managed, cuid} from '@sap/cds/common';

type Gender : String(20) enum{
    Male = 'M';
    Female = 'F';
};

type Email : String(255)@assert.format : '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';

aspect tasks {
    task    : String(100);
    Status  : String;
}

entity training: managed, cuid {
  
  name     : String(100);
  skill    : String(100);
  trainer  : String(80);
  location : String(30);
  room     : String(20);
  trainee  : String(100);
  duration : String(20);

}
