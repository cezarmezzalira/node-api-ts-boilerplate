import './util/module-alias';
import express, { Application } from 'express';
import routes from './routes';

export class SetupServer {
  private app: Application;

  constructor(private port = 3000) {
    this.app = express();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupRoutes();
  }

  private setupExpress() {
    this.app.use(express.json());
  }

  private setupRoutes() {
    this.app.use(routes);
  }

  public getApp(): Application {
    return this.app;
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port: ${this.port}`);
    });
  }
}
