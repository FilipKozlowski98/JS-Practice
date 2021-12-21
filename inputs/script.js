const getRadioInfo = () => {
  const radioInputs = document.getElementsByName("radioTest");
  for (let i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].checked) {
      return radioInputs[i].value;
    }
  }
  return "none";
};

const getCheckboxInfo = () => {
  const checkboxInputs = document.getElementsByName("checkboxTest");
  const returnArray = [];
  for (let i = 0; i < checkboxInputs.length; i++) {
    if (checkboxInputs[i].checked) {
      returnArray.push(checkboxInputs[i].value);
    }
  }
  if (returnArray.length) {
    return returnArray;
  } else {
    return "none";
  }
};

const getFileInfo = () => {
  return document.querySelector("#fileInput").value
    ? document
        .querySelector("#fileInput")
        .value.slice(
          document.querySelector("#fileInput").value.indexOf("fakepath") + 9
        )
    : "none";
};

const getRangeInfo = () => {
  return document.querySelector("#rangeInput").value;
};

const consoleLogValues = () => {
  console.log(
    `Radio: ${getRadioInfo()}\nCheckbox: ${getCheckboxInfo()}\nFile: ${getFileInfo()}\nRange: ${getRangeInfo()}`
  );
};

document
  .querySelector("#consoleLogButton")
  .addEventListener("click", consoleLogValues);
