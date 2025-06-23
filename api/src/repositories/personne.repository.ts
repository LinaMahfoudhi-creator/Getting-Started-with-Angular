import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FormationAngularDataSource} from '../datasources';
import {Personne, PersonneRelations} from '../models';

export class PersonneRepository extends DefaultCrudRepository<
  Personne,
  typeof Personne.prototype.id,
  PersonneRelations
> {
  constructor(
    @inject('datasources.formation_angular') dataSource: FormationAngularDataSource,
  ) {
    super(Personne, dataSource);
  }
}
