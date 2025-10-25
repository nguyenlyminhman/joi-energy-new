import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerConfig } from './config/swagger';
import * as morgan from 'morgan';
import { SharingsModule } from './module/sharings/sharings.module';
import { SharingsService } from './module/sharings/sharings.service';


async function bootstrap(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );

  const serverConfig = app.select(SharingsModule).get(SharingsService);
  const { port } = serverConfig.serverPort;

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.use(helmet());
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.use(morgan('combined'));
  app.enableVersioning();
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });
  // Microservice config here

  // Setup swagger
  if (serverConfig.swaggerEnabled) {
    SwaggerConfig(app);
  }
  // Set global prefix for endpoint


  await app.listen(port);

  return app;
}

bootstrap();
