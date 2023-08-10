using trainer as db from '../db/data-model';

@path: 'boot_dev'
service CatalogService {

    entity training as projection on db.training;

}
