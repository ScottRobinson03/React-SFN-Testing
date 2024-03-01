import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function App() {
    const [drinkData, setDrinkData] = useState([]);

    useEffect(() => {
        setDrinkData([
            {
                name: "J20 Orange & Passionfruit",
                alcoholic: false,
                cost: 2.3,
            },
            {
                name: "Mixed Fruit Kopparberg",
                alcoholic: true,
                cost: 3.0,
            },
            {
                name: "South Comfort & Lemonade",
                alcoholic: true,
                cost: 3.7,
            },
            {
                name: "White Zinfandel (175ml)",
                alcoholic: true,
                cost: 4.25,
            },
            {
                name: "Apple Juice",
                alcoholic: false,
                cost: 1.8,
            },
            {
                name: "Diet Lemonade",
                alcoholic: false,
                cost: 2.1,
            },
            {
                name: "Diet Coke",
                alcoholic: false,
                cost: 2.1,
            },
        ]);
    }, []);

    return (
        <>
            <Typography align="center" variant="h3">
                The Apple Tree
            </Typography>
            <TableContainer component={Paper}>
                <Table align="center" sx={{ maxWidth: 700 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <b>
                                    <u>Name</u>
                                </b>
                            </TableCell>
                            <TableCell align="center">
                                <b>
                                    <u>Cost</u>
                                </b>
                            </TableCell>
                            <TableCell align="center">
                                <b>
                                    <u>Alcoholic</u>
                                </b>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {drinkData
                            .sort((a, b) => (a.name < b.name ? -1 : a.name === b.name ? 0 : 1))
                            .map(drink => {
                                return (
                                    <TableRow key={drink.name}>
                                        <TableCell align="center">{drink.name}</TableCell>
                                        <TableCell align="center">
                                            {drink.cost.toFixed(2)}
                                        </TableCell>
                                        <TableCell align="center">
                                            {drink.alcoholic.toString()}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
