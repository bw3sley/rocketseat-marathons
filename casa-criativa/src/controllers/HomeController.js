const database = require("../database/config");

module.exports = {
    SelectAllIdeas(req, res) {
        const ideas = database.all(`
            SELECT 
                Ideas.Id,
                Ideas.Title,
                Ideas.Image,
                Ideas.Category,
                Ideas.Description,
                Ideas.Link

            FROM Ideas
        `, (error, rows) => {
            if(error) return res.send(`Erro no banco de dados. ${error}`);

            const reversedIdeas = [...rows].reverse();
            
            let lastIdeas = [];
        
            for (let idea of reversedIdeas) {
                if(lastIdeas.length < 3) {
                    lastIdeas.push(idea);
                }
            }

            return res.render("index", { ideas: lastIdeas });
        });
    }
}