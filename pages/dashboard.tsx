import { useEffect, useState } from 'react'
import Logo from 'public/images/logo.png';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';
import ProjectsTable from 'components/projects-table';
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
import userService, { PROJECT, PROJECT_TYPE } from 'services/user';
import toastMessage from 'display/utils/toast';
import { useRouter } from 'next/router';
import AvatarZone from 'components/avatar-zone';
import { UserInfo } from 'pages';
import { FormTextField } from 'components/form-text-field';
import { useForm } from 'react-hook-form';
import { useEffectOnce } from '@libs/utils';
export default function DashBoard() {
    const [openDialogNewProject, setOpenModalNewProject] = useState(false);
    const [user, setUser] = useState<UserInfo>();
    const [projects, setProjects] = useState<PROJECT[]>();

    let userToken = '';
    if (typeof window !== 'undefined') {
        userToken = localStorage?.getItem('buildify-token');
    }
    const { control, handleSubmit } = useForm({ mode: "onChange" });

    const [project, setProject] = useState({
        name: '',
        type: PROJECT_TYPE.LANDING,
    });
    const router = useRouter();

    const handleClickOpenDialogNewProject = () => {
        setOpenModalNewProject(true);
    };
    const handleCloseDialogNewProject = () => {
        setOpenModalNewProject(false);
    };
    const handleAddNewProject = (_) => {
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

    useEffect(() => {
        userService.getInfo().then((resp: UserInfo) => {
            if (resp.username) setUser(resp);
            else setUser({} as UserInfo);
        }).catch((err) => {
            console.log(err);
            setUser({} as UserInfo);
        });
    }, [userToken]);

    useEffectOnce(() => {
        userService.getListProject().then(resp => {
            if (resp.projects) {
                setProjects(resp.projects);
            } else toastMessage.error('Something went wrong, please try again later');
        }).catch((err) => {
            console.log(err);
            toastMessage.error('Something went wrong, please try again later');
        });
    })
    return (
        <div className="min-h-screen transition w-full px-32 pb-4">
            <div className='items-end flex w-full pl-4 justify-between py-4' style={{ borderBottom: '1px solid rgba(51,48,60,.12)' }}>
                <a href='/' className='logo-container flex items-center' style={{ width: '200px' }}>
                    <Image className='header-logo' src={Logo} alt='Our Logo' height={50} width={50} />
                    <span className='self-center text-xl font-bold whitespace-nowrap ml-2 text-indigo-500'>Buildify</span>
                </a>
                {user?.username && <AvatarZone menuId="dashboard-account-menu" classNameAvt='avt-dashboard' user={user} />}
            </div>
            <div>
                <div className='flex justify-between pt-4'>
                    <h2 className='text-3xl' >My projects</h2>
                    <Button className='btn btn-primary' variant="contained" style={{ color: _var.whiteColor, padding: '8px 16px', backgroundColor: _var.blueDarkColor, paddingLeft: 8 }} color='secondary' onClick={handleClickOpenDialogNewProject}><AddIcon /> <span style={{ marginLeft: 4, textTransform: "capitalize" }}>{' '} New project</span></Button>
                </div>
                <div className='mt-8'>
                    {projects && <ProjectsTable projects={projects} />}
                </div>
            </div>


            <Dialog id="dialog-new-project" open={openDialogNewProject} onClose={handleCloseDialogNewProject} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Project Information</DialogTitle>
                <DialogContent style={{ width: 600 }}>
                    <DialogContentText style={{ fontSize: 14 }}>Your project name must be unique</DialogContentText>
                    <form>
                        <FormTextField
                            name="name"
                            control={control}
                            className="input-project-name"
                            rules={{
                                required: "Project name is required",
                                validate: (value) => (projects?.length === 0 || !projects.find((item) => item.name === value)) || "Project name is already existed"
                            }}
                            margin='dense'
                            label='Name'
                            type='text'
                            fullWidth
                            onChange={(e) => {
                                setProject((project) => ({ ...project, name: e.target.value }))
                            }}
                        />
                    </form>

                    <h2 className='mt-8 mb-4 fs-sm'>Type of your project:</h2>
                    <div className='flex'>
                        <label className="mb-4 mr-6 inline-block">
                            <input type="radio" name="type" value={PROJECT_TYPE.LANDING} defaultChecked id="1" onChange={(e) => { setProject((project) => ({ ...project, type: Number(e.target.value) })) }} />
                            <img src="https://img.freepik.com/free-vector/flat-design-ui-ux-landing-page_52683-72187.jpg?w=1800&t=st=1687051597~exp=1687052197~hmac=2b039fc892970cf34e1945633b216b0e064272a92575e48066f23d809e22436b" alt="Option 1" width={268} />
                            <div className="text-center mt-2 fs-sm">Landing</div>
                        </label>

                        <label className="mb-4 inline-block">
                            <input type="radio" name="type" value={PROJECT_TYPE.CMS} id="2" onChange={(e) => setProject((project) => ({ ...project, type: Number(e.target.value) }))} />
                            <img src="https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?w=1480&t=st=1687051773~exp=1687052373~hmac=934a898267829352164c2ce7cb428eb10bcf5b1fe7ce7ebb4ab50e148a312456" alt="Option 1" width={240} />
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
                        onClick={handleSubmit(handleAddNewProject)}
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
