const database = require("../database/config");

module.exports = {
    SelectReversedIdeas(req, res) {
        database.all(`
            SELECT 
                Ideas.Title,
                Ideas.Category,
                Ideas.Description,
                Ideas.Image,
                Ideas.Link

            FROM Ideas
        `, (error, rows) => {
            if(error) return res.send(`Erro no servidor. ${error}`);

            const reversedIdeas = [...rows];
            return res.render("ideas", { ideas: reversedIdeas });
        })
    },

    CreateNewIdea(req, res) {
        const { title, category, image, description, link } = req.body;

        const query = `
            INSERT INTO Ideas (
                Title,
                Image,
                Category,
                Description,
                Link
            )
    
            VALUES (
                ?,
                ?,
                ?,
                ?,
                ?
            )
        `
    
        const values = [
            title,
            image,
            category,
            description,
            link
        ];
    
        database.run(query, values, (error) => {
            if(error) return res.send(`Erro no servidor. ${error}`);
            
            return res.redirect("/ideas");
        });
    }
}