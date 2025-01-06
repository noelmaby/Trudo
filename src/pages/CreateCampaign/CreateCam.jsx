import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./createcamp.css";
import { PinataSDK } from "pinata-web3";
import { ethers } from "ethers";

const CreateCam = () => {
  const [campaignName, setCampaignName] = useState("");
  const [description, setDescription] = useState("");
  const [recepadd, setRecepadd] = useState("");
  const [tokenprice, setTokenprice] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [imageFile, setImageFile] = useState();

  const handleImageChange = (event) => {
    const file1 = event.target.files[0];
    setImageFile(file1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log("Campaign Name:", campaignName);
  console.log("Description:", description);
  console.log("Receiptent Adress", recepadd);
  console.log("Token Price", tokenprice);
  console.log("Target Amount (ETH):", targetAmount);
  console.log("Selected Image File:", imageFile);

  const pinata = new PinataSDK({
    pinataJwt:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkOTBhNjJkZi02MmNkLTRlY2EtODM4MC1mYTZjMzEyYTFmYjUiLCJlbWFpbCI6Im5vZWxtYW5qYXlpbGFieUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYWVjMDU1YzhjNDhhNGRmZTlhNjAiLCJzY29wZWRLZXlTZWNyZXQiOiIzM2NiNTczYWRjNjI3YTEyNzkyOTYyNWRmOGVlNGI2NmM1YjA2MzQwNTdhNDFmZDgyM2M0MDc1YTk2ZGYxY2ViIiwiZXhwIjoxNzY3NDE1OTYwfQ.qpU8V6_33q_MbA2A7-zQTkap6ddUPXQy9R_k5IzidNM",
    pinataGateway: "silver-worrying-wolverine-936.mypinata.cloud",
  });

  async function main() {
    try {
      const blob = new Blob([imageFile], { type: imageFile.type });
      const imgfile = new File([blob], imageFile.name, { type: blob.type });
      const imgupload = await pinata.upload.file(imgfile);
      const iphash = imgupload.IpfsHash;
      const imageurl = `https://gateway.pinata.cloud/ipfs/${iphash}`;
      return imageurl;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  async function uploadmeta(imageurl) {
    try {
      const uploadMetadata = await pinata.upload.json({
        campaignname: campaignName,
        descriptioncam: description,
        imageUrl: imageurl,
      });
      const iphash2 = uploadMetadata.IpfsHash;
      const metadata = `https://gateway.pinata.cloud/ipfs/${iphash2}`;
      console.log(metadata);
    } catch (error) {
      console.error("Error uploading metadata:", error);
    }
  }

  async function createCampaign() {
    const imageurl = await main();
    if (imageurl) {
      await uploadmeta(imageurl);
    }
  }

  return (
    <div className="create-campaign mt-5">
      <h1>Create a New Campaign</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-5">
          <label htmlFor="campaignName">Campaign Name:</label>
          <input
            type="text"
            id="campaignName"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-5">
          <label htmlFor="campaignName">Recipitent Adress:</label>
          <input
            type="text"
            id="campaignName"
            value={recepadd}
            onChange={(e) => setRecepadd(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="targetAmount">Token Price :</label>
          <input
            type="number"
            id="targetAmount"
            value={tokenprice}
            onChange={(e) => setTokenprice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="targetAmount">Target Amount :</label>
          <input
            type="number"
            id="targetAmount"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button
          onClick={createCampaign}
          type="submit"
          className="submit-button"
        >
          Create Metadata
        </button>
        <button type="submit" className="submit-button mt-3">
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default CreateCam;
