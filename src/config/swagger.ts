import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function SwaggerConfig(app: INestApplication): void {
  const documentBuilder = new DocumentBuilder()
    .setTitle('JOI ENERGY SERVER')
    .setDescription('The API Documentations for JOI Service')
    .addBearerAuth();

  if (process.env.API_VERSION) {
    documentBuilder.setVersion(process.env.API_VERSION);
  }

  const document = SwaggerModule.createDocument(app, documentBuilder.build());
  SwaggerModule.setup('documentation', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'JOI APIs Service',
    customfavIcon: '../img/favicon.ico',
    customCssUrl: '../css/swagger.css',
  });

  console.info(
    `Documentation: http://localhost:${process.env.PORT}/documentation`,
  );
}
