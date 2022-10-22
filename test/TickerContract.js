const { ethers } = require("hardhat");
const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Ticket Contract Test", () => {
  const deployTicketContract = async () => {
    const [owner, address1, address2] = await ethers.getSigners();
    const Ticket = await ethers.getContractFactory("TicketContract");
    const ticket = await Ticket.deploy();
    return { ticket, owner, address1, address2 };
  };
  describe("合约部署", () => {
    it("should have proper address", async () => {
      const { ticket, owner, address1, address2 } = await loadFixture(
        deployTicketContract
      );
      const ContractAddress = await ticket.address;
      expect(ContractAddress).to.properAddress;
    });
    it("count = 0", async () => {
      const { ticket, owner, address1, address2 } = await loadFixture(
        deployTicketContract
      );
      let count = await ticket.tokenCounter();
      expect(count).equal(0);
    });
    it("max_token_in_1g", async () => {
      const { ticket, owner, address1, address2 } = await loadFixture(
        deployTicketContract
      );
      let max1g = await ticket.MAX_TOKENS_1g();
      expect(max1g).equal(100);
    });
    it("right owner address", async () => {
      const { ticket, owner, address1, address2 } = await loadFixture(
        deployTicketContract
      );
      let o = await ticket.owner();
      expect(o).equal(owner.address);
    });
  });
  // describe("一代mint", async () => {
  //   it("not owner cannot mint", async () => {
  //     const { ticket, owner, address1, address2 } = await loadFixture(
  //       deployTicketContract
  //     );
  //     console.log(address1);
  //     await ticket.connect(address1).mint_1g(address1, "");
  //   });
  // });
});
