import { NEW_EXPERIENCE_HEIGHT } from "../constants"

class experience
{
    constructor() {
        this.height = NEW_EXPERIENCE_HEIGHT
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