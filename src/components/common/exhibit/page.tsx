'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "./style.css";
import AllExhibit from './allExhibit';
import FactoryCustoms from './factoryCustoms';
import NeoClassic from './neoClassic';
import RetroClassic from './retroClassic';
import Touring from './touring';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Exhibit = () => {
    const [value, setValue] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleChange = (event: React.SyntheticEvent | SelectChangeEvent<number>, newValue: number | string) => {
        if (typeof newValue === 'number') {
            // This is for Tabs component
            setValue(newValue);
        } else {
            // This is for Select component
            setValue(Number(event.target.value));
        }
    };

    const tabOptions = [
        { label: "All", component: <AllExhibit /> },
        { label: "Factory Customs", component: <FactoryCustoms /> },
        { label: "Neo Classic", component: <NeoClassic /> },
        { label: "Retro Classic", component: <RetroClassic /> },
        { label: "Touring", component: <Touring /> },
    ];

    return (
        <div className='pt-[50px] wrapExhibit'>
            <h3 className='text-[18px] md:text-[24px] font-SourceSerifProRegular text-[#fff] flex justify-center text-center'>A Fusion of Heritage and Innovation</h3>
            <h2 className='text-[#fff] flex justify-center text-center text-[40px] md:text-[126px]'>Exhibit of Excellence</h2>
            <Box sx={{ width: '100%', marginTop: { xs: '20px', md: '120px', }, }}>
                <Box className='exhibitHeader' sx={{ borderBottom: 1, borderColor: '#5F5F5F', justifyContent: 'center', textAlign: 'center', width: '80%', margin: 'auto' }}>
                    {isMobile ? (
                        <FormControl fullWidth>
                            <Select
                                value={value}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                {tabOptions.map((option, index) => (
                                    <MenuItem key={index} value={index}>{option.label}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    ) : (
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            {tabOptions.map((option, index) => (
                                <Tab key={index} label={option.label} {...a11yProps(index)} />
                            ))}
                        </Tabs>
                    )}
                </Box>
                {tabOptions.map((option, index) => (
                    <CustomTabPanel key={index} value={value} index={index}>
                        {option.component}
                    </CustomTabPanel>
                ))}
            </Box>
        </div>
    );
};

export default Exhibit;