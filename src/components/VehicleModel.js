import React, { FunctionComponent, useEffect, useState } from "react";
import VehicleModel from "../stores/store/vehicleModel/model";
import { TableRow, TableCell, Button } from "@material-ui/core";

interface Props {
  model: VehicleModel;
}

const VehicleModel: FunctionComponent<Props> = ({ model }) => {
  useEffect(() => {
    setMakeId(model.makeId);
  }, [model.makeId]);

  useEffect(() => {
    setModelName(model.modelName);
  }, [model.modelName]);

  useEffect(() => {
    setModelAbbrv(model.modelAbbrv);
  }, [model.modelAbbrv]);

  const [makeId, setMakeId] = useState("");
  const [modelName, setModelName] = useState("");
  const [modelAbbrv, setModelAbbrv] = useState("");
  const [editMode, setEditMode] = useState(false);

  return (
    <React.Fragment>
      {editMode ? (
        <TableRow>
          <TableCell>{model.id}</TableCell>
          <TableCell align="right">
            <input
              type="text"
              value={makeId}
              onChange={(e) => setMakeId(e.target.value)}
            />
          </TableCell>
          <TableCell align="right">
            <input
              type="text"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
            />
          </TableCell>
          <TableCell align="right">
            <input
              type="text"
              value={modelAbbrv}
              onChange={(e) => setModelAbbrv(e.target.value)}
            />
          </TableCell>
          <TableCell align="right">
            <Button
              onClick={() => {
                setEditMode(false);
                model.editModelFields(makeId, modelName, modelAbbrv);
              }}
              variant="outlined"
            >
              Save
            </Button>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <TableCell>{model.id}</TableCell>
          <TableCell align="right">{model.makeId}</TableCell>
          <TableCell align="right">{model.modelName}</TableCell>
          <TableCell align="right">{model.modelAbbrv}</TableCell>
          <TableCell align="right">
            <i
              className="fa fa-pencil-square-o addHoverHand"
              aria-hidden="true"
              onClick={() => setEditMode(true)}
            ></i>
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
};

export { VehicleModel };
