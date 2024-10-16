import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import owner from "../../assets/img/owner.png";
import FilterRow from "./FilterRow";
import { FaEye } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
function Invoices() {
  const DataCollection = [
    {
      id: 1,
      Date: "06/14/2024",
      InvoiceNumber: "123 456 789",
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Amount: "$3,000.00",
      status: "Open",
    },
    {
      id: 1,
      Date: "06/14/2024",
      InvoiceNumber: "123 456 789",
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Amount: "$3,000.00",
      status: "Paid",
    },
    {
      id: 1,
      Date: "06/14/2024",
      InvoiceNumber: "123 456 789",
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Amount: "$3,000.00",
      status: "Overdue",
    },
  ];
  const getStatusClass = (status) => {
    switch (status) {
      case "Overdue":
        return "text-danger";
      case "Paid":
        return "text-success";
      default:
        return "";
    }
  };
  return (
    <div>
      <FilterRow searchName="Invoice" btnName="Create Invoice" btnLink="#" />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Date</th>
              <th className="small fw-semi text-black text-nowrap">
                Invoice Number
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Owner Name
              </th>
              <th className="small fw-semi text-black text-nowrap">Amount</th>
              <th className="small fw-semi text-black text-nowrap">Status</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black text-nowrap">{data.Date}</td>
                <td className="small text-black text-nowrap">
                  {data.InvoiceNumber}
                </td>
                <td className="small text-black">
                  <div className="d-flex align-items-center">
                    <img
                      src={data.Owner}
                      alt="property-img"
                      className="img-fluid me-2 owner-img"
                    />
                    {data.OwnerName}
                  </div>
                </td>
                <td className="small text-black">{data.Amount}</td>
                <td className={`small fw-semi ${getStatusClass(data.status)}`}>
                  {data.status}
                </td>
                <td className="small text-black">
                  <div className="d-flex justify-content-center">
                    <Link to="#" className="mx-1 tblicon">
                      <FaDollarSign className="fs-5" />
                    </Link>
                    <Link to="#" className="mx-1 tblicon">
                      <FaEye className="fs-5" />
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

export default Invoices;
