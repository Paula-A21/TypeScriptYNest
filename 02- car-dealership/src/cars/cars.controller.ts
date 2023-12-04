import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    private cars = ['Toyota', 'Honda', 'Jeep'];

    @Get()
    getAllCars() {
        return this.cars;
    }
      
    @Get(':id')
    getCarById(@Param('id') id: string) { //uso el @Param('id') para aclararle a nest que el valor id que voy a utilizar es el que recibo por parametros
        console.log("Hola " + id);
        return this.cars[id];
    }
}
