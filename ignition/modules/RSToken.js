const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("RSTokenModule", (m) => {

  const lock = m.contract("RSToken", []);


  return { lock };
});