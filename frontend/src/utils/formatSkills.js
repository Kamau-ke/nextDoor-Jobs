const formatSkills=(skills)=>{
    if(!skills) return []
    return Array.isArray(skills) ? skills : [skills]
}

export default formatSkills