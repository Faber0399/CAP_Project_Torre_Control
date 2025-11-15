
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
})