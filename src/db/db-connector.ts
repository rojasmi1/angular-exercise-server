import { Pool } from 'pg';

export class DBConnector {
  private pool: Pool;

  constructor() {
    this.pool = new Pool();
  }

  public getPool(): Pool {
    return this.pool;
  }
}
