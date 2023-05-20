import { useEffect, useState } from 'react'
import Logo from 'public/images/logo.png';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import ProjectsTable from 'shared/ProjectsTable';
import _var from '../display/styles/common/_var.module.scss';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField,
    Button as MaterialButton,

} from '@material-ui/core';
import userService, { PROJECT_TYPE } from 'services/user';
import toastMessage from 'utils/toast';
import { useRouter } from 'next/router';
export default function DashBoard() {
    const [openDialogNewProject, setOpenModalNewProject] = useState(false);

    const [project, setProject] = useState({
        name: '',
        type: -1,
    });
    const router = useRouter();

    const handleClickOpenDialogNewProject = () => {
        setOpenModalNewProject(true);
    };
    const handleCloseDialogNewProject = () => {
        setOpenModalNewProject(false);
    };
    const handleAddNewProject = () => {
        const currentTimestamp = new Date().getTime();
        const data = {
            ...project,
            createdTime: currentTimestamp,
            updatedTime: currentTimestamp,
        }

        userService.createNewProject(data).then(resp => {
            if (resp.id) {
                toastMessage.success('Create project successfully, build your website now');
                router.push(`/builder/${resp.id}`);
            } else toastMessage.error('Create project failed, please try again later');
        }).catch((err) => {
            console.log(err);
            toastMessage.error('Create project failed, please try again later');
        });
    };
    return (
        <div className="min-h-screen transition w-full px-32 pb-4">
            <div className='items-end flex w-full pl-4 justify-between py-4' style={{ borderBottom: '1px solid rgba(51,48,60,.12)' }}>
                <a href='/' className='logo-container flex items-center' style={{ width: '200px' }}>
                    <Image className='header-logo' src={Logo} alt='Our Logo' height={50} width={50} />
                    <span className='self-center text-xl font-bold whitespace-nowrap ml-2 text-indigo-500'>Buildify</span>
                </a>
                <Avatar />
            </div>
            <div>
                <div className='flex justify-between pt-4'>
                    <h2 className='text-3xl font-bold' style={{ color: _var.primaryColor }}>My projects</h2>
                    <Button className='btn btn-primary' variant="contained" style={{ color: _var.whiteColor, padding: '8px 16px', backgroundColor: _var.blueDarkColor, paddingLeft: 8 }} color='secondary' onClick={handleClickOpenDialogNewProject}><AddIcon /> <span style={{ marginLeft: 4, textTransform: "capitalize" }}>{' '} New project</span></Button>
                </div>
                <div className='mt-8'>
                    <ProjectsTable />
                </div>
            </div>


            <Dialog id="dialog-new-project" open={openDialogNewProject} onClose={handleCloseDialogNewProject} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Project Information</DialogTitle>
                <DialogContent style={{ width: 600 }}>
                    <DialogContentText style={{ fontSize: 14 }}>Your project's name must be unique</DialogContentText>
                    <TextField
                        margin='dense'
                        label='Name'
                        type='text'
                        fullWidth
                        onChange={(e) => {
                            setProject((project) => ({ ...project, name: e.target.value }))
                        }}
                    />

                    <h2 className='mt-8 mb-4 fs-sm'>Type of your project:</h2>
                    <div className='flex'>
                        <label className="mb-4 mr-6 inline-block">
                            <input type="radio" name="type" value={PROJECT_TYPE.LANDING} defaultChecked id="1" onChange={(e) => { setProject((project) => ({ ...project, type: Number(e.target.value) })) }} />
                            <img src="https://moosend.com/wp-content/uploads/2019/03/Lemon-Squeezy-landing-page-example.png" alt="Option 1" width={268} />
                            <div className="text-center mt-2 fs-sm">Landing</div>
                        </label>

                        <label className="mb-4 inline-block">
                            <input type="radio" name="type" value={PROJECT_TYPE.CMS} id="2" onChange={(e) => setProject((project) => ({ ...project, type: Number(e.target.value) }))} />
                            <img src="https://images04.nicepage.com/feature/583347/blog-category.jpg" alt="Option 1" width={240} />
                            <div className="text-center mt-2 fs-sm">Blog</div>
                        </label>
                    </div>

                </DialogContent>
                <DialogActions>
                    <MaterialButton
                        onClick={handleCloseDialogNewProject}
                        style={{
                            backgroundColor: _var.redColor,
                            color: _var.whiteColor,
                            padding: '6px',
                            borderRadius: '6px',
                            margin: '10px 0 10px 0',
                        }}
                    >
                        Cancel
                    </MaterialButton>
                    <MaterialButton
                        onClick={handleAddNewProject}
                        style={{
                            backgroundColor: _var.greenColor,
                            color: _var.whiteColor,
                            padding: '6px',
                            borderRadius: '6px',
                            margin: '10px 14px 10px 10px',
                        }}
                    >
                        Done
                    </MaterialButton>
                </DialogActions>
            </Dialog>

        </div>
    )
}
