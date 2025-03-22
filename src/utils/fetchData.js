import sectionsData from "../data/mockData.json";

// Get data from mockData.json file
const getSectionData = (sectionName) => {
    const section = sectionsData.find(
        (data) => data.sectionName === sectionName
    );
    return section ? section.sectionData : [];
};

export { getSectionData };