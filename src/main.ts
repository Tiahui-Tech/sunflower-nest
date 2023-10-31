import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,POST,HEAD',
    allowedHeaders:
      'Content-Type, Accept, Authorization, Access-Control-Allow-Origin, x-apollo-operation-name, apollo-require-preflight',
    credentials: true,
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
