
export const getProject = (req,res,next) => {
    const {id} =req.params
    if (!id) {
        req.status(404).json({message:"Project not found"})
    }
    if('2024'===id){

        const project = {
            id: id,
            title: "Construyendo Escuelas en África",
            description:
              "Ayúdanos a construir nuevas escuelas para niños en comunidades desfavorecidas.",
            goal: 5000,
            startDate: "01/01/2024",
            endDate: "31/12/2024",
            creator: "Organización sin fines de lucro XYZ",
            status: "En progreso",
            category: "Educación",
            location: "África",
            images: [
              "https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/9628111/pexels-photo-9628111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/9628112/pexels-photo-9628112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
          };
    
          res.status(201).json(project)
    }else {
        res.status(401).json({message:'Invalid Id'});
    }
};