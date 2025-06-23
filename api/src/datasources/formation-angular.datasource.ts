import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'formation_angular',
  connector: 'mysql',
  url: 'mysql://root@localhost:3306/formation_angular',
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'formation_angular'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class FormationAngularDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'formation_angular';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.formation_angular', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
