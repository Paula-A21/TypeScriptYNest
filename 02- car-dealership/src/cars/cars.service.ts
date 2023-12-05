import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable() //esto significa que esta clase se puede inyectar
export class CarsService {
    private cars = [
        {
            id: 1,
            name: 'Ford',
            model: 'Fiesta',
        },
        {
            id: 2,
            name: 'Toyota',
            model: 'Corolla',
        },
        {
            id: 3,
            name: 'Jeep',
            model: 'Cherokee',
        }
    ]

    findAll() {
        return this.cars;
    }

    findOneById(id: number) {
        const car = this.cars[id];

        if(!car){
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        
        return car;
    }
}
