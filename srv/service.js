
export default (async function () {
    
    this.on('READ', 'TorreControl', async (req, next) => {
        const { db } = cds.services;
        let result = await db.run(
            SELECT.columns(req.query.SELECT.columns)
                .from("com.qualitas.TorreControl")
                .where(req.query.SELECT.where)
                .orderBy(req.query.SELECT.orderBy)
        );
        return result;
    });

    this.on('CREATE', 'TorreControl', async (req, next) => {
        const { db } = cds.services;
        const newEntry = req.data;
        await db.run(
            INSERT.into("com.qualitas.TorreControl").entries(newEntry)
        );
        return { ...req.data };
    });

    this.on('UPDATE', 'TorreControl', async (req, next) => {
        console.log('Update Query:', req.query.UPDATE.where);
        const { db } = cds.services;
        const updatedData = req.data;
        await db.run(
            UPDATE("com.qualitas.TorreControl")
                .set(updatedData)
                .where(req.query.UPDATE.where)
        );
        
        // Devolver los datos actualizados combinados con las claves
        return { ...req.data };
    });

    this.on('DELETE', 'TorreControl', async (req, next) => {
        const { db } = cds.services;
        const result = await db.run(
            DELETE.from("com.qualitas.TorreControl")
                .where(req.query.DELETE.where)
        );
        return result;
    });
})