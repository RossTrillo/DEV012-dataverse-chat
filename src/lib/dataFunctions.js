export const filterData = (data, filterBy, value) => {
    console.log("🚀 ~ file: dataFunctions.js:2 ~ filterData ~ value:", value)
    return data.filter((element) => element[filterBy] === value);
  };
  
  export const sortData = (data, sortBy, sortOrder) => {
    const sortedData = [...data];
  
    const asc = sortedData.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      } else if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      // }else if (a[sortBy] <= b[sortBy]){
      //   return 0
      // }
    });
  
    if (sortOrder === "desc") {
      asc.reverse();
    }
  
    return sortedData;
  };
  
 export const computeStats = (data) => {
  
    const arrayOfChannels = data.map((item) => item.channel);
    // ["tnt", "spn", "espn", "fox", "fox"]
    const numbersOfChannels = arrayOfChannels.reduce((accum, channel) => {
      if (accum[channel]) {
        // accum[channel]++;
        accum[channel] = Number(accum[channel]) + 1;
      } else {
        accum[channel] = 1;
      }
      return accum;
    }, {});
    // {}
    // { tnt: 1}
    // { tnt : 1
    //     spn : 1  }
    // { tnt : 1, spn : 1, espn : 1}
    // { tnt : 1, spn : 1, espn : 1, fox : 1}
    // { tnt : 1, spn : 1, espn : 1, fox : 1 + 1(2)}
  
    // for (const key in numbersOfChannels) {
    //   numbersOfChannels[key] = Number(numbersOfChannels[key]);
    // }
  
    return numbersOfChannels;
  };

  
  