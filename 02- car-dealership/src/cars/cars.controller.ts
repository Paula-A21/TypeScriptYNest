import { Body, Controller, Get, Param, Delete, ParseIntPipe, Post, Patch } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

constructor( 
    private readonly carsService: CarsService
){}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }
      
    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number) { //uso el @Param('id') para aclararle a nest que el valor id que voy a utilizar es el que recibo por parametros
        console.log(id);
        const carId = this.carsService.findOneById(id);
        return carId;
    }

    @Post()
    createCar(@Body() body: any) {
        // return this.carsService.create(createCarDto);

        return body;
    }

    @Patch(':id')
    updateCar(@Body() body: any) {
        // return this.carsService.create(createCarDto);
        return body;
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) { //uso el @Param('id') para aclararle a nest que el valor id que voy a utilizar es el que recibo por parametros
        return {
            method: 'delete',
            id
        }
    }

}
