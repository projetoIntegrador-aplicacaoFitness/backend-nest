import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Exercicio } from "src/exercicio/entities/exercicio.entity";
import { Categoria } from "src/categoria/entities/categoria.entity";

@Injectable()
export class DevService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'db_fitness',
            entities: [Exercicio, Categoria, Usuario],
            synchronize: true,
    };
  }
}