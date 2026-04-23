import { Injectable } from '@nestjs/common';

@Injectable()
export class AssetsService {
    getAll() {
        return [
            { name: 'PETR4', type: 'AÇÃO' },
            { name: 'HGL11', type: 'FII' },
         
        ];
    }
}
