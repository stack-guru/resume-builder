import { NEW_EXPERIENCE_HEIGHT } from "../constants"

class experience
{
    constructor(id = 1) {
        this.name = 'experience'
        this.id = id
        this.height = NEW_EXPERIENCE_HEIGHT
        this.company = ''
        this.title = ''
        this.description = ''
    }

    setId(id) {
        this.id = id
    }

    setHeight(height) {
        this.height = height
    }

    setCompany(text) {
        this.company = text
    }

    setTitle(text) {
        this.title = text
    }
    
    setDescription(text) {
        this.description = text
    }
}

export default experience