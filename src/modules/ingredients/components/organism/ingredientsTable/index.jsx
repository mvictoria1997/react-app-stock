import React from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton
} from "@mui/material";

const IngredientsTable = ({ ingredients, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Nombre</strong></TableCell>
            <TableCell><strong>Cantidad</strong></TableCell>
            <TableCell><strong>Unidad</strong></TableCell>
            <TableCell><strong>Categoría</strong></TableCell>
            <TableCell align="right"><strong>Acciones</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.map((ingredient) => (
            <TableRow key={ingredient.id}>
              <TableCell>{ingredient.nombre}</TableCell>
              <TableCell>{ingredient.cantidad}</TableCell>
              <TableCell>{ingredient.unidad}</TableCell>
              <TableCell>{ingredient.categoria}</TableCell>
              {/* <TableCell align="right">
                <IconButton onClick={() => onEdit(ingredient)}>
                  <PencilSimple size={20} />
                </IconButton>
                <IconButton onClick={() => onDelete(ingredient.id)}>
                  <Trash size={20} color="red" />
                </IconButton>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IngredientsTable;
