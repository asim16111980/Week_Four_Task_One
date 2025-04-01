import sectionsData from "../data/mockData.json";

// Get data from mockData.json file
const getSectionData = (sectionName) => {
    const section = sectionsData.find(
        (data) => data.sectionName === sectionName
    );
    return section ? section.sectionData : [];
};

// Calculate product net price after the discount
const calNetPrice = (price, discount) => {
    return (price - ((price * discount) / 100)).toFixed(3)
}

export { getSectionData,calNetPrice };