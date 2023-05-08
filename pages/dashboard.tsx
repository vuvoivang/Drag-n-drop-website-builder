import { useEffect, useState } from 'react'
import Logo from 'public/images/logo.webp';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import Table from 'shared/ProjectsTable';
import _var from '../display/styles/common/_var.module.scss';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function LandingPage() {
    const [openModalNewProject, setOpenModalNewProject] = useState(false);
    useEffect(() => {

    }, []);
    return (
        <div className="min-h-screen transition w-full px-32 pb-4">
            <div className='items-center flex w-full pl-4 justify-between' style={{ borderBottom: '1px solid rgba(51,48,60,.12)' }}>
                <a href='/' className='logo-container flex items-center' style={{ width: '200px' }}>
                    <Image className='header-logo' src={Logo} alt='Our Logo' height={80} width={80} />
                    <span className='self-center text-xl font-bold whitespace-nowrap text-stone-600'>Buildify</span>
                </a>
                <Avatar />
            </div>
            <div>
                <div className='flex justify-between pt-4'>
                    <h2 className='text-3xl font-bold' style={{color: _var.primaryColor}}>List project</h2>
                    <Button className='btn btn-primary' variant="contained" style={{color: _var.whiteColor, padding: '8px 16px', backgroundColor: _var.blueDarkColor, paddingLeft: 8}} color='secondary' onClick={()=> {

                    }}><AddIcon size="small"/> <span style={{marginLeft: 4, textTransform: "capitalize"}}>{' '} New project</span></Button>
                </div>
                <div className='mt-8'>
                    <Table />
                </div>
            </div>
        </div>
    )
}
