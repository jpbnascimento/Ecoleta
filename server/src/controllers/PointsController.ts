import knex from '../database/connection';
import { Request, Response } from 'express';


class PointsController {
    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;
    
        // seria a mesma coisa que const name = request.body.name;
    
        const trx = await knex.transaction(); // serve para eveitar que uma query execute e outra não em caso de falha 
    
        const insertedIds = await trx('points').insert({
            Image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf  
        });
    
        const point_id = insertedIds[0];
    
        const pointItens = items.map((item_id: number) => {
            return {
                item_id,
                point_id,
            };
        })
    
        await trx('points_items').insert(pointItens);
    
        return response.json({ success: 'jessica'});

    }
}

export default PointsController;