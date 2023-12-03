const fs = require('fs');



const exploreDirectory = (directoryPath, currencySample) => {
    const files = fs.readdirSync(directoryPath);
    const options = [];
    const data = [];
    let isOption = false;
    files.forEach((file) => {
        if(!file.includes('--')){
            const [parentid,optionid, name,Pricepng] = file.split('-');//[id,name,price--t--st.png]
            const [optionPrice,pngjpg]=Pricepng.split('.');
            isOption = true;
            options.push({
                parentid:`${parentid}`,
                id: `${optionid}`,
                name: name,
                price: `${optionPrice}${currencySample}`,
                img: file,
            });
        }
    });
    console.log("options",options)

    files.forEach((file) => {//1-faaf-43--type1-type2--subtype1-subtype2.png, 1-1-fff-455
        isOption = false;
        if(file.includes('--')){
            const [id, ...rest] = file.split('-');//[id,name,price--t--st.png]
        const [nameAndParentPrice, typesAndSubtypes,Subtypespngjpg] = rest.join('-').split('--');
        const Subtypes=Subtypespngjpg.split('.')[0].split('-')
        const [name, parentPrice] = nameAndParentPrice.split('-');//[name,price]
        const [price, ...typesAndSubtypesArray] = parentPrice ? parentPrice.split('-') : [null];
        
        const [types, ...subtypesArray] = typesAndSubtypes ? typesAndSubtypes.split('--') : [null];
        const typesArray = typesAndSubtypes ? typesAndSubtypes.split('-') : [];
        const subtypes = subtypesArray ? subtypesArray.join('').split('-') : [];
        const filteredOptions = options.filter(option => option.parentid === id);

        data.push({
            id,
            name,
            price: price ? `${price}${currencySample}` : null,
            options:filteredOptions,
            img: file,
            type: typesArray,
            subtype: Subtypes,
        }); }
        //[name-price,t,st.png]
    });

    return data;
};

const directoryPath = './path/images'; // Replace with your actual path
const currencySample = '$'; // Replace with your currency symbol

const result = exploreDirectory(directoryPath, currencySample);

const jsonData = {
    Data: result,
};

console.log(JSON.stringify(jsonData, null, 2));





