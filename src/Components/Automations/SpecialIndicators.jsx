import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import icon from "../../assets/img/icon-auto.png";
import FilterRow from "./FilterRow";
import { TbCopy } from "react-icons/tb";
import GroupImage from "../Checklist/GroupImage";

function SpecialIndicators() {
  const DataCollection = [
    {
      id: 1,
      Icon: icon,
      SpecialIndicatorName: "Every Monday",
      Text: "Leave out (number of guest total) cupcakes...",
      Property: <GroupImage />,
      Active: "On",
    },
    {
      id: 1,
      Icon: icon,
      SpecialIndicatorName: "Every Monday",
      Text: "Leave out (number of guest total) cupcakes...",
      Property: <GroupImage />,
      Active: "Off",
    },
  ];

  return (
    <div>
      <FilterRow
        searchName="Special Indicator"
        btnName="Add Special Indicator"
        btnLink="/admin/add-special-indicators"
      />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Icon</th>
              <th className="small fw-semi text-black text-nowrap">
                Special Indicator Name
              </th>
              <th className="small fw-semi text-black text-nowrap">Text</th>
              <th className="small fw-semi text-black text-nowrap">
                Properties
              </th>
              <th className="small fw-semi text-black text-nowrap">Active</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black text-nowrap">
                  <img
                    src={data.Icon}
                    alt="property-img"
                    className="img-fluid me-2 property-img"
                  />
                </td>
                <td className="small text-black text-nowrap">
                  {data.SpecialIndicatorName}
                </td>
                <td className="small text-black text-nowrap">{data.Text}</td>
                <td className="small text-black">
                  <div className="d-flex align-items-center">
                    {data.Property}
                  </div>
                </td>
                <td className="small fw-semi">
                  <div className=" d-flex align-items-center justify-content-center">
                    <span>Off</span>
                    <label className="switch mx-1">
                      <input
                        type="checkbox"
                        id="Capture"
                        checked={data.Active === "On"}
                        readOnly
                      />
                      <span className="slider round"></span>
                    </label>
                    <span>On</span>
                  </div>
                </td>
                <td className="small text-black ">
                  <div className="d-flex justify-content-center">
                    <Link to="#" className="mx-1 tblicon">
                      <TbCopy className="fs-5" />
                    </Link>
                    <Link to="#" className="mx-1 tblicon">
                      <IoPencil className=" fs-5" />
                    </Link>
                    <Link to="#" className="mx-1 tblicon">
                      <HiTrash className=" fs-5" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SpecialIndicators;
